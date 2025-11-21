import * as Sentry from '@sentry/sveltekit';

Sentry.init({
	dsn: 'https://36785717d7515c716739be703f35c5fb@o494455.ingest.us.sentry.io/4510401557823488',

	tracesSampleRate: 1.0,

	// Enable logs to be sent to Sentry
	enableLogs: true

	// uncomment the line below to enable Spotlight (https://spotlightjs.com)
	// spotlight: import.meta.env.DEV,
});
