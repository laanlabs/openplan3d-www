<script>
	import { competitors, otherAlternatives, LAST_REVIEWED } from '$lib/competitors';
	import ComparisonTable from '$lib/ComparisonTable.svelte';

	const EDITOR = 'https://app.openplan3d.com';

	const faqs = [
		{ q: 'What is the best free alternative to magicplan?', a: 'OpenPlan3D is a free, open-source alternative to magicplan. Its companion app, OpenPlan3D Capture, scans rooms with iPhone LiDAR and Apple RoomPlan — like magicplan — but with no per-project fees, no subscription, and no account.' },
		{ q: 'Is there a free floor plan tool without watermarks?', a: 'Yes. OpenPlan3D exports floor plans as PNG, SVG, DXF, and PDF with no watermarks and no paid tier, unlike the free plans of RoomSketcher, Floorplanner, and Planner 5D.' },
		{ q: 'Which free floor plan software can export DXF for AutoCAD?', a: 'OpenPlan3D exports DXF for free. Most alternatives — including Floorplanner and SketchUp — only offer DXF or DWG export on a paid plan.' }
	];

	const jsonLd = `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
	})}<\/script>`;
</script>

<svelte:head>
	<title>Free Floor Plan Software — Alternatives to magicplan, RoomSketcher &amp; More | OpenPlan3D</title>
	<meta name="description" content="OpenPlan3D is a free, open-source alternative to paid floor plan apps like magicplan, RoomSketcher, Floorplanner, Planner 5D, and SketchUp. Compare features, pricing, watermarks, iPhone LiDAR scanning, and DXF export." />
	<link rel="canonical" href="https://www.openplan3d.com/alternatives" />
	<meta property="og:url" content="https://www.openplan3d.com/alternatives" />
	<meta property="og:title" content="Free Alternative to magicplan, RoomSketcher, Floorplanner &amp; SketchUp | OpenPlan3D" />
	<meta property="og:description" content="A free, open-source floor plan editor with no subscription, no watermarks, and no account. Compare OpenPlan3D to the popular paid apps." />
	<meta property="og:image" content="https://www.openplan3d.com/screenshots/2d-floorplan.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Free Alternative to magicplan, RoomSketcher, Floorplanner &amp; SketchUp" />
	<meta name="twitter:description" content="A free, open-source floor plan editor with no subscription, no watermarks, and no account." />
	<meta name="twitter:image" content="https://www.openplan3d.com/screenshots/2d-floorplan.png" />
	{@html jsonLd}
</svelte:head>

