---
hide_table_of_contents: true
---

# Maintaining compatibility

Once projects exist using your extension, it is critical that you do not change the extension in ways that will break compatibility as doing so will effectively **corrupt projects.**

## What you must never change

### The extension ID must never change

```js
  getInfo() {
    return {
      // highlight-start
      // THIS MUST NEVER CHANGE
      id: 'fetch'
      // highlight-end
      // ...
    };
  }
```

### Block opcodes and types must never change

Instead, create a new block and mark the old one as `hideFromPalette: true`.

It is generally safe to change blockType from REPORTER to BOOLEAN or from HAT to EVENT, but a conversion of HAT to BOOLEAN would be problematic.

```js
  getInfo() {
    return {
      // ...
      blocks: [
        {
          // highlight-start
          // THESE MUST NEVER CHANGE
          blockType: Scratch.BlockType.REPORTER,
          opcode: "fetch",
          // highlight-end
          // ...
        }
      ]
    };
  }
```

### Blocks must never be removed

Instead, create a new block and mark the old one as `hideFromPalette: true`.

```js
  getInfo() {
    return {
      // ...
      blocks: [
        // highlight-start
        // THIS MUST NEVER BE DELETED
        {
          opcode: "old",
          hideFromPalette: true
          // highlight-end
          // ...
        }
      ]
    };
  }
```

### Argument IDs and types must never change or be removed

```js
  getInfo() {
    return {
      // ...
      blocks: [
        {
          // highlight-start
          // THE ARGUMENT ID "INPUT" MUST NEVER BE CHANGED OR REMOVED
          text: "block [INPUT]",
          arguments: {
            INPUT: {
              type: Scratch.ArgumentType.REPORTER,
              // highlight-end
              // ...
            }
          },
          // ...
        }
      ]
    };
  }
```

### Arguments must never be added to existing blocks

Instead, create a new block and mark the old one as `hideFromPalette: true`. The new block can be reimplemented in terms of the old one:

```js
  getInfo() {
    return {
      // ...
      blocks: [
        {
          blockType: Scratch.BlockType.REPORTER,
          id: "oldBlock",
          text: "old [INPUT1]",
          arguments: {
            INPUT1: { /* ... */ }
          },
          hideFromPalette: true
        },
        {
          blockType: Scratch.BlockType.REPORTER,
          opcode: "newBlock",
          text: "new [INPUT1] [INPUT2]",
          arguments: {
            INPUT1: { /* ... */ },
            INPUT2: { /* ... */ }
          }
        }
      ]
    };
  }
  oldBlock(args) {
    return this.newBlock({
      ...args,
      INPUT2: "Default value"
    });
  }
  newBlock(args) {
    // ...
  }
```

### Don't modify isTerminal

If a COMMAND block does not already have `isTerminal: true`, then don't add it as doing so will cause existing projects that connect blocks underneath to break. Instead, create a new block and optionally hide the old one.

### Don't modify acceptReporters

Converting an input menu to a field menu and vice-versa does not work and will corrupt projects. Create a new menu and block instead.

### Don't significantly change block behavior

Trivial bug fixes are typically fine, but significant changes may break projects. This is a bit harder to quantify; the best way to make sure your changes don't break projects is extensive testing.

## What you can change

You can always change these parts of extension metadata:

 - name
 - docsURI
 - color1, color2, color3
 - menuIconURI and blockIconURI

You can always change these parts of blocks and arguments:

 - text, as long as it contains the same arguments (changing argument order is safe)
 - disableMonitor (enabling true just hides checkmark, does not remove existing monitors)
 - hideFromPalette
 - filter (adding filter just hides from palette, does not remove existing blocks)
 - defaultValue
 - dataURI and flipRTL in image inputs

For menus, you can always change `text`, but you should not change `value` without careful consideration. Adding menu items is always okay, but removing menu items is dangerous.

## What if you need to break compatibility?

There are times when there is no option but to break backward compatibility. In these instances, you should **create a brand new extension with an entirely new ID** and leave the old version untouched.

For example, if your extension `fetch` needs a complete redesign, you could create a new extension with the ID `fetch2`.

## Next steps

Next, let's learn [how to share your extension with the world](./share).
