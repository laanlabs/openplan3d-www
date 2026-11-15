<script>
	const EDITOR = 'https://app.openplan3d.com';

	/**
	 * Each answer has a plain-text summary (`a`, also used for the FAQPage structured data)
	 * and the full steps (`body`, trusted HTML written here).
	 */
	const sections = [
		{
			id: '3d-view',
			title: 'Seeing inside your rooms in 3D',
			faqs: [
				{
					id: 'ceiling',
					q: 'Why is a ceiling blocking my view in 3D?',
					a: 'OpenPlan3D scans and 3D views have no ceiling: rooms are open at the top like a dollhouse, so you can look straight down into them. If a ceiling covers your rooms, you are most likely looking at a 3D mesh from another scanning app, or another floor is drawn on top of the one you want.',
					body: `
						<p>Scans made with the OpenPlan3D iPhone app record walls, doors, windows and furniture, not the ceiling. Both 3D views show your rooms open at the top like a dollhouse:</p>
						<ul>
							<li><strong>On iPhone:</strong> on the scan's review screen, switch to 3D and drag upward to tilt the view and look down into the rooms.</li>
							<li><strong>In the web editor:</strong> click <strong>3D</strong> at the top, then drag to orbit and scroll to zoom. <strong>Top-Down View</strong> (top right of the 3D view) looks straight down, and <strong>Make Walls Transparent</strong> lets you see through the walls.</li>
						</ul>
						<p>If something still covers your rooms, it's usually one of these:</p>
						<ul>
							<li><strong>Another floor is on top.</strong> With <strong>Show All Floors Stacked</strong> on, the floors above the one you're editing are drawn too, and with <strong>Other floors</strong> set to <strong>Solid</strong> they hide it. Set Other floors to <strong>Translucent</strong>, or switch back to <strong>Active Floor Only</strong>.</li>
							<li><strong>It's a mesh scan from another app.</strong> Apps that capture a textured 3D mesh record everything the camera saw, including the ceiling, and OpenPlan3D can't cut a ceiling out of an imported 3D model. Scan the rooms with the OpenPlan3D app's <strong>Start Scanning</strong> instead, or trim the ceiling off in the app that made the mesh.</li>
							<li><strong>The camera is inside a room.</strong> If you zoom in until the camera is below ceiling height, you see the room's ceiling from underneath. Zoom out, or use Top-Down View.</li>
						</ul>`
				}
			]
		},
		{
			id: 'floors',
			title: 'Houses with more than one floor',
			faqs: [
				{
					id: 'scan-floors',
					q: 'Can I scan a house with several floors, or do I need separate projects?',
					a: 'Scan each floor as its own scan on the iPhone. Each scan makes a 2D floor plan by itself; to see the whole house in 3D, combine the scans as floors of one plan in the web editor.',
					body: `
						<p>The iPhone app scans one floor at a time: walk one floor, tap Finish, then start a new scan for the next floor. You don't need to scan the stairs.</p>
						<ul>
							<li><strong>Separate scans</strong> are all you need for a 2D floor plan of each level.</li>
							<li><strong>One plan with several floors</strong> gives you a 3D model of the whole house, with each floor at its real height and stairs between them. Build it in the web editor, as described in the next answer.</li>
						</ul>`
				},
				{
					id: 'combine-scans',
					q: 'How do I combine scans of different floors into one plan?',
					a: 'Open one floor’s scan in the web editor, add a floor above or below it for each other level, then import each other scan onto its floor with Import RoomPlan → Add to this plan.',
					body: `
						<ol>
							<li><strong>Open one floor's scan</strong>, such as the main level, in the web editor with <strong>Send to OpenPlan3D</strong> on the iPhone. It becomes the plan's Ground Floor.</li>
							<li><strong>Add the other floors.</strong> Click <strong>+</strong> next to the floor name at the top of the editor. Choose <strong>Empty floor</strong> under <strong>Add Top Floor</strong> for each level above, or under <strong>Add Floor Below</strong> for each level underneath, such as a basement. To give a floor your own name, click the pencil next to the floor name.</li>
							<li><strong>Export the other scans from the iPhone.</strong> For each other floor's scan, tap <strong>Export</strong> on its review screen, choose <strong>Export Editable Plan (JSON)</strong>, and save or AirDrop the file to your computer.</li>
							<li><strong>Import each scan onto its floor.</strong> In the editor's Build panel, click <strong>Import RoomPlan</strong> and choose the file. Select <strong>Add to this plan</strong>, pick the floor it belongs on under <strong>Floor</strong>, and click <strong>Import</strong>.</li>
							<li><strong>Line it up.</strong> The scan arrives selected, so drag or rotate it into place. To see the floor below as a guide while you do, open <strong>Layers</strong> at the bottom of the 2D plan and turn on <strong>Floor Below</strong>.</li>
							<li><strong>Set each floor's height</strong>, as described in the next answer.</li>
						</ol>
						<p>If a scan ends up on the wrong floor, <a href="#move-to-floor">move it</a> instead of importing it again.</p>`
				},
				{
					id: 'move-to-floor',
					q: 'How do I move walls or furniture to another floor?',
					a: 'Select what you want to move, click the layers button in the toolbar above the selection, and choose Move to and the floor. Everything keeps its position, and walls take their doors and windows with them.',
					body: `
						<ol>
							<li><strong>Select it:</strong> click an item, drag a box around several, or press Ctrl+A (⌘A on a Mac) to select everything on the floor. A scan you just imported is already selected.</li>
							<li><strong>Move it:</strong> click the layers button in the toolbar above the selection and choose <strong>Move to</strong> the floor you want. The editor switches to that floor with the moved items still selected.</li>
						</ol>
						<p>Everything keeps its exact position, so walls stay lined up with the floors above and below:</p>
						<ul>
							<li><strong>Walls</strong> take their doors and windows with them.</li>
							<li><strong>A named room</strong> moves when all of its walls do.</li>
							<li><strong>Undo</strong> puts everything back in one step.</li>
						</ul>
						<p>The button only appears when the plan has more than one floor.</p>`
				},
				{
					id: 'floor-heights',
					q: 'How do I set floor heights, or add a basement?',
					a: 'Open Settings, then the Project tab, and enter each floor’s elevation in centimetres under Floor elevations. Negative values place a floor below ground.',
					body: `
						<p>Click the gear icon at the top of the editor to open <strong>Settings</strong>, then the <strong>Project</strong> tab. Under <strong>Floor elevations</strong>, enter each floor's height above ground in centimetres (1 ft ≈ 30.5 cm). Floors start 300 cm apart.</p>
						<ul>
							<li><strong>A basement</strong> added with <strong>Add Floor Below</strong> starts 300 cm under the lowest floor, so at −300 under a ground floor at 0. Change it to your real depth, for example −280.</li>
							<li><strong>Floors keep their order:</strong> Add Floor Below goes under the lowest floor and Add Top Floor goes above the highest. Keep each floor's elevation higher than the one below it.</li>
							<li><strong>A good way to measure:</strong> count the steps between two floors and multiply by the step height. That's usually about 18 cm (7 in), so 15 steps is about 270 cm.</li>
						</ul>`
				},
				{
					id: 'split-level',
					q: 'How do I model a split-level house, or an entry between two floors?',
					a: 'Make the in-between level its own floor, with an elevation between the floors above and below it, then add a stair up and a stair down from it.',
					body: `
						<p>Treat each level you can stand on as its own floor, and name each one with the pencil next to the floor name. For example, a daylight basement, a front entry halfway up, and an upstairs living area become three floors:</p>
						<ul>
							<li><strong>Basement:</strong> at elevation 0.</li>
							<li><strong>Entry:</strong> at about 140 cm, or wherever your steps say.</li>
							<li><strong>Upstairs:</strong> at about 280 cm.</li>
						</ul>
						<p>A small level like an entry can be just its own walls. On the entry floor, add one stair going <strong>Up</strong> to the living area and one going <strong>Down</strong> to the basement. Each stair automatically reaches the floor it leads to (see the next section).</p>`
				}
			]
		},
		{
			id: 'stairs',
			title: 'Stairs',
			faqs: [
				{
					id: 'add-stairs',
					q: 'How do I add stairs between floors?',
					a: 'In the Build panel choose Add Stairs and click the plan. In Stair Properties, pick the shape, number of risers and direction. An Up stair climbs to the floor above and a Down stair descends to the floor below, at whatever height those floors are.',
					body: `
						<ol>
							<li><strong>Place it:</strong> in the Build panel, choose <strong>Add Stairs</strong> and click the plan where the stairs start.</li>
							<li><strong>Set it up:</strong> select the stairs to open <strong>Stair Properties</strong>. Choose the shape (<strong>Straight</strong>, <strong>L-Shaped</strong>, <strong>U-Shaped</strong> or <strong>Spiral</strong>) and the number of <strong>Risers</strong>, then drag and rotate the stairs into place.</li>
							<li><strong>Pick a direction:</strong> an <strong>Up</strong> stair climbs from its floor to the next floor above. A <strong>Down</strong> stair descends from its floor to the floor below. You don't set a height: the stairs span the gap between the two floors' elevations.</li>
						</ol>
						<p>You only need each flight once, on the floor at either end. If your plans show it on both floors (Up below, Down above, in the same spot), the two line up as one flight in 3D.</p>`
				},
				{
					id: 'landings',
					q: 'Can stairs have a landing?',
					a: 'L-shaped and U-shaped stairs include a landing where they turn. For a landing you can walk off, like a split-level entry, make that level its own floor.',
					body: `
						<ul>
							<li><strong>A landing where the stairs turn:</strong> choose <strong>L-Shaped</strong> or <strong>U-Shaped</strong> in Stair Properties. The landing is part of the stair.</li>
							<li><strong>A landing you can walk off</strong>, such as an entry or a half-level between two floors: make it its own floor at its own elevation. Then add a stair from it up to the floor above and one down to the floor below, as in <a href="#split-level">split-level houses</a>.</li>
						</ul>`
				},
				{
					id: 'stairwell',
					q: 'How do I make a stairwell opening and see the stairs between floors in 3D?',
					a: 'On the upper floor, enclose the opening with walls, select that room and turn on Open to floor below. In 3D, Show All Floors Stacked shows the stairs running between floors, and Active Floor Only shows the stair below through the opening.',
					body: `
						<ol>
							<li><strong>Enclose the opening:</strong> on the upper floor, draw walls around the opening over the stairs. Lower their height in Wall Properties if you want railings instead of full walls.</li>
							<li><strong>Remove the floor:</strong> click inside that space to select the room, then turn on <strong>Open to floor below</strong>. This removes the floor there and leaves it out of the floor area.</li>
							<li><strong>Check it in 3D:</strong> click the layers button at the top right of the 3D view.
								<ul>
									<li><strong>Show All Floors Stacked</strong> draws every floor at its height, with the stairs between them.</li>
									<li><strong>Active Floor Only</strong> shows the floor you're on, and you can still look down through the opening at the stairs below.</li>
								</ul>
							</li>
						</ol>
						<p>On iPhone, the same setting is in the room's properties: <strong>Open to floor below</strong>.</p>`
				}
			]
		}
	];

	const jsonLd = `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: sections.flatMap((s) =>
			s.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
		)
	})}<\/script>`;
