import React from 'react'
import Head from 'next/head'

function SEO(props) {
  const { children, title, description, image, canonical } = props
  return (
    <Head>
      {/* General SEO */}
      <meta name="description" content={description} />
      <meta name="canonical" href={canonical} />
      <meta name="author" content="Estevan Maito" />
      <meta name="robots" content="index" />

      {/* Social SEO */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Estevan Maito" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />

      <title>{title}</title>
      {children}
    </Head>
  )
}

export default SEO
