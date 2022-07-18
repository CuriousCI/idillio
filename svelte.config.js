import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({ postcss: true }),
	kit: {
		adapter: adapter({ pages: 'docs', assets: 'docs', fallback: true }),
		package: {
			files(filepath) {
				return !filepath.endsWith('.stories.svelte')
			}
		},
		paths: {
			// change below to your repo name
			base: '/idillio',
		},
		trailingSlash: 'always',
		prerender: { default: true },
	}
};

export default config;
