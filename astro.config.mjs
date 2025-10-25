import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://YOUR-USERNAME.github.io',
  integrations: [tailwind()],
});
