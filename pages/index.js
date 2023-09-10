import { projects } from "../projects.js";

export function render() {
  return `
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="description" content="Portfolio" />
      <meta name="viewport" content="width=device-width" />
      <link rel="stylesheet" href="/public/css/main.min.css" type="text/css" media="screen" />
      <title>Portfolio</title>
    </head>
    <body class="bg-gruvbox-fg">
      <div class="flex max-w-screen-xl px-12 flex-col md:flex-row md:space-x-12 md:px-24 w-full mx-auto justify-between">
        <aside class="md:sticky top-0 h-full py-16 md:py-24">
          <section class="flex flex-col space-y-2 text-gruvbox-black">
            <h1 class="text-5xl font-semibold duration-500 tracking-tight">Avazbek Juraev</h1>
            <span class="text-xl font-medium duration-500 tracking-tight">Software Engineer</span>
            <p class="duration-500 leading-normal">Building websites that are both beautiful and functional.</p>
          </section>
          <nav class="mt-20 hidden md:block">
            <ul class="flex flex-col space-y-2 text-gruvbox-green">
              <li>
                <a href="#about" class="max-w-fit duration-200 hover:text-gruvbox-green uppercase tracking-widest flex items-center group">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 absolute opacity-0 -translate-x-full duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                  <span class="duration-300 group-hover:translate-x-7">
                    About
                  </span>
                </a>
              </li>
              <li>
                <a href="#experience" class="max-w-fit duration-200 hover:text-gruvbox-green uppercase tracking-widest flex items-center group">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 absolute opacity-0 -translate-x-full duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                  <span class="duration-300 group-hover:translate-x-7">Experience</span>
                </a>
              </li>
              <li>
                <a href="#projects" class="max-w-fit duration-200 hover:text-gruvbox-green uppercase tracking-widest flex items-center group">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 absolute opacity-0 -translate-x-full duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                  <span class="duration-300 group-hover:translate-x-7">Projects</span>
                </a>
              </li>
              <li>
                <a href="#contact" class="max-w-fit duration-200 hover:text-gruvbox-green uppercase tracking-widest flex items-center group">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 absolute opacity-0 -translate-x-full duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                  <span class="duration-300 group-hover:translate-x-7">Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <main class="md:max-w-lg text-gruvbox-black">
          <div id="about" class="h-screen py-24 scroll-mt-24 space-y-3 section">
            <p>
              I am a software engineer with 3+ years of experience in full stack development. I am proficient in a variety of technologies,
              including HTML, CSS, JavaScript, React, Vue, Node.js, and Golang. I am also experienced in working with a variety of frameworks, such as Fastify, Express
            </p>
            <p>
              I am passionate about creating beautiful and functional websites that users love. I am also a strong believer in user-centered design, and I always put the user first in my work.
            </p>
            <p>
              I am a highly motivated and results-oriented individual. I am always looking for new challenges and ways to improve my skills. I am also a team player and I am always willing to help others.
            </p>
            <p>
              I am confident that I have the skills and experience to be a valuable asset to your team. I am eager to learn more about your company and the work that you do. I am also excited to contribute to your success.
            </p>
          </div>
          <div id="experience" class="h-screen pb-24 scroll-mt-24 space-y-5 section">
            <div class="flex flex-col space-y-1">
              <strong class="text-lg font-medium">Fullstack Engineer @ <a class="underline" href="https://aloqabank.uz">Aloqabank</a></strong>
              <span class="text-sm">2020 - August 2023</span>
            </div>
            <ul class="space-y-3">
              <li class="flex gap-2 items-start">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 -ml-2 flex-shrink-0 rounded-full text-gruvbox-purple stroke-2">
                  <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                </svg>
                <p>Developed user interface for <a href="https://mohirlar.uz" class="underline">Mohirlar.uz</a> using React and TailwindCSS</p>
              </li>
              <li class="flex gap-2 items-start">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 -ml-2 flex-shrink-0 rounded-full text-gruvbox-purple stroke-2">
                  <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                </svg>
                <p>Architected APIs for payments (e.g. Stripe), designed checkout forms for e-commerce businesses to accept online payments - <a href="https://pay.zoomrad.uz" class="underline">Zoomrad Pay</a></p>
              </li>
              <li class="flex gap-2 items-start">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 -ml-2 flex-shrink-0 rounded-full text-gruvbox-purple stroke-2">
                  <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                </svg>
                <p>Built complex dashboards for <a href="https://zoomrad.uz" class="underline">Zoomrad</a> using Vue.js, Ant Design and Node.js</p>
              </li>
              <li class="flex gap-2 items-start">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 -ml-2 flex-shrink-0 rounded-full text-gruvbox-purple stroke-2">
                  <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                </svg>
                <p>Built dashboard for <a href="https://pay.zoomrad.uz" class="underline">Zoomrad Pay</a> using Vue.js, Material UI and Node.js. It features monitoring for payments,
                  transaction statistics, bank account debit/credits, refunds and webhooks to receive updates about transaction process.</p>
              </li>
            </ul>
            <ul class="flex gap-3 flex-wrap">
              <li class="py-2 px-3 bg-gruvbox-aqua-500 rounded-full text-xs">JavaScript</li>
              <li class="py-2 px-3 bg-gruvbox-aqua-500 rounded-full text-xs">React</li>
              <li class="py-2 px-3 bg-gruvbox-aqua-500 rounded-full text-xs">Vue</li>
              <li class="py-2 px-3 bg-gruvbox-aqua-500 rounded-full text-xs">Node.js</li>
              <li class="py-2 px-3 bg-gruvbox-aqua-500 rounded-full text-xs">TailwindCSS</li>
              <li class="py-2 px-3 bg-gruvbox-aqua-500 rounded-full text-xs">PostgreSQL</li>
              <li class="py-2 px-3 bg-gruvbox-aqua-500 rounded-full text-xs">Elasticsearch</li>
              <li class="py-2 px-3 bg-gruvbox-aqua-500 rounded-full text-xs">Golang</li>
            </ul>
          </div>
          <div id="projects" class="h-screen pb-24 scroll-mt-24 section">
            <ul class="flex flex-col projects-list">
              ${projects.map((project) => (
    `<li class="mb-44">
                  <a class="flex relative group" href="/projects/${project.slug}">
                    <div class="flex flex-col relative z-[2] description">
                      ${project.featured ? `<span class="text-sm uppercase tracking-tight text-gruvbox-purple font-medium">Featured</span>` : ''}
                      <strong class="text-3xl font-semibold text-gruvbox-black">${project.title}</strong>
                      <p class="p-3 bg-gruvbox-fg-700 text-gruvbox-black rounded-md mt-2 max-w-sm">
                        ${project.description}
                      </p>
                    </div>
                    <div class="absolute z-[1] translate-x-2/3 rounded-md overflow-hidden">
                      <div class="w-full h-full bg-gruvbox-fg opacity-60 absolute duration-1000 group-hover:opacity-0"></div>
                      <img src="${project.presentation}" class="max-w-full" />
                    </div>
                  </a>
                </li>`
  )).join("")}
            </ul>
          </div>
          <div id="contact" class="h-screen pb-24 scroll-mt-24 section">
            <strong class="text-lg font-medium">Feel free to reach out</strong>
            <p class="mt-3">
              I'm always looking for new challenges, so if you have any web development projects that you're looking to get done,
              please don't hesitate to contact me. I'm confident that I can help you create a website that meets your needs and exceeds your expectations.
            </p>
            <a href="mailto:me@homeless.dev" class="mt-5 inline-block duration-500 bg-gruvbox-purple text-gruvbox-black font-medium rounded-md py-3 px-6 hover:bg-gruvbox-purple-500">SAY HELLO</a>
          </div>
        </main>
      </div>
    </body>
    <script src="/public/js/main.js" async defer></script>
  </html>
`
}
