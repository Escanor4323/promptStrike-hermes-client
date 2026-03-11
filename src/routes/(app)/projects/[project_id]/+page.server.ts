/**
 * [project_id]/+page.server.ts — Project Detail Loader
 * ─────────────────────────────────────────────────────────────
 * Purpose:
 *   Server-side load function for the project detail page.
 *
 * Fetches:
 *   - GET /api/v1/projects/{project_id} from ares-api
 *   - GET /api/v1/projects/{project_id}/targets (summary)
 *   - GET /api/v1/projects/{project_id}/assessments (summary)
 *
 * Returns:
 *   - project: Project — full project details
 *   - targets: Target[] — targets in this project
 *   - assessments: Assessment[] — assessments in this project
 * ─────────────────────────────────────────────────────────────
 */

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params: _params, locals: _locals }) => {
	// const { project_id } = params;
	// TODO: Call fetchProject(project_id)
	// TODO: Call fetchTargets(project_id)
	// TODO: Call fetchAssessments(project_id)
	// TODO: Return { project, targets, assessments }
	return {};
};
