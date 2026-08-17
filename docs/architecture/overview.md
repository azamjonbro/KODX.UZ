# KODX 2.0 — Architecture Overview

## Monorepo Layout
KODX 2.0 uses **pnpm workspaces** to maintain clean boundaries between apps and packages:

* **`apps/web`**: Learner portal (Vue 3, TypeScript, Pinia, Tailwind CSS, Monaco Editor).
* **`apps/api`**: REST backend service (Node.js, Express, TypeScript, Prisma, PostgreSQL).
* **`apps/admin`**: Content Management & Admin Dashboard (Vue 3, TypeScript, Pinia, Tailwind CSS).
* **`packages/types`**: Shared domain models, DTOs, and TypeScript interfaces.
* **`packages/config`**: Base TypeScript and tooling configurations.
* **`packages/validation`**: Shared Zod schemas for runtime request validation.
* **`packages/ui`**: Shared UI design system and reusable component primitives.
* **`infrastructure/`**: Docker & Nginx deployment assets.

## Core Backend Layering
The backend API follows domain-driven modular layering:
1. **Routes**: Express routing and middleware attachment.
2. **Controllers**: Request handling, schema validation, HTTP responses.
3. **Services**: Business logic, transactional workflows.
4. **Prisma ORM**: Data persistence with typed schema models on PostgreSQL.
