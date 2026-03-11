/**
 * types.ts — TypeScript Interfaces for ares-api Responses
 * ─────────────────────────────────────────────────────────────
 * Purpose:
 *   Single source of truth for all frontend data shapes.
 *   These interfaces mirror the backend's Pydantic response
 *   schemas but use camelCase field names (the snake_case →
 *   camelCase transform happens in `client.ts`).
 *
 * All interfaces and enums are documented below as placeholders.
 * The team should fill in fields as the backend API stabilizes.
 * ─────────────────────────────────────────────────────────────
 */

// ── Enums ────────────────────────────────────────────────────

/** User role within the PromptStrike platform. */
// TODO: Define enum values — e.g., ADMIN, ANALYST, VIEWER
export type UserRole = string;

/** Overall status of an assessment run. */
// TODO: Define enum values — e.g., PENDING, RUNNING, PAUSED, COMPLETED, FAILED
export type AssessmentStatus = string;

/** Status of a project. */
// TODO: Define enum values — e.g., ACTIVE, ARCHIVED, DRAFT
export type ProjectStatus = string;

/** Type of assessment / attack vector. */
// TODO: Define enum values — e.g., PROMPT_INJECTION, JAILBREAK, DATA_EXTRACTION
export type AssessmentType = string;

/** Format for exported reports. */
// TODO: Define enum values — e.g., PDF, HTML, JSON
export type ReportFormat = string;

// ── Interfaces ───────────────────────────────────────────────

/** Authenticated user profile. */
export interface User {
	// TODO: Define fields — id, username, email, role, createdAt, etc.
}

/** A PromptStrike project (container for targets and assessments). */
export interface Project {
	// TODO: Define fields — id, name, description, status, createdAt, updatedAt, etc.
}

/** A target LLM endpoint to be tested. */
export interface Target {
	// TODO: Define fields — id, projectId, name, url, model, provider, etc.
}

/** An assessment (attack run) against one or more targets. */
export interface Assessment {
	// TODO: Define fields — id, projectId, type, status, config, createdAt, etc.
}

/** A single result from an attack prompt. */
export interface AttackResult {
	// TODO: Define fields — id, assessmentId, targetId, prompt, response, success, timestamp, etc.
}

/** A pre-defined attack prompt template. */
export interface AttackTemplate {
	// TODO: Define fields — id, name, category, template, description, etc.
}

/** A generated report summarizing assessment results. */
export interface Report {
	// TODO: Define fields — id, projectId, assessmentId, format, generatedAt, downloadUrl, etc.
}
