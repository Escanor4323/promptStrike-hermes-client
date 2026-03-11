// vite.config.ts
// ─────────────────────────────────────────────────────────────
// Vite configuration for hermes-client (PromptStrike frontend).
//
// NOTE: The PUBLIC_API_URL environment variable controls the
// ares-api backend URL. In development, you may want to configure
// a Vite proxy here to forward /api requests to the backend:
//
//   server: {
//     proxy: {
//       '/api': {
//         target: process.env.PUBLIC_API_URL || 'http://localhost:8000',
//         changeOrigin: true
//       }
//     }
//   }
//
// For production, the SvelteKit server handles proxying via
// server-side load functions and hooks.
// ─────────────────────────────────────────────────────────────

import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()]
});
