// tailwind.config.js
// ─────────────────────────────────────────────────────────────
// Tailwind CSS configuration for hermes-client.
//
// Content paths point to all Svelte, HTML, JS, and TS files in src/.
// The default theme is used — extend it here when the team defines
// the PromptStrike design system (colors, fonts, spacing, etc.).
// ─────────────────────────────────────────────────────────────

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: []
};
