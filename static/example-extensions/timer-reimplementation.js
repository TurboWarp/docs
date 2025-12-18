let startTime = Date.now();

class TimerReimplementationExample {
  getInfo() {
    return {
      id: 'timerreimplementationexample',
      name: Scratch.translate('Timer Example'),
      blocks: [
        // highlight-start
        {
          opcode: 'whenTimerGreaterThan',
          blockType: Scratch.BlockType.HAT,
          text: Scratch.translate('when timer > [TIME]'),
          isEdgeActivated: true,
          arguments: {
            TIME: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '3'
            }
          }
        },
        // highlight-end
        {
          opcode: 'timer',
          blockType: Scratch.BlockType.REPORTER,
          text: Scratch.translate('timer')
        },
        {
          opcode: 'resetTimer',
          blockType: Scratch.BlockType.COMMAND,
          text: Scratch.translate('reset timer')
        }
      ]
    };
  }
  // highlight-start
  whenTimerGreaterThan({TIME}) {
    console.log(this.timer(), this.timer() > Scratch.Cast.toNumber(TIME));
    return this.timer() > Scratch.Cast.toNumber(TIME);
  }
  // highlight-end
  timer() {
    return (Date.now() - startTime) / 1000;
  }
  resetTimer() {
    startTime = Date.now();
  }
}

Scratch.extensions.register(new TimerReimplementationExample());
