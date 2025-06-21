<script>
	import { goto } from '$app/navigation';
	import { validateIP } from '$lib/validIP.js';

	let ipAddress = '';
	let error = '';
	let isValidating = false;

	function validateInput() {
		if (ipAddress.trim() === '') {
			error = '';
			return;
		}

		if (!validateIP(ipAddress)) {
			error = 'Please enter a valid IP address';
		} else {
			error = '';
		}
	}

	/**
	 * @param {Event} event
	 */
	function handleSubmit(event) {
		// If JavaScript is enabled, prevent default and use goto
		if (ipAddress.trim() === '') {
			event.preventDefault();
			error = 'Please enter an IP address';
			return;
		}

		if (!validateIP(ipAddress)) {
			event.preventDefault();
			error = 'Please enter a valid IP address';
			return;
		}

		// If we're here and JS is enabled, use client-side navigation
		event.preventDefault();
		goto(`/s/${ipAddress}`);
	}
</script>

<div class="mb-8">
	<div class="mb-4 text-center">
		<h2 class="text-2xl font-semibold text-gray-800">IP Address Lookup</h2>
		<p class="mt-2 text-gray-600">Enter an IP address to lookup its information</p>
	</div>

	<form on:submit={handleSubmit} method="GET" action="/s" class="mx-auto max-w-2xl">
		<div class="flex">
			<input
				type="text"
				name="ip"
				bind:value={ipAddress}
				on:input={validateInput}
				placeholder="Enter IP address (e.g., 1.1.1.1)"
				class="flex-1 rounded-l-lg border border-r-0 border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
				autocomplete="off"
				aria-label="IP address to lookup"
				aria-invalid={error ? 'true' : 'false'}
				aria-describedby={error ? 'ip-error' : undefined}
			/>
			<button
				type="submit"
				class="rounded-r-lg bg-blue-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
			>
				Search
			</button>
		</div>
		{#if error}
			<p id="ip-error" class="mt-2 text-sm text-red-600">{error}</p>
		{/if}
	</form>
</div>
