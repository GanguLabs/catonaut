import preact from '@astrojs/preact';
import react from '@astrojs/react';
import solidJs from '@astrojs/solid-js';
import svelte from '@astrojs/svelte';
import vue from '@astrojs/vue';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // The base path is important for extensions to correctly resolve assets.
  base: './',
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
    // This is the critical line!
    // It tells Astro to output external script files instead of inlining them. This is necessary for a web-extension to meet the Content Security Policy
    inline: false,
    // Add these settings to ensure a clean build and predictable paths.
    // The assetPrefix is a good practice for extensions to prevent path issues.
    assetsPrefix: './',
    // Set the output directory to `dist` to match the manifest.json
    outDir: './dist',
    // Ensure that build artifacts are cleaned on each build
    emptyOutDir: true,
  },
});
