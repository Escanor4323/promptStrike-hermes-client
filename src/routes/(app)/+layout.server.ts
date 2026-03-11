/**
 * (app)/+layout.server.ts — Auth Guard
 * ─────────────────────────────────────────────────────────────
 * Purpose:
 *   Server-side auth guard for ALL routes under the (app) group.
 *   Checks event.locals.user (populated by hooks.server.ts).
 *   If the user is not authenticated, redirects to /login.
 *
 * Returns:
 *   - user: User — the authenticated user object
 *
 * Implementation Notes:
 *   - Use SvelteKit's `redirect()` helper for the redirect.
 *   - Every route nested under (app)/ is automatically protected
 *     by this layout — no per-route auth checks needed.
 *   - The user object is then available in all child pages via
 *     the `data` prop.
 * ─────────────────────────────────────────────────────────────
 */

import type { LayoutServerLoad } from './$types';
// import { redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ locals: _locals }) => {
	// TODO: Check if locals.user exists
	// TODO: If not, throw redirect(303, '/login')
	// TODO: Return { user: locals.user }
	return {};
};
