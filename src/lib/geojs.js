/**
 * GeoJS API helper functions
 */

/** @typedef {import('./types.js').GeoJSData} GeoJSData */

const GEOJS_BASE_URL = 'https://get.geojs.io/v1';
const CLOUDFLARE_DNS_URL = 'https://cloudflare-dns.com/dns-query';

/**
 * Convert IPv4 address to PTR format
 * @param {string} ip - IPv4 address (e.g., "1.2.3.4")
 * @returns {string} PTR format (e.g., "4.3.2.1.in-addr.arpa")
 */
function ipv4ToPTR(ip) {
	return ip.split('.').reverse().join('.') + '.in-addr.arpa';
}

/**
 * Convert IPv6 address to PTR format
 * @param {string} ip - IPv6 address
 * @returns {string} PTR format with .ip6.arpa suffix
 */
function ipv6ToPTR(ip) {
	// Expand the IPv6 address to full form
	const segments = ip.split(':');
	const expanded = [];

	// Handle :: expansion
	let emptyIndex = -1;
	for (let i = 0; i < segments.length; i++) {
		if (segments[i] === '') {
			emptyIndex = i;
			break;
		}
	}

	if (emptyIndex !== -1) {
		// Found ::, need to expand
		const before = segments.slice(0, emptyIndex).filter((s) => s !== '');
		const after = segments.slice(emptyIndex + 1).filter((s) => s !== '');
		const missing = 8 - before.length - after.length;

		expanded.push(...before);
		for (let i = 0; i < missing; i++) {
			expanded.push('0000');
		}
		expanded.push(...after);
	} else {
		expanded.push(...segments);
	}

	// Pad each segment to 4 characters
	const padded = expanded.map((segment) => segment.padStart(4, '0'));

	// Join all segments and reverse each character
	const allChars = padded.join('').split('').reverse().join('.');

	return allChars + '.ip6.arpa';
}

/**
 * Get geolocation information for an IP address
 * @param {typeof fetch} fetchURL - SvelteKit's fetch function
 * @param {string} [address] - IP address to lookup (optional, defaults to requester's IP)
 * @returns {Promise<GeoJSData>} Geolocation data
 */
export async function getGeo(fetchURL, address) {
	const endpoint = address
		? `${GEOJS_BASE_URL}/ip/geo/${address}.json`
		: `${GEOJS_BASE_URL}/ip/geo.json`;

	const response = await fetchURL(endpoint);

	if (!response.ok) {
		throw new Error(`Failed to fetch geolocation data: ${response.status}`);
	}

	return response.json();
}

/**
 * Get PTR (reverse DNS) record for an IP address using Cloudflare DNS
 * @param {typeof fetch} fetchURL - SvelteKit's fetch function
 * @param {string} [address] - IP address to lookup (optional, defaults to requester's IP)
 * @returns {Promise<string>} PTR record
 */
export async function getPTR(fetchURL, address) {
	// If no address provided, we need to get it from GeoJS first
	if (!address) {
		const geoData = await getGeo(fetchURL);
		address = geoData.ip;
	}

	// Determine if IPv4 or IPv6 and convert to PTR format
	let ptrName;
	if (address.includes(':')) {
		// IPv6
		ptrName = ipv6ToPTR(address);
	} else {
		// IPv4
		ptrName = ipv4ToPTR(address);
	}

	// Query Cloudflare DNS
	const url = new URL(CLOUDFLARE_DNS_URL);
	url.searchParams.set('name', ptrName);
	url.searchParams.set('type', 'PTR');

	const response = await fetchURL(url.toString(), {
		headers: {
			Accept: 'application/dns-json'
		}
	});

	if (!response.ok) {
		throw new Error(`Failed to fetch PTR record: ${response.status}`);
	}

	const data = await response.json();

	// Check if we got a valid response with PTR data
	if (data.Status === 0 && data.Answer && data.Answer.length > 0) {
		// Remove trailing dot if present
		return data.Answer[0].data.replace(/\.$/, '');
	}

	// No PTR record found
	return '';
}
