---
hide_table_of_contents: true
---

# What happened to the sandbox?

Older versions of TurboWarp had two types of custom extensions:

 - Sandboxed extensions, which ran in an isolated `<iframe>` that couldn't directly access the editor or the VM
 - Unsandboxed extensions, which ran in the same context as Scratch itself as `<script>` tags

Sandboxed extensions couldn't access Scratch internals, couldn't access any part of the project that wasn't passed in as an argument, and couldn't directly interact with sprites. Every time one of their blocks ran, the script would also pause for at least 1 frame, no matter how simple the block was. Very few useful extensions could work within those limits, and the sandbox kept causing problems, so it has been removed.

**All custom extensions in TurboWarp now run unsandboxed.** Every extension, whether it is loaded from a URL, a file, or pasted code, runs directly on the page with full access to it. That includes the extensions you've written so far in this tutorial.

This means that extensions:

 - CAN access Scratch internals
 - CAN access parts of the project that were not passed in as an argument, such as variables
 - CAN directly interact with any sprite
 - Run their blocks instantly, without a forced 1 frame delay

Some older guides and other Scratch mods still talk about sandboxed extensions, which in other mods may run in a `Worker` instead of an `<iframe>`. In TurboWarp, you can ignore that distinction.

## Exercises

1. Create an extension with a COMMAND block that does nothing. Create a new empty project and create a repeat (10) loop that runs this block 4 times. Observe that the loop completes instantly, just like it would with a built-in block such as "set my variable to 0".
1. Inside a custom extension, use console.log to output the value of `window.origin`. Compare this to running `window.origin` in your browser's developer console on turbowarp.org.

## Next steps

Full access to the page brings new powers and new responsibilities, so [let's learn about them](./unsandboxed).
