<script>
	import Search from '$lib/components/Search.svelte';
	import ResultTable from '$lib/components/ResultTable.svelte';

	/** @type {{data: import('./$types').PageData}} */
	let { data } = $props();
</script>

<svelte:head>
	<title>GeoJS | {data.searchedIP} - IP address information</title>
</svelte:head>

<main class="container mx-auto px-4 py-8">
	<Search />

	<ResultTable ipData={data.ipData} ptr={data.ptr} />
</main>
