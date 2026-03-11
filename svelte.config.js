// svelte.config.js
// ─────────────────────────────────────────────────────────────
// SvelteKit configuration for hermes-client (PromptStrike frontend).
//
// Uses adapter-node to produce a standalone Node.js server.
// This is required for Docker deployment — the build output is a
// self-contained server that can be run with `node build/index.js`.
// ─────────────────────────────────────────────────────────────

import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	}
};

export default config;
