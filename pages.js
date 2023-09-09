import { readdir, stat, mkdir } from "node:fs/promises";

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
  }
]

export async function generatePages(input = "./pages", output = "./static") {
  let files = await readdir(input);
  if (!files.length) return;

  for (let path of files) {
    let inputpath = input + "/" + path;
    let outputpath = output + "/" + path;
    let isDirectory = (await stat(inputpath)).isDirectory();
    if (isDirectory) {
      await mkdir(outputpath, { recursive: true });
      generatePages(inputpath, output);
    } else {
      let { render } = await import(inputpath);
      let result = await Bun.write(outputpath.slice(0, -3) + ".html", render());
      console.log({ result })
    }
  }
}
