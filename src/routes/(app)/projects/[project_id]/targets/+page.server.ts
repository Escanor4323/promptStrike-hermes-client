/**
 * targets/+page.server.ts — Targets Loader
 * ─────────────────────────────────────────────────────────────
 * Purpose:
 *   Server-side load function for the targets page.
 *
 * Fetches:
 *   - GET /api/v1/projects/{project_id}/targets from ares-api
 *
 * Returns:
 *   - targets: Target[] — all targets for this project
 *
 * Form Actions:
 *   - upload: Handles CSV file upload
 *   - delete: Handles target deletion
 * ─────────────────────────────────────────────────────────────
 */

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params: _params, locals: _locals }) => {
	// const { project_id } = params;
	// TODO: Call fetchTargets(project_id)
	// TODO: Return { targets }
	return {};
};
