# Repository Organization and Documentation Refactoring

This plan aims to reorganize the repository structure to better separate agent-specific instructions from the extension's functional documentation, and to ensure proper git management of internal folders.

## User Review Required

> [!IMPORTANT]
> - Root GEMINI.md will be refactored to focus on the extension's purpose and behavior for the Gemini CLI.
> - .gemini/GEMINI.md will now host the specific instructions for AI agents (like Antigravity) assisting in development.
> - .gemini and management folders will be added to .gitignore.

## Proposed Changes

### Configuration

#### [MODIFY] [.gitignore](file:///c:/Users/Docente/OneDrive%20-%20Sistema%20Fiergs/Documentos/GitHub/gemini-slidev/.gitignore)
- Add .gemini/ and management/ to the excluded directories.

### Documentation & Instructions

#### [MODIFY] [.gemini/GEMINI.md](file:///c:/Users/Docente/OneDrive%20-%20Sistema%20Fiergs/Documentos/GitHub/gemini-slidev/.gemini/GEMINI.md)
- Move the current AI Assistant instructions (from root GEMINI.md) here.
- This file will serve as the coordination hub for agents.

#### [MODIFY] [GEMINI.md](file:///c:/Users/Docente/OneDrive%20-%20Sistema%20Fiergs/Documentos/GitHub/gemini-slidev/GEMINI.md) (Root)
- Refactor to follow Gemini CLI extension standards.
- Focus on describing the extension, its command architecture (commands/), and how the model should behave when this extension is active.

## Verification Plan

### Manual Verification
- Check that .gitignore correctly reflects the new exclusions.
- Confirm that both GEMINI.md files have their intended content.
- Ensure no functional code is broken by these documentation changes.
