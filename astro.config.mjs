// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react'
import solid from '@astrojs/solid-js'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), solid()],
  site: 'https://weihanchen0725.github.io/',
  base: '.',
});
