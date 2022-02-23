/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(event) {
	if (event.request.headers.get('x-nf-client-connection-ip') !== null) {
		return {
				userIP: event.request.headers.get('x-nf-client-connection-ip')
		}
	} else {
		return {
			userIP: "1.1.1.1"
		}
	}
}
