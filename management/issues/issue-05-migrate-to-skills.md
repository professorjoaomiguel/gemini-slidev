# Issue #5: Migração para Agent Skill (Arquitetura Fase 2)

**Status:** Open
**Branch Sugerida:** `feat/5-migrate-to-skills`
**Tipo:** Refatoração Arquitetural

## Justificativa Técnica
Atualmente, o arquivo `GEMINI.md` é carregado como contexto global através da configuração `contextFileName` no `gemini-extension.json`. 
**Problema:** Isso injeta 1.4KB de regras do Slidev em TODAS as interações do usuário com o Gemini CLI, mesmo quando ele não está trabalhando em apresentações. Isso desperdiça tokens e pode causar conflitos de comportamento em outros projetos.
**Vínculo com Código:** 
- Configuração afetada: `gemini-extension.json` (linha 4).
- Conteúdo a migrar: `GEMINI.md`.

## Solução Esperada
1. Criar a estrutura de diretórios `skills/slidev/`.
2. Criar `skills/slidev/SKILL.md` contendo as diretrizes de sintaxe Slidev e UnoCSS.
3. Remover a linha `contextFileName` de `gemini-extension.json`.
4. Adicionar a instrução "Activate the 'slidev' skill" no início dos prompts de todos os subcomandos em `commands/slidev/*.toml`.

## Critérios de Aceite
- O contexto do Slidev não deve ser carregado em comandos genéricos (ex: `/help`).
- Ao executar `/slidev:generate`, a IA deve ativar a skill e seguir as regras de formatação.
