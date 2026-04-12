import { Lesson } from "@/types/database";

export const lessonsCC101: Lesson[] = [
  // ═══════════════════ MODUŁ 1: Czym jest Claude Code ═══════════════════
  {
    id: "cc1",
    path_id: "cc101",
    module_name: "Czym jest Claude Code",
    module_order: 1,
    title: "Agent kodujący vs chatbot — czym się różnią",
    slug: "agent-vs-chatbot",
    duration_minutes: 7,
    order: 1,
    content: `## Agent kodujący vs chatbot

### Chatbot (np. ChatGPT, Claude.ai)

Chatbot to rozmowa tekstowa. Piszesz pytanie, dostajesz odpowiedź. Jeśli chcesz zmienić kod — musisz skopiować odpowiedź i sam wkleić do pliku.

### Agent kodujący (Claude Code)

Agent to coś więcej. Claude Code ma **bezpośredni dostęp do Twojego komputera**:

| Chatbot | Agent (Claude Code) |
|---------|-------------------|
| Odpowiada tekstem | Bezpośrednio zmienia pliki |
| Nie widzi Twoich plików | Czyta cały projekt |
| Musisz kopiować/wklejać | Sam edytuje, tworzy, uruchamia |
| Jedna odpowiedź na pytanie | Wykonuje wieloetapowe zadania |

### Pętla agentowa

Gdy dajesz Claude Code zadanie, dzieje się to:

1. Claude **czyta** polecenie i pliki projektu
2. **Decyduje** jakiego narzędzia użyć (Read, Edit, Bash...)
3. **Wykonuje** akcję
4. **Sprawdza** wynik
5. Jeśli trzeba — wraca do kroku 2

To się powtarza w pętli aż zadanie jest skończone. Chatbot odpowie raz. Agent pracuje aż będzie gotowe.

### Przykład

Mówisz: "Dodaj stronę Kontakt z formularzem"

Chatbot: wypisze kod i powie "wklej to do pliku page.tsx"

Claude Code:
- Sprawdzi strukturę projektu
- Stworzy plik src/app/kontakt/page.tsx
- Doda link w nawigacji
- Uruchomi build żeby sprawdzić czy działa
- Poinformuje Cię że gotowe

### Podsumowanie

Agent to chatbot z "rękami" — nie tylko mówi co zrobić, ale sam to robi.`,
  },
  {
    id: "cc2",
    path_id: "cc101",
    module_name: "Czym jest Claude Code",
    module_order: 1,
    title: "Gdzie działa Claude Code — platformy",
    slug: "platformy",
    duration_minutes: 5,
    order: 2,
    content: `## Gdzie działa Claude Code

Claude Code jest dostępny w pięciu miejscach. Każde nadaje się do innego stylu pracy.

### 1. VS Code (rozszerzenie)

Najpopularniejszy sposób. Panel Claude obok Twojego kodu.

- Inline podgląd zmian (zielone/czerwone linie)
- @-mention plików
- Wiele rozmów w zakładkach

### 2. Terminal (CLI)

Pełna wersja w linii komend. Wszystkie funkcje, zero ograniczeń.

\`\`\`
claude
\`\`\`

Uruchamiasz jednym słowem i piszesz polecenia.

### 3. Desktop App (Mac/Windows)

Osobna aplikacja z dodatkowymi funkcjami:
- Tryb Cowork — agent pracujący autonomicznie w chmurze
- Podgląd uruchomionej aplikacji
- Równoległe sesje (worktrees)
- Zaplanowane zadania

### 4. Web (claude.ai/code)

W przeglądarce — bez instalacji. Sesja działa w chmurze Anthropic.
- Dobry do szybkich zadań z dowolnego komputera
- Wymaga połączenia z GitHub

### 5. JetBrains (IntelliJ, PyCharm, WebStorm)

Dla tych, którzy nie używają VS Code.

### Którą wybrać?

| Sytuacja | Platforma |
|----------|-----------|
| Codzinna praca | VS Code |
| Pełna kontrola | Terminal CLI |
| Autonomiczne zadania | Desktop App |
| Szybkie rzeczy z dowolnego miejsca | Web |

Wszystkie platformy korzystają z tego samego silnika i konfiguracji (CLAUDE.md, settings.json, hooks). Wybór platformy to kwestia preferencji.`,
  },
  {
    id: "cc3",
    path_id: "cc101",
    module_name: "Czym jest Claude Code",
    module_order: 1,
    title: "Narzędzia Claude Code — co ma w arsenale",
    slug: "narzedzia-arsenale",
    duration_minutes: 6,
    order: 3,
    content: `## Narzędzia Claude Code

Claude Code ma zestaw narzędzi, których używa automatycznie. Nie musisz ich wywoływać — Claude sam wybiera odpowiednie.

### Narzędzia do plików

**Read** — czyta pliki. Widzi kod, obrazy, PDF-y.
**Edit** — zmienia fragment pliku. Precyzyjnie podmienia wybrany tekst.
**Write** — tworzy nowy plik od zera.

### Narzędzia do wyszukiwania

**Grep** — szuka tekstu w plikach. "Gdzie jest użyta funkcja X?"
**Glob** — szuka plików po nazwie. "Jakie pliki .tsx mam w src?"

### Narzędzia do wykonywania

**Bash** — uruchamia komendy terminala. npm install, git push, build.

### Narzędzia do internetu

**WebSearch** — szuka w internecie aktualnych informacji.
**WebFetch** — pobiera i czyta zawartość strony.

### Narzędzia do delegowania

**Agent** — uruchamia sub-agenta do konkretnego zadania. Przydatne przy głębokim researchu.
**Task** — tworzy i śledzi listę podzadań.

### Narzędzia do komunikacji

**AskUserQuestion** — pyta Cię o decyzję gdy nie jest pewien.

### Jak Claude wybiera narzędzie?

Automatycznie, na podstawie Twojego polecenia:

| Mówisz | Claude używa |
|--------|-------------|
| "Pokaż co jest w pliku X" | Read |
| "Zmień tytuł na Y" | Edit |
| "Utwórz nowy komponent" | Write |
| "Zainstaluj bibliotekę Z" | Bash |
| "Znajdź gdzie jest useState" | Grep |
| "Sprawdź najnowszą wersję React" | WebSearch |

Nie musisz myśleć o narzędziach. Po prostu opisujesz co chcesz, Claude dobiera narzędzie.`,
  },

  // ═══════════════════ MODUŁ 2: Instalacja i konfiguracja ═══════════════════
  {
    id: "cc4",
    path_id: "cc101",
    module_name: "Instalacja i konfiguracja",
    module_order: 2,
    title: "Instalacja na macOS",
    slug: "instalacja-macos",
    duration_minutes: 5,
    order: 1,
    content: `## Instalacja Claude Code na macOS

### Metoda 1: Natywna (zalecana)

Otwórz Terminal i wpisz:

\`\`\`bash
curl -fsSL https://claude.ai/install.sh | bash
\`\`\`

Zaleta: **automatyczne aktualizacje**. Claude Code aktualizuje się sam.

### Metoda 2: Homebrew

\`\`\`bash
brew install --cask claude-code
\`\`\`

Wymaga ręcznych aktualizacji (\`brew upgrade claude-code\`).

### VS Code — rozszerzenie

1. Otwórz VS Code
2. \`Cmd+Shift+X\` — panel rozszerzeń
3. Wpisz "Claude Code"
4. Kliknij Install

### Po instalacji

1. W terminalu wpisz \`claude\` lub otwórz panel w VS Code
2. Zaloguj się kontem Anthropic
3. Gotowe

### Konta i plany

| Plan | Cena | Co dostajesz |
|------|------|-------------|
| Pro | $20/mies. | Claude Code z limitami |
| Max | $100-200/mies. | Wyższe limity, wszystkie funkcje |
| Team | $25-150/os./mies. | Dla zespołów, panel admina |

### Sprawdzenie

\`\`\`
claude --version
\`\`\`

Jeśli widzisz numer wersji — działa.

\`\`\`
/status
\`\`\`

Pokaże: wersję, model, konto, status połączenia.

\`\`\`
/doctor
\`\`\`

Automatyczna diagnostyka — sprawdzi czy wszystko jest OK.`,
  },
  {
    id: "cc5",
    path_id: "cc101",
    module_name: "Instalacja i konfiguracja",
    module_order: 2,
    title: "Uprawnienia — kontrola nad tym co Claude robi",
    slug: "uprawnienia-kontrola",
    duration_minutes: 7,
    order: 2,
    content: `## Uprawnienia

Claude Code ma dostęp do Twojego komputera. Uprawnienia kontrolują co robi bez pytania.

### Tryby

**default** — pyta przy każdym nowym narzędziu. Bezpieczny start.

**acceptEdits** — automatycznie akceptuje edycje plików i proste komendy (mkdir, touch, mv). Pyta o resztę. Polecany do codziennej pracy.

**plan** — Claude analizuje ale nie zmienia plików. Tylko planuje.

**auto** — akceptuje prawie wszystko z wbudowaną kontrolą bezpieczeństwa.

### Jak zmienić tryb

W VS Code: kliknij tryb na pasku statusu (na dole okna).
W CLI: \`/permissions\`
Przy starcie: \`claude --permission-mode plan\`

### Reguły allow/deny

Precyzyjne kontrolowanie co Claude może:

\`\`\`
/permissions
\`\`\`

Dodaj reguły:
- \`Allow: Bash(npm run build)\` — zawsze pozwól na build
- \`Allow: Bash(git commit *)\` — pozwól na commity
- \`Deny: Bash(rm -rf *)\` — nigdy nie usuwaj wszystkiego
- \`Deny: Edit(.env)\` — nigdy nie edytuj plików z sekretami

### Praktyczne podejście

1. Zacznij od **default**
2. Gdy Claude pyta o coś po raz piąty → dodaj do Allow
3. Po tygodniu przejdź na **acceptEdits**
4. **auto** — tylko gdy masz pełne zaufanie i doświadczenie`,
  },
  {
    id: "cc6",
    path_id: "cc101",
    module_name: "Instalacja i konfiguracja",
    module_order: 2,
    title: "CLAUDE.md — instrukcja dla Claude",
    slug: "claude-md-konfiguracja",
    duration_minutes: 8,
    order: 3,
    content: `## CLAUDE.md

### Czym jest

Plik tekstowy z instrukcjami dla Claude. Ładowany automatycznie na początku każdej rozmowy. To jak brief dla nowego pracownika.

### Trzy poziomy

| Plik | Gdzie | Zasięg |
|------|-------|--------|
| \`~/.claude/CLAUDE.md\` | Katalog domowy | Wszystkie projekty |
| \`./CLAUDE.md\` | Projekt | Cały zespół (Git) |
| \`./CLAUDE.local.md\` | Projekt | Tylko Ty (gitignored) |

### Co wpisać

Minimum:

\`\`\`markdown
# Mój Projekt

## Stack
- Next.js 16, TypeScript, Tailwind
- Supabase, Vercel

## Zasady
- Język interfejsu: polski
- Po zmianach: npm run build musi przejść
- Commit messages po angielsku

## Komendy
- Dev: npm run dev
- Build: npm run build
\`\`\`

### Importowanie plików

Możesz dołączyć inne pliki:

\`\`\`markdown
@docs/api-reference.md
@AGENTS.md
\`\`\`

### Reguły per ścieżka

Katalog \`.claude/rules/\` — pliki z regułami dla konkretnych ścieżek:

\`\`\`yaml
---
globs: "src/components/**/*.tsx"
---
Komponenty React pisz jako funkcje, nie klasy.
Używaj TypeScript strict.
\`\`\`

### Wskazówki

- Im lepszy CLAUDE.md tym mniej powtarzasz
- Aktualizuj gdy zmieniają się zasady
- Nigdy nie wpisuj sekretów (kluczy API, haseł)
- Powiedz Claude "stwórz CLAUDE.md" — sam go napisze na podstawie analizy projektu`,
  },

  // ═══════════════════ MODUŁ 3: Skuteczna praca ═══════════════════
  {
    id: "cc7",
    path_id: "cc101",
    module_name: "Skuteczna praca",
    module_order: 3,
    title: "Pisanie skutecznych poleceń",
    slug: "skuteczne-polecenia",
    duration_minutes: 8,
    order: 1,
    content: `## Pisanie skutecznych poleceń

### Formuła

**Kontekst + Cel + Szczegóły**

Przykład:
> Na stronie produktu (src/app/product/page.tsx), dodaj przycisk "Dodaj do koszyka" pod ceną. Przycisk powinien być zielony, pełnej szerokości.

### Dobre polecenia

| Złe | Dobre |
|-----|-------|
| "Napraw stronę" | "Na stronie /kontakt formularz nie wysyła maili — napraw" |
| "Dodaj tabelę" | "Dodaj tabelę cennika z 3 kolumnami: Basic, Pro, Enterprise" |
| "Zmień kolor" | "Zmień kolor nagłówka z białego na ciemnogranatowy" |

### Tryb Approve vs Auto-accept

**Approve (default):** Claude pyta przed każdą akcją. Ty zatwierdzasz.
- Bezpieczny
- Wolniejszy
- Dobry na start

**Auto-accept (acceptEdits):** Claude edytuje pliki bez pytania.
- Szybszy
- Wymaga zaufania
- Dobry do codziennej pracy

### Plan Mode

Dla dużych zmian — najpierw plan, potem wykonanie:

\`\`\`
/plan Przebuduj stronę główną — dodaj hero, sekcję features, testimonials
\`\`\`

Claude napisze plan. Ty go przeglądasz, komentujesz. Gdy OK — mówisz "implementuj".

### @-mentions (VS Code)

Naciśnij \`Option+K\` żeby odwołać się do konkretnego pliku:
> W @src/app/page.tsx zmień tytuł na "Witaj"

Claude wtedy dokładnie wie o który plik chodzi.

### Jeśli efekt nie pasuje

Powiedz wprost:
- "Cofnij to"
- "Nie, chodziło mi o..."
- "Zrób to inaczej — ..."

Claude rozumie poprawki.`,
  },
  {
    id: "cc8",
    path_id: "cc101",
    module_name: "Skuteczna praca",
    module_order: 3,
    title: "Workflow: Explore → Plan → Code → Commit",
    slug: "workflow-explore-plan-code",
    duration_minutes: 7,
    order: 2,
    content: `## Workflow: Explore → Plan → Code → Commit

Oficjalny workflow rekomendowany przez Anthropic. Cztery kroki które dają najlepsze wyniki.

### 1. Explore — zrozum co masz

Zanim cokolwiek zmienisz, poproś Claude o analizę:

> "Przeanalizuj strukturę tego projektu. Jakie strony mamy, jak działa nawigacja, gdzie jest konfiguracja?"

Claude przeczyta pliki i wytłumaczy jak projekt jest zbudowany.

### 2. Plan — zaplanuj zmiany

Przełącz się w tryb planowania:

\`\`\`
/plan Dodaj system rejestracji użytkowników
\`\`\`

Claude napisze plan:
- Jakie pliki stworzy
- Jakie biblioteki zainstaluje
- W jakiej kolejności

Ty przeglądasz i komentujesz. To jest czas na pytania i poprawki.

### 3. Code — wykonaj

Gdy plan Ci pasuje:

> "OK, implementuj ten plan"

Claude zacznie pracować — tworzyć pliki, edytować istniejące, instalować zależności.

### 4. Commit — zapisz

Gdy jesteś zadowolony z efektu:

> "Zrób commit i push"

Claude:
- Sprawdzi co się zmieniło
- Napisze sensowny opis commita
- Wykona git add, commit, push

### Kiedy używać tego workflow?

| Zadanie | Workflow |
|---------|---------|
| Mała zmiana (tytuł, kolor) | Prosto: Code → Commit |
| Nowa strona | Plan → Code → Commit |
| Duża funkcja | Explore → Plan → Code → Commit |
| Refactoring | Explore → Plan → Code → Commit |

### Kluczowa zasada

Im większa zmiana, tym więcej czasu na Explore i Plan. Mała zmiana — od razu Code. Duża — zawsze planuj.`,
  },
  {
    id: "cc9",
    path_id: "cc101",
    module_name: "Skuteczna praca",
    module_order: 3,
    title: "Zarządzanie kontekstem",
    slug: "zarzadzanie-kontekstem",
    duration_minutes: 6,
    order: 3,
    content: `## Zarządzanie kontekstem

### Czym jest kontekst?

Kontekst to "pamięć robocza" Claude w trakcie rozmowy. Obejmuje:
- Twoje polecenia
- Odpowiedzi Claude
- Pliki które Claude przeczytał
- Wyniki komend

### Limit

Opus 4.6 ma okno do **1 miliona tokenów** (~750 000 słów). To dużo, ale przy intensywnej pracy zapełnia się.

### Trzy komendy do zarządzania

**\`/context\`** — ile kontekstu jest zajęte

Pokaże pasek: ████████░░░░ 65%

**\`/compact\`** — skompresuj rozmowę

Claude podsumuje dotychczasową rozmowę, zachowując sens ale zwalniając miejsce. Możesz mu powiedzieć co zachować:

\`\`\`
/compact zachowaj wyniki testów i decyzje architektoniczne
\`\`\`

**\`/clear\`** — wyczyść i zacznij od nowa

Czyści wszystko. CLAUDE.md zostaje (ładuje się od nowa).

### Kiedy co używać?

| Sytuacja | Komenda |
|----------|---------|
| Claude gubi wątek | /compact |
| Kontekst >80% | /compact |
| Nowe zupełnie zadanie | /clear |
| Chcesz sprawdzić stan | /context |

### Wskazówki

- **Używaj /compact proaktywnie** — nie czekaj aż się zapełni
- **Jedno zadanie = jedna sesja** — nie mieszaj tematów
- **Duże zadania dziel** — lepiej 3 sesje po 30 min niż jedna 2-godzinna
- **/resume** — wznów poprzednią sesję zamiast zaczynać od nowa`,
  },

  // ═══════════════════ MODUŁ 4: Zaawansowane ═══════════════════
  {
    id: "cc10",
    path_id: "cc101",
    module_name: "Zaawansowane funkcje",
    module_order: 4,
    title: "Subagenty — delegowanie zadań",
    slug: "subagenty-delegowanie",
    duration_minutes: 7,
    order: 1,
    content: `## Subagenty

### Czym jest subagent?

Subagent to osobna instancja Claude uruchomiona do konkretnego zadania. Ma **własne okno kontekstu** — nie zapycha głównej rozmowy.

### Typy wbudowane

| Typ | Do czego | Przykład |
|-----|----------|---------|
| **Explore** | Czytanie i analiza kodu | "Zbadaj jak działa auth" |
| **Plan** | Planowanie zmian | "Zaplanuj migrację bazy" |
| **general-purpose** | Wszystko | "Zainstaluj i skonfiguruj X" |

### Kiedy Claude używa subagentów?

Automatycznie, gdy zadanie tego wymaga. Np.:

> "Przeanalizuj wszystkie API routes pod kątem bezpieczeństwa"

Claude może uruchomić agenta Explore który przeczyta 30 plików i wróci z raportem.

### Tworzenie własnych subagentów

Komenda \`/agents\` pozwala tworzyć własne:

Np. agent "code-reviewer" który sprawdza jakość kodu wg Twoich zasad.

### Worktrees — izolacja

Dla ryzykownych zmian Claude może pracować w **osobnej kopii** projektu:

\`\`\`
claude --worktree feature-auth
\`\`\`

Jeśli coś pójdzie nie tak — oryginał jest bezpieczny.

### Kiedy NIE używać subagentów

- Proste, jednoetapowe zadania
- Gdy subagent potrzebowałby kontekstu z głównej rozmowy
- Gdy wynik zależy od poprzednich kroków w rozmowie`,
  },
  {
    id: "cc11",
    path_id: "cc101",
    module_name: "Zaawansowane funkcje",
    module_order: 4,
    title: "MCP Servers — podłączanie usług",
    slug: "mcp-podlaczanie",
    duration_minutes: 7,
    order: 2,
    content: `## MCP Servers

### Czym jest MCP?

Model Context Protocol — sposób na podłączenie zewnętrznych usług do Claude Code. Claude dostaje nowe narzędzia.

### Bez MCP vs z MCP

| Bez MCP | Z MCP |
|---------|-------|
| Claude widzi pliki i terminal | Claude widzi pliki, terminal + Supabase, GitHub, Slack... |
| Musisz kopiować dane | Claude sam pobiera dane z usług |
| Ręczne operacje na bazach | Claude wykonuje zapytania SQL |

### Popularne serwery MCP

| Serwer | Co daje |
|--------|---------|
| Supabase | Zapytania do bazy, zarządzanie tabelami, auth |
| GitHub | Issues, PR-y, code review |
| Slack | Wiadomości, kanały |
| Figma | Dostęp do designów |
| Stripe | Płatności |
| Notion | Dokumenty, bazy |

### Jak podłączyć

Komenda CLI:
\`\`\`bash
claude mcp add supabase npx @supabase/mcp@latest
\`\`\`

Lub konfiguracja w \`~/.claude/settings.json\`:
\`\`\`json
{
  "mcp_servers": {
    "supabase": {
      "command": "npx",
      "args": ["@supabase/mcp@latest"]
    }
  }
}
\`\`\`

### Zarządzanie

- \`/mcp\` — pokaż podłączone serwery
- \`claude mcp list\` — lista w CLI
- \`claude mcp remove <nazwa>\` — odłącz

### OAuth

Przy pierwszym użyciu: Claude otworzy przeglądarkę → logujesz się → zatwierdzasz. Potem pamięta sesję.`,
  },
  {
    id: "cc12",
    path_id: "cc101",
    module_name: "Zaawansowane funkcje",
    module_order: 4,
    title: "Hooks — automatyczne reguły",
    slug: "hooks-reguly",
    duration_minutes: 8,
    order: 3,
    content: `## Hooks

### Czym są

Automatyczne reguły: "Gdy X się wydarzy, zrób Y". Deterministyczna kontrola nad tym co Claude robi.

### Typy hooks

| Typ | Opis |
|-----|------|
| **command** | Uruchamia skrypt shell |
| **http** | Wysyła żądanie HTTP |
| **prompt** | Pyta Claude tak/nie |
| **agent** | Uruchamia sub-agenta do weryfikacji |

### Kiedy się uruchamiają

| Event | Kiedy |
|-------|-------|
| \`SessionStart\` | Początek rozmowy |
| \`PreToolUse\` | Przed użyciem narzędzia |
| \`PostToolUse\` | Po użyciu narzędzia |
| \`UserPromptSubmit\` | Gdy wysyłasz polecenie |
| \`Stop\` | Gdy Claude kończy odpowiedź |

### Przykład: blokada edycji .env

Hook który nie pozwala Claude edytować plików z sekretami:

Konfiguracja w settings.json:
\`\`\`json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Edit",
        "if": "Edit(.env*)",
        "hooks": [{
          "type": "command",
          "command": "echo 'ZABLOKOWANE' && exit 2"
        }]
      }
    ]
  }
}
\`\`\`

Kod wyjścia \`2\` = blokuj akcję.

### Kody wyjścia

- \`0\` — OK, kontynuuj
- \`1\` — błąd, ale kontynuuj
- \`2\` — ZABLOKUJ akcję

### Kiedy używać hooks

- Bezpieczeństwo (blokada .env, rm -rf)
- Automatyczna walidacja (lint po edycji)
- Powiadomienia (Slack po commicie)
- Formatowanie (prettier po zapisie)

### Jak zacząć

Powiedz Claude: "Stwórz hook który blokuje edycję plików .env"

Albo wpisz \`/hooks\` żeby zobaczyć obecną konfigurację.`,
  },
];
