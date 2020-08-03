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
          I'm Estevan Maito, full stack developer with 7 years of experience currently looking for
          new projects. I'm currently living in Brazil (GMT-3). I changed careers in 2013, going
          from International Business to self-taught developer.
        </p>
        <p>
          In 2014 I started to work as a freelancer and in 2015 decided to join an agency, where I
          left at the end of that year. There I worked mostly with frontend development, Angular,
          .Net, C#, PHP, Bootstrap, SASS. I've not touched most of these technologies since then,
          and you can compare it to my <a href="#stack">favorite stack now</a>.
        </p>
        <p>
          In the following years, I've teached web development on{' '}
          <a href="https://youtube.com/estevanmaito">YouTube</a>, wrote a book on{' '}
          <a href="https://web.archive.org/web/20180103082105/http://www.aprendahtmlecss.com.br/">
            HTML & CSS
          </a>{' '}
          with 700 copies sold, and created a course on creating a{' '}
          <a href="https://vimeo.com/estevanmaito">CSS framework</a> with 90 copies sold. All of it
          is available in Portuguese, and the last two are not available for purchase anymore.
        </p>

        <p className="space-x-4">
          <a href="https://github.com/estevanmaito">Github</a>
          <a href="https://twitter.com/estevanmaito">Twitter</a>
          <span className="cursor-pointer" onClick={() => setEmailIsVisible(true)}>
            Click to see email: {emailIsVisible && 'ejmaito@gmail.com'}
          </span>
        </p>

        <h2>Open Source</h2>

        <p>
          Even though my whole career I tried to sabotage myself not keeping a record of my work,
          GitHub kept track of it for me.
        </p>
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
          <li>React Context API over Redux</li>
          <li>Next.js</li>
          <li>Tailwind CSS (although I've worked with Bootstrap for 5 years)</li>
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
          <li>GMT-3 (1h less than New York)</li>
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
            <strong>Tailwind CSS</strong> or Bootstrap
          </li>
          <li>
            Thinking about <strong>accessibility</strong> as a top priority in UX (I usually work
            with a screen reader)
          </li>
          <li>Travis CI</li>
          <li>
            I've also worked in the past with: Vue, Gatsby, Redux, SQL Server, Angular, Firebase
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
