import Link from 'next/link'
import Nav from '@/components/Nav'
import SEO from '@/components/SEO'
import { formatDate, formatPath } from '@/utils/format'
import TagPill from '@/components/TagPill'
import GithubIcon from '@/icons/github.svg'
import TwitterIcon from '@/icons/twitter.svg'
import NewsletterIcon from '@/icons/newsletter.svg'

export default function Post(frontMatter) {
  return ({ children: content }) => {
    const canonicalURL = `https://estevanmaito.me/${formatPath(frontMatter.__resourcePath)}`
    const socialImageURL = `https://estevanmaito.me/${formatPath(
      frontMatter.__resourcePath,
      '.png'
    ).replace('blog', 'social')}`

    return (
      <>
        <SEO
          title={`${frontMatter.title} - Estevan Maito`}
          description={frontMatter.description}
          canonical={canonicalURL}
          image={socialImageURL}
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `{
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "url": "${canonicalURL}",
                "name": "${frontMatter.title} - Estevan Maito",
                "description": "${frontMatter.description}",
                "datePublished": "${frontMatter.datePublished}",
                "image": {
                  "@type": "ImageObject",
                  "url": "${socialImageURL}"
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

        <div className="grid max-w-2xl grid-cols-9 px-4 mx-auto my-10 xs:px-8 lg:max-w-5xl">
          <main className="col-span-12 prose lg:col-span-6 max-w-none">{content}</main>
          <aside className="hidden lg:col-start-8 lg:col-span-2 lg:block">
            <div className="">
              <img
                className="object-cover w-24 h-24 mx-auto mb-4 rounded-full"
                src="/img/me-144.png"
                alt=""
              />
              <p className="text-sm text-gray-800">
                I'm{' '}
                <Link href="/about">
                  <a className="underline">Estevan Maito</a>
                </Link>
                , a full-stack developer, creating open source and passionate about design.
              </p>
            </div>

            <div className="mt-8">
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    className="flex items-center hover:font-semibold"
                    href="https://twitter.com/estevanmaito"
                  >
                    <TwitterIcon className="w-3 h-3 mr-2 text-gray-700" />
                    <span className="text-gray-800">Follow me</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center hover:font-semibold"
                    href="https://github.com/estevanmaito"
                  >
                    <GithubIcon className="w-3 h-3 mr-2 text-gray-700" />
                    <span className="text-gray-800">View projects</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center hover:font-semibold"
                    href="https://estevanmaito.substack.com/subscribe"
                  >
                    <NewsletterIcon className="w-3 h-3 mr-2 text-gray-700" />
                    <span className="text-gray-800">Join newsletter</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <p className="mb-1 font-medium text-gray-900">Tags</p>
              <div className="space-x-4 text-gray-700">
                {frontMatter.tags.map((tag) => (
                  <TagPill tag={tag} key={tag} />
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="mb-1 font-medium text-gray-900">Published</p>
              <span className="text-sm text-gray-700">{formatDate(frontMatter.datePublished)}</span>
            </div>
          </aside>
        </div>
      </>
    )
  }
}
