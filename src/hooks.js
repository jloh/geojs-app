/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(event) {
	console.log(event)
	if (event.request.headers.get('x-nf-client-connection-ip') !== null) {
		console.log(event.request.headers.get('x-nf-client-connection-ip'))
		console.log(event)
		return {
			userIP: event.request.headers.get('x-nf-client-connection-ip')
		}
	} else {
		return {
			userIP: "1.1.1.1"
		}
	}
}
