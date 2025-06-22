import { redirect } from '@sveltejs/kit';
import { validateIP } from '$lib/validIP.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
	const ip = url.searchParams.get('ip');

	// If no IP parameter, redirect to home
	if (!ip) {
		throw redirect(302, '/');
	}

	// Validate and redirect to the proper URL
	if (validateIP(ip)) {
		throw redirect(302, `/s/${ip}`);
	}

	// Invalid IP, redirect to home
	throw redirect(302, '/');
}
