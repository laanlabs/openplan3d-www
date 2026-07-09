// Lightweight, platform-agnostic outbound-click tracking.
// Fires to whatever analytics happens to be loaded (Google Analytics / GTM,
// Plausible, or a plain dataLayer) and degrades to a no-op if none is present.
// Wire up an actual provider later and these events will start flowing.

type TrackProps = Record<string, string | number | boolean>;

interface AnalyticsWindow extends Window {
	gtag?: (...args: unknown[]) => void;
	plausible?: (event: string, opts?: { props?: TrackProps }) => void;
	dataLayer?: unknown[];
}

export function track(event: string, props: TrackProps = {}): void {
	if (typeof window === 'undefined') return;
	const w = window as AnalyticsWindow;

	// Google Analytics 4 (gtag.js)
	w.gtag?.('event', event, props);

	// Plausible
	w.plausible?.(event, { props });

	// Google Tag Manager / generic dataLayer
	if (Array.isArray(w.dataLayer)) {
		w.dataLayer.push({ event, ...props });
	}
}

// Convenience wrapper for outbound links.
export function trackOutbound(label: string, url: string): void {
	track('outbound_click', { link_label: label, link_url: url });
}
