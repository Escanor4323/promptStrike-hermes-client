<!--
  login/+page.svelte — Login Page
  ─────────────────────────────────────────────────────────────
  Screen:
    Public login page. Allows users to authenticate with their
    credentials (username/email and password).

  Data Needed:
    None — this is a public page.

  User Actions:
    - Enter username/email and password
    - Submit login form
    - See validation errors for invalid credentials
    - On success, redirect to the dashboard (/(app)/)

  Implementation Notes:
    - Call login() from $lib/api/client.ts on form submit.
    - Update authStore on successful login.
    - Display ErrorAlert for failed login attempts.
    - No sidebar or navbar — standalone centered form.
    - PromptStrike branding / logo at the top.
-->
