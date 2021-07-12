---
sidebar_position: 1
slug: /development/getting-started
---

# Getting Started

These are the instructions for setting up the TurboWarp development environment or making custom builds on your own computer.

If you just want to use TurboWarp, visit https://turbowarp.org/. You don't need to follow these instructions.

### Dependencies {#dependencies}

Make sure you have these installed:

 - [Git](https://git-scm.com)
 - [Node.js](https://nodejs.org/en/)

You might have to restart your terminal or computer for them to be fully installed. We assume you have some familiarity with the command line. Note that TurboWarp is a large app that may take a lot of resources to build.

### A note on how Scratch is organized {#organization}

Scratch 3 is organized into a bunch of different repositories. Each implements a part of the app. Here's the ones that TurboWarp cares enough about to fork:

 - scratch-vm executes the project and is where the compiler lives
 - scratch-render renders sprites and implements "touching" blocks and is where high quality pen lives
 - scratch-blocks is the script editor
 - scratch-gui implements the outer interface, connects everything together, and is where addons live
 - scratch-paint is the costume editor
 - scratch-l10n contains translations

### Building the GUI {#gui}

The GUI is the minimum to build TurboWarp.

```bash
git clone https://github.com/TurboWarp/scratch-gui
cd scratch-gui
npm install
npm start
```

http://localhost:8601/

If you just want to build the GUI, you can stop here.

### Build {#build}

While `npm start` is useful for development, at some point you'll need to get HTML, JS, etc. out. To do this, run this in the scratch-gui folder:

```
npm run build
```

Output goes in the `build` folder.

When deploying TurboWarp to a website, you should enable production mode. This will result in faster execution and a greatly reduced file size.

```bash
# mac, linux
NODE_ENV=production npm run build

# windows command prompt (untested)
set NODE_ENV=production
npm run build

# windows powershell
$env:NODE_ENV="production"
npm run build
```

By default TurboWarp generates links like https://turbowarp.org/editor.html#123 However, by setting `ROOT=/` and `ROUTING_STYLE=wildcard` (in the same way that you set `NODE_ENV=production`), you can get routes like https://turbowarp.org/123/editor instead. Note that this requires a server that will setup the proper aliases. The webpack development server in scratch-gui is setup for this. For production you'd want something more like https://github.com/TurboWarp/turbowarp.org

### Linking other packages {#linking}

If you're interested in changing parts of TurboWarp other than the GUI, you have to do extra steps. You do not need to do this if you are only interesting in scratch-gui.

It's probably easiest to understand by example, so here's how you would link local instances of scratch-vm and scratch-render to your local scratch-gui:

```bash
git clone https://github.com/TurboWarp/scratch-vm
git clone https://github.com/TurboWarp/scratch-render

cd scratch-vm
npm install
npm link
cd ..

cd scratch-render
npm install
npm link
cd ..

cd scratch-gui
npm link scratch-vm scratch-render
```
