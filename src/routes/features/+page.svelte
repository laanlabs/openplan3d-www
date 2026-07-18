<svelte:head>
	<title>Features | Free 2D/3D Floor Plan Software - OpenPlan3D</title>
	<meta name="description" content="Explore OpenPlan3D features: draw walls, place doors & windows, furnish rooms with 140+ 3D models, import Apple RoomPlan scans, switch between 2D & 3D views, export to multiple formats. 100% free." />
	<meta property="og:title" content="Features | Free 2D/3D Floor Plan Software - OpenPlan3D" />
	<meta property="og:description" content="Explore OpenPlan3D features: draw walls, place doors & windows, furnish rooms with 140+ 3D models, import Apple RoomPlan scans, switch between 2D & 3D views, export to multiple formats. 100% free." />
	<meta property="og:url" content="https://openplan3d.com/features" />
	<meta property="og:image" content="https://openplan3d.com/screenshots/2d-floorplan.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Features | Free 2D/3D Floor Plan Software - OpenPlan3D" />
	<meta name="twitter:description" content="Explore OpenPlan3D features: draw walls, place doors & windows, furnish rooms with 140+ 3D models, import Apple RoomPlan scans, switch between 2D & 3D views, export to multiple formats. 100% free." />
	<meta name="twitter:image" content="https://openplan3d.com/screenshots/2d-floorplan.png" />
	<link rel="canonical" href="https://openplan3d.com/features" />
</svelte:head>

<section class="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20">
	<div class="max-w-4xl mx-auto px-6 text-center">
		<div class="inline-block bg-green-500/10 text-green-400 text-xs font-medium px-3 py-1 rounded-full mb-6 border border-green-500/20">
			100% Free — No Premium Tier, No Paywalls
		</div>
		<h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-6">Powerful features,<br /><span class="text-blue-500">zero cost</span></h1>
		<p class="text-slate-400 text-lg max-w-2xl mx-auto">Everything you need to design, visualize, and share professional floor plans — all in your browser, completely free and <a href="https://github.com/theLodgeBots/open3dFloorplan" class="text-blue-400 hover:text-blue-300 underline">open source</a>.</p>
	</div>
</section>

<!-- Screenshots -->
<section class="bg-slate-800 py-16">
	<div class="max-w-6xl mx-auto px-6">
		<div class="grid md:grid-cols-2 gap-8">
			<figure class="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden shadow-2xl">
				<img src="/screenshots/2d-floorplan.png" alt="OpenPlan3D 2D floor plan editor showing a detailed room layout with walls, doors, windows, furniture, and imperial dimension labels" class="w-full" />
				<figcaption class="text-slate-400 text-sm text-center py-3">2D floor plan with furniture and dimensions</figcaption>
			</figure>
			<figure class="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden shadow-2xl">
				<img src="/screenshots/3d-view.png" alt="OpenPlan3D 3D visualization showing the same floor plan rendered with realistic textures, furniture, and lighting" class="w-full" />
				<figcaption class="text-slate-400 text-sm text-center py-3">3D rendered view with textures and furniture</figcaption>
			</figure>
		</div>
	</div>
</section>

