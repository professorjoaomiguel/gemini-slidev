# Slidev - Gemini CLI Extension

A professional Gemini CLI extension for creating, editing, and managing [Slidev](https://sli.dev/) presentations—Markdown-based slides for developers.

## ✨ Features

- **⚡ Instant Setup**: Initialize new Slidev projects with best practices and theme selection.
- **📝 Intelligent Generation**: Create full slide decks with optimal layouts (`two-cols`, `image-right`), animations (`<v-click>`), and speaker notes.
- **🎨 Smart Editing**: Modify slides using UnoCSS utility classes and refined component usage.
- **➕ Seamless Addition**: Insert new slides intelligently into existing decks.
- **📤 Production Export**: Export to PDF/PNG with support for animation steps (`--with-clicks`).
- **▶️ Dev Server**: Integrated control for starting the local preview server.

## 📋 Prerequisites

1. **Gemini CLI** installed and configured
2. **Node.js 18+** and npm/pnpm/yarn
3. **Slidev** (will be installed automatically in new projects)

## 🚀 Installation

### 1. Install Extension

Install the extension using the `gemini extensions install` command:

```bash
gemini extensions install https://github.com/professorjoaomiguel/gemini-slidev-extension
```

### 2. Activate

Restart the Gemini CLI. The following commands will be available:

- `/slidev.init` - Initialize a new Slidev project
- `/slidev.generate` - Generate complete slide decks from topics
- `/slidev.add` - Add new slides with specific layouts
- `/slidev.edit` - Refine content and styles
- `/slidev.export` - Export presentation to PDF/PNG
- `/slidev.run` - Start the local development server
- `/slidev.help` - Show help for the Slidev extension
- `/slidev` - Main entry point

## 💡 Usage

The extension provides a suite of commands for the entire presentation lifecycle:

### 🎯 Specific Commands (Recommended)

**Initialize Project:**

```bash
/slidev.init
# "Initialize a new project with the 'seriph' theme"
```

**Generate Content:**

```bash
/slidev.generate "Deep Learning Fundamentals"
# Generates a structured deck with cover, intro, key concepts, and summary
```

**Add Slides:**

```bash
/slidev.add "Comparison of React vs Vue"
# Adds a 'two-cols' layout slide comparing the frameworks
```

**Edit & Refine:**

```bash
/slidev.edit "Make the title on slide 3 bigger and red"
# Applies 'text-4xl text-red-500' classes using UnoCSS
```

**Export:**

```bash
/slidev.export --format pdf --with-clicks
# Exports a PDF including all animation steps
```

**Run Server:**

```bash
/slidev.run
# Starts the dev server at http://localhost:3030
```

### 🌟 Natural Language Command (Flexible)

**Open-ended prompts:**

```bash
/slidev I need a presentation about Rust programming language for beginners
/slidev Add a slide with a code block showing a Hello World example in Python
/slidev Export the current deck to PNG
```

## 🔧 Technical Details

### Core Principles

This extension adheres to strict quality standards defined in `GEMINI.md`:

- **Markdown-Centric**: Treats `slides.md` as the source of truth.
- **Component-Driven**: Leverages Slidev's built-in layouts and Vue components.
- **Progressive Disclosure**: Smart use of animations to control information flow.

### Configuration

The extension automatically handles:

- YAML Frontmatter validation
- Component syntax checking
- Asset path resolution

## 🛠 Local Development

Developing extensions for Gemini CLI is a lightweight, iterative process. Use the `link` command to develop locally without reinstalling your extension after every change:

```bash
cd gemini-slidev-extension
gemini extensions link .
```
Changes to your code are immediately available in the CLI after you restart the session.

## 🩺 Troubleshooting

- **Extension not loading:** If your extension doesn't appear in `/extensions list`, ensure the `gemini-extension.json` is valid and the CLI has been restarted.
- **Command conflicts:** Remember that user and project commands take precedence over extension commands. Use the prefixed name (e.g., `/slidev.init`) to verify the extension's version. Run `/help` to see a list of all available commands and their sources.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📄 Legal

- **License**: [Apache License 2.0](LICENSE)
