<script>
	import Search from '$lib/components/Search.svelte';
	import ResultTable from '$lib/components/ResultTable.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>GeoJS | IP address information</title>
</svelte:head>

<Search />

<div>
	<ResultTable geo={data.geoLookup} ptr={data.ptrLookup} />
</div>
