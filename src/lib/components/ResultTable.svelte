<script>
	/** @typedef {import('$lib/types.js').GeoJSData} GeoJSData */

	/** @type {{ipData: GeoJSData, ptr: string}} */
	let { ipData, ptr } = $props();
</script>

<div class="mx-auto max-w-4xl">
	<h2 class="mb-4 text-center text-xl font-semibold">
		Results for
		<span class="inline-block rounded bg-blue-500 px-3 py-1 text-white">
			{ipData.ip}
		</span>
	</h2>

	<div class="overflow-x-auto rounded-lg shadow-lg">
		<table class="w-full bg-white">
			<tbody class="divide-y divide-gray-200">
				<tr class="hover:bg-gray-50">
					<th class="bg-gray-100 px-6 py-4 text-left font-medium text-gray-900">IP Address</th>
					<td class="px-6 py-4 text-gray-700"><code class="font-mono">{ipData.ip}</code></td>
				</tr>
				<tr class="hover:bg-gray-50">
					<th class="bg-gray-100 px-6 py-4 text-left font-medium text-gray-900">Organization</th>
					<td class="px-6 py-4 text-gray-700">
						{ipData.organization_name || 'Unknown'}
					</td>
				</tr>
				<tr class="hover:bg-gray-50">
					<th class="bg-gray-100 px-6 py-4 text-left font-medium text-gray-900">Country</th>
					<td class="px-6 py-4 text-gray-700">
						{ipData.country || 'Unknown'}
						{#if ipData.country_code}
							<span class="ml-1 text-gray-500">({ipData.country_code})</span>
						{/if}
					</td>
				</tr>
				<tr class="hover:bg-gray-50">
					<th class="bg-gray-100 px-6 py-4 text-left font-medium text-gray-900">City</th>
					<td class="px-6 py-4 text-gray-700">{ipData.city || 'Unknown'}</td>
				</tr>
				<tr class="hover:bg-gray-50">
					<th class="bg-gray-100 px-6 py-4 text-left font-medium text-gray-900">Region</th>
					<td class="px-6 py-4 text-gray-700">{ipData.region || 'Unknown'}</td>
				</tr>
				<tr class="hover:bg-gray-50">
					<th class="bg-gray-100 px-6 py-4 text-left font-medium text-gray-900">PTR</th>
					<td class="px-6 py-4 text-gray-700">
						<code class="font-mono text-sm">{ptr || 'No PTR record'}</code>
					</td>
				</tr>
				<tr class="hover:bg-gray-50">
					<th class="bg-gray-100 px-6 py-4 text-left font-medium text-gray-900">Latitude</th>
					<td class="px-6 py-4 text-gray-700">
						{ipData.latitude !== 'nil' ? ipData.latitude : 'Unknown'}
					</td>
				</tr>
				<tr class="hover:bg-gray-50">
					<th class="bg-gray-100 px-6 py-4 text-left font-medium text-gray-900">Longitude</th>
					<td class="px-6 py-4 text-gray-700">
						{ipData.longitude !== 'nil' ? ipData.longitude : 'Unknown'}
					</td>
				</tr>
				<tr class="hover:bg-gray-50">
					<th class="bg-gray-100 px-6 py-4 text-left font-medium text-gray-900">ASN</th>
					<td class="px-6 py-4 text-gray-700">
						{#if ipData.asn}
							<a
								href="https://bgpview.io/asn/{ipData.asn}"
								rel="noopener noreferrer"
								class="text-blue-600 underline hover:text-blue-800"
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

	<div class="mt-8 text-center text-sm text-gray-600">
		<p>
			Powered by <a
				href="https://www.geojs.io/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-blue-600 hover:text-blue-800">GeoJS.io</a
			>
		</p>
	</div>
</div>
