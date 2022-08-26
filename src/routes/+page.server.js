/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
	var geo, ptr;
	geo = `https://get.geojs.io/v1/ip/geo/${event.getClientAddress()}.json`;
	ptr = `https://get.geojs.io/v1/dns/ptr/${event.getClientAddress()}.json`;
	const geoResponse = await fetch(geo);
	const ptrResponse = await fetch(ptr);
	return {
		geoLookup: geoResponse.ok && (await geoResponse.json()),
		ptrLookup: ptrResponse.ok && ptrResponse.json()
	};
}
