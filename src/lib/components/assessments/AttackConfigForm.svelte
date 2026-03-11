<!--
  AttackConfigForm.svelte — Configure Attack Parameters Before Launch
  ─────────────────────────────────────────────────────────────
  Renders:
    A form to configure an assessment before launching it.
    Includes target selection, attack type, prompt templates,
    concurrency settings, and timeout configuration.

  Props:
    - targets: Target[] — available targets to select from
    - templates: AttackTemplate[] — available attack templates
    - isSubmitting: boolean — disables the form during submission

  Events:
    - on:submit — dispatched with assessment config when launched
    - on:cancel — dispatched when the user cancels

  Implementation Notes:
    - Multi-select for targets.
    - Preview of selected attack templates.
    - Validate all fields before allowing submission.
-->
