// highlight-start
// From the Pen Plus extension: https://github.com/TurboWarp/extensions/blob/master/extensions/penplus.js
const dangoIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABeCAYAAADc6BHlAAAAAXNSR0IArs4c6QAABItJREFUeF7tncuN2zAQhu0SctmCAuSQDnLZAlLCAjkG2BJSwF62gxwWSEG5pIQEFJYKRQ5f8+BzfLSoMfV/8yIl2/db+PrrvXUHxti3/LGJobeUndR5Sx9zRUmJWTquVCyF8a4UKOzj89Pt5em5VMxj3Idf34Pxfz5+y9nYHoQV4PR+I777ioGABM+pHQGyNYRqABjhfTAAiG0hRAH4ns8hvIIIc0RRcZUQ307Fi4btIiELQFJ8hXALevNLK9pC/N0h+CF/Amgp/s4QFECudxY+DtaAHt6/axQoAGEPz5kP1gE9vR+IguXb0tEBGCZLQ7gAGMH7jeI7Lc6GBOBB0AjIFRKJ404UKAAJgXM2dwLQdfUbA7ETAKPBAWGUIgwUYpfTUilpmCJccPsyFixTA+kOgCC8D2RKEN0AQMI//n7L1ebz+MvDpyUiostK2Be/RnhIdQDGNNHQFAC38C6MSEQMDyLYDZXqhCTFT4CYD4BUO+oCoKacXKHwomFoCOAdMe4oaCm+hTMLBPFbkj3EnwkCFJ5sWxM9xTcQZoiCWH5kgdAbwAwQsgAoRdkCkC66FUV5uIKcmhDpIa0RvH+GWpDzCDSEUbx/9DSUA3BuVbthnmtTR/J+IApKrjmX1diO10wG/ApT7psxvfP/SgDstdR8Me82IABzHTWOx+btkCHKRIpAKIA0PwoAyHIARQG0BXBJU6OIP3InxB0BQZ3oDSFx54w7JaNqxZIAKkXvemtzKQAp4b/8/BH10NfPX1PeK6XR8ZmSxo+C3CoFQeKnRI8pHoEhppOYYfuwlzQAX3iM6BAMAISIViJG3y/o/88fVDxuUlPJpMR35yANYloALcS3IDwIrJqxGgO8VywKXABcaScVfVIQpgTQWnzJSJAGYObOGgW9xJeC0AIAKwQLoEXaKeiOyPqRDRR2LZdNOmxr2tv7JaKgFYBLFGAXaL29f3YAJAijeD8AgeTEpJML048/DHXPYGAApC2dHgCCLWv7Rqo2jJJ+uNNQTwBBSoIiykJRAMh8U3ha0f1lY6tX+5lpSdGOjD6xUFjMsCQMBYCRlH7OCUUB0MXEWFAAGNWYzzkgaAQwq1phbigAXNvTIxbhGJNmAFxxYxG3LQDJNBR7OgKCoAAqclfJ0MyjKUHtccaTsgjp5JILYx4jloasoKn/T7CRwOX9pE0kZmFLzYm0o66gPgAzMfen/A2EnQGc+0ec7WgOgA/B8RZyBiEbKHVdxnFdoiACgawf2QCjsDWm2CH4RRhKRQAEsn5kAzWqMY69bNhxpaMeEGYFcNYCC3VWCDMDWALC7ACmh7ACAJuFWOpCakUsUZhXAhBEQ019yG1FWFvcEFYDAEYDsvtytbk+2ef93aO17/35XZG2RYOQFzDCacU3+wtWtyIQVgcQcwIjJuba2SFgJjGCZ/ecAysEBYBDyQZBAeAABB0XtjtSAHgALBAUAA0AGYICoAMgQVAAPADQEBQAHwAMhLsC4AVQBMHdslAA/ACyEBwAGgEy+h9WwcWav2GnESBIwIcAfJRGgKz+YST4u67/APKrBHxjStmdAAAAAElFTkSuQmCC";
const colorIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABeCAYAAACq0qNuAAAAAXNSR0IArs4c6QAABTFJREFUeF7t3b2KFEEUBeAecBVkk8nERBSMBEGMTDcxN/IhfATDRdinMDSaV5gn8REEo40MlBqoobrmVtWtqvtzWnYzd3tmer46ffrOr7tlOz9/mbu6Y27nuhniTnKBe+Gg7ivKzmhhlxbH/X577UAT+smnD81EP3r9vLnN/d2huc2yLOYO1jdYBOdA54Ic+PwyjYUw87C6IRJ8BDuFHIFPL19ZBHUX9RtYluUCfRY84s3Cx+spLICqjeaVq4FLw3ssgAa8OrgWvOUCSMOv0KUqpTSWSFVN6fqJChLzEruivMu10QOWNny4DS18CXjTlEtONZwBv1I/U3ZTF/ZIuRe8dPpn4N2Srn1yrR0JUtUzCu+ObtXx1CJI4I/AQ6B7wkvUTi88DLo3/Cz+MLzFuNiaOizGydY+ZLXD9mRvmE4wCOgIiS+MmixT1kaI6EjwRO00XZsboKKjwffiP8C3Srzj7z1934I/TzEove75yJWzBlx8FjwiOmLVECfbom8N/pz26xfPlj/vX3IW3HQbhHGS8ciWNC7Br9DTK0daAET4xx/fnbh+33xN2S6cu+HDtaHgI8FH8Kg9Al9Me35YeS8AAnwOnhrV8KnEs+HjjXgtgCf8/d1htz/eVt+Y1QPfje6J7wVfS3neCiX8PPHD8B4LYA3fA97qehI+jI+zPxb1YwU/Al7o+rO3GrzF9GMBP4uejZYk/HTNlI4SrfRrwkuA1+omTfwJXqJmrBZAA14SvFY3pvDS9SMJrwVOpP5kHuHVakYz/VLw2ujUUwhu8BLj5yy8BXip51fwmv3eGk9HTsCj8JbgpZ6HgR/p/154L3Cq56Hge+unB94bPZ/nIeG5C8CBRwAvJd58omn1ffr3WvfX4JHAqRNsSDw0fC39FDwi+KbhqQXI4ZHR81l+M4mn6ifCo4P/F4lPF+Dq+5ee04X7tumLIptMfBC8un663Pz4dsI8/vrpjsrZgU3DB/D4E+Hjv9EXYJPwKXgJHj39m4On0ANynvj0cEdM/2bgS+C1xOddi7QAOXzYV/VXnzgnn9XEknR56bK1xCOmP4HfwT1X00p5CsqFRzn5QsL3gPdUDXW0eNUPHPwIeuvk2qo2D/wifNhZy1ehRsFnE+/R//lb+Vxec50Fl4S36v8SvNlkI4U+WzXW3Z/WTLhts/fVSIJrJF67fprw0j2vAa4NL10/1Fu1Vd+0qomuUTVa9ZOnPa8asZ7XBrdKvFT9sOFH68YK3AN+tH7UPxFijW5VNbP1w4U/1w039R7gnonvqZ+eD5+x4T3BUeBb9dML38RHQPesGqp+wu/S539S9P3xNnzSezVBdn2yGwUcLfFU/Yx8sjtez+odZmjoiImPcIe3n89rQaWdmuPzo+iEv3/zqnR0uf6+94UQq51N4E+f/s5rhg2Pio8In6a99n+PtL4oaHWiRUs+GjwXnZP4B/iOfpKGh8VHSnwPOjfxF1MOSuWgwPei98LDJR8BfgR9Ch5h0vGGz9C7PDlTDTnbx1961o4n/Ax61wpl+quvhPLC94KfRZ+BX/W9V+14wEugz8K741vDS6FLwLviW8JLokvBX8z5VtVjAS8NHrFGpprag2jTk642vBa6dOLJ5GumXwueABe3kk58ejRcfAup9NgpDW8BrlU1VA2pLYAUvCW4JfzF5CP1qHcWvgAuXitUGjWrhpX+mUUYga9gm4BbJ776fA+1QpzzAQe+Ae3mYJ340iha/Trw2vw6+Df3++2+AwSc1iJA3VeonWmkl7sgm7hP/wDwgcxktVR5CQAAAABJRU5ErkJggg==";
// highlight-end

class InlineImagesExample {
  getInfo() {
    return {
      id: 'inlineimagesexample',
      name: 'Inline Images Example',
      blocks: [
        {
          opcode: 'reporter',
          blockType: Scratch.BlockType.REPORTER,
          // highlight-start
          text: 'some text [IMAGE] more text',
          arguments: {
            IMAGE: {
              type: Scratch.ArgumentType.IMAGE,
              dataURI: dangoIcon
            }
          }
          // highlight-end
        },
        {
          opcode: 'command',
          blockType: Scratch.BlockType.COMMAND,
          blockIconURI: colorIcon,
          // highlight-start
          text: 'some text [IMAGE] more text',
          arguments: {
            IMAGE: {
              type: Scratch.ArgumentType.IMAGE,
              dataURI: dangoIcon,
              flipRTL: true
            }
          }
          // highlight-end
        }
      ]
    };
  }

  reporter() {
    return 'Example block';
  }
  command() {

  }
}

Scratch.extensions.register(new InlineImagesExample());
