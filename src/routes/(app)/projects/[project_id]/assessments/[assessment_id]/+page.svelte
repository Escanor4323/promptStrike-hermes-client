<!--
  [assessment_id]/+page.svelte — Assessment Live Results / Detail
  ─────────────────────────────────────────────────────────────
  Screen:
    Live results view for a running assessment, or detail view
    for a completed one. Shows real-time SSE feed of attack
    results along with assessment metadata and progress.

  Data Needed:
    - assessment: Assessment — loaded by sibling +page.server.ts
    - results: AttackResult[] — initial results (streaming continues via SSE)

  User Actions:
    - Watch live results streaming in (LiveResultsFeed component)
    - Pause/resume the assessment
    - View assessment configuration details
    - Navigate back to assessment list

  Implementation Notes:
    - Connect to SSE stream on mount (via $lib/api/sse.ts).
    - Disconnect from SSE stream on unmount.
    - Use LiveResultsFeed and StatusBadge components.
    - Show progress bar and elapsed time.
-->
