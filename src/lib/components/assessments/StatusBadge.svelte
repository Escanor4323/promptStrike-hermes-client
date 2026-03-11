<!--
  StatusBadge.svelte — Colored Status Badge
  ─────────────────────────────────────────────────────────────
  Renders:
    A small, colored badge displaying a status label.
    Used for assessments (pending/running/paused/completed/failed)
    and projects (active/archived/draft).

  Props:
    - status: string — the status value to display
    - size: 'sm' | 'md' | 'lg' — badge size (default: 'md')

  Events:
    (none — display only)

  Implementation Notes:
    - Color mapping:
        pending   → yellow/amber
        running   → blue (with optional pulse animation)
        paused    → orange
        completed → green
        failed    → red
        active    → green
        archived  → gray
        draft     → gray/blue
    - Use formatters from $lib/utils/formatters.ts for label text.
-->
