'use strict';

/**
* @public
* @function getGeo
* @description Gets Geolcoation information for an IP from the GeoJS API
* @param {String} address - IP address.
* @param {RequestHandler} fetchURL - Fetch URL API
* @returns {Array} -
*/

export async function getGeo(fetchURL, address) {
	let endpoint = 'https://get.geojs.io/v1/ip/geo.json';
	if (address != null) {
		endpoint = `https://get.geojs.io/v1/ip/geo/${address}.json`;
	}
	const res = await fetchURL(endpoint);
	const resp = await res.json();

	if (res.ok) {
		return resp;
	} else {
		throw new Error(resp);
	}
}

/**
* @public
* @function getPTR
* @description Gets a PTR
* @param {String} address - IP address.
* @returns {Promise} - Determine whether IP address is valid.
*/

export async function getPTR(fetchURL, address) {
	let endpoint = 'https://get.geojs.io/v1/dns/ptr.json';
	if (address != null) {
		endpoint = `https://get.geojs.io/v1/dns/ptr/${address}.json`;
	}
	const res = await fetchURL(endpoint);
	const resp = await res.json();

	if (res.ok) {
		return resp;
	} else {
		throw new Error(resp);
	}
}
