---
hide_table_of_contents: true
---

# Unsandboxed extensions

import {ExtensionCode, Spoiler} from './utils.js';

Unsandboxed extensions run as plain `<script>` tags in the main window rather than in a sandbox. They have access to a lot of new powers and responsibilities that we will discuss below.

## URL restrictions

To protect users from malicious extensions, extensions loaded from URLs will only run unsandboxed if their URL begins with one of these *exactly*:

 - `https://extensions.turbowarp.org/`
 - `http://localhost:8000/`

Additionally, **the server must support [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)**. It is likely the development server you're using does not support CORS by default. Until we introduce our development server on the next stage, it may be easiest to just manually load extensions as text or files as doing so lets you run them without the sandbox.

## Syntax

The syntax for unsandboxed extensions is exactly the same as sandboxed extensions:

```js
class MyExtension {
  getInfo () {
    return { /* ... */ };
  }
}
Scratch.extensions.register(new MyExtension());
```

:::info
Previously there was a lot of required boilerplate, but this is no longer the case. The boilerplate will not cause issues, so you don't need to remove it if you already have it.
:::

Do note that your script will run be run as an async function, so you can use `await` if you want to. This also means that, by default, `var x = 3;` will not create a global variable; rather it will be scoped to the function. Unsandboxed extensions really should not be creating global variables anyways, so this is a good thing.

## A more complete example

Here you can see a complete unsandboxed extension:

<ExtensionCode title="unsandboxed/hello-world-unsandboxed" sandbox={false}>{require("!raw-loader!@site/static/example-extensions/unsandboxed/hello-world-unsandboxed.js")}</ExtensionCode>

If you're using a local HTTP server, save this so you can access it through the server, then load the exact URL [http://localhost:8000/hello-world-unsandboxed.js](http://localhost:8000/hello-world-unsandboxed.js) in TurboWarp. If nothing appears, see the developer console. If you see an error that the extension must be run unsandboxed, most likely you are using an old version of TurboWarp or you didn't load it from a URL that starts with `http://localhost:8000/` exactly. 127.0.0.1 and 0.0.0.0 won't work! It must be localhost, port 8000 exactly.

If you're just using files, make sure to check the "Run extension without sandbox" box each time you load the extension.

Create a new empty project with a repeat (30) loop that adds the "hello" block to a list. Notice that it now runs instantly while the sandboxed version would've taken at least a second.

Observe that the majority of the code is still identical: You still create a class, then call Scratch.extensions.register(), then Scratch calls getInfo() which returns the same type of object. Just the surrounding template is different.

## Increased power brings increased responsibility

Before we talk about the new APIs, we want to note some additional requirements for unsandboxed extensions:

 - Blocks must not throw errors. While sandboxed extensions could, unsandboxed extensions that do this may break scripts.
 - Input and boolean blocks must return a valid value. While sandboxed extensions are free to neglect this, unsandboxed extensions that don't return proper values (string, number, or boolean) can break scripts in unknown ways.
 - Blocks must not get stuck in infinite loops. While sandboxed extensions will usually not be able to freeze the entire window if they get stuck in a loop, unsandboxed extensions will. This can result in **data loss**.

## Accessing Scratch internals

The big thing that unsandboxed extensions can do is directly access Scratch internals.

```js
const vm = Scratch.vm;
```

That's full access to the actual Scratch VM object. There is a lot you can do with this.

