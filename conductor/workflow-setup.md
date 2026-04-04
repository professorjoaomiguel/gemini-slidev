# Implementation Plan: GitHub Workflow and AI Context Setup

## Objective
Establish a formal, GitHub-integrated development workflow (Issues, Pull Requests, Commits) for the Slidev Gemini CLI Extension. Clarify and separate the AI context:
1. `GEMINI.md` (Root): Defines the behavior of the AI agent when the user is *using* the extension.
2. `.gemini/GEMINI.md`: Defines the directives for AI agents when *developing* the extension itself.

## Key Files & Context
- `GEMINI.md`: The official extension charter loaded by Gemini CLI when the extension is active.
- `.gemini/GEMINI.md`: Local workspace context for AI agents working on the codebase.
- `.gitignore`: Needs to allow `.gemini/GEMINI.md` to be tracked in version control to share development directives.

## Implementation Steps

### 1. Update `.gitignore`
- Remove or modify the ignore rule for `.gemini/` so that `.gemini/GEMINI.md` can be committed to the repository.

### 2. Configure Root `GEMINI.md`
- Ensure this file is strictly focused on the extension's runtime behavior, as per Gemini CLI documentation.

### 3. Create/Update `.gemini/GEMINI.md`
- Write the directives for the development process.
- **Workflow Enforcement:** Always check for an existing GitHub Issue or create one before starting a task.
- **Branching:** Work on feature branches (e.g., `feat/issue-number-description`).
- **Commits:** Write clear, conventional commits documenting the "why" and referencing the Issue number.
- **Pull Requests:** Open a PR for review using standard templates before merging into the main branch.

## Verification & Testing
- Run `git status` and verify that `.gemini/GEMINI.md` is trackable.
- Verify `GEMINI.md` content matches the `gemini-extension.json` `contextFileName` requirement and only contains runtime instructions.
