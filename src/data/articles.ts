import { Article } from "@/types/database";

export const articles: Article[] = [
  // --- PODSTAWY ---
  {
    id: "a1",
    category_id: "basics",
    title: "Czym jest Claude Code?",
    slug: "czym-jest-claude-code",
    summary: "Wprowadzenie do Claude Code — czym jest, jak działa i dlaczego warto go używać.",
    content: `## Czym jest Claude Code?

Claude Code to **narzędzie AI do programowania** stworzone przez firmę Anthropic. Działa jak inteligentny asystent, który:

- **Czyta** Twoje pliki i rozumie kod
- **Pisze** nowy kod i tworzy pliki
- **Edytuje** istniejące pliki
- **Uruchamia** komendy w terminalu (np. instalacja paczek, build, deploy)
- **Szuka** w internecie aktualnych informacji
- **Planuje** skomplikowane zadania i dzieli je na kroki

### Gdzie działa Claude Code?

Claude Code jest dostępny w kilku miejscach:

| Platforma | Opis |
|-----------|------|
| **Terminal (CLI)** | Pełna wersja w linii komend — wszystkie funkcje |
| **VS Code** | Rozszerzenie — panel w edytorze, inline diffy |
| **Desktop App** | Osobna aplikacja na Mac/Windows |
| **Web (claude.ai/code)** | W przeglądarce — sesje w chmurze |
| **JetBrains** | IntelliJ, PyCharm, WebStorm |

### Dla kogo jest Claude Code?

Claude Code jest dla **każdego**, kto pracuje z kodem — nie musisz być programistą. Jeśli budujesz stronę, aplikację, automatyzację, lub po prostu chcesz szybciej pracować z projektami technicznymi — Claude Code jest dla Ciebie.

### Jak to działa?

1. Opisujesz co chcesz zrobić **swoimi słowami** (po polsku!)
2. Claude analizuje Twój projekt (pliki, kod, konfigurację)
3. Proponuje rozwiązanie lub od razu wykonuje zmiany
4. Ty zatwierdzasz lub prosisz o poprawki

To jak rozmowa z doświadczonym programistą, który siedzi obok Ciebie i ma dostęp do Twojego komputera.`,
    difficulty: "beginner",
    tags: ["wprowadzenie", "podstawy", "co-to-jest"],
    order: 1,
    created_at: "2026-04-12",
    updated_at: "2026-04-12",
  },
  {
    id: "a2",
    category_id: "basics",
    title: "Instalacja Claude Code",
    slug: "instalacja",
    summary: "Jak zainstalować Claude Code na macOS — CLI, VS Code, Desktop App.",
    content: `## Instalacja Claude Code

### Metoda 1: Natywna instalacja (zalecana)

Otwórz Terminal i wpisz:

\`\`\`bash
curl -fsSL https://claude.ai/install.sh | bash
\`\`\`

Ta metoda **automatycznie się aktualizuje** — nie musisz ręcznie instalować nowych wersji.

### Metoda 2: Homebrew

\`\`\`bash
brew install --cask claude-code
\`\`\`

> Uwaga: Ta metoda wymaga ręcznych aktualizacji (\`brew upgrade claude-code\`).

### VS Code — rozszerzenie

1. Otwórz VS Code
2. Naciśnij \`Cmd+Shift+X\` (panel rozszerzeń)
3. Wyszukaj "Claude Code"
4. Kliknij "Install"

Po instalacji zobaczysz **ikonę iskierki** (✱) w prawym górnym rogu edytora i na pasku bocznym.

### Desktop App (aplikacja na Mac)

Pobierz ze strony [claude.ai](https://claude.ai) → sekcja Claude Code → Download for Mac.

### Po instalacji

1. Uruchom \`claude\` w terminalu lub otwórz panel w VS Code
2. Zaloguj się kontem Anthropic (potrzebujesz planu Pro, Max lub Team)
3. Gotowe! Możesz zacząć pisać polecenia.

### Sprawdzenie wersji

\`\`\`bash
claude --version
\`\`\`

### Diagnostyka instalacji

Jeśli coś nie działa:

\`\`\`
/doctor
\`\`\`

Ta komenda sprawdzi czy wszystko jest poprawnie skonfigurowane.`,
    difficulty: "beginner",
    tags: ["instalacja", "setup", "vs-code", "terminal"],
    order: 2,
    created_at: "2026-04-12",
    updated_at: "2026-04-12",
  },
  {
    id: "a3",
    category_id: "basics",
    title: "Jak pisać polecenia do Claude",
    slug: "jak-pisac-polecenia",
    summary: "Praktyczne wskazówki jak formułować polecenia, żeby Claude rozumiał co chcesz.",
    content: `## Jak pisać polecenia do Claude

Najważniejsza zasada: **pisz jak do człowieka**. Claude rozumie naturalny język — nie musisz znać żadnych komend ani składni.

### Dobre polecenia — przykłady

| Zamiast | Napisz |
|---------|--------|
| "edytuj plik" | "Zmień kolor przycisku na stronie głównej z niebieskiego na zielony" |
| "napraw bug" | "Strona się wysypuje gdy klikam 'Zapisz' — napraw to" |
| "dodaj stronę" | "Dodaj stronę 'O nas' z tekstem opisującym naszą firmę" |

### Zasady pisania dobrych poleceń

1. **Bądź konkretny** — "Zmień tytuł na 'Witaj'" jest lepsze niż "Zmień tytuł"
2. **Opisz kontekst** — "W pliku strony głównej..." lub "W sekcji nagłówka..."
3. **Powiedz co chcesz osiągnąć** — nie jak to zrobić technicznie
4. **Pisz po polsku** — Claude świetnie rozumie polski

### Wielolinijkowe polecenia

Aby napisać polecenie w kilku liniach (bez wysyłania po Enter):

- **VS Code**: \`Shift+Enter\` — nowa linia
- **Terminal**: \`Shift+Enter\` (po skonfigurowaniu \`/terminal-setup\`)

### Odwoływanie się do plików

W VS Code możesz użyć **@-mention**:
- Naciśnij \`Option+K\` (lub \`Cmd+K\`)
- Wybierz plik z listy
- Claude zobaczy dokładnie ten plik z numerami linii

### Jeśli Claude nie zrozumiał

Po prostu napisz: "Nie, chodziło mi o..." lub "Cofnij to i zrób inaczej — ..."

Claude pamięta kontekst rozmowy i poprawi swoje podejście.`,
    difficulty: "beginner",
    tags: ["polecenia", "prompty", "pisanie", "podstawy"],
    order: 3,
    created_at: "2026-04-12",
    updated_at: "2026-04-12",
  },
  {
    id: "a4",
    category_id: "vscode",
    title: "Claude Code w VS Code — kompletny przewodnik",
    slug: "vscode-przewodnik",
    summary: "Jak korzystać z Claude Code w Visual Studio Code — panel, skróty, ustawienia.",
    content: `## Claude Code w VS Code

### Gdzie jest Claude?

Po instalacji rozszerzenia masz kilka sposobów otwarcia Claude:

1. **Ikona iskierki** (✱) — prawy górny róg edytora
2. **Pasek aktywności** — ikona na lewym pasku bocznym
3. **Paleta poleceń** — \`Cmd+Shift+P\` → wpisz "Claude Code"
4. **Pasek statusu** — kliknij "✱ Claude Code" na dole

### Najważniejsze skróty

| Skrót | Co robi |
|-------|---------|
| \`Cmd+Esc\` | Przełącz fokus między kodem a Claude |
| \`Cmd+Shift+Esc\` | Nowa rozmowa w osobnej zakładce |
| \`Option+K\` | Wstaw @-mention (odniesienie do pliku) |
| \`Cmd+N\` | Nowa rozmowa |
| \`Shift+Enter\` | Nowa linia (bez wysyłania) |
| \`Enter\` | Wyślij wiadomość |

### Ustawienia rozszerzenia

Otwórz \`Cmd+,\` → Extensions → Claude Code:

- **Preferred Location** — panel (na dole) lub sidebar (z boku)
- **Autosave** — automatyczne zapisywanie plików po edycji
- **Permission Mode** — poziom automatycznych uprawnień

### Przeglądanie zmian (Diff View)

Gdy Claude zmieni plik, zobaczysz **podświetlone różnice**:
- Zielone = dodane linie
- Czerwone = usunięte linie
- Możesz zaakceptować lub odrzucić każdy plik osobno

### Wiele rozmów jednocześnie

Możesz mieć otwarte kilka rozmów z Claude w osobnych zakładkach — przydatne gdy pracujesz nad kilkoma rzeczami na raz.

### Wznowienie rozmowy

Jeśli zamkniesz VS Code, możesz wrócić do poprzedniej rozmowy:
- Wpisz \`/resume\` w panelu Claude
- Lub \`Cmd+Shift+P\` → "Claude Code: Resume"`,
    difficulty: "beginner",
    tags: ["vs-code", "rozszerzenie", "skróty", "ustawienia"],
    order: 1,
    created_at: "2026-04-12",
    updated_at: "2026-04-12",
  },
  {
    id: "a5",
    category_id: "config",
    title: "CLAUDE.md — instrukcja dla Claude w Twoim projekcie",
    slug: "claude-md",
    summary: "Czym jest plik CLAUDE.md, jak go stworzyć i dlaczego każdy projekt powinien go mieć.",
    content: `## CLAUDE.md — instrukcja dla Claude

### Czym jest CLAUDE.md?

To plik tekstowy, który mówi Claude **jak pracować z Twoim projektem**. Pomyśl o tym jak o instrukcji dla nowego pracownika — opisujesz:

- Jaki to projekt i jaki ma stack technologiczny
- Jakie są zasady (np. "zawsze pisz po polsku", "nie zmieniaj plików w katalogu X")
- Jakie komendy uruchamiać (np. "build: npm run build")
- Czego unikać

### Gdzie umieścić CLAUDE.md?

Są 3 poziomy:

| Lokalizacja | Zasięg | Przykład |
|-------------|--------|---------|
| \`~/.claude/CLAUDE.md\` | **Globalne** — wszystkie projekty | Twoje ogólne preferencje |
| \`./CLAUDE.md\` (w projekcie) | **Projekt** — wszyscy w zespole | Zasady projektu |
| \`./CLAUDE.local.md\` | **Lokalne** — tylko Ty | Twoje osobiste notatki |

### Przykładowy CLAUDE.md

\`\`\`markdown
# Mój Projekt

## Stack
- Next.js 16, React 19, TypeScript, Tailwind CSS
- Supabase (baza danych, auth)
- Deploy: Vercel

## Zasady
- Język interfejsu: polski
- Po każdej zmianie: npm run build musi przejść
- Nie dodawaj zbędnych komentarzy w kodzie
- Commit messages po angielsku z prefixem (feat/fix/chore)

## Komendy
- Dev: npm run dev
- Build: npm run build
- Lint: npm run lint
\`\`\`

### Import innych plików

Możesz importować dodatkowe pliki:

\`\`\`markdown
@docs/api-reference.md
@AGENTS.md
\`\`\`

### Wskazówki

- Im lepiej opiszesz projekt, tym lepiej Claude będzie pracował
- Aktualizuj CLAUDE.md gdy zmieniają się zasady
- Nie wstawiaj sekretów (kluczy API, haseł) do CLAUDE.md!`,
    difficulty: "beginner",
    tags: ["claude-md", "konfiguracja", "projekt", "instrukcja"],
    order: 1,
    created_at: "2026-04-12",
    updated_at: "2026-04-12",
  },
  {
    id: "a6",
    category_id: "config",
    title: "Uprawnienia — co Claude może, a czego nie",
    slug: "uprawnienia",
    summary: "Tryby uprawnień, reguly allow/deny, jak kontrolować co Claude robi z Twoimi plikami.",
    content: `## Uprawnienia w Claude Code

### Po co są uprawnienia?

Claude Code ma dostęp do Twojego komputera — czyta pliki, uruchamia komendy, edytuje kod. Uprawnienia kontrolują **co może robić bez pytania Cię o zgodę**.

### Tryby uprawnień

| Tryb | Opis | Dla kogo |
|------|------|----------|
| **default** | Pyta przy pierwszym użyciu każdego narzędzia | Początkujący — bezpieczny |
| **acceptEdits** | Auto-akceptuje edycje plików i podstawowe komendy | Codzienne użycie |
| **plan** | Claude analizuje ale NIE zmienia plików | Gdy chcesz tylko plan/analizę |
| **auto** | Auto-akceptuje prawie wszystko (z kontrolą bezpieczeństwa) | Zaawansowani |
| **bypassPermissions** | Pomija uprawnienia (tylko izolowane środowiska!) | CI/CD, sandbox |

### Jak zmienić tryb?

- W VS Code: kliknij tryb na pasku statusu
- W CLI: \`/permissions\`
- Przy starcie: \`claude --permission-mode plan\`

### Reguły allow/deny

Możesz precyzyjnie określić co Claude może robić:

\`\`\`
/permissions
→ Allow: Bash(npm run build)
→ Allow: Bash(git commit *)
→ Deny: Bash(rm -rf *)
→ Deny: Edit(.env)
\`\`\`

### Praktyczna rada

Zacznij od trybu **default** (bezpieczny). Gdy zobaczysz że Claude pyta Cię o to samo po raz 10. — dodaj to do allow. Z czasem przejdziesz na **acceptEdits**.`,
    difficulty: "intermediate",
    tags: ["uprawnienia", "bezpieczeństwo", "permissions", "tryby"],
    order: 2,
    created_at: "2026-04-12",
    updated_at: "2026-04-12",
  },
  {
    id: "a7",
    category_id: "tools",
    title: "Narzędzia Claude Code — kompletny przewodnik",
    slug: "narzedzia-przewodnik",
    summary: "Wszystkie wbudowane narzędzia: Read, Edit, Write, Bash, Grep, Glob, Agent i inne.",
    content: `## Narzędzia Claude Code

Claude ma zestaw wbudowanych narzędzi, które używa automatycznie. Nie musisz ich wywoływać ręcznie — Claude sam decyduje którego użyć na podstawie Twojego polecenia.

### Najważniejsze narzędzia

#### Read — czytanie plików
Claude czyta pliki żeby zrozumieć Twój kod. Obsługuje: kod, obrazy, PDF-y, notebooki Jupyter.

**Gdy powiesz:** "Pokaż mi co jest w pliku page.tsx"
**Claude użyje:** Read → pokaże Ci zawartość pliku

#### Edit — edycja plików
Precyzyjna zmiana fragmentu pliku. Podmienia tylko wybrany tekst, nie cały plik.

**Gdy powiesz:** "Zmień tytuł strony na 'Witaj'"
**Claude użyje:** Edit → zmieni tylko ten jeden fragment

#### Write — tworzenie plików
Tworzy nowy plik od zera.

**Gdy powiesz:** "Utwórz komponent Button"
**Claude użyje:** Write → stworzy nowy plik z kodem

#### Bash — komendy terminala
Uruchamia dowolną komendę. Wymaga Twojej zgody (chyba że dodasz do allow).

**Gdy powiesz:** "Zainstaluj bibliotekę shadcn/ui"
**Claude użyje:** Bash → \`npx shadcn@latest init\`

#### Grep — szukanie w treści plików
Przeszukuje zawartość plików za pomocą wzorców.

**Gdy powiesz:** "Znajdź gdzie jest zdefiniowana funkcja handleSubmit"
**Claude użyje:** Grep → przeszuka wszystkie pliki

#### Glob — szukanie plików po nazwie
Znajduje pliki pasujące do wzorca.

**Gdy powiesz:** "Jakie pliki TypeScript mam w src?"
**Claude użyje:** Glob → \`src/**/*.ts\`

#### Agent — sub-agenty
Uruchamia osobnego agenta do zadania. Przydatne przy złożonych analizach.

**Gdy powiesz:** "Zbadaj dokładnie jak działa auth w tym projekcie"
**Claude użyje:** Agent (Explore) → głęboka analiza wielu plików

### Nie musisz pamiętać

Claude sam wybiera narzędzia — Ty po prostu opisujesz co chcesz zrobić.`,
    difficulty: "beginner",
    tags: ["narzędzia", "tools", "read", "edit", "write", "bash", "grep", "glob"],
    order: 1,
    created_at: "2026-04-12",
    updated_at: "2026-04-12",
  },
  {
    id: "a8",
    category_id: "memory",
    title: "Jak Claude pamięta — CLAUDE.md i auto-memory",
    slug: "pamiec-claude",
    summary: "System pamięci Claude: CLAUDE.md, auto-memory, /compact — jak zarządzać kontekstem.",
    content: `## Jak Claude pamięta

### Problem: Claude zapomina

Każda nowa rozmowa z Claude zaczyna się od zera — nie pamięta poprzednich sesji. Ale istnieją mechanizmy, które pozwalają mu "pamiętać".

### 1. CLAUDE.md — pamięć stała projektu

Plik CLAUDE.md jest ładowany **na początku każdej rozmowy**. To jak notatka przyklejona do monitora — Claude zawsze ją widzi.

Co warto tam wpisać:
- Jaki to projekt
- Jakie zasady obowiązują
- Jakie komendy uruchamiać

### 2. Auto-memory — pamięć automatyczna

Claude automatycznie zapisuje ważne informacje, które się nauczył:
- Komendy build/test które działają
- Wzorce debugowania
- Twoje preferencje

Pliki pamięci są w: \`~/.claude/projects/<projekt>/memory/\`

Zarządzaj pamięcią:
- \`/memory\` — edytuj CLAUDE.md i auto-memory
- Powiedz "Zapamiętaj że..." — Claude zapisze do pamięci
- Powiedz "Zapomnij o..." — Claude usunie z pamięci

### 3. Kontekst rozmowy — pamięć tymczasowa

W trakcie jednej rozmowy Claude pamięta wszystko co powiedzieliście. Ale jest limit — **okno kontekstu** (do 1 miliona tokenów w Opus 4.6).

Gdy kontekst się zapełnia:
- Claude automatycznie kompresuje starsze wiadomości
- Możesz ręcznie: \`/compact\` — skompresuj rozmowę
- Sprawdź ile zostało: \`/context\`

### 4. Wznawianie rozmów

Nie musisz zaczynać od nowa! Wpisz \`/resume\` żeby wrócić do poprzedniej rozmowy z pełnym kontekstem.

### Praktyczne wskazówki

- Zawsze miej dobry CLAUDE.md — to najważniejsze
- Na początku długiej sesji powiedz Claude co robisz
- Używaj \`/compact\` gdy Claude zaczyna "gubić wątek"
- Ważne ustalenia wpisuj do CLAUDE.md, nie polegaj na pamięci rozmowy`,
    difficulty: "intermediate",
    tags: ["pamięć", "memory", "claude-md", "kontekst", "compact"],
    order: 1,
    created_at: "2026-04-12",
    updated_at: "2026-04-12",
  },
  {
    id: "a9",
    category_id: "hooks",
    title: "Hooks — automatyczne akcje w Claude Code",
    slug: "hooks-wprowadzenie",
    summary: "Czym są hooks, jak je skonfigurować i przykłady praktycznych zastosowań.",
    content: `## Hooks — automatyczne akcje

### Czym są hooks?

Hooks to **automatyczne skrypty** które uruchamiają się gdy Claude robi coś konkretnego. Pomyśl o nich jak o regułach: "Gdy X się wydarzy, zrób Y".

### Przykłady zastosowań

- **Przed usunięciem pliku** → pytaj o potwierdzenie
- **Po każdej edycji** → uruchom linter
- **Gdy Claude pisze do .env** → zablokuj (bezpieczeństwo!)
- **Na początku sesji** → wypisz przypomnienia

### Typy hooks

| Typ | Opis |
|-----|------|
| **command** | Uruchamia skrypt shell |
| **http** | Wysyła żądanie HTTP do endpointu |
| **prompt** | Pyta Claude tak/nie |
| **agent** | Uruchamia sub-agenta do weryfikacji |

### Kiedy się uruchamiają (lifecycle events)

- \`SessionStart\` — początek rozmowy
- \`UserPromptSubmit\` — gdy wysyłasz polecenie
- \`PreToolUse\` — **przed** użyciem narzędzia (np. przed Edit)
- \`PostToolUse\` — **po** użyciu narzędzia
- \`Stop\` — gdy Claude kończy odpowiedź

### Konfiguracja

W pliku \`settings.json\` (otwórz przez \`/hooks\`):

\`\`\`json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "if": "Bash(rm *)",
        "hooks": [
          {
            "type": "command",
            "command": "echo 'ZABLOKOWANE: nie usuwaj plików!'",
            "timeout": 10
          }
        ]
      }
    ]
  }
}
\`\`\`

### Kody wyjścia skryptów

- \`0\` — OK, kontynuuj
- \`1\` — błąd, ale kontynuuj
- \`2\` — **BLOKUJ** akcję

### Rada praktyczna

Zacznij od prostych hooks bezpieczeństwa (blokada .env, ostrzeżenie przy rm). Z czasem dodawaj bardziej zaawansowane.`,
    difficulty: "advanced",
    tags: ["hooks", "automatyzacja", "bezpieczeństwo", "konfiguracja"],
    order: 1,
    created_at: "2026-04-12",
    updated_at: "2026-04-12",
  },
  {
    id: "a10",
    category_id: "mcp",
    title: "MCP Servers — podłączanie zewnętrznych usług",
    slug: "mcp-wprowadzenie",
    summary: "Czym jest MCP, jak podłączyć Supabase, GitHub, Slack i inne usługi do Claude Code.",
    content: `## MCP — Model Context Protocol

### Czym jest MCP?

MCP to sposób na **podłączenie zewnętrznych usług** do Claude Code. Dzięki temu Claude może np.:

- Wykonywać zapytania do bazy danych Supabase
- Tworzyć issues na GitHub
- Wysyłać wiadomości na Slack
- Pobierać dane z Google Analytics
- Zarządzać projektami w Notion

### Jak to działa?

1. Konfigurujesz serwer MCP (podajesz jak się połączyć)
2. Claude widzi nowe narzędzia z tego serwera
3. Używa ich automatycznie gdy tego potrzebujesz

### Podłączanie serwera MCP

#### Metoda 1: Komenda CLI
\`\`\`bash
claude mcp add supabase npx @supabase/mcp@latest
\`\`\`

#### Metoda 2: Plik konfiguracyjny

W \`~/.claude/settings.json\`:
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

Lub w projekcie (\`.mcp.json\`):
\`\`\`json
{
  "mcpServers": {
    "supabase": {
      "command": "npx",
      "args": ["@supabase/mcp@latest"]
    }
  }
}
\`\`\`

### Popularne serwery MCP

| Serwer | Do czego | Autoryzacja |
|--------|----------|-------------|
| Supabase | Baza danych, auth, storage | OAuth |
| GitHub | Repo, issues, PR-y | OAuth |
| Slack | Wiadomości, kanały | OAuth |
| Figma | Design, komponenty | OAuth |
| Stripe | Płatności | OAuth |
| Notion | Dokumenty, bazy | OAuth |

### Zarządzanie

- \`/mcp\` — pokaż podłączone serwery
- \`claude mcp list\` — lista w CLI
- \`claude mcp remove <nazwa>\` — odłącz serwer

### OAuth

Wiele serwerów MCP wymaga logowania (OAuth). Przy pierwszym użyciu Claude otworzy przeglądarkę żebyś się zalogował. Potem pamiętuje sesję.`,
    difficulty: "intermediate",
    tags: ["mcp", "supabase", "github", "slack", "integracja"],
    order: 1,
    created_at: "2026-04-12",
    updated_at: "2026-04-12",
  },
  {
    id: "a11",
    category_id: "git",
    title: "Git z Claude Code — commit, push, pull request",
    slug: "git-podstawy",
    summary: "Jak używać Git przez Claude Code — commity, push, tworzenie PR-ów bez znajomości Git.",
    content: `## Git z Claude Code

### Co to Git? (w jednym zdaniu)

Git to system który **śledzi zmiany w plikach** i pozwala wrócić do poprzednich wersji. Jak "Historia wersji" w Google Docs, ale dla całego projektu.

### Podstawowe operacje przez Claude

Nie musisz znać komend Git! Po prostu powiedz Claude co chcesz:

| Chcesz... | Powiedz Claude |
|-----------|----------------|
| Zapisać zmiany | "Zrób commit z tymi zmianami" |
| Wysłać na GitHub | "Push na GitHub" |
| Sprawdzić co się zmieniło | "Pokaż co się zmieniło od ostatniego commita" |
| Utworzyć pull request | "Utwórz PR z opisem zmian" |
| Cofnąć ostatnią zmianę | "Cofnij ostatni commit" |

### Typowy workflow

1. Pracujesz z Claude (edytujesz pliki, dodajesz funkcje)
2. Mówisz: **"Zrób commit i push"**
3. Claude: tworzy commit z opisem + wysyła na GitHub
4. Vercel automatycznie deployuje nową wersję

### Slash commands do Git

- \`/diff\` — podgląd niezacommitowanych zmian
- \`/commit\` — Claude tworzy commit ze zmianami (z sensownym opisem)

### Na co uważać

- Claude nigdy nie zrobi force push bez Twojej wyraźnej zgody
- Zawsze sprawdza co jest do zacommitowania zanim to zrobi
- Pliki .env i sekrety NIE powinny trafiać do Git

### Branching (gałęzie)

Gałęzie to równoległe wersje projektu. Claude może:

- "Utwórz nowy branch feature/nowa-strona"
- "Przełącz na branch main"
- "Zmerguj branch do main"

Pomyśl o branchach jak o kopiach projektu — pracujesz na kopii, a potem łączysz zmiany z oryginałem.`,
    difficulty: "beginner",
    tags: ["git", "commit", "push", "pull-request", "github"],
    order: 1,
    created_at: "2026-04-12",
    updated_at: "2026-04-12",
  },
  {
    id: "a12",
    category_id: "commands",
    title: "Slash Commands — kompletny przewodnik",
    slug: "slash-commands",
    summary: "Wszystkie komendy / w Claude Code z opisami po polsku i przykładami użycia.",
    content: `## Slash Commands

### Czym są slash commands?

To komendy zaczynające się od \`/\` które możesz wpisać w pole czatu. Działają jak skróty do często używanych akcji.

### Najważniejsze komendy na start

| Komenda | Co robi | Kiedy użyć |
|---------|---------|------------|
| \`/help\` | Pokazuje pomoc | Gdy nie wiesz co robić |
| \`/clear\` | Czyści rozmowę | Nowy start |
| \`/compact\` | Kompresuje kontekst | Gdy rozmowa jest długa |
| \`/diff\` | Pokazuje zmiany w plikach | Przed commitem |
| \`/status\` | Wersja, model, konto | Diagnostyka |
| \`/cost\` | Ile tokenów zużyłeś | Kontrola kosztów |

### Komendy modelu

| Komenda | Co robi |
|---------|---------|
| \`/model\` | Zmień model AI |
| \`/fast\` | Tryb szybki (2.5x szybciej, drożej) |
| \`/effort high\` | Wyższy wysiłek = lepsze odpowiedzi |

### Komendy zaawansowane

| Komenda | Co robi |
|---------|---------|
| \`/plan\` | Tryb planowania (Claude proponuje, nie wykonuje) |
| \`/batch\` | Równoległe zmiany w wielu plikach |
| \`/loop 5m /status\` | Powtarzaj komendę co 5 minut |
| \`/memory\` | Zarządzaj pamięcią |
| \`/permissions\` | Zarządzaj uprawnieniami |
| \`/mcp\` | Zarządzaj serwerami MCP |

### Pełna lista

Wpisz \`/help\` w Claude Code żeby zobaczyć wszystkie dostępne komendy.

Zobacz też zakładkę **Ściągawka** na tej stronie — masz tam pełną listę z opisami.`,
    difficulty: "beginner",
    tags: ["komendy", "slash", "commands", "pomoc"],
    order: 1,
    created_at: "2026-04-12",
    updated_at: "2026-04-12",
  },
  // --- SKRÓTY ---
  {
    id: "a13",
    category_id: "shortcuts",
    title: "10 najważniejszych skrótów macOS",
    slug: "top-10-skrotow-macos",
    summary: "Top 10 skrótów klawiszowych macOS, które przyspieszą Twoją pracę z Claude Code.",
    content: `## 10 najważniejszych skrótów macOS

### Po co uczyć się skrótów?

Wyobraź sobie, że zamiast szukać guzika myszką, naciskasz dwa klawisze i gotowe. Skróty klawiszowe to jak **piloty do telewizora** — można wstać i nacisnąć guzik na obudowie, ale pilotem jest po prostu szybciej.

W Claude Code skróty pozwalają Ci:
- Szybciej nawigować między oknami
- Zatwierdzać lub odrzucać zmiany bez myszki
- Zarządzać rozmowami i kontekstem

### Top 10 skrótów

| Nr | Skrót | Co robi | Kiedy użyć |
|----|-------|---------|------------|
| 1 | \`Cmd+Esc\` | Przełącz fokus na panel Claude | Gdy piszesz kod i chcesz coś powiedzieć Claude |
| 2 | \`Cmd+Shift+Esc\` | Nowa rozmowa w nowej zakładce | Gdy chcesz zacząć nowy temat |
| 3 | \`Cmd+N\` | Nowa rozmowa | Czysty start — nowa sesja |
| 4 | \`Cmd+Z\` | Cofnij ostatnią zmianę | Gdy Claude zmienił coś czego nie chciałeś |
| 5 | \`Cmd+S\` | Zapisz plik | Po ręcznej edycji (Claude zapisuje automatycznie) |
| 6 | \`Cmd+Tab\` | Przełącz między aplikacjami | Terminal ↔ VS Code ↔ przeglądarka |
| 7 | \`Cmd+\\\`\` | Otwórz/zamknij terminal w VS Code | Szybki dostęp do linii komend |
| 8 | \`Cmd+Shift+P\` | Paleta poleceń VS Code | Szukanie dowolnej akcji |
| 9 | \`Ctrl+C\` | Przerwij działanie Claude | Gdy Claude robi coś czego nie chcesz |
| 10 | \`Cmd+W\` | Zamknij aktualną zakładkę | Porządkowanie otwartych plików |

### Jak zapamiętać?

Nie ucz się wszystkich na raz. Zacznij od **trzech najważniejszych**:

1. **\`Cmd+Esc\`** — przełączanie do Claude (będziesz używać non-stop)
2. **\`Ctrl+C\`** — przerwanie Claude (przydaje się częściej niż myślisz)
3. **\`Cmd+Z\`** — cofanie zmian (Twoja siatka bezpieczeństwa)

### Wskazówka dla początkujących

Wydrukuj sobie tę tabelkę i przyklej obok monitora. Po tygodniu nie będziesz już na nią patrzeć — palce zapamiętają same.

### Dostosowywanie skrótów

Możesz zmienić domyślne skróty:
- W VS Code: \`Cmd+K Cmd+S\` → ustawienia klawiszy
- W Claude Code CLI: plik \`~/.claude/keybindings.json\`

Jeśli jakiś skrót koliduje z innym programem, po prostu go zmień na wygodniejszy.`,
    difficulty: "beginner",
    tags: ["skróty", "macos", "klawiszowe"],
    order: 1,
    created_at: "2026-04-13",
    updated_at: "2026-04-13",
  },
  {
    id: "a14",
    category_id: "shortcuts",
    title: "Skróty VS Code dla Claude Code",
    slug: "skroty-vscode",
    summary: "Skróty klawiszowe VS Code, które ułatwiają pracę z rozszerzeniem Claude Code.",
    content: `## Skróty VS Code dla Claude Code

### Dlaczego VS Code?

VS Code to najpopularniejszy edytor kodu na świecie — i Claude Code ma w nim **dedykowane rozszerzenie**. Dzięki skrótom klawiszowym możesz sterować Claude bez odrywania rąk od klawiatury.

### Skróty panelu Claude

| Skrót | Co robi | Opis |
|-------|---------|------|
| \`Cmd+Esc\` | Fokus na Claude | Przeskakujesz do pola tekstowego Claude |
| \`Cmd+Shift+Esc\` | Nowa rozmowa (nowa zakładka) | Otwiera osobną kartę z nową sesją |
| \`Cmd+N\` | Nowa rozmowa | Reset — czysta sesja |
| \`Shift+Enter\` | Nowa linia | Piszesz wielolinijkowe polecenie bez wysyłania |
| \`Enter\` | Wyślij | Wysyła polecenie do Claude |
| \`Esc\` | Przerwij / wróć do kodu | Zatrzymuje Claude lub wraca do edytora |

### Odwoływanie się do plików (@-mention)

Jedna z najważniejszych funkcji w VS Code — możesz wskazać Claude konkretny plik:

| Skrót | Co robi |
|-------|---------|
| \`Option+K\` | Otwiera menu @-mention |
| \`Cmd+K\` | Alternatywny skrót @-mention |

Po naciśnięciu zobaczysz listę plików projektu. Wybierz plik, a Claude zobaczy jego pełną zawartość z numerami linii — jakbyś mu pokazał palcem "patrz tutaj".

### Paleta poleceń

\`Cmd+Shift+P\` otwiera paletę poleceń VS Code. Wpisz "Claude Code" żeby zobaczyć wszystkie dostępne akcje:

- **Claude Code: Focus** — przejdź do panelu
- **Claude Code: New Conversation** — nowa rozmowa
- **Claude Code: Resume** — wznów poprzednią rozmowę
- **Claude Code: Restart** — restart rozszerzenia (gdy coś nie działa)

### Skróty terminala w VS Code

| Skrót | Co robi |
|-------|---------|
| \`Cmd+\\\`\` | Otwórz/zamknij terminal |
| \`Cmd+Shift+\\\`\` | Nowy terminal |
| \`Ctrl+C\` | Przerwij bieżącą komendę |

### Nawigacja między panelami

| Skrót | Co robi |
|-------|---------|
| \`Cmd+1\` | Fokus na edytor (panel 1) |
| \`Cmd+B\` | Pokaż/ukryj pasek boczny |
| \`Cmd+J\` | Pokaż/ukryj panel dolny (terminal) |

### Praktyczny przepływ pracy

1. Piszesz kod w edytorze
2. \`Cmd+Esc\` → przeskakujesz do Claude
3. \`Option+K\` → wskazujesz plik z problemem
4. Opisujesz co trzeba zrobić
5. \`Enter\` → wysyłasz
6. Claude naprawia, Ty przeglądasz diff
7. \`Esc\` → wracasz do kodu

To jak rozmowa przez komunikator — przełączasz się tam i z powrotem w sekundę.`,
    difficulty: "beginner",
    tags: ["skróty", "vs-code", "klawiszowe"],
    order: 2,
    created_at: "2026-04-13",
    updated_at: "2026-04-13",
  },
  // --- AGENTY ---
  {
    id: "a15",
    category_id: "agents",
    title: "Czym są subagenty i jak ich używać",
    slug: "subagenty-wprowadzenie",
    summary: "Wprowadzenie do subagentów — co to jest, kiedy Claude ich używa i jak tworzyć własne.",
    content: `## Czym są subagenty?

### Analogia: szef i pracownicy

Wyobraź sobie, że Claude to szef biura. Gdy dostajesz proste zadanie — robi je sam. Ale gdy zadanie jest skomplikowane, **deleguje je do specjalistów** — to właśnie subagenty.

Subagent to osobna "kopia" Claude, która dostaje jedno konkretne zadanie, wykonuje je w izolacji i zwraca wynik do głównego Claude.

### Typy subagentów

| Typ | Do czego | Przykład |
|-----|----------|---------|
| **Explore** | Analiza kodu, szukanie wzorców | "Zbadaj jak działa auth w tym projekcie" |
| **Plan** | Planowanie złożonych zmian | "Zaplanuj refaktor systemu płatności" |
| **Ogólny** | Dowolne zadanie | "Przeanalizuj 5 plików i napisz podsumowanie" |

### Kiedy Claude używa subagentów automatycznie?

Claude sam decyduje, że potrzebuje subagenta gdy:

- Musi **przeszukać wiele plików** na raz (np. "gdzie jest używana ta funkcja?")
- Zadanie wymaga **głębokiej analizy** (np. "jak działa cały flow rejestracji?")
- Trzeba **porównać kilka podejść** do problemu
- Zadanie jest tak duże, że lepiej je **rozbić na części**

Nie musisz nic robić — po prostu opisz co chcesz, a Claude zdecyduje czy potrzebuje pomocy.

### Tworzenie własnych subagentów

Możesz tworzyć **własnych wyspecjalizowanych agentów** za pomocą komendy:

\`\`\`
/agents
\`\`\`

To otworzy konfigurator gdzie możesz zdefiniować:

1. **Nazwę** agenta (np. "reviewer", "tester")
2. **Instrukcje** — co agent ma robić
3. **Narzędzia** — do jakich narzędzi ma dostęp
4. **Wyzwalacz** — kiedy się uruchamia

### Przykład: agent do code review

\`\`\`markdown
Nazwa: reviewer
Instrukcje: Przejrzyj zmienione pliki i sprawdź:
- Czy nie ma błędów logicznych
- Czy nazwy zmiennych są czytelne
- Czy nie brakuje obsługi błędów
Zwróć listę uwag w punktach.
\`\`\`

### Plik AGENTS.md

Możesz też opisać agentów w pliku \`AGENTS.md\` w projekcie — działają jak CLAUDE.md, ale specjalnie dla subagentów.

### Kiedy NIE potrzebujesz subagentów

- Proste zadania (edycja jednego pliku, instalacja paczki)
- Pytania o konkretny fragment kodu
- Komendy typu "zrób commit"

Subagenty to narzędzie do **złożonych, wieloetapowych zadań** — nie nadużywaj ich przy prostych rzeczach.`,
    difficulty: "intermediate",
    tags: ["subagenty", "agenty", "delegowanie"],
    order: 1,
    created_at: "2026-04-13",
    updated_at: "2026-04-13",
  },
  {
    id: "a16",
    category_id: "agents",
    title: "Skills — wielorazowe instrukcje dla Claude",
    slug: "skills-wprowadzenie",
    summary: "Czym są Skills, jak tworzyć SKILL.md i czym się różnią od CLAUDE.md i hooks.",
    content: `## Skills — wielorazowe instrukcje

### Czym są Skills?

Skills to **gotowe zestawy instrukcji**, które mówią Claude jak wykonać konkretne zadanie. Pomyśl o nich jak o **przepisach kuchennych** — zamiast za każdym razem tłumaczyć jak zrobić ciasto, dajesz Claude przepis i mówisz "zrób to".

### Skills vs CLAUDE.md vs Hooks

| Mechanizm | Co robi | Kiedy działa |
|-----------|---------|--------------|
| **CLAUDE.md** | Ogólne zasady projektu | Zawsze (każda rozmowa) |
| **Hooks** | Automatyczne skrypty | Przy konkretnych zdarzeniach |
| **Skills** | Instrukcje do konkretnych zadań | Gdy skill jest wywołany |

### Format SKILL.md

Każdy skill to plik Markdown z nagłówkiem (frontmatter) i instrukcjami:

\`\`\`markdown
---
name: deploy
description: Buduje i deployuje projekt na Vercel
triggers:
  - "deploy"
  - "wdróż"
  - "opublikuj"
---

# Deploy

1. Uruchom \\\`npm run build\\\` i sprawdź czy nie ma błędów
2. Uruchom \\\`vercel --prod\\\`
3. Sprawdź czy deploy się powiódł
4. Podaj URL nowej wersji
\`\`\`

### Frontmatter — nagłówek

| Pole | Opis | Wymagane |
|------|------|----------|
| \`name\` | Unikalna nazwa skilla | Tak |
| \`description\` | Co robi (1-2 zdania) | Tak |
| \`triggers\` | Słowa kluczowe do automatycznego uruchomienia | Nie |

### Gdzie trzymać Skills?

- \`~/.claude/skills/\` — Twoje globalne skille (dla wszystkich projektów)
- \`.claude/skills/\` — skille projektu (dla zespołu)

### Tworzenie nowego skilla

Najprościej: powiedz Claude "Utwórz skill do \`<opis zadania>\`" — Claude stworzy plik SKILL.md za Ciebie.

Lub ręcznie:
1. Utwórz plik w \`.claude/skills/nazwa-skilla.md\`
2. Dodaj frontmatter (name, description)
3. Napisz instrukcje krok po kroku

### Wywoływanie skilla

- Automatycznie — gdy Claude rozpozna trigger w Twoim poleceniu
- Ręcznie — \`/skill nazwa\` lub po prostu opisz co chcesz zrobić

### Udostępnianie Skills

Skills w katalogu \`.claude/skills/\` są częścią projektu — wystarczy je zacommitować do Git, a cały zespół będzie miał do nich dostęp.

### Praktyczne przykłady

- **deploy** — buduj i wdrażaj na produkcję
- **code-review** — przeglądaj kod wg ustalonych kryteriów
- **create-component** — twórz komponenty wg szablonu projektu
- **db-migration** — twórz migracje bazy danych wg konwencji

Skills to sposób na **standaryzację pracy** z Claude w zespole.`,
    difficulty: "intermediate",
    tags: ["skills", "automatyzacja", "instrukcje"],
    order: 2,
    created_at: "2026-04-13",
    updated_at: "2026-04-13",
  },
  // --- ZAAWANSOWANE ---
  {
    id: "a17",
    category_id: "advanced",
    title: "Pipe mode i automatyzacja CI/CD",
    slug: "pipe-mode-ci-cd",
    summary: "Jak używać Claude Code w trybie pipe (headless) i integrować go z pipeline'ami CI/CD.",
    content: `## Pipe mode i automatyzacja CI/CD

### Czym jest pipe mode?

Normalnie Claude Code to interaktywna rozmowa — piszesz, Claude odpowiada, pytasz dalej. **Pipe mode** to tryb "bezgłowy" (headless) — Claude dostaje polecenie, wykonuje je i zwraca wynik. Bez interakcji.

Pomyśl o tym jak o **liście z instrukcjami** vs **rozmowa telefoniczna**. Pipe mode to list — Claude czyta, robi, odsyła wynik.

### Jak uruchomić pipe mode?

\`\`\`bash
# Proste polecenie
echo "Opisz co robi plik src/app/page.tsx" | claude

# Z plikiem jako wejściem
cat error.log | claude "Wyjaśnij te błędy i zaproponuj naprawę"

# Z flagą --print (tylko wynik, bez UI)
claude --print "Jakie pliki TypeScript są w src/?"
\`\`\`

### Flagi pipe mode

| Flaga | Co robi |
|-------|---------|
| \`--print\` (\`-p\`) | Wypisz odpowiedź na stdout (bez interaktywnego UI) |
| \`--output-format json\` | Odpowiedź w formacie JSON |
| \`--output-format stream-json\` | Strumieniowane odpowiedzi JSON |
| \`--max-turns 3\` | Maksymalna liczba kroków |
| \`--permission-mode bypassPermissions\` | Bez pytania o zgodę (tylko w sandboxie!) |

### Claude Code w GitHub Actions

Możesz dodać Claude do pipeline CI/CD. Przykład: automatyczny code review przy każdym pull requeście.

\`\`\`yaml
name: Claude Code Review
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Claude Review
        run: |
          git diff origin/main...HEAD | claude --print \\
            "Przejrzyj te zmiany i napisz podsumowanie:
             - Co się zmieniło
             - Czy są potencjalne problemy
             - Sugestie ulepszeń"
\`\`\`

### Claude --remote

Dla długich zadań możesz uruchomić Claude w chmurze:

\`\`\`bash
claude --remote "Przeanalizuj cały projekt i napisz raport bezpieczeństwa"
\`\`\`

Sesja działa na serwerach Anthropic — możesz zamknąć terminal i wrócić później po wynik.

### Praktyczne zastosowania pipe mode

| Zastosowanie | Przykład |
|-------------|---------|
| Code review w CI | Automatyczna recenzja PR-ów |
| Generowanie changelogów | \`git log | claude "Napisz changelog"\` |
| Analiza błędów | \`cat error.log | claude "Co poszło nie tak?"\` |
| Dokumentacja | \`claude --print "Opisz API w src/api/"\` |
| Testy | Sprawdzanie kodu przed mergem |

### Bezpieczeństwo

W CI/CD **zawsze** używaj sandboxa lub izolowanego środowiska. Nigdy nie dawaj Claude pełnych uprawnień na serwerze produkcyjnym.`,
    difficulty: "advanced",
    tags: ["pipe-mode", "ci-cd", "automatyzacja", "headless"],
    order: 1,
    created_at: "2026-04-13",
    updated_at: "2026-04-13",
  },
  {
    id: "a18",
    category_id: "advanced",
    title: "Remote sessions, Cloud i Desktop App",
    slug: "remote-sessions",
    summary: "Sesje w chmurze, Desktop App, Cowork mode i przekazywanie sesji między urządzeniami.",
    content: `## Remote sessions, Cloud i Desktop App

### Trzy sposoby pracy z Claude Code

Claude Code możesz używać nie tylko w terminalu na swoim komputerze. Są trzy główne tryby:

| Tryb | Gdzie działa | Najlepszy do |
|------|-------------|-------------|
| **Lokalny (CLI/VS Code)** | Na Twoim komputerze | Codzienne programowanie |
| **Web (claude.ai/code)** | W przeglądarce | Praca z dowolnego urządzenia |
| **Desktop App** | Osobna aplikacja | Zaawansowane funkcje (Cowork, Preview) |

### Sesje w chmurze (Web)

Wejdź na **claude.ai/code** i masz pełnego Claude Code w przeglądarce:

- Nie musisz nic instalować
- Projekt działa na serwerach Anthropic
- Możesz pracować z tabletu czy telefonu
- Sesja nie obciąża Twojego komputera

Idealne gdy: jesteś w podróży, pracujesz na słabym komputerze, lub chcesz szybko coś sprawdzić.

### Desktop App — funkcje specjalne

Desktop App (aplikacja na Mac/Windows) ma unikalne funkcje:

#### Cowork Mode

Tryb **Cowork** to jakby Claude siedział obok Ciebie i **obserwował co robisz**. Gdy edytujesz pliki ręcznie, Claude:

- Widzi Twoje zmiany w czasie rzeczywistym
- Sugeruje poprawki i ulepszenia
- Automatycznie naprawia błędy które wprowadzasz
- Proponuje kolejne kroki

Włączasz go przyciskiem "Cowork" w Desktop App.

#### App Preview

Claude może uruchomić Twoją aplikację i **pokazać Ci podgląd** bez otwierania przeglądarki. Widzisz stronę bezpośrednio w oknie Desktop App.

### Przekazywanie sesji

Jedną z najpotężniejszych funkcji jest **przenoszenie sesji** między urządzeniami:

#### /teleport

\`\`\`
/teleport
\`\`\`

Generuje link do aktualnej sesji. Otwórz go na innym urządzeniu i kontynuuj pracę dokładnie tam gdzie skończyłeś — z pełnym kontekstem rozmowy.

#### /remote-control

\`\`\`
/remote-control
\`\`\`

Udostępnia Twoją sesję Claude innej osobie. Przydatne gdy:
- Potrzebujesz pomocy kolegi z zespołu
- Chcesz komuś pokazać co Claude robi
- Prowadzisz szkolenie i chcesz demonstrować na żywo

### Claude --remote (sesje zdalne)

Uruchamiasz zadanie na serwerach Anthropic:

\`\`\`bash
claude --remote "Przeanalizuj projekt i napraw wszystkie błędy TypeScript"
\`\`\`

Zalety:
- Sesja działa nawet gdy zamkniesz komputer
- Nie zużywa zasobów Twojego komputera
- Idealne do długich zadań (analiza, refaktor)

Sprawdzenie statusu:
\`\`\`bash
claude --remote --resume
\`\`\`

### Który tryb wybrać?

| Sytuacja | Rekomendacja |
|----------|-------------|
| Codzienne programowanie | CLI lub VS Code (lokalnie) |
| Długie zadania (godziny) | \`claude --remote\` |
| Praca z tabletu/telefonu | Web (claude.ai/code) |
| Pair programming z AI | Desktop App (Cowork) |
| Prezentacja/szkolenie | Desktop App + /remote-control |`,
    difficulty: "advanced",
    tags: ["remote", "cloud", "desktop", "cowork"],
    order: 2,
    created_at: "2026-04-13",
    updated_at: "2026-04-13",
  },
  // --- TROUBLESHOOTING ---
  {
    id: "a19",
    category_id: "troubleshooting",
    title: "Claude nie odpowiada — co robić",
    slug: "claude-nie-odpowiada",
    summary: "Co zrobić gdy Claude się zawiesił, nie odpowiada lub działa zbyt wolno.",
    content: `## Claude nie odpowiada — co robić

### Nie panikuj

Claude czasem się "zamyśla" — analizuje dużo plików, planuje złożoną operację, lub czeka na odpowiedź serwera. Ale jeśli czekasz dłużej niż minutę, czas działać.

### Krok 1: Przerwij i spróbuj ponownie

| Akcja | Jak | Kiedy |
|-------|-----|-------|
| **Przerwij** | \`Ctrl+C\` | Claude się zawiesił lub robi coś czego nie chcesz |
| **Wyczyść rozmowę** | \`/clear\` | Claude "zgubił wątek" po długiej rozmowie |
| **Nowa sesja** | \`Cmd+N\` (VS Code) | Chcesz zacząć od nowa |

\`Ctrl+C\` to Twój **najlepszy przyjaciel**. Naciśnij raz — Claude przerwie obecną akcję. Naciśnij dwa razy — całkowity reset.

### Krok 2: Diagnostyka

Wpisz te komendy żeby sprawdzić co się dzieje:

\`\`\`
/doctor
\`\`\`
Sprawdza: połączenie z API, konfigurację, uprawnienia, wersję. Jeśli coś jest nie tak — powie Ci co.

\`\`\`
/status
\`\`\`
Pokazuje: aktualny model, wersję, ile kontekstu zostało, status połączenia.

\`\`\`
/context
\`\`\`
Pokazuje ile kontekstu zużyłeś. Jeśli jest prawie pełny — użyj \`/compact\`.

### Krok 3: Typowe przyczyny i rozwiązania

#### Claude odpowiada wolno

| Przyczyna | Rozwiązanie |
|-----------|-------------|
| Duży kontekst (długa rozmowa) | \`/compact\` — skompresuj rozmowę |
| Dużo plików w projekcie | Opisz dokładniej które pliki Cię interesują |
| Model Opus (wolniejszy, lepszy) | \`/fast\` — przełącz na szybszy model |
| Słabe połączenie internetowe | Sprawdź internet |

#### Claude się zapętlił

Czasem Claude wchodzi w pętlę — powtarza tę samą akcję w kółko. Rozwiązanie:
1. \`Ctrl+C\` — przerwij
2. Napisz jasno: "Nie rób X, zamiast tego zrób Y"
3. Jeśli to nie pomaga: \`/clear\` i zacznij od nowa

#### Rate limit (przekroczony limit)

Jeśli widzisz komunikat o "rate limit":
- Plan Pro/Max ma limity dzienne
- Poczekaj kilka minut i spróbuj ponownie
- Sprawdź \`/cost\` — ile tokenów dziś zużyłeś
- Rozważ wyższy plan jeśli to częsty problem

#### Brak połączenia z API

\`\`\`
/doctor
\`\`\`
Jeśli \`/doctor\` mówi o problemie z połączeniem:
1. Sprawdź internet
2. Sprawdź czy Anthropic ma awarię: status.anthropic.com
3. Zrestartuj Claude Code: zamknij i otwórz ponownie

### Krok 4: Restart "atomowy"

Gdy nic nie pomaga:

1. Zamknij VS Code / terminal
2. Otwórz na nowo
3. Uruchom \`claude\` lub otwórz panel Claude w VS Code
4. Zacznij nową rozmowę

To rozwiązuje 99% problemów — jak restart komputera, gdy coś się zacięło.`,
    difficulty: "beginner",
    tags: ["problemy", "troubleshooting", "nie-odpowiada"],
    order: 1,
    created_at: "2026-04-13",
    updated_at: "2026-04-13",
  },
  {
    id: "a20",
    category_id: "troubleshooting",
    title: "Build się nie kompiluje — naprawianie błędów",
    slug: "build-nie-kompiluje",
    summary: "Jak naprawiać błędy kompilacji z pomocą Claude — kopiuj, wklej, napraw.",
    content: `## Build się nie kompiluje — naprawianie błędów

### Co to jest "build"?

Build to proces w którym komputer **sprawdza Twój kod** i przygotowuje go do uruchomienia. Pomyśl o tym jak o **sprawdzaniu wypracowania** — nauczyciel (kompilator) zaznacza błędy czerwonym długopisem zanim praca trafi na tablicę ogłoszeń (produkcję).

Gdy build "nie przechodzi" — znaczy że w kodzie jest błąd który trzeba naprawić.

### Metoda 1: Pokaż Claude błąd (najszybsza)

Gdy widzisz czerwone komunikaty w terminalu:

1. **Skopiuj cały komunikat błędu** (Cmd+C)
2. **Wklej do Claude** i napisz: "Napraw ten błąd"
3. Claude przeczyta komunikat, znajdzie problem i naprawi

Przykład:
\`\`\`
Wklej tutaj: "Error: Module not found: Can't resolve './Button'"
+ "Napraw ten błąd"
\`\`\`

Claude zobaczy że brakuje pliku Button, znajdzie go lub utworzy.

### Metoda 2: Każ Claude uruchomić build

Powiedz:
\`\`\`
Uruchom npm run build i napraw wszystkie błędy
\`\`\`

Claude sam:
1. Uruchomi build
2. Przeczyta komunikaty błędów
3. Znajdzie i naprawi każdy problem
4. Uruchomi build ponownie żeby sprawdzić

### Najczęstsze błędy i co oznaczają

| Błąd | Co oznacza | Rozwiązanie |
|------|-----------|-------------|
| \`Module not found\` | Brakuje pliku lub biblioteki | Zainstaluj (\`npm install\`) lub napraw ścieżkę |
| \`Type error\` | Niezgodność typów w TypeScript | Claude naprawi typ zmiennej |
| \`Cannot find name\` | Użyto zmiennej która nie istnieje | Literówka w nazwie lub brakujący import |
| \`Unexpected token\` | Błąd składni (brakujący nawias, przecinek) | Claude znajdzie i poprawi |
| \`Environment variable\` | Brakuje zmiennej środowiskowej | Dodaj do pliku .env.local |

### Zmienne środowiskowe (.env)

Częsty problem: kod wymaga zmiennej (np. \`NEXT_PUBLIC_SUPABASE_URL\`), a jej nie ma w pliku \`.env.local\`.

Jak naprawić:
1. Powiedz Claude: "Build się wywala na brakującej zmiennej NEXT_PUBLIC_SUPABASE_URL"
2. Claude sprawdzi czego potrzeba i powie Ci co dodać do \`.env.local\`

> Pamiętaj: Claude **nie powinien** tworzyć plików .env z prawdziwymi hasłami — te wartości musisz wpisać sam.

### Zapobieganie błędom

| Praktyka | Jak |
|----------|-----|
| Buduj często | "Uruchom build" po każdej większej zmianie |
| Dodaj do CLAUDE.md | \`Po każdej zmianie: npm run build musi przejść\` |
| Używaj TypeScript | Łapie błędy zanim uruchomisz kod |
| Sprawdzaj importy | Claude zazwyczaj robi to automatycznie |

### Pro tip: automatyczny build po zmianach

Dodaj do CLAUDE.md:
\`\`\`markdown
## Zasady
- Po każdej zmianie w kodzie: npm run build musi przejść bez błędów
\`\`\`

Dzięki temu Claude **sam uruchomi build** po każdej edycji i naprawi ewentualne błędy zanim Ci je pokaże.`,
    difficulty: "beginner",
    tags: ["problemy", "build", "błędy", "kompilacja"],
    order: 2,
    created_at: "2026-04-13",
    updated_at: "2026-04-13",
  },
];