Dig around for a while to find what you're looking for. Your developer tools will be immensely useful as you can access `Scratch` from there after an extension is loaded, or use the other [debugging global variables](../globals) that are available (but please don't use those in extensions). You may find the [scratch-vm source code](https://github.com/TurboWarp/scratch-vm/) or [@turbowarp/types](https://github.com/turboWarp/types) to be useful resources.

Here is an example of an extension that uses Scratch.vm to toggle turbo mode, similar to the "runtime options" extension on [extensions.turbowarp.org](https://extensions.turbowarp.org/):

<ExtensionCode title="unsandboxed/turbo-mode">{require("!raw-loader!@site/static/example-extensions/unsandboxed/turbo-mode.js")}</ExtensionCode>

## The block utility object

When a sandboxed custom extension is run, all it receives are the arguments that the scripts provided. It doesn't even know which sprite is executing it. We now introduce the second argument passed to block functions: BlockUtility.

The BlockUtility object, conventionally called `util`, allows blocks in unsandboxed extensions to get direct access to the sprite that is running them using `util.target`. Similar to the VM, this is the actual object used internally. You have full access to it.

Here is an example extension that demonstrates using `util.target` to get the name of the current sprite or access variables.

<ExtensionCode title="unsandboxed/block-utility-examples">{require("!raw-loader!@site/static/example-extensions/unsandboxed/block-utility-examples.js")}</ExtensionCode>

Note that every sprite, script, and block shares the same block utility object. Instead of making a object each time your block runs, it just updates the properties of the shared object for performance. Thus, the only safe time to access `util` is immediately when the block runs. Trying to access `util` in a setTimeout, setInterval, Promise callback, or other non-syncronous callback will not work correctly. If you need to access properties from `util` later, save them in a variable ahead of time.

```js
  // This is NOT reliable and may alert the wrong thing:
  myBlock(args, util) {
    setTimeout(() => {
      alert(util.target.getName());
    }, 1000);
  }

  // This will always work:
  myBlock(args, util) {
    const target = util.target;
    setTimeout(() => {
      alert(target.getName());
    }, 1000);
  }
```

## Common templates

Here are some common copy-and-pasteable code snippets that can be used:

If the extension MUST be run unsandboxed, add this around the start:

```js
  if (!Scratch.extensions.unsandboxed) {
    throw new Error('Extension Name must run unsandboxed');
  }
```

## Permissioned APIs

Whereas sandboxed extensions are free to use APIs such as fetch() as they please, unsandboxed extensions should instead ask for permission before making a request to any remote service. This gives the user control over their privacy. While there is no technical measures enforcing this at runtime, it is required for all extensions on [extensions.turbowarp.org](https://extensions.turbowarp.org).

Requests to some popular services such as [GitHub Pages](https://pages.github.com/) or [GitLab Pages](https://about.gitlab.com/stages-devops-lifecycle/pages/) may be automatically approved, while requests to other random websites may show a prompt to the user. You shouldn't make any assumptions about this, and your code needs to ensure that it can gracefully handle the user rejecting the prompt (the extension should behave the same as it does when there is no internet connection).

These permissioned APIs will also automatically prevent projects from running arbitrary JavaScript by attempting to, for example, redirect to a `javascript:` URL.

### Fetching APIs, WebSockets, images, audio files, etc.

Use `Scratch.fetch(url)` instead of `fetch(url)`. Check `await Scratch.canFetch(url)` before using other APIs that connect to remote websites.

```js
// Do not do this:
const response = await fetch(url);
// Do this instead:
const response = await Scratch.fetch(url);

// Do not do this:
const ws = new WebSocket(url);
// Do this instead:
if (await Scratch.canFetch(url)) {
  const ws = new WebSocket(url);
}

// Do not do this:
const image = new Image();
image.src = src;
// Do this instead:
if (await Scratch.canFetch(url)) {
  const image = new Image();
  image.src = src;
}

// Do not do this:
const audio = new Audio(url);
// Do this instead:
if (await Scratch.canFetch(url)) {
  const audio = new Audio(url);
}
```

### Opening new tabs or windows

Use `Scratch.openWindow(url)` instead of `window.open(url)`. `Scratch.openWindow` always sets the target to `"_blank"` to open a new tab or window. If you can't use `Scratch.openWindow(url)` for some reason, check `await Scratch.canOpenWindow(url)` before calling `window.open(url)`.

```js
// Do not do this:
const win = window.open(url);
// Do this instead:
const win = await Scratch.openWindow(url);

// Do not do this:
const win = window.open(url, '_blank', 'width=400,height=400')
// Do this instead:
const win = await Scratch.openWindow(url, 'width=400,height=400');
```

### Redirecting the current page

Use `Scratch.redirect(url)` instead of `location.href = url`. If you can't use `Scratch.redirect(url)`, check `await Scratch.canRedirect(url)` before running `location.href = url`.

```js
// Do not do this:
location.href = url;
// Do this instead:
await Scratch.redirect(url);
```

## Exercises

We encourage you to try to figure these out without the hints. It will make you much more familiar with how VM internals work.

1. Create a block that presses the green flag. (Hint: <Spoiler>vm.greenFlag</Spoiler>)
1. Create a block that returns the x position of the sprite, similar to the "x position" block. (Hint: <Spoiler>target.x</Spoiler>)
1. Create a block that moves the sprite to the center of the screen, similar to "go to x: 0 y: 0". (Hint: <Spoiler>target.setXY(x, y)</Spoiler>)

## Next steps

Depending on the server you've been using, you might be tired of remembering to hard-reload all of the time. Let's learn about [a better development server](./better-development-server).
