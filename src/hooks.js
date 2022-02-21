/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(event) {
	if (event.request.headers['X-Nf-Client-Connection-Ip']) {
		return {
				userIP: event.request.headers['X-Nf-Client-Connection-Ip']
		}
	}
}
