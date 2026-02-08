---
slug: /cloud-variables
hide_table_of_contents: true
---

# Cloud Variables

TurboWarp has its own cloud variable server independent of Scratch.

Some things to keep in mind:

 - Anyone can change their username using the "Edit > Change Username" menu. A user who appears to be named "griffpatch" is most likely not the real griffpatch.
 - To reduce abuse, the cloud variable server rejects any username that doesn't belong to an existing Scratch account.
 - Names of Scratch Team members cannot be used due to potential abuse. That includes ScratchCat.
 - The variable length limit has been increased to 100000 characters.
 - Cloud variables can still only hold numbers.
 - Cloud variables are reset whenever the server restarts or when no one is in the project for a short period of time, so things like leaderboards won't be saved very long.
 - Cloud variables are disabled when the editor is opened.
 - Do not abuse cloud variables to make unmoderated chat rooms.
 - There are no public cloud variable history logs.
 - Sensing colors or motion using the video sensing extension is disabled when cloud variables or custom extensions are used.

---

## For bot developers and advanced users {#advanced}

We allow and encourage developing bots and custom clients. However, due to persistent abuse, we ask you to follow a few rules. Remember that **this is a free service operated by volunteers.** The CPU to parse messages and the bandwidth to send messages to other users is not free. The information below is applicable to both users and authors of cloud variable libraries.

### Protocol {#protocol}

The protocol is the [same as Scratch's cloud variables](https://github.com/TurboWarp/cloud-server/blob/master/doc/protocol.md). We provide a [barebones reference library for Node.js](https://www.npmjs.com/package/@turbowarp/mist). As the protocol is fully open, you do not need to use our library if you don't want to.

### User-Agent is required {#user-agent}

Bots must provide a valid [User-Agent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent) header in their connection. That includes contact information (such as a Scratch profile link, email address, GitHub issue page, etc.) and the name and version of the cloud variable library being used (if applicable). Exact syntax does not matter; just needs to be human readable. Some examples of good User-Agents:

 - `multiplayer leaderboard bot by https://scratch.mit.edu/users/TestMuffin`
 - `cloud-variable-library/1.0.1 contact@example.com`

The only exception is if your bot is running in a browser where you can't control the User-Agent. In this case, your browser will automatically include other headers like Origin with the name of your website anyway. Pretending to be a browser is not okay and is easy to detect.

Ask the author of your cloud variable library or refer to your WebSocket library's documentation about custom headers to learn how to add a User-Agent.

<details>
<summary>If you are developing a cloud variable library</summary>

You should expose an API to set the User-Agent, and you should make using this API mandatory. For example, for some hypothetical cloud variable API, you might have an option like this:

```js
const CloudConnection = require('...');

const connection = new CloudConnection({
    username: '...',
    projectId: '...',
    // highlight-start
    // UPDATE THIS!
    contactInformation: 'contact@example.com'
    // highlight-end
});

connection.on('connected', () => { /* ... */ });
connection.on('set', (name, value) => { /* ... */ });
```

Your library will see the `contactInformation` option and concatenate it with the name and version of your library, resulting in a final User-Agent like `CloudConnectionLib/0.3.3 contact@example.com`.

If someone does not specify `contactInformation`, you should not let them continue anyways. User-Agents that are lacking information will be blocked, and you will end up with nonsense bug reports from users saying "cloud variable wont connect" with no further details. Good luck diagnosing that! Instead, give them a nice error message so they can figure it out without bothering you.

To actually set the User-Agent, look at the documentation for the WebSocket library you use. They probably won't mention User-Agent specifically, but they should mention how to set headers in general. For example, using the Node.js [ws](https://www.npmjs.com/package/ws) client, you would do:

```js
const ws = new WebSocket("wss://clouddata.turbowarp.org", {
  headers: {
    "user-agent": userAgentGoesHere
  }
});
```

</details>

### Project ID {#project-id}

Project IDs are not limited to just numbers -- they can be any text you want. If you're using a custom ID for a project that doesn't live on the Scratch website, use text like `example.com/my-project` so that we can verify your project is legitimate. If we see a lot of cloud variable activity using a project ID that doesn't make sense, we will disable that project ID.

<details>
<summary>If you are developing a cloud variable library</summary>

For this reason, your project ID options should be strings, not an integer or other numeric type.

</details>

### Usernames {#username}

The cloud variable protocol requires you to provide a username. The server tries to ensure that all usernames are safe before allowing the connection. We recommend just setting the username to `player` followed by between 2 and 7 random numbers as your connection will start faster (we won't ask the Scratch API to validate it). If your bot needs a specific username, store it in a separate variable.

<details>
<summary>If you are developing a cloud variable library</summary>

As long as you are forcing users to have a valid User-Agent, the username is redundant, so you can eschew the username option and generate a random one automatically.

</details>

### Don't rapidly open and close connections {#one-connection}

We've seen a pattern of bots opening a connection, closing it, and then immediately opening a new one in an endless loop. The end result is a slow bot that uses way more network and CPU resources than it has any reason to, which is not allowed. We think this is because some poorly designed libraries have APIs that let people write code like this:

```py
while True:
    value = cloudlibrary.get_var(project_id, username, user_agent, variable_name)
    print(f"{variable_name} is {value}")
```

Where `cloudlibrary.get_var` is implemented by opening a connection and then closing it immediately. Instead, libraries should offer [event-driven](https://en.wikipedia.org/wiki/Event-driven_programming) APIs. Instead of constantly asking the server for the latest values, open exactly one WebSocket, and let the server send updates as they happen. WebSockets are very efficient: If no variables are changing, the connection remains idle. If there are a lot of variables changing, you'll get the updates as soon as possible. Equivalent code might instead be:

```py
def on_set(name, value):
    print(f"{name} is {value}")
connection = cloudlibrary.connect(project_id, username, user_agent, on_set)
```

It is possible to offer an API like `get_var` as long as the implementation is event-driven and uses one connection internally (then `get_var` just returns the most recently received value). It just takes a little bit of work.

### Updates are buffered {#buffering}

For performance, the server will buffer up several cloud variable updates to send out as one group. Updates are not guaranteed to be sent in the same order they are received, and some updates may be skipped entirely. Because of this buffering, sending updated variables more than 10 times per second is completely redundant.

### Respond to pings {#pings}

The server will periodically send a [WebSocket ping frame](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#pings_and_pongs_the_heartbeat_of_websockets), and you must respond with a pong or else the connection will drop. Refer to the documentation for your WebSocket library to see how to enable ping/pong support if it isn't enabled by default.

### Important debug information {#debug}

To make things easier for us, you, and anyone using your library, please log these things somewhere (such as in error messages) instead of silently ignoring them:

 - WebSocket close codes. All of the 4XXX codes are [listed in this table](https://github.com/TurboWarp/cloud-server/blob/master/doc/protocol.md#server---client). Would you rather see `connection closed` or `connection closed with code 4002`? Looking up the latter's code in the table makes it clear that the username is the problem.
 - Invalid JSON received from the server. If the server has something to tell you beyond just what the close code table says, it might send you a plain English sentence instead of a JSON object. When your JSON parser throws an error, you should log the actual raw text received from the server so you get error messages like `Received invalid JSON from server: The cloud data library you are using is putting your Scratch account at risk by sending us your login token for no reason` instead of `JSON.parse: unexpected character at line 1 column 1 of the JSON data`. Which of those would you rather see?
