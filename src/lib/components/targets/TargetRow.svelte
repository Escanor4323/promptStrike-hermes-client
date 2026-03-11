<!--
  TargetRow.svelte — Single Target in Table
  ─────────────────────────────────────────────────────────────
  Renders:
    A single row in the targets table. Displays target name,
    URL/endpoint, LLM model name, provider, and status.

  Props:
    - target: Target — the target data to display
    - isSelected: boolean — whether this row is selected

  Events:
    - on:select — dispatched when the row checkbox is toggled
    - on:edit — dispatched when the edit action is clicked
    - on:delete — dispatched when the delete action is clicked
-->
