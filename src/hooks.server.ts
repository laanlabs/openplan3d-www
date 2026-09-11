import type { Handle } from '@sveltejs/kit';

/**
 * Cache headers so Firebase App Hosting's CDN serves static assets and marketing pages
 * instead of every request hitting Cloud Run and paying uncached egress.
 *
 *  - Hashed build assets (/_app/immutable/*) are already immutable via SvelteKit.
 *  - Other static files (screenshots, icons, thumbnails) change rarely: cache a day in browsers
 *    and a week at the CDN, revalidating in the background.
 *  - HTML pages are static marketing content: cache at the CDN for 10 minutes.
 */
const STATIC_ASSET = /\.(webp|png|jpe?g|gif|svg|ico|mp4|webm|woff2?|txt|xml|json)$/i;

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);
	if (event.request.method !== 'GET' || response.headers.has('cache-control')) return response;

	const { pathname } = event.url;
	if (pathname.startsWith('/_app/immutable/')) return response;

	if (STATIC_ASSET.test(pathname)) {
		response.headers.set(
			'cache-control',
			'public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400'
		);
	} else if (response.status === 200 && (response.headers.get('content-type') ?? '').includes('text/html')) {
		response.headers.set('cache-control', 'public, max-age=0, s-maxage=600, stale-while-revalidate=600');
	}
	return response;
};
