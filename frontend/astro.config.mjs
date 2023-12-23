import { defineConfig } from 'astro/config';
import Compress from 'astro-compress';
import tailwind from '@astrojs/tailwind';

import compressor from 'astro-compressor';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    Compress({
      HTML: false
    }),
    compressor()
  ]
});
