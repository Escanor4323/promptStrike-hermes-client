<!--
  ReportExporter.svelte — PDF/HTML Export Trigger
  ─────────────────────────────────────────────────────────────
  Renders:
    A UI widget for exporting assessment reports in various
    formats (PDF, HTML, JSON). Includes format selector,
    date range filter, and a download button.

  Props:
    - projectId: string — the project context for the report
    - assessmentId: string | null — optional specific assessment
    - availableFormats: ReportFormat[] — formats the backend supports

  Events:
    - on:export — dispatched with { format, dateRange } when export is triggered
    - on:downloadReady — dispatched when the file is ready for download

  Implementation Notes:
    - Call exportReport() from $lib/api/client.ts.
    - Show a loading spinner during export generation.
    - Trigger browser download when the blob is received.
-->
