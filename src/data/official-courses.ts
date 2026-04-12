export interface OfficialCourse {
  id: string;
  title: string;
  titlePl: string;
  description: string;
  url: string;
  level: "beginner" | "intermediate" | "advanced";
  topics: string[];
  prerequisites: string;
  forWhom: string;
  category: "claude-code" | "api" | "mcp" | "fluency" | "cloud";
}

export const officialCourses: OfficialCourse[] = [
  // === CLAUDE CODE ===
  {
    id: "cc101",
    title: "Claude Code 101",
    titlePl: "Claude Code 101 — Podstawy",
    description:
      "Kurs dla osób zaczynających przygodę z Claude Code. Od instalacji po zaawansowaną konfigurację. Nauczysz się: czym są agenty kodujące, jak działa pętla agentowa, okno kontekstu, narzędzia i uprawnienia. Jak pisać skuteczne polecenia, pracować w trybie Plan, zarządzać kontekstem (/compact, /clear, /context), tworzyć pliki CLAUDE.md, budować subagenty, podłączać serwery MCP i pisać hooks.",
    url: "https://anthropic.skilljar.com/claude-code-101",
    level: "beginner",
    topics: [
      "Instalacja i konfiguracja",
      "Pętla agentowa i narzędzia",
      "Uprawnienia i tryby pracy",
      "Pisanie skutecznych poleceń",
      "Workflow: Explore → Plan → Code → Commit",
      "Zarządzanie kontekstem",
      "CLAUDE.md — pamięć projektu",
      "Subagenty",
      "MCP Servers",
      "Hooks",
    ],
    prerequisites: "Podstawowa znajomość edytora kodu i terminala. Konto Claude (Pro, Max lub Enterprise).",
    forWhom: "Początkujący developerzy i doświadczeni inżynierowie, którzy jeszcze nie używali agentów kodujących.",
    category: "claude-code",
  },
  {
    id: "cc-action",
    title: "Claude Code in Action",
    titlePl: "Claude Code w praktyce",
    description:
      "Kurs praktyczny — jak wpleść Claude Code w codzienny workflow. Nauczysz się: architektura asystenta kodującego, system narzędzi do złożonych zadań, zarządzanie kontekstem w długich sesjach, komunikacja wizualna (screenshoty → zmiany UI), tworzenie własnych automatyzacji, rozszerzanie funkcji przez MCP, integracja z GitHub (code review, PR), tryby myślenia i planowania.",
    url: "https://anthropic.skilljar.com/claude-code-in-action",
    level: "intermediate",
    topics: [
      "Architektura asystenta kodującego",
      "System narzędzi — wielokrokowe zadania",
      "Zarządzanie kontekstem w długich sesjach",
      "Komunikacja wizualna — screenshoty",
      "Własne automatyzacje i komendy",
      "Rozszerzanie przez MCP Servers",
      "Integracja z GitHub — code review",
      "Tryby myślenia i planowania",
    ],
    prerequisites: "Znajomość terminala i Git. Ukończenie Claude Code 101 lub równoważne doświadczenie.",
    forWhom: "Developerzy chcący zintegrować AI w codzienną pracę. Zespoły wdrażające AI-assisted development.",
    category: "claude-code",
  },
  {
    id: "agent-skills",
    title: "Introduction to Agent Skills",
    titlePl: "Wprowadzenie do Skills (umiejętności agenta)",
    description:
      "Jak budować, konfigurować i udostępniać Skills w Claude Code — wielorazowe instrukcje w markdown, które Claude automatycznie stosuje do odpowiednich zadań. Od tworzenia pierwszego Skill po dystrybucję w zespołach. Nauczysz się: czym Skills różnią się od CLAUDE.md, hooks i subagentów, jak pisać SKILL.md z frontmatter, jak ograniczać dostęp do narzędzi, jak udostępniać przez repo i pluginy, deploy w organizacji.",
    url: "https://anthropic.skilljar.com/introduction-to-agent-skills",
    level: "intermediate",
    topics: [
      "Skills vs CLAUDE.md vs hooks vs subagenty",
      "Tworzenie SKILL.md z frontmatter",
      "Opisy wyzwalające (trigger descriptions)",
      "Organizacja katalogów Skills",
      "Ograniczanie dostępu do narzędzi (allowed-tools)",
      "Udostępnianie przez repo i pluginy",
      "Deploy w organizacji (managed settings)",
      "Integracja Skills z subagentami",
      "Troubleshooting",
    ],
    prerequisites: "Doświadczenie z Claude Code. Znajomość CLAUDE.md.",
    forWhom: "Użytkownicy Claude Code chcący standaryzować workflow w zespole.",
    category: "claude-code",
  },
  {
    id: "subagents",
    title: "Introduction to Subagents",
    titlePl: "Wprowadzenie do subagentów",
    description:
      "Jak używać i tworzyć subagenty w Claude Code — osobne okna kontekstu do zarządzania zadaniami, delegowania pracy i budowania wyspecjalizowanych workflow. Nauczysz się: jak działają subagenty (osobny kontekst, przepływ danych, zwracanie podsumowań), tworzenie własnych przez /agents, projektowanie niezawodnych subagentów (format output, raportowanie przeszkód, ograniczanie narzędzi), kiedy używać a kiedy nie.",
    url: "https://anthropic.skilljar.com/introduction-to-subagents",
    level: "intermediate",
    topics: [
      "Jak działają subagenty — osobne okna kontekstu",
      "Przepływ danych: input → przetwarzanie → podsumowanie",
      "Tworzenie własnych subagentów (/agents)",
      "Wzorce niezawodności — format output, raportowanie",
      "Ograniczanie dostępu do narzędzi",
      "Kiedy używać subagentów (i kiedy nie)",
      "Anti-patterny",
    ],
    prerequisites: "Doświadczenie z Claude Code.",
    forWhom: "Użytkownicy Claude Code pracujący nad złożonymi projektami.",
    category: "claude-code",
  },
  {
    id: "cowork",
    title: "Introduction to Claude Cowork",
    titlePl: "Wprowadzenie do Claude Cowork",
    description:
      "Jak korzystać z trybu Cowork w Claude Desktop — autonomiczny agent pracujący w chmurze. Delegowanie zadań, monitorowanie postępu, praca równoległa.",
    url: "https://anthropic.skilljar.com/introduction-to-claude-cowork",
    level: "intermediate",
    topics: [
      "Tryb Cowork — czym jest",
      "Delegowanie zadań do chmury",
      "Monitorowanie postępu",
      "Praca równoległa",
    ],
    prerequisites: "Konto Claude Max lub Enterprise.",
    forWhom: "Użytkownicy Claude Desktop chcący delegować zadania autonomicznie.",
    category: "claude-code",
  },

  // === MCP ===
  {
    id: "mcp-intro",
    title: "Introduction to Model Context Protocol",
    titlePl: "Wprowadzenie do MCP (Model Context Protocol)",
    description:
      "Jak budować serwery i klienty MCP od zera w Pythonie. Trzy prymitywy MCP: tools (kontrolowane przez model), resources (kontrolowane przez aplikację), prompts (kontrolowane przez użytkownika). Nauczysz się: architektura MCP, system transportu, przepływ request-response, budowanie serwerów z Python SDK, implementacja zarządzania dokumentami, testowanie z MCP Inspector, definiowanie resources, budowanie prompts, wzorce integracji.",
    url: "https://anthropic.skilljar.com/introduction-to-model-context-protocol",
    level: "intermediate",
    topics: [
      "Architektura MCP",
      "Trzy prymitywy: tools, resources, prompts",
      "Budowanie serwerów MCP w Pythonie",
      "MCP Inspector — testowanie",
      "Resources — dane read-only",
      "Prompts — gotowe instrukcje",
      "Wzorce integracji",
    ],
    prerequisites: "Python, podstawy JSON i HTTP.",
    forWhom: "Developerzy chcący budować serwery MCP.",
    category: "mcp",
  },
  {
    id: "mcp-advanced",
    title: "Model Context Protocol: Advanced Topics",
    titlePl: "MCP — Zaawansowane tematy",
    description:
      "Zaawansowane techniki budowania i optymalizacji serwerów MCP. Złożone wzorce integracji, obsługa błędów, skalowalność.",
    url: "https://anthropic.skilljar.com/model-context-protocol-advanced-topics",
    level: "advanced",
    topics: [
      "Zaawansowane wzorce integracji",
      "Obsługa błędów i edge cases",
      "Skalowalność serwerów MCP",
      "Złożone workflow",
    ],
    prerequisites: "Ukończenie Introduction to MCP.",
    forWhom: "Doświadczeni developerzy budujący produkcyjne serwery MCP.",
    category: "mcp",
  },

  // === API ===
  {
    id: "api",
    title: "Building with the Claude API",
    titlePl: "Budowanie z Claude API",
    description:
      "Kompleksowy kurs pracy z API Anthropic — od podstawowych operacji po zaawansowane techniki promptowania, integrację narzędzi i wzorce architektoniczne do budowania systemów AI.",
    url: "https://anthropic.skilljar.com/claude-with-the-anthropic-api",
    level: "intermediate",
    topics: [
      "Podstawowe operacje API",
      "Zaawansowane techniki promptowania",
      "Integracja narzędzi (tool use)",
      "Wzorce architektoniczne",
      "Budowanie systemów AI",
    ],
    prerequisites: "Znajomość programowania i API REST.",
    forWhom: "Developerzy budujący aplikacje z Claude API.",
    category: "api",
  },

  // === AI FLUENCY ===
  {
    id: "claude-101",
    title: "Claude 101",
    titlePl: "Claude 101 — Podstawy Claude",
    description:
      "Fundamentalny kurs o Claude — czym jest, jak działa, jak z niego korzystać skutecznie. Dla każdego, nie wymaga wiedzy technicznej.",
    url: "https://anthropic.skilljar.com/claude-101",
    level: "beginner",
    topics: [
      "Czym jest Claude",
      "Jak pisać skuteczne polecenia",
      "Możliwości i ograniczenia",
      "Praktyczne zastosowania",
    ],
    prerequisites: "Brak.",
    forWhom: "Każdy kto chce zacząć korzystać z Claude.",
    category: "fluency",
  },
  {
    id: "ai-fluency",
    title: "AI Fluency: Framework & Foundations",
    titlePl: "Biegłość AI — Framework i podstawy",
    description:
      "Kluczowe koncepcje AI, frameworki myślenia o sztucznej inteligencji, fundamenty rozumienia modeli językowych.",
    url: "https://anthropic.skilljar.com/ai-fluency-framework-foundations",
    level: "beginner",
    topics: [
      "Koncepcje AI",
      "Frameworki myślenia o AI",
      "Modele językowe — jak działają",
      "Odpowiedzialne korzystanie z AI",
    ],
    prerequisites: "Brak.",
    forWhom: "Każdy chcący zrozumieć AI.",
    category: "fluency",
  },
  {
    id: "ai-capabilities",
    title: "AI Capabilities and Limitations",
    titlePl: "Możliwości i ograniczenia AI",
    description:
      "Kurs o granicach AI — co modele potrafią, czego nie potrafią, i jak podejmować świadome decyzje o zastosowaniach AI.",
    url: "https://anthropic.skilljar.com/ai-capabilities-and-limitations",
    level: "beginner",
    topics: [
      "Co AI potrafi",
      "Ograniczenia modeli",
      "Świadome decyzje o AI",
    ],
    prerequisites: "Brak.",
    forWhom: "Liderzy biznesu, menedżerowie, każdy podejmujący decyzje o AI.",
    category: "fluency",
  },
];
