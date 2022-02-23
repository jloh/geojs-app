<script>
	import { createForm } from 'felte';
	import { reporter, ValidationMessage } from '@felte/reporter-svelte';
	import { goto } from '$app/navigation';
	import { validateIP } from '$lib/validIP.js';
	const { form, errors, touched } = createForm({
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

<form use:form autocomplete="off">
	<input type="text" name="ip_address" />
	<ValidationMessage for="ip_address" let:messages={message}>
		<span>{message || ''}</span>
	</ValidationMessage>
	<button type="submit">Search</button>
</form>
