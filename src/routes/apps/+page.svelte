<script>
	import AppsPage from '$lib/laanlabs/AppsPage.svelte';
	const title = 'More apps from Laan Labs | OpenPlan3D';
	const description = 'Every app from Laan Labs in one place: free, open-source 3D planners for homes, kitchens, gardens and catios, direct-modeling CAD on iPad, land surveying, Gaussian Splatting on Mac, stockpile measurement and a GPS tracker for watersports.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="https://openplan3d.com/apps" />
	<meta property="og:image" content="https://openplan3d.com/screenshots/og-2d-floorplan.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<link rel="canonical" href="https://openplan3d.com/apps" />
</svelte:head>

<main class="apps-wrap">
	<AppsPage current="openplan3d" />
</main>

<style>
	.apps-wrap {
		padding: 0 var(--edge);
	}
	@media (max-width: 860px) {
		.apps-wrap {
			padding: 0 22px;
		}
	}
</style>
