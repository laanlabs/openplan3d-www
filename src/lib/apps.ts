// Sibling apps (everything but OpenPlan3D), derived from the shared Laan Labs list
// in src/lib/laanlabs/apps.ts so the nav, homepage, about page and footer bar agree.
import { siblingApps, type LaanApp } from '$lib/laanlabs/apps';

export const OPENPLAN_APP_STORE = 'https://apps.apple.com/us/app/openplan3d/id6759076170';

export type SiblingApp = LaanApp;
export const SIBLING_APPS: SiblingApp[] = siblingApps('openplan3d');
