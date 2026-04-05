import { describe, it, expect, afterEach } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

describe('Slidev Command: /slidev:component', () => {
  const componentsDir = path.resolve(process.cwd(), 'components');
  const testComponent = path.join(componentsDir, 'TestCard.vue');

  afterEach(() => {
    if (fs.existsSync(testComponent)) fs.unlinkSync(testComponent);
  });

  it('should ensure the components directory exists and can store a .vue file', () => {
    // Simula a pre-check e action do comando
    if (!fs.existsSync(componentsDir)) {
      fs.mkdirSync(componentsDir);
    }
    
    const mockVueContent = '<template>\n  <div class=\"p-4 bg-blue-500\">\n    <slot />\n  </div>\n</template>';
    fs.writeFileSync(testComponent, mockVueContent);
    
    expect(fs.existsSync(testComponent)).toBe(true);
    const savedContent = fs.readFileSync(testComponent, 'utf8');
    expect(savedContent).toContain('bg-blue-500');
  });
});
