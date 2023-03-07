class CastingExample {
  getInfo() {
    return {
      id: 'castexample',
      name: 'Casting Example',
      blocks: [
        {
          opcode: 'toNumber',
          blockType: Scratch.BlockType.REPORTER,
          text: 'convert [INPUT] to number',
          arguments: {
            INPUT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '3.0'
            }
          }
        },
        {
          // The opcode "toString" should work but given it's special
          // treatment in JS, it seems a bit dangerous to use
          opcode: 'castToString',
          blockType: Scratch.BlockType.REPORTER,
          text: 'convert [INPUT] to string',
          arguments: {
            INPUT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Hello'
            }
          }
        },
        {
          opcode: 'toBoolean',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'convert [INPUT] to boolean',
          arguments: {
            INPUT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '1'
            }
          }
        },
        {
          opcode: 'compare',
          blockType: Scratch.BlockType.REPORTER,
          text: 'compare [A] to [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '3'
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '5'
            }
          }
        }
      ]
    };
  }

  toNumber({INPUT}) {
    // highlight-next-line
    return Scratch.Cast.toNumber(INPUT);
  }

  castToString({INPUT}) {
    // highlight-next-line
    return Scratch.Cast.toString(INPUT);
  }

  toBoolean({INPUT}) {
    // highlight-next-line
    return Scratch.Cast.toBoolean(INPUT);
  }

  compare({A, B}) {
    // highlight-start
    const comparison = Scratch.Cast.compare(A, B);
    // You need to use < 0, > 0, or === 0 here.
    // Do not use === 1 or === -1! That will not work in some cases.
    if (comparison === 0) {
      return 'Equal';
    } else if (comparison > 0) {
      return 'A is greater';
    } else if (comparison < 0) {
      return 'B is greater';
    }
    // highlight-end
  }
}

Scratch.extensions.register(new CastingExample());
