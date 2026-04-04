# Slidev Extension - Development Context

This file contains the development directives for the Slidev extension for Gemini CLI. It must be followed by all AI agents assisting in the maintenance and evolution of this codebase.

## Integrated Workflow (GitHub)

Always prioritize traceability and documentation on GitHub.

1. **Issues**: Before starting any task (bug or new feature), verify if a corresponding Issue exists on GitHub. If not, create one with a clear description of the problem or objective.
2. **Branching**: All development must occur in separate branches.
   - Use the `feat/` prefix for new features.
   - Use the `fix/` prefix for bug fixes.
   - Always include the issue number in the branch name (e.g., `feat/12-add-pdf-export`).
3. **Commits**: Use the **Conventional Commits** standard.
   - Example: `feat: add support for PDF export (closes #12)`
   - The commit body should explain the "why" of the changes when necessary.
4. **Pull Requests (PRs)**: 
   - Upon completing a task, open a PR to the main branch (`master` or `main`).
   - The PR must be reviewed before merging.
   - Document what was done and how to test.

## Quality and Coding Standards

- **Commands (.toml)**: All command definitions in `commands/` must be clear, well-documented, and follow the Gemini CLI prompt guidelines.
- **Node.js**: Respect the minimum Node.js version (>=18.0.0 or 20.12.0+ for Slidev) as specified in `package.json` and `README.md`.
- **Linting & Formatting**: Run `npm run lint` and `npm run format` before completing any task to ensure code style consistency.

## AI Context Management

- **User Charter (Root GEMINI.md)**: This file is strictly for the agent when the *end-user* is using the extension. It must not contain development instructions.
- **Development Charter (.gemini/GEMINI.md)**: This file (which you are reading) is the charter for the development of the extension. Use it to guide your behavior as a technical assistant.

---
*Created for Prof. Me. João Miguel Lac Roehe (SENAI-RS).*
