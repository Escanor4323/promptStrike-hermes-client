<!--
  assessments/new/+page.svelte — Configure and Launch New Assessment
  ─────────────────────────────────────────────────────────────
  Screen:
    Form page for configuring and launching a new assessment
    (attack run) against selected targets.

  Data Needed:
    - targets: Target[] — available targets to select from
    - templates: AttackTemplate[] — available attack templates

  User Actions:
    - Select target LLMs for the assessment
    - Choose attack type and templates
    - Configure concurrency, timeout, and other parameters
    - Launch the assessment
    - Cancel and return to assessment list

  Implementation Notes:
    - Use the AttackConfigForm component.
    - On successful creation, redirect to the assessment detail page
      to watch live results via SSE.
-->
