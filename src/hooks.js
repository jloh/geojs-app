/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(event) {
	if (event.clientAddress !== null) {
		return {
			userIP: event.clientAddress
		}
	} else {
		return {
			userIP: "1.1.1.1"
		}
	}
}
