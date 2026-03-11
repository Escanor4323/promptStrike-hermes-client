<!--
  LiveResultsFeed.svelte — Real-Time SSE Results Display
  ─────────────────────────────────────────────────────────────
  Renders:
    A live-updating feed of attack results as they stream in
    via SSE. Each result shows the prompt sent, the LLM response,
    whether the injection was successful, and a timestamp.

  Props:
    - results: AttackResult[] — the streaming results array
    - isStreaming: boolean — whether the SSE connection is active

  Events:
    - on:resultClick — dispatched when a result row is clicked for detail

  Implementation Notes:
    - Auto-scroll to the latest result unless the user has scrolled up.
    - Color-code results: green for successful injection, red for blocked.
    - Show a "Streaming..." indicator when isStreaming is true.
    - Consider virtualized scrolling for large result sets.
-->
