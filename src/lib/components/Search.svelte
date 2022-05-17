<script>
	import { createForm } from 'felte';
	import { reporter, ValidationMessage } from '@felte/reporter-svelte';
	import { goto } from '$app/navigation';
	import { validateIP } from '$lib/validIP.js';
	const { form } = createForm({
		extend: reporter,
		validate: (values) => {
			const errors = {};
			if (!validateIP(values.ip_address)) {
				errors.ip_address = 'Must be a valid IP';
			}
			return errors;
		},
		onSubmit: (values) => {
			goto(`/s/${values.ip_address}`);
		}
	});
</script>

<div class="my-2">
	<div class="my-4 text-center text-2xl">
		<p>Enter an IP address below to lookup its information</p>
	</div>
	<form use:form autocomplete="off">
		<div class="flex w-full">
			<input
				type="text"
				name="ip_address"
				placeholder="1.1.1.1"
				class="mr-0 w-full rounded-l-lg border-t border-b border-l border-gray-200 bg-white p-4 text-gray-800 invalid:border-pink-500 invalid:invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
			/>
			<button
				type="submit"
				class="rounded-r-lg border-r border-t border-b bg-blue-400 p-4 px-4 font-bold uppercase text-white transition-all hover:bg-blue-500"
				>Search</button
			>
		</div>
		<ValidationMessage for="ip_address" let:messages={message}>
			<div class="w-full text-center text-red-700">{message || ''}</div>
		</ValidationMessage>
	</form>
</div>
