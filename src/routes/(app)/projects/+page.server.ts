/**
 * projects/+page.server.ts — Project List Loader
 * ─────────────────────────────────────────────────────────────
 * Purpose:
 *   Server-side load function for the project list page.
 *
 * Fetches:
 *   - GET /api/v1/projects from ares-api
 *
 * Returns:
 *   - projects: Project[] — all projects accessible to the user
 *
 * Form Actions:
 *   - delete: Handles project deletion via form action
 *     (calls DELETE /api/v1/projects/{id} on ares-api)
 * ─────────────────────────────────────────────────────────────
 */

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: _locals }) => {
	// TODO: Call fetchProjects() from API client
	// TODO: Return { projects }
	return {};
};
