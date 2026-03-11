<!--
  +layout.svelte — Root Layout
  ─────────────────────────────────────────────────────────────
  Purpose:
    Bare HTML wrapper for the entire application.
    Imports global styles (app.css with Tailwind directives).
    No authentication logic here — that is handled by the
    (app) layout group.

  Renders:
    - Global CSS import
    - A <slot /> for child content

  Implementation Notes:
    - Keep this minimal. All app-shell UI (navbar, sidebar) lives
      in the (app)/+layout.svelte.
    - This layout wraps both public pages (login) and authenticated
      pages (everything under (app)/).
-->

<script>
	import '../app.css';
</script>

<slot />
