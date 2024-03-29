import { redirect, error } from '@sveltejs/kit';
import { validateIP } from '$lib/validIP.js';

/** @type {import('./$types').PageLoad} */
export async function load({ url }) {
	if (url.searchParams.has('ip_address') && validateIP(url.searchParams.get('ip_address'))) {
		redirect(308, '/s/' + url.searchParams.get('ip_address'));
	} else {
		error(404);
	}
}
