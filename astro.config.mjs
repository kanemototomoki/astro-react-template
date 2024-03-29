import { defineConfig } from 'astro/config';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import react from '@astrojs/react';



// https://astro.build/config
export default defineConfig({
	// Enable React to support React JSX components.
  vite: {
    plugins: [vanillaExtractPlugin()]
  },
	integrations: [react()],
});
