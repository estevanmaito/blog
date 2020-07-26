import Nav from '@/components/nav'

export default function Post(frontMatter) {
  return ({ children: content }) => {
    return (
      <>
        <Nav />
        <div className="mx-auto my-10 prose">{content}</div>
      </>
    )
  }
}
