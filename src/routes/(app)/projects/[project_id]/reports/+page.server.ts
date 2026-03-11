/**
 * reports/+page.server.ts — Reports Loader
 * ─────────────────────────────────────────────────────────────
 * Purpose:
 *   Server-side load function for the reports page.
 *
 * Fetches:
 *   - GET /api/v1/projects/{project_id}/reports from ares-api
 *   - GET /api/v1/projects/{project_id}/assessments (for chart context)
 *
 * Returns:
 *   - reports: Report[] — all reports for this project
 *   - assessments: Assessment[] — for DashboardCharts context
 * ─────────────────────────────────────────────────────────────
 */

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params: _params, locals: _locals }) => {
	// const { project_id } = params;
	// TODO: Call fetchReports(project_id)
	// TODO: Call fetchAssessments(project_id)
	// TODO: Return { reports, assessments }
	return {};
};
