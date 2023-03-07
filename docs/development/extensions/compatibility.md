---
hide_table_of_contents: true
---

# Maintaining compatibility

Once projects exist using your extension, it is critical that you do not change the extension in ways that will break compatibility as doing so will effectively **corrupt projects.**

## What you must never change

**The extension ID must never change.**

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

**Block opcodes and types must never changed.**

Instead, create a new block and mark the old one as `hideFromPalette: true`.

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

**Blocks must never be removed.**

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

**Argument IDs and types must never change or be removed.**

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

**Arguments must never be added to existing blocks.**

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

**Don't significantly change block behavior.**

Trivial bug fixes are typically fine, but significant changes may break projects. This is a bit harder to quanitfy; the best way to make sure your changes don't break projects is extensive testing.

## What if you need to break compatibility?

There are times where old version of an extension has a fundamental flaw and there is no way for existing projects to continue working with the update. In these instances, you should **create a brand new extension with an entirely new ID** and leave the old version untouched.

## Next steps

Next, let's learn [how to share your extension with the world](./share).
