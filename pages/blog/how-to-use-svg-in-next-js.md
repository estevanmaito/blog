---
layout: 'post'
title: 'How to use SVG in Next JS'
description: 'Next.js does not support SVGs live Create React App, for example, so here I list the steps to make it accept SVGs.'
datePublished: '2020-07-31T12:00Z'
tags: [svg, next]
---

# How to use SVG in Next JS

If you've tried to just load an SVG file in Next, you may have probably seen an error saying:

```shell
Module parse failed: Unexpected token
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file.
```

What I'm trying to do is to import an SVG file as a component, like this:

```jsx
import React from 'react'
import GithubIcon from '@/icons/github.svg'

export default function App() {
  return <GithubIcon />
}
```

The solution to make this work, depends on adding an SVG loader to `next.config.js`. Start by installing [next-react-svg](https://www.npmjs.com/package/next-react-svg):

```shell
npm i next-react-svg
```

Then in `next.config.js`, add this module and wrap your config with it.

```js
const withReactSvg = require('next-react-svg')
const path = require('path')

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'icons'),
  webpack(config, options) {
    return config
  },
})
```

This is the minimum you need to make it work. Note that in my case, my icons live inside the `icons` folder in the root of the project. It may be in another location in your case.

Restart your Next server if it was still running and now you are able to import and use SVG files like components.
