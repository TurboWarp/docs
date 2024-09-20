---
hide_table_of_contents: true
---

# Hello, world!

import {ExtensionCode} from './utils.js';

Let's start by creating a very simple extension. This extension just adds a block that reports "Hello, world!":

<ExtensionCode title="hello-world">{require('!raw-loader!@site/static/example-extensions/hello-world.js')}</ExtensionCode>

The above is a standard component we will use for showing extension code. Make note of the "Try this extension" button by the title -- that link will let you see what this extension does without having to do anything locally. Note that these extensions are primarily for demonstrating API features; they are not intended to be actually used in projects. There will almost always be another extension on [extensions.turbowarp.org](https://extensions.turbowarp.org/) that does the same thing, but better.

If you're just using simple files to develop extensions, save this code into a file called "hello-world.js". If you're using a local HTTP server, save the code in a file called "hello-world.js" that the server will let you access.

Now, go to the TurboWarp editor, click on the add extension button (a + next to 2 blocks), scroll to the bottom of the Scratch section, and choose the "Custom Extension" option. Either enter the full URL to your local HTTP server or use one of the other tabs to select your file or paste in code. For now, **do not** check the "Run extension without sandbox" box.

After a second, an extension named "It works!" should appear in the sidebar. If it doesn't appear, open up your developer tools and look for any warnings in the console. Some of the most common errors are:

 - Syntax error in the JavaScript. This should appear in your browser's developer tools.
 - Runtime error in the JavaScript. This should appear in your browser's developer tools.
 - Your ad blocker or browser is blocking requests to localhost. Try turning off your ad blocker. Once your extension is published on an internet-facing website this shouldn't be a problem.

Now, we will dissect what is going on in this file in the order it runs.

## Constructing and registering

```js
class MyExtension {
```

This is a standard [JavaScript class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes). It is conventional to define your extension in the form of a class. The name of the class doesn't matter, but we suggest making it somehow based on the extension's name. It doesn't have to be unique at this stage.

```js
Scratch.extensions.register(new HelloWorld());
```

This constructs your class into an object and introduces the special API that allows extensions to function: `Scratch`. There's a lot on `Scratch`, but one of the most important functions is `Scratch.extensions.register`.

Make sure to always call register() exactly once. If you don't call it, your extension will never get added and we will keep waiting for it to load. If you call it multiple times, the behavior is undefined, so don't rely on it.

## getInfo()

```js
  getInfo() {
    return {
      id: 'helloworld',
      name: 'It works!',
      blocks: [
        {
          opcode: 'hello',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Hello, world!'
        }
      ]
    };
  }
```

When you call register(), Scratch will then call the getInfo() function on the provided object. This object must return an object with metadata about the extension. Some of the fields are `id`, `name`, and `blocks`. Here's a short summary of those:

| | Type | Description |
|:-:|:-:|:-:|
| id | string | A unique ID used only by this extension. Multiple extensions cannot share the same ID. Can only use the letters a-z and 0-9 -- no spaces or special characters. |
| name | string | The name of the extension that appears in the toolbox. If not provided, it will default to the extension id. |
| blocks | array | A list of objects that describe the blocks in the project. |

Here's a short summary of what each block should have:

| | Type | Description |
|:-:|:-:|:-:|
| opcode | string | The name of the function that should run when this block runs. For example, if this is "hello", then the class's "hello" method will be run. Each opcode must be unique within each extension, so multiple extensions can each have a block with opcode "hello".|
| blockType | Scratch.BlockType.* | Determines the block's shape. Most commonly Scratch.BlockType.COMMAND, Scratch.BlockType.REPORTER, or Scratch.BlockType.BOOLEAN. See the table below for details. |
| text | string | The text that will appear in the editor for the block. There is a bit of special syntax here for dealing with arguments that will be discussed in the next segment. |
| arguments | object | Optional. Discussed in the next section. |

These are the acceptable values for blockType:

| | Description | Example |
|:-:|:-:|:-:|
|Scratch.BlockType.COMMAND|A block that doesn't report a value|move 10 steps|
|Scratch.BlockType.REPORTER|A round block that reports a string or number|x position, costume name|
|Scratch.BlockType.BOOLEAN|A block with pointy edges that reports a boolean (true or false)|mouse down|
|Scratch.BlockType.HAT|A block that starts in response to specific conditions. Discussed later.|when loudness > 10|
|Scratch.BlockType.EVENT|A block that starts in response exclusively to events. Discussed later.|when this sprite clicked|

While other BlockTypes do exist, they do not work well and will not be discussed at this time.

## The blocks

```js
  hello() {
    return 'Hello, world!';
  }
```

This defines the function that will run the block with the opcode "hello". In this case, our block is very simple and just returns a string. REPORTER blocks are expected to return a string, number, or boolean, and BOOLEAN blocks are expected to only return a boolean. Note that `null`, `undefined`, lists, and objects are not expected return values for these blocks.

When you want to change the extension, simply modify the extension and reload the page. Here's a tip to make your life easier: You can use the `?extension=` URL parameter to load an extension automatically instead of requiring going into the library. For example, if your extension URL is http://localhost:8080/hello-world.js, you could use https://turbowarp.org/editor?extension=http://localhost:8080/hello-world.js to load it automatically.

If you observe that your changes aren't being applied when you refresh, try your browser's "hard refresh" or "refresh without cache" shortcuts.

## Exercises

1. Change the "Hello!" block to return your favorite number instead. Remember to rename the block accordingly.
1. Change the block's opcode.
1. Add another block. Make this block use a `type` of `Scratch.BlockType.BOOLEAN` and return a boolean (true or false) at random.

## Next steps

Next, let's [allow our blocks to take in arguments](./inputs).
