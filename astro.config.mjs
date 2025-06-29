// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import solid from '@astrojs/solid-js';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), solid(), icon()],
  site: 'https://weihanchen0725.github.io/',
  base: '.',
});
