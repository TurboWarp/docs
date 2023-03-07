class SeparatorExample {
  getInfo() {
    return {
      id: 'separatorexample',
      name: 'Separator Example',
      blocks: [
        {
          opcode: 'block1',
          blockType: Scratch.BlockType.COMMAND,
          text: 'group 1'
        },
        {
          opcode: 'block2',
          blockType: Scratch.BlockType.COMMAND,
          text: 'also group 1',
        },
        // highlight-next-line
        '---',
        {
          opcode: 'block3',
          blockType: Scratch.BlockType.COMMAND,
          text: 'group 2'
        },
        // highlight-next-line
        '---',
        {
          opcode: 'block4',
          blockType: Scratch.BlockType.COMMAND,
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
