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
 - Sensing the color of the video sensing extension is disabled when cloud variables or custom extensions are used. This fixes the same issue as Scratch's "For privacy reasons, cloud variables have been disabled in this project because it contains video sensing blocks" warning.

## For bot developers and advanced users {#advanced}

Connecting to our servers using bots and other custom clients is acceptable, within reason. We have some guidelines that we expect bot developers to follow:

 * When using custom project IDs, don't use random numbers. Project IDs aren't contrained to numbers, so use text that lets us verify that your use is legitimate. For example, `example.com/my-project` is a lot more useful than `3498394834`. **If we see excessive cloud variable traffic to a numerical project ID that corresponds to an empty Scratch project, we may disable variables for that project.**
 * Bots must set a proper `User-Agent` header. Include something like a Scratch username, GitHub repository, website, etc. so we can learn more about your bot. Cloud variable libraries should set a default User-Agent with generic library information and provide an API for library users to add their own contact information (ideally, make using this API mandatory). An example User-Agent would be `foo-client/1.0.0 ExampleBot/4.2 scratch.org/users/TestMuffin`. Pretending to be a web browser is not okay and is trivial to detect. **We will very likely start blocking bots without a valid User-Agent in the near future.**
 * Remember that a WebSocket is a bi-directional pipe, not a single-use HTTP request. If you need to read variables as they change, open exactly one WebSocket connection and let the server send updates as they happen. Once a WebSocket is no longer needed, close it. If you only want to read changes on intervals of several minutes or more, it would be better to open a WebSocket, wait to receive any variables, then close the connection. **We will very likely start blocking bots that constantly open and close many connections or that open simultaneous connections to the same project.**
 * Bots must not send more than 10 cloud variable updates per second. It is server-side throttled at that point; sending more just wastes bandwidth. **We may start blocking bots that attempt to set variables too fast.**
 * In order to reduce CPU and network usage, the server batches multiple cloud variable updates to send as a group. The server doesn't promise that it will send each variable update in the same order as they were received or that it won't skip some updates that were replaced by more recent values.
 * Please don't include Scratch session cookies when connecting to our servers.

Remember that this is a free service. Act accordingly.
