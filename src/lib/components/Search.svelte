<script>
	import { goto } from '$app/navigation';
	import { navigating } from '$app/stores';
	import { validateIP } from '$lib/validIP.js';

	let ipAddress = '';
	let error = '';
	let touched = false;

	function handleBlur() {
		touched = true;
		validateInput();
	}

	function validateInput() {
		if (!touched) return;

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
		touched = true;

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
		<div class="flex rounded-lg {error ? 'ring-2 ring-red-500' : ''}">
			<input
				type="text"
				name="ip"
				bind:value={ipAddress}
				on:blur={handleBlur}
				placeholder="Enter IP address (e.g., 1.1.1.1)"
				class="flex-1 rounded-l-lg border border-r-0 {error
					? 'border-red-500'
					: 'border-gray-300'} px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none disabled:bg-gray-100 disabled:text-gray-500"
				autocomplete="off"
				aria-label="IP address to lookup"
				aria-invalid={error ? 'true' : 'false'}
				aria-describedby={error ? 'ip-error' : undefined}
				disabled={!!$navigating}
			/>
			<button
				type="submit"
				class="rounded-r-lg bg-blue-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-blue-300"
				disabled={!!$navigating}
			>
				{!!$navigating ? 'Searching...' : 'Search'}
			</button>
		</div>
		{#if error}
			<div class="mt-3 flex items-center space-x-2 rounded-md border border-red-200 bg-red-50 p-3">
				<svg class="h-5 w-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<p id="ip-error" class="text-sm font-medium text-red-800">{error}</p>
			</div>
		{/if}
	</form>
</div>
