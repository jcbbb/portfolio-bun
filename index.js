import { generatePages } from "./pages.js";
import { readdir, stat, mkdir } from "node:fs/promises";
let results = await generatePages();

let routes = {}

for (let result of results) {
  let [key, path] = result;
  routes[key] = () => new Response(Bun.file(path));
}

async function staticallyLinkFolder(folder = "./public", prefix = "/public") {
  let files = await readdir(folder);
  if (!files.length) return

  for (let path of files) {
    let inp = folder + "/" + path;
    let isDirectory = (await stat(inp)).isDirectory();
    if (isDirectory) staticallyLinkFolder(inp, prefix + "/" + path)
    else {
      // routes[prefix + "/" + path] = () => new Response(Bun.file(folder + "/" + path), { headers: { "Cache-Control": "public, max-age=120; stale-while-revalidate=300" } });
      routes[prefix + "/" + path] = () => new Response(Bun.file(folder + "/" + path));
    }
  }
}

staticallyLinkFolder();

let server = Bun.serve({
  port: 3000,
  fetch(req) {
    let url = new URL(req.url);
    let handler = routes[url.pathname];
    if (handler) return handler(req);
    else return new Response("<h1>Not found</h1>", { status: 404, headers: { "Content-Type": "text/html" } })
  }
});

console.log(`Listening on port ${server.port}`);

