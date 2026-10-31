---
hide_table_of_contents: true
---

# Unsandboxed extensions

import {ExtensionCode, Spoiler} from './utils.js';

All custom extensions in TurboWarp run unsandboxed: as plain `<script>` tags in the main window, with full access to the page. This gives them a lot of powers and responsibilities that we will discuss below.

## Loading extensions and permission prompts

Because extensions have full access to the page, a malicious extension could corrupt projects, delete settings, phish for passwords, and more. To protect users:

 - The custom extension menu warns users to only load extensions from authors they trust. Extensions loaded by URL, file, or pasted code all behave the same.
 - When a project contains extensions, TurboWarp shows a single prompt listing all of the ones that aren't from a trusted URL: URLs are shown as URLs, and extensions embedded in the project are shown as embedded code that the user can view. If the user allows them, they are all loaded. If the user denies them, the project will not load.

Extensions whose URL begins with one of these *exactly* are trusted and load automatically without a prompt:

 - `https://extensions.turbowarp.org/`
 - `http://localhost:8000/` (for development)

Extensions that the user approved in a prompt or loaded manually are remembered for the rest of the session, so they won't cause another prompt.

During development, running your local HTTP server on port 8000 avoids these prompts. It must be `localhost`, port 8000 exactly: `127.0.0.1` and `0.0.0.0` don't count.

## Syntax

The extensions we've written so far define everything at the top level of the script. Because every extension runs directly on the page, this will appear to just work. However, this is dangerous and is likely to cause bugs later.

If your extension has code like this, which is how extensions written for the old sandbox usually looked:

```js
// Code that defines everything at the top level:
class MyExtension {
  getInfo () {
    return { /* ... */ };
  }
}
Scratch.extensions.register(new MyExtension());
```

Or if your extension uses an old "plugin" mechanism, such as this one: (if you don't recognize this code then don't worry about it)

```js
class MyExtension {
  getInfo () {
    return { /* ... */ };
  }
}
(function() {
  var extensionInstance = new MyExtension(window.vm.extensionManager.runtime)
  var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
  window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})();
```

It should instead have code like this:

```js
(function(Scratch) {
  'use strict';
  class MyExtension {
    getInfo () {
      return { /* ... */ };
    }
  }
  Scratch.extensions.register(new MyExtension());
})(Scratch);
```

Using this template prevents unsandboxed extensions from interfering with each other when they try to define variables, classes, or functions with the same name. By requiring everything to be defined in an [immediately-invoked-function-expression (IIFE)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) and enabling [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode), we prevent variables from accidentally leaking to the global scope.

*All* functions and variables defined by the extension must be defined within the IIFE. Additionally, each extension must make sure to use its own personal copy of the `Scratch` API, which this template does automatically.

## A more complete example

Here you can see a complete unsandboxed extension:

<ExtensionCode title="unsandboxed/hello-world-unsandboxed">{require("!raw-loader!@site/static/example-extensions/unsandboxed/hello-world-unsandboxed.js")}</ExtensionCode>

Load this extension the same way you've been loading your other extensions. If nothing appears, see the developer console. If you see an error that the extension must be run unsandboxed, you are most likely using an old version of TurboWarp that still had the sandbox.

Create a new empty project with a repeat (30) loop that adds the "hello" block to a list. Notice that it runs instantly.

Observe that the majority of the code is still identical: You still create a class, then call Scratch.extensions.register(), then Scratch calls getInfo() which returns the same type of object. Just the surrounding template is different.

## Increased power brings increased responsibility

Before we talk about the new APIs, we want to note some requirements that come from running directly on the page:

 - Blocks must not throw errors. Extensions that do this may break scripts.
 - Input and boolean blocks must return a valid value. Extensions that don't return proper values (string, number, or boolean) can break scripts in unknown ways.
 - Blocks must not get stuck in infinite loops. An extension that gets stuck in a loop will freeze the entire window. This can result in **data loss**.

## Accessing Scratch internals

The biggest thing that this access allows extensions to do is directly access Scratch internals.

```js
  const vm = Scratch.vm;
```

That's full access to the actual Scratch VM object. There is a lot you can do with this.

Remember -- every variable declaration must happen *inside* the IIFE.

```js
// GOOD CODE
(function(Scratch) {
  const vm = Scratch.vm;
  // ...
}(Scratch));

// BAD CODE
const vm = Scratch.vm;
(function(Scratch) {
  // ...
}(Scratch));
```

Dig around for a while to find what you're looking for. Your developer tools will be immensely useful as you can access `Scratch` from there after an extension is loaded, or use the other [debugging global variables](../globals) that are available (but please don't use those in extensions). You may find the [scratch-vm source code](https://github.com/TurboWarp/scratch-vm/) or [@turbowarp/types](https://github.com/turboWarp/types) to be useful resources.

Here is an example of an extension that uses Scratch.vm to toggle turbo mode, similar to the "runtime options" extension on [extensions.turbowarp.org](https://extensions.turbowarp.org/):

<ExtensionCode title="unsandboxed/turbo-mode">{require("!raw-loader!@site/static/example-extensions/unsandboxed/turbo-mode.js")}</ExtensionCode>

## The block utility object

So far, our blocks have only used the arguments that the scripts provided. They don't even know which sprite is executing them. We now introduce the second argument passed to block functions: BlockUtility.

The BlockUtility object, conventionally called `util`, allows blocks to get direct access to the sprite that is running them using `util.target`. Similar to the VM, this is the actual object used internally. You have full access to it.

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

Old versions of TurboWarp and some other Scratch mods may still run extensions in a sandbox. If the extension MUST be run unsandboxed, add this around the start so that it fails with a clear error in those environments instead of breaking in confusing ways:

```js
  if (!Scratch.extensions.unsandboxed) {
    throw new Error('Extension Name must run unsandboxed');
  }
```

If you're using the `vm`, `runtime` or `Cast` APIs a lot, common practise is to define them around the start to save time:

```js
  const vm = Scratch.vm;
  const runtime = vm.runtime;
  const Cast = Scratch.Cast; // Discussed later.
```

## Permissioned APIs

Instead of using APIs such as fetch() directly, extensions should ask for permission before making a request to any remote service. This gives the user control over their privacy. While there are no technical measures enforcing this at runtime, it is required for all extensions on [extensions.turbowarp.org](https://extensions.turbowarp.org).

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
if (await Scratch.canFetch(src)) {
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
