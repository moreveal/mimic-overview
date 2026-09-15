import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://moreveal.github.io",
  base: "/mimic/",
  output: "static",
  integrations: [sitemap()],
});
