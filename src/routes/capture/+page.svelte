<svelte:head>
	<title>iPhone LiDAR Floor Plan Scanner App — Free | OpenPlan3D Capture</title>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="description" content="OpenPlan3D Capture is a free, open-source iPhone app that scans rooms with LiDAR (Apple RoomPlan) and turns them into editable floor plans. Fine-tune walls, view in 3D, and export to PNG, SVG, DXF, PDF, or USDZ — no account, scans stay on your device." />
	<meta property="og:title" content="OpenPlan3D Capture — Scan Floor Plans with iPhone LiDAR" />
	<meta property="og:description" content="Free, open-source iPhone app that scans rooms with LiDAR and turns them into editable floor plans. No account — your scans stay on your device." />
	<meta property="og:url" content="https://www.openplan3d.com/capture" />
	<meta property="og:image" content="https://www.openplan3d.com/capture/appstore-iphone/01-hero.png" />
	<meta name="twitter:title" content="OpenPlan3D Capture — Scan Floor Plans with iPhone LiDAR" />
	<meta name="twitter:description" content="Free, open-source iPhone app that scans rooms with LiDAR and turns them into editable floor plans. No account — your scans stay on your device." />
	<meta name="twitter:image" content="https://www.openplan3d.com/capture/appstore-iphone/01-hero.png" />
	<link rel="canonical" href="https://www.openplan3d.com/capture" />
</svelte:head>

<!-- Hero -->
<section class="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
	<div class="max-w-6xl mx-auto px-6 py-20 md:py-28">
		<div class="grid md:grid-cols-2 gap-12 items-center">
			<div class="text-center md:text-left">
				<p class="text-blue-400 font-semibold tracking-[0.2em] text-xs mb-5">OPENPLAN3D CAPTURE</p>
				<h1 class="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
					Scan a room.<br />Get a <span class="text-blue-500">floor plan.</span>
				</h1>
				<p class="text-slate-400 text-lg max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed">
					Point your iPhone at a room and OpenPlan3D Capture builds an editable floor plan in seconds — walls, doors, windows, and furniture detected automatically with LiDAR. Free, open source, no account. Your scans stay on your device.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
					<span class="inline-flex items-center gap-2.5 bg-white/10 border border-white/15 text-white font-semibold px-6 py-3.5 rounded-xl text-lg">
						<svg viewBox="0 0 384 512" class="w-5 h-5 fill-current" aria-hidden="true"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
						Coming soon to the App Store
					</span>
					<a
						href="https://github.com/theLodgeBots"
						target="_blank"
						rel="noopener"
						class="inline-flex items-center gap-2 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-medium px-6 py-3.5 rounded-xl text-lg transition-colors"
					>
						⭐ View on GitHub
					</a>
				</div>
				<p class="text-slate-500 text-sm mt-5">Requires an iPhone or iPad Pro with a LiDAR sensor. Powered by Apple RoomPlan.</p>
			</div>

			<!-- Hero screenshot -->
			<div class="flex justify-center md:justify-end">
				<img
					src="/capture/appstore-iphone/01-hero.png"
					alt="OpenPlan3D Capture app home screen showing a Start Scanning button and recent room scans as floor plan thumbnails"
					class="w-full max-w-[300px] rounded-[2rem] shadow-2xl ring-1 ring-white/10"
					loading="eager"
				/>
			</div>
		</div>
	</div>
</section>

