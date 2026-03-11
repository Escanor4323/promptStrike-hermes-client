<!--
  TopologyMap.svelte — Visual Map of Discovered LLMs
  ─────────────────────────────────────────────────────────────
  Renders:
    A visual topology/graph showing discovered LLM targets and
    their relationships (e.g., provider grouping, model families).
    Interactive — click nodes to view target details.

  Props:
    - targets: Target[] — list of targets to visualize
    - selectedTargetId: string | null — currently selected target

  Events:
    - on:selectTarget — dispatched when a target node is clicked

  Implementation Notes:
    - Consider using a library like D3.js or vis.js for graph rendering.
    - Nodes should be color-coded by provider or status.
    - Support zoom/pan interactions.
-->
