import React from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import { frontMatter as posts } from './*.md'
import SEO from '@/components/SEO'

function formatPath(path) {
  return path.replace(/\.md$/, '')
}

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
        <div className="space-y-6">
          {posts.map((post) => (
            <Link key={formatPath(post.__resourcePath)} href={formatPath(post.__resourcePath)}>
              <a className="block">
                <h2 className="mb-2 text-xl font-bold text-gray-900">{post.title}</h2>
                <p className="text-gray-700">{post.description}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}

export default Blog
