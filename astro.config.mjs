import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import faviconGenerator from './src/integrations/favicon-generator';


// https://astro.build/config
export default defineConfig({
  site: 'https://hamelhmc.github.io',
  base: '',

  integrations: [
    faviconGenerator(),
    react(),
    robotsTxt({
      policy: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/assets/HAMILTON_MERCADO_CUELLAR_CV.pdf'],
        },
      ],
      sitemap: true,
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.9,
      lastmod: new Date(),
      entryLimit: 10000,
    }),
  ],

  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },

  build: {
    inlineStylesheets: 'auto',
  },

  compressHTML: true,

  vite: {
    plugins: [tailwindcss()],
  },
});