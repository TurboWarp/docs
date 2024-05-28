---
hide_table_of_contents: true
---

# Dealing with things that aren't instant

import {ExtensionCode} from './utils.js';

Sometimes you will want your extension to wait for an "asynchronous" or "async" operation to complete before resuming execution (versus resuming execution early and potentially causing problems). A common example of this is making a request: no matter how fast your internet is, any network request is not going to be instant.

Modern JavaScript has a cool utility for dealing with these: [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). These are how your block can inform Scratch that your block is waiting for an async operation to complete, and the eventual value.

<ExtensionCode title="async">{require('!raw-loader!@site/static/example-extensions/async.js')}</ExtensionCode>

Notice the async blocks are defined the same as other blocks in getInfo(). The only difference is the return value of the function.

The first block in this question is roughly equivalent to Scratch's built-in wait block. Notice that we had to manually construct a Promise this time because setTimeout does not use Promises. When Scratch hits this block, it won't continue executing the script until this promise resolves. Scratch may continue executing other scripts in the meantime. Wait is a command block (no return value), so it shouldn't resolve with anything (it would be ignored).

The second block is a block that tries to fetch a URL, similar to the "Fetch" extension on https://extensions.turbowarp.org/. fetch() already returns a promise, so we simply chain on top of it instead of making a new promise this time.

The restriction on return values still applies: you still need to ensure that you return a string, number, or boolean, so we call text() in then() to convert the Response object from fetch() into a string.

This also demonstrates error handling. Whenever your promises can reject, fail, or error, you should add a catch(). How exactly you handle this will depend on your use case, but often you will want to log the error to the console and return a string indicating the error.

## Exercises

1. Create a block that waits 100ms for each time it's been called. For example, the first time it's run it waits 100ms, then 200ms, then 300ms, then 400ms, etc.

## Next steps

You may have realized that even your blocks that don't return a Promise don't actually run instantly and your extension can't access many APIs. To determine why, we need to [discuss what the "sandbox" really is, and what it means for your extensions](./sandbox.md).
