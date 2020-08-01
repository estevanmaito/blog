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
            <a className="flex items-start justify-between px-4 py-2 mb-2 -mx-4 space-x-4 transition-colors duration-100 ease-in-out rounded-md hover:bg-gray-50">
              <div>
                <span className="block text-sm text-gray-700 md:hidden">
                  {formatDate(post.datePublished)}
                </span>
                <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900">
                  {post.title}
                </h2>
                <div className="inline-block space-x-4 text-gray-700">
                  {post.tags.map((tag) => (
                    <TagPill tag={tag} key={tag} />
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0">
                <span className="hidden text-sm text-gray-700 md:block">
                  {formatDate(post.datePublished)}
                </span>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default PostsList
