<!--
  (app)/+page.svelte — Dashboard / Home Page
  ─────────────────────────────────────────────────────────────
  Screen:
    The main dashboard page shown after login. Serves as the
    landing page for authenticated users.

  Data Needed:
    - Summary statistics (total projects, active assessments, etc.)
    - Recent activity feed
    - Quick-action links

  User Actions:
    - View overview stats
    - Navigate to recent projects
    - Start a new project or assessment via quick-action buttons
    - Alternatively, this page may simply redirect to /projects

  Implementation Notes:
    - Could redirect to /projects if a standalone dashboard
      is not needed for the MVP.
    - If implemented, show cards with key metrics and recent activity.
-->
