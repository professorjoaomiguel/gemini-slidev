import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

describe('Slidev Extension Integrity', () => {
  it('should have all required command files', () => {
    const commandsDir = path.resolve(process.cwd(), 'commands/slidev');
    const requiredCommands = [
      'add.toml',
      'edit.toml',
      'export.toml',
      'generate.toml',
      'init.toml',
      'notes.toml',
      'run.toml',
      'theme.toml',
      'format.toml',
      'component.toml'
    ];

    requiredCommands.forEach(cmd => {
      const exists = fs.existsSync(path.join(commandsDir, cmd));
      expect(exists, `Command file ${cmd} is missing`).toBe(true);
    });
  });

  it('should have a valid gemini-extension.json', () => {
    const configPath = path.resolve(process.cwd(), 'gemini-extension.json');
    const content = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    
    expect(content.name).toBe('gemini-slidev');
    expect(content.skills).toBeDefined();
    expect(content.skills[0].name).toBe('slidev');
  });

  it('should have the Agent Skill file', () => {
    const skillPath = path.resolve(process.cwd(), 'skills/slidev/SKILL.md');
    expect(fs.existsSync(skillPath)).toBe(true);
  });
});
