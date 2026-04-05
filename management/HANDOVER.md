# 🚀 HANDOVER: Gemini Slidev Pro (Migration Context)

> **Nota para o Agente Antigravity:** Se você está lendo este arquivo em uma nova sessão num novo repositório, use estas informações como o seu "cérebro prévio". Este documento contém a herança genética do projeto e nosso backlog imediato.

## 📜 Histórico e Origem (A Era Gemini CLI)
- **Origem:** Este projeto nasceu de um fluxo puramente educacional do Prof. João Miguel Lac Roehe. Iniciou como um laboratório de engenharia reversa e estudo de contribuições Open Source via Git (Fork/Issues/PRs) operados pelo "Gemini CLI".
- **Raiz do Código:** O conceito arquitetural `.toml` baseia-se pesadamente na extensão experimental de *QIanGua* (foco em prompts e comandos ao invés de um servidor MCP complexo).
- **A Transição:** Percebemos que o laboratório original (`gemini-slidev-extension-contrib`) devia ser preservado eternamente como material didático da Masterclass v5.1. Portanto, esta extensão de software foi promovida a um repositório "Detached" para se tornar um produto focado (gemini-slidev-pro), passível de ser submetido globalmente à Galeria de Extensões do Gemini de forma independente e com o Prof. João como mantenedor central.
- **O Novo Agente:** A operação de engenharia agora deixa de ser via prompt iterativo cru na CLI e passa a ser orquestrada massivamente pelo próprio **Antigravity**.

## 🔬 Estado Atual (Diagnóstico Atualizado)
A extensão é extremamente funcional e agora opera através do sistema robusto de **Agent Skills** (`skills/slidev/SKILL.md`). A fundação foi corrigida e a extensão está oficialmente estruturada como um produto independente (gemini-slidev-pro).

1. **Manifesto (`gemini-extension.json`):**
   - Refatorado para remover o contexto global e registrar a nova Skill.
   - Versão atualizada e limpa de dependências mortas.
2. **Sistema de Comandos (`commands/*.toml`):**
   - Comandos refatorados e isolados corretamente (`init.toml`, `generate.toml`, etc.).

## 🎯 Objetivos de Curto Prazo (Nosso Backlog aqui no Novo Lar)

### ✅ Fase 1: Limpeza e Conserto Estrutural (Foundation)
- [x] Ler as documentações que trouxemos na bagagem do repo antigo para entender o *schema* padrão.
- [x] Refatorar imediatamente o `gemini-extension.json` alinhando com a norma mais restrita do sistema Gemini CLI.
- [x] Renomear e revisar as nomenclaturas e fluxos do diretório `/commands`.
- [x] Modificar referências antigas no `README.md` destacando a emancipação total do projeto e honrando *QIanGua*.

### ✅ Fase 2: Power Plugins (Concluída)
- [x] **Criar Criador de Componentes Vue:** Implementado via `/slidev:component`.
- [x] **Modo Roteirista (Speaker Notes):** Implementado via `/slidev:notes`.
- [x] **Agent Skills Migration:** Implementado via `skills/slidev/SKILL.md`.
- [x] **Auto format:** Implementado via `/slidev:format`.

### 🚀 Fase 3: Web & Deploy
- [ ] **Subida Web:** Implementar via instrução a possibilidade automatizada rápida de realizar `slidev build` e instruir setup no GitHub Pages/Vercel.

---
*Escrito originalmente por Antigravity (Sessão Antiga) para a continuação de código na nova pasta base.*
