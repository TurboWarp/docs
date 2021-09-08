---
slug: /blocks
hide_table_of_contents: true
---

# TurboWarp Blocks

TurboWarp has a section of blocks that allows you to use certain features previously not accessible to Scratch projects.

:::note
These blocks are **incompatible** with Scratch. Projects that using them **can not** be uploaded to the Scratch website. The only exception to this is "is compiled?", which will work perfectly fine in Scratch (it's not actually a hacked or modded block; you can obtain it using an unmodified Scratch editor)

If you don't use any TurboWarp-exclusive blocks, then there should be no issue with making your project in TurboWarp and uploading it to Scratch. (it will just look like a project made with the offline editor)
:::

## last key pressed {#last-key-pressed}

![last key pressed](./assets/last-key-pressed.svg)

It tells you the last key that was pressed. It's intended to be used something like this:

![when any key pressed, do something with last key pressed](./assets/how-to-use-last-key-pressed.svg)

## mouse button down? {#mouse-button-down}

![primary mouse button down?](./assets/mouse-button-down.svg)

It's like "mouse down?" but lets you check each individual button. Keep in mind that due to how Scratch interprets mouse input, it's possible for a block like "is primary mouse button down?" to report true while the standard "mouse down?" reports false.

 * (0) primary is usually left
 * (1) middle is usually scroll wheel
 * (2) secondary is usually right (running this block once will disable right click on the stage)

The "Debugger" Addon adds the following blocks:

![image](https://user-images.githubusercontent.com/50552317/132577403-0d6fa7a0-17ea-4c00-ab1b-f091455964c0.png)

It pauses the project.

![image](https://user-images.githubusercontent.com/50552317/132577532-e22b8e58-20cb-4814-b319-86e31ca3dd74.png)

It prints something to the log. You can open the log with the button next to the fullscreen button.

![image](https://user-images.githubusercontent.com/50552317/132577928-5e30cf06-b8e5-4b4e-8046-723a69d7dfaf.png)

It prints a warning to the log.

![image](https://user-images.githubusercontent.com/50552317/132578191-d5596473-ba71-4bf5-9588-6629c430e2a7.png)

It prints an error message to the log.

The Debugger blocks are compatible with Scratch, but they will work only on TurboWarp or with [Scratch Addons](https://scratchaddons.com) enabled.
