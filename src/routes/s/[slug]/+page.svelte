<script>
	import Search from '$lib/components/Search.svelte';
	import ResultTable from '$lib/components/ResultTable.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	{#if data.geoLookup.organization_name === 'Unknown'}
		<title
			>{data.geoLookup.ip} - {data.geoLookup.organization_name} organization (ASN {data.geoLookup
				.asn}) | GeoJS</title
		>
	{:else}
		<title
			>{data.geoLookup.ip} - {data.geoLookup.organization_name} (ASN {data.geoLookup.asn}) | GeoJS</title
		>
	{/if}
</svelte:head>

<Search currentValue={data.geoLookup.ip} />

<ResultTable geo={data.geoLookup} ptr={data.slowResults.ptrLookup} />
