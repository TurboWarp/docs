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
 - The variable length limit has been significantly increased to allows tens of thousands of characters.
 - Cloud variables can still only hold numbers.
 - Cloud variables are reset whenever the server restarts or when no one is in the project for a short period of time, so things like leaderboards won't be saved very long.
 - Cloud variables are disabled when the editor is opened.
 - Do not abuse cloud variables to make unmoderated chat rooms.
 - There are no public cloud variable history logs.

## For bot developers and advanced users {#advanced}

Connecting to our servers using bots and other custom clients is acceptable, within reason.

We have some guidelines that we would like to see bot developers begin to follow:

 * When using custom project IDs, please don't use random numbers. Project IDs don't have to be numers, so use text that lets us verify that your use is legitimate. For example, `example.com/my-project` is a lot more useful than `3498394834`. **If we see excessive cloud variable traffic to a numerical project ID that corresponds to an empty Scratch project, we may disable variables for that project.**
 * Bots should set a proper `User-Agent` header. Include something like a Scratch username, GitHub repository, website, etc. so we can learn more about your bot. Cloud variable libraries should set a default User-Agent with generic library information and provide an API for library users to add their own contact information (ideally, make using this API mandatory). An example User-Agent would be `foo-client/1.0.0 ExampleBot/4.2 scratch.mit.edu/users/TestMuffin`. Pretending to be a browser is not okay (and easy to detect). **We may start blocking bots without a valid User-Agent.**
 * Remember that a WebSocket is a bi-directional pipe, not just an HTTP request. If you need to read variables as they change, open exactly one WebSocket and let the server send updates as they happen. Once a WebSocket is no longer needed, close it. If you only want to read changes occasionally, opening a WebSocket, reading the variables, then closing it each time is preferred. **We may start blocking bots that constantly open and close connections or that open simultaneous connections to the same project.**
 * Bots should not send more than ~10 cloud variable updates per second. **We may start blocking bots that attempt to set variables too fast.**
 * Please don't include Scratch session cookies when connecting to our servers.

Remember that this is a free service. Act accordingly.