<div class="page">
	<!-- Hero -->
	<section class="hero">
		<div class="eyebrow-pill">Free &amp; open source · no subscription, no watermarks</div>
		<h1>The free alternative to paid floor plan apps</h1>
		<p class="hero-sub">magicplan, RoomSketcher, Floorplanner, Planner 5D, and SketchUp all put exports, watermark removal, or CAD formats behind a subscription. OpenPlan3D gives you 2D drawing, 3D visualization, iPhone LiDAR scanning, and DXF export — free and open source.</p>
		<div class="hero-btns">
			<a class="btn btn-white" href={EDITOR}>Start Designing — Free</a>
			<a class="btn btn-ghost" href="/capture">Get the iPhone App</a>
		</div>
	</section>

	<!-- Comparison table -->
	<section class="section">
		<div class="section-head">
			<div class="eyebrow">Side by side</div>
			<h2>How OpenPlan3D compares</h2>
		</div>
		<div class="compare-wrap">
			<ComparisonTable />
		</div>
		<p class="compare-note">Based on each product's publicly listed features and pricing as of {LAST_REVIEWED}. Competitors' plans and features change — check their own sites for the latest details.</p>

		<div class="more-alts">
			<h3>Also an alternative to</h3>
			<p>Shopping around? OpenPlan3D is a free, open-source alternative people also weigh against other floor plan and home design tools, including:</p>
			<ul class="alt-pills">
				{#each otherAlternatives as name}
					<li>{name}</li>
				{/each}
			</ul>
		</div>
	</section>

	<!-- Per-competitor -->
	<section class="section section-alt">
		<div class="section-head">
			<div class="eyebrow">Alternatives, one by one</div>
			<h2>What you get free with OpenPlan3D</h2>
		</div>
		<div class="vs-grid">
			{#each competitors as c}
				<article class="vs-card">
					<h3>OpenPlan3D vs {c.name}</h3>
					<p class="vs-what">{c.what}</p>
					<p class="vs-angle">{c.angle}</p>
				</article>
			{/each}
		</div>
	</section>

	<!-- FAQ -->
	<section class="section faq">
		<div class="faq-intro">
			<div class="eyebrow">FAQ</div>
			<h2>Free alternative questions</h2>
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
		<h2>Switch to free — no account needed</h2>
		<p>Open the editor in your browser and start designing right now.</p>
		<div class="hero-btns">
			<a class="btn btn-white" href={EDITOR}>Launch Editor</a>
			<a class="btn btn-ghost" href="/features">See all features</a>
		</div>
	</section>
</div>

<style>
	.page {
		max-width: 1440px;
		margin: 0 auto;
		background: #fff;
	}
	/* Hero */
	.hero {
		background: var(--navy);
		background-image: linear-gradient(var(--grid-navy) 1px, transparent 1px), linear-gradient(90deg, var(--grid-navy) 1px, transparent 1px);
		background-size: 40px 40px;
		padding: 80px 64px;
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
		font-size: 52px;
		font-weight: 700;
		letter-spacing: -1.2px;
		color: #fff;
		line-height: 1.1;
		max-width: 820px;
	}
	.hero-sub {
		margin: 20px 0 0;
		font-size: 19px;
		color: var(--on-navy-body);
		line-height: 1.55;
		max-width: 720px;
	}
	.hero-btns {
		display: flex;
		gap: 14px;
		margin-top: 32px;
		flex-wrap: wrap;
		justify-content: center;
	}
	.btn {
		display: inline-flex;
		align-items: center;
		gap: 8px;
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

	/* Sections */
	.section {
		padding: 80px 64px;
	}
	.section-alt {
		background: var(--surface-alt);
	}
	.section-head {
		display: flex;
		flex-direction: column;
		gap: 12px;
		max-width: 760px;
		margin-bottom: 40px;
	}
	.eyebrow {
		font-size: 13px;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: var(--indigo);
		font-weight: 600;
	}
	.section h2 {
		margin: 0;
		font-size: 34px;
		font-weight: 700;
		letter-spacing: -0.7px;
		color: var(--navy);
		line-height: 1.15;
	}
	.compare-wrap {
		margin-top: 8px;
	}
	.compare-note {
		margin: 18px 0 0;
		font-size: 13px;
		color: var(--text-muted);
		line-height: 1.5;
	}

	/* More alternatives (SEO name list) */
	.more-alts {
		margin-top: 40px;
		padding-top: 32px;
		border-top: 0.5px solid var(--border);
	}
	.more-alts h3 {
		margin: 0 0 8px;
		font-size: 18px;
		font-weight: 700;
		color: var(--navy);
	}
	.more-alts p {
		margin: 0 0 16px;
		font-size: 15px;
		line-height: 1.6;
		color: var(--text-body);
		max-width: 720px;
	}
	.alt-pills {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}
	.alt-pills li {
		padding: 7px 14px;
		border-radius: 20px;
		background: var(--surface-alt);
		border: 0.5px solid var(--border);
		font-size: 14px;
		font-weight: 500;
		color: var(--text-body-dark);
	}

	/* Per-competitor cards */
	.vs-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 20px;
	}
	.vs-card {
		background: #fff;
		border: 0.5px solid var(--border);
		border-radius: 16px;
		padding: 26px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.vs-card h3 {
		margin: 0;
		font-size: 19px;
		font-weight: 700;
		color: var(--navy);
	}
	.vs-what {
		margin: 0;
		font-size: 14.5px;
		line-height: 1.55;
		color: var(--text-muted);
	}
	.vs-angle {
		margin: 0;
		font-size: 15px;
		line-height: 1.6;
		color: var(--text-body);
	}

	/* FAQ */
	.faq {
		display: flex;
		gap: 64px;
	}
	.faq-intro {
		flex: 0 0 300px;
		display: flex;
		flex-direction: column;
		gap: 12px;
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

	/* CTA */
	.cta {
		background: var(--navy);
		background-image: linear-gradient(var(--grid-navy) 1px, transparent 1px), linear-gradient(90deg, var(--grid-navy) 1px, transparent 1px);
		background-size: 40px 40px;
		padding: 80px 64px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		text-align: center;
	}
	.cta h2 {
		margin: 0;
		font-size: 38px;
		font-weight: 700;
		letter-spacing: -0.9px;
		color: #fff;
		line-height: 1.1;
	}
	.cta p {
		margin: 0;
		font-size: 18px;
		color: var(--on-navy-body);
	}

	@media (max-width: 960px) {
		.hero {
			padding: 56px 22px;
		}
		.hero h1 {
			font-size: 34px;
		}
		.hero-sub {
			font-size: 17px;
		}
		.section {
			padding: 56px 22px;
		}
		.section h2 {
			font-size: 28px;
		}
		.vs-grid {
			grid-template-columns: 1fr;
		}
		.faq {
			flex-direction: column;
			gap: 28px;
		}
		.faq-intro {
			flex-basis: auto;
		}
		.cta {
			padding: 56px 22px;
		}
		.cta h2 {
			font-size: 28px;
		}
	}
</style>
