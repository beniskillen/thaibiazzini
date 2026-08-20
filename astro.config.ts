import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const site = process.env.PUBLIC_SITE_URL || 'https://beniskillen.github.io/thaibiazzini';

export default defineConfig({
  site,
  integrations: [sitemap()],
  compressHTML: true,
});
