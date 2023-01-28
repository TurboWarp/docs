---
slug: /development/globals
hide_table_of_contents: true
---

# Globals

Global variables that can be accessed using the developer console, for convenience.

These can not be used in sandboxed custom extensions and should not be used in unsandboxed custom extensions.

## `vm`

Refers to the [scratch-vm](https://github.com/TurboWarp/scratch-vm) instance.

## `ScratchBlocks`

Refers to the *real* [scratch-blocks](https://github.com/TurboWarp/scratch-blocks) (`Blockly` has very little stuff on it). Only available after opening the editor.

## `paper`

Refers to the [paper.js](https://github.com/LLK/paper.js) instance. Only available after opening the costume editor.

## `ReduxStore`

Refers to the internal redux store used by scratch-gui.

Get state with `ReduxStore.getState()` and dispatch events with `ReduxStore.dispatch({ type: "..." })`
