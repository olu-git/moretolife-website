# more2life.com.au helper

The MTL website now lives on Easol at https://www.more2life.com.au.

This repo only does two jobs on GitHub Pages:

1. Hosts the Easol home page's hero video: `video/start-of-recap.mp4`
   (Easol can't host video files).
2. Sends anyone visiting the bare domain `more2life.com.au` to `https://www.more2life.com.au`
   (`index.html` and `404.html`).

To change the hero video: replace the file in `video/`, push, and update the
`<source src>` in the Easol hero block if the filename changed.

The old full site is in git history (commit 0a63aad on `main` before this change)
and archived in OluOS: MTL/Resources/Website Archive/.
