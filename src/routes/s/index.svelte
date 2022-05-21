<script context="module">
	import { validateIP } from '$lib/validIP.js';
	export async function load({ url }) {
		if (url.searchParams.has('ip_address') && validateIP(url.searchParams.get('ip_address'))) {
			return {
				status: 308,
				redirect: '/s/' + url.searchParams.get('ip_address')
			};
		} else {
			return {
				status: 404
			};
		}
	}
</script>
