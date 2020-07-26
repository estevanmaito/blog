import React from 'react'
import Link from 'next/link'

function Nav() {
  return (
    <nav className="max-w-2xl p-4 mx-auto">
      <ul className="flex justify-end space-x-6 text-gray-900">
        <li>
          <Link href="/">
            <a className="p-1">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a className="p-1">Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="p-1">About</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
