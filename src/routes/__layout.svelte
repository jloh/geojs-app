<script>
	import '../app.css';
</script>

<div class="mb-6 border-b-2 bg-white">
	<nav id="header" class="mx-auto max-w-6xl py-2 px-4">
		<div class="mx-auto mb-2 flex flex-wrap">
			<div
				class="mt-2 flex flex-1 items-baseline justify-center sm:items-center sm:justify-start sm:text-left md:w-auto"
			>
				<a class="text-2xl" title="Home" href="/">GeoJS</a>
				<a class="ml-2 text-lg" title="Home" href="/">App</a>
				<a class="ml-2 text-lg" title="GeoJS documentation" href="https://geojs.io/docs/">Docs</a>
				<a class="ml-2 text-lg" title="GeoJS demo page" href="https://geojs.io/#demo">Demo</a>
				<a class="ml-2 text-lg" title="Home" href="https://jloh.co/tag/geojs/">Blog</a>
			</div>
			<div
				class="mt-2 flex-grow items-center justify-center sm:justify-end lg:flex lg:w-auto"
				id="nav-content"
			>
				<div class="text-md flex flex-1 justify-center sm:justify-end">
					<span>REST/JSON/JSONP IP Interface for Geo Lookups</span>
				</div>
			</div>
		</div>
	</nav>
</div>

<div class="mx-auto max-w-3xl px-2">
	<slot />
</div>
