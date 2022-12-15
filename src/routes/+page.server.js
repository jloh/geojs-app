/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
	return {
		clientIP: event.getClientAddress()
	};
}
