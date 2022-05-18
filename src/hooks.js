/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(event) {
	console.log(event)
	console.log(event.clientAddress)
	console.log(typeof event.clientAddress)
	if (event.clientAddress !== null) {
		console.log(event.clientAddress)
	} else {
		console.log("No clientAddress")
	}
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
