---
hide_table_of_contents: true
---

# Unsandboxed extensions

import {ExtensionCode} from './utils.js';

Let's make an unsandboxed extension.

## URL requirement

Extensions loaded from URLs that start with these *exactly* will be treated as unsandboxed, and all others will be sandboxed:

 - `https://extensions.turbowarp.org/`
 - `http://localhost:8000/`

As you don't have control over extensions.turbowarp.org, you will have to use the latter option. For this, you will *need* a local HTTP server running on port 8000 *exactly*. Up until this point we've suggested using a different port, but now that we're going to make real unsandboxed extensions, it's time to make this change.

## Syntax

The syntax for unsandboxed extensions is very familiar, but has some differences. Technically, if you just copy and paste your old sandboxed extensions as unsandboxed extensions, everything will *just work*. However, this is dangerous and is likely to cause bugs later when multiple unsandboxed extensions are loaded.

As such, if your sandboxed extension has code like like this:

```js
// Old sandboxed extensions (worker or <iframe> sandbox):
class MyExtension {
  getInfo () {
    return { /* ... */ };
  }
}
Scratch.extensions.register(new MyExtension());
```

Or if your extension uses an old "plugin"-based unsandboxed extension mechanism, such as (if you don't recognize this code then ignore it -- it doesn't apply to you):

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

The issue this template resolves is what happens when two extensions both try to define a variable, class, or function with the same name. My requiring everything to be defined in an [immediately-invoked-function-expression (IIFE)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) and enabling [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode), we prevent variables from accidentally leaking to the global scope, thus resolving this issue.

*All* functions and variables defined by the extension must be defined within the IIFE. Additionally, each extension must make sure to use its own personal copy of the `Scratch` API, which this template will do automatically.

Something neat about this format is that the unsandboxed extension format is backwards compatible with sandboxed extensions. As long as the extension doesn't use any of the features given to unsandboxed extensions, it will continue to work exactly the same as a sandboxed extension.

## A more complete example

Here you can see a complete unsandboxed extension:

<ExtensionCode title="unsandboxed/hello-world-unsandboxed">{require("!raw-loader!@site/static/example-extensions/unsandboxed/hello-world-unsandboxed.js")}</ExtensionCode>

Save this so that you can access it with your local HTTP server, then load http://localhost:8000/hello-world-unsandboxed.js in TurboWarp. If nothing appears, see the developer console. If you see an error that the extension must be run unsandboxed, most likely you are using an old version of TurboWarp or you didn't load it from a URL that starts with `http://localhost:8000/` exactly. 127.0.0.1 and 0.0.0.0 won't work! It must be localhost, port 8000 exactly.

Create a new empty project with a repeat (30) loop that adds the "hello" block to a list. Notice that it now runs instantly while the sandboxed version would've taken at least a second.

Observe that the majority of the code is still identical: You still create a class, then call Scratch.extensions.register(), then Scratch calls getInfo() which returns the same type of object.

## Increased power brings increased responsibility

Before we talk about the new APIs, we want to note some additional requirements for unsandboxed extensions:

 - Blocks must not throw errors. While sandboxed extensions were okay to, unsandboxed extensions that do this may break scripts.
 - Input and boolean blocks must return a valid value. While sandboxed extensions are free to neglect this, unsandboxed extensions that don't return proper values (string, number, or boolean) can break scripts in unknown ways.

## Accessing Scratch internals

The big thing that unsandboxed extensions can do is directly access Scratch internals.

```js
  const vm = Scratch.vm;
```

That's it -- that's full access to the actual Scratch VM object. You can really do whatever you want at this point.

Dig around a while to find what you're looking for. Your developer tools will be immensley useful as you can access `Scratch` from there after an extension is loaded, or use the other [debugging global variables](../globals) that are available (but please don't use those in extensions). You may find the [scratch-vm source code](https://github.com/TurboWarp/scratch-vm/) or [@turbowarp/types](https://github.com/turboWarp/types) to be useful resources.

<ExtensionCode title="unsandboxed/turbo-mode">{require("!raw-loader!@site/static/example-extensions/unsandboxed/turbo-mode.js")}</ExtensionCode>

This is an unsandboxed extension that allows controlling turbo mode, similar to the "runtime options" extension on https://extensions.turbowarp.org/.

## The block utility object

We now introduce the second argument passed to block functions: BlockUtility. When a sprite uses a sandboxed custom extension, the block doesn't even know who is executing it.

This is what the the BlockUtility object conventionally called "util" resolves. The current sprite can be accessed with `util.target`. Similar to the VM, this is the actual object used internally. You have full access to it.

<ExtensionCode title="unsandboxed/block-utility-examples">{require("!raw-loader!@site/static/example-extensions/unsandboxed/block-utility-examples.js")}</ExtensionCode>

## Common templates

Some common code templates to copy and paste at the start of unsandboxed extensions depending on how the extension works.

If the extension MUST be run unsandboxed:

```js
  if (!Scratch.extensions.unsandboxed) {
    throw new Error('Extension Name must run unsandboxed');
  }
```

If the extension does not work in the [packager](https://packager.turbowarp.org/):

```js
  if (typeof scaffolding !== 'undefined') {
    throw new Error('Extension Name does not support the packager');
  }
```

## Exercises

1. Create a block that presses the green flag. (Hint: What is `vm.greenFlag`?)
1. Create a block that returns the name of the sprite.

## Next steps

Let's suppose you have an extension you want to share with the world. [How do you do that?](./share)
