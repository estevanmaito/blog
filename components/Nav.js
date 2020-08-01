import React from 'react'
import Link from 'next/link'

function Nav() {
  return (
    <nav className="max-w-2xl px-4 py-6 mx-auto text-gray-800 xs:px-8 lg:max-w-5xl">
      <div className="flex justify-between -mx-4">
        <Link href="/">
          <a className="px-4 py-2 transition-colors duration-100 ease-in-out rounded-md hover:bg-gray-50">
            Estevan Maito
          </a>
        </Link>
        <ul className="flex justify-end space-x-6">
          <li>
            <Link href="/">
              <a className="px-4 py-2 transition-colors duration-100 ease-in-out rounded-md hover:bg-gray-50">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a className="px-4 py-2 transition-colors duration-100 ease-in-out rounded-md hover:bg-gray-50">
                Blog
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="px-4 py-2 transition-colors duration-100 ease-in-out rounded-md hover:bg-gray-50">
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
