import adapter from '@sveltejs/adapter-auto';

const config = {
	kit: {
		adapter: adapter(),

		experimental: {
			tracing: {
				server: true
			},

			instrumentation: {
				server: true
			}
		}
	}
};

export default config;
