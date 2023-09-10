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
      </head>
      <body>
        <div class="duration-500 bg-gruvbox-fg min-h-full">
          <div class="flex flex-col md:flex-row">
            <aside class="lg:sticky top-0 h-full w-full pt-16 px-6 md:max-w-md lg:pl-16 w-full flex-shrink-0 sidebar">
              <div class="flex flex-col relative default-transition">
                ${project.featured ? `<span class="text-sm uppercase tracking-tight font-medium text-gruvbox-purple">Featured</span>` : ''}
                <strong class="text-3xl font-semibold text-gruvbox-black">${project.title}</strong>
                <p class="p-3 bg-gruvbox-fg-700 text-gruvbox-black rounded-md mt-2 max-w-sm">
                  ${project.description}
                </p>
              </div>
            </aside>
            <div class="px-6 pt-6 md:pt-16 lg:px-16">
              <img src="${project.presentation}" class="w-full rounded-xl full-embed" />
            </div>
          </div>
          <main class="mt-6">
            <ul class="space-y-6">
              ${project.images.map((image, i) => (
    `<li class="flex flex-col md:flex-row">
                  <div class="sticky top-0 h-full py-2 px-6 lg:pl-16 md:max-w-md w-full flex-shrink-0 bg-gruvbox-fg text-gruvbox-black text-lg tracking-tight">${image.title}</div>
                  <div class="px-6 lg:px-16">
                    <img src="${image.url}" loading="lazy" class="rounded-xl object-cover" />
                  </div>
                </li>`
  )).join("")}
            </ul>
          </main>
        </div>
      </body>
    <html/>
`
}
