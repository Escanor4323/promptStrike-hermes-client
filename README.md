# 🪽 Hermes — The Messenger

**PromptStrike Frontend**

> The analyst-facing interface for PromptStrike, a cybersecurity platform that enables TDAC analysts to test Large Language Models for prompt injection vulnerabilities.

Hermes presents data, captures input, and relays everything to the backend service ([ares-api](https://github.com/Escanor4323/promptStrike-ares-api)).

---

## Tech Stack

| Layer     | Technology                  |
| --------- | --------------------------- |
| Framework | SvelteKit (latest stable)   |
| Language  | TypeScript (strict mode)    |
| Styling   | Tailwind CSS                |
| Adapter   | adapter-node (Docker-ready) |
| Target OS | Kali Linux                  |

---

## Directory Structure

```
hermes-client/
├── src/
│   ├── app.html                    ← SvelteKit HTML shell
│   ├── app.css                     ← Tailwind base imports
│   ├── hooks.server.ts             ← Server hook: session validation
│   │
│   ├── lib/
│   │   ├── api/                    ← HTTP client, SSE, TypeScript types
│   │   ├── stores/                 ← Svelte stores (auth, project, assessment)
│   │   ├── components/             ← Reusable UI components
│   │   │   ├── layout/             ← Navbar, Sidebar, Footer
│   │   │   ├── projects/           ← ProjectCard, ProjectForm
│   │   │   ├── targets/            ← TargetRow, CsvUploader, TopologyMap
│   │   │   ├── assessments/        ← AttackCard, AttackConfigForm, LiveResultsFeed, StatusBadge
│   │   │   ├── reports/            ← DashboardCharts, ReportExporter
│   │   │   └── shared/             ← LoadingSpinner, ErrorAlert, ConfirmDialog
│   │   └── utils/                  ← Formatters, validators
│   │
│   └── routes/
│       ├── login/                  ← Public login page
│       └── (app)/                  ← Auth-protected app shell
│           ├── projects/           ← Project CRUD + sub-routes
│           │   └── [project_id]/
│           │       ├── targets/    ← Target management + CSV upload
│           │       ├── assessments/← Assessment CRUD + live results
│           │       └── reports/    ← Reports + charts + export
│           └── admin/users/        ← Admin user management
│
├── static/                         ← Static assets
├── Dockerfile                      ← Docker build stub (comments only)
└── docs/                           ← Architecture documentation
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 20
- **npm** ≥ 10

### Setup

```bash
# Clone the repository
git clone https://github.com/Escanor4323/promptStrike-hermes-client.git
cd promptStrike-hermes-client

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start the development server
npm run dev
```

### Environment Variables

| Variable         | Description                       | Default                 |
| ---------------- | --------------------------------- | ----------------------- |
| `PUBLIC_API_URL` | Base URL for the ares-api backend | `http://localhost:8000` |

---

## Scripts

| Command                | Description                                       |
| ---------------------- | ------------------------------------------------- |
| `npm run dev`          | Start development server with hot reload          |
| `npm run build`        | Build for production (adapter-node output)        |
| `npm run preview`      | Preview the production build locally              |
| `npm run check`        | Run TypeScript type checking via svelte-check     |
| `npm run lint`         | Run ESLint on all src/ files                      |
| `npm run lint:fix`     | Run ESLint with auto-fix                          |
| `npm run format`       | Format all src/ files with Prettier               |
| `npm run format:check` | Check formatting without modifying files          |
| `npm run validate`     | Run full pre-commit chain (lint + format + check) |

---

## Architecture Notes

- **No direct DB access** — Hermes communicates exclusively with `ares-api` via HTTP and SSE.
- **snake_case → camelCase** transform happens in exactly one place: `src/lib/api/client.ts`.
- **Session auth** is handled via cookies, validated on every request in `hooks.server.ts`.
- **Route protection** is enforced by the `(app)/+layout.server.ts` auth guard.

For the full architecture overview, see [docs/architechture_overview.md](docs/architechture_overview.md).

---

## Naming Conventions

| Element             | Convention          | Example             |
| ------------------- | ------------------- | ------------------- |
| Svelte components   | `PascalCase.svelte` | `AttackCard.svelte` |
| Route files         | SvelteKit defaults  | `+page.svelte`      |
| TS utility files    | `camelCase.ts`      | `apiClient.ts`      |
| Functions/variables | `camelCase`         | `fetchProjects()`   |
| Constants           | `UPPER_SNAKE_CASE`  | `API_BASE_URL`      |
| Types/interfaces    | `PascalCase`        | `AssessmentStatus`  |
| Svelte stores       | `camelCase`         | `projectStore`      |
| CSS classes         | `kebab-case`        | Tailwind utilities  |
| Event handlers      | `on<Event>`         | `onAttackComplete`  |

---

## Developer Setup — Pre-Commit Hooks

This project uses **Husky** + **lint-staged** for automatic pre-commit quality checks.

```bash
# One-time setup (after cloning the repo)
npm install
# Husky installs automatically via the "prepare" script

# Verify hooks are active
ls -la .husky/pre-commit    # should exist and be executable

# Run the full validation chain manually
npm run validate

# If you need to bypass in an emergency (document why in the commit message)
git commit --no-verify -m "EMERGENCY: <reason>"
```

> ⚠️ **Warning:** `--no-verify` bypasses ALL hooks. CI will still catch violations.

### What Runs On Commit

```
git commit
  │
  ├─ lint-staged (staged files only)
  │   ├─ *.ts         → eslint --fix → prettier --write
  │   ├─ *.svelte     → eslint --fix → prettier --write
  │   └─ *.css/json/… → prettier --write
  │
  ├─ svelte-check (full project)
  │   └─ Type-checks all .svelte and .ts files
  │
  ├─ ALL PASS → commit succeeds
  └─ ANY FAIL → commit blocked, developer fixes and retries
```

---

## Standard Operating Procedure — Commit Workflow

1. **Write code**
2. **Stage changes:** `git add <files>`
3. **Commit:** `git commit -m "descriptive message"`
   - Pre-commit hooks run automatically:
     - **lint-staged** processes staged files:
       - ESLint `--fix` (lint + auto-fix `.ts` and `.svelte` files)
       - Prettier `--write` (format all staged files)
       - Modified files are re-staged automatically
     - **svelte-check** runs on the full project:
       - Type-checks all `.svelte` and `.ts` files
       - Catches cross-file type breakage
   - If any hook fails:
     - **Auto-fixed files:** already re-staged — just re-run `git commit`
     - **Type errors:** read the output, fix the code, `git add`, `git commit` again
4. **Push to remote:** `git push origin <branch>`
5. **CI pipeline** runs the full suite (lint + types + unit + build)
6. **Open PR** when ready → CI must pass → 1 review required → merge

---

## Commit Message Convention

Use **Conventional Commits** for consistency with the backend (ares-api):

```
<type>(<scope>): <short description>

Types:
  feat     — new feature
  fix      — bug fix
  refactor — code change (no new feature or fix)
  docs     — documentation only
  test     — adding or updating tests
  chore    — build, CI, dependency updates
  style    — formatting, whitespace (no logic change)

Scope (optional): page, component, store, api, layout, config

Examples:
  feat(page): add project creation form
  fix(store): clear assessment state on project switch
  refactor(api): extract snake-to-camel transform to utility
  chore(config): add eslint-plugin-svelte
  test(component): add StatusBadge render tests
```

---

## License

_TBD_
