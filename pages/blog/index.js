import React from 'react'
import Link from 'next/link'
import Nav from '@/components/nav'
import { frontMatter as posts } from './*.md'

function formatPath(path) {
  return path.replace(/\.md$/, '')
}

function Blog() {
  return (
    <>
      <Nav />
      <main className="max-w-2xl px-4 mx-auto my-10">
        <h1 className="mb-8 text-4xl font-extrabold text-gray-900">Blog</h1>
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
