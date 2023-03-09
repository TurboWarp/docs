class TerminalExample {
  getInfo() {
    return {
      id: 'terminalexample',
      name: 'Terminal Example',
      blocks: [
        {
          opcode: 'terminalBlock',
          blockType: Scratch.BlockType.COMMAND,
          // highlight-next-line
          isTerminal: true,
          text: 'you can not connect another block under this one!'
        }
      ]
    };
  }
  terminalBlock() {

  }
}

Scratch.extensions.register(new TerminalExample());
