import { getPTR, getGeo } from '$lib/geojs.js'
export const prerender = false;
/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	let geo = getGeo(fetch)
	let ptr = getPTR(fetch)
	return {
		geoLookup: geo,
		slowResults: {
			ptrLookup: ptr
		}
	};
}
