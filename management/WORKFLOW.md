  🚀 Fluxo de Trabalho e Governança de IA (v1.0)

  Este documento define o padrão de excelência para o desenvolvimento assistido por IA neste repositório. Ele foi forjado através de
  lições aprendidas em laboratório para evitar alucinações arquiteturais e manter um histórico de projeto profissional.

  🏛️ Os Três Pilares da Verdade

  Para que qualquer IA (Gemini CLI, GitHub Copilot Web/Mobile, Antigravity) opere corretamente, a hierarquia de contexto deve ser
  respeitada:

   1. Agent Skills (`skills/slidev/SKILL.md`): A Fonte Única da Verdade para este projeto, ativada sob demanda. Contém as regras de arquitetura, padrões de código e diretivas do Slidev.
   2. .github/copilot-instructions.md (O Escudo do Copilot): Um arquivo curto que obriga o Copilot a ler o arquivo de Skill antes de
      qualquer ação.
   3. management/ (O Cérebro Administrativo): Onde os planos de intenção e relatórios de auditoria residem.

  ---

  🔄 O "Ciclo de Ouro" (Workflow)

  Sempre siga este fluxo para qualquer nova funcionalidade ou correção:

  1. Definição (GitHub Issues)

* Ação: Abra uma Issue descrevendo o "O quê" e o "Porquê".
* Dica IA: Se estiver no celular, descreva o problema e peça ao Copilot: "Crie uma Issue no padrão Conventional Commits para este
     problema".

  2. Estratégia (Implementation Plan)

* Ação: Antes de codar, a IA deve criar um plano em management/plans/feature-name.md.
* Conteúdo: O plano deve conter: Contexto, Checklist, Detalhes Passo-a-Passo e Critérios de Aceite.
* Validação: Você revisa o plano. Não há código sem plano aprovado.

  3. Execução (Branch & Code)

* Ação: Crie uma branch específica (feat/... ou fix/...).
* Padrão: Use Conventional Commits (ex: feat: add robust check to init command).
* Blindagem: Se a IA tentar usar TypeScript ou bibliotecas externas, o `SKILL.md` deve ser citado para correção de rota.

  4. Validação (Testes)

* Ação: Execute `npm test` antes de enviar o PR.
* Ferramenta: O repositório usa o **Vitest** (`tests/`) para garantir a integridade dos arquivos e da sintaxe `.toml`.

  5. Revisão e Documentação (PR & Comments)

* Ação: Abra o Pull Request.
* Tratamento de Erros: Se uma ideia ou branch falhar, documente o erro no comentário do PR antes de fechá-lo. Isso cria memória
     histórica para o projeto.
* Merge Profissional: Prefira o Squash and Merge para manter a branch main limpa e linear.

  ---

  🛡️ Proteção contra Alucinações (Templates)

  Copie estes blocos para os respectivos arquivos no novo repositório para manter a blindagem:

  Em `skills/slidev/SKILL.md`:

   1 # AI ASSISTANT INSTRUCTIONS (CRITICAL)
   2 > Este repositório é uma **Gemini CLI Extension**, NÃO uma extensão de VS Code.
   3 > - **Tecnologia:** Comandos baseados estritamente em arquivos `.toml` na pasta `commands/`.
   4 > - **Proibição:** Não use TypeScript, Node.js para lógica de comandos, nem altere o `package.json` para menus de UI.

  Em .github/copilot-instructions.md:

   1 # Copilot Mandate
   2 Você DEVE ler e seguir rigorosamente as regras arquiteturais definidas no arquivo `skills/slidev/SKILL.md` deste projeto antes de
     sugerir qualquer alteração. Este projeto usa TOML para comandos CLI.

  ---

  🧹 Manutenção e Limpeza

* Zerar Branches: Após o merge (ou rejeição documentada), a branch deve ser excluída imediatamente.
* Versionamento: Sincronize sempre package.json e gemini-extension.json.
* Local Dev: Use sempre gemini extensions link . para testar mudanças em tempo real sem reinstalar.

  ---

  🛠️ Comandos de Suporte (Cheat Sheet)

  ┌──────────────────┬───────────────────────────────────┐
  │ Objetivo         │ Comando                           │
  ├──────────────────┼───────────────────────────────────┤
  │ Instalação Local │ gemini extension install .        │
  │ Link de Dev      │ gemini extension link .           │
  │ Auditoria de PR  │ gh pr view [ID] --comments        │
  │ Limpeza Remota   │ git push origin --delete [branch] │
  │ Merge Limpo      │ git merge --squash [branch]       │
  └──────────────────┴───────────────────────────────────┘

  ---
