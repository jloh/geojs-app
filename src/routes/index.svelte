<script context="module">
	import { browser } from '$app/env';
	export async function load({ params, fetch, session, stuff }) {
		var url;
		if (!browser) {
			url = `https://get.geojs.io/v1/ip/geo/${session.userIP}.json`
		} else {
			url = 'https://get.geojs.io/v1/ip/geo.json'
		}
		const response = await fetch(url);

		return {
			status: response.status,
			props: {
				lookup: response.ok && (await response.json())
			}
		};
	}
</script>
<script>
	export let lookup;
</script>

<svelte:head>
	<title>GeoJS | IP address information</title>
</svelte:head>

<h1>IP info for {lookup.ip}</h1>
<div>
	<table>
		<tbody id="geo-table">
			<tr>
				<th>IP Address</th>
				<td><code id="geojs_ip" geo-id="geo">{lookup.ip}</code></td>
			</tr>
			<tr>
				<th>Organization</th>
				<td id="geojs_organization_name" geo-id="geo">{lookup.organization_name}</td>
			</tr>
			<tr>
				<th>Country</th>
				<td id="geojs_country" geo-id="geo">{lookup.country}</td>
			</tr>
			<tr>
				<th>City</th>
				<td id="geojs_city" geo-id="geo">{#if lookup.city}{lookup.city}{:else}No city found{/if}</td>
			</tr>
			<tr>
				<th>Region</th>
				<td id="geojs_region" geo-id="geo">{lookup.region}</td>
			</tr>
			<tr>
				<th>PTR</th>
				<td id="geojs_ptr" geo-id="geo"></td>
			</tr>
			<tr>
				<th>Latitude</th>
				<td id="geojs_latitude" geo-id="geo">{lookup.latitude}</td>
			</tr>
			<tr>
				<th>Longitude</th>
				<td id="geojs_longitude" geo-id="geo">{lookup.longitude}</td>
			</tr>
			<tr>
				<th>ASN</th>
				<td id="geojs_asn" geo-id="geo">{lookup.asn}</td>
			</tr>
		</tbody>
	</table>
</div>
