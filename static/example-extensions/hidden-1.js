class HideFromPaletteExample {
  getInfo() {
    return {
      id: 'hidefrompaletteexample',
      name: Scratch.translate('hideFromPalette Example'),
      blocks: [
        {
          opcode: 'hidden',
          blockType: Scratch.BlockType.REPORTER,
          text: Scratch.translate('example block (visible)')
        },
      ]
    };
  }

  hidden() {
    return 'The block is still visible';
  }
}

Scratch.extensions.register(new HideFromPaletteExample());
