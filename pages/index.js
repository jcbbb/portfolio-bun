export function render(projects) {
  return `
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="description" content="Astro description" />
      <meta name="viewport" content="width=device-width" />
      <link rel="stylesheet" href="/public/css/main.min.css" type="text/css" media="screen" />
      <title>Portfolio</title>
    </head>
    <body class="bg-gruvbox-black">
      <div class="flex max-w-screen-xl px-24 w-full mx-auto justify-between">
        <aside class="sticky top-0 h-full py-24">
          <section class="flex flex-col space-y-2">
            <h1 class="text-5xl font-semibold duration-500 tracking-tight text-white name">Avazbek Juraev</h1>
            <span class="text-xl font-medium duration-500 tracking-tight title">Software Engineer</span>
            <p class="text-white subtitle duration-500 leading-normal">I bring complex project ideas to the web</p>
          </section>
          <nav class="mt-20">
            <ul class="flex flex-col space-y-2">
              <li>
                <a href="#about" class="duration-200 hover:text-gruvbox-green uppercase tracking-widest flex items-center group">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 absolute opacity-0 -translate-x-full duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                  <span class="duration-300 group-hover:translate-x-7">
                    About
                  </span>
                </a>
              </li>
              <li>
                <a href="#experience" class="duration-200 hover:text-gruvbox-green uppercase tracking-widest flex items-center group">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 absolute opacity-0 -translate-x-full duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                  <span class="duration-300 group-hover:translate-x-7">Experience</span>
                </a>
              </li>
              <li>
                <a href="#projects" class="duration-200 hover:text-gruvbox-green uppercase tracking-widest flex items-center group">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 absolute opacity-0 -translate-x-full duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                  <span class="duration-300 group-hover:translate-x-7">Projects</span>
                </a>
              </li>
              <li>
                <a href="#contact" class="duration-200 hover:text-gruvbox-green uppercase tracking-widest flex items-center group">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 absolute opacity-0 -translate-x-full duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                  <span class="duration-300 group-hover:translate-x-7">Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <main class="max-w-lg">
          <div id="about" class="h-screen py-24 scroll-mt-24 snap-center section">
              Lorem ipsum dolor sit amet consectetur. Sagittis mattis vel et vestibulum facilisi a aliquam integer. Quam sed est non consequat.
              Sollicitudin id amet at cras vestibulum sagittis nullam. Nunc arcu cum consequat nec volutpat dolor felis at est. At amet pulvinar pellentesque quis tortor id. Maecenas aenean fermentum non ac. Elementum adipiscing pharetra enim
              Amet ut netus proin dolor aliquet feugiat aliquam. Nisi amet iaculis neque interdum tortor. Sed aliquam diam vulputate sollicitudin tempus. Consectetur amet ac proin lectus sed et et
          </div>
          <div id="experience" class="h-screen pb-24 scroll-mt-24 space-y-5 section">
            <div class="flex flex-col space-y-1">
              <strong class="text-lg font-medium">Fullstack Engineer @ <a class="underline" href="https://aloqabank.uz">Aloqabank</a></strong>
              <span class="text-sm">2020 - August 2023</span>
            </div>
            <ul class="space-y-3">
              <li class="flex gap-2 items-start">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 -ml-2 flex-shrink-0 rounded-full">
                  <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                </svg>
                <p>Developed user interface for <a href="https://mohirlar.uz" class="underline">Mohirlar.uz</a> using React and TailwindCSS</p>
              </li>
              <li class="flex gap-2 items-start">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 -ml-2 flex-shrink-0 rounded-full">
                  <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                </svg>
                <p>Architected APIs for payments (e.g. Stripe), designed checkout forms for e-commerce businesses to accept online payments - <a href="https://pay.zoomrad.uz" class="underline">Zoomrad Pay</a></p>
              </li>
              <li class="flex gap-2 items-start">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 -ml-2 flex-shrink-0 rounded-full">
                  <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                </svg>
                <p>Built complex dashboards for <a href="https://zoomrad.uz" class="underline">Zoomrad</a> using Vue.js, Ant Design and Node.js</p>
              </li>
              <li class="flex gap-2 items-start">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 -ml-2 flex-shrink-0 rounded-full">
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
          <div id="projects" class="h-screen pb-24 scroll-mt-24 snap-start section">
            <ul>
            </ul>
          </div>
        </main>
      </div>
    </body>
  </html>
`
}
