# Issue #6: Refatoração do Roteador Base (UX e Confiabilidade)

**Status:** Open
**Branch Sugerida:** `fix/6-refactor-base-command`
**Tipo:** UX / Correção de Fluxo

## Justificativa Técnica
O comando `/slidev` definido em `commands/slidev.toml` atua como um roteador. Ele instrui a IA a "usar os subcomandos". 
**Problema:** O Gemini CLI não permite que uma extensão execute seus próprios subcomandos via prompt de texto. Isso faz com que a IA alucine, respondendo que executou um comando (ex: `/slidev:init`) sem realmente disparar a lógica do arquivo `.toml` correspondente.
**Vínculo com Código:**
- Prompt afetado: `commands/slidev.toml` (linhas 4-10).

## Solução Esperada
Refatorar o prompt para que a IA atue como um **Agente Consultor de Orquestração**. 
1. Se o pedido for ambíguo, a IA deve explicar as opções e sugerir o comando `/slidev:<subcomando>` exato para o usuário digitar.
2. Se o pedido for direto ("mude a cor para vermelho"), a IA deve realizar a ação de edição diretamente usando as ferramentas de sistema de arquivos, sem tentar "chamar" o subcomando `:edit`.

## Critérios de Aceite
- Fim das mensagens onde a IA afirma ter rodado um comando interno.
- Roteamento claro para o usuário em casos de dúvida.
