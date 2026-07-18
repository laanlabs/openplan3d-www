// Competitor comparison data for the homepage table and the /alternatives page.
// Cells are intentionally QUALITATIVE (no exact prices) so the page stays accurate
// as competitors change their plans. Facts reviewed against each product's public
// pricing/help pages as of the date below — keep this honest and non-disparaging.

export const LAST_REVIEWED = 'July 2026';

// Column order. OpenPlan3D is always first.
export const apps = ['OpenPlan3D', 'magicplan', 'RoomSketcher', 'Floorplanner', 'Planner 5D', 'SketchUp'];

// A cell is either a boolean-ish 'yes' / 'no', or a short qualifier string.
export type Cell = 'yes' | 'no' | string;

export interface Row {
	label: string;
	cells: Cell[]; // aligned to `apps`
}

export const rows: Row[] = [
	{ label: 'Free to use', cells: ['yes', 'Trial only', 'Limited', 'Limited', 'Limited', 'Web only'] },
	{ label: 'No account required', cells: ['yes', 'no', 'no', 'no', 'no', 'no'] },
	{ label: 'Watermark-free exports', cells: ['yes', 'Paid', 'Paid', 'Paid', 'Paid', 'yes'] },
	{ label: '2D floor plan drawing', cells: ['yes', 'yes', 'yes', 'yes', 'yes', 'yes'] },
	{ label: '3D visualization', cells: ['yes', 'yes', 'yes', 'yes', 'yes', 'yes'] },
	{ label: 'iPhone LiDAR room scan', cells: ['yes', 'yes', 'no', 'no', 'no', 'no'] },
	{ label: 'DXF / CAD export', cells: ['yes', 'Paid', 'no', 'Paid', 'no', 'Pro only'] },
	{ label: 'Open source', cells: ['yes', 'no', 'no', 'no', 'no', 'no'] }
];

// Additional well-known floor plan / home design tools people search for
// alternatives to. Named (not linked) below the comparison table to capture
// "alternative to X" long-tail queries without sending link equity to competitors.
export const otherAlternatives: string[] = [
	'Cedreo',
	'Coohom',
	'HomeByMe',
	'Homestyler',
	'SmartDraw',
	'Live Home 3D',
	'Chief Architect',
	'Room Planner',
	'Foyr Neo',
	'Sweet Home 3D',
	'Space Designer 3D',
	'Roomstyler',
	'Morpholio Board',
	'AutoCAD'
];

export interface Competitor {
	name: string;
	what: string; // one-line description of the product
	angle: string; // the free-alternative angle — what OpenPlan3D gives free that they charge for
}

export const competitors: Competitor[] = [
	{
		name: 'magicplan',
		what: 'A paid, per-project field app popular for LiDAR/AR room scanning on iPhone.',
		angle: 'OpenPlan3D Capture also scans rooms with iPhone LiDAR and Apple RoomPlan — free, with no per-project fees and no account. Open the scan in the editor and export DXF, PDF, or SVG at no cost.'
	},
	{
		name: 'RoomSketcher',
		what: 'A freemium 2D/3D floor plan tool where the free tier watermarks 3D output and charges per floor-plan render.',
		angle: 'OpenPlan3D exports 2D and 3D for free with no watermarks and no per-render fees, and the whole editor is open source.'
	},
	{
		name: 'Floorplanner',
		what: 'A freemium planner whose free plan caps projects and exports low-resolution, watermarked images with no DXF or DWG.',
		angle: 'OpenPlan3D gives you unlimited plans, full-resolution exports, and free DXF for CAD — no credits or subscription.'
	},
	{
		name: 'Planner 5D',
		what: 'A freemium home-design app that watermarks free renders and limits the furniture catalog.',
		angle: 'OpenPlan3D has no watermarks, 140+ free furniture models plus GLB/glTF import, and open-source code.'
	},
	{
		name: 'SketchUp',
		what: 'A general-purpose 3D modeler; the free web version blocks CAD (DWG/DXF) import/export and commercial use, and SketchUp Pro is a paid subscription.',
		angle: 'OpenPlan3D is purpose-built for floor plans, runs free in the browser, and exports DXF for CAD without a Pro plan.'
	}
];
