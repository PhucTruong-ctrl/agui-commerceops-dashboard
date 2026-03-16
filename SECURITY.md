# Security Policy

## Supported Versions

This project is currently in Academic MVP stage.
Security fixes are applied on the latest working version referenced by `VERSION`.

## Reporting a Vulnerability

If you discover a security issue, please report privately to the project owner.

Include:
- Affected component (frontend/backend/prisma/workflow)
- Reproduction steps
- Impact assessment
- Suggested mitigation (if any)

Please do **not** disclose vulnerabilities publicly before a fix is available.

## Secret Management

- Never commit `.env` or credential files.
- Use `.env.example` for documented non-sensitive placeholders.
- Rotate compromised credentials immediately.
