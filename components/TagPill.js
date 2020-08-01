import React from 'react'
import Link from 'next/link'

function TagPill({ tag }) {
  return (
    <span className="inline-block text-sm hover:font-semibold">
      <Link href={`/tags/${tag}`}>
        <a>#{tag}</a>
      </Link>
    </span>
  )
}

export default TagPill
