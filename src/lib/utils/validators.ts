/**
 * validators.ts — Client-Side Form Validation
 * ─────────────────────────────────────────────────────────────
 * Purpose:
 *   Client-side validation rules for forms throughout the app.
 *   These duplicate backend validation for UX responsiveness —
 *   the backend (ares-api) is always authoritative.
 *
 * Expected Functions:
 *   - validateProjectName(name: string): string | null
 *       → Returns error message or null if valid.
 *       → Rules: required, min 3 chars, max 100 chars.
 *   - validateUrl(url: string): string | null
 *       → Validates URL format for target endpoints.
 *   - validateEmail(email: string): string | null
 *       → Standard email format validation.
 *   - validateRequired(value: string, fieldName: string): string | null
 *       → Generic required-field check.
 *   - validateDateRange(start: Date, end: Date): string | null
 *       → Ensures start < end for report date filters.
 *   - validateCsvFile(file: File): string | null
 *       → Validates CSV file type and size before upload.
 * ─────────────────────────────────────────────────────────────
 */

// TODO: Implement each validation function
