/** @type {import('./$types').PageLoad} */
import { browser } from '$app/environment';
export const prerender = false;
export async function load({ fetch, data }) {
	const { clientIP } = data;
	var geo, ptr;
	if (browser) {
		geo = 'https://get.geojs.io/v1/ip/geo.json';
		ptr = 'https://get.geojs.io/v1/dns/ptr.json';
	} else {
		geo = `https://get.geojs.io/v1/ip/geo/${clientIP}.json`;
		ptr = `https://get.geojs.io/v1/dns/ptr/${clientIP}.json`;
	}
	const geoResponse = await fetch(geo);
	const ptrResponse = await fetch(ptr);
	return {
		geoLookup: geoResponse.ok && (await geoResponse.json()),
		ptrLookup: ptrResponse.ok && ptrResponse.json()
	};
}
