import preact from '@astrojs/preact';
import react from '@astrojs/react';
import solidJs from '@astrojs/solid-js';
import svelte from '@astrojs/svelte';
import vue from '@astrojs/vue';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react({
      // Process files within the 'src/components/react' directory with React
      include: ['**/src/components/react/*'],
    }),
    solidJs({
      // Process files within the 'src/components/solid' directory with Solid
      include: ['**/src/components/solid/*'],
    }),
    preact({
      // Process files within the 'src/components/preact' directory with Preact
      include: ['**/src/components/preact/*'],
    }),
    svelte(),
    vue(),
  ],
  build: {
    assets: 'app',
  },
});
