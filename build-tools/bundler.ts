/* This file is used to compile content.ts and
 * background.ts scripts from the src/srcipts folder into the
 * extension's dist folder as JavaScript to be used in the
 * extension.
 */

import { exec } from 'child_process';
import { copyFile } from 'fs/promises';
import { join } from 'path';

const srcDir = '../src';
const publicDir = '../public';
const distDir = '../dist';

async function copyExtensionFiles() {
  try {
    // The build process will create the dist directory, so we don't need to do it here.

    // Copy the manifest.json file
    await copyFile(
      join(publicDir, 'manifest.json'),
      `${distDir}/manifest.json`
    );

    // Copy the icons and other assets to the dist directory
    // This is a simplified example, you may need to adjust paths
    await copyFile(
      join(publicDir, 'assets', 'images', 'icon16.png'),
      `${distDir}/icon16.png`
    );
    await copyFile(
      join(publicDir, 'assets', 'images', 'icon16.png'),
      `${distDir}/icon16.png`
    );
    await copyFile(
      join(publicDir, 'assets', 'images', 'icon48.png'),
      `${distDir}/icon48.png`
    );
    await copyFile(
      join(publicDir, 'assets', 'images', 'icon128.png'),
      `${distDir}/icon128.png`
    );
    // await copyFile('./icons/icon.svg', `${distDir}/icon.svg`);

    console.log('Manifest and icons copied successfully.');
  } catch (error) {
    console.error('Failed to copy extension files:', error);
  }
}

async function buildAstro() {
  return new Promise((resolve, reject) => {
    // This command triggers the Astro build, which uses the configuration you set up
    const child = exec('bunx astro build');

    child.stdout.on('data', (data) => {
      console.log(`astro: ${data}`);
    });

    child.stderr.on('data', (data) => {
      console.error(`astro error: ${data}`);
    });

    child.on('close', (code) => {
      if (code === 0) {
        console.log('Astro build completed successfully.');
        resolve();
      } else {
        reject(new Error(`Astro build failed with code ${code}`));
      }
    });
  });
}

async function buildContentScript() {
  try {
    // Build the content script specifically
    await Bun.build({
      entrypoints: [join(srcDir, 'scripts', 'content.ts')],
      outdir: distDir,
      minify: true,
      naming: 'content.js', // Ensure the output filename is exactly 'content.js'
    });
    console.log('Content script built successfully.');
  } catch (error) {
    console.error('Failed to build content script:', error);
  }
}

async function buildBackgroundScript() {
  try {
    // Build the background script specifically
    await Bun.build({
      entrypoints: [join(srcDir, 'scripts', 'background.ts')],
      outdir: distDir,
      minify: true,
      naming: 'background.js', // Ensure the output filename is exactly 'background.js'
    });
    console.log('Background script built successfully.');
  } catch (error) {
    console.error('Failed to build background script:', error);
  }
}

async function build() {
  console.log('Starting extension build...');
  try {
    // First, let Astro handle building the UI and generating the HTML/JS files
    await buildAstro();

    // Then, separately build the content script
    await buildContentScript();

    // Now, build the background script
    await buildBackgroundScript();

    // Finally, copy the other essential files that Astro doesn't handle
    await copyExtensionFiles();

    console.log('Complete! Your extension is now in the "dist" directory.');
    console.log('You can now load this directory in your browser.');
  } catch (error) {
    console.error('Build process failed:', error);
  }
}

build();
