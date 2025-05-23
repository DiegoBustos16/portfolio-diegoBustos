import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';

import cloudflare from "@astrojs/cloudflare";
import { spectreDark } from './src/ec-theme';

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio-diegobustos.pages.dev',
  integrations: [
    expressiveCode({
      themes: [spectreDark],
    }),
    mdx(),
    sitemap(),
    spectre({
      name: 'Portfolio',
      openGraph: {
        home: {
          title: 'Diego Bustos Portfolio',
          description: 'Diego Bustos - Portfolio'
        },
        blog: {
          title: 'Blog',
          description: 'News and guides for Spectre.'
        },
        projects: {
          title: 'Diego Bustos Projects'
        }
      },
      giscus: {
        repository: 'louisescher/spectre',
        repositoryId: 'R_kgDONjm3ig',
        category: 'General',
        categoryId: 'DIC_kwDONjm3is4ClmBF',
        mapping: 'pathname',
        strict: true,
        reactionsEnabled: true,
        emitMetadata: false,
        lang: 'en',
      }
    })
  ],
  adapter: cloudflare(),
});