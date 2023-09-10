let projects = [
  {
    slug: "needs",
    presentation: "/public/images/needs/presentation.png",
    featured: true,
    title: "Needs",
    description: "Developed checkout forms and APIs for e-commerce to accept online transactions",
    images: [
      {
        url: "/public/images/needs/thumb.jpeg",
        title: "Settings page"
      },
      {
        url: "/public/images/needs/tg_image_650602355.jpeg",
        title: "Homepage"
      },
      {
        url: "/public/images/needs/tg_image_744815776.jpeg",
        title: "Create posting"
      },
      {
        url: "/public/images/needs/tg_image_903419734.jpeg",
        title: "Privacy"
      },
      {
        url: "/public/images/needs/tg_image_924628362.jpeg",
        title: "Theme preferences"
      },
      {
        url: "/public/images/needs/tg_image_1104690450.jpeg",
        title: "Homepage menu"
      },
      {
        url: "/public/images/needs/tg_image_1451174702.jpeg",
        title: "Billing"
      },
      {
        url: "/public/images/needs/tg_image_1923977961.jpeg",
        title: "Public profile"
      },
      {
        url: "/public/images/needs/tg_image_3201400914.jpeg",
        title: "Create account"
      },
      {
        url: "/public/images/needs/tg_image_3239717779.jpeg",
        title: "Login page"
      },
      {
        url: "/public/images/needs/tg_image_3441812393.jpeg",
        title: "Chat"
      },
      {
        url: "/public/images/needs/tg_image_3555869238.jpeg",
        title: "Create posting (2nd step)"
      },
    ],
  },
  {
    slug: "meitao",
    presentation: "/public/images/needs/presentation.png",
    featured: false,
    title: "Meitao",
    description: "Meitao description",
    images: [
      {
        url: "/public/images/needs/thumb.jpeg",
        title: "Settings page"
      },
    ],
  }
]

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
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="description" content="${project.description}" />
        <meta name="viewport" content="width=device-width" />
        <link rel="stylesheet" href="/public/css/main.min.css" type="text/css" media="screen" />
        <title>${project.title}</title>
      </head>
      <body class="bg-gruvbox-fg">
        <div class="flex space-x-12 px-16">
          <aside class="sticky top-0 h-full max-w-md w-full flex-shrink-0 py-16" transition:name="project-description">
            <div class="flex flex-col relative">
              ${project.featured ? `<span class="text-sm uppercase tracking-tight text-gruvbox-purple">Featured</span>` : ''}
              <strong class="text-3xl font-semibold text-gruvbox-black">${project.title}</strong>
              <p class="p-3 bg-gruvbox-fg-700 text-gruvbox-black rounded-md mt-2 max-w-sm">
                ${project.description}
              </p>
            </div>
          </aside>
          <main class="pt-16">
            <img src=${project.presentation} class="w-full rounded-xl" transition:name="presentation" />
          </main>
        </div>
        <ul class="px-16">
          ${project.images.map((image, i) => (
    `<li key=${i} class="flex space-x-12">
                <div class="sticky top-0 h-full pt-8 max-w-md w-full flex-shrink-0 text-gruvbox-black text-lg tracking-tight">${image.title}</div>
                <div class="mt-8">
                  <img src=${image.url} loading="lazy" class="rounded-xl object-cover" />
                </div>
            </li>`
  )).join("")}
        </ul>
      </body>
    <html/>
`
}
