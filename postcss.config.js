// postcss.config.js
// ─────────────────────────────────────────────────────────────
// PostCSS configuration for hermes-client.
// Processes Tailwind CSS directives and adds vendor prefixes.
// ─────────────────────────────────────────────────────────────

export default {
	plugins: {
		tailwindcss: {},
		autoprefixer: {}
	}
};
