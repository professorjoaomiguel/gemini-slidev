# Issue #8: Criar Comando /slidev:component (Vue Component Creator)

**Status:** Open
**Branch Sugerida:** `feat/8-vue-component-creator`
**Tipo:** Feature / Extensibilidade

## Justificativa Técnica
O diferencial do Slidev é ser baseado em Vue. No entanto, criar componentes manuais que respeitem o UnoCSS e o lifecycle do Slidev é uma tarefa complexa para usuários não-desenvolvedores.
**Vínculo com Código:**
- Charter da extensão: `GEMINI.md` (menciona Vue-based).

## Solução Esperada
Criar o comando `/slidev:component` que automatiza a criação de arquivos `.vue` na pasta `/components/`.
O prompt deve:
1. Validar a existência da pasta `./components/` (e criá-la se necessário).
2. Gerar código Vue 3 (Script Setup) limpo.
3. Utilizar classes UnoCSS para estilo.
4. Mostrar ao usuário o snippet de como usar o componente no `slides.md` (ex: `<MeuComponente />`).

## Critérios de Aceite
- Criação bem-sucedida de um componente funcional em `/components/`.
- O componente gerado deve ser renderizado corretamente pelo Slidev após o salvamento.
