# Issue #7: Implementar /slidev:format e Diretivas Avançadas v52+

**Status:** Open
**Branch Sugerida:** `feat/7-add-format-and-directives`
**Tipo:** Feature / Developer Experience (DX)

## Justificativa Técnica
O projeto já possui ferramentas de qualidade (`prettier`), mas elas estão restritas ao terminal do usuário. Além disso, a geração de slides está usando a diretiva `<v-click>` item por item, o que polui o Markdown. O Slidev v52+ suporta `v-clicks` no elemento pai.
**Vínculo com Código:**
- Script de formatação: `package.json` (linha 7).
- Regras de geração: `commands/slidev/generate.toml` (linha 16).

## Solução Esperada
1. Criar o comando `/slidev:format` que executa `npm run format` via `run_shell_command`.
2. Atualizar o prompt de `generate.toml` para instruir o uso de `v-clicks` em tags `<ul>` ou `<ol>` em vez de `<v-click>` em cada `<li>`.
3. Adicionar suporte a `v-mark` (highlighter) no prompt de edição (`edit.toml`).

## Critérios de Aceite
- O comando `/slidev:format` limpa o código do `slides.md` com sucesso.
- Listas geradas por IA usam `v-clicks` no container principal.
