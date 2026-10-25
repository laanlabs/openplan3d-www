// The Laan Labs app family: the footer apps bar and the /apps page of every Laan Labs www site.
//
// CANONICAL COPY: this file, AppsBar.svelte and AppsPage.svelte are identical in every *-www repo
// (openplan3d, openshape3d, openkitchen3d, opencatio3d, openlandscape3d). Edit all copies together.
// Icons live at /static/apps/<slug>.webp (144px, generated from the 1024px app icons).

export interface LaanApp {
	/** Stable id: analytics label, icon filename, and the `current` prop of AppsBar / AppsPage. */
	slug: string;
	name: string;
	url: string;
	/** One line, shown under the name in the footer bar. */
	tagline: string;
	/** A sentence or two for the /apps page cards. */
	blurb: string;
	platform: string;
	/** `labs`: other Laan Labs apps. `open`: the free, open-source family. */
	group: 'labs' | 'open';
}

export const STUDIO = {
	slug: 'laanlabs',
	name: 'Laan Labs',
	url: 'https://labs.laan.com/',
	tagline: 'The studio behind the apps',
	blurb:
		'Laan Labs builds real-world intelligence through computer vision, spatial computing and AI — working prototypes in weeks, production in months. Every app on this page comes from the studio.',
	platform: 'Studio'
} as const;

export const LAAN_APPS: LaanApp[] = [
	{
		slug: 'stockpilescan',
		name: 'Stockpile Scan',
		url: 'https://stockpilescan.com/',
		tagline: 'Measure stockpile volumes',
		blurb: 'Walk around gravel, sand, mulch or soil with your iPhone and get a 3D model, a measured volume and a shareable report. Free, with no ads, subscriptions or account.',
		platform: 'iPhone',
		group: 'labs'
	},
	{
		slug: '3dsplatapp',
		name: '3D Splat App',
		url: 'https://3dsplatapp.com/',
		tagline: 'Gaussian Splatting on Mac',
		blurb: 'Train Gaussian Splatting scenes locally on your Mac. Import photos, COLMAP or Nerfstudio projects and export PLY, SPZ, SOG and more. Free on the Mac App Store.',
		platform: 'macOS',
		group: 'labs'
	},
	{
		slug: 'openplan3d',
		name: 'OpenPlan3D',
		url: 'https://openplan3d.com/',
		tagline: 'Floor plans in 2D & 3D',
		blurb: 'Free, open-source floor plan editor: draw in 2D, walk through in 3D and scan rooms with iPhone LiDAR. No signup required. The engine and file format behind the other open planners.',
		platform: 'Web · iPhone, iPad & Mac',
		group: 'open'
	},
	{
		slug: 'openshape3d',
		name: 'OpenShape3D',
		url: 'https://openshape3d.com/',
		tagline: 'Direct-modeling CAD',
		blurb: 'Sketch, extrude and fillet real 3D solids with your fingertip — direct-modeling CAD built on the OpenCASCADE kernel, with STEP export for printing and machining.',
		platform: 'iPad, iPhone & Mac · Web',
		group: 'open'
	},
	{
		slug: 'openkitchen3d',
		name: 'OpenKitchen3D',
		url: 'https://openkitchen3d.com/',
		tagline: 'Kitchen & cabinet planning',
		blurb: 'Plan cabinet runs in 2D, elevation and real-time 3D with clearance checks and a bill of materials. Opens OpenPlan3D rooms and exports kitchens back as OpenPlan3D JSON.',
		platform: 'Web · iPhone, iPad & Mac',
		group: 'open'
	},
	{
		slug: 'opencatio3d',
		name: 'OpenCatio3D',
		url: 'https://opencatio3d.com/',
		tagline: 'Catio design & build plans',
		blurb: 'Design a safe, buildable catio around your home in 3D, run safety and welfare checks, and get a materials list, cut list and PDF. Reads OpenPlan3D house walls.',
		platform: 'Web · iPhone, iPad & Mac',
		group: 'open'
	},
	{
		slug: 'opensurvey3d',
		name: 'OpenSurvey3D',
		url: 'https://opensurvey3d.com/',
		tagline: 'Surveying on iPhone & iPad',
		blurb: 'Scan sites as LiDAR point clouds or photogrammetry, anchor captures to surveyed coordinates, find project assets through AR and share a project as a web map. Free, open-source GNSS fieldwork.',
		platform: 'iPhone & iPad',
		group: 'open'
	},
	{
		slug: 'openlandscape3d',
		name: 'OpenLandscape3D',
		url: 'https://openlandscape3d.com/',
		tagline: 'Gardens that grow in 3D',
		blurb: 'Plan the yard around your house — regional plants, every season and ten years of growth in 3D. Imports OpenPlan3D plans as the house footprint.',
		platform: 'Web · iPhone, iPad & Mac',
		group: 'open'
	},
	{
		slug: 'openwater',
		name: 'OpenWater',
		url: 'https://openwaterapp.com/',
		tagline: 'GPS speed & foil tracker',
		blurb: 'Open-source GPS speed and technique tracker for wingfoiling, downwinding, windsurfing, kitesurfing and sailing. Every speed category, time on foil and session replay — no account, nothing leaves your device.',
		platform: 'iPhone & Apple Watch',
		group: 'open'
	}
];

/** Every app except the one whose site this is — for "sibling" lists elsewhere on a site. */
export const siblingApps = (current: string): LaanApp[] => LAAN_APPS.filter((a) => a.slug !== current);
