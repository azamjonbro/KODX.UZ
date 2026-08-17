# ADR 0001: Monorepo Architecture with pnpm Workspaces

## Status
Accepted

## Context
KODX 2.0 requires seamless type sharing between client and server, shared Zod validation rules, unified tooling, and independent deployment of the main web app, admin portal, and backend API.

## Decision
We adopt **pnpm workspaces** as the primary monorepo manager.
- `apps/` contains deployable applications (`web`, `api`, `admin`).
- `packages/` contains shared libraries (`types`, `config`, `validation`, `ui`).

## Consequences
- High-speed installation via hardlinks.
- Strict isolation preventing phantom dependencies.
- Single source of truth for contracts and domain models.
