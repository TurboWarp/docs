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

We've designed the API to be similar to the existing custom extension API. In fact, your existing custom extension will probably just work as an unsandboxed extension. However, because extensions run in a `<script>` tag rather than an `<iframe>`, we will require that extensions on extensions.turbowarp.org use this format:

```js
// OLD:
class MyExtension {
  getInfo () {
    return { /* ... */ };
  }
}
Scratch.extensions.register(new MyExtension());

// NEW:
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

Using an immediately-invoked-function-expression (IIFE) and `'use strict'` prevents your variables from accidentally leaking to the global scope. This will prevent errors when two different extensions try to define a `MyExtension` class. Additionally, each extension gets its own copy of the `Scratch` API (Theoretically you could have two different VMs on the same page, although this typicaly doesn't happen in practice), and using an IIFE like this means that the global one can change without affecting each extension's individual instance. Also, extensions written like this can still be loaded as sandboxed extensions, so nothing is lost.

getInfo() and everything like that is the exact same as sandboxed extensions.

## New functionality

Because the sandbox no longer exists, unsandboxed extensions have a few notable advantages:

 - Blocks will be run instantly, without the forced 1 frame delay that sandboxed extensions suffer
 - The extension has full access to the VM internals (elaboration below)

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

Some older "unsandboxed extensions" worked by calling the extension registration functions directly on `window.vm`. Unsandboxed extensions as described in this document MUST NOT use that API. All extensions must be registered through `Scratch.extensions.register`.
