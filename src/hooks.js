/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(event) {
	console.log(event.request.headers)
	if (event.request.headers['x-nf-client-connection-ip'] !== null) {
		console.log(event.request.headers['x-nf-client-connection-ip'])
		console.log("in here")
		return {
				userIP: event.request.headers['x-nf-client-connection-ip']
		}
	}
}
