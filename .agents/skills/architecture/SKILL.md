---
name: architecture
description: Guidelines and conventions for Vertical Slice Architecture (VSA) combined with Domain-Driven Design (DDD) in Next.js App Router projects. Directs AI to structure features as self-contained vertical slices with clear domain boundaries, avoiding src/ folder structures.
---

# Vertical Slice Architecture (VSA) & Domain-Driven Design (DDD) Guidelines

## 1. Core Philosophy
This project combines **Vertical Slice Architecture (VSA)** with **Domain-Driven Design (DDD)** principles to build scalable, maintainable, and high-cohesion Next.js App Router applications.

- **Vertical Slice Architecture (VSA):** Organizes code by **business features/capabilities** (vertical slices) instead of horizontal technical layers (global `controllers/`, `services/`, `views/`).
- **Domain-Driven Design (DDD):** Treats each feature slice as a **Bounded Context**. Core domain logic (business rules, entities, value objects, domain validations) is kept pure and isolated from UI frameworks or data persistence details.

---

## 2. Key Principles

1. **No `src/` Directory Rule**
   - The project uses the Next.js App Router root structure directly (`app/`, `features/`, `components/`, `lib/`, `hooks/`).
   - **DO NOT** use or reference `src/` in paths or generated code.

2. **Self-Contained Vertical Slices (Bounded Contexts)**
   - Each feature slice in `features/<feature-name>/` is a self-contained unit encapsulating its domain, application logic, infrastructure, and presentation.

3. **High Cohesion, Low Coupling**
   - Files that change together are co-located within the same feature folder.
   - Slices must remain independent. Direct cross-slice imports of internal implementation details are prohibited.

4. **Pure Domain Core inside Slices**
   - Business rules, invariants, domain types, and value objects reside in the feature's domain layer and do not depend on Next.js, React, or database ORMs.

5. **Zero Comment Policy Compliance**
   - In accordance with project rules, generated code within all slices must contain **no inline or block comments**. Code must be self-documenting through clear variable naming and clean abstractions.

---

## 3. Directory & File Structure Conventions

Root-level project structure (no `src/`):

```
├── app/                        # Next.js App Router (pages, layouts, route handlers)
│   ├── (auth)/
│   ├── (dashboard)/
│   ├── layout.tsx
│   └── page.tsx
├── features/                   # Vertical Slices (Bounded Contexts)
│   ├── <feature-name>/
│   │   ├── domain/             # DDD Domain Layer (Entities, Value Objects, Business Rules)
│   │   │   ├── model.ts
│   │   │   └── rules.ts
│   │   ├── application/        # Application / Use Case Layer (Actions, Handlers)
│   │   │   ├── actions.ts
│   │   │   └── queries.ts
│   │   ├── components/         # Feature-specific React UI Components
│   │   │   └── FeatureCard.tsx
│   │   ├── schemas/            # Validation Schemas (Zod)
│   │   │   └── feature.schema.ts
│   │   ├── hooks/              # Custom React Hooks for feature state
│   │   │   └── use-feature.ts
│   │   └── index.ts            # Public entry point / public API of the slice
│   └── ...
├── components/                 # Shared UI primitives (Shadcn UI, design system)
│   ├── ui/
│   └── providers/
├── hooks/                      # Global React hooks
└── lib/                        # Shared infrastructure (DB client, global utils)
```

---

## 4. Layering Inside a Vertical Slice

Each slice under `features/<feature-name>/` follows a clean internal structure:

1. **Domain (`domain/`)**: Pure TypeScript functions and types defining business rules and domain logic. Zero external framework dependencies.
2. **Application (`application/` & `schemas/`)**: Next.js Server Actions, API routes, data fetching queries, and Zod schemas for input validation.
3. **UI & Hooks (`components/` & `hooks/`)**: React components and UI hooks tailored strictly to this feature.
4. **Public API (`index.ts`)**: Explicitly exports only what external routes or other slices are allowed to consume.

---

## 5. Cross-Slice Communication Rules

- **Rule 1: Direct slice internals imports are forbidden.**
  Slice A cannot import `features/slice-b/domain/internal-rule.ts`. It may only import from Slice B's `index.ts` public interface or interact via page orchestration.

- **Rule 2: Shared Layer Boundaries.**
  If logic or UI primitives are shared across 2 or more slices, extract them to `components/ui/` or `lib/`. Keep shared modules feature-agnostic.

- **Rule 3: Next.js Route Orchestration.**
  Route files in `app/` serve as orchestrators. They import vertical slices and pass route parameters or request contexts down to slice entry points.

---

## 6. Execution Workflow for AI Agents

When building or modifying a feature:
1. **Locate or Create Feature Slice:** Work directly in `features/<feature-name>/` at the project root (never inside `src/`).
2. **Isolate Domain Rules:** Write domain entities and validation rules in `domain/` without React or Next.js imports.
3. **Build Application & UI:** Implement Server Actions, Zod schemas, React components, and hooks inside the slice.
4. **Expose Public API:** Export public components/actions via `index.ts`.
5. **Enforce Clean Code:** Ensure zero comment lines (`//` or `/* */`) in generated code.
