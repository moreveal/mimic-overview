import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const pages = ["", "docs", "benchmarks", "examples", "download", "about",
  "changelog", "license", "privacy", "playwright-without-chromium", "mimic-vs-chromium"];
export function destination(pathname, search = "", hash = "") {
  const prefix = "/mimic-overview";
  let path = pathname;
  if (path === prefix) path = "/";
  else if (path.startsWith(`${prefix}/`)) path = path.slice(prefix.length);
  if (path.endsWith("/index.html")) path = path.slice(0, -10);
  else if (path.endsWith(".html")) path = `${path.slice(0, -5)}/`;
  return `https://mimic.boo${path || "/"}${search}${hash}`;
}
const html = (path) => {
  const url = `https://mimic.boo/${path ? `${path}/` : ""}`;
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,follow">
<link rel="canonical" href="${url}">
<meta http-equiv="refresh" content="2;url=${url}">
<title>Mimic website moved</title>
<script>
const destination = ${destination.toString()};
location.replace(destination(location.pathname, location.search, location.hash));
</script></head><body>
<p>The Mimic website has moved. <a href="${url}">Continue to Mimic</a>.</p>
</body></html>\n`;
};
for (const path of pages) {
  const dir = join("_site", path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html(path));
}
writeFileSync("_site/404.html", html(""));
writeFileSync("_site/.nojekyll", "");
console.log(`Built ${pages.length} redirect pages and custom 404.`);
