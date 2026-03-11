<!--
  [project_id]/+layout.svelte — Project Sub-Navigation
  ─────────────────────────────────────────────────────────────
  Purpose:
    Layout for project-scoped pages. Provides sub-navigation
    (tabs or secondary sidebar) for switching between:
    - Project Overview
    - Targets
    - Assessments
    - Reports

  Renders:
    - Project name/header
    - Tab bar or sub-navigation links
    - Content area (<slot />) for child pages

  Implementation Notes:
    - Highlight the active tab based on the current route.
    - Show the project name and status badge in the header.
    - This layout wraps targets/, assessments/, and reports/ pages.
-->
