import { defineConfig } from 'astro/config';

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: 'https://weihanchen0725.github.io',
  integrations: [solidJs()]
});