<!--
  ProjectCard.svelte — Single Project in List View
  ─────────────────────────────────────────────────────────────
  Renders:
    A card representing a single project in the project list.
    Displays project name, status badge, description snippet,
    target count, assessment count, and last-updated timestamp.

  Props:
    - project: Project — the project data to display

  Events:
    - on:click — dispatched when the card is clicked (navigate to detail)
    - on:delete — dispatched when the delete action is triggered

  Implementation Notes:
    - Use StatusBadge for project status display.
    - Show a context menu or action buttons for edit/delete.
-->
