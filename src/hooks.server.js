/** @type {import('@sveltejs/kit').HandleFetch} */
export async function handleFetch({ request, fetch, event }) {
	if (request.url == 'https://get.geojs.io/v1/ip/geo.json') {
		request = new Request(
			`https://get.geojs.io/v1/ip/geo/${event.getClientAddress()}.json`,
			request
		);
	} else if (request.url == 'https://get.geojs.io/v1/dns/ptr') {
		request = new Request(`https://get.geojs.io/v1/dns/ptr/${event.getClientAddress()}`, request);
	}
	return fetch(request);
}
