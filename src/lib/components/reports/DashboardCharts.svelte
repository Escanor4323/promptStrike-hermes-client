<!--
  DashboardCharts.svelte — Success/Fail Visualizations
  ─────────────────────────────────────────────────────────────
  Renders:
    Charts and graphs summarizing assessment results for a project.
    Includes success/fail ratios, attack type breakdowns,
    trends over time, and per-target comparison charts.

  Props:
    - reports: Report[] — report data to visualize
    - assessments: Assessment[] — assessment data for chart context

  Events:
    - on:drillDown — dispatched when a chart segment is clicked for detail

  Implementation Notes:
    - Consider using Chart.js or D3.js for rendering.
    - Chart types: pie/donut for success rate, bar for per-target,
      line for trends over time.
    - Responsive — charts should resize with the container.
-->
