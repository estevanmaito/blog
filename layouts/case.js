import Nav from '@/components/Nav'
import SEO from '@/components/SEO'

export default function Post(frontMatter) {
  return ({ children: content }) => {
    const title = 'Case study: Unna Tech'
    const description =
      'A deep case study in a complete application, from design to server setup, how I put together every piece of technology.'
    const canonical = 'https://estevanmaito.me/case/unna'
    const image = 'https://estevanmaito.me/social-image.png'

    return (
      <>
        <SEO title={title} description={description} canonical={canonical} image={image} />
        <Nav />

        <main className="max-w-2xl px-4 mx-auto my-10 prose xs:px-8">{content}</main>
      </>
    )
  }
}
