class TerminalExample {
  getInfo() {
    return {
      id: 'terminalexample',
      name: Scratch.translate('Terminal Example'),
      blocks: [
        {
          opcode: 'terminalBlock',
          blockType: Scratch.BlockType.COMMAND,
          // highlight-next-line
          isTerminal: true,
          text: Scratch.translate('you can not connect another block under this one!')
        }
      ]
    };
  }
  terminalBlock() {

  }
}

Scratch.extensions.register(new TerminalExample());
