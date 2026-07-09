<svelte:head>
	<title>OpenPlan3D: Free Open Source Floor Plan Editor | 2D & 3D Home Design</title>
	<meta name="description" content="Create professional 2D floor plans and 3D home designs for free. Open source floor plan editor with Apple RoomPlan LiDAR import, 140+ furniture models, and export to PNG, SVG, DXF, PDF." />
	<meta property="og:title" content="OpenPlan3D: Free Open Source Floor Plan Editor | 2D & 3D Home Design" />
	<meta property="og:description" content="Create professional 2D floor plans and 3D home designs for free. Open source floor plan editor with Apple RoomPlan LiDAR import, 140+ furniture models, and export to PNG, SVG, DXF, PDF." />
	<meta property="og:url" content="https://www.openplan3d.com/" />
	<meta name="twitter:title" content="OpenPlan3D: Free Open Source Floor Plan Editor | 2D & 3D Home Design" />
	<meta name="twitter:description" content="Create professional 2D floor plans and 3D home designs for free. Open source floor plan editor with Apple RoomPlan LiDAR import, 140+ furniture models, and export to PNG, SVG, DXF, PDF." />
	<link rel="canonical" href="https://www.openplan3d.com/" />
</svelte:head>

<!-- Hero -->
<section class="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
	<div class="max-w-6xl mx-auto px-6 py-24 md:py-32 text-center">
		<div class="inline-block bg-green-500/10 text-green-400 text-xs font-medium px-3 py-1 rounded-full mb-6 border border-green-500/20">
			100% Free &amp; Open Source — No Paywalls, No Signup
		</div>
		<h1 class="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
			Design Your Dream<br />Space in <span class="text-blue-500">3D</span>
		</h1>
		<p class="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
			Draw floor plans in 2D, visualize in 3D, and furnish with 140+ models.
			Import Apple RoomPlan LiDAR scans or GLB/glTF 3D meshes.
			Export to PNG, SVG, DXF, PDF, and more. <strong class="text-slate-300">Completely free, forever.</strong>
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a
				href="https://app.openplan3d.com"
				class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-lg text-lg transition-colors shadow-lg shadow-blue-500/25"
			>
				Try Free Editor →
			</a>
			<a
				href="https://github.com/theLodgeBots/open3dFloorplan"
				class="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-medium px-8 py-3.5 rounded-lg text-lg transition-colors"
			>
				⭐ View on GitHub
			</a>
		</div>
	</div>
</section>

<!-- Screenshots -->
<section class="bg-slate-800 py-16">
	<div class="max-w-6xl mx-auto px-6">
		<h2 class="text-2xl md:text-3xl font-bold text-white text-center mb-12">See it in action</h2>
		<div class="grid md:grid-cols-2 gap-8">
			<div class="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden shadow-2xl">
				<div class="flex items-center gap-2 px-4 py-3 border-b border-slate-700">
					<div class="w-3 h-3 rounded-full bg-red-500/80"></div>
					<div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
					<div class="w-3 h-3 rounded-full bg-green-500/80"></div>
					<span class="text-slate-500 text-xs ml-2">2D Floor Plan</span>
				</div>
				<img src="/screenshots/2d-floorplan.png" alt="OpenPlan3D 2D floor plan view showing room layout with furniture placement and imperial dimensions" class="w-full" />
			</div>
			<div class="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden shadow-2xl">
				<div class="flex items-center gap-2 px-4 py-3 border-b border-slate-700">
					<div class="w-3 h-3 rounded-full bg-red-500/80"></div>
					<div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
					<div class="w-3 h-3 rounded-full bg-green-500/80"></div>
					<span class="text-slate-500 text-xs ml-2">3D View</span>
				</div>
				<img src="/screenshots/3d-view.png" alt="OpenPlan3D 3D rendered view of a furnished floor plan with realistic textures and lighting" class="w-full" />
			</div>
		</div>
	</div>
</section>

<!-- Why Free -->
<section class="bg-slate-900 py-16">
	<div class="max-w-4xl mx-auto px-6">
		<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
			<div class="p-6 rounded-xl bg-slate-800 border border-slate-700">
				<div class="text-3xl mb-3">💸</div>
				<h3 class="text-white font-semibold mb-1">100% Free</h3>
				<p class="text-slate-400 text-sm">No premium tier. No paywalls. No hidden costs. Free forever.</p>
			</div>
			<div class="p-6 rounded-xl bg-slate-800 border border-slate-700">
				<div class="text-3xl mb-3">🔓</div>
				<h3 class="text-white font-semibold mb-1">Open Source</h3>
				<p class="text-slate-400 text-sm">Fully open source on <a href="https://github.com/theLodgeBots/open3dFloorplan" class="text-blue-400 hover:text-blue-300">GitHub</a>. Inspect, modify, contribute.</p>
			</div>
			<div class="p-6 rounded-xl bg-slate-800 border border-slate-700">
				<div class="text-3xl mb-3">📱</div>
				<h3 class="text-white font-semibold mb-1">RoomPlan Import</h3>
				<p class="text-slate-400 text-sm">Scan rooms with iPhone/iPad LiDAR. Import directly into the editor.</p>
			</div>
			<div class="p-6 rounded-xl bg-slate-800 border border-slate-700">
				<div class="text-3xl mb-3">🧊</div>
				<h3 class="text-white font-semibold mb-1">3D Mesh Import</h3>
				<p class="text-slate-400 text-sm">Import GLB/glTF 3D models. Bring your own furniture and objects.</p>
			</div>
		</div>
	</div>
