<script context="module">
	import { browser } from '$app/env';
	export async function load({ params, fetch, session, stuff }) {
		var geo, ptr;
		if (!browser) {
			geo = `https://get.geojs.io/v1/ip/geo/${session.userIP}.json`;
			ptr = `https://get.geojs.io/v1/dns/ptr/${session.userIP}.json`;
		} else {
			geo = 'https://get.geojs.io/v1/ip/geo.json';
			ptr = 'https://get.geojs.io/v1/dns/ptr.json';
		}
		const geoResponse = await fetch(geo);
		const ptrResponse = await fetch(ptr);
		return {
			status: geoResponse.status,
			props: {
				geoLookup: geoResponse.ok && (await geoResponse.json()),
				ptrLookup: ptrResponse.ok && ptrResponse.json()
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
	<title>GeoJS | IP address information</title>
</svelte:head>

<Search />

<h1>IP info for {geoLookup.ip}</h1>
<div>
	<ResultTable geo={geoLookup} ptr={ptrLookup} />
</div>
