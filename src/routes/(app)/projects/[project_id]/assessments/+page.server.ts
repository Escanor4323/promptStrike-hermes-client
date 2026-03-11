/**
 * assessments/+page.server.ts — Assessment List Loader
 * ─────────────────────────────────────────────────────────────
 * Purpose:
 *   Server-side load function for the assessment list page.
 *
 * Fetches:
 *   - GET /api/v1/projects/{project_id}/assessments from ares-api
 *
 * Returns:
 *   - assessments: Assessment[] — all assessments for this project
 * ─────────────────────────────────────────────────────────────
 */

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params: _params, locals: _locals }) => {
	// const { project_id } = params;
	// TODO: Call fetchAssessments(project_id)
	// TODO: Return { assessments }
	return {};
};
