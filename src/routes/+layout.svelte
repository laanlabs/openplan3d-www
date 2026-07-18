<script>
	import '../app.css';
	import { trackOutbound } from '$lib/analytics';

	let { children } = $props();
	let mobileMenuOpen = $state(false);

	const GITHUB = 'https://github.com/theLodgeBots/open3dFloorplan';
	const EDITOR = 'https://app.openplan3d.com';
	const SPLAT = 'https://3dsplatapp.com/';
</script>

<!-- Nav -->
<nav class="nav">
	<a class="brand" href="/" onclick={() => (mobileMenuOpen = false)}>
		<span class="brand-mark" aria-hidden="true">❐</span>
		<span class="brand-name">OpenPlan3D</span>
	</a>

	<div class="nav-links">
		<a href="/features">Features</a>
		<a href="/capture">iPhone App</a>
		<a href={SPLAT} target="_blank" rel="noopener" onclick={() => trackOutbound('nav_3dsplatapp', SPLAT)}>3D Splat App</a>
		<a href="/#faq">FAQ</a>
		<a href={GITHUB} target="_blank" rel="noopener">GitHub</a>
		<a class="btn-navy" href={EDITOR}>Open Editor</a>
	</div>

	<button class="hamburger" aria-label="Toggle menu" onclick={() => (mobileMenuOpen = !mobileMenuOpen)}>
		<svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			{#if mobileMenuOpen}
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			{:else}
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
			{/if}
		</svg>
	</button>
</nav>

{#if mobileMenuOpen}
	<div class="mobile-menu">
		<a href="/features" onclick={() => (mobileMenuOpen = false)}>Features</a>
		<a href="/capture" onclick={() => (mobileMenuOpen = false)}>iPhone App</a>
		<a href={SPLAT} target="_blank" rel="noopener" onclick={() => { trackOutbound('nav_3dsplatapp', SPLAT); mobileMenuOpen = false; }}>3D Splat App</a>
		<a href="/#faq" onclick={() => (mobileMenuOpen = false)}>FAQ</a>
		<a href={GITHUB} target="_blank" rel="noopener" onclick={() => (mobileMenuOpen = false)}>GitHub</a>
		<a class="btn-navy" href={EDITOR}>Open Editor</a>
	</div>
{/if}

<!-- Page content -->
{@render children()}

<!-- Footer -->
<footer class="footer">
	<div class="footer-inner">
		<div class="footer-brand">
			<a class="brand" href="/">
				<span class="brand-mark brand-mark-sm" aria-hidden="true">❐</span>
				<span class="brand-name">OpenPlan3D</span>
			</a>
			<p>Free open-source floor plan editor with 2D drawing, 3D visualization, and iPhone LiDAR room scanning. No signup required.</p>
		</div>
		<div class="footer-cols">
			<div class="footer-col">
				<div class="footer-h">Product</div>
				<a href={EDITOR}>Open Editor</a>
				<a href="/capture">iPhone App</a>
				<a href="/features">Features</a>
				<a href="/#faq">FAQ</a>
			</div>
			<div class="footer-col">
				<div class="footer-h">Open Source</div>
				<a href={GITHUB} target="_blank" rel="noopener">GitHub</a>
				<a href={`${GITHUB}#contributing`} target="_blank" rel="noopener">Contributing</a>
				<a href={`${GITHUB}/blob/main/LICENSE`} target="_blank" rel="noopener">License</a>
			</div>
			<div class="footer-col">
				<div class="footer-h">More Tools</div>
				<a href={SPLAT} target="_blank" rel="noopener" onclick={() => trackOutbound('footer_3dsplatapp', SPLAT)}>3D Splat App — Gaussian Splatting on Mac</a>
			</div>
		</div>
	</div>
	<div class="footer-legal">© {new Date().getFullYear()} theLodgeStudio · <a href="/privacy">Privacy Policy</a></div>
</footer>

<style>
	/* ---- Nav ---- */
	.nav {
		position: sticky;
		top: 0;
		z-index: 50;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 18px 64px;
		background: rgba(255, 255, 255, 0.92);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border-bottom: 0.5px solid var(--border-soft);
	}
	.brand {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	.brand-mark {
		width: 30px;
		height: 30px;
		border-radius: 8px;
		background: var(--navy);
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 15px;
	}
	.brand-mark-sm {
		width: 26px;
		height: 26px;
		border-radius: 7px;
		font-size: 13px;
	}
	.brand-name {
		font-size: 17px;
		font-weight: 700;
		color: var(--navy);
		letter-spacing: -0.2px;
	}
	.nav-links {
		display: flex;
		align-items: center;
		gap: 28px;
		font-size: 15px;
		color: var(--text-body-dark);
	}
	.nav-links a {
		color: var(--text-body-dark);
	}
	.nav-links a:hover {
		color: var(--navy);
	}
	.btn-navy {
		height: 40px;
		padding: 0 20px;
		border-radius: 10px;
		background: var(--navy);
		color: #fff !important;
		display: flex;
		align-items: center;
		font-size: 15px;
		font-weight: 600;
		transition: background-color 0.15s ease;
	}
	.btn-navy:hover {
		background: var(--navy-hover);
	}
	.hamburger {
		display: none;
		background: none;
		border: none;
		color: var(--navy);
		cursor: pointer;
		padding: 4px;
	}
	.mobile-menu {
		display: none;
	}

	/* ---- Footer ---- */
	.footer {
		border-top: 0.5px solid var(--border-soft);
		background: #fff;
	}
	.footer-inner {
		display: flex;
		justify-content: space-between;
		gap: 48px;
		padding: 56px 64px 40px;
	}
	.footer-brand {
		display: flex;
		flex-direction: column;
		gap: 12px;
		max-width: 320px;
	}
	.footer-brand p {
		margin: 0;
		font-size: 14px;
		line-height: 1.6;
		color: var(--text-muted);
	}
	.footer-cols {
		display: flex;
		gap: 72px;
	}
	.footer-col {
		display: flex;
		flex-direction: column;
		gap: 10px;
		font-size: 14.5px;
	}
	.footer-h {
		font-size: 13px;
		font-weight: 700;
		color: var(--navy);
		text-transform: uppercase;
		letter-spacing: 1px;
	}
	.footer-col a {
		color: var(--text-body);
	}
	.footer-col a:hover {
		color: var(--indigo);
	}
	.footer-legal {
		padding: 0 64px 32px;
		font-size: 13px;
		color: #a9acb6;
	}
	.footer-legal a {
		color: #a9acb6;
	}
	.footer-legal a:hover {
		color: var(--indigo);
	}

	/* ---- Responsive ---- */
	@media (max-width: 860px) {
		.nav {
			padding: 14px 22px;
		}
		.nav-links {
			display: none;
		}
		.hamburger {
			display: flex;
		}
		.mobile-menu {
			display: flex;
			flex-direction: column;
			gap: 4px;
			padding: 8px 22px 18px;
			background: #fff;
			border-bottom: 0.5px solid var(--border-soft);
		}
		.mobile-menu a {
			padding: 10px 0;
			font-size: 16px;
			color: var(--text-body-dark);
		}
		.mobile-menu .btn-navy {
			width: fit-content;
			margin-top: 6px;
			padding: 0 22px;
		}
		.footer-inner {
			flex-direction: column;
			gap: 32px;
			padding: 44px 22px 28px;
		}
		.footer-cols {
			gap: 40px;
			flex-wrap: wrap;
		}
		.footer-legal {
			padding: 0 22px 28px;
		}
	}
</style>
