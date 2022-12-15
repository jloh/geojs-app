<script>
	import { dev } from '$app/environment';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status} Server error | GeoJS</title>
</svelte:head>

<div class="my-4 dark:text-gray-200">
	<pre class="overflow-scroll">{$page.status}
{$page.error.message}
			{$page.error.stack}
</pre>
</div>
