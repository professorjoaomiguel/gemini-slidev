import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import * as prettier from 'prettier';
import fs from 'node:fs';
import path from 'node:path';

describe('Slidev Command: /slidev:format', () => {
  const testFile = path.resolve(process.cwd(), 'tests/tmp/dirty-slides.md');

  beforeEach(() => {
    // Garante que o diretório temporário exista (essencial para o CI)
    const tmpDir = path.dirname(testFile);
    if (!fs.existsSync(tmpDir)) {
      fs.mkdirSync(tmpDir, { recursive: true });
    }
    // Conteúdo propositalmente mal formatado
    const dirtyContent = '---\ntheme: seriph\n---\n\n# Slide 1  \n   * Item 1\n* Item 2\n\n\n---  \n\n\n# Slide 2';
    fs.writeFileSync(testFile, dirtyContent);
  });

  afterEach(() => {
    if (fs.existsSync(testFile)) fs.unlinkSync(testFile);
  });

  it('should format a messy markdown file using prettier API', async () => {
    const originalContent = fs.readFileSync(testFile, 'utf8');
    
    // Executa a formatação via API (sem chamar o shell/npx)
    const formattedContent = await prettier.format(originalContent, {
      parser: 'markdown',
      semi: true,
      singleQuote: true,
    });
    
    // O Prettier deve ter limpado o conteúdo
    expect(formattedContent).not.toContain('# Slide 1  ');
    expect(formattedContent).toContain('# Slide 1');
    expect(formattedContent).not.toContain('\n\n\n---');
    // Verifica se a estrutura básica foi mantida mas limpa
    expect(formattedContent).toContain('theme: seriph');
  });
});
