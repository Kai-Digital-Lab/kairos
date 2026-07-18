// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  site: 'https://kairos-559.pages.dev',
  integrations: [tailwind(), sitemap()],
  markdown: {
    // Dual light/dark Shiki themes — the `.dark` class strategy switches
    // between them via CSS variables (see src/styles/global.css).
    // Astro already auto-adds `id`s to headings, so no rehype-slug needed.
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: true,
    },
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-tw"],
    routing: {
      prefixDefaultLocale: true
    }
  }
});