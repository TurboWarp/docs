class SeparatorExample {
  getInfo() {
    return {
      id: 'separatorexample',
      name: 'Separator Example',
      blocks: [
        {
          type: Scratch.ArgumentType.COMMAND,
          opcode: 'block1',
          text: 'group 1'
        },
        {
          type: Scratch.ArgumentType.COMMAND,
          opcode: 'block2',
          text: 'also group 1',
        },
        // highlight-next-line
        '---',
        {
          type: Scratch.ArgumentType.COMMAND,
          opcode: 'block3',
          text: 'group 2'
        },
        // highlight-next-line
        '---',
        {
          type: Scratch.ArgumentType.COMMAND,
          opcode: 'block4',
          text: 'group 3',
        },
      ]
    };
  }
  block1() {}
  block2() {}
  block3() {}
  block4() {}
}

Scratch.extensions.register(new SeparatorExample());
