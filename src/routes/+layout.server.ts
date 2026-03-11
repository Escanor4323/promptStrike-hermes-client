/**
 * +layout.server.ts — Root Server Layout
 * ─────────────────────────────────────────────────────────────
 * Purpose:
 *   Root server layout load function. Runs on every request.
 *   No authentication checks here — this is the outermost layout
 *   and must allow unauthenticated pages (e.g., /login) to load.
 *
 * Returns:
 *   - user: User | null — the current user from event.locals
 *     (populated by hooks.server.ts). Passed down to all child
 *     layouts and pages via the data prop.
 *
 * Implementation Notes:
 *   - Simply forward the user from event.locals so child layouts
 *     can decide whether to render authenticated or public content.
 * ─────────────────────────────────────────────────────────────
 */

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals: _locals }) => {
	// TODO: Return user from locals once hooks.server.ts is implemented
	return {};
};
