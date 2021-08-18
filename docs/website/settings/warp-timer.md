---
slug: /warp-timer
hide_table_of_contents: true
---

# Warp Timer

Warp Timer makes scripts check if they are stuck in a long or infinite loop and run at a low framerate instead of getting stuck until the loop finishes. This fixes most crashes but has a significant performance impact, so it's only enabled by default in the editor.

As a demonstration, consider the project https://turbowarp.org/446742201?stuck. This project has an infinite loop inside a run without screen refresh block. With Warp Timer enabled, the project will run at around two frames per second. With Warp Timer disabled, however, the script will never end.

Warp Timer was previously called "Stuck Checking".
