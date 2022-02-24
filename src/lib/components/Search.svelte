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
	<div class="my-4 text-center"><p>Enter an IP below to lookup its information</p></div>
	<form use:form autocomplete="off">
		<div class="flex w-full">
			<input
				type="text"
				name="ip_address"
				class="w-full rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
			/>
			<button
				type="submit"
				class="px-4 rounded-r-lg  text-gray-800 font-bold p-4 uppercase border-r border-t border-b"
				>Search</button
			>
		</div>
		<ValidationMessage for="ip_address" let:messages={message}>
			<div class="w-full text-center text-red-700">{message || ''}</div>
		</ValidationMessage>
	</form>
</div>
