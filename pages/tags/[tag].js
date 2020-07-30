import React from 'react'
import Link from 'next/link'
import { getTags, getPostsByTag } from '@/api/index'

function formatPath(path) {
  return path.replace(/\.md$/, '')
}

function Tag(props) {
  const { posts, tag } = props
  return (
    <>
      <h1>Tag: {tag}</h1>
      <p>{posts.length} posts found</p>
      <div>
        {posts.map((post) => (
          <Link href={`/${formatPath(post.__resourcePath)}`}>
            <a>
              <p key={post.title}>{post.title}</p>
            </a>
          </Link>
        ))}
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const tags = await getTags()
  const paths = tags.map((tag) => ({
    params: { tag },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps(ctx) {
  return {
    props: { posts: await getPostsByTag(ctx.params.tag), tag: ctx.params.tag },
  }
}

export default Tag
