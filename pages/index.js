import Nav from '@/components/Nav'
import SEO from '@/components/SEO'
import Link from 'next/link'

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

      <header className="grid max-w-2xl grid-cols-2 gap-16 px-4 py-16 mx-auto text-gray-800 xs:px-8 lg:max-w-5xl">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold tracking-tight">I'm Estevan Maito</h1>
          <p className="text-lg">
            Full-stack developer, creating open source and passionate about design.
          </p>
          <p className="mt-4 mb-2 font-semibold">Might interest you:</p>
          <ul>
            <li>
              <span className="mr-1">🡆</span>
              <Link href="/about#hire-me">
                <a>Hire me</a>
              </Link>
            </li>
            <li>
              <span className="mr-1">🡆</span>
              <Link href="/blog">
                <a>Latests blog posts</a>
              </Link>
            </li>
            <li>
              <span className="mr-1">🡆</span>
              <Link href="#case">
                <a>Case studies</a>
              </Link>
            </li>
            <li>
              <span className="mr-1">🡆</span>
              <Link href="#projects">
                <a>Projects</a>
              </Link>
            </li>
            <li>
              <span className="mr-1">🡆</span>
              <Link href="/about">
                <a>About me</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-end">
          <img className="max-w-sm rounded-xl" src="img/me.png" alt="" />
        </div>
      </header>

      <main className="max-w-2xl px-4 mx-auto my-10 xs:px-8 lg:max-w-5xl">
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-800" id="projects">
            Projects
          </h2>

          <div className="grid grid-cols-3 gap-16">
            <div className="flex flex-col justify-between p-2 text-sm text-gray-700 rounded-lg shadow-xs">
              <div>
                <img
                  className="mb-4 rounded-md shadow-xs"
                  src="img/projects/windmill-react-ui.png"
                  alt=""
                />
                <h3 className="mb-2 text-base font-semibold">Windmill React UI</h3>
                <p className="mb-1">
                  The component library for fast and accessible development of gorgeous interfaces.
                </p>
              </div>
              <a className="underline" href="https://windmillui.com/react-ui">
                Visit
              </a>
            </div>
            <div className="flex flex-col justify-between p-2 text-sm text-gray-700 rounded-lg shadow-xs">
              <div>
                <img
                  className="mb-4 rounded-md shadow-xs"
                  src="img/projects/windmill-dashboard-react.png"
                  alt=""
                />
                <h3 className="mb-2 text-base font-semibold">Windmill Dashboard React</h3>
                <p className="mb-1">Four 100 scores and PWA ready. Just connect your data.</p>
              </div>
              <a className="underline" href="https://windmillui.com/dashboard-react">
                Visit
              </a>
            </div>
            <div className="flex flex-col justify-between p-2 text-sm text-gray-700 rounded-lg shadow-xs">
              <div>
                <img
                  className="mb-4 rounded-md shadow-xs"
                  src="img/projects/windmill-dashboard-html.png"
                  alt=""
                />
                <h3 className="mb-2 text-base font-semibold">Windmill Dashboard HTML</h3>
                <p className="mb-1">
                  No frameworks, no dependencies. Pure, flexible web development.
                </p>
              </div>
              <a className="underline" href="https://windmillui.com/dashboard-html">
                Visit
              </a>
            </div>
            <div className="flex flex-col justify-between p-2 text-sm text-gray-700 rounded-lg shadow-xs">
              <div>
                <img
                  className="mb-4 rounded-md shadow-xs"
                  src="img/projects/multi-theme.png"
                  alt=""
                />
                <h3 className="mb-2 text-base font-semibold">Tailwind Multi Theme</h3>
                <p className="mb-1">
                  Tailwind CSS plugin for fast development of dark mode (and more) themes.
                </p>
              </div>
              <a className="underline" href="https://tailwindcss-multi-theme.now.sh/">
                Visit
              </a>
            </div>
            <div className="flex flex-col justify-between p-2 text-sm text-gray-700 rounded-lg shadow-xs">
              <div>
                <img className="mb-4 rounded-md shadow-xs" src="img/projects/sharect.png" alt="" />
                <h3 className="mb-2 text-base font-semibold">Sharect</h3>
                <p className="mb-1">
                  Let users share their text selections to social networks, in desktop browsers.
                </p>
              </div>
              <a className="underline" href="https://estevanmaito.github.io/sharect">
                Visit
              </a>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-800" id="case">
            Case study
          </h2>
          <div className="grid grid-cols-2 gap-16 text-sm text-gray-700">
            <img className="rounded-xl" src="img/projects/unna.png" alt="" />
            <div className="flex items-center">
              <div>
                <h3 className="mb-2 text-base font-semibold">Unna Tech</h3>
                <p className="mb-2">
                  Unna is a Brazilian online web technologies courses platform.
                </p>
                <p className="mb-2">
                  Unna offers an environment close to what professional developers use (a.k.a VS
                  Code) to practice concepts introduced previsously with screencasts. Feedback is
                  given in real time through live testing.
                </p>
                <p className="mb-2">
                  I developed every single aspect of this project, from the ground up, and was ready
                  to launch in February/2020, but something out of my control happened...
                </p>
                <p className="mb-2">
                  Responsibilities in the project: <strong>design</strong>,{' '}
                  <strong>frontend</strong> and <strong>backend</strong>.
                </p>
                <Link href="/case/unna">
                  <a className="underline">Read a detailed overview</a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
