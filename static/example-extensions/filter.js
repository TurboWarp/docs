class FilterExample {
  getInfo() {
    return {
      id: 'filterexample',
      name: Scratch.translate('Filter Example'),
      blocks: [
        {
          opcode: 'all',
          blockType: Scratch.BlockType.COMMAND,
          text: Scratch.translate('available in ALL targets'),
        },
        {
          opcode: 'sprites',
          blockType: Scratch.BlockType.COMMAND,
          text: Scratch.translate('available in ONLY sprites'),
          // highlight-next-line
          filter: [Scratch.TargetType.SPRITE]
        },
        {
          opcode: 'stage',
          blockType: Scratch.BlockType.COMMAND,
          text: Scratch.translate('available in ONLY the stage'),
          // highlight-next-line
          filter: [Scratch.TargetType.STAGE]
        },
        {
          opcode: 'none',
          blockType: Scratch.BlockType.COMMAND,
          text: Scratch.translate('available in NEITHER sprites or the stage'),
          // highlight-start
          // NOTE: Use hideFromPalette instead of filter: []
          filter: []
          // highlight-end
        }
      ]
    };
  }

  all() {
    return 0;
  }
  sprites() {
    return 0;
  }
  stage() {
    return 0;
  }
  none() {
    return 0;
  }
}

Scratch.extensions.register(new FilterExample());
