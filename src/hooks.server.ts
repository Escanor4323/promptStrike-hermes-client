/**
 * hooks.server.ts — SvelteKit Server Hook
 * ─────────────────────────────────────────────────────────────
 * Purpose:
 *   Runs on EVERY incoming request before any route handler.
 *   This is the single entry point for server-side session
 *   management.
 *
 * Responsibilities:
 *   1. Extract the session cookie from the incoming request.
 *   2. Call ares-api to validate the session token.
 *   3. Populate `event.locals.user` with the authenticated
 *      user's data (id, username, role) if the session is valid.
 *   4. If no valid session exists, `event.locals.user` remains
 *      undefined — route-level auth guards handle redirection.
 *
 * Implementation Notes:
 *   - Use the HTTP client from `$lib/api/client.ts` to call
 *     the backend session validation endpoint.
 *   - The user object shape should match the `User` interface
 *     from `$lib/api/types.ts`.
 *   - Update `app.d.ts` to type `event.locals.user`.
 * ─────────────────────────────────────────────────────────────
 */

import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// TODO: Extract session cookie from event.cookies
	// TODO: Validate session with ares-api
	// TODO: Populate event.locals.user if valid

	return resolve(event);
};
