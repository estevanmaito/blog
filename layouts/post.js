import Nav from '@/components/Nav'
import SEO from '@/components/SEO'
import formatDate from '@/utils/format-date'

function formatPath(path, replace = '') {
  return path.replace(/\.md$/, replace)
}

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

        <div className="max-w-2xl px-4 mx-auto mt-10 prose">{content}</div>
        <div className="max-w-2xl px-4 mx-auto mt-10 mb-10 text-sm text-gray-700">
          <div className="inline-flex">
            <img className="object-cover w-6 h-6 mr-2 rounded-full" src="/img/me.png" alt="" />
            <span>Estevan Maito</span>
            <span className="ml-6">{formatDate(frontMatter.datePublished)}</span>
          </div>
        </div>
      </>
    )
  }
}
