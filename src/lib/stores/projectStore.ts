/**
 * projectStore.ts — Project Store
 * ─────────────────────────────────────────────────────────────
 * Purpose:
 *   Svelte writable store for the project list and the
 *   currently active/selected project.
 *
 * State Shape:
 *   - projects: Project[] — all projects the user has access to
 *   - activeProject: Project | null — the currently viewed project
 *   - isLoading: boolean — loading state for async fetches
 *
 * Updated By:
 *   - Project list page load function
 *   - Project detail page load function
 *   - Create/update/delete project actions
 *
 * Usage:
 *   import { projectStore } from '$lib/stores/projectStore';
 *   $projectStore.projects  // access project list
 * ─────────────────────────────────────────────────────────────
 */

// TODO: Import { writable } from 'svelte/store'
// TODO: Import { Project } from '$lib/api/types'
// TODO: Define ProjectState interface
// TODO: Create and export the writable store
