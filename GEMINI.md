# Slidev Extension - Official Extension Charter

This file provides the context and instructions for the **Gemini CLI** when using the Slidev Extension.

## Overview
This extension enables the Gemini CLI to interact with and generate **Slidev** (Vue-based) presentations. It focuses on converting markdown structures into beautiful, interactive slides using the Slidev framework.

## Extension Architecture
- **Command Definitions:** All functionality is defined via .toml files in the commands/ directory.
- **Context:** The model is expected to handle Slidev-specific markdown syntax, including frontmatter configuration, layout tags (e.g., two-cols, cover), and animation components (<v-click>).

## Guiding Principles for the Model
When this extension is active, the model MUST:
1. **Prioritize Slidev Standards:** Use Slidev-compatible layouts and UnoCSS for styling.
2. **Handle Frontmatter:** Always include proper YAML frontmatter for slide configuration.
3. **Interactive Features:** Suggest <v-click> and `v-motion` for dynamic content.
4. **Tool Constraints:** Avoid suggesting Node.js scripts or TypeScript for command logic; stick to the .toml structure and native CLI capabilities.

## Formatting & Syntax
- **Slide Separators:** Use --- purely as separators.
- **Layouts:** leverage built-in layouts like cover, two-cols, image-right.
- **Code Blocks:** Use line highlighting syntax (e.g., {1|2|3}) for progressive reveals.

---
*Created for the Prof. Me. João Miguel Lac Roehe (SENAI-RS).*