</section>

<!-- Cross-promo: 3D Splat App -->
<section class="bg-slate-800 border-y border-slate-700 py-16">
	<div class="max-w-4xl mx-auto px-6">
		<div class="flex flex-col sm:flex-row items-center gap-8 bg-slate-900 rounded-2xl border border-slate-700 p-8 md:p-10 shadow-2xl">
			<img
				src="/3dsplatapp-icon.png"
				alt="3D Splat App icon"
				class="w-24 h-24 md:w-28 md:h-28 rounded-2xl shadow-lg shrink-0"
			/>
			<div class="text-center sm:text-left">
				<div class="inline-block bg-purple-500/10 text-purple-300 text-xs font-medium px-3 py-1 rounded-full mb-3 border border-purple-500/20">
					From the makers of OpenPlan3D
				</div>
				<h2 class="text-2xl md:text-3xl font-bold text-white mb-2">3D Splat App</h2>
				<p class="text-slate-400 leading-relaxed mb-4">
					Turn photos and videos into photorealistic 3D scenes with Gaussian Splatting — right on your Mac.
					Capture a real room in minutes and explore it in stunning, true-to-life 3D.
				</p>
				<p class="text-slate-300 font-medium mb-3">Why floor-plan designers love it:</p>
				<ul class="text-slate-400 text-sm leading-relaxed space-y-2 mb-6 text-left">
					<li class="flex gap-2">
						<span class="text-purple-400 shrink-0">•</span>
						<span><span class="text-slate-300 font-medium">Capture the real space first.</span> Scan an existing room to a lifelike 3D model, then design its floor plan in OpenPlan3D with the real dimensions and details in front of you.</span>
					</li>
					<li class="flex gap-2">
						<span class="text-purple-400 shrink-0">•</span>
						<span><span class="text-slate-300 font-medium">Show clients the "before."</span> Photorealistic splats communicate a space far better than photos — perfect for remodels, staging, and design proposals.</span>
					</li>
					<li class="flex gap-2">
						<span class="text-purple-400 shrink-0">•</span>
						<span><span class="text-slate-300 font-medium">No LiDAR required.</span> Just a few photos or a short video from any camera — the app reconstructs the full 3D scene on your Mac.</span>
					</li>
				</ul>
				<a
					href="https://3dsplatapp.com/"
					target="_blank"
					rel="noopener"
					onclick={() => trackOutbound('home_section_3dsplatapp', 'https://3dsplatapp.com/')}
					class="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-lg shadow-purple-500/25"
				>
					Explore 3D Splat App →
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Features Grid -->
<section class="bg-white py-20">
	<div class="max-w-6xl mx-auto px-6">
		<header class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything you need to plan your space</h2>
			<p class="text-slate-500 text-lg max-w-2xl mx-auto">Professional-grade tools, completely free and open source. From quick sketches to detailed floor plans.</p>
		</header>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each features as feature}
				<article class="group p-6 rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all">
					<div class="text-3xl mb-4">{feature.icon}</div>
					<h3 class="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
					<p class="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="bg-slate-50 py-20">
	<div class="max-w-3xl mx-auto px-6 text-center">
		<h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Ready to design your space?</h2>
		<p class="text-slate-500 text-lg mb-8">Start creating beautiful floor plans in minutes. Free, open source, no signup needed.</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a
				href="https://app.openplan3d.com"
				class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-lg text-lg transition-colors shadow-lg shadow-blue-500/25"
			>
				Launch Editor →
			</a>
			<a
				href="https://github.com/theLodgeBots/open3dFloorplan"
				class="inline-block border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 font-medium px-8 py-3.5 rounded-lg text-lg transition-colors"
			>
				GitHub Repository →
			</a>
		</div>
	</div>
</section>

<script>
	import { trackOutbound } from '$lib/analytics';

	const features = [
		{ icon: '✏️', title: '2D Floor Plan Drawing', desc: 'Draw walls, rooms, doors, and windows with precise measurements. Snap-to-grid and orthogonal drawing modes.' },
		{ icon: '🧊', title: '3D Visualization', desc: 'Instantly switch to a 3D view of your floor plan. Walk through your design with orbit controls.' },
		{ icon: '🪑', title: '140+ Furniture Models', desc: 'Browse and place furniture from a curated library. Resize, rotate, and position items precisely.' },
		{ icon: '📱', title: 'Apple RoomPlan Import', desc: 'Scan rooms with iPhone or iPad LiDAR and import directly. Turn your real room into an editable floor plan.' },
		{ icon: '🧊', title: 'GLB/glTF 3D Mesh Import', desc: 'Import your own 3D models in GLB or glTF format. Add custom furniture, fixtures, and objects.' },
		{ icon: '📐', title: 'Imperial & Metric Units', desc: 'Work in feet/inches or meters/centimeters. Switch anytime — measurements update automatically.' },
		{ icon: '📤', title: 'Export Anywhere', desc: 'Export to PNG, SVG, DXF, PDF, or JSON. Share your plans or continue editing in CAD software.' },
		{ icon: '🔓', title: 'Free & Open Source', desc: 'No premium tier, no paywalls, no signup. View the source code on GitHub and contribute.' },
	];
</script>
