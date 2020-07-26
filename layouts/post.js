export default function Post(frontMatter) {
  return ({ children: content }) => {
    return <div className="mx-auto prose">{content}</div>
  }
}
