---
slug: /development/unsandboxed-extensions
hide_table_of_contents: true
---

# Unsandboxed extensions

A TurboWarp experiment adds support for unsandboxed custom extensions.

:::warning
Unsandboxed extensions are an early prototype. This page is a draft.
:::

Test the experiment here: https://experiments.turbowarp.org/unsandboxed-extensions/

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

Using an immediately-invoked-function-expression (IIFE) and 'use strict' prevents your variables from accidentally leaking to the global scope. This will prevent errors when two different extensions try to define a `MyExtension` class. Additionally, each extension gets its own copy of the `Scratch` API, and using an IIFE like this means that the global one can change without affecting each extension's individual version. This new format also does not break compatibility with the old way of running extensions, so there really isn't anything to lose.

getInfo() and everything like that is the exact same as sandboxed extensions.

## New functionality

Because the sandbox no longer exists, unsandboxed extensions have a few notable advantages:

 - Blocks will be run instantly, without the forced 1 frame delay that sandboxed extensions suffer
 - The extension has full access to the VM internals (elaboration below)

The big thing is that extensions can access the VM like so:

```js
const vm = Scratch.vm;
```

Theoretically you can also access all of the [globals](./globals), but we'd prefer you stick to `Scratch.*`.

Once you have the vm, you can really do whatever you want. As an example, this would enable turbo mode:

```js
vm.setTurboMode(true)
```

Dig around a while to find what you're looking for.

If your extension uses APIs only available to unsandboxed extensions, you should add this to the start somewhere to make it easier for people to figure out why the extension doesn't work if it is loaded as a sandboxed extension:

```js
if (!Scratch.extensions.unsandboxed) {
  throw new Error('MyExtension must be run unsandboxed');
}
```
