class HelloWorld {
  getInfo() {
    return {
      id: 'helloworld',
      name: Scratch.translate('It works!'),
      blocks: [
        {
          opcode: 'hello',
          blockType: Scratch.BlockType.REPORTER,
          text: Scratch.translate('Hello!')
        }
      ]
    };
  }

  hello() {
    return 'World!';
  }
}

Scratch.extensions.register(new HelloWorld());
