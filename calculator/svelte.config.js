import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import sveltePreprocess from 'svelte-preprocess';
import postcssNested from 'postcss-nested';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
    sveltePreprocess({
      postcss: {
        plugins: [
          postcssNested()
        ]
      }
    }),
    // vitePreprocess(),
  ],

	kit: {
		adapter: adapter()
	}
};

export default config;
