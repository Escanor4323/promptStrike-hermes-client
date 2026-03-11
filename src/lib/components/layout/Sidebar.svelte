<!--
  Sidebar.svelte — Side Navigation Panel
  ─────────────────────────────────────────────────────────────
  Renders:
    The left sidebar for project/section navigation. Shows a list
    of recent projects, quick-access links, and contextual
    navigation when inside a project (targets, assessments, reports).

  Props:
    - projects: Project[] — list of projects for the sidebar
    - activeProjectId: string | null — currently selected project ID

  Events:
    - on:selectProject — dispatched when a project is clicked

  Implementation Notes:
    - Collapsible on smaller screens.
    - Highlight the active project/section.
    - Consider a "New Project" quick-action button at the top.
-->
