<!--
  projects/+page.svelte — Project List
  ─────────────────────────────────────────────────────────────
  Screen:
    Displays a list/grid of all projects the user has access to.

  Data Needed:
    - projects: Project[] — loaded by sibling +page.server.ts

  User Actions:
    - View all projects as cards or list items
    - Click a project to navigate to its detail page
    - Click "New Project" to navigate to /projects/new
    - Search/filter projects by name or status
    - Delete a project (with ConfirmDialog)

  Implementation Notes:
    - Use ProjectCard components to render each project.
    - Include a search bar and status filter dropdown.
    - Show LoadingSpinner while data is loading.
    - Show empty state if no projects exist.
-->
