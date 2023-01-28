---
hide_table_of_contents: true
---

# Hello, world!

import {ExtensionCode} from './utils.js';

Let's start by creating a very simple sandboxed extension. We assume you have set up an HTTP server in the previous step.

Here is a simple extension that adds a block that reports "Hello, world!"

<ExtensionCode title="hello-world">{require('!raw-loader!@site/static/example-extensions/hello-world.js')}</ExtensionCode>

The above is a standard component we will use for showing extension code. Make note of the "Try this extension" button by the title -- that link will let you see what this extension does without having to do anything locally. Note that you shouldn't use the extensions in any real projects! We may and will modify or remove them as needed.

Save this code into the hello-world.js you created earlier so that you can access it using your HTTP server. Now, go to the TurboWarp editor, go to the extension menu, choose the Custom Extension option, then enter the full URL to your HTTP server that gets the extension's source code.

After a second, an extension named "It works!" should appear in the sidebar. If it doesn't appear, open up your developer tools and look for any warnings in the console. Some of the most common errors are:

 - Syntax error in the JavaScript. This should appear in your browser's developer tools.
 - Runtime error in the JavaScript. This should appear in your browser's developer tools.
 - Your adblocker or browser is blocking requests to localhost. Try turning off your adblocker. Once your extension is published on an internet-facing website this shouldn't be a problem.

Now, let's start dissecting what is going on in this file. We will explain the code in the order it will run.

## Constructing and registering

```js
class MyExtension {
```

This is a standard JavaScript class. It is convention to define your extension in the form of a class, but you technically don't need to. The name of the class here doesn't matter, but we suggest making it somehow based on the extension's name. It doesn't have to be unique at this stage.

```js
Scratch.extensions.register(new HelloWorld());
```

This contructs your class into an object and introduces the special API that allows extensions to function: `Scratch`. There's a lot on `Scratch`, but one of the most important functions is `Scratch.extensions.register`.

Make sure to always call register() exactly once. If you don't call it, your extension will never get added and we will keep waiting for it to load. If you call it multiple times, the behavior is undefined, so don't.

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

When you call register(), Scratch will then call the getInfo() function on the provided object. This object must return an object with metadata about the extension. Some required fields are `id`, `name`, and `blocks`. Here's a short summary of those:

| | Type | Description |
|:-:|:-:|:-:|
| id | string | A unique ID used only by this extension. Multiple extensions cannot share the same ID. Can only use the letters a-z and 0-9 -- no uppercase letters, spaces, or special characters. |
| name | string | The name of the extension that appears in the toolbox. |
| blocks | array | A list of objects that describe the blocks in the project. |

Here's a short summary of what each block should have:

| | Type | Description |
|:-:|:-:|:-:|
| opcode | string | The name of the function that should run when this block runs. For example, if this is "hello", then the class's "hello" method will be run. Each opcode must be unique within each extension, so multiple extensions can each have a block with opcode "hello".|
| blockType | Scratch.BlockType.* | Determine's the block's shape. Most commonly Scratch.BlockType.COMMAND, Scratch.BlockType.REPORTER, or Scratch.BlockType.BOOLEAN. See table below for details. |
| text | string | The text that will appear in the editor for the block. There is a bit of special syntax here for dealing with arguments that will be discussed in the next segment. |
| arguments | object | Optional. Discussed in the next section. |

These are the acceptible values for blockType:

| | Description | Example |
|:-:|:-:|:-:|
|Scratch.BlockType.COMMAND|A block that doesn't report a value|move 10 steps|
|Scratch.BlockType.REPORTER|A round block that reports a string or number|x position, costume name|
|Scratch.BlockType.BOOLEAN|A triangular block that reports a boolean (true or false)|mouse down|

There are a couple others, but they don't work well or we aren't ready to discuss them.

## The blocks

```js
  hello() {
    return 'Hello, world!';
  }
```

This defines the function that will run the block with the opcode "hello" runs. In this case, our block is very simple, and just returns a string. REPORTER blocks are expected to return a string, number, or boolean, and BOOLEAN blocks are expected to only return a boolean. Note that `null`, `undefined`, lists, and objects are not expected return values for these blocks. COMMAND blocks should not return values.

When you want to change the extension, simply modify the extension and reload the page. Here's a tip to make your life easier: You can use the `?extension=` URL parameter to load an extension automatically instead of requing going into the library. For example, if your extension URL is http://localhost:8080/hello-world.js, you could use https://turbowarp.org/editor?extension=http://localhost:8080/hello-world.js to load it automatically.

If you observe that your changes aren't being applied when you refresh, try your browser's "hard refresh" or "refresh without cache" shortcuts.

## Exercises

1. Change the block to return a number instead, and change the block's text accordingly.
1. Change the block's opcode.
1. Add another block. Make this block use a `type` of `Scratch.BlockType.BOOLEAN` and return a boolean (true or false) at random.

## Next steps

Next, let's [allow our blocks to take in arguments](./inputs).
