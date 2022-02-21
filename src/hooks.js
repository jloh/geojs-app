/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(event) {
	console.log(event.request.headers)
	if (event.request.headers['client-ip']) {
		return {
				userIP: event.request.headers['client-ip']
		}
	}
}
