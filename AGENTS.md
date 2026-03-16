# AGENTS.md — Governance Workflow

This repository follows a strict execution workflow tied to Trello tracking.

## Mandatory Working Rules

1. Do not change the technology stack without explicit approval.
2. Never commit secrets (`.env`, credentials, private keys, tokens).
3. Do not modify academic source documents (`docs/*.md`, `docs/*.odt`, `docs/*.pdf`) unless explicitly requested for academic content updates.
4. Use Conventional Commits for all commits.

## Required Delivery Workflow (Trello-Driven)

For every work item/card:

1. Implement the scoped changes.
2. Run local verification commands relevant to the scope.
3. Commit changes with a clear Conventional Commit message.
4. Update the corresponding Trello card before closing work:
   - Update checklist items to reflect completed tasks.
   - Update card status/list (e.g., Done/Completed) according to board convention.
   - Add a comment with evidence:
     - commit hash
     - verification results (lint/build/test)
     - repository/PR URL (if available)

## Evidence Comment Template

Use this structure when posting Trello evidence:

```text
✅ Completed
- Commit: <hash>
- Verification:
  - frontend: <result>
  - backend: <result>
- Repo/PR: <url>
- Notes: <optional>
```

## CI/Release Hygiene

- Keep CI workflows under `.github/workflows/` passing.
- Maintain `CHANGELOG.md` using Keep a Changelog.
- Maintain `VERSION` as the current project release marker.
