import Nav from '@/components/Nav'

export default function About() {
  return (
    <>
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
