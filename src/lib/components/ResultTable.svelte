<script>
	export let geo;
	export let ptr;
	import { navigating } from '$app/stores';
</script>

<h1 class="text-bold my-6 text-center text-xl font-medium dark:text-gray-300">
	Results for
	<span
		class="relative my-2 ml-1 inline-block before:absolute before:-inset-1 before:block before:-skew-y-1 before:bg-blue-400 dark:before:bg-blue-500 md:my-0"
	>
		<span class="relative break-all text-white dark:text-gray-200">{geo.ip}</span>
	</span>
</h1>
<div
	class="overflow-auto rounded border border-gray-400 bg-white dark:bg-gray-900 dark:text-gray-200"
>
	<table class="w-full table-auto rounded text-lg">
		<tbody>
			<tr>
				<th>IP Address</th>
				<td
					>{#if $navigating}Loading...{:else}<code>{geo.ip}</code>{/if}</td
				>
			</tr>
			<tr>
				<th>Organization</th>
				<td
					>{#if $navigating}Loading...{:else}{geo.organization_name ||
							'Organization unknown'}{/if}</td
				>
			</tr>
			<tr>
				<th>Country</th>
				<td
					>{#if $navigating}Loading...{:else}{geo.country || 'Country unknown'}{/if}</td
				>
			</tr>
			<tr>
				<th>City</th>
				<td
					>{#if $navigating}Loading...{:else}{geo.city || 'No city found'}{/if}</td
				>
			</tr>
			<tr>
				<th>Region</th>
				<td
					>{#if $navigating}Loading...{:else}{geo.region || 'No region found'}{/if}</td
				>
			</tr>
			<tr>
				<th>PTR</th>
				<td>{#await ptr}Loading...{:then ptr}{ptr.ptr}{/await}</td>
			</tr>
			<tr>
				<th>Latitude</th>
				<td
					>{#if $navigating}Loading...{:else}{geo.latitude || 'Latitude unknown'}{/if}</td
				>
			</tr>
			<tr>
				<th>Longitude</th>
				<td
					>{#if $navigating}Loading...{:else}{geo.longitude || 'Longitude unknown'}{/if}</td
				>
			</tr>
			<tr>
				<th>ASN</th>
				<td
					>{#if $navigating}Loading...{:else if geo.asn}<a
							href="https://bgpview.io/asn/{geo.asn}"
							title="BGPView page for {geo.asn}"
							target="_blank"
							class="text-blue-500 underline decoration-dotted transition-all duration-100 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
							>{geo.asn}</a
						>{:else}No ASN found{/if}</td
				>
			</tr>
		</tbody>
	</table>
</div>

<style>
	th {
		@apply border-r border-gray-400 p-2 px-4 text-left;
	}
	td {
		@apply px-4 py-2;
	}
	tr {
		@apply whitespace-pre border-b border-gray-400;
	}
	tr:last-child {
		@apply border-b-0;
	}
	code {
		@apply text-red-500;
	}
</style>
