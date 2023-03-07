class HideFromPaletteExample {
  getInfo() {
    return {
      id: 'hidefrompaletteexample',
      name: 'hideFromPalette Example',
      blocks: [
        {
          opcode: 'hidden',
          blockType: Scratch.BlockType.REPORTER,
          text: 'example block (hidden)',
          hideFromPalette: true
        },
      ]
    };
  }

  hidden() {
    return 'The block is hidden from the palette but still works';
  }
}

Scratch.extensions.register(new HideFromPaletteExample());
