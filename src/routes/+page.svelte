<script>
	import { trackOutbound } from '$lib/analytics';

	const GITHUB = 'https://github.com/theLodgeBots/open3dFloorplan';
	const EDITOR = 'https://app.openplan3d.com';
	const SPLAT = 'https://3dsplatapp.com/';
	const SPLAT_VIDEO = 'https://www.youtube.com/watch?v=ZOOvxmW-CJ8';

	const useCases = [
		{ title: 'Real estate listings', body: 'Create accurate floor plans for property listings — scan with iPhone, export a clean PNG or PDF in minutes.' },
		{ title: 'Remodels & renovations', body: 'Capture the existing space, then test wall changes, furniture layouts, and room configurations in 3D.' },
		{ title: 'Interior design', body: 'Furnish plans with 140+ models or your own GLB meshes, and present clients a walkable 3D view.' },
		{ title: 'Moving & furniture planning', body: 'Check whether the sofa fits before moving day — plan room layouts with real measurements.' },
		{ title: 'Landlords & rentals', body: 'Document unit layouts and square footage with a scan instead of a tape measure.' },
		{ title: 'CAD workflows', body: 'Export DXF and continue in AutoCAD or other CAD software — OpenPlan3D is the fast first draft.' }
	];

	const faqs = [
		{ q: 'Is OpenPlan3D really free?', a: 'Yes. OpenPlan3D is 100% free and open source — no premium tier, no watermarks, no signup. The full source code is on GitHub.' },
		{ q: 'Can I create a floor plan by scanning a room with my iPhone?', a: 'Yes. The free OpenPlan3D Capture app uses iPhone LiDAR and Apple RoomPlan to turn a one-minute walkthrough into an editable floor plan.' },
		{ q: 'What formats can I export?', a: 'PNG and PDF for sharing, SVG for vector graphics, DXF for AutoCAD and CAD software, and JSON for re-editing.' },
		{ q: 'Do I need an account?', a: 'No. The editor runs in your browser and plans stay on your device. No account, login, or cloud required.' },
		{ q: 'How does OpenPlan3D compare to RoomSketcher or Floorplanner?', a: 'OpenPlan3D covers 2D drawing, 3D visualization, furniture, and export without subscriptions, and is fully open source with native Apple RoomPlan import.' }
	];

	const jsonLd = `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'SoftwareApplication',
				name: 'OpenPlan3D',
				applicationCategory: 'DesignApplication',
				operatingSystem: 'Web',
				url: 'https://www.openplan3d.com/',
				offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
				description: 'Free open-source floor plan editor with 2D drawing, 3D visualization, 140+ furniture models, Apple RoomPlan LiDAR import, and PNG/SVG/DXF/PDF export.',
				featureList: '2D floor plan drawing, 3D visualization, 140+ furniture models, Apple RoomPlan import, GLB/glTF import, DXF export, PDF export',
				isAccessibleForFree: true,
				sameAs: ['https://github.com/theLodgeBots/open3dFloorplan']
			},
			{
				'@type': 'MobileApplication',
				name: 'OpenPlan3D Capture',
				applicationCategory: 'UtilitiesApplication',
				operatingSystem: 'iOS',
				offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
				description: 'Scan rooms with iPhone LiDAR and Apple RoomPlan to create editable floor plans. Free, no account.'
			},
			{
				'@type': 'SoftwareApplication',
				name: '3D Splat App',
				applicationCategory: 'MultimediaApplication',
				operatingSystem: 'macOS',
				offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
				description: 'Turn photos and videos into photorealistic 3D scenes with Gaussian Splatting on your Mac. No LiDAR required.',
				sameAs: ['https://3dsplatapp.com/']
			},
			{
				'@type': 'FAQPage',
				mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
			}
		]
	})}<\/script>`;
</script>

<svelte:head>
	<title>Free Floor Plan Editor — 2D & 3D, Open Source | OpenPlan3D</title>
	<meta name="description" content="Free open-source floor plan editor. Draw 2D floor plans, view in 3D, furnish with 140+ models, scan rooms with iPhone LiDAR (Apple RoomPlan), and export PNG, SVG, DXF, PDF. No signup, no paywalls." />
	<link rel="canonical" href="https://www.openplan3d.com/" />
	<meta property="og:url" content="https://www.openplan3d.com/" />
	<meta property="og:title" content="Free Floor Plan Editor — 2D & 3D, Open Source | OpenPlan3D" />
	<meta property="og:description" content="Free open-source floor plan editor. Draw in 2D, view in 3D, scan rooms with iPhone LiDAR, and export PNG, SVG, DXF, PDF. No signup, no paywalls." />
	<meta property="og:image" content="https://www.openplan3d.com/screenshots/2d-floorplan.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Free Floor Plan Editor — 2D & 3D, Open Source | OpenPlan3D" />
	<meta name="twitter:description" content="Free open-source floor plan editor. Draw in 2D, view in 3D, scan rooms with iPhone LiDAR, and export PNG, SVG, DXF, PDF. No signup, no paywalls." />
	<meta name="twitter:image" content="https://www.openplan3d.com/screenshots/2d-floorplan.png" />
	{@html jsonLd}
</svelte:head>

