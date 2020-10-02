import { useState } from 'react'
import Nav from '@/components/Nav'
import SEO from '@/components/SEO'
import Link from 'next/link'

export default function About() {
  const title = 'About - Estevan Maito'
  const description = 'Random thoughts about web development, design, databases and code in general'
  const canonical = 'https://estevanmaito.me/about'
  const image = 'https://estevanmaito.me/social-image.png'

  const [emailIsVisible, setEmailIsVisible] = useState(false)

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
      <main className="max-w-2xl px-4 mx-auto my-10 prose xs:px-8 lg:max-w-3xl">
        <h1>About me</h1>
        <p>
          Hi, my name is Estevan. I'm a Brazilian full stack developer working as a freelancer and
          creating open source software.
        </p>
        <p>
          I started coding for the web at the age of 13, with Microsoft Frontpage. In 6+ years of
          technical career (after changing from International Business) I have worked in a wide
          range of domains such as unique website experiences at agencies, e-learning platforms, and
          design. It all sums up helping me talk with everybody inside a project, from design to
          backend.
        </p>
        <p>
          In my spare time, I love teaching (14k{' '}
          <a href="https://youtube.com/estevanmaito">YouTube</a> subs, 2 books written and blogging)
          and contributing to <a href="https://github.com/estevanmaito">open source</a>.
        </p>
        <div>
          <p>Find me online:</p>
          <p className="space-x-4">
            <a href="https://github.com/estevanmaito">Github</a>
            <a href="https://twitter.com/estevanmaito">Twitter</a>
            <span className="cursor-pointer" onClick={() => setEmailIsVisible(true)}>
              Click to see email: {emailIsVisible && 'ejmaito@gmail.com'}
            </span>
          </p>
        </div>

        <h2>Work with me</h2>

        <p>
          I'm highly motivated, good humoured, independent and a team-player. I also love sharing my
          knowledge and try my best to document my experiences and help others.
        </p>

        <h3>I'm good at</h3>

        <ul>
          <li>
            Coding
            <ul>
              <li>
                Design systems and component libraries (
                <a href="https://windmillui.com/react-ui">example</a>)
              </li>
              <li>Performance optimization/profiling</li>
              <li>Documenting code</li>
              <li>SEO</li>
              <li>Accessibility</li>
              <li>Learning new tech</li>
            </ul>
          </li>
          <li>
            Teaching
            <ul>
              <li>Through videos on JavaScript, NodeJS, HTML & CSS</li>
              <li>
                Writing <a href="/blog">blog</a> posts and books (<a href="/#books">check them</a>)
              </li>
            </ul>
          </li>
          <li>
            <a href="https://github.com/estevanmaito">Open source</a>
          </li>
        </ul>

        <h2>Open Source</h2>

        <p>Here you can find my latest contributions:</p>
        <ul>
          <li>
            <a href="https://windmillui.com">Windmill UI</a>: I'm very proud of the suite created
            around Windmill.
            <ul>
              <li>
                <a href="https://windmillui.com/dashboard-html">Windmill Dashboard HTML</a>:
                accessible (developed with a screen reader), dark theme, no dependencies.
              </li>
              <li>
                <a href="https://windmillui.com/dashboard-react">Windmill Dashboard React</a>:
                accessible (developed with a screen reader), dark theme, best practices.
              </li>
              <li>
                <a href="https://windmillui.com/react-ui">Windmill React UI</a>: a component library
                that powers the above dashboard, with a deep focus in accessibility and themes,
                using Tailwind CSS.
              </li>
            </ul>
          </li>
          <li>
            <a href="https://estevanmaito.github.io/sharect">Sharect</a>: JavaScript library to
            share text selection like Medium.
          </li>
          <li>
            <a href="https://tailwindcss-multi-theme.now.sh/">Tailwind Multi Theme</a>: Tailwind CSS
            plugin for fast development of dark mode (and more) themes.
          </li>
          <li>
            <a href="https://github.com/romefrontend/rome/issues/839#issuecomment-672338554">
              Rome Frontend
            </a>
            : Accessiblity audit and fixes.
          </li>
        </ul>

        <h2 id="stack">Current preferred stack</h2>

        <p>
          You can read in detail how I applied each of these technologies in{' '}
          <Link href="/case/unna">
            <a>Unna Tech case study</a>
          </Link>
          , where I built a courses platform:
        </p>
        <ul>
          <li>React</li>
          <li>React Context API over Redux (worked with it in the past)</li>
          <li>TypeScript</li>
          <li>Jest</li>
          <li>Next.js</li>
          <li>Tailwind CSS (also worked with Bootstrap/Sass for 5 years)</li>
          <li>Alpine.js</li>
          <li>Node.js</li>
          <li>Mongo DB</li>
          <li>NVDA (screen reader)</li>
        </ul>

        <h2 id="hire-me">Hire me</h2>

        <p>
          We should work together if you're looking for somebody with these characteristics (or if
          you're interested in anything I made for{' '}
          <Link href="/case/unna">
            <a>this project</a>
          </Link>
          ):
        </p>

        <ul>
          <li>EST timezone</li>
          <li>Fullstack developer with stronger frontend skills</li>
          <li>
            +3 years of <strong>React</strong> experience, worked with <strong>Redux</strong> in the
            past but now preferring <strong>Context API</strong>.
          </li>
          <li>
            2 years of <strong>Jest</strong> and <strong>TDD</strong>
          </li>
          <li>
            2 years of <strong>Next.js</strong>
          </li>
          <li>
            5 years working with server-side JavaScript (<strong>Node</strong> +{' '}
            <strong>Express</strong>), <strong>REST</strong> APIs and <strong>Mongo DB</strong>
            (Mongoose)
          </li>
          <li>
            Recent experience with <strong>Alpine.js</strong>
          </li>
          <li>
            <strong>Tailwind CSS</strong> (contributor and plugin creator) or Bootstrap
          </li>
          <li>
            Thinking about <strong>accessibility</strong> as a top priority in UX (I usually work
            with a screen reader)
          </li>
          <li>Travis CI</li>
          <li>
            I've also worked in the past with: Vue, Styled Components, Gatsby, Redux, SQL Server,
            Angular, Firebase, C#, .NET
          </li>
          <li>
            Can communicate with <strong>designers</strong>
          </li>
          <li>
            Creative and with good <strong>writing skills</strong>
          </li>
          <li>Speak Portuguse, English, Spanish and a bit of Italian</li>
          <li>
            I've learned some German words so I can understand Sebastian Vettel's rants and talk
            with my cats: <em>Diese katze hat probleme</em> and <em>Mein Gott, muss das sein?!</em>
          </li>
        </ul>
      </main>
    </>
  )
}
