<!--
  ProjectForm.svelte — Create / Edit Project Form
  ─────────────────────────────────────────────────────────────
  Renders:
    A form for creating a new project or editing an existing one.
    Fields include project name, description, and initial
    configuration options.

  Props:
    - project: Project | null — if provided, pre-populate for editing
    - isSubmitting: boolean — disables the form during submission

  Events:
    - on:submit — dispatched with form data when the user submits
    - on:cancel — dispatched when the user cancels

  Implementation Notes:
    - Use validators from $lib/utils/validators.ts for inline validation.
    - Show real-time validation errors below each field.
-->
