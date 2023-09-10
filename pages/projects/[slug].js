import { projects } from "../../projects.js";

export function data() {
  return projects.map((project) => {
    return {
      props: { project },
      params: { slug: project.slug }
    }
  });
}

export function render({ project }) {
  return `
    <html lang="en" class="bullshit">
      <head>
        <meta charset="UTF-8" />
        <meta name="description" content="${project.description}" />
        <meta name="viewport" content="width=device-width" />
        <link rel="stylesheet" href="/public/css/main.min.css" type="text/css" media="screen" />
        <title>${project.title}</title>
        <style>
          html { scroll-behavior: "auto" }
        </style>
      </head>
      <body>
        <div class="duration-500 bg-gruvbox-fg min-h-full">
          <div class="flex space-x-12 px-16">
            <aside class="sticky top-0 h-full max-w-md w-full flex-shrink-0 py-16 sidebar">
              <div class="flex flex-col relative default-transition">
                ${project.featured ? `<span class="text-sm uppercase tracking-tight text-gruvbox-purple">Featured</span>` : ''}
                <strong class="text-3xl font-semibold text-gruvbox-black">${project.title}</strong>
                <p class="p-3 bg-gruvbox-fg-700 text-gruvbox-black rounded-md mt-2 max-w-sm">
                  ${project.description}
                </p>
              </div>
            </aside>
            <main class="pt-16">
              <img src="${project.presentation}" class="w-full rounded-xl full-embed" />
            </main>
          </div>
          <ul class="px-16">
            ${project.images.map((image, i) => (
    `<li key=${i} class="flex space-x-12">
                  <div class="sticky top-0 h-full pt-8 max-w-md w-full flex-shrink-0 text-gruvbox-black text-lg tracking-tight">${image.title}</div>
                  <div class="mt-8">
                    <img src="${image.url}" loading="lazy" class="rounded-xl object-cover" />
                  </div>
              </li>`
  )).join("")}
          </ul>
        </div>
      </body>
    <html/>
`
}
