<!--
	/apps page body: every Laan Labs app with icon, platform and blurb, for cross-marketing.
	CANONICAL COPY — identical in every *-www repo; edit all copies together (see apps.ts).

	Usage: <AppsPage current="openplan3d" />   inside the host site's content container; the host
	route supplies <head> metadata, header and footer. Theming: the same CSS variables as the
	footer bar, set on `.lab-page` in app.css (--lab-fg, --lab-muted, --lab-line, --lab-tile-bg,
	--lab-accent, --lab-card-bg). Every link opens in a new window and fires `app_page_click`
	through the site's `track()` with { app, link_url, placement: 'apps_page', site }.
-->
<script lang="ts">
	import { LAAN_APPS, STUDIO } from './apps';
	import { track } from '$lib/analytics';

	let { current }: { current: string } = $props();

	const open = LAAN_APPS.filter((a) => a.group === 'open');
	const labs = LAAN_APPS.filter((a) => a.group === 'labs');
	const here = LAAN_APPS.find((a) => a.slug === current);

	const onClick = (slug: string, url: string) =>
		track('app_page_click', { app: slug, link_url: url, placement: 'apps_page', site: current });
</script>

{#snippet card(app: { slug: string; name: string; url: string; blurb: string; platform: string })}
	{#if app.slug === current}
		<li class="lab-card is-current" aria-current="page">
			<img class="lab-card-icon" src="/apps/{app.slug}.webp" width="64" height="64" alt="" />
			<div class="lab-card-body">
				<div class="lab-card-head">
					<h3 class="lab-card-name">{app.name}</h3>
					<span class="lab-card-platform">{app.platform}</span>
				</div>
				<p class="lab-card-blurb">{app.blurb}</p>
				<span class="lab-card-cta">You're here</span>
			</div>
		</li>
	{:else}
		<li>
			<a class="lab-card" href={app.url} target="_blank" rel="noopener" onclick={() => onClick(app.slug, app.url)}>
				<img class="lab-card-icon" src="/apps/{app.slug}.webp" width="64" height="64" decoding="async" alt="" />
				<div class="lab-card-body">
					<div class="lab-card-head">
						<h3 class="lab-card-name">{app.name}</h3>
						<span class="lab-card-platform">{app.platform}</span>
					</div>
					<p class="lab-card-blurb">{app.blurb}</p>
					<span class="lab-card-cta">Visit {app.url.replace(/^https?:\/\//, '').replace(/\/$/, '')} ↗</span>
				</div>
			</a>
		</li>
	{/if}
{/snippet}

<div class="lab-page">
	<header class="lab-hero">
		<p class="lab-eyebrow">From Laan Labs</p>
		<h1 class="lab-title">One studio, a family of apps</h1>
		<p class="lab-lede">
			{here ? `${here.name} is one of ` : 'These are '}the apps built by Laan Labs. The open apps are free and open source and share file formats, so a house plan, a kitchen, a garden or a catio moves between them. Every link below opens the app's own site in a new window.
		</p>
	</header>

	<section class="lab-section" aria-labelledby="lab-open">
		<h2 id="lab-open" class="lab-h2">Open apps</h2>
		<p class="lab-sub">Free, open source, no account. Built on a shared 3D engine and open file formats.</p>
		<ul class="lab-grid">
			{#each open as app (app.slug)}{@render card(app)}{/each}
		</ul>
	</section>

	<section class="lab-section" aria-labelledby="lab-labs">
		<h2 id="lab-labs" class="lab-h2">More from Laan Labs</h2>
		<p class="lab-sub">Computer vision and 3D capture tools from the same studio.</p>
		<ul class="lab-grid">
			{#each labs as app (app.slug)}{@render card(app)}{/each}
		</ul>
	</section>

	<section class="lab-section" aria-labelledby="lab-studio">
		<h2 id="lab-studio" class="lab-h2">The studio</h2>
		<ul class="lab-grid lab-grid-one">
			{@render card(STUDIO)}
		</ul>
	</section>
</div>

<style>
	.lab-page {
		--fg: var(--lab-fg, #111318);
		--muted: var(--lab-muted, #6b7079);
		--line: var(--lab-line, rgba(0, 0, 0, 0.1));
		--tile: var(--lab-tile-bg, rgba(0, 0, 0, 0.045));
		--accent: var(--lab-accent, #2f5d8a);
		--card: var(--lab-card-bg, #ffffff);
		color: var(--fg);
		padding: 40px 0 56px;
	}
	.lab-hero {
		max-width: 44rem;
		padding: 8px 0 12px;
	}
	.lab-eyebrow {
		margin: 0 0 10px;
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--accent);
	}
	.lab-title {
		margin: 0;
		font-size: clamp(30px, 4.5vw, 44px);
		font-weight: 800;
		letter-spacing: -0.02em;
		line-height: 1.1;
		color: var(--fg);
	}
	.lab-lede {
		margin: 16px 0 0;
		font-size: 17px;
		line-height: 1.6;
		color: var(--muted);
	}
	.lab-section {
		margin-top: 44px;
	}
	.lab-h2 {
		margin: 0;
		font-size: 22px;
		font-weight: 750;
		letter-spacing: -0.01em;
		color: var(--fg);
	}
	.lab-sub {
		margin: 6px 0 0;
		font-size: 14.5px;
		color: var(--muted);
	}
	.lab-grid {
		list-style: none;
		margin: 18px 0 0;
		padding: 0;
		display: grid;
		gap: 14px;
		grid-template-columns: 1fr;
	}
	@media (min-width: 640px) {
		.lab-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media (min-width: 1024px) {
		.lab-grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
		.lab-grid-one {
			grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
		}
	}
	.lab-card {
		height: 100%;
		display: flex;
		gap: 16px;
		padding: 18px;
		border: 1px solid var(--line);
		border-radius: 18px;
		background: var(--card);
		color: inherit;
		text-decoration: none;
		transition: border-color 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease;
	}
	a.lab-card:hover,
	a.lab-card:focus-visible {
		border-color: var(--accent);
		box-shadow: 0 6px 24px -12px rgba(0, 0, 0, 0.25);
		text-decoration: none;
	}
	a.lab-card:hover .lab-card-cta {
		text-decoration: underline;
	}
	.lab-card.is-current {
		background: var(--tile);
	}
	.lab-card-icon {
		flex: none;
		width: 64px;
		height: 64px;
		border-radius: 15px;
		box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.08);
		background: var(--tile);
		object-fit: cover;
	}
	.lab-card-body {
		display: flex;
		flex-direction: column;
		gap: 6px;
		min-width: 0;
	}
	.lab-card-head {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		column-gap: 10px;
		row-gap: 2px;
	}
	.lab-card-name {
		margin: 0;
		font-size: 17px;
		font-weight: 700;
		color: var(--fg);
	}
	.lab-card-platform {
		font-size: 11.5px;
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--muted);
	}
	.lab-card-blurb {
		margin: 0;
		font-size: 14.5px;
		line-height: 1.55;
		color: var(--muted);
	}
	.lab-card-cta {
		margin-top: auto;
		padding-top: 4px;
		font-size: 13.5px;
		font-weight: 650;
		color: var(--accent);
	}
	.is-current .lab-card-cta {
		color: var(--muted);
	}
</style>
