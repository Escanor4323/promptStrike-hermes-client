<!--
  AttackCard.svelte — Single Assessment Overview Card
  ─────────────────────────────────────────────────────────────
  Renders:
    A card summarizing a single assessment (attack run).
    Shows assessment type, status badge, target count,
    progress percentage, and timestamps.

  Props:
    - assessment: Assessment — the assessment data to display

  Events:
    - on:click — dispatched when the card is clicked (navigate to detail)
    - on:pause — dispatched when the pause action is triggered
    - on:resume — dispatched when the resume action is triggered

  Implementation Notes:
    - Use StatusBadge for assessment status display.
    - Show a progress bar if the assessment is running.
-->
