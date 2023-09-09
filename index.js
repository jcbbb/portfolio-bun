import { generatePages } from "./pages.js";
generatePages();

let routes = {
  "/public/css/main.min.css": () => new Response(Bun.file("./public/css/main.min.css")),
  "/public/fonts/RobotoMono-VariableFont_wght.woff2": () => new Response(Bun.file("./public/fonts/RobotoMono-VariableFont_wght.woff2")),
}

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

