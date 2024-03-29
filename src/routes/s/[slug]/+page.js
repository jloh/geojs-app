import { error } from '@sveltejs/kit';
import { validateIP } from '$lib/validIP.js';
import { getPTR, getGeo } from '$lib/geojs.js';
/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
	if (!validateIP(params.slug)) {
		error(404);
	}
	let geo = await getGeo(fetch, params.slug);
	let ptr = getPTR(fetch, params.slug);
	return {
		geoLookup: geo,
		slowResults: {
			ptrLookup: ptr
		}
	};
}
