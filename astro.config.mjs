// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  fonts: [{
    provider: fontProviders.google(),
    name: "Potta One",
    cssVariable: "--font-potta-one"
  }],
  integrations: [icon()]
});