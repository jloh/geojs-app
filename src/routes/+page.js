/** @type {import('./$types').PageLoad} */
export const prerender = false;
export async function load({ fetch }) {
	const geo = 'https://get.geojs.io/v1/ip/geo.json';
	const ptr = 'https://get.geojs.io/v1/dns/ptr.json';
	const geoResponse = await fetch(geo);
	const ptrResponse = await fetch(ptr);
	return {
		geoLookup: geoResponse.ok && (await geoResponse.json()),
		ptrLookup: ptrResponse.ok && ptrResponse.json()
	};
}
