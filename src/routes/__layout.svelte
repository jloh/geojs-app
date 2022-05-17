<script>
	import '../app.css';
</script>

<div class="mb-6 border-b-2 bg-white">
	<nav id="header" class="mx-auto max-w-6xl py-2 px-4">
		<div class="mx-auto mb-2 flex flex-wrap">
			<div
				class="mt-2 flex flex-1 items-baseline justify-center sm:justify-start sm:text-left md:w-auto"
			>
				<a title="Home" href="/"
					><img class="-mb-1 max-h-8" alt="GeoJS" src="https://www.geojs.io/img/logo.png" /></a
				>
				<a
					class="ml-3 text-lg text-gray-800 transition-all hover:text-blue-500"
					title="GeoJS documentation"
					href="https://geojs.io/docs/">Docs</a
				>
				<a
					class="ml-3 text-lg text-gray-800 transition-all hover:text-blue-500"
					title="Home"
					href="https://jloh.co/tag/geojs/">Blog</a
				>
			</div>
			<div
				class="mt-2 flex-grow items-center justify-center sm:justify-end lg:flex lg:w-auto"
				id="nav-content"
			>
				<div
					class="text-md my-2 flex flex-1 items-baseline justify-center text-gray-800 sm:justify-end md:mb-0"
				>
					<span>REST/JSON/JSONP IP Interface for Geo Lookups</span>
				</div>
			</div>
		</div>
	</nav>
</div>

<div class="mx-auto mb-12 max-w-3xl px-2">
	<slot />
</div>
