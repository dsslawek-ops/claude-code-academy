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
];
