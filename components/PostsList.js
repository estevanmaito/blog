import React from 'react'
import Link from 'next/link'
import { formatDate, formatPath } from '@/utils/format'
import TagPill from './TagPill'

function PostsList({ posts }) {
  const sortedPosts = posts.sort((a, b) => {
    if (a.datePublished > b.datePublished) return -1
    if (a.datePublished < b.datePublished) return 1
    return 0
  })

  return (
    <div className="space-y-6">
      {sortedPosts.map((post) => (
        <div key={formatPath(post.__resourcePath)}>
          <Link href={`/${formatPath(post.__resourcePath)}`}>
            <a className="block mb-2">
              <span className="text-sm text-gray-700">{formatDate(post.datePublished)}</span>
              <h2 className="text-xl font-bold leading-6 text-gray-900">{post.title}</h2>
            </a>
          </Link>
          <div className="space-x-4">
            {post.tags.map((tag) => (
              <TagPill tag={tag} key={tag} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostsList
