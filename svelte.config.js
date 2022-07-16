import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = 'production' === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		adapter: adapter({ pages: 'docs', assets: 'docs', fallback: true }),
		paths: {
			// change below to your repo name
			base: dev ? '' : "/idillio",
		},
		trailingSlash: 'always',
		prerender: { default: true },
	}
};

export default config;
