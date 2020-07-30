import React from 'react'
import Nav from '@/components/Nav'
import { getTags, getPostsByTag } from '@/api/index'
import PostsList from '@/components/PostsList'
import SEO from '@/components/SEO'

function Tag(props) {
  const { posts, tag } = props
  const results = posts.length !== 1 ? `${posts.length} posts found` : '1 post found'

  const title = `Tag: ${tag} - Estevan Maito`
  const description = `A list of all the posts written for ${tag}`
  const canonical = `https://estevanmaito.me/tags/${tag}`
  const image = 'https://estevanmaito.me/social-image.png'

  return (
    <>
      <SEO title={title} description={description} canonical={canonical} image={image}></SEO>
      <Nav />
      <main className="max-w-2xl px-4 mx-auto my-10">
        <h1 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900">Tag: {tag}</h1>
        <p>{results}</p>
        <div className="mt-8">
          <PostsList posts={posts} />
        </div>
      </main>
    </>
  )
}

export async function getStaticPaths() {
  const tags = await getTags()
  const paths = tags.map((tag) => ({
    params: { tag },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps(ctx) {
  return {
    props: { posts: await getPostsByTag(ctx.params.tag), tag: ctx.params.tag },
  }
}

export default Tag
