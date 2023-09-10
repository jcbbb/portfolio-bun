import { generatePages } from "./pages.js";
let results = await generatePages();

let routes = {
  "/public/css/main.min.css": () => new Response(Bun.file("./public/css/main.min.css")),
  "/public/fonts/RobotoMono-VariableFont_wght.woff2": () => new Response(Bun.file("./public/fonts/RobotoMono-VariableFont_wght.woff2")),
}

for (let result of results) {
  let [key, path] = result;
  routes[key] = () => new Response(Bun.file(path));
}

console.log(results);
console.log(routes);

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

