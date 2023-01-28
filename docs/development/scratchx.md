---
slug: /development/scratchx
hide_table_of_contents: true
---

# ScratchX & TurboWarp

TurboWarp now has primitive support for using [ScratchX](https://scratchx.org) extensions and loading ScratchX projects (.sbx).

ScratchX was a modified version of Scratch 2 created by the Scratch Team that allowed using unofficial extensions. ScratchX no longer functions due to Flash being removed from all major browsers, but the website, scratchx.org, is still accessible.

To use a ScratchX extension in TurboWarp, find the URL to the extension's JavaScript source code and load it as you would any other [custom extension](/development/custom-extensions). In most cases you can copy the extension's scratchx.org link and we will parse the URL for you.

## Important limitations {#limitations}

 - Anything related to hardware will not work. This means an overwhelming majority of extensions on scratchx.org will not work.
 - ScratchX extensions run in the extension sandbox. This means things like the 3D extension on scratchx.org will not work.
