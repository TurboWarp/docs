---
slug: /development/scratchx
hide_table_of_contents: true
---

# ScratchX & TurboWarp

TurboWarp now has primitive support for using [ScratchX](https://scratchx.org) extensions and loading ScratchX projects (.sbx).

ScratchX was a modified version of Scratch 2 created by the Scratch Team that allowed using unofficial extensions. ScratchX no longer functions due to Flash being removed from all major browsers, but the website, scratchx.org, is still up.

To use a ScratchX extension in TurboWarp, find the URL to the extension's JavaScript source code and load it as you would any other [custom extension](/development/custom-extensions).

You can find the extension URL on the extension's website or by looking at the scratchx.org URL. For example, the URL to load for `http://scratchx.org/?url=http://khanning.github.io/scratch-weather-extension/weather_extension.js` is `http://khanning.github.io/scratch-weather-extension/weather_extension.js`.

## Important limitations {#limitations}

 - Anything related to hardware will not work. This means an overwhelming majority of extensions on scratchx.org will not work.
 - ScratchX extensions still run in the extension sandbox. This means things like the 3D extension on scratchx.org will not work.
 - ScratchX support in the packager is worse in general.
 - When loading a .sbx file, you must manually load the extensions first or you will get an error.
 - This feature is highly experimental and will be subject to change.
