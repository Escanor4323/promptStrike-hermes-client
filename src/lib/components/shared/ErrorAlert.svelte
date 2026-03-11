<!--
  ErrorAlert.svelte — Error Message Display
  ─────────────────────────────────────────────────────────────
  Renders:
    A dismissible alert banner for displaying error messages.
    Used for API errors, validation failures, and general
    error notifications.

  Props:
    - message: string — the error message to display
    - title: string — optional alert title (default: "Error")
    - dismissible: boolean — whether the alert can be closed (default: true)

  Events:
    - on:dismiss — dispatched when the user closes the alert
-->
