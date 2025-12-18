class DisableMonitorExample {
  getInfo() {
    return {
      id: 'disablemonitorexample',
      name: Scratch.translate('disableMonitor Example'),
      blocks: [
        {
          opcode: 'monitorable',
          blockType: Scratch.BlockType.REPORTER,
          text: Scratch.translate('this block can be monitored')
        },
        {
          opcode: 'unmonitorable',
          blockType: Scratch.BlockType.REPORTER,
          text: Scratch.translate('but this one can not'),
          // highlight-next-line
          disableMonitor: true
        },
      ]
    };
  }

  monitorable() {
    return Math.random();
  }

  unmonitorable() {
    return Math.random();
  }
}

Scratch.extensions.register(new DisableMonitorExample());