<!-- Screenshot gallery -->
<section class="bg-slate-800 py-16 border-y border-slate-700">
	<div class="max-w-6xl mx-auto px-6">
		<h2 class="text-2xl md:text-3xl font-bold text-white text-center mb-3">Capture to floor plan, in a few taps</h2>
		<p class="text-slate-400 text-center max-w-2xl mx-auto mb-12">Scan, refine, and export — all on your phone. Then open the full plan in OpenPlan3D when you want more room to work.</p>
		<div class="flex gap-5 overflow-x-auto pb-4 snap-x md:grid md:grid-cols-5 md:gap-4 md:overflow-visible">
			{#each shots as shot}
				<figure class="snap-center shrink-0 w-[220px] md:w-auto">
					<img
						src={shot.src}
						alt={shot.alt}
						class="w-full rounded-2xl shadow-xl ring-1 ring-white/10"
						loading="lazy"
					/>
				</figure>
			{/each}
		</div>
	</div>
</section>

<!-- Feature groups -->
<section class="bg-white py-20">
	<div class="max-w-4xl mx-auto px-6 space-y-20">
		{#each featureGroups as group, i}
			<article class="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
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
				<div class={`flex justify-center ${i % 2 === 1 ? 'md:order-1' : ''}`}>
					<img
						src={group.screenshot}
						alt={group.screenshotAlt}
						class="w-full max-w-[280px] rounded-3xl shadow-xl ring-1 ring-slate-200"
						loading="lazy"
					/>
				</div>
			</article>
		{/each}
	</div>
</section>

<!-- How it works -->
<section class="bg-slate-50 py-20 border-t border-slate-200">
	<div class="max-w-5xl mx-auto px-6">
		<h2 class="text-3xl font-bold text-slate-900 text-center mb-14">Three steps, no measuring tape</h2>
		<div class="grid sm:grid-cols-3 gap-8">
			{#each steps as step, i}
				<div class="text-center">
					<div class="w-12 h-12 mx-auto mb-5 rounded-full bg-blue-500 text-white font-bold text-lg flex items-center justify-center shadow-lg shadow-blue-500/25">{i + 1}</div>
					<h3 class="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
					<p class="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="bg-slate-900 py-20">
	<div class="max-w-3xl mx-auto px-6 text-center">
		<h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Coming soon to iPhone</h2>
		<p class="text-slate-400 text-lg mb-8">OpenPlan3D Capture is on the way to the App Store. In the meantime, design floor plans free in your browser — no signup, no download.</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a
				href="https://app.openplan3d.com"
				class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-lg text-lg transition-colors shadow-lg shadow-blue-500/25"
			>
				Open the Web Editor →
			</a>
			<a
				href="https://github.com/theLodgeBots"
				target="_blank"
				rel="noopener"
				class="inline-block border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-medium px-8 py-3.5 rounded-lg text-lg transition-colors"
			>
				View on GitHub →
			</a>
		</div>
	</div>
</section>

<script>
	const shots = [
		{ src: '/capture/appstore-iphone/05-closer.png', alt: 'OpenPlan3D Capture welcome screen: Free, open source, no account, with a Start Scanning button' },
		{ src: '/capture/appstore-iphone/01-hero.png', alt: 'OpenPlan3D Capture home screen with recent room scans shown as floor plan thumbnails' },
		{ src: '/capture/appstore-iphone/03-editor.png', alt: 'Editing a floor plan in OpenPlan3D Capture — dragging a wall handle with a live 2.10 m dimension label' },
		{ src: '/capture/appstore-iphone/02-3d.png', alt: 'OpenPlan3D Capture 3D view of a scanned apartment with rooms, walls, and furniture' },
		{ src: '/capture/appstore-iphone/04-export.png', alt: 'OpenPlan3D Capture export screen offering PNG, SVG, DXF, PDF, and USDZ, plus Open in OpenPlan3D' },
	];

	const featureGroups = [
		{
			icon: '📱',
			title: 'LiDAR room capture, powered by RoomPlan',
			desc: 'Walk around a room with your iPhone and OpenPlan3D Capture builds the plan as you go. Apple RoomPlan detects walls, doors, windows, and furniture automatically — no manual measuring.',
			screenshot: '/capture/appstore-iphone/01-hero.png',
			screenshotAlt: 'OpenPlan3D Capture home screen showing Start Scanning and recent scans: Living Room, Kitchen, Office',
			bullets: [
				'Automatic wall, door, and window detection',
				'Furniture recognized and placed for you',
				'Accurate real-world dimensions from LiDAR',
				'Keep a library of every room you scan',
			]
		},
		{
			icon: '📐',
			title: 'Fine-tune every wall',
			desc: 'Scans are a starting point, not the finish line. Drag wall handles with live dimensions, split walls, and place doors and windows exactly where you want them.',
			screenshot: '/capture/appstore-iphone/03-editor.png',
			screenshotAlt: 'Wall editing in OpenPlan3D Capture with a highlighted interior wall and a 2.10 m dimension label',
			bullets: [
				'Drag handles with live, on-screen dimensions',
				'Add and edit walls, doors, and windows',
				'Split or delete walls with a tap',
				'Undo and redo as you refine',
			]
		},
		{
			icon: '🧊',
			title: 'See it in 3D, instantly',
			desc: 'Flip from floor plan to a real-time 3D model of the space. Walls, doors, windows, and furniture appear automatically — rotate to view it from any angle.',
			screenshot: '/capture/appstore-iphone/02-3d.png',
			screenshotAlt: 'OpenPlan3D Capture 3D view of a sample apartment with labeled living room and bedroom areas',
			bullets: [
				'One tap between 2D floor plan and 3D',
				'Furniture and fixtures shown in 3D',
				'Drag to rotate and explore the space',
				'Per-room areas calculated for you',
			]
		},
		{
			icon: '📤',
			title: 'Open in OpenPlan3D, or export anywhere',
			desc: 'Send your scan straight to the OpenPlan3D web editor to keep designing, or export a file to use anywhere — no account needed.',
			screenshot: '/capture/appstore-iphone/04-export.png',
			screenshotAlt: 'Export options in OpenPlan3D Capture: PNG, SVG, DXF, PDF, USDZ, and Open in OpenPlan3D',
			bullets: [
				'One-tap handoff to the OpenPlan3D web editor',
				'Export to PNG, SVG, DXF, PDF, or USDZ',
				'USDZ for AR and Apple Quick Look',
				'Files save directly to your device',
			]
		},
		{
			icon: '🔒',
			title: 'Free, open source, and private',
			desc: 'Everything happens on your phone. There is no account to create and no cloud upload — your scans stay on your device unless you choose to export or share them.',
			screenshot: '/capture/appstore-iphone/05-closer.png',
			screenshotAlt: 'OpenPlan3D Capture intro screen emphasizing free, open source, and no account',
			bullets: [
				'No signup and no paywall — completely free',
				'Scans stay on your device by default',
				'Open source, like the rest of OpenPlan3D',
				'No ads and no tracking of your designs',
			]
		},
	];

	const steps = [
		{ title: 'Scan', desc: 'Walk around the room with your iPhone. LiDAR captures the walls, openings, and furniture automatically.' },
		{ title: 'Refine', desc: 'Adjust walls with live dimensions, tweak doors and windows, and check the layout in 2D or 3D.' },
		{ title: 'Export or open', desc: 'Send it to the OpenPlan3D editor to keep designing, or export to PNG, SVG, DXF, PDF, or USDZ.' },
	];
</script>
