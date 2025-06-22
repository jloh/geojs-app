import { getGeo, getPTR } from '$lib/geojs.js';
import { error } from '@sveltejs/kit';

/** @typedef {import('$lib/types.js').GeoJSData} GeoJSData */

/** @type {import('./$types').PageServerLoad} */
export async function load({ getClientAddress, fetch }) {
	try {
		// Get the client's IP address from SvelteKit
		const clientIP = getClientAddress();

		// Fetch geo data (includes ASN information)
		/** @type {GeoJSData} */
		const ipData = await getGeo(fetch);

		// Fetch PTR data (now fast with Cloudflare DNS)
		const ptr = await getPTR(fetch).catch((err) => {
			console.error('PTR lookup failed:', err);
			return '';
		});

		return {
			ipData,
			ptr
		};
	} catch (err) {
		console.error('Failed to load IP data:', err);
		throw error(500, 'Failed to load IP information');
	}
}
