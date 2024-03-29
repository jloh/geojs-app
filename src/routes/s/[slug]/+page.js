import { error } from '@sveltejs/kit';
import { validateIP } from '$lib/validIP.js';
import { getPTR, getGeo } from '$lib/geojs.js'
/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
	if (!validateIP(params.slug)) {
		throw error(404);
	}
	let geo = getGeo(fetch, params.slug)
	let ptr = getPTR(fetch, params.slug)
	return {
		geoLookup: geo,
		slowResults: {
			ptrLookup: ptr
		}
	};
}
