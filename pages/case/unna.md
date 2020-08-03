---
layout: 'case'
title: 'Case study: Unna Tech'
description: 'We talk about the creation of a personal site with a blog using Tailwind CSS and Next.js'
---

# Case study: Unna Tech

Unna is a Brazilian online courses platform, focused on frontend web development technlogies. Its objective is to creative an immersive environment, starting the learning process with short introductory videos and after each lesson, cement that learning through coding exercises with live feedback.

Live feedback is achieved showing code results in an emulated browser and with in-browser code tests, so students receive feedback as to what is correct/wrong and can act on it.

It was created entirely by me and _was_ supposed to house my own courses, starting Feb/2020. Due to COVID, my trademark registration was delayed indefinitely and lately denied, which was a hard hit and made me move to other projects.

Anyway, I stretched all my knowledge to make it future proof, using the latest technologies and you can read in more details below.

- **Project time**: 8 months
- See live (in Portuguese): https://unna.tech

## Subprojects

- **Design**
  - Adobe XD
- **Frontend**
  - Next.js, React, React Context API, Monaco Editor (a.k.a VS Code), Bootstrap
  - Deployed to Vercel
- **Server**
  - Node.js, Express, Redis, JWT, Mongo DB, Nodemailer, Docker, Nginx, Let's Encrypt
  - Deployed to Digital Ocean
- **Admin**
  - React, React Router, Reactstrap, Formik, Auth0
  - Deployed to Netlify
- **Forum**
  - Discourse
  - Deployed to Digital Ocean

Total cost: $10 ($5 x 2 Digital Ocean servers)

## Details

### Design

Let's take this out of the way: I'm not a designer.

At first, I thought about creating a playful environment, so my first design iteration was very colorful. My first frontend implementation was based on it, but after some time looking at it every single day, I decided to change it to a more formal design, still using some color. This is the design you can find live now.

![](/img/projects/unna-layouts.png)

Take a look at them in greater detail: [first layout](/img/projects/home-first.png) and [final layout](/img/projects/home-final.png).

### Frontend

The platform frontend is connected to the backend via a REST API, and the public available pages are mostly dynamic content: course categories, courses and classes list.

The private content, available through log in, is composed of the account/profile settings and the classes area, where a text editor is displayed alongside class instructions, a browser preview and live tests.

![](/img/projects/exercises-code.png)

- Code written inside the editor is compiled with Babel inside the browser and displayed in the browser preview to the right. Communication is done via Context.
- Context API is used to emulate a Redux approach to state management, and async operations are handled in the component level, inside lifecycle methods.
- Tests, to the left, are run when users decide they are ready and it's run in an isolated frame and communication between code editor and this frame is done via Service Worker, as it lives outside the scope of React. It uses browser versions of Babel, Enzyme, Chai and React to run tests locally.

Most of the effort in this area was put into UX and the exercises data flux.

### Server

For this project I decided to stretch my backend knowledge and use some things that I've never used outside basic projects, like Docker containers, Let's Encrypt for SSL generation, Redis for account tokens, transactional emails, _complete_ authentication and authorization and a payment integration I've never did before.

#### Database

- Redis is used mainly to manage account tokens, like email confirmation and password recovery
- Mongo DB and Mongoose take care of the main data

#### Auth and account

- Auth is handled by Passport strategies like Facebook, Google and standard login, and it's kept in sync using JWT
- Account creation, confirmation, recovery, etc were implemented from the ground up, and having this level of customization allowed for an easy integration with transactional emails, which is handled with Nodemailer

#### Nginx, Node and Express

- HTTP/2, SSL (created with Let's Encrypt), and gzip are handled by this stack
- A REST API is implemented on top of Express

#### SSL

- Let's Encrypt free SSL certificates are automatically renewed and available through Nginx

#### Payment integration

For this project I decided to use a relatively new payment company from Brazil, Pagar.me (recently aquired by Stone.co). It was actually easier than I thought (thanks to their packages and docs) to connect with them and setup two subscription systems: monthly and yearly.

#### Docker

One of my pain points, which I discuss in the end of this study, but allowed me to separate code into their own containers:

- Main Node/Express app
- Mongo
- Redis
- Nginx
- Certbot (Let's Encrypt renewal service)

It was also possible to separate a development and production environment just by dividing Docker responsibilities with Docker Compose.

### Admin

This section is just viewed internally (a.k.a me), so I went for the fastest stack possible:

- Uses CoreUI dashboard
- It's a client-only React app, relying on React Router
- Consumes a REST API provided by the backend
- Auth is handled by Auth0

It works as an interface for CRUD operations and also some business intelligence data, although the later in a very basic form, as most of financial data is available through the payment gateway system.

### Forum

A simple (well, they made it stupid simple to create one) Discourse forum deployed to Digital Ocean.

### Challenges

This is where I roast myself. Being the only person in the project, I've got to wear all the hats possible.

Starting with design, not being a designer took me some time to get into the right mindset. For smaller projects I usualy just design with code and iterate with it to reach something beautiful.

For this project, on the other hand, with around 15 pages, designing in a proper design software saved me a lot of time in the development phase and I could always look back to find colors and measures.

As a relativelly long term project (8 months in the end) without receiving a single penny, I decided to cut tests. I'm a big fan of TDD but had to adapt back to not doing it. I would not do it if I wasn't alone. Being the only developer, I had the entire project in my head (this is also a problem, because your head is always full) so debugging was easy (a little tap on my back, because I've worked hard to make the architecture simple), but I can see this being a problem with more people involved.

Using Docker in its full power was and is still out of my reach. I now think Dev Ops devs are gods 😅.

I think, in the end, I got a pretty solid foundation, but it took precious time to learn and debug things that somebody with the proper knowledge and experience would take minutes or hours to solve. Most notably, I couldn't integrate any CI/CD, so my code updates are painfull and involve basically moving updated files around, but, on the other hand, I can easily make these (still painfull) changes in isolation due to the containerization.

Bare metal, serious server setup like how do you treat an attack and bots repeatedly trying to scan `wp-admin.php` in a Node project consuming bandwith and connections, took some time too, as I've experienced these kind of attacks as soon as the project went live and oh boy did my \$5 Digital Ocean Ubuntu server noticed it 🙃

And this explains in part why my frontend is hosted with Vercel and the Admin panel with Netlify. Yeah, I love to experiment, but at some point I got tired of suffering.
