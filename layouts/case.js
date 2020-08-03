import Link from 'next/link'
import Nav from '@/components/Nav'
import SEO from '@/components/SEO'
import { formatDate, formatPath } from '@/utils/format'

export default function Post(frontMatter) {
  return ({ children: content }) => {
    const canonicalURL = `https://estevanmaito.me/${formatPath(frontMatter.__resourcePath)}`
    const socialImageURL = `https://estevanmaito.me/${formatPath(
      frontMatter.__resourcePath,
      '.png'
    ).replace('blog', 'social')}`

    return (
      <>
        {/* <SEO
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
        </SEO> */}
        <Nav />

        <main className="max-w-2xl px-4 mx-auto my-10 prose xs:px-8">{content}</main>
      </>
    )
  }
}
