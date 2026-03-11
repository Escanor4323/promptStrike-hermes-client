/**
 * admin/users/+page.server.ts — Admin User Management Loader
 * ─────────────────────────────────────────────────────────────
 * Purpose:
 *   Server-side load function for the admin user management page.
 *   Verifies the current user has admin role before loading data.
 *
 * Fetches:
 *   - GET /api/v1/admin/users from ares-api
 *
 * Returns:
 *   - users: User[] — all platform users
 *
 * Authorization:
 *   - Checks event.locals.user.role === 'ADMIN'
 *   - If not admin, returns 403 or redirects
 *
 * Form Actions:
 *   - updateRole: Handles role change for a user
 * ─────────────────────────────────────────────────────────────
 */

import type { PageServerLoad } from './$types';
// import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals: _locals }) => {
	// TODO: Verify locals.user.role === 'ADMIN'
	// TODO: If not admin, throw error(403, 'Forbidden')
	// TODO: Call fetchUsers()
	// TODO: Return { users }
	return {};
};
