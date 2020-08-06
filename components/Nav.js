import React from 'react'
import Link from 'next/link'

function Nav() {
  return (
    <nav className="max-w-2xl px-4 py-6 mx-auto text-gray-800 xs:px-8 lg:max-w-5xl">
      <div className="flex items-center justify-between -mx-4 text-sm">
        <Link href="/">
          <a className="px-2 py-1 transition-colors duration-100 ease-in-out rounded-md sm:px-4 sm:py-2 hover:bg-gray-50">
            Estevan Maito
          </a>
        </Link>
        <ul className="flex justify-end space-x-3 sm:space-x-6">
          <li>
            <Link href="/">
              <a className="px-2 py-1 transition-colors duration-100 ease-in-out rounded-md sm:px-4 sm:py-2 hover:bg-gray-50">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a className="px-2 py-1 transition-colors duration-100 ease-in-out rounded-md sm:px-4 sm:py-2 hover:bg-gray-50">
                Blog
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="px-2 py-1 transition-colors duration-100 ease-in-out rounded-md sm:px-4 sm:py-2 hover:bg-gray-50">
                About
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
