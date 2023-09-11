import { readdir, stat, mkdir } from "node:fs/promises";

export async function generatePages(input = "./pages", output = "./static", route = "", routes = []) {
  let files = await readdir(input);
  if (!files.length) return;

  for (let path of files) {
    let inputpath = input + "/" + path;
    let isDirectory = (await stat(inputpath)).isDirectory();
    if (isDirectory) {
      await Promise.all([
        mkdir(output + "/" + path, { recursive: true }),
        generatePages(inputpath, output + "/" + path, route + "/" + path, routes)
      ]);
    } else {
      let cleanpath = stripExt(path);
      let param = parseParam(cleanpath);
      let { render, data, headers } = await import(inputpath);
      if (param && data) {
        let result = data();
        for (let item of result) {
          let slug = item.params[param];
          let out = output + "/" + slug + ".html";
          let publicRoute = route + "/" + slug;
          routes.push([publicRoute, out, headers?.()]);
          await Bun.write(out, render(item.props));
        }
        return;
      }

      let out = output + "/" + cleanpath + ".html";
      let publicRoute = route + "/" + cleanpath;
      if (cleanpath === "index") routes.push([route + "/", out]);
      routes.push([publicRoute, out, headers?.()])
      await Bun.write(out, render(data?.props));
    }
  }

  return routes;
}

let paramRegex = /\[(?<param>\w+)\]/

function stripExt(filename) {
  return filename.split(".").slice(0, -1).join(".");
}

function parseParam(filename) {
  let match = filename.match(paramRegex);
  if (match) {
    return match.groups.param;
  }
}
