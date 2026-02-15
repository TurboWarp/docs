class StrictEqualityExtension {
  getInfo() {
    return {
      id: 'strictequalityexample',
      name: Scratch.translate('Strict Equality'),
      blocks: [
        // highlight-start
        {
          opcode: 'strictlyEquals',
          blockType: Scratch.BlockType.BOOLEAN,
          text: Scratch.translate('[ONE] strictly equals [TWO]'),
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Second value'
            }
          }
        }
        // highlight-end
      ]
    };
  }

  // highlight-start
  strictlyEquals(args) {
    return args.ONE === args.TWO;
  }
  // highlight-end
}
Scratch.extensions.register(new StrictEqualityExtension());
