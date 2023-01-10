---
slug: /development/unsandboxed-extensions
hide_table_of_contents: true
---

# Unsandboxed extensions

TurboWarp now supports unsandboxed extensions.

## Limitations

Custom extensions from these domains will be run unsandboxed:

 - `https://extensions.turbowarp.org/`
 - `http://localhost:8000/`

For development, start a local HTTP server on port 8000. If you have Python installed, this can be as simple as `python3 -m http.server`.

All other extensions will be loaded with the sandbox, same as before.

## Syntax

The new unsandboxed extension API is similar to existing custom extension APIs. In fact, your existing custom extension will probably mostly work as an unsandboxed extension even if you make no changes. However, to ensure that your extension integrates properly, we require a certain syntax:

```js
// Old sandboxed extensions (worker or <iframe> sandbox):
class MyExtension {
  getInfo () {
    return { /* ... */ };
  }
}
Scratch.extensions.register(new MyExtension());

// Old unsandboxed extensions or "plugins":
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

// New format for unsandboxed extensions:
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

Unlike sandboxed extensions, unsandboxed extensions all run with the same global scope. To ensure that extensions don't break each other when they define variables with the same name, we require an [immediately-invoked-function-expression (IIFE)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) and [`'use strict'`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode).

*All* functions and variables defined by the extension must be defined within the IIFE. Additionally, each extension must make sure to use its own copy of the `Scratch` API, which the IIFE template above will do automatically.

For extensions that were previously sandboxed extensions, this is a backwards compatible change. Extensions written in the new unsandboxed extension format can still work as sandboxed extensions if they don't use any of the advanced features available to unsandboxed extensions.

getInfo() and everything like that is the same as sandboxed extensions.

## New functionality

By removing the sandbox, unsandboxed extensions have greatly improved capabilities:

 - Blocks can run instantly, without the forced 1 frame delay for sandboxed extensions
 - The extension has full access to nearly all VM internals

They also have some increased responsibilities:

 - Blocks MUST NOT throw errors or return promises that reject. While sandboxed extensions are okay to, unsandboxed extensions that do this will break scripts.
 - Input and boolean blocks MUST ALWAYS return a valid value. While sandboxed extensions are free to neglect this, unsandboxed extensions that don't return values could break things in unknown ways, including *corrupting projects*.

The big thing is that extensions can access the VM like so:

```js
const vm = Scratch.vm;
```

Theoretically you can also access all of the [globals](./globals), but we'd prefer you stick to `Scratch.*` for portability.

Once you have the vm, you can really do whatever you want. As an example, this would enable turbo mode:

```js
vm.setTurboMode(true)
```

Dig around a while to find what you're looking for. You may find the [scratch-vm source code](https://github.com/TurboWarp/scratch-vm/) or [@turbowarp/types](https://github.com/turboWarp/types) to be useful resources. If you set up the TurboWarp/extensions repository completely, you get type completions for large chunks of the API by default.

If your extension uses APIs only available to unsandboxed extensions, you should add this to the start somewhere to make it easier for people to figure out why the extension doesn't work if it is loaded as a sandboxed extension:

```js
if (!Scratch.extensions.unsandboxed) {
  throw new Error('MyExtension must be run unsandboxed');
}
```

If your extension does not work in the [packager](https://packager.turbowarp.org) for any reason, add this to the start:

```js
if (typeof scaffolding !== 'undefined') {
  throw new Error('MyExtension does not support the packager');
}
```

Some older "unsandboxed extensions" worked by calling the extension registration functions directly on `window.vm`. Unsandboxed extensions as described in this document MUST NOT use that API. All extensions must be registered through `Scratch.extensions.register`.
