---
hide_table_of_contents: true
---

# A better development server

import {Spoiler} from './utils.js';

The HTTP server built into Python is simple to use, but it's primitive. We can do better. This section is strictly optional, but we think it will make your life easier.

## TurboWarp/extensions

The GitHub repository for extensions.turbowarp.org is [TurboWarp/extensions](https://github.com/TurboWarp/extensions). One of the things available here is the development server that we use, along with the code that makes the website. You can run it locally too.

This will require Git and Node.js to be installed locally. Run these commands to download the server and install its dependencies:

```bash
git clone https://github.com/TurboWarp/extensions.git
cd extensions
npm ci
```

Now open up your code editor to the "extensions" repository you just downloaded.

Close your old development server and start the new one with:

```bash
npm run dev
```

Now navigate to [http://localhost:8000](http://localhost:8000) -- you should see a list similar to [extensions.turbowarp.org](https://extensions.turbowarp.org/). For now, we're not going to worry about the list, we're just going to use the development server part.

The place to save your extension JS is in the `extensions` folder inside of the repository. If you intend to submit these to us later, you should create a user folder for your extensions. For example, if your username is `TestMuffin`, you might save your fetching extension in the folder `extensions/TestMuffin/fetch.js` and load it using http://localhost:8000/TestMuffin/fetch.js. The extension should then also use an ID similar to `testmuffinfetch`.

The local development server is set up with the correct headers so that you don't need to manually hard refresh to ensure your script changes apply, and it tries to mimic the real extensions.turbowarp.org website as much as possible. It also includes TypeScript hints for many common Scratch APIs and ESLint rules for common mistakes.

In the future, we plan to add more development features.

More details: https://github.com/TurboWarp/extensions/blob/master/CONTRIBUTING.md

## Next steps

Next, let's use our improved development experience to [learn about more of the APIs and options available to extensions](./assorted-apis).
