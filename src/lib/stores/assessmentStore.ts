/**
 * assessmentStore.ts — Assessment Store
 * ─────────────────────────────────────────────────────────────
 * Purpose:
 *   Svelte writable store for live assessment status and
 *   streaming attack results.
 *
 * State Shape:
 *   - assessments: Assessment[] — assessments for the active project
 *   - activeAssessment: Assessment | null — currently viewed assessment
 *   - liveResults: AttackResult[] — streaming results from SSE
 *   - progress: number — percentage completion (0–100)
 *   - isStreaming: boolean — whether SSE connection is active
 *
 * Updated By:
 *   - Assessment page load functions
 *   - SSE listener (lib/api/sse.ts) for live results
 *   - Assessment actions (create, execute, pause)
 *
 * Usage:
 *   import { assessmentStore } from '$lib/stores/assessmentStore';
 *   $assessmentStore.liveResults  // access streaming results
 * ─────────────────────────────────────────────────────────────
 */

// TODO: Import { writable } from 'svelte/store'
// TODO: Import { Assessment, AttackResult } from '$lib/api/types'
// TODO: Define AssessmentState interface
// TODO: Create and export the writable store
