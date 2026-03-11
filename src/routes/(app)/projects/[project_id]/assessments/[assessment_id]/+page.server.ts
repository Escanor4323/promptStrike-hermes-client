/**
 * [assessment_id]/+page.server.ts — Assessment Detail Loader
 * ─────────────────────────────────────────────────────────────
 * Purpose:
 *   Server-side load function for the assessment detail page.
 *
 * Fetches:
 *   - GET /api/v1/assessments/{assessment_id} from ares-api
 *   - Initial batch of results for the assessment
 *
 * Returns:
 *   - assessment: Assessment — full assessment details
 *   - results: AttackResult[] — initial results (SSE continues client-side)
 * ─────────────────────────────────────────────────────────────
 */

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params: _params, locals: _locals }) => {
	// const { assessment_id } = params;
	// TODO: Call fetchAssessment(assessment_id)
	// TODO: Return { assessment, results }
	return {};
};
