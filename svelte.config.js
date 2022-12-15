import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		csp: {
			directives: {
				'default-src': ['none'],
				'script-src': ['self', 'get.geojs.io', 'cdn.simpleanalytics.io', 'sa.geojs.io'],
				'style-src': ['self', 'unsafe-inline'],
				'img-src': ['self', 'www.geojs.io'],
				'connect-src': ['self', 'get.geojs.io', 'sa.geojs.io', 'api.simpleanalytics.io'],
				'font-src': ['none'],
				'form-action': ['self'],
				'upgrade-insecure-requests': true,
				'report-uri': ['https://jloh.report-uri.com/r/d/csp/enforce']
			}
		},
		adapter: adapter({
			// edge: false // Used to enable Netlify edge funcs
		}),
	}
};

export default config;
