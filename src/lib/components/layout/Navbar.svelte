<!--
  Navbar.svelte — Top Navigation Bar
  ─────────────────────────────────────────────────────────────
  Renders:
    The top navigation bar visible on all authenticated pages.
    Displays the PromptStrike logo/name, global navigation links,
    and the current user's name/avatar with a logout button.

  Props:
    - user: User — the currently authenticated user object

  Events:
    - on:logout — dispatched when the user clicks the logout button

  Implementation Notes:
    - Highlight the active route using SvelteKit's $page store.
    - Show/hide admin links based on user.role.
    - Use responsive design — collapse to hamburger on mobile.
-->
