import Nav from '@/components/Nav'
import SEO from '@/components/SEO'

export default function About() {
  const title = 'About - Estevan Maito'
  const description = 'Random thoughts about web development, design, databases and code in general'
  const canonical = 'https://estevanmaito.me/about'
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
        <h1>About me</h1>
        <p>I'm Estevan Maito, full stack developer with 7 years of experience.</p>
        <p className="space-x-4">
          <a href="https://github.com/estevanmaito">Github</a>
          <a href="https://twitter.com/estevanmaito">Twitter</a>
        </p>
      </main>
    </>
  )
}
