---
hide_table_of_contents: true
---

# What is the sandbox anyways?

There are two types of custom extensions:

 - Sandboxed extensions
 - Unsandboxed extensions

This difference has a significant impact on your extensions. So far we've primarily focused on creating sandboxed extensions, but what does that mean?

## The sandbox

The sandbox is actually an `<iframe>`. Sandboxed extensions are run in a sandboxed cross-origin iframe that can't directly access the main page with the editor and the VM; it's stuck in its own isolated world.

For this reason, sandboxed extensions:

 - Can not access Scratch internals
 - Can not access any part of the project that was not passed in as an argument, including variables
 - Can not directly interact with sprites at all

They can, however:

 - Access most public APIs, as long as [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) allows it
 - Access some JavaScript Web APIs, such as the [Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)

It is worthwhile to note that in other Scratch mods, the extension sandbox may be a `Worker` instead of an `<iframe>`. We use an `<iframe>` instead as it is more secure (cross origin vs. same origin) and allows access to more Web APIs.

And perhaps the biggest limitation of all is that *every* time a block runs, the script will pause for at least 1 frame, regardless of how simple the script is. It doesn't matter whether "run without screen refresh" or turbo mode is enabled. It will always wait.

This is a very significant limitation and it makes custom extensions almost useless, which is why we introduced support for...

## Unsandboxed extensions

As the name implies, unsandboxed extensions do not run in an iframe. They run in the same context as Scratch itself as `<script>` tags.

This means that unsandboxed extensions:

 - CAN access Scratch internals
 - CAN access parts of the project that were not passed in as an argument, such as variables
 - CAN directly interact with any sprite

And perhaps most importantly, running a block from an unsandboxed extension is actually instantaneous -- no forced 1 frame delay.

## Exercises

1. Create a sandboxed extension (same as we've been building so far) with a COMMAND block that does nothing. Create a new empty project and create a repeat (10) loop that runs this block 4 times. Observe that, even though the blocks don't do anything, it takes more than a second for the loop to complete.
1. In the repeat loop, replace the block from the extension with a "set my variable to 0" block instead. Observe that the loop completes instantly. This is how blocks from unsandboxed extensions will behave.
1. Inside a custom extension, use console.log to output the value of `window.origin`. Compare this to running `window.origin` in your browser's developer console on turbowarp.org.

## Next steps

Unsandboxed extensions are clearly better, so [let's write one](./unsandboxed).
