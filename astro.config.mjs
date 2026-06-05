// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { exec } from 'child_process';
import path from 'path';

function imageManifestWatcher() {
  return {
    name: 'image-manifest-watcher',
    configureServer(server) {
      const imagesDir = path.resolve('public/images');
      server.watcher.on('all', (event, filePath) => {
        if (filePath.startsWith(imagesDir) && (event === 'add' || event === 'unlink' || event === 'unlinkDir')) {
          console.log(`[Image Watcher] ${event} detected in ${path.basename(filePath)}. Regenerating manifest...`);
          exec('node scripts/generate-image-manifest.js', (err, stdout, stderr) => {
            if (err) {
              console.error('[Image Watcher] Error regenerating manifest:', stderr);
            }
          });
        }
      });
    }
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://gurukulchildrenacademy.placeholder.com',
  vite: {
    plugins: [tailwindcss(), imageManifestWatcher()]
  },

  integrations: [sitemap()]
});