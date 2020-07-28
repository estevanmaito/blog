import Nav from '@/components/Nav'
import SEO from '@/components/SEO'

export default function Home() {
  const title = 'Estevan Maito'
  const description = 'Random thoughts about web development, design, databases and code in general'
  const canonical = 'https://estevanmaito.me'
  const image = 'https://estevanmaito.me/social-image.png'
  return (
    <>
      <SEO title={title} description={description} canonical={canonical} image={image}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
                "@context": "https://schema.org",
                "@type": "WebSite",
                "url": "${canonical}",
                "name": "${title}",
                "description": "${description}",
                "image": {
                  "@type": "ImageObject",
                  "url": "${image}"
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
      <main className="max-w-2xl px-4 mx-auto my-10 prose">
        <h1>I'm Estevan Maito</h1>
        <p>Full stack developer, designing with code.</p>
      </main>
    </>
  )
}
