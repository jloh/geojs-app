import { error } from '@sveltejs/kit';
import { validateIP } from '$lib/validIP.js';
import { getGeo, getPTR } from '$lib/geojs.js';

/** @typedef {import('$lib/types.js').GeoJSData} GeoJSData */

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
	// Validate the IP address
	if (!validateIP(params.slug)) {
		throw error(404, 'Invalid IP address');
	}

	try {
		// Fetch geo data for the specified IP
		/** @type {GeoJSData} */
		const ipData = await getGeo(fetch, params.slug);

		// Fetch PTR data (now fast with Cloudflare DNS)
		const ptr = await getPTR(fetch, params.slug).catch((err) => {
			console.error('PTR lookup failed:', err);
			return '';
		});

		return {
			ipData,
			ptr,
			searchedIP: params.slug
		};
	} catch (err) {
		console.error('Failed to load IP data:', err);
		throw error(500, 'Failed to load IP information');
	}
}