<section class="bg-white py-20">
	<div class="max-w-4xl mx-auto px-6 space-y-20">
		{#each featureGroups as group, i}
			<article class="grid md:grid-cols-2 gap-12 items-start">
				<div class={i % 2 === 1 ? 'md:order-2' : ''}>
					<div class="text-4xl mb-4">{group.icon}</div>
					<h2 class="text-2xl font-bold text-slate-900 mb-3">{group.title}</h2>
					<p class="text-slate-500 leading-relaxed mb-4">{group.desc}</p>
					<ul class="space-y-2">
						{#each group.bullets as bullet}
							<li class="flex items-start gap-2 text-sm text-slate-600">
								<span class="text-blue-500 mt-0.5">✓</span>
								<span>{bullet}</span>
							</li>
						{/each}
					</ul>
				</div>
				<div class={`bg-slate-50 rounded-xl border border-slate-200 overflow-hidden ${i % 2 === 1 ? 'md:order-1' : ''}`}>
					{#if group.screenshot}
						<img src={group.screenshot} alt={group.screenshotAlt} class="w-full" />
					{:else}
						<div class="aspect-[4/3] flex items-center justify-center">
							<span class="text-6xl">{group.icon}</span>
						</div>
					{/if}
				</div>
			</article>
		{/each}
	</div>
</section>

<!-- CTA -->
<section class="bg-slate-50 py-20">
	<div class="max-w-3xl mx-auto px-6 text-center">
		<h2 class="text-3xl font-bold text-slate-900 mb-4">See it in action</h2>
		<p class="text-slate-500 text-lg mb-8">Try every feature for free — no account required. It's open source.</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a
				href="https://app.openplan3d.com"
				class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-lg text-lg transition-colors shadow-lg shadow-blue-500/25"
			>
				Open Free Editor →
			</a>
			<a
				href="https://github.com/theLodgeBots/open3dFloorplan"
				class="inline-block border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 font-medium px-8 py-3.5 rounded-lg text-lg transition-colors"
			>
				View Source on GitHub →
			</a>
		</div>
	</div>
</section>

<script>
	const featureGroups = [
		{
			icon: '✏️',
			title: '2D Floor Plan Drawing',
			desc: 'Draw precise floor plans with an intuitive click-and-drag interface. Create complex multi-room layouts in minutes.',
			screenshot: '/screenshots/2d-floorplan.png',
			screenshotAlt: '2D floor plan drawing interface with walls, rooms, doors, windows, and dimension labels in imperial units',
			bullets: [
				'Click to place walls with automatic corner snapping',
				'Add doors and windows with configurable sizes',
				'Orthogonal and freeform drawing modes',
				'Undo/redo with full history',
				'Snap-to-grid for pixel-perfect layouts',
			]
		},
		{
			icon: '🧊',
			title: '3D Visualization',
			desc: 'See your floor plan come to life in a real-time 3D view. Navigate your design with intuitive orbit controls.',
			screenshot: '/screenshots/3d-view.png',
			screenshotAlt: '3D rendered visualization of a floor plan with furniture, textures, and realistic lighting',
			bullets: [
				'Instant 2D to 3D conversion',
				'Orbit, pan, and zoom camera controls',
				'Real photo-realistic wall and floor textures',
				'Dynamic lighting and shadows',
				'Toggle between 2D and 3D with one click',
			]
		},
		{
			icon: '🪑',
			title: '140+ Furniture Models',
			desc: 'Furnish your space with a growing library of 3D furniture models organized by room type.',
			bullets: [
				'Living room, bedroom, kitchen, bathroom, office furniture',
				'Drag and drop placement',
				'Resize and rotate freely',
				'Accurate real-world dimensions',
				'Models render in both 2D and 3D views',
			]
		},
		{
			icon: '📱',
			title: 'Apple RoomPlan & LiDAR Import',
			desc: 'Scan your real room with Apple RoomPlan on iPhone or iPad and import the result directly into the editor. Use your device\'s LiDAR sensor for precise room capture.',
			bullets: [
				'Import RoomPlan JSON files directly',
				'Automatic wall, door, and window detection',
				'Edit scanned rooms like any other plan',
				'LiDAR-powered precision from your iPhone or iPad',
				'No manual measuring needed',
			]
		},
		{
			icon: '🧊',
			title: 'GLB/glTF 3D Mesh Import',
			desc: 'Import your own 3D models in GLB or glTF format. Add custom furniture, architectural elements, or any 3D object to your plans.',
			bullets: [
				'Standard GLB and glTF format support',
				'Import custom furniture and fixtures',
				'Place, rotate, and scale imported models',
				'Models appear in both 2D and 3D views',
			]
		},
		{
			icon: '📐',
			title: 'Imperial & Metric Units',
			desc: 'Work in the measurement system you prefer. All dimensions update in real-time when switching.',
			bullets: [
				'Feet/inches and meters/centimeters',
				'Live dimension labels on walls',
				'Switch units at any time',
				'Consistent precision across formats',
			]
		},
		{
			icon: '📤',
			title: 'Multi-Format Export',
			desc: 'Export your plans in the format you need — for printing, sharing, or further editing in CAD tools.',
			bullets: [
				'PNG — high-resolution raster images',
				'SVG — scalable vector graphics',
				'DXF — AutoCAD-compatible format',
				'PDF — print-ready documents',
				'JSON — full plan data for backup or sharing',
			]
		},
		{
			icon: '🏢',
			title: 'Multi-Floor Support',
			desc: 'Design multi-story buildings with independent floor plans that share a common footprint.',
			bullets: [
				'Add and manage multiple floors',
				'Copy floor layouts between levels',
				'Switch floors instantly',
			]
		},
		{
			icon: '🎨',
			title: 'Real Photo Textures',
			desc: 'Apply realistic materials to walls, floors, and surfaces. Choose from wood, tile, carpet, concrete, and more.',
			bullets: [
				'Curated texture library',
				'Apply per-room or per-surface',
				'Realistic rendering in 3D view',
			]
		},
		{
			icon: '🔓',
			title: 'Free & Open Source Forever',
			desc: 'OpenPlan3D is completely free with no premium tier, no paywalls, and no signup required. The source code is open on GitHub.',
			bullets: [
				'No hidden costs or premium features',
				'No account or signup required',
				'Open source on GitHub — inspect and contribute',
				'Community-driven development',
			]
		},
	];
</script>
