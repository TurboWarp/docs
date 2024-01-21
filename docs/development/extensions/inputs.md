---
hide_table_of_contents: true
---

# Dealing with inputs

import {ExtensionCode} from './utils.js';

Often you will want your blocks to take something in as an "input", "argument", or "parameter". Let's learn how to do that with a new example:

<ExtensionCode title="strict-equality">{require("!raw-loader!@site/static/example-extensions/strict-equality.js")}</ExtensionCode>

Save this code to a file called "strict-equality.js" beside "hello-world.js", and load it the same way you loaded the hello world extension. Most of the code is very similar to the hello world extension. Notice that the strictly equals block in this extension will differentiate between "a" and "A" unlike the normal Scratch equals block.

(If you want to use this block in your projects, see the "Utilities" extension on https://extensions.turbowarp.org/)

Now let's talk about the arguments.

:::info
The argument system can be a bit finicky. If something's not working, make a bug report.
:::

To add arguments to a block, you give it an `arguments` property. It should be set to an object that contains other objects. Each property you put in `arguments` corresponds to a single argument. Each one has a name. The names can be all capitals or any format you desire.

Here's a summary of the most common properties to set for an argument:

| |Type|Description|
|:-:|:-:|:-:|
|type|Scratch.ArgumentType.*|Determines the shape of the input and what values the default text input accepts. Most commonly Scratch.ArgumentType.STRING, Scratch.ArgumentType.NUMBER, or Scratch.ArgumentType.BOOLEAN. See the table below for acceptable values. Note that this is only a suggestion and the real type may vary.|
|defaultValue|string|Optional. The default value in the toolbox. Only use this for inputs with a text box; not for boolean inputs.|
|menu|string|Discussed later.|

These are the acceptible values for type:

| | Description | Example |
|:-:|:-:|:-:|
|Scratch.ArgumentType.STRING|Any text|apple, 123, true|
|Scratch.ArgumentType.NUMBER|Any number|123|
|Scratch.ArgumentType.BOOLEAN|True or false. This one is special as it tries to prevent users from dropping non-booleans into the input.|true|
|Scratch.ArgumentType.COLOR|A hex color code|#ff4c4c|
|Scratch.ArgumentType.ANGLE|A direction input. 90 means to the right. Increases counterclockwise. Same as sprite direction.|90, 180|
|Scratch.ArgumentType.MATRIX|A 5x5 matrix represented in binary| 11101010101... |
|Scratch.ArgumentType.NOTE|A note on a piano keyboard.| ? |
|Scratch.ArgumentType.IMAGE|Displays an inline image, not actually an input. Described later.| N/A |
|Scratch.ArgumentType.COSTUME|Names of costumes within that sprite.| costume1 |
|Scratch.ArgumentType.SOUND|Names of sounds within that sprite.| recording1 |

Next, Scratch needs to know where to put each of the arguments in the block. Are they at the start, end, or somewhere in the middle? It can't guess, so you have to tell it. To do this, you use the `text` property on the block by using `[ARGUMENT_NAME]` syntax to denote where each input goes. Each argument in the `arguments` object should appear in `text` exactly once. Arguments can be in any order; it doesn't matter.

When Scratch runs your block functions, it will pass in an object for the first value. This object will contain a value for each argument name that the block has. Conventionally we call this `args` or use destructuring syntax. As an example, if the block has an argument named `X` and `Y`, these could be accessed in any of these ways:

```js
  // Using args.XYZ format...
  goto(args) {
    console.log(args.X, args.Y);
  }

  // Or using destructuring...
  goto({X, Y}) {
    console.log(X, Y);
  }
```

Arguments can be a string, number, or boolean regardless of the type specified as the argument's `type`. Your code must ensure to cast values as needed.

## Static menus

Sometimes you might prefer your blocks to have a dropdown. These are called menus. We will first discuss static menus. These are menus that contain a fixed set of items that never changes.

<ExtensionCode title="strings-1">{require("!raw-loader!@site/static/example-extensions/strings-1.js")}</ExtensionCode>

A similar block is available in the "Text" extension on https://extensions.turbowarp.org/.

To make an argument into a menu, set its `type` to `Scratch.ArgumentType.STRING` and set its `menu` property to the name of the menu. This corresponds to a new property in the object returned by getInfo(): `menus`.

`menus` is an object of objects similar to `arguments`. Each item in `menus` is typically an object with these properties:

| |Type|Description|
|:-:|:-:|:-:|
|items|array|An array of strings. Alternatively, the items in the array can be objects containing a `text` and `value` property, both strings.|
|acceptReporters|boolean|Allows people to drop complex blocks into the menu. You almost always want this to be `true`.|

A field is an argument that can only be set to a fixed string. As an example, see the input in the "stop all" block. An input is an argument that can be set to any value. As an example, see the steps input in the "move 10 steps" block or the costume input in the "switch costume" block. You almost always want an input, not a field.

While it is possible to set the menu object itself to an array, this is highly discouraged as it implicitly sets `acceptReporters` to `false` which, again, is almost never what you want. Almost every menu you use should explicitly set `acceptReporters` to true so that it is an "input" instead of a "field". The only exception to this rule is when using [event-based hat blocks](./hats), which will be discussed much later. Note that switching an argument from a field to an input or the other way around is a backward-incompatible change.

The default value will typically be the first item in the menu's item list. The item list must not be empty.

There are some instances where you want the text that is displayed to the user in the dropdown and the value that the block receives internally to be different. For this, items can be a list of objects instead of strings (or just some of the items can be objects).

<ExtensionCode title="strings-2">{require("!raw-loader!@site/static/example-extensions/strings-2.js")}</ExtensionCode>

Notice that, although the dropdown displays UPPERCASE in the editor, the block actually receives "up".

## Exercises

1. Add a block that does the same thing as the built-in Scratch "join" block. It should take two arguments and produce a new string joining them together. Make sure your block casts the arguments to strings so when someone runs "join ((1 + 2)) ((3 + 4))" they get "37" not "10".
1. Create a boolean block that takes a number argument and a menu argument with the options "odd" and "even". The block should return whether the given number is either odd or even, as the menu says.

## Next steps

All of the blocks up until this point have been simple and the block completes (almost) immediately, but [what if the block needs to wait for something like a network request to complete](./async)?
