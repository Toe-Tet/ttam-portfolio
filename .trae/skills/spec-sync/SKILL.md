---
name: "spec-sync"
description: "Keeps SPEC.md aligned with the current implementation and updates AGENTS.md only when project rules or reference files change. Invoke after meaningful project structure or UI/content changes."
---

# Spec Sync

Use this skill to keep project documentation aligned with the current state of the portfolio.

## When To Invoke

Invoke this skill when any of the following is true:

- A section in `app/page.tsx` is added, removed, renamed, or materially redesigned
- Content structure, UX behavior, or styling conventions change enough that `SPEC.md` becomes stale
- Project rules, file structure, or important reference files change and `AGENTS.md` may need an update
- The user explicitly asks to update or review `SPEC.md`, `AGENTS.md`, or project documentation
- A feature is implemented and the workspace needs a documentation sync pass

Do not invoke this skill for trivial copy edits that do not change implementation meaning, project conventions, or documented structure.

## Primary Responsibilities

1. Review the current implementation state before editing docs
2. Confirm the implementation or change set is final before editing any documentation
3. Update `SPEC.md` to reflect the latest product scope, UI structure, content model, and next steps
4. Update `AGENTS.md` only if project guidelines, file structure, or important reference files change
5. Keep both documents concise, accurate, and aligned with the actual codebase

## Operating Rules

- Treat `SPEC.md` as the implementation snapshot and product/UI reference
- Treat `AGENTS.md` as the rulebook for future agents working in the repo
- Confirm with the user that the result is final before updating either document
- If the result is still in progress, exploratory, or not yet confirmed as final, do not update `SPEC.md` or `AGENTS.md`
- Prefer updating `SPEC.md` for feature/state changes
- Only update `AGENTS.md` when conventions, constraints, or project references truly changed
- Do not invent roadmap items that are not grounded in current work or explicit user direction
- Preserve the single-page portfolio context and 90s retro design direction

## Recommended Workflow

1. Confirm the current implementation result is final with the user
2. Read:
    - `SPEC.md`
    - `AGENTS.md`
    - relevant implementation files such as `app/page.tsx`, `app/globals.css`, and `app/layout.tsx`
3. Compare the docs against the actual implementation
4. Update `SPEC.md` first
5. Decide whether `AGENTS.md` needs changes
6. If `AGENTS.md` does not require changes, leave it untouched
7. Verify the final docs for consistency and clarity

If the user has not confirmed the result is final, stop after the confirmation step and leave both documents unchanged.

## Update Guidelines

### Update `SPEC.md` for:

- New sections or removed sections
- Layout changes that affect the page architecture
- Visual-system changes that affect shared design direction
- New interactive behavior such as animations or state-driven UI
- Updated content strategy, section purpose, or implementation stage

### Update `AGENTS.md` for:

- New important files that future agents should know about
- Changes to project constraints or conventions
- New structural rules about how the portfolio should be built or maintained

## Expected Output

When the skill is used successfully, the repo should have:

- An up-to-date `SPEC.md`
- An updated `AGENTS.md` only if justified by actual convention or reference changes
- A short summary of what changed and why
