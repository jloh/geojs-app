<script>
	export let geo;
	export let ptr;
</script>

<div class="">
	<h1 class="text-center my-2 text-bold text-lg font-medium">Results for {geo.ip}</h1>
	<div class="overflow-auto">
		<table class="border rounded w-full table-auto">
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
								class="text-blue-500 hover:text-blue-600 transition-all duration-100">{geo.asn}</a
							>{:else}No ASN found{/if}</td
					>
				</tr>
			</tbody>
		</table>
	</div>
</div>

<style>
	th {
		@apply text-left pr-2 px-2 py-1 border-r border-b border-t;
	}
	td {
		@apply p-2 py-1 border-b;
	}
	tr {
		@apply whitespace-pre;
	}
</style>
