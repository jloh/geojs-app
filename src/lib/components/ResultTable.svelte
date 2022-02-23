<script>
	export let geo;
	export let ptr;
</script>

<table>
	<tbody>
		<tr>
			<th>IP Address</th>
			<td><code>{geo.ip}</code></td>
		</tr>
		<tr>
			<th>Organization</th>
			<td>{geo.organization_name}</td>
		</tr>
		<tr>
			<th>Country</th>
			<td>{geo.country}</td>
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
			<td>{geo.latitude}</td>
		</tr>
		<tr>
			<th>Longitude</th>
			<td>{geo.longitude}</td>
		</tr>
		<tr>
			<th>ASN</th>
			<td>{geo.asn}</td>
		</tr>
	</tbody>
</table>
