import { browser } from '$app/env';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, session }) {
	var geo, ptr;
	if (!browser) {
		geo = `https://get.geojs.io/v1/ip/geo/${session.userIP}.json`;
		ptr = `https://get.geojs.io/v1/dns/ptr/${session.userIP}.json`;
	} else {
		geo = 'https://get.geojs.io/v1/ip/geo.json';
		ptr = 'https://get.geojs.io/v1/dns/ptr.json';
	}
	const geoResponse = await fetch(geo);
	const ptrResponse = await fetch(ptr);
	return {
		geoLookup: geoResponse.ok && (await geoResponse.json()),
		ptrLookup: ptrResponse.ok && ptrResponse.json()
	};
}
