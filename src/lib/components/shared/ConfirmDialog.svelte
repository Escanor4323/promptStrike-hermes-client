<!--
  ConfirmDialog.svelte — Confirmation Dialog
  ─────────────────────────────────────────────────────────────
  Renders:
    A modal dialog for confirming destructive actions (delete project,
    stop assessment, etc.). Shows a message and confirm/cancel buttons.

  Props:
    - isOpen: boolean — controls dialog visibility
    - title: string — dialog title (e.g., "Delete Project?")
    - message: string — confirmation message body
    - confirmLabel: string — confirm button text (default: "Confirm")
    - cancelLabel: string — cancel button text (default: "Cancel")
    - variant: 'danger' | 'warning' | 'info' — button color scheme

  Events:
    - on:confirm — dispatched when the user confirms
    - on:cancel — dispatched when the user cancels or closes
-->
