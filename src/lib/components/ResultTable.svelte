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
				{#if $navigating}
					<td class="animate-pulse">Loading...</td>
				{:else}
					<td><code>{geo.ip}</code></td>
				{/if}
			</tr>
			<tr>
				<th>Organization</th>
				{#if $navigating}
					<td class="animate-pulse">Loading...</td>
				{:else if geo.organization_name === 'Unknown'}
					<td>Organization unknown</td>
				{:else}
					<td>{geo.organization_name || 'Organization unknown'}</td>
				{/if}
			</tr>
			<tr>
				<th>Country</th>
				{#if $navigating}
					<td class="animate-pulse">Loading...</td>
				{:else}
					<td>{geo.country || 'Country unknown'}</td>
				{/if}
			</tr>
			<tr>
				<th>City</th>
				{#if $navigating}
					<td class="animate-pulse">Loading...</td>
				{:else}
					<td>{geo.city || 'City unknown'}</td>
				{/if}
			</tr>
			<tr>
				<th>Region</th>
				{#if $navigating}
					<td class="animate-pulse">Loading...</td>
				{:else}
					<td>{geo.region || 'Region unknown'}</td>
				{/if}
			</tr>
			<tr>
				<th>PTR</th>
				{#if $navigating}
					<td class="animate-pulse">Loading...</td>
				{:else}
					{#await ptr}
						<td class="animate-pulse">Loading...</td>
					{:then ptr}
						<td>{ptr.ptr}</td>
					{:catch error}
						<td>Failed getting PTR</td>
					{/await}
				{/if}
			</tr>
			<tr>
				<th>Latitude</th>
				{#if $navigating}
					<td class="animate-pulse">Loading...</td>
				{:else if geo.latitude === 'nil'}
					<td>Latitude unknown</td>
				{:else}
					<td>{geo.latitude || 'Latitude unknown'}</td>
				{/if}
			</tr>
			<tr>
				<th>Longitude</th>
				{#if $navigating}
					<td class="animate-pulse">Loading...</td>
				{:else if geo.longitude === 'nil'}
					<td>Longitude unknown</td>
				{:else}
					<td>{geo.longitude || 'Longitude unknown'}</td>
				{/if}
			</tr>
			<tr>
				<th>ASN</th>
				{#if $navigating}
					<td class="animate-pulse">Loading...</td>
				{:else if geo.asn}
					<td
						><a
							href="https://bgpview.io/asn/{geo.asn}"
							title="BGPView page for {geo.asn}"
							target="_blank"
							rel="noreferrer"
							class="text-blue-500 underline decoration-dotted transition-all duration-100 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
							>{geo.asn}</a
						></td
					>
				{:else}
					<td>No ASN found</td>
				{/if}
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
