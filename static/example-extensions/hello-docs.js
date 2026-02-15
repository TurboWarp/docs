class HelloDocs {
  getInfo() {
    return {
      id: 'hellodocs',
      name: Scratch.translate('Hello Docs!'),
      // highlight-next-line
      docsURI: 'https://docs.turbowarp.org/development/extensions/docsURI-demo',
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
    return Math.random();
  }
}

Scratch.extensions.register(new HelloDocs());
