import { error } from '@sveltejs/kit';
import { validateIP } from '$lib/validIP.js';
export async function load({ params, fetch }) {
	if (!validateIP(params.slug)) {
		throw error(404);
	}
	const geo = await fetch(`https://get.geojs.io/v1/ip/geo/${params.slug}.json`);
	const ptr = await fetch(`https://get.geojs.io/v1/dns/ptr/${params.slug}.json`);

	return {
		geoLookup: geo.ok && (await geo.json()),
		ptrLookup: ptr.ok && ptr.json()
	};
}
