<!--
  CsvUploader.svelte — CSV File Upload Widget
  ─────────────────────────────────────────────────────────────
  Renders:
    A drag-and-drop (or click-to-browse) file upload area for
    importing target LLMs via CSV. Shows upload progress,
    validation results, and a preview of parsed rows.

  Props:
    - projectId: string — the project to upload targets into
    - isUploading: boolean — disables interactions during upload

  Events:
    - on:upload — dispatched with the File object when upload starts
    - on:complete — dispatched with parsed Target[] on success
    - on:error — dispatched with error message on failure

  Implementation Notes:
    - Validate file type (.csv) and size before uploading.
    - Use validators from $lib/utils/validators.ts.
    - Call uploadTargetsCsv() from $lib/api/client.ts.
-->
