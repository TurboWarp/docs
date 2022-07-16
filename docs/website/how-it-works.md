---
slug: /how
hide_table_of_contents: true
---

# How TurboWarp runs Scratch projects faster

TurboWarp uses a *compiler* to while Scratch uses an *interpreter*. This allows TurboWarp to run somewhere between 10-200x faster depending on the project, but it makes live script editing impracticable<sup>[\[a\]](#footnote-1)</sup>.

export const Test = ({name, id, scratch, tw}) => (
  <tr>
    <td><a href={`https://scratch.mit.edu/projects/${id}/`}>{name}</a></td>
    <td>{scratch}</td>
    <td>{tw}</td>
  </tr>
);

<table style={{textAlign: "center"}}>
  <thead>
    <tr>
      <th>Test</th>
      <th>Scratch</th>
      <th>TurboWarp</th>
    </tr>
  </thead>
  <tbody>
    <Test name="Quicksort 200000 items" id="310372816" scratch="10.746s" tw="0.0528s" />
    <Test name="Cycles Raytracer r=1 s=10 dof=.08" id="412737809" scratch="832s" tw="16s" />
  </tbody>
</table>

(Tested in Chromium 103 on Linux)

Consider the following script:

![When green flag clicked, forever, move my variable steps](./assets/forever-move-my-variable-steps.svg)

Scratch's interpreter walks an [abstract syntax tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree) at runtime. Internally that looks like this:

```json
{
  "va[U{Cbi_NZpSOSx_kVA": {
    "opcode": "event_whenflagclicked",
    "inputs": {},
    "fields": {},
    "next": "tzXnZ{8G!xK|t^WAWF{m",
    "topLevel": true
  },
  "tzXnZ{8G!xK|t^WAWF{m": {
    "opcode": "control_forever",
    "inputs": {
      "SUBSTACK": {
        "name": "SUBSTACK",
        "block": "$xf$bq|xl(}RhT-K,taS"
      }
    },
    "fields": {},
    "next": null,
    "topLevel": false
  },
  "$xf$bq|xl(}RhT-K,taS": {
    "opcode": "motion_movesteps",
    "inputs": {
      "STEPS": {
        "name": "STEPS",
        "block": "cw__.I:g}Y~`:5KmO00q"
      }
    },
    "fields": {},
    "next": null,
    "topLevel": false
  },
  "cw__.I:g}Y~`:5KmO00q": {
    "opcode": "data_variable",
    "inputs": {},
    "fields": {
      "VARIABLE": {
        "name": "VARIABLE",
        "id": "`jEk@4|i[#Fk?(8x)AV.-my variable"
      }
    },
    "next": null,
    "topLevel": false
  }
}
```

Whenever Scratch executes any block, it has to do a lot of things:

 - It has to look up the block using its ID and which function the block's opcode corresponds to.
 - If the block has any inputs, those are also blocks, and must be run first.
 - Scratch scripts can be yielded, so all of this has to happen in a way that can be paused and resumed later.
 - Scratch scripts can also be changed at any time so it's harder to cache everything ahead of time.
 - etc. There is a *lot* going on in Scratch whenever it executes even a single block.

The code that does all this is written in JavaScript. Your browser is already doing a similar variety of tasks whenever it executes any JavaScript code (it's much more complicated, don't worry too much about it), but now the overhead of the interpreter has to be added on top of that.

TurboWarp's compiler removes all of that overhead by converting scripts directly to JavaScript functions, for example, the above script becomes:

```js
const b0 = stage.variables["`jEk@4|i[#Fk?(8x)AV.-my variable"];
return function* () {
  while (true) {
    runtime.ext_scratch3_motion._moveSteps((+b0.value || 0), target);
    yield;
  }
};
```

Things to notice:

 - No more looking up block IDs or opcodes: it's all just JavaScript.
 - No more looking up inputs manually: they're just JavaScript arguments.
 - No more manual state maintaining: your browser does it all for us.
 - As this is a single JavaScript function, we can't implement live script editing<sup>[\[a\]](#footnote-1)</sup>
 - This JavaScript looks very strange compared to typical human-written JavaScript and runs slower because we have to maintain compatibility with certain strange Scratch behaviors.

Of course, this is a very simple example where the interpreter overhead is negligible. For the most projects, the interpreter is good enough. It's only when you start executing hundreds of thousands of blocks per frame that the interpreter becomes problematic.

----

<a name="footnote-1" />
[a] - This means if you start a script, you won't be able to move, remove, or add blocks and have the changes be reflected in real time as they are in Scratch. We believe there are some ways we could make this work, but they will hurt performance or add significant complexity. It's something we want to implement eventually, but not now.
