// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';


// https://astro.build/config

export default defineConfig({
  vite: {
    server: {
      fs: {
        allow: [
          '/Users/maartenmieras/node_modules',
          '/Users/maartenmieras/Dropbox/Work/Github/AstroStudioStarter/web',
        ],
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          logger: {
            warn: () => {},
          },
        },
      },
    }
  },

  integrations: [react()],
  
});