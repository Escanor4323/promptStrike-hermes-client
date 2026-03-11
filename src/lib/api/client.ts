/**
 * client.ts — HTTP Client for ares-api
 * ─────────────────────────────────────────────────────────────
 * Purpose:
 *   Single module for ALL HTTP calls to the ares-api backend.
 *   Every backend endpoint gets a named, typed function here.
 *
 * Responsibilities:
 *   - Centralize all fetch calls to ares-api.
 *   - Handle the snake_case (backend) → camelCase (frontend)
 *     JSON transform at this boundary. This is the ONLY place
 *     where that conversion happens.
 *   - Accept and return typed interfaces from `types.ts`.
 *   - Attach session cookies / auth headers to every request.
 *   - Handle common error responses (401, 403, 500, etc.).
 *
 * Expected Functions (to be implemented):
 *   - login(credentials): Promise<User>
 *   - logout(): Promise<void>
 *   - fetchProjects(): Promise<Project[]>
 *   - fetchProject(id): Promise<Project>
 *   - createProject(data): Promise<Project>
 *   - updateProject(id, data): Promise<Project>
 *   - deleteProject(id): Promise<void>
 *   - fetchTargets(projectId): Promise<Target[]>
 *   - uploadTargetsCsv(projectId, file): Promise<Target[]>
 *   - fetchAssessments(projectId): Promise<Assessment[]>
 *   - createAssessment(projectId, config): Promise<Assessment>
 *   - executeAssessment(assessmentId): Promise<void>
 *   - pauseAssessment(assessmentId): Promise<void>
 *   - fetchAssessment(assessmentId): Promise<Assessment>
 *   - fetchReports(projectId): Promise<Report[]>
 *   - exportReport(reportId, format): Promise<Blob>
 *   - fetchUsers(): Promise<User[]>  (admin only)
 *   - updateUserRole(userId, role): Promise<User>
 *
 * Configuration:
 *   - Uses PUBLIC_API_URL from environment variables.
 *   - Base URL: `${PUBLIC_API_URL}/api/v1`
 * ─────────────────────────────────────────────────────────────
 */

// TODO: Import types from './types.ts'
// TODO: Import { PUBLIC_API_URL } from '$env/static/public'
// TODO: Implement API_BASE_URL constant
// TODO: Implement snakeToCamel / camelToSnake utility
// TODO: Implement each API function listed above
