# 🚀 HANDOVER: Gemini Slidev Pro (Migration Context)

> **Nota para o Agente Antigravity:** Se você está lendo este arquivo em uma nova sessão num novo repositório, use estas informações como o seu "cérebro prévio". Este documento contém a herança genética do projeto e nosso backlog imediato.

## 📜 Histórico e Origem (A Era Gemini CLI)
- **Origem:** Este projeto nasceu de um fluxo puramente educacional do Prof. João Miguel Lac Roehe. Iniciou como um laboratório de engenharia reversa e estudo de contribuições Open Source via Git (Fork/Issues/PRs) operados pelo "Gemini CLI".
- **Raiz do Código:** O conceito arquitetural `.toml` baseia-se pesadamente na extensão experimental de *QIanGua* (foco em prompts e comandos ao invés de um servidor MCP complexo).
- **A Transição:** Percebemos que o laboratório original (`gemini-slidev-extension-contrib`) devia ser preservado eternamente como material didático da Masterclass v5.1. Portanto, esta extensão de software foi promovida a um repositório "Detached" para se tornar um produto focado (gemini-slidev-pro), passível de ser submetido globalmente à Galeria de Extensões do Gemini de forma independente e com o Prof. João como mantenedor central.
- **O Novo Agente:** A operação de engenharia agora deixa de ser via prompt iterativo cru na CLI e passa a ser orquestrada massivamente pelo próprio **Antigravity**.

## 🔬 Estado Atual (Diagnóstico Herdado)
A extensão é extremamente funcional, baseada unicamente no contexto fornecido pelo `GEMINI.md` e em arquivos `.toml` definindo custom commands. **Porém**, uma auditoria baseada na documentação de padrões apontou quebras graves na fundação para ela ser "oficial":

1. **Manifesto (`gemini-extension.json`):**
   - O campo `"name": "slidev"` desrespeita a regra de refletir o nome do diretório do projeto.
   - A chave `"entryPoint": "GEMINI.md"` não existe nas regras novas (deveria ser `"contextFileName": "GEMINI.md"` ou simplesmente omitida pois carrega automatico).
   - Há uma chave inventada `"identifier": "slidev-assistant"` a ser extirpada.
2. **Sistema de Comandos (`commands/*.toml`):**
   - Foram nomeados recursivamente como `slidev.init.toml`. Segundo as best practices, o próprio diretório cuida do namespace. É preciso limpar os nomes para `init.toml`, `generate.toml`, etc.

## 🎯 Objetivos de Curto Prazo (Nosso Backlog aqui no Novo Lar)

### Fase 1: Limpeza e Conserto Estrutural (Foundation)
- [ ] Ler as documentações que trouxemos na bagagem do repo antigo para entender o *schema* padrão.
- [ ] Refatorar imediatamente o `gemini-extension.json` alinhando com a norma mais restrita do sistema Gemini CLI.
- [ ] Renomear e revisar as nomenclaturas e fluxos do diretório `/commands`.
- [ ] Modificar referências antigas no `README.md` destacando a emancipação total do projeto e honrando *QIanGua*.

### Fase 2: Power Plugins (Inovação Radical)
- [ ] **Criar Criador de Componentes Vue:** Um prompt que instrua perfeitamente a IA gerar arquivos em `/components/Nome.vue` para gráficos e elementos visuais dentro das apresentações.
- [ ] **Modo Roteirista (Speaker Notes):** Fazer a IA escanear o deck, equilibrar a narrativa e auto-preencher os comentários em HTML de cada tela.
- [ ] **Subida Web:** Implementar via instrução a possibilidade automatizada rápida de realizar `slidev build` e instruir setup no GitHub Pages/Vercel.

---
*Escrito originalmente por Antigravity (Sessão Antiga) para a continuação de código na nova pasta base.*
