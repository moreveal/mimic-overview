import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const root = resolve("dist");
if (!existsSync(root)) throw new Error("dist/ does not exist; run the build first");

const htmlFiles = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (name.endsWith(".html")) htmlFiles.push(path);
  }
};
walk(root);

const failures = [];
for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const value = match[1];
    if (/^(?:https?:|mailto:|#|data:|\/\/)/.test(value)) continue;
    const clean = value.split(/[?#]/)[0];
    let target;
    if (clean.startsWith("/mimic/")) target = join(root, clean.slice("/mimic/".length));
    else target = resolve(dirname(file), clean);
    const candidates = [target, join(target, "index.html"), `${target}.html`];
    if (!candidates.some(existsSync)) failures.push(`${file}: ${value}`);
  }
}

if (failures.length) {
  console.error(`Broken local references:\n${failures.join("\n")}`);
  process.exit(1);
}
console.log(`Checked ${htmlFiles.length} HTML files; local references resolve.`);
