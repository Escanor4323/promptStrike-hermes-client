<!--
  [project_id]/+page.svelte — Project Overview / Detail
  ─────────────────────────────────────────────────────────────
  Screen:
    The main detail page for a single project. Shows project
    metadata, summary stats, and quick links to targets,
    assessments, and reports.

  Data Needed:
    - project: Project — loaded by sibling +page.server.ts
    - targets: Target[] — summary of targets in this project
    - assessments: Assessment[] — summary of assessments

  User Actions:
    - View project details and stats
    - Edit project settings
    - Navigate to targets, assessments, or reports tabs
    - Delete the project (with ConfirmDialog)
-->
