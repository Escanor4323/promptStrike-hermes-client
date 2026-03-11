<!--
  targets/+page.svelte — Target List + CSV Upload + Topology Map
  ─────────────────────────────────────────────────────────────
  Screen:
    Displays all targets for the current project. Includes a
    table of targets, CSV upload widget, and a visual topology map.

  Data Needed:
    - targets: Target[] — loaded by sibling +page.server.ts

  User Actions:
    - View targets in a table (using TargetRow components)
    - Upload a CSV file to bulk-import targets (CsvUploader)
    - View the topology map of discovered LLMs (TopologyMap)
    - Edit or delete individual targets
    - Select targets for assessment

  Implementation Notes:
    - Tabbed or split layout: table view + map view.
    - Use all three target components here.
-->
