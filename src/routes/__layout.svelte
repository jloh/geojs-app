<script>
	import "../app.css";
</script>

<nav class="" aria-label="main navigation">
	<div class="container">
		<div class="navbar-brand">
			<a class="navbar-item" href="/">
				<!-- <img alt="GeoJS" src="https://www.geojs.io/img/logo.png"> -->
			</a>
			<div class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="topmenu-nav">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
		<div class="navbar-menu" id="topmenu-nav">
			<div class="navbar-start">
				<a class="navbar-item" title="Home" href="/">Home</a>
				<a class="navbar-item" title="Docs" href="https://www.geojs.io/docs/">Docs</a>
				<a class="navbar-item" title="Blog" href="https://www.geojs.io/blog/">Blog</a>
				<a class="navbar-item" title="1.1.1.1" href="/s/1.1.1.1">1.1.1.1</a>
				<a class="navbar-item" title="1.1.1.1" href="/s/1.1.1.2">1.1.1.2</a>
			</div>
		</div>
	</div>
</nav>


<slot/>
