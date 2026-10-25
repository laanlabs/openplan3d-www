<!--
	Footer apps bar: the same cross-promotion strip on every Laan Labs www site.
	CANONICAL COPY — identical in every *-www repo; edit all copies together (see apps.ts).

	Usage: <AppsBar current="openplan3d" />   inside the host site's content container.
	Every link opens in a new window; the full catalogue with blurbs is AppsPage.svelte (/apps).
	Theming: the host sets CSS variables on `.lab-bar` in app.css —
	  --lab-fg, --lab-muted, --lab-line, --lab-tile-bg (hover / current tile), --lab-accent.
	Analytics: every click fires `app_bar_click` through the site's `track()` in $lib/analytics
	with { app, link_url, placement: 'footer_bar', site }.
-->
<script lang="ts">
	import { LAAN_APPS, STUDIO } from './apps';
	import { track } from '$lib/analytics';

	let { current, theme = 'light' }: { current: string; theme?: 'light' | 'dark' } = $props();

	const labs = LAAN_APPS.filter((a) => a.group === 'labs');
	const open = LAAN_APPS.filter((a) => a.group === 'open');

	const onClick = (slug: string, url: string) =>
		track('app_bar_click', { app: slug, link_url: url, placement: 'footer_bar', site: current });
</script>

{#snippet tile(app: { slug: string; name: string; url: string; tagline: string })}
	{#if app.slug === current}
		<li class="lab-tile is-current" aria-current="page">
			<img class="lab-icon" src="/apps/{app.slug}.webp" width="44" height="44" alt="" />
			<span class="lab-text">
				<span class="lab-name">{app.name}</span>
				<span class="lab-tag">You're here</span>
			</span>
		</li>
	{:else}
		<li>
			<a class="lab-tile" href={app.url} target="_blank" rel="noopener" onclick={() => onClick(app.slug, app.url)}>
				<img class="lab-icon" src="/apps/{app.slug}.webp" width="44" height="44" decoding="async" alt="" />
				<span class="lab-text">
					<span class="lab-name">{app.name}</span>
					<span class="lab-tag">{app.tagline}</span>
				</span>
			</a>
		</li>
	{/if}
{/snippet}

<section class="lab-bar" class:dark={theme === 'dark'} aria-label="More apps from Laan Labs">
	<div class="lab-group">
		<h2 class="lab-h">More apps from Laan Labs</h2>
		<ul class="lab-list">
			{#each labs as app (app.slug)}{@render tile(app)}{/each}
		</ul>
	</div>
	<div class="lab-group">
		<h2 class="lab-h">Open apps</h2>
		<ul class="lab-list">
			{#each open as app (app.slug)}{@render tile(app)}{/each}
		</ul>
	</div>
	<div class="lab-group">
		<h2 class="lab-h">Made by</h2>
		<ul class="lab-list">
			{@render tile(STUDIO)}
		</ul>
	</div>
</section>

<style>
	.lab-bar {
		--fg: var(--lab-fg, #111318);
		--muted: var(--lab-muted, #6b7079);
		--line: var(--lab-line, rgba(0, 0, 0, 0.1));
		--tile: var(--lab-tile-bg, rgba(0, 0, 0, 0.045));
		--accent: var(--lab-accent, #2f5d8a);
		display: flex;
		flex-direction: column;
		gap: 18px;
		padding: 28px 0 26px;
		border-top: 1px solid var(--line);
		color: var(--fg);
		font-family: inherit;
	}
	.lab-bar.dark {
		--fg: var(--lab-fg, #f1f3f7);
		--muted: var(--lab-muted, #9aa3b2);
		--line: var(--lab-line, rgba(255, 255, 255, 0.12));
		--tile: var(--lab-tile-bg, rgba(255, 255, 255, 0.08));
		--accent: var(--lab-accent, #7fb0ff);
	}
	.lab-group {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
	.lab-h {
		margin: 0;
		font-size: 11.5px;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--muted);
	}
	/* Phones: one scrollable row that bleeds to the screen edge; icons stay aligned with the headings. */
	.lab-list {
		list-style: none;
		margin: 0 -16px;
		padding: 0 9px;
		display: flex;
		gap: 2px 6px;
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
		scrollbar-width: none;
	}
	.lab-list::-webkit-scrollbar {
		display: none;
	}
	.lab-list > li {
		flex: 0 0 auto;
	}
	@media (min-width: 768px) {
		.lab-list {
			margin: 0 -7px;
			padding: 0;
			flex-wrap: wrap;
			overflow: visible;
		}
	}
	.lab-tile {
		display: flex;
		align-items: center;
		gap: 11px;
		width: 236px;
		padding: 7px 12px 7px 7px;
		border-radius: 14px;
		color: inherit;
		text-decoration: none;
		transition: background-color 0.15s ease, transform 0.15s ease;
	}
	a.lab-tile:hover,
	a.lab-tile:focus-visible {
		background: var(--tile);
		text-decoration: none;
	}
	a.lab-tile:hover .lab-name {
		color: var(--accent);
	}
	a.lab-tile:active {
		transform: scale(0.985);
	}
	.lab-tile.is-current {
		background: var(--tile);
		cursor: default;
	}
	.lab-icon {
		flex: none;
		width: 44px;
		height: 44px;
		border-radius: 11px;
		box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.08);
		background: var(--tile);
		object-fit: cover;
	}
	.lab-text {
		display: flex;
		flex-direction: column;
		min-width: 0;
		line-height: 1.25;
	}
	.lab-name {
		font-size: 13.5px;
		font-weight: 650;
		color: var(--fg);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.lab-tag {
		margin-top: 2px;
		font-size: 12px;
		color: var(--muted);
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		overflow: hidden;
	}
	.is-current .lab-tag {
		color: var(--accent);
		font-weight: 600;
	}
</style>
