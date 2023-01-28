(function(Scratch) {
    'use strict';
  
    if (!Scratch.extensions.unsandboxed) {
      throw new Error('This Turbo Mode example must run unsandboxed');
    }
    const vm = Scratch.vm;
  
    class BlockUtilityExamples {
      getInfo() {
        return {
          id: 'blockutilityexamples',
          name: 'BlockUtility Examples',
          blocks: [
            {
              opcode: 'getSpriteName',
              text: 'sprite name',
              blockType: Scratch.BlockType.REPORTER,
            },
            {
              opcode: 'doesVariableExist',
              text: 'is there a [TYPE] named [NAME]?',
              blockType: Scratch.BlockType.BOOLEAN,
              arguments: {
                NAME: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'my variable'
                },
                TYPE: {
                  type: Scratch.ArgumentType.STRING,
                  menu: 'TYPE_MENU'
                }
              }
            }
          ],
          menus: {
            TYPE_MENU: {
              acceptReporters: true,
              items: [
                // Value here corresponds to the internal types of the variables
                // in scratch-vm. And yes, broadcasts are variables.
                // https://github.com/TurboWarp/scratch-vm/blob/20c60193c1c567a65cca87b16d22c51963565a43/src/engine/variable.js#L43-L67
                {
                  text: 'variable',
                  value: ''
                },
                'list',
                {
                  text: 'broadcast',
                  value: 'broadcast_msg'
                }
              ]
            }
          }
        };
      }
      // highlight-start
      getSpriteName(args, util) {
        return util.target.getName();
      }
      doesVariableExist(args, util) {
        return !!util.target.lookupVariableByNameAndType(args.NAME.toString(), args.TYPE);
      }
      // highlight-end
    }
    Scratch.extensions.register(new BlockUtilityExamples());
  })(Scratch);
  