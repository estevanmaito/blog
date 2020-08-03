---
layout: 'post'
title: 'How to add Google Analytics to Next.js'
description: 'Track your Next.js website stats using Google Analytics in a simple way.'
datePublished: '2020-08-03T12:00Z'
tags: [next]
---

# How to add Google Analytics to Next.js

First step is to create a `_document.js` inside `pages` folder. Next.js docs recommend [this setup](https://nextjs.org/docs/advanced-features/custom-document), and based on it, we'll just add Google Analytics scripts.

```js
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXX-1"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || []
            function gtag() {dataLayer.push(arguments)}
            gtag('js', new Date())
            gtag('config', 'UA-XXXXXXXX-1')
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
```

First of all, change `UA-XXXXXXXX-1` for you tracking code. This is the standard tracking code, copied straight from the Analytics panel, the only difference is taht we need to put all scripts inside `dangerouslySetInnerHTML` so they are correctly fetched only on client.

Note that I also added the `lang` attribute to `Html` as it helps with SEO: `<Html lang="en">`
