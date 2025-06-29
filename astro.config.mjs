// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import solid from '@astrojs/solid-js';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react({ include: ['src/components/react/**/*.{jsx,tsx}'] }),
    solid({ include: ['src/components/solid/**/*.{jsx,tsx}'] }),
    icon(),
  ],
  site: 'https://weihanchen0725.github.io/',
  base: '.',
});
