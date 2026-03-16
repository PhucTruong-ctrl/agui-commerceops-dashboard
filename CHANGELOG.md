# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Repository governance documents: `AGENTS.md`, `README.md`, `SECURITY.md`.
- Root `.gitignore` baseline and release metadata via `VERSION`.
- GitHub Actions CI workflows for frontend and backend build validation.
- Backend API base architecture with route/controller/service/repository separation.
- Auth foundation endpoint `POST /api/v1/auth/login` with Zod payload validation and JWT issuing flow.
- Prisma User model extended with `passwordHash` to support credential-based authentication.

## [0.1.0] - 2026-03-16

### Added
- Initial Academic MVP project baseline (frontend + backend + docs scaffolding).
