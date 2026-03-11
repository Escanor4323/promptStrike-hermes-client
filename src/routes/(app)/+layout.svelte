<!--
  (app)/+layout.svelte — App Shell Layout
  ─────────────────────────────────────────────────────────────
  Purpose:
    The main application shell that wraps all authenticated pages.
    Only renders for authenticated users (auth guard is in the
    sibling +layout.server.ts).

  Renders:
    - Navbar (top navigation bar)
    - Sidebar (project/section navigation)
    - Main content area (<slot />)
    - Footer

  Implementation Notes:
    - Import and use layout components from $lib/components/layout/.
    - The layout should be responsive — sidebar collapses on mobile.
    - Pass user data to Navbar for displaying the current user.
    - This layout is part of a route group "(app)" — the parentheses
      mean the group name does NOT appear in the URL path.
-->
