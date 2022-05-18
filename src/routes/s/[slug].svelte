<script context="module">
	import { validateIP } from '$lib/validIP.js';
	export async function load({ params, fetch }) {
		if (!validateIP(params.slug)) {
			return {
				status: 404
			};
		}
		const geo = await fetch(`https://get.geojs.io/v1/ip/geo/${params.slug}.json`);
		const ptr = await fetch(`https://get.geojs.io/v1/dns/ptr/${params.slug}.json`);

		return {
			status: geo.status,
			props: {
				geoLookup: geo.ok && (await geo.json()),
				ptrLookup: ptr.ok && ptr.json()
			}
		};
	}
</script>

<script>
	import Search from '$lib/components/Search.svelte';
	import ResultTable from '$lib/components/ResultTable.svelte';
	export let geoLookup;
	export let ptrLookup;
</script>

<svelte:head>
	<title>{geoLookup.ip} IP address information | GeoJS</title>
</svelte:head>

<Search currentValue={geoLookup.ip} />

<div>
	<ResultTable geo={geoLookup} ptr={ptrLookup} />
</div>
