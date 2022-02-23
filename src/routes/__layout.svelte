<script>
	import '../app.css';
</script>

<div class="border-b-2 mb-6">
	<nav id="header" class="mx-4 mt-2">
		<div class="flex flex-wrap mx-auto mb-2">
			<div
				class="flex flex-1 md:w-auto sm:text-left mt-2 items-baseline sm:items-center justify-center"
			>
				<a class="text-2xl" title="Home" href="/">GeoJS</a>
				<a class="text-lg ml-2" title="Home" href="/">App</a>
				<a class="text-lg ml-2" title="GeoJS documentation" href="https://geojs.io/docs/">Docs</a>
				<a class="text-lg ml-2" title="GeoJS demo page" href="https://geojs.io/#demo">Demo</a>
				<a class="text-lg ml-2" title="Home" href="https://jloh.co/tag/geojs/">Blog</a>
			</div>
			<div
				class="flex-grow lg:flex lg:w-auto mt-2 justify-center sm:justify-end items-center"
				id="nav-content"
			>
				<div class="flex justify-center sm:justify-end flex-1 text-md">
					<span>REST/JSON/JSONP IP Interface for Geo Lookups</span>
				</div>
			</div>
		</div>
	</nav>
</div>

<div class="">
	<slot />
</div>

<footer>Here is some footer</footer>
