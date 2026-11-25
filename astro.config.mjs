// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Set SITE_URL to your real address (for example https://www.farlinejourneys.com)
// so the sitemap, canonical links and social previews point to it.
const site = process.env.SITE_URL || "https://example.com";

export default defineConfig({
  site,
  output: "static",
  trailingSlash: "ignore",
  integrations: [sitemap()],
});
