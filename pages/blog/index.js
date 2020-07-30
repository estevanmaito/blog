import React from 'react'
import { frontMatter as posts } from './*.md'
import Nav from '@/components/Nav'
import SEO from '@/components/SEO'
import PostsList from '@/components/PostsList'

function Blog() {
  const title = 'Blog - Estevan Maito'
  const description = 'Random thoughts about web development, design, databases and code in general'
  const canonical = 'https://estevanmaito.me/blog'
  const image = 'https://estevanmaito.me/social-image.png'

  return (
    <>
      <SEO title={title} description={description} canonical={canonical} image={image}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
                "@context": "https://schema.org",
                "@type": "Blog",
                "url": "${canonical}",
                "name": "${title}",
                "description": "${description}",
                "image": {
                  "@type": "ImageObject",
                  "url": "${image}"
                },
                "author": {
                  "@type": "Person",
                  "name": "Estevan Maito",
                  "sameAs": [
                    "https://twitter.com/estevanmaito",
                    "https://github.com/estevanmaito"
                  ]
                }
              }`,
          }}
        ></script>
      </SEO>
      <Nav />
      <main className="max-w-2xl px-4 mx-auto my-10">
        <h1 className="mb-8 text-4xl font-extrabold leading-tight text-gray-900">Blog</h1>
        <PostsList posts={posts} />
      </main>
    </>
  )
}

export default Blog
