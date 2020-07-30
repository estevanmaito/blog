import { frontMatter as posts } from '../pages/blog/*.md'

export async function getTags() {
  return posts.reduce((acc, cur) => [...new Set([...acc.concat(cur.tags)])], [])
}

export async function getPostsByTag(tag) {
  return posts.filter((post) => post.tags.indexOf(tag) >= 0)
}
