<!--
  reports/+page.svelte — Report List + Dashboard Charts + Export
  ─────────────────────────────────────────────────────────────
  Screen:
    Displays reports for the current project. Includes dashboard
    charts (success/fail visualizations) and report export functionality.

  Data Needed:
    - reports: Report[] — loaded by sibling +page.server.ts
    - assessments: Assessment[] — for chart context

  User Actions:
    - View dashboard charts (DashboardCharts component)
    - Browse generated reports
    - Export reports in PDF/HTML/JSON (ReportExporter component)
    - Filter reports by date range or assessment
-->
