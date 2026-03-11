/**
 * authStore.ts — Authentication Store
 * ─────────────────────────────────────────────────────────────
 * Purpose:
 *   Svelte writable store holding the current user's
 *   authentication state.
 *
 * State Shape:
 *   - user: User | null — the authenticated user object
 *   - isAuthenticated: boolean — derived from user presence
 *   - role: UserRole | null — the user's role for RBAC checks
 *
 * Updated By:
 *   - hooks.server.ts (on each request, server-side)
 *   - Login page (after successful authentication)
 *   - Logout action (clears state)
 *
 * Usage:
 *   import { authStore } from '$lib/stores/authStore';
 *   $authStore.user  // access current user
 * ─────────────────────────────────────────────────────────────
 */

// TODO: Import { writable } from 'svelte/store'
// TODO: Import { User, UserRole } from '$lib/api/types'
// TODO: Define AuthState interface
// TODO: Create and export the writable store
