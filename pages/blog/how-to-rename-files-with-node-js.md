---
layout: 'post'
title: 'How to rename files with Node.js'
description: 'In a few lines, rename files around using Node.js.'
datePublished: '2020-08-05T12:00Z'
tags: [node]
---

# How to rename files with Node.js

I decided to create this post to show how I renamed all the files for the posts of this blog and how you can, with this small script, rename files with Node.js.

I had dozens of pages that looked like this:

This new code would turn this structure:

```
pages/
└── blog/
    ├── 2020-06-21-accessible-navigation-using-react-router.md
    ├── 2020-06-22-improving-developer-experience.md
    ├── 2020-07-08-working-with-portals-in-next-js.md
    └── 2020-07-09-testing-react-with-svg-and-jest.md
```

and the result I was looking for was this:

```
pages/
└── blog/
    ├── accessible-navigation-using-react-router.md
    ├── improving-developer-experience.md
    ├── working-with-portals-in-next-js.md
    └── testing-react-with-svg-and-jest.md
```

As you can see, I need to remove the date from the beginning.

The complete code for it is composed by just 15 lines, but I included some comments so you can just copy/paste this and get your head around each line in your own editor. I called it `rename.js`.

```js
// rename.js
// work with the File System
const fs = require('fs')

// where your files are located
const folderPath = 'pages/blog'

// get a list of all the files inside a folder
const files = fs.readdirSync(folderPath)

// iterate through each file
files.forEach((file) => {
  // use your own case to find matching files
  // in this case, I want to rename files starting
  // with 2020
  if (file.startsWith('2020')) {
    // rename expects 2 arguments
    // 1. the path to the file to rename
    // 2. the destination
    fs.renameSync(
      // the current location of the file
      folderPath + '/' + file,
      // the resulting file
      // in this case, I'm just removing the first 11 characters
      folderPath + '/' + file.substring(11)
    )
  }
})
```

To execute it, run in the terminal:

```shell
node <the location of your script>/rename.js
```

Now, a brief explanation to not sound redundant with the comments.

The only package needed for this, `fs`, is already part of Node, so you don't need to install from npm.

In the snippet below, `file` returns this, for example: `2020-07-28-generate-sitemap-for-static-site-with-next-js.md`

So you have endless options here: you could just change files with a specific extension, a specific word, etc.

<!-- prettier-ignore-start -->
```js
if (file.startsWith('2020')) {
  fs.renameSync(
    folderPath + '/' + file,
    folderPath + '/' + file.substring(11)
  )
}
```
<!-- prettier-ignore-end -->
