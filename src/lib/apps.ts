// Sibling apps from theLodgeStudio. Single source of truth for cross-promo
// links so the footer, homepage, and structured data stay in sync.

export const OPENPLAN_APP_STORE = 'https://apps.apple.com/us/app/openplan3d/id6759076170';

export interface SiblingApp {
	/** Short name used in nav/footer links. */
	name: string;
	url: string;
	/** Analytics label suffix — prefixed with the placement, e.g. `footer_`. */
	slug: string;
	/** One-line descriptor shown next to the link in the footer. */
	tagline: string;
	/** Longer blurb for card layouts. */
	blurb: string;
	platform: string;
}

export const SIBLING_APPS: SiblingApp[] = [
	{
		name: 'OpenLandscape3D',
		url: 'https://openlandscape3d.com/',
		slug: 'openlandscape3d',
		tagline: 'Gardens that grow in 3D',
		blurb:
			'Plan the yard around your house — regional plants, every season, and ten years of growth in 3D. Imports OpenPlan3D plans as the house footprint and opens its gardens in OpenPlan3D.',
		platform: 'Web'
	},
	{
		name: 'OpenKitchen3D',
		url: 'https://openkitchen3d.com/',
		slug: 'openkitchen3d',
		tagline: 'Kitchen & cabinet planning',
		blurb:
			'Plan cabinet runs in 2D, elevation, and real-time 3D with clearance checks and a bill of materials. Opens OpenPlan3D rooms and exports kitchens as OpenPlan3D JSON.',
		platform: 'Web'
	},
	{
		name: 'OpenCatio3D',
		url: 'https://opencatio3d.com/',
		slug: 'opencatio3d',
		tagline: 'Catio design and build plans in 3D',
		blurb:
			'Design a safe, buildable catio around your home in 3D, run safety and welfare checks, and get a materials list, cut list, and PDF. Reads OpenPlan3D house walls and opens its plans in OpenPlan3D.',
		platform: 'Web'
	},
	{
		name: '3D Splat App',
		url: 'https://3dsplatapp.com/',
		slug: '3dsplatapp',
		tagline: 'Gaussian Splatting on Mac',
		blurb:
			'Turn photos and videos into photorealistic 3D scenes with Gaussian Splatting — no LiDAR required.',
		platform: 'macOS'
	},
	{
		name: 'Open Survey 3D',
		url: 'https://opensurvey3d.com/',
		slug: 'opensurvey3d',
		tagline: 'Land surveying on iPhone & iPad',
		blurb:
			'Turn an iPhone or iPad into a survey instrument — collect points, boundaries, and areas with built-in GPS or an RTK receiver.',
		platform: 'iOS / iPadOS'
	},
	{
		name: 'OpenShape3D',
		url: 'https://openshape3d.com/',
		slug: 'openshape3d',
		tagline: 'Direct-modeling CAD on iPad',
		blurb:
			'Sketch, extrude, and fillet real 3D solids with your fingertip — direct-modeling CAD built on the OpenCASCADE kernel.',
		platform: 'iPadOS / iOS'
	},
	{
		name: 'OpenWater',
		url: 'https://openwaterapp.com/',
		slug: 'openwaterapp',
		tagline: 'GPS speed for watersports',
		blurb:
			'Track speed and technique for wingfoiling, downwinding, windsurfing, kitesurfing, and sailing — no account, nothing leaves your device.',
		platform: 'iPhone & Apple Watch'
	}
];
