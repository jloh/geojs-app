<script>
	export let geo;
	export let ptr;
</script>

<h1 class="text-bold my-6 text-center text-xl font-medium">
	Results for
	<span
		class="relative my-2 ml-1 inline-block before:absolute before:-inset-1 before:block before:-skew-y-1 before:bg-blue-400 md:my-0"
	>
		<span class="relative text-white">{geo.ip}</span>
	</span>
</h1>
<div class="overflow-auto rounded border border-gray-400 bg-white">
	<table class="w-full table-auto rounded text-lg">
		<tbody>
			<tr>
				<th>IP Address</th>
				<td><code>{geo.ip}</code></td>
			</tr>
			<tr>
				<th>Organization</th>
				<td>{geo.organization_name || 'Organization unknown'}</td>
			</tr>
			<tr>
				<th>Country</th>
				<td>{geo.country || 'Country unknown'}</td>
			</tr>
			<tr>
				<th>City</th>
				<td>{geo.city || 'No city found'}</td>
			</tr>
			<tr>
				<th>Region</th>
				<td>{geo.region || 'No region found'}</td>
			</tr>
			<tr>
				<th>PTR</th>
				<td>{#await ptr}Loading...{:then ptr}{ptr.ptr}{/await}</td>
			</tr>
			<tr>
				<th>Latitude</th>
				<td>{geo.latitude || 'Latitude unknown'}</td>
			</tr>
			<tr>
				<th>Longitude</th>
				<td>{geo.longitude || 'Longitude unknown'}</td>
			</tr>
			<tr>
				<th>ASN</th>
				<td
					>{#if geo.asn}<a
							href="https://www.peeringdb.com/search?q={geo.asn}"
							title="Peering DB search for {geo.asn}"
							target="_blank"
							class="text-blue-500 underline decoration-dotted transition-all duration-100 hover:text-blue-600"
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
