# Repository Organization Walkthrough

The repository has been reorganized to separate agent-specific instructions from the extension's functional documentation. Key management folders are now correctly ignored by Git.

## Changes Made

### Configuration
- [x] **Updated .gitignore**: Added .gemini/ and management/ to ensure local management files are not tracked.

### Documentation & Instructions
- [x] **New .gemini/GEMINI.md**: Hosts the detailed AI Assistant instructions (Slidev expert context, constraints, and best practices).
- [x] **Refactored root GEMINI.md**: Now serves as the official "Extension Charter" for the Gemini CLI, describing the extension's purpose and architecture.
- [x] **Updated management/**: Created the management/plans/ directory and synced the implementation plan for this reorganization.

## Verification Results

- Verified .gitignore contents.
- Verified both GEMINI.md files for correct content and formatting.
- Confirmed management/plans/ directory and file existence.

> [!NOTE]
> The root GEMINI.md is now the primary context file for the Gemini CLI extension, while .gemini/GEMINI.md provides internal guidance for agents like Antigravity.
