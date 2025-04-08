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
          '/Users/maartenmieras/Dropbox/Work/Github/Astro Test/AstroStudioStarter/web',
          '/Users/maartenmieras/Dropbox/Work/Github/Astro Test/AstroStudioStarter/web/src',
          '/Users/maartenmieras/Dropbox/Work/Github/Astro Test/AstroStudioStarter/web/node_modules/@fontsource-variable',
          '/Users/maartenmieras/Dropbox/Work/Github/Astro Test/AstroStudioStarter/web/node_modules/@fontsource',
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