export function render(project) {
  return ``;
  return `
    <div class="flex space-x-12 px-16">
      <aside class="sticky top-0 h-full max-w-md w-full flex-shrink-0 py-16" transition:name="project-description">
        <div class="flex flex-col relative">
          ${project.featured ? `<span class="text-sm uppercase tracking-tight text-gruvbox-purple">Featured</span>` : ''}
          <strong class="text-3xl font-semibold text-gruvbox-black">{project.title}</strong>
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
`
}
