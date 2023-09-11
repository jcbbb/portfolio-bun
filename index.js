import { generatePages } from "./pages.js";
import { readdir, stat } from "node:fs/promises";

let port = parseInt(process.env.PORT, 10) || 6990;
let results = await generatePages();
let routes = {}
for (let result of results) {
  let [key, path, headers = {}] = result;
  routes[key] = () => new Response(Bun.file(path), { headers });
}

async function staticallyLinkFolder({ folder = "./public", prefix = "/public", opts = {} } = {}) {
  let files = await readdir(folder);
  if (!files.length) return

  for (let path of files) {
    let inp = folder + "/" + path;
    let isDirectory = (await stat(inp)).isDirectory();
    let fullprefix = prefix + "/" + path;
    if (isDirectory) {
      staticallyLinkFolder({ folder: inp, prefix: fullprefix, opts });
    } else {
      routes[fullprefix] = () => new Response(Bun.file(folder + "/" + path), opts);
    }
  }
}

await staticallyLinkFolder({ opts: { headers: { "Cache-Control": "public, max-age=600, stale-while-revalidate=3600" } } });

let server = Bun.serve({
  port,
  fetch(req) {
    let url = new URL(req.url);
    let handler = routes[url.pathname];
    if (handler) return handler(req);
    else return new Response("<h1>Not found</h1>", { status: 404, headers: { "Content-Type": "text/html" } })
  }
});

console.log(`Listening on port ${server.port}`);