<div class="page">
	<!-- Hero -->
	<section class="hero">
		<div class="eyebrow-pill">100% free &amp; open source · no signup, no paywalls</div>
		<h1 class="hero-h1">The free, open-source<br />floor plan editor</h1>
		<p class="hero-sub">Draw 2D floor plans, visualize them in 3D, and furnish with 140+ models — in your browser. Import iPhone LiDAR scans from Apple RoomPlan. Export to PNG, SVG, DXF, or PDF.</p>
		<div class="hero-btns">
			<a class="btn btn-white" href={EDITOR}>Start Designing — Free</a>
			<a class="btn btn-ghost" href={GITHUB} target="_blank" rel="noopener">★ Star on GitHub</a>
		</div>
		<div class="hero-checks">
			<span>✓ Runs in your browser</span>
			<span>✓ No account required</span>
			<span>✓ Your data stays local</span>
		</div>

		<!-- Real editor screenshot in a browser frame -->
		<div class="browser-frame">
			<div class="browser-bar">
				<span class="dot dot-r"></span><span class="dot dot-y"></span><span class="dot dot-g"></span>
				<span class="url-pill">app.openplan3d.com</span>
			</div>
			<a href={EDITOR}>
				<img src="/screenshots/2d-floorplan.png" alt="OpenPlan3D 2D floor plan editor showing wall drawing with live dimensions, doors, windows, and furniture on a blueprint grid" class="browser-img" loading="eager" />
			</a>
		</div>
	</section>

	<!-- Answer bar (AEO) -->
	<div class="answer-bar">
		<p><strong>OpenPlan3D is a free, open-source floor plan software</strong> that runs in the browser — an alternative to RoomSketcher, Floorplanner, and SketchUp for 2D floor plans and 3D home design, with no subscription, watermarks, or account.</p>
	</div>

	<!-- Feature trio -->
	<section id="features" class="section features">
		<div class="section-head">
			<div class="eyebrow">Everything you need</div>
			<h2 class="section-h2">Draw in 2D. Walk through in 3D. Export anywhere.</h2>
		</div>
		<div class="feature-grid">
			<!-- Card 1: 2D drawing -->
			<article class="card">
				<div class="card-illo grid-20">
					<div style="position:absolute; left:70px; top:38px; width:200px; height:145px; border:6px solid #1f2430">
						<div style="position:absolute; left:100px; top:0; width:6px; height:56px; background:#1f2430"></div>
						<div style="position:absolute; left:100px; top:82px; width:6px; height:63px; background:#1f2430"></div>
						<div style="position:absolute; left:100px; top:62px; width:60px; height:6px; background:#3a5bd9; box-shadow:0 0 0 4px rgba(58,91,217,0.15)"></div>
						<div style="position:absolute; left:24px; top:-6px; width:44px; height:6px; background:#7d97e8"></div>
						<div style="position:absolute; left:14px; top:96px; width:48px; height:30px; background:#e8eaf1"></div>
						<div style="position:absolute; left:126px; top:16px; width:40px; height:44px; background:#e8eaf1"></div>
					</div>
					<div class="chip-mono">2.10 m</div>
				</div>
				<div class="card-body">
					<h3>2D floor plan drawing</h3>
					<p>Walls, rooms, doors, and windows with precise measurements, snap-to-grid, and imperial or metric units.</p>
				</div>
			</article>

			<!-- Card 2: 3D -->
			<article class="card">
				<div class="card-illo grid-20 illo-center">
					<div class="scene-3d" style="width:150px; height:130px; transform:rotateX(56deg) rotateZ(-36deg); margin-top:16px">
						<div style="position:absolute; left:-24px; top:-24px; width:200px; height:180px; background:radial-gradient(ellipse at center, rgba(22,41,94,0.2), rgba(22,41,94,0) 68%); transform:translateZ(-6px)"></div>
						<div style="position:absolute; left:0; top:0; width:150px; height:130px; background:#ece5d6"></div>
						<div style="position:absolute; left:88px; top:20px; width:42px; height:32px; background:#cfd7ee; border:1px solid #b8c3e4; transform:translateZ(10px)"></div>
						<div style="position:absolute; left:20px; top:78px; width:36px; height:34px; background:#cfd7ee; border:1px solid #b8c3e4; transform:translateZ(9px)"></div>
						<div style="position:absolute; left:0; top:6px; width:150px; height:30px; background:#f7f6f1; transform:rotateX(90deg); transform-origin:top left"></div>
						<div style="position:absolute; left:0; top:124px; width:150px; height:30px; background:#f7f6f1; transform:rotateX(90deg); transform-origin:top left"></div>
						<div style="position:absolute; left:6px; top:0; width:30px; height:130px; background:#f4f2ec; transform:rotateY(-90deg); transform-origin:top left"></div>
						<div style="position:absolute; left:150px; top:0; width:30px; height:130px; background:#f4f2ec; transform:rotateY(-90deg); transform-origin:top left"></div>
						<div style="position:absolute; left:0; top:0; width:150px; height:6px; background:#16295e; transform:translateZ(30px)"></div>
						<div style="position:absolute; left:0; top:124px; width:150px; height:6px; background:#16295e; transform:translateZ(30px)"></div>
						<div style="position:absolute; left:0; top:6px; width:6px; height:118px; background:#1b3070; transform:translateZ(30px)"></div>
						<div style="position:absolute; left:144px; top:6px; width:6px; height:118px; background:#1b3070; transform:translateZ(30px)"></div>
					</div>
				</div>
				<div class="card-body">
					<h3>Instant 3D visualization</h3>
					<p>Switch to 3D anytime and orbit through your design. Furnish with 140+ models or import your own GLB/glTF meshes.</p>
				</div>
			</article>

			<!-- Card 3: Export -->
			<article class="card">
				<div class="card-illo grid-20 illo-center">
					<div class="fmt-grid">
						<div class="fmt">PNG</div>
						<div class="fmt">SVG</div>
						<div class="fmt">DXF</div>
						<div class="fmt">PDF</div>
						<div class="fmt">JSON</div>
						<div class="fmt fmt-navy">USDZ</div>
					</div>
				</div>
				<div class="card-body">
					<h3>Export to CAD &amp; print</h3>
					<p>Export floor plans to PNG, SVG, DXF, PDF, or JSON — ready for AutoCAD, print, or sharing with clients.</p>
				</div>
			</article>
		</div>
	</section>

	<!-- Capture app section -->
	<section id="capture" class="section section-alt two-col">
		<div class="col-text">
			<div class="eyebrow">OpenPlan3D Capture for iPhone</div>
			<h2 class="section-h2">Scan a real room. Get an editable floor plan.</h2>
			<p class="lead">Walk the room once — iPhone LiDAR and Apple RoomPlan detect walls, doors, windows, and furniture automatically. Fine-tune on your phone, then open the plan here to keep designing.</p>
			<ul class="checklist">
				<li><span>✓</span> Scan-to-floor-plan in seconds, no manual measuring</li>
				<li><span>✓</span> No account — scans stay on your device</li>
				<li><span>✓</span> Free, like everything else we make</li>
			</ul>
			<div class="col-btns">
				<a class="btn btn-navy-lg" href="/capture">
					<svg viewBox="0 0 384 512" width="15" height="15" fill="currentColor" aria-hidden="true"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
					Get the iPhone App
				</a>
			</div>
		</div>
		<div class="col-media phones">
			<!-- Phone 1: library -->
			<div class="phone">
				<div class="phone-screen">
					<div class="phone-top grid-20-navy">
						<div class="phone-top-row">
							<div class="phone-app">OpenPlan3D</div>
							<div class="phone-gear">⚙</div>
						</div>
						<div class="phone-scan">❐ Start Scanning</div>
					</div>
					<div class="phone-list">
						<div class="phone-list-head">
							<div class="phone-recent">Recent</div>
							<div class="phone-seeall">See All</div>
						</div>
						<div class="scan-grid">
							<div class="scan-card">
								<div class="scan-thumb grid-10">
									<div style="position:absolute; left:30px; top:6px; width:46px; height:42px; border:3px solid #16295e; background:rgba(236,229,214,0.55)">
										<div style="position:absolute; left:26px; top:0; width:3px; height:18px; background:#16295e"></div>
										<div style="position:absolute; left:26px; top:28px; width:3px; height:22px; background:#16295e"></div>
										<div style="position:absolute; left:6px; top:28px; width:14px; height:9px; background:#b9c5e8"></div>
										<div style="position:absolute; left:33px; top:7px; width:11px; height:13px; background:#b9c5e8"></div>
										<div style="position:absolute; left:8px; top:-3px; width:13px; height:3px; background:#3a5bd9"></div>
									</div>
								</div>
								<div class="scan-meta"><div class="scan-name">Living Room</div><div class="scan-sub">Today · 24.5 m²</div></div>
							</div>
							<div class="scan-card">
								<div class="scan-thumb grid-10">
									<div style="position:absolute; left:36px; top:7px; width:36px; height:40px; border:3px solid #16295e; background:rgba(236,229,214,0.55)">
										<div style="position:absolute; left:0; top:0; width:9px; height:32px; background:#b9c5e8"></div>
										<div style="position:absolute; left:0; top:32px; width:23px; height:9px; background:#b9c5e8"></div>
										<div style="position:absolute; left:12px; top:-3px; width:12px; height:3px; background:#3a5bd9"></div>
									</div>
								</div>
								<div class="scan-meta"><div class="scan-name">Kitchen</div><div class="scan-sub">Yesterday · 12.1 m²</div></div>
							</div>
							<div class="scan-card">
								<div class="scan-thumb grid-10">
									<div style="position:absolute; left:32px; top:8px; width:44px; height:38px; border:3px solid #16295e; background:rgba(236,229,214,0.55)">
										<div style="position:absolute; left:13px; top:0; width:20px; height:7px; background:#b9c5e8"></div>
										<div style="position:absolute; left:5px; top:26px; width:10px; height:11px; background:#b9c5e8"></div>
										<div style="position:absolute; left:-3px; top:15px; width:3px; height:10px; background:#3a5bd9"></div>
									</div>
								</div>
								<div class="scan-meta"><div class="scan-name">Office</div><div class="scan-sub">Jul 12 · 9.8 m²</div></div>
							</div>
							<div class="scan-card">
								<div class="scan-thumb grid-10">
									<div style="position:absolute; left:28px; top:7px; width:50px; height:40px; border:3px solid #16295e; background:rgba(236,229,214,0.55)">
										<div style="position:absolute; left:24px; top:0; width:3px; height:20px; background:#16295e"></div>
										<div style="position:absolute; left:8px; top:8px; width:12px; height:10px; background:#b9c5e8"></div>
										<div style="position:absolute; left:34px; top:24px; width:14px; height:12px; background:#b9c5e8"></div>
										<div style="position:absolute; left:36px; top:-3px; width:12px; height:3px; background:#3a5bd9"></div>
									</div>
								</div>
								<div class="scan-meta"><div class="scan-name">Bedroom</div><div class="scan-sub">Jul 10 · 11.4 m²</div></div>
							</div>
							<div class="scan-new">+ New scan</div>
						</div>
						<div class="phone-foot">Captures stay on this device. Share or upload to openplan3d.com anytime.</div>
					</div>
				</div>
			</div>

			<!-- Phone 2: 3D view -->
			<div class="phone phone-offset">
				<div class="phone-screen">
					<div class="phone-nav">
						<div class="phone-back">‹</div>
						<div class="phone-title">Sample Apartment</div>
						<div style="width:20px"></div>
					</div>
					<div class="phone-3d-wrap">
						<div class="phone-3d grid-14">
							<div class="seg-toggle">
								<div class="seg">Floor Plan</div>
								<div class="seg seg-on">3D</div>
							</div>
							<div class="illo-center" style="position:absolute; inset:0; perspective:800px">
								<div class="scene-3d" style="width:150px; height:172px; transform:rotateX(58deg) rotateZ(-38deg) scale(0.95); margin-top:16px">
									<div style="position:absolute; left:-24px; top:-24px; width:200px; height:220px; background:radial-gradient(ellipse at center, rgba(22,41,94,0.22), rgba(22,41,94,0) 68%); transform:translateZ(-5px)"></div>
									<div style="position:absolute; left:0; top:0; width:150px; height:172px; background:#ece5d6"></div>
									<div style="position:absolute; left:88px; top:20px; width:44px; height:34px; background:#cfd7ee; border:1px solid #b8c3e4; transform:translateZ(10px)"></div>
									<div style="position:absolute; left:94px; top:120px; width:38px; height:30px; background:#cfd7ee; border:1px solid #b8c3e4; transform:translateZ(10px)"></div>
									<div style="position:absolute; left:16px; top:125px; width:19px; height:39px; background:#cfd7ee; border:1px solid #b8c3e4; transform:translateZ(9px)"></div>
									<div style="position:absolute; left:26px; top:39px; width:28px; height:19px; background:#d9d2c2; border:1px solid #c6bda8; transform:translateZ(12px)"></div>
									<div style="position:absolute; left:0; top:5px; width:150px; height:28px; background:#f7f6f1; transform:rotateX(90deg); transform-origin:top left"><div style="position:absolute; left:24px; bottom:6px; width:34px; height:16px; background:rgba(150,185,235,0.75); border:1px solid #16295e"></div></div>
									<div style="position:absolute; left:0; top:167px; width:150px; height:28px; background:#f7f6f1; transform:rotateX(90deg); transform-origin:top left"></div>
									<div style="position:absolute; left:5px; top:0; width:28px; height:172px; background:#f4f2ec; transform:rotateY(-90deg); transform-origin:top left"></div>
									<div style="position:absolute; left:150px; top:0; width:28px; height:172px; background:#f4f2ec; transform:rotateY(-90deg); transform-origin:top left"></div>
									<div style="position:absolute; left:72px; top:5px; width:28px; height:70px; background:#f7f6f1; transform:rotateY(-90deg); transform-origin:top left"></div>
									<div style="position:absolute; left:72px; top:97px; width:28px; height:70px; background:#f7f6f1; transform:rotateY(-90deg); transform-origin:top left"></div>
									<div style="position:absolute; left:0; top:0; width:150px; height:5px; background:#16295e; transform:translateZ(28px)"></div>
									<div style="position:absolute; left:0; top:167px; width:150px; height:5px; background:#16295e; transform:translateZ(28px)"></div>
									<div style="position:absolute; left:0; top:5px; width:5px; height:162px; background:#1b3070; transform:translateZ(28px)"></div>
									<div style="position:absolute; left:145px; top:5px; width:5px; height:162px; background:#1b3070; transform:translateZ(28px)"></div>
									<div style="position:absolute; left:72px; top:5px; width:5px; height:70px; background:#1b3070; transform:translateZ(28px)"></div>
									<div style="position:absolute; left:72px; top:97px; width:5px; height:70px; background:#1b3070; transform:translateZ(28px)"></div>
								</div>
							</div>
							<div class="tag-3d" style="left:16%; top:58%">LIVING · 15.2 m²</div>
							<div class="tag-3d" style="left:58%; top:32%">BED · 5.6 m²</div>
							<div class="chip-furn">Furniture</div>
							<div class="chip-rotate">Drag to rotate</div>
						</div>
					</div>
					<div class="phone-cta"><div class="phone-cta-btn">Open in OpenPlan3D</div></div>
				</div>
			</div>
		</div>
	</section>

	<!-- 3D Splat App cross-promo -->
	<section id="splat" class="section two-col splat">
		<div class="col-media">
			<div class="mac-window">
				<div class="mac-bar">
					<span class="dot dot-r"></span><span class="dot dot-y"></span><span class="dot dot-g"></span>
					<span class="mac-title">3D Splat App</span>
				</div>
				<a class="mac-media" href={SPLAT_VIDEO} target="_blank" rel="noopener" onclick={() => trackOutbound('splat_video', SPLAT_VIDEO)}>
					<img src="/splat-video-thumb.jpg" alt="3D Splat App — photorealistic Gaussian Splatting scene captured on Mac" class="mac-thumb" loading="lazy" />
					<span class="play-btn"><span class="play-tri"></span></span>
					<span class="watch-chip">Watch: 3D Splat App in action</span>
				</a>
			</div>
		</div>
		<div class="col-text">
			<div class="splat-eyebrow">
				<img src="/3dsplatapp-icon.png" alt="3D Splat App icon" class="splat-icon" />
				<span class="eyebrow">From the makers of OpenPlan3D</span>
			</div>
			<h2 class="section-h2">3D Splat App — photos into photorealistic 3D</h2>
			<p class="lead">Turn photos and videos into true-to-life 3D scenes with Gaussian Splatting, right on your Mac. No LiDAR needed — just a few photos or a short video from any camera.</p>
			<ul class="checklist">
				<li><span>✓</span> Capture the real space first, then design its floor plan with real details in view</li>
				<li><span>✓</span> Show clients the photorealistic "before" for remodels and staging</li>
				<li><span>✓</span> Works with any camera — reconstruction runs on your Mac</li>
			</ul>
			<div class="col-btns">
				<a class="btn btn-navy-lg" href={SPLAT} target="_blank" rel="noopener" onclick={() => trackOutbound('splat_download', SPLAT)}>Get 3D Splat App for Mac</a>
			</div>
		</div>
	</section>

	<!-- Use cases -->
	<section class="section">
		<div class="section-head">
			<div class="eyebrow">Who it's for</div>
			<h2 class="section-h2">One floor plan tool, many jobs</h2>
		</div>
		<div class="usecase-grid">
			{#each useCases as uc}
				<article class="usecase">
					<h3>{uc.title}</h3>
					<p>{uc.body}</p>
				</article>
			{/each}
		</div>
	</section>

	<!-- FAQ -->
	<section id="faq" class="section section-alt faq">
		<div class="faq-intro">
			<div class="eyebrow">FAQ</div>
			<h2 class="section-h2 faq-h2">Common questions</h2>
			<p class="lead">Short, direct answers — also served as FAQPage structured data for search engines and AI assistants.</p>
		</div>
		<div class="faq-list">
			{#each faqs as f}
				<div class="faq-item">
					<h3>{f.q}</h3>
					<p>{f.a}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- CTA -->
	<section class="cta">
		<h2>Ready to design your space?</h2>
		<p>Free, open source, no signup. Start in your browser right now.</p>
		<div class="hero-btns">
			<a class="btn btn-white" href={EDITOR}>Launch Editor</a>
			<a class="btn btn-ghost" href="/capture">Get the iPhone App</a>
		</div>
	</section>
</div>

<style>
	.page {
		max-width: 1440px;
		margin: 0 auto;
		background: #fff;
	}

	/* ---- shared blueprint grids ---- */
	.grid-20,
	.grid-14,
	.grid-10,
	.grid-20-navy {
		background-color: var(--canvas);
		position: relative;
	}
	.grid-20 {
		background-image: linear-gradient(var(--grid-light) 1px, transparent 1px), linear-gradient(90deg, var(--grid-light) 1px, transparent 1px);
		background-size: 20px 20px;
	}
	.grid-14 {
		background-image: linear-gradient(var(--grid-light) 1px, transparent 1px), linear-gradient(90deg, var(--grid-light) 1px, transparent 1px);
		background-size: 14px 14px;
	}
	.grid-10 {
		background-image: linear-gradient(var(--grid-light) 1px, transparent 1px), linear-gradient(90deg, var(--grid-light) 1px, transparent 1px);
		background-size: 10px 10px;
	}
	.grid-20-navy {
		background-color: var(--navy);
		background-image: linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
		background-size: 20px 20px;
	}
	.illo-center {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.scene-3d {
		position: relative;
		transform-style: preserve-3d;
	}

	/* ---- buttons ---- */
	.btn {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		font-weight: 600;
		white-space: nowrap;
		transition: background-color 0.15s ease, opacity 0.15s ease;
	}
	.btn-white {
		height: 52px;
		padding: 0 30px;
		border-radius: 13px;
		background: #fff;
		color: var(--navy) !important;
		font-size: 17px;
	}
	.btn-white:hover {
		background: #eef0f6;
	}
	.btn-ghost {
		height: 52px;
		padding: 0 26px;
		border-radius: 13px;
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.22);
		color: #fff !important;
		font-size: 16px;
	}
	.btn-ghost:hover {
		background: rgba(255, 255, 255, 0.18);
	}
	.btn-navy-lg {
		height: 50px;
		padding: 0 24px;
		border-radius: 12px;
		background: var(--navy);
		color: #fff !important;
		font-size: 16px;
	}
	.btn-navy-lg:hover {
		background: var(--navy-hover);
	}

	/* ---- Hero ---- */
	.hero {
		background: var(--navy);
		background-image: linear-gradient(var(--grid-navy) 1px, transparent 1px), linear-gradient(90deg, var(--grid-navy) 1px, transparent 1px);
		background-size: 40px 40px;
		padding: 88px 64px 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		overflow: hidden;
	}
	.eyebrow-pill {
		padding: 7px 16px;
		border-radius: 16px;
		background: rgba(255, 255, 255, 0.1);
		color: var(--on-navy-body);
		font-size: 14px;
		font-weight: 500;
		margin-bottom: 22px;
	}
	.hero-h1 {
		margin: 0;
		font-size: 58px;
		font-weight: 700;
		letter-spacing: -1.4px;
		color: #fff;
		line-height: 1.08;
		max-width: 860px;
	}
	.hero-sub {
		margin: 20px 0 0;
		font-size: 20px;
		color: var(--on-navy-body);
		line-height: 1.55;
		max-width: 640px;
	}
	.hero-btns {
		display: flex;
		gap: 14px;
		margin-top: 32px;
	}
	.hero-checks {
		display: flex;
		gap: 34px;
		margin-top: 26px;
		font-size: 14px;
		color: var(--on-navy-eyebrow);
		flex-wrap: wrap;
		justify-content: center;
	}
	.browser-frame {
		width: min(1040px, 100%);
		margin-top: 52px;
		border-radius: 18px 18px 0 0;
		background: var(--canvas);
		border: 1px solid rgba(255, 255, 255, 0.25);
		border-bottom: none;
		box-shadow: 0 -20px 80px rgba(0, 0, 0, 0.35);
		overflow: hidden;
	}
	.browser-bar {
		height: 44px;
		background: #f2f3f8;
		border-bottom: 0.5px solid #e2e4ee;
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 0 16px;
	}
	.dot {
		width: 11px;
		height: 11px;
		border-radius: 6px;
	}
	.dot-r { background: #f6635a; }
	.dot-y { background: #f5bd4f; }
	.dot-g { background: #61c455; }
	.url-pill {
		flex: 1;
		text-align: center;
		font-size: 12px;
		color: var(--text-muted);
	}
	.browser-img {
		display: block;
		width: 100%;
		height: auto;
	}

	/* ---- Answer bar ---- */
	.answer-bar {
		background: var(--surface-alt);
		border-bottom: 0.5px solid var(--border-soft);
		padding: 26px 64px;
		display: flex;
		justify-content: center;
	}
	.answer-bar p {
		margin: 0;
		max-width: 900px;
		font-size: 16.5px;
		line-height: 1.6;
		color: var(--text-body-dark);
		text-align: center;
	}
	.answer-bar strong {
		color: var(--navy);
	}

	/* ---- Sections ---- */
	.section {
		padding: 88px 64px;
	}
	.section-alt {
		background: var(--surface-alt);
	}
	.section-head {
		display: flex;
		flex-direction: column;
		gap: 12px;
		max-width: 760px;
		margin-bottom: 56px;
	}
	.eyebrow {
		font-size: 13px;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: var(--indigo);
		font-weight: 600;
	}
	.section-h2 {
		margin: 0;
		font-size: 38px;
		font-weight: 700;
		letter-spacing: -0.8px;
		color: var(--navy);
		line-height: 1.15;
	}
	.lead {
		margin: 0;
		font-size: 17px;
		line-height: 1.6;
		color: var(--text-body);
	}

	/* ---- Feature trio ---- */
	.features {
		display: flex;
		flex-direction: column;
	}
	.features .section-head {
		margin-bottom: 0;
	}
	.feature-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 24px;
		margin-top: 56px;
	}
	.card {
		border: 0.5px solid var(--border);
		border-radius: 18px;
		overflow: hidden;
		background: #fff;
	}
	.card-illo {
		height: 220px;
		overflow: hidden;
	}
	.chip-mono {
		position: absolute;
		right: 14px;
		bottom: 14px;
		padding: 4px 12px;
		border-radius: 12px;
		background: var(--indigo);
		color: #fff;
		font-size: 12px;
		font-weight: 600;
		font-family: ui-monospace, monospace;
	}
	.fmt-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 10px;
	}
	.fmt {
		width: 74px;
		height: 54px;
		border-radius: 10px;
		background: #fff;
		border: 0.5px solid #e2e5ef;
		box-shadow: 0 2px 8px rgba(20, 30, 70, 0.07);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		font-weight: 700;
		color: var(--navy);
	}
	.fmt-navy {
		background: var(--navy);
		color: #fff;
		border-color: var(--navy);
	}
	.card-body {
		padding: 22px 24px;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.card-body h3 {
		margin: 0;
		font-size: 19px;
		font-weight: 700;
		color: var(--navy);
	}
	.card-body p {
		margin: 0;
		font-size: 15px;
		line-height: 1.55;
		color: var(--text-body);
	}

	/* ---- Two-column sections ---- */
	.two-col {
		display: flex;
		gap: 64px;
		align-items: center;
	}
	.col-text {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 18px;
		max-width: 520px;
	}
	.col-media {
		flex: 1;
		display: flex;
		justify-content: center;
	}
	.checklist {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 10px;
		font-size: 15.5px;
		color: var(--text-body-dark);
	}
	.checklist li {
		display: flex;
		gap: 10px;
		align-items: baseline;
	}
	.checklist li span {
		color: var(--indigo);
		font-weight: 700;
	}
	.col-btns {
		margin-top: 8px;
	}

	/* ---- Phones ---- */
	.phones {
		gap: 24px;
	}
	.phone {
		width: 250px;
		height: 520px;
		border-radius: 36px;
		background: #1c1d20;
		padding: 9px;
		box-shadow: 0 24px 60px rgba(20, 30, 70, 0.25);
		flex-shrink: 0;
	}
	.phone-offset {
		margin-top: 48px;
	}
	.phone-screen {
		width: 100%;
		height: 100%;
		border-radius: 28px;
		overflow: hidden;
		background: #fafafc;
		display: flex;
		flex-direction: column;
	}
	.phone-top {
		padding: 26px 14px 14px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.phone-top-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.phone-app {
		font-size: 9px;
		font-weight: 600;
		letter-spacing: 1.2px;
		color: var(--on-navy-eyebrow);
		text-transform: uppercase;
	}
	.phone-gear {
		width: 20px;
		height: 20px;
		border-radius: 10px;
		background: rgba(255, 255, 255, 0.12);
		display: flex;
		align-items: center;
		justify-content: center;
		color: #cdd6f2;
		font-size: 10px;
	}
	.phone-scan {
		height: 34px;
		border-radius: 9px;
		background: #fff;
		color: var(--navy);
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 5px;
		font-size: 12px;
		font-weight: 600;
	}
	.phone-list {
		flex: 1;
		padding: 13px 14px 0;
		display: flex;
		flex-direction: column;
		gap: 9px;
		overflow: hidden;
	}
	.phone-list-head {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}
	.phone-recent {
		font-size: 14px;
		font-weight: 700;
		color: #000;
	}
	.phone-seeall {
		font-size: 10px;
		color: var(--indigo);
	}
	.scan-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 9px;
	}
	.scan-card {
		background: #fff;
		border-radius: 10px;
		border: 0.5px solid #e8e8ee;
		overflow: hidden;
	}
	.scan-thumb {
		height: 54px;
	}
	.scan-meta {
		padding: 5px 9px 6px;
	}
	.scan-name {
		font-size: 10px;
		font-weight: 600;
		color: #000;
	}
	.scan-sub {
		font-size: 8px;
		color: var(--text-muted-2);
	}
	.scan-new {
		grid-column: 1 / -1;
		border-radius: 10px;
		border: 1px dashed #c9d2ea;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 5px;
		color: #7d8ab0;
		height: 34px;
		font-size: 9px;
		font-weight: 500;
	}
	.phone-foot {
		font-size: 8px;
		color: var(--text-muted-2);
		line-height: 1.4;
		padding: 0 2px;
	}
	.phone-nav {
		padding: 26px 13px 6px;
		display: flex;
		align-items: center;
		gap: 8px;
	}
	.phone-back {
		width: 20px;
		height: 20px;
		border-radius: 10px;
		background: #eef0f6;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--indigo);
		font-size: 10px;
	}
	.phone-title {
		flex: 1;
		text-align: center;
		font-size: 11px;
		font-weight: 600;
		color: #000;
	}
	.phone-3d-wrap {
		padding: 4px 13px 0;
		flex: 1;
	}
	.phone-3d {
		position: relative;
		height: 300px;
		border-radius: 12px;
		border: 0.5px solid var(--border);
		overflow: hidden;
	}
	.seg-toggle {
		position: absolute;
		top: 8px;
		left: 8px;
		display: flex;
		background: rgba(240, 241, 246, 0.95);
		border-radius: 6px;
		padding: 1px;
		z-index: 5;
	}
	.seg {
		padding: 3px 8px;
		font-size: 8px;
		font-weight: 500;
		color: #6a6d73;
	}
	.seg-on {
		border-radius: 5px;
		background: #fff;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);
		font-weight: 600;
		color: #000;
	}
	.tag-3d {
		position: absolute;
		padding: 2px 7px;
		border-radius: 8px;
		background: rgba(255, 255, 255, 0.92);
		box-shadow: 0 1px 3px rgba(20, 30, 70, 0.15);
		font-size: 7px;
		font-weight: 600;
		color: var(--navy);
		z-index: 4;
	}
	.chip-furn {
		position: absolute;
		bottom: 8px;
		left: 8px;
		padding: 3px 8px;
		border-radius: 9px;
		background: var(--indigo-tint);
		color: var(--indigo);
		font-size: 7px;
		font-weight: 600;
		z-index: 5;
	}
	.chip-rotate {
		position: absolute;
		bottom: 8px;
		right: 8px;
		padding: 3px 8px;
		border-radius: 9px;
		background: rgba(240, 241, 246, 0.95);
		font-size: 7px;
		font-weight: 500;
		color: var(--text-body);
		z-index: 5;
	}
	.phone-cta {
		padding: 8px 13px 16px;
	}
	.phone-cta-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 32px;
		border-radius: 9px;
		background: var(--navy);
		color: #fff;
		font-size: 11px;
		font-weight: 600;
	}

	/* ---- Splat ---- */
	.splat {
		border-bottom: 0.5px solid var(--border-soft);
	}
	.mac-window {
		width: 520px;
		max-width: 100%;
		border-radius: 18px;
		overflow: hidden;
		border: 0.5px solid #e2e4ee;
		box-shadow: 0 24px 60px rgba(20, 30, 70, 0.18);
	}
	.mac-bar {
		height: 40px;
		background: #f2f3f8;
		border-bottom: 0.5px solid #e2e4ee;
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 0 14px;
	}
	.mac-title {
		flex: 1;
		text-align: center;
		font-size: 12px;
		color: var(--text-muted);
	}
	.mac-media {
		display: block;
		height: 320px;
		position: relative;
		background: #171d33;
		overflow: hidden;
		cursor: pointer;
	}
	.mac-thumb {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
	.play-btn {
		position: absolute;
		inset: 0;
		margin: auto;
		width: 64px;
		height: 64px;
		border-radius: 32px;
		background: rgba(22, 29, 51, 0.75);
		backdrop-filter: blur(6px);
		-webkit-backdrop-filter: blur(6px);
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
	}
	.play-tri {
		width: 0;
		height: 0;
		border-left: 20px solid #fff;
		border-top: 12px solid transparent;
		border-bottom: 12px solid transparent;
		margin-left: 5px;
	}
	.watch-chip {
		position: absolute;
		bottom: 12px;
		left: 12px;
		padding: 4px 12px;
		border-radius: 10px;
		background: rgba(10, 14, 26, 0.6);
		backdrop-filter: blur(6px);
		-webkit-backdrop-filter: blur(6px);
		font-size: 12px;
		font-weight: 600;
		color: #e8ecf8;
	}
	.splat-eyebrow {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	.splat-icon {
		width: 34px;
		height: 34px;
		border-radius: 9px;
		display: block;
	}

	/* ---- Use cases ---- */
	.usecase-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
		margin-top: 56px;
	}
	.usecase {
		border: 0.5px solid var(--border);
		border-radius: 16px;
		padding: 24px;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.usecase h3 {
		margin: 0;
		font-size: 17px;
		font-weight: 700;
		color: var(--navy);
	}
	.usecase p {
		margin: 0;
		font-size: 14.5px;
		line-height: 1.55;
		color: var(--text-body);
	}

	/* ---- FAQ ---- */
	.faq {
		display: flex;
		gap: 64px;
	}
	.faq-intro {
		flex: 0 0 340px;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.faq-h2 {
		font-size: 34px;
		letter-spacing: -0.7px;
		line-height: 1.2;
	}
	.faq-intro .lead {
		font-size: 15px;
	}
	.faq-list {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.faq-item {
		padding: 22px 0;
		border-bottom: 0.5px solid #e2e4ee;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.faq-item:last-child {
		border-bottom: none;
	}
	.faq-item h3 {
		margin: 0;
		font-size: 18px;
		font-weight: 700;
		color: var(--navy);
	}
	.faq-item p {
		margin: 0;
		font-size: 15.5px;
		line-height: 1.6;
		color: var(--text-body);
	}

	/* ---- CTA ---- */
	.cta {
		background: var(--navy);
		background-image: linear-gradient(var(--grid-navy) 1px, transparent 1px), linear-gradient(90deg, var(--grid-navy) 1px, transparent 1px);
		background-size: 40px 40px;
		padding: 88px 64px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 22px;
		text-align: center;
	}
	.cta h2 {
		margin: 0;
		font-size: 42px;
		font-weight: 700;
		letter-spacing: -1px;
		color: #fff;
		line-height: 1.1;
	}
	.cta p {
		margin: 0;
		font-size: 18px;
		color: var(--on-navy-body);
	}
	.cta .hero-btns {
		margin-top: 6px;
	}

	/* ---- Responsive ---- */
	@media (max-width: 960px) {
		.hero {
			padding: 64px 22px 0;
		}
		.hero-h1 {
			font-size: 40px;
			letter-spacing: -1px;
		}
		.hero-sub {
			font-size: 17px;
		}
		.answer-bar {
			padding: 22px 22px;
		}
		.section {
			padding: 56px 22px;
		}
		.section-h2 {
			font-size: 30px;
		}
		.feature-grid,
		.usecase-grid {
			grid-template-columns: 1fr;
			margin-top: 36px;
		}
		.section-head {
			margin-bottom: 0;
		}
		.two-col {
			flex-direction: column;
			gap: 40px;
			align-items: stretch;
		}
		.col-text {
			max-width: none;
			order: 1;
		}
		.col-media {
			order: 2;
		}
		/* Splat: keep text first on mobile */
		.splat .col-media {
			order: 2;
		}
		.splat .col-text {
			order: 1;
		}
		.phones {
			flex-wrap: wrap;
		}
		.phone-offset {
			margin-top: 0;
		}
		.faq {
			flex-direction: column;
			gap: 32px;
		}
		.faq-intro {
			flex-basis: auto;
		}
		.cta {
			padding: 56px 22px;
		}
		.cta h2 {
			font-size: 32px;
		}
		.hero-btns {
			flex-wrap: wrap;
			justify-content: center;
		}
	}
</style>
