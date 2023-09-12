import { projects } from "../../projects.js";
import { mkdir } from "node:fs/promises";

let decoders = {
  "avif": "libaom-av1",
  "webp": "libwebp"
}

async function generate({ original, sizes, formats } = {}) {
  let parts = original.split("/");
  let inp = parts.pop();
  let cwd = "." + parts.join("/");
  let out = inp.replace(/\.[^/.]+$/, "");
  for (let format of formats) {
    let decoder = decoders[format]
    await mkdir(cwd + "/" + format, { recursive: true });
    if (!decoder) continue;
    for (let size of sizes) {
      let proc = Bun.spawnSync(["ffmpeg", "-i", inp, "-c:v", decoder, "-vf", `scale=${size}:-1`, `./${format}/${out}-${size}.${format}`], {
        cwd
      })
      if (!proc.success) {
        console.log(proc.stderr.toString());
      }
    }
  }
}

export async function data() {
  //for (let project of projects) {
   // await generate(project.presentation)
    //await Promise.all(project.images.map(generate));
  //}


  return projects.map((project) => {
    let parts = project.presentation.original.split("/");
    let name = parts.pop().replace(/\.[^/.]+$/, "");
    let base = parts.join("/");
    return {
      props: { project, base, name },
      params: { slug: project.slug }
    }
  });
}

export function headers() {
  return {
    "Cache-Control": "public, max-age=600, stale-while-revalidate=3600"
  }
}

export function render({ project, base, name }) {
  return `
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="description" content="${project.description}" />
        <meta name="viewport" content="width=device-width" />
        <link rel="stylesheet" href="/public/css/main.min.css" type="text/css" media="screen" />
        <title>${project.title}</title>
      </head>
      <body class="bg-gruvbox-fg">
        <div class="flex flex-col md:flex-row">
          <aside class="lg:sticky top-0 h-full w-full pt-16 px-6 md:max-w-md lg:pl-16 w-full flex-shrink-0">
            <div class="flex flex-col relative">
              <div class="flex flex-col project-title">
                ${project.featured ? `<span class="text-sm uppercase tracking-tight font-medium text-gruvbox-purple">Featured</span>` : ''}
                <strong class="text-3xl font-semibold text-gruvbox-black">${project.title}</strong>
              </div>
              <p class="p-3 bg-gruvbox-fg-700 text-gruvbox-black rounded-md mt-2 max-w-sm description">
                ${project.description}
              </p>
            </div>
          </aside>
          <div class="px-6 pt-6 md:pt-16 lg:px-16">
            <picture>
              ${project.presentation.formats.map((format) => (
                `<source
                  type="image/${format}"
                  srcset="${project.presentation.sizes.map((size) => `${base}/${format}/${name}-${size}.${format} ${size}w`).join(", ")}"
                  ></source>`
              )).join("")}
              <img src="${project.presentation.original}" class="w-full rounded-xl object-cover full-embed" loading="lazy" decoding="async" />
            </picture>
          </div>
        </div>
        <main class="mt-6 pb-24">
          <ul class="space-y-6">
            ${project.images.map((image) => {
                let parts = image.original.split("/");
                let name = parts.pop().replace(/\.[^/.]+$/, "");
                let base = parts.join("/");
                return `
                  <li class="flex flex-col md:flex-row">
                    <div class="sticky top-0 h-full py-2 px-6 lg:pl-16 md:max-w-md w-full flex-shrink-0 bg-gruvbox-fg text-gruvbox-black text-lg tracking-tight">${image.title}</div>
                    <div class="px-6 lg:px-16">
                      <picture>
                        ${image.formats.map((format) => (
                          `<source
                            type="image/${format}"
                            srcset="${image.sizes.map((size) => `${base}/${format}/${name}-${size}.${format} ${size}w`).join(", ")}"
                            ></source>`
                        )).join("")}
                        <img src="${image.original}" class="rounded-xl object-cover" loading="lazy" decoding="async" />
                      </picture>
                    </div>
                  </li>`
            }).join("")}
          </ul>
        </main>
      </body>
      <script src="/public/js/main.js" async defer></script>
    <html/>
`
}
