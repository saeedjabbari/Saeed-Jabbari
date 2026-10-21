import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'sync-static-github-pages-bundle',
        closeBundle() {
          try {
            const distAssetsDir = path.resolve(__dirname, 'dist/assets');
            const publicBundleDir = path.resolve(__dirname, 'public/bundle');
            if (!fs.existsSync(distAssetsDir)) return;
            fs.mkdirSync(publicBundleDir, {recursive: true});

            const files = fs.readdirSync(distAssetsDir);
            const jsFile = files.find((f) => f.endsWith('.js'));
            const cssFile = files.find((f) => f.endsWith('.css'));

            if (jsFile) {
              fs.copyFileSync(
                path.join(distAssetsDir, jsFile),
                path.join(publicBundleDir, 'app.js')
              );
            }
            if (cssFile) {
              fs.copyFileSync(
                path.join(distAssetsDir, cssFile),
                path.join(publicBundleDir, 'app.css')
              );
            }
          } catch {
            // Ignore non-fatal sync errors
          }
        },
      },
    ],
    base: './',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
