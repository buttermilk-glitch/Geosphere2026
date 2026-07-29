<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

read the PRODUCT.md file before you start executing the task.


# Page Generation & Coding Rules

- **Architecture & Structural Guidelines:**
  - **VSA & DDD Pattern:** Apply `architecture` (`.agents/skills/architecture/SKILL.md`). Structure features as self-contained vertical slices with clear Domain-Driven Design boundaries.
  - **No `src/` Folder:** Do NOT use or create a `src/` folder. All code must reside directly at root (`app/`, `features/`, `components/`, `lib/`, `hooks/`).

- **Strict Code Rules:**
  - **No Code Comments:** Do not write any inline or block comments in generated code (no `// TODO`, no `/* explanation */`, no component docstrings). Output pure, self-documenting code only.
  
Don't make a self-assumption, if there is a question or confirmation that user needed then ask them before you execute the task.
<!-- END:nextjs-agent-rules -->
