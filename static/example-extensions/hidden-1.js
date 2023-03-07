class HideFromPaletteExample {
  getInfo() {
    return {
      id: 'hidefrompaletteexample',
      name: 'hideFromPalette Example',
      blocks: [
        {
          opcode: 'hidden',
          blockType: Scratch.BlockType.REPORTER,
          text: 'example block (visible)'
        },
      ]
    };
  }

  hidden() {
    return 'The block is still visible';
  }
}

Scratch.extensions.register(new HideFromPaletteExample());
