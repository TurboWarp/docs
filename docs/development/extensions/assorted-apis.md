---
hide_table_of_contents: true
---

# Assorted APIs

import {ExtensionCode} from './utils.js';

Now that you are familiar with writing custom extensions, we will share some more APIs. These APIs are available in **both** sandboxed and unsandboxed extensions. They can all be used together.

## color1, color2, color3

These three properties determine, respectively, the color of the blocks, the color of the block inputs, and the color of the block menus of each extension. The general advice is that `color1` should be the brightest, `color2` slightly darker, and `color3` the darkest. They should be set to hex color codes.

<ExtensionCode title="color">{require("!raw-loader!@site/static/example-extensions/color.js")}</ExtensionCode>

Different block color modes (such as **High Contrast**, **Dark** and any "Addons" presets) are automatically generated based on these values.

## docsURI

docsURI adds a button at the start of the block list that opens a page for people to learn more about how your extension works.

<ExtensionCode title="hello-docs">{require("!raw-loader!@site/static/example-extensions/hello-docs.js")}</ExtensionCode>

## disableMonitor

Scratch will automatically show a checkbox to show a variable monitor by REPORTER blocks with no inputs. Note that in TurboWarp, this applies to BOOLEAN blocks too. To disable this, set disableMonitor to true on the block.

Note that, even if disableMonitor is set, it is still possible for someone to manually create a monitor using a modified (or old) version of the extension or other tools.

<ExtensionCode title="unmonitorable">{require("!raw-loader!@site/static/example-extensions/unmonitorable.js")}</ExtensionCode>

## Scratch.Cast

The way that Scratch handles operations such as type conversions or comparisons has numerous quirks. Instead of trying to write them yourself, you can use the Scratch.Cast.* APIs.

<ExtensionCode title="cast">{require("!raw-loader!@site/static/example-extensions/cast.js")}</ExtensionCode>

## hideFromPalette

Sometimes you might want to hide a block from the flyout, but you don't want to remove it. This is useful to make sure that your changes are [backward compatible](./compatibility). Blocks with the property hideFromPalette will be hidden from the flyout, but any copies of them that are already in the project will continue to work the same.

For example, load the first extension here, and save a project using its block:

<ExtensionCode title="hidden-1">{require("!raw-loader!@site/static/example-extensions/hidden-1.js")}</ExtensionCode>

Then load this extension instead, and load the project from before:

<ExtensionCode title="hidden-2">{require("!raw-loader!@site/static/example-extensions/hidden-2.js")}</ExtensionCode>

See that the copies of the block that already exist continue to work, but it is not listed in the toolbox.

## filter

Some of your blocks may only work in sprites or only work in the stage. For these blocks, you can use the filter property to an array containing either `Scratch.TargetType.STAGE` or `Scratch.TargetType.SPRITE` to make it only visible in that type of target.

Note that it is still possible to get blocks that violate the filter property by, for example, using drag and drop or the backpack. Thus, your blocks must still check if the target is a stage or sprite with `util.target.isStage`.

<ExtensionCode title="filter">{require("!raw-loader!@site/static/example-extensions/filter.js")}</ExtensionCode>

## Icons

There are three different ways to add images to your extension:

 - menuIconURI for the whole extension. This sets the image that appears in the block palette. If not set, defaults to blockIconURI. If that's also not set, defaults to a circle of the extension's color.
 - blockIconURI for the whole extension. This will be the default for all blocks that don't override it.
 - blockIconURI for each block. This overrides the blockIconURI set on the entire extension.

Each of these properties should be inline [data: URLs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs). SVG is preferred, but PNG or JPG at least 64x64 in size also works well. Icons should be square.

<ExtensionCode title="icons">{require("!raw-loader!@site/static/example-extensions/icons.js")}</ExtensionCode>

## Inline images

You can also put images anywhere in a block using an "argument" of type IMAGE and setting `dataURI` on the argument. Like the other images, this is a [data: URL](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs). SVG is preferred, but PNG or JPG at least 64x64 in size also works well. Icons should be square.

Additionally, if you set `flipRTL` to true, the image will be horizontally flipped in right-to-left languages.

<ExtensionCode title="inline-images">{require("!raw-loader!@site/static/example-extensions/inline-images.js")}</ExtensionCode>

## Separators

If your extension has a lot of blocks you may want to put some space between groups of blocks. To do this, include `"---"` in the blocks list:

<ExtensionCode title="separators">{require("!raw-loader!@site/static/example-extensions/separators.js")}</ExtensionCode>

## Terminal blocks

To prevent connecting a block underneath a COMMAND block, set `isTerminal: true` on the block.

While the block's shape will look similar to "stop this script" and "stop all", the behavior matches neither. If this block is placed at the end of a loop for example, the loop will continue to run unless additional code stops the current thread. This just prevents connecting a block underneath.

<ExtensionCode title="terminal">{require("!raw-loader!@site/static/example-extensions/terminal.js")}</ExtensionCode>

## Next steps

Next, let's see [how to make blocks like "when I receive" or "when timer greater than".](./hats)
