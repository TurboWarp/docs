---
hide_table_of_contents: true
---

# Unsandboxed extensions

import {ExtensionCode, Spoiler} from './utils.js';

Unsandboxed extensions run as plain `<script>` tags in the main window rather than in a sandbox. They have access to a lot of new powers and responsibilities that we will discuss below.

## URL restrictions

Only extensions loaded from URLs that start with these strings *exactly* will be treated as unsandboxed, and all others will be sandboxed:

 - `https://extensions.turbowarp.org/`
 - `http://localhost:8000/`

As you don't have control over extensions.turbowarp.org, you will have to use the latter option. For this, you will *need* a local HTTP server running on port 8000 *exactly*.

Up until this point we've suggested using a port other than 8000, but now that we're going to write extensions without the sandbox, you should start using **port 8000 exactly.**

## Syntax

The syntax for unsandboxed extensions is very familiar, but has some differences. Technically, if you just copy and paste your old sandboxed extensions as unsandboxed extensions, it will appear to just work. However, this is dangerous and is likely to cause bugs later.

If your sandboxed extension has code like like this:

```js
// Old sandboxed extensions (worker or <iframe> sandbox):
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

The unsandboxed version would have code like this:

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

Using this templates prevents unsandboxed extensions from interfering with each other when they try to define variables, classes, or functions with the same name. By requiring everything to be defined in an [immediately-invoked-function-expression (IIFE)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) and enabling [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode), we prevent variables from accidentally leaking to the global scope.

*All* functions and variables defined by the extension must be defined within the IIFE. Additionally, each extension must make sure to use its own personal copy of the `Scratch` API, which this template does automatically.

An interesting thing to note about this template is that it is backwards compatible with sandboxed extensions. As long as the extension doesn't use any of the features given to unsandboxed extensions, it will continue to work exactly the same as a sandboxed extension.

## A more complete example

Here you can see a complete unsandboxed extension:

<ExtensionCode title="unsandboxed/hello-world-unsandboxed" sandbox={false}>{require("!raw-loader!@site/static/example-extensions/unsandboxed/hello-world-unsandboxed.js")}</ExtensionCode>

Save this so that you can access it with your local HTTP server, then load the exact URL [http://localhost:8000/hello-world-unsandboxed.js](http://localhost:8000/hello-world-unsandboxed.js) in TurboWarp. If nothing appears, see the developer console. If you see an error that the extension must be run unsandboxed, most likely you are using an old version of TurboWarp or you didn't load it from a URL that starts with `http://localhost:8000/` exactly. 127.0.0.1 and 0.0.0.0 won't work! It must be localhost, port 8000 exactly.

Create a new empty project with a repeat (30) loop that adds the "hello" block to a list. Notice that it now runs instantly while the sandboxed version would've taken at least a second.

Observe that the majority of the code is still identical: You still create a class, then call Scratch.extensions.register(), then Scratch calls getInfo() which returns the same type of object. Just the surrounding template is different.

## Increased power brings increased responsibility

Before we talk about the new APIs, we want to note some additional requirements for unsandboxed extensions:

 - Blocks must not throw errors. While sandboxed extensions were okay to, unsandboxed extensions that do this may break scripts.
 - Input and boolean blocks must return a valid value. While sandboxed extensions are free to neglect this, unsandboxed extensions that don't return proper values (string, number, or boolean) can break scripts in unknown ways.
 - Blocks must not get stuck in infinite loops. While sandboxed extensions will usually not be able to freeze the entire window if they get stuck in a loop, unsandboxed extensions will. This can result in **data loss**.

## Accessing Scratch internals

The big thing that unsandboxed extensions can do is directly access Scratch internals.

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

Dig around a while to find what you're looking for. Your developer tools will be immensley useful as you can access `Scratch` from there after an extension is loaded, or use the other [debugging global variables](../globals) that are available (but please don't use those in extensions). You may find the [scratch-vm source code](https://github.com/TurboWarp/scratch-vm/) or [@turbowarp/types](https://github.com/turboWarp/types) to be useful resources.

Here is an example of an extension that uses Scratch.vm to toggle turbo mode, similar to the "runtime options" extension on [extensions.turbowarp.org](https://extensions.turbowarp.org/):

<ExtensionCode title="unsandboxed/turbo-mode">{require("!raw-loader!@site/static/example-extensions/unsandboxed/turbo-mode.js")}</ExtensionCode>

## The block utility object

When a sandboxed custom extension is run, all it receives is the arguments that the scripts provide. It doesn't even know which sprite is executing it. We now introduce the second argument passed to block functions: BlockUtility.

The BlockUtility object, conventionally called `util`, allows blocks in unsandboxed extensions to get direct access to the sprite that is running them using `util.target`. Similar to the VM, this is the actual object used internally. You have full access to it.

Here is an example extension that demonstrates using `util.target` to get the name of the current sprite or access variables.

<ExtensionCode title="unsandboxed/block-utility-examples">{require("!raw-loader!@site/static/example-extensions/unsandboxed/block-utility-examples.js")}</ExtensionCode>

## Common templates

Here are some common copy-and-pasteable code snippets that can be used:

If the extension MUST be run unsandboxed, add this around the start:

```js
  if (!Scratch.extensions.unsandboxed) {
    throw new Error('Extension Name must run unsandboxed');
  }
```

## Exercises

We encourage you to try to figure these out without the hints. It will make you much more familiar with how VM internals work.

1. Create a block that presses the green flag. (Hint: <Spoiler>vm.greenFlag</Spoiler>)
1. Create a block that returns the x position of the sprite, similar to the "x position" block. (Hint: <Spoiler>target.x</Spoiler>)
1. Create a block that moves the sprite to the center of the screen, similar to "go to x: 0 y: 0". (Hint: <Spoiler>target.setXY(x, y)</Spoiler>)

## Next steps

Let's suppose you have an extension you want to share with the world. [How do you do that?](./share)