</script>

<svelte:head>
	<title>Help: Floors, Stairs &amp; 3D View | OpenPlan3D</title>
	<meta name="description" content="How to see inside your rooms in 3D, scan and combine several floors, set floor heights for basements and split-levels, and add stairs, landings and stairwell openings in OpenPlan3D." />
	<link rel="canonical" href="https://openplan3d.com/help" />
	<meta property="og:url" content="https://openplan3d.com/help" />
	<meta property="og:title" content="OpenPlan3D Help: Floors, Stairs &amp; 3D View" />
	<meta property="og:description" content="Step-by-step answers for multi-floor houses, basements, split-levels, stairs and the 3D view." />
	<meta property="og:image" content="https://openplan3d.com/screenshots/og-2d-floorplan.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	{@html jsonLd}
</svelte:head>

<div class="page">
	<section class="hero">
		<div class="eyebrow-pill">Help &amp; FAQ</div>
		<h1>Floors, stairs and the 3D view</h1>
		<p class="hero-sub">Step-by-step answers for seeing inside your rooms in 3D, putting several floors in one plan, and connecting them with stairs.</p>
	</section>

	<section class="section">
		<nav class="toc" aria-label="On this page">
			{#each sections as s}
				<div class="toc-group">
					<a class="toc-h" href={`#${s.id}`}>{s.title}</a>
					<ul>
						{#each s.faqs as f}
							<li><a href={`#${f.id}`}>{f.q}</a></li>
						{/each}
					</ul>
				</div>
			{/each}
		</nav>

		{#each sections as s}
			<div class="help-section" id={s.id}>
				<h2>{s.title}</h2>
				{#each s.faqs as f}
					<article class="faq-item" id={f.id}>
						<h3><a href={`#${f.id}`}>{f.q}</a></h3>
						<div class="answer">{@html f.body}</div>
					</article>
				{/each}
			</div>
		{/each}

		<p class="more">
			Still stuck? Ask on <a href="https://github.com/theLodgeBots/open3dFloorplan/issues" target="_blank" rel="noopener">GitHub</a>, or see the <a href="/#faq">general FAQ</a>.
		</p>
	</section>

	<section class="cta">
		<h2>Try it in your browser</h2>
		<p>Free, open source, no signup.</p>
		<div class="hero-btns">
			<a class="btn btn-white" href={EDITOR}>Open Editor</a>
			<a class="btn btn-ghost" href="/capture">Get the iPhone App</a>
		</div>
	</section>
</div>

<style>
	.page {
		background: #fff;
	}

	.hero {
		background: var(--navy);
		background-image: linear-gradient(var(--grid-navy) 1px, transparent 1px), linear-gradient(90deg, var(--grid-navy) 1px, transparent 1px);
		background-size: 40px 40px;
		padding: 72px var(--edge);
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
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
	.hero h1 {
		margin: 0;
		font-size: 48px;
		font-weight: 700;
		letter-spacing: -1.1px;
		color: #fff;
		line-height: 1.1;
		max-width: 820px;
	}
	.hero-sub {
		margin: 20px 0 0;
		font-size: 19px;
		color: var(--on-navy-body);
		line-height: 1.55;
		max-width: 680px;
	}

	.section {
		padding: 64px var(--edge) 80px;
	}

	.toc {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
		margin-bottom: 56px;
		padding: 24px 26px;
		background: var(--surface-alt);
		border: 0.5px solid var(--border);
		border-radius: 16px;
	}
	.toc-h {
		display: block;
		font-size: 13px;
		letter-spacing: 1.5px;
		text-transform: uppercase;
		color: var(--indigo);
		font-weight: 600;
		margin-bottom: 10px;
	}
	.toc ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.toc li a {
		font-size: 14.5px;
		line-height: 1.45;
		color: var(--text-body-dark);
	}
	.toc a:hover {
		color: var(--indigo);
	}

	.help-section {
		max-width: 820px;
		margin: 0 auto 48px;
		scroll-margin-top: 80px;
	}
	.help-section h2 {
		margin: 0 0 8px;
		font-size: 30px;
		font-weight: 700;
		letter-spacing: -0.6px;
		color: var(--navy);
		line-height: 1.2;
	}

	.faq-item {
		padding: 26px 0;
		border-bottom: 0.5px solid #e2e4ee;
		scroll-margin-top: 80px;
	}
	.faq-item:last-child {
		border-bottom: none;
	}
	.faq-item h3 {
		margin: 0 0 12px;
		font-size: 20px;
		font-weight: 700;
		line-height: 1.35;
	}
	.faq-item h3 a {
		color: var(--navy);
	}
	.faq-item h3 a:hover {
		color: var(--indigo);
	}
	.answer :global(p),
	.answer :global(li) {
		font-size: 16px;
		line-height: 1.65;
		color: var(--text-body);
	}
	.answer :global(p) {
		margin: 0 0 12px;
	}
	.answer :global(ul),
	.answer :global(ol) {
		margin: 0 0 12px;
		padding-left: 22px;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.answer :global(ul) {
		list-style: disc;
	}
	.answer :global(ol) {
		list-style: decimal;
	}
	.answer :global(li ul) {
		margin: 8px 0 0;
		list-style: circle;
	}
	.answer :global(li::marker) {
		color: var(--indigo);
		font-weight: 600;
	}
	.answer :global(strong) {
		color: var(--text-body-dark);
		font-weight: 600;
	}
	.answer :global(a) {
		color: var(--indigo);
		text-decoration: underline;
		text-underline-offset: 2px;
	}

	.more {
		max-width: 820px;
		margin: 0 auto;
		font-size: 15.5px;
		color: var(--text-body);
	}
	.more a {
		color: var(--indigo);
		text-decoration: underline;
		text-underline-offset: 2px;
	}

	.cta {
		background: var(--navy);
		background-image: linear-gradient(var(--grid-navy) 1px, transparent 1px), linear-gradient(90deg, var(--grid-navy) 1px, transparent 1px);
		background-size: 40px 40px;
		padding: 72px var(--edge);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 18px;
		text-align: center;
	}
	.cta h2 {
		margin: 0;
		font-size: 36px;
		font-weight: 700;
		letter-spacing: -0.8px;
		color: #fff;
		line-height: 1.1;
	}
	.cta p {
		margin: 0;
		font-size: 18px;
		color: var(--on-navy-body);
	}
	.hero-btns {
		display: flex;
		gap: 14px;
		margin-top: 8px;
		flex-wrap: wrap;
		justify-content: center;
	}
	.btn {
		display: inline-flex;
		align-items: center;
		font-weight: 600;
		white-space: nowrap;
		height: 52px;
		padding: 0 28px;
		border-radius: 13px;
		font-size: 16px;
		transition: background-color 0.15s ease;
	}
	.btn-white {
		background: #fff;
		color: var(--navy) !important;
	}
	.btn-white:hover {
		background: #eef0f6;
	}
	.btn-ghost {
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.22);
		color: #fff !important;
	}
	.btn-ghost:hover {
		background: rgba(255, 255, 255, 0.18);
	}

	@media (max-width: 960px) {
		.hero {
			padding: 52px 22px;
		}
		.hero h1 {
			font-size: 32px;
		}
		.hero-sub {
			font-size: 17px;
		}
		.section {
			padding: 40px 22px 56px;
		}
		.toc {
			grid-template-columns: 1fr;
			padding: 20px;
			margin-bottom: 40px;
		}
		.help-section h2 {
			font-size: 25px;
		}
		.faq-item h3 {
			font-size: 18px;
		}
		.cta {
			padding: 52px 22px;
		}
		.cta h2 {
			font-size: 28px;
		}
	}
</style>
