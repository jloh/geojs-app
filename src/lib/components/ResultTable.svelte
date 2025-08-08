<script>
	import { navigating } from '$app/stores';

	/** @typedef {import('$lib/types.js').GeoJSData} GeoJSData */

	/** @type {{ipData: GeoJSData, ptr: string}} */
	let { ipData, ptr } = $props();
</script>

<div class="mx-auto max-w-4xl">
	<h2 class="mb-6 text-center text-xl font-semibold dark:text-gray-100">
		Results for
		<span
			class="inline-block rounded bg-blue-500 px-2 py-1 text-base break-all text-white shadow-md md:px-3 md:text-xl dark:bg-blue-600 dark:shadow-blue-600/30"
		>
			{$navigating ? '...' : ipData.ip}
		</span>
	</h2>

	<div
		class="overflow-x-auto rounded-lg border border-gray-300 shadow-sm dark:border-gray-600 dark:shadow-xl dark:shadow-black/30"
	>
		<table class="w-full bg-white dark:bg-gray-800">
			<tbody class="divide-y divide-gray-200 dark:divide-gray-700">
				<tr class="hover:bg-gray-50 dark:hover:bg-gray-700">
					<th
						class="bg-gray-100 px-6 py-4 text-left font-medium text-gray-900 dark:bg-gray-900 dark:text-gray-100"
						>IP Address</th
					>
					<td class="px-6 py-4 text-gray-700 dark:text-gray-300">
						{#if $navigating}
							<span class="animate-pulse text-gray-400 dark:text-gray-500">Loading...</span>
						{:else}
							<code class="font-mono text-red-500 dark:text-red-400">{ipData.ip}</code>
						{/if}
					</td>
				</tr>
				<tr class="hover:bg-gray-50 dark:hover:bg-gray-700">
					<th
						class="bg-gray-100 px-6 py-4 text-left font-medium text-gray-900 dark:bg-gray-900 dark:text-gray-100"
						>Organization</th
					>
					<td class="px-6 py-4 text-gray-700 dark:text-gray-300">
						{#if $navigating}
							<span class="animate-pulse text-gray-400 dark:text-gray-500">Loading...</span>
						{:else}
							{ipData.organization_name || 'Unknown'}
						{/if}
					</td>
				</tr>
				<tr class="hover:bg-gray-50 dark:hover:bg-gray-700">
					<th
						class="bg-gray-100 px-6 py-4 text-left font-medium text-gray-900 dark:bg-gray-900 dark:text-gray-100"
						>Country</th
					>
					<td class="px-6 py-4 text-gray-700 dark:text-gray-300">
						{#if $navigating}
							<span class="animate-pulse text-gray-400 dark:text-gray-500">Loading...</span>
						{:else}
							{ipData.country || 'Unknown'}
							{#if ipData.country_code}
								<span class="text-gray-500 dark:text-gray-400">({ipData.country_code})</span>
							{/if}
						{/if}
					</td>
				</tr>
				<tr class="hover:bg-gray-50 dark:hover:bg-gray-700">
					<th
						class="bg-gray-100 px-6 py-4 text-left font-medium text-gray-900 dark:bg-gray-900 dark:text-gray-100"
						>City</th
					>
					<td class="px-6 py-4 text-gray-700 dark:text-gray-300">
						{#if $navigating}
							<span class="animate-pulse text-gray-400 dark:text-gray-500">Loading...</span>
						{:else}
							{ipData.city || 'Unknown'}
						{/if}
					</td>
				</tr>
				<tr class="hover:bg-gray-50 dark:hover:bg-gray-700">
					<th
						class="bg-gray-100 px-6 py-4 text-left font-medium text-gray-900 dark:bg-gray-900 dark:text-gray-100"
						>Region</th
					>
					<td class="px-6 py-4 text-gray-700 dark:text-gray-300">
						{#if $navigating}
							<span class="animate-pulse text-gray-400 dark:text-gray-500">Loading...</span>
						{:else}
							{ipData.region || 'Unknown'}
						{/if}
					</td>
				</tr>
				<tr class="hover:bg-gray-50 dark:hover:bg-gray-700">
					<th
						class="bg-gray-100 px-6 py-4 text-left font-medium text-gray-900 dark:bg-gray-900 dark:text-gray-100"
						>PTR</th
					>
					<td class="px-6 py-4 text-gray-700 dark:text-gray-300">
						{#if $navigating}
							<span class="animate-pulse text-gray-400 dark:text-gray-500">Loading...</span>
						{:else}
							{ptr || 'No PTR record'}
						{/if}
					</td>
				</tr>
				<tr class="hover:bg-gray-50 dark:hover:bg-gray-700">
					<th
						class="bg-gray-100 px-6 py-4 text-left font-medium text-gray-900 dark:bg-gray-900 dark:text-gray-100"
						>Latitude</th
					>
					<td class="px-6 py-4 text-gray-700 dark:text-gray-300">
						{#if $navigating}
							<span class="animate-pulse text-gray-400 dark:text-gray-500">Loading...</span>
						{:else}
							{ipData.latitude !== 'nil' ? ipData.latitude : 'Unknown'}
						{/if}
					</td>
				</tr>
				<tr class="hover:bg-gray-50 dark:hover:bg-gray-700">
					<th
						class="bg-gray-100 px-6 py-4 text-left font-medium text-gray-900 dark:bg-gray-900 dark:text-gray-100"
						>Longitude</th
					>
					<td class="px-6 py-4 text-gray-700 dark:text-gray-300">
						{#if $navigating}
							<span class="animate-pulse text-gray-400 dark:text-gray-500">Loading...</span>
						{:else}
							{ipData.longitude !== 'nil' ? ipData.longitude : 'Unknown'}
						{/if}
					</td>
				</tr>
				<tr class="hover:bg-gray-50 dark:hover:bg-gray-700">
					<th
						class="bg-gray-100 px-6 py-4 text-left font-medium text-gray-900 dark:bg-gray-900 dark:text-gray-100"
						>ASN</th
					>
					<td class="px-6 py-4 text-gray-700 dark:text-gray-300">
						{#if $navigating}
							<span class="animate-pulse text-gray-400 dark:text-gray-500">Loading...</span>
						{:else if ipData.asn}
							<a
								href="https://bgpview.io/asn/{ipData.asn}"
								target="_blank"
								rel="noopener noreferrer"
								class="text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
							>
								AS{ipData.asn}
							</a>
						{:else}
							Unknown
						{/if}
					</td>
				</tr>
			</tbody>
		</table>
	</div>

	<div class="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
		<p>
			Powered by <a
				href="https://www.geojs.io/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
				>GeoJS.io</a
			><span class="px-1">&#x2022;</span>
			<span>REST/JSON/JSONP IP Interface for Geo Lookups</span>
		</p>
	</div>
</div>

<style>
	@reference "tailwindcss";
	th {
		@apply border-r border-gray-200 p-2 px-4 text-left dark:border-gray-700;
	}
	td {
		@apply px-4 py-2;
	}
	tr {
		@apply border-b border-gray-200 whitespace-pre dark:border-gray-700;
	}
	tr:last-child {
		@apply border-b-0;
	}
	code {
		@apply text-red-500 dark:text-red-400;
	}
</style>
