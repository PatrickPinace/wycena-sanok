// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// Docelowa domena zostaje niezależnie od tego, gdzie akurat stoi build
// (np. tymczasowy podgląd na GitHub Pages pod subpath repo) - to wpływa
// tylko na wewnętrzne linki (Astro `base`), nie na canonical/sitemap.
const base = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  site: 'https://wycena-sanok.pl',
  base,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/mapa'),
    }),
  ],
});