class Strings1 {
  getInfo() {
    return {
      id: 'strings1example',
      name: 'Encoding',
      blocks: [
        {
          opcode: 'convert',
          blockType: Scratch.BlockType.REPORTER,
          text: 'convert [TEXT] to [FORMAT]',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Apple'
            },
            // highlight-start
            FORMAT: {
              type: Scratch.ArgumentType.STRING,
              menu: 'FORMAT_MENU'
            }
            // highlight-end
          }
        }
      ],
      // highlight-start
      menus: {
        FORMAT_MENU: {
          acceptReporters: true,
          items: ['uppercase', 'lowercase']
        }
      }
      // highlight-end
    }
  }

  convert (args) {
    if (args.FORMAT === 'uppercase') {
      // Notice the toString() call: TEXT might be a number or boolean,
      // so we have to make sure to convert it to a string first so that
      // it has a toUpperCase() function, otherwise we will get an error!
      // Remember: the argument's "type" is just a suggestion for the
      // editor; it's never enforced.
      return args.TEXT.toString().toUpperCase();
    } else {
      return args.TEXT.toString().toLowerCase();
    }
  }
}
Scratch.extensions.register(new Strings1());
