import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.pt-tlv.com',
  integrations: [react(), sitemap()],
  i18n: {
    defaultLocale: 'he',
    locales: ['he', 'en'],
  },
});
