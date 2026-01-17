import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.pt-tlv.com',
  integrations: [react(), sitemap()],
  i18n: {
    defaultLocale: 'he',
    locales: ['he', 'en'],
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
