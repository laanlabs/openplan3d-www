<script>
	import '../app.css';
	import { trackOutbound } from '$lib/analytics';

	let { children } = $props();
	let mobileMenuOpen = $state(false);
</script>

<svelte:head>
	<meta name="description" content="OpenPlan3D — Free online 2D & 3D floor plan editor. Draw rooms, place furniture, visualize in 3D, and export to PNG, SVG, DXF, PDF." />
</svelte:head>

<!-- Nav -->
<nav class="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
	<div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
		<a href="/" class="text-white font-bold text-xl tracking-tight">
			<span class="text-blue-500">Open</span>Plan3D
		</a>

		<!-- Desktop nav -->
		<div class="hidden md:flex items-center gap-8">
			<a href="/features" class="text-slate-300 hover:text-white transition-colors text-sm">Features</a>
			<a href="/about" class="text-slate-300 hover:text-white transition-colors text-sm">About</a>
			<a
				href="https://3dsplatapp.com/"
				target="_blank"
				rel="noopener"
				onclick={() => trackOutbound('nav_3dsplatapp', 'https://3dsplatapp.com/')}
				class="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm border border-slate-700 hover:border-slate-500 px-3 py-1.5 rounded-lg"
			>
				<img src="/3dsplatapp-icon.png" alt="3D Splat App" class="w-5 h-5 rounded" />
				3D Splat App
			</a>
			<a
				href="https://app.openplan3d.com"
				class="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
			>
				Try Free
			</a>
		</div>

		<!-- Mobile hamburger -->
		<button class="md:hidden text-slate-300 hover:text-white" onclick={() => mobileMenuOpen = !mobileMenuOpen}>
			<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				{#if mobileMenuOpen}
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				{:else}
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				{/if}
			</svg>
		</button>
	</div>

	<!-- Mobile menu -->
	{#if mobileMenuOpen}
		<div class="md:hidden border-t border-slate-800 px-6 py-4 space-y-3">
			<a href="/features" class="block text-slate-300 hover:text-white text-sm" onclick={() => mobileMenuOpen = false}>Features</a>
			<a href="/about" class="block text-slate-300 hover:text-white text-sm" onclick={() => mobileMenuOpen = false}>About</a>
			<a
				href="https://3dsplatapp.com/"
				target="_blank"
				rel="noopener"
				onclick={() => { trackOutbound('nav_3dsplatapp', 'https://3dsplatapp.com/'); mobileMenuOpen = false; }}
				class="flex items-center gap-2 text-slate-300 hover:text-white text-sm"
			>
				<img src="/3dsplatapp-icon.png" alt="3D Splat App" class="w-5 h-5 rounded" />
				3D Splat App
			</a>
			<a
				href="https://app.openplan3d.com"
				class="block bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg text-center transition-colors"
			>
				Try Free
			</a>
		</div>
	{/if}
</nav>

<!-- Content -->
{@render children()}

<!-- Footer -->
<footer class="bg-slate-900 border-t border-slate-800 text-slate-400 text-sm">
	<div class="max-w-6xl mx-auto px-6 py-12">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div>
				<h3 class="text-white font-semibold mb-3"><span class="text-blue-500">Open</span>Plan3D</h3>
				<p class="text-slate-500 leading-relaxed">Free online floor plan editor with 2D drawing and 3D visualization. No signup required.</p>
			</div>
			<div>
				<h4 class="text-slate-300 font-medium mb-3">Product</h4>
				<ul class="space-y-2">
					<li><a href="https://app.openplan3d.com" class="hover:text-white transition-colors">Open Editor</a></li>
					<li><a href="/features" class="hover:text-white transition-colors">Features</a></li>
					<li><a href="/about" class="hover:text-white transition-colors">About</a></li>
				</ul>
			</div>
			<div>
				<h4 class="text-slate-300 font-medium mb-3">Open Source</h4>
				<ul class="space-y-2">
					<li><a href="https://github.com/theLodgeBots/open3dFloorplan" class="hover:text-white transition-colors">GitHub</a></li>
				</ul>
				<h4 class="text-slate-300 font-medium mb-3 mt-6">More Tools</h4>
				<ul class="space-y-2">
					<li>
						<a
							href="https://3dsplatapp.com/"
							target="_blank"
							rel="noopener"
							onclick={() => trackOutbound('footer_3dsplatapp', 'https://3dsplatapp.com/')}
							class="flex items-center gap-2 hover:text-white transition-colors"
						>
							<img src="/3dsplatapp-icon.png" alt="3D Splat App" class="w-5 h-5 rounded" />
							3D Splat App — Gaussian Splatting on Mac
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="border-t border-slate-800 mt-8 pt-8 text-slate-500 text-center">
			© {new Date().getFullYear()} theLodgeStudio. All rights reserved.
		</div>
	</div>
</footer>
