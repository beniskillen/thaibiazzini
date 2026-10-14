import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const site = process.env.PUBLIC_SITE_URL || 'https://beniskillen.github.io/nara-studio';
const base = process.env.PUBLIC_BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
  compressHTML: true,
});
