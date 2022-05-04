import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({ pages: 'docs', assets: 'docs' }),
		trailingSlash: 'always',
		prerender: { enabled: true, crawl: true, default: true, entries: ['*'], onError: 'continue' }
	}
};

export default config;
