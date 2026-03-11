<!--
  assessments/+page.svelte — Assessment List
  ─────────────────────────────────────────────────────────────
  Screen:
    Displays all assessments for the current project.

  Data Needed:
    - assessments: Assessment[] — loaded by sibling +page.server.ts

  User Actions:
    - View assessments as cards (using AttackCard components)
    - Click "New Assessment" to navigate to assessments/new
    - Click an assessment to view live results or detail
    - Pause/resume running assessments
    - Filter by status (pending, running, completed, etc.)
-->
