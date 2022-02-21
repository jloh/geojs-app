/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(event) {
	if (event.request.headers['client-ip']) {
		return {
				userIP: event.request.headers['client-ip']
		}
	}
}
