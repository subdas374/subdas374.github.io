
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://subdas374.github.io',
  integrations: [tailwind()],
});
