# AGENTS.md — Project Operating Rules

This file applies to every agent/session working in this repository (including non-Hive sessions).

## Scope

1. Work only inside this project scope.
2. Do not modify machine-global config (`~/.config/*`, `~/.agents/*`) unless explicitly requested.
3. Do not work outside the active Trello card scope.

## Language Policy

1. **Repository content must be English-only**: source code, comments, function/variable names, docs, commit messages, and AGENTS.md.
2. **Trello content must be Vietnamese-only** to keep board communication consistent.
3. Do not use emoji in Trello comments.

## Required Build and Verification

Run verification commands that match the changed scope before reporting completion.

- If `frontend/*` changes:
  - `cd frontend && npm run lint`
  - `cd frontend && npm run build`
- If `backend/*` changes:
  - `cd backend && npm run build`
  - run backend tests when the card requires tests

If changes are docs/config only and do not affect runtime, explicitly state why full verification was not run.

## Git and Commit Rules

1. Never work directly on `main`/`master`; use a feature branch (`agent/<task-name>` or equivalent).
2. Check working tree status before editing.
3. Do not commit or push unless explicitly requested.
4. Use Conventional Commits.

## Security

1. Never commit secrets (`.env`, credentials, private keys, tokens).
2. Never print/paste raw secrets in output, logs, or comments.
3. When sensitive config must be referenced, mask values (`***`).

## Mandatory Trello Workflow

For each card:

1. Implement strictly within card scope.
2. Run scope-appropriate verification.
3. Update checklist and list/status according to board convention.
4. Add an evidence comment with commit hash, verification results, and repo/PR URL (if available).

## Trello Evidence Comment Template (Vietnamese, no emoji)

```text
Hoàn thành
- Commit: <hash>
- Kết quả xác minh:
  - frontend: <kết quả>
  - backend: <kết quả>
- Repo/PR: <url>
- Ghi chú: <tuỳ chọn>
```

## Definition of Done

1. Matches the approved card scope.
2. Required verification commands were run with recorded results.
3. Trello checklist and evidence comment were updated using the language rules.
4. Final report includes changed files, verification commands/results, and remaining risks (if any).

## Gotchas

1. Do not start DB/schema implementation before analysis/design chain is complete.
2. Do not close a card without Trello evidence comment.
3. Do not claim “done” without scope-appropriate verification.
