// eslint.config.js
// ─────────────────────────────────────────────────────────────
// ESLint flat config for hermes-client.
// Uses eslint-plugin-svelte for .svelte files and
// @typescript-eslint for .ts files.
// ─────────────────────────────────────────────────────────────

import eslint from '@eslint/js';
import tsEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import sveltePlugin from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';

export default [
	// Global ignores
	{
		ignores: [
			'.svelte-kit/**',
			'build/**',
			'node_modules/**',
			'vite.config.ts',
			'svelte.config.js',
			'tailwind.config.js',
			'postcss.config.js'
		]
	},

	// Base ESLint recommended rules
	eslint.configs.recommended,

	// TypeScript files
	{
		files: ['**/*.ts'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module'
			}
		},
		plugins: {
			'@typescript-eslint': tsEslint
		},
		rules: {
			...tsEslint.configs.recommended.rules,
			// Allow empty interfaces (used for placeholder types)
			'@typescript-eslint/no-empty-interface': 'off',
			'@typescript-eslint/no-empty-object-type': 'off',
			// Allow unused vars prefixed with _
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{ argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
			],
			'no-unused-vars': 'off'
		}
	},

	// Svelte files
	...sveltePlugin.configs['flat/recommended'],
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: tsParser
			}
		}
	}
];
