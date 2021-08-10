---
layout: 'post'
title: 'How to serve and redirect a subfolder in Vercel'
description: 'Serve a different project from a subfolder in Vercel'
datePublished: '2020-08-29T15:00Z'
tags: [vercel, react, next]
---

# How to serve and redirect a subfolder in Vercel

This is the blog post I wish I have read months ago, when even Vercel's support couldn't help me. Heres what I wanted to do:

1. I have windmillui.com hosted with Vercel. It's a Next.js site.
2. I wanted to serve a (actually two, but they are very similar) Create React App from a subfolder like: windmill.com/dashboard-html

Seems simple, but I tried to serve the CRA build inside the Next app, using a subdomain like demo.windmillui.com/dashboard-html and a ton of other stuff. In the end, I've just created two Vercel projects, built them and linked them directly from windmillui.com. The result is this aberration https://windmill-dashboard-react.vercel.app/login

## The beautiful solution

The only documentation that exists about this is a one line example [here](https://vercel.com/docs/configuration#project/redirects) and a [discussion](https://github.com/vercel/next.js/discussions/13347) on GitHub.

Create a `vercel.json` file in your project root. This project should be the one that hosts your projects and possibly is where you have your domain setup.

```json
{
  "rewrites": [
    { "source": "/pomodoro/:asset*", "destination": "https://pomodoro-murex.vercel.app/:asset*" },
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

**TL;DR;** The first `source` points everything coming to `/pomodoro` to `https://pomodoro-murex.vercel.app`; `:asset*` can have any name, as long as it is present in both `source` and `destination` and is between `:<here you can put anything>*`. The second `source` just routes everything else to the current project's root.

To better understand why I setup my rewrites the way I did, you may find useful to know my project structure (it's pretty simple, don't worry).

This blog is part of my personal website, a Next.js app served like you would expect, with my pages living under `pages`. It's deployed to Vercel through the GitHub integration. Now I want to serve other projects, from different repositories, from the same domain but different subfolders. In this case [estevanmaito.me/pomodoro](https://estevanmaito.me/pomodoro).

If you try this:

```json
{ "source": "/pomodoro", "destination": "https://pomodoro-murex.vercel.app/" },
```

It won't work, because, in my case, the Pomodoro app depends on CSS that is only hosted in https://pomodoro-murex.vercel.app, like `/static/main.css`, and with the approach above, it would try to access these static assets from https://estevanmaito.me/pomodoro/static/main.css, which doesn't contain any of that.

To solve that we use this line:

```json
{ "source": "/pomodoro/:asset*", "destination": "https://pomodoro-murex.vercel.app/:asset*" }
```

It will map everything coming after `/pomodoro/` to `https://pomodoro-murex.vercel.app/`.

We finish routing everything else to the current root with:

```json
{ "source": "/(.*)", "destination": "/" }
```

## Is this the best solution?

I don't know, but after struggling for some time, this is the _working solution_.

Let me know if you find it useful or you think it could be improved on Twitter [@estevanmaito](https://twitter.com/estevanmaito).
