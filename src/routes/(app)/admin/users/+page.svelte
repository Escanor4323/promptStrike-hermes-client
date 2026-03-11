<!--
  admin/users/+page.svelte — User Management Table (Admin Only)
  ─────────────────────────────────────────────────────────────
  Screen:
    Admin-only page for managing platform users. Displays a
    table of all users with their roles and provides controls
    for role management.

  Data Needed:
    - users: User[] — loaded by sibling +page.server.ts

  User Actions:
    - View all users in a table
    - Change a user's role (admin/analyst/viewer)
    - Search/filter users by name or role
    - Potentially invite new users

  Implementation Notes:
    - Only accessible to users with admin role.
    - The +page.server.ts should verify admin role before
      returning data (defense in depth — the (app) auth guard
      only checks authentication, not authorization).
-->
