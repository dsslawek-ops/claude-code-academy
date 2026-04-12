import { Lesson } from "@/types/database";

export const lessonsCCAction: Lesson[] = [
  // ═══════════════════ MODUŁ 1: Architektura i narzędzia ═══════════════════
  {
    id: "ca1",
    path_id: "cc-action",
    module_name: "Architektura i narzędzia",
    module_order: 1,
    title: "Jak Claude Code widzi Twój projekt",
    slug: "jak-widzi-projekt",
    duration_minutes: 7,
    order: 1,
    content: `## Jak Claude Code widzi Twój projekt

### Katalog roboczy

Gdy uruchamiasz Claude Code, widzi wszystkie pliki w bieżącym katalogu i podkatalogach. Dokładnie to, co widzisz w panelu Explorer w VS Code.

### Co Claude "wie" na starcie

1. **CLAUDE.md** — Twoje instrukcje (jeśli istnieje)
2. **Strukturę plików** — jakie foldery i pliki masz
3. **package.json** — jakie biblioteki używasz
4. **Git status** — co jest zmienione

Claude NIE czyta automatycznie wszystkich plików. Czyta je **na żądanie** — gdy potrzebuje ich do zadania.

### Jak działa od środka

Gdy dajesz polecenie, Claude:

1. Analizuje polecenie
2. Wybiera narzędzie (Read, Edit, Bash...)
3. Wykonuje je
4. Patrzy na wynik
5. Decyduje co dalej

To się powtarza aż zadanie jest gotowe albo Claude potrzebuje Twojej decyzji.

### Kontekst narasta

Każdy plik który Claude przeczyta, każda komenda którą uruchomi — to zajmuje miejsce w kontekście. Dlatego:

- Claude jest selektywny — czyta tylko to co potrzebuje
- Duże pliki pochłaniają dużo kontekstu
- Dlatego /compact jest ważny

### Wiele katalogów

Domyślnie Claude widzi jeden katalog. Chcesz dodać drugi?

\`\`\`
/add-dir /ścieżka/do/innego/projektu
\`\`\`

Przydatne gdy frontend i backend są w osobnych folderach.`,
  },
  {
    id: "ca2",
    path_id: "cc-action",
    module_name: "Architektura i narzędzia",
    module_order: 1,
    title: "System narzędzi — jak Claude wykonuje zadania",
    slug: "system-narzedzi",
    duration_minutes: 8,
    order: 2,
    content: `## System narzędzi

Claude Code ma 12+ wbudowanych narzędzi. Każde do innego celu.

### Narzędzia plikowe

| Narzędzie | Co robi | Analogia |
|-----------|---------|---------|
| **Read** | Czyta plik | Otworzenie pliku w edytorze |
| **Edit** | Zmienia fragment pliku | Find & Replace |
| **Write** | Tworzy nowy plik | "Nowy plik" w edytorze |
| **Glob** | Szuka plików po nazwie | Wyszukiwarka plików |
| **Grep** | Szuka tekstu w plikach | Cmd+Shift+F w VS Code |

### Narzędzia wykonawcze

| Narzędzie | Co robi | Analogia |
|-----------|---------|---------|
| **Bash** | Uruchamia komendy | Terminal |

### Narzędzia internetowe

| Narzędzie | Co robi |
|-----------|---------|
| **WebSearch** | Szuka w Google |
| **WebFetch** | Pobiera stronę internetową |

### Narzędzia organizacyjne

| Narzędzie | Co robi |
|-----------|---------|
| **Agent** | Uruchamia sub-agenta |
| **Task** | Tworzy listę podzadań |
| **AskUserQuestion** | Pyta Cię o decyzję |

### Jak Claude wybiera?

Automatycznie. Na podstawie Twojego polecenia:

"Pokaż plik X" → Read
"Zmień tytuł" → Edit
"Zainstaluj Y" → Bash
"Znajdź gdzie jest Z" → Grep
"Sprawdź najnowszą wersję" → WebSearch

### Łańcuchy narzędzi

Claude często łączy narzędzia w sekwencje:

1. Grep → znajdź plik z błędem
2. Read → przeczytaj ten plik
3. Edit → napraw błąd
4. Bash → uruchom build żeby sprawdzić

Wszystko automatycznie, bez Twojej ingerencji.`,
  },
  {
    id: "ca3",
    path_id: "cc-action",
    module_name: "Architektura i narzędzia",
    module_order: 1,
    title: "Wielokrokowe zadania — jak Claude planuje",
    slug: "wielokrokowe-zadania",
    duration_minutes: 7,
    order: 3,
    content: `## Wielokrokowe zadania

### Proste vs złożone zadania

Proste: "Zmień kolor przycisku na zielony" → 1 narzędzie (Edit)
Złożone: "Dodaj system logowania" → 20+ narzędzi, wiele plików

### Jak Claude radzi sobie ze złożonością

**Krok 1: Analiza** — Claude czyta istniejące pliki żeby zrozumieć projekt
**Krok 2: Plan** — decyduje jakie pliki stworzyć/zmienić
**Krok 3: Wykonanie** — krok po kroku realizuje plan
**Krok 4: Weryfikacja** — sprawdza czy build przechodzi

### Plan Mode

Dla dużych zadań — wymuś planowanie:

\`\`\`
/plan Dodaj stronę dashboard z wykresami
\`\`\`

Claude napisze plan w markdown. Ty go przejrzysz. Korzyści:
- Widzisz co Claude zamierza zanim cokolwiek zmieni
- Możesz poprawić kierunek
- Unikasz sytuacji "Claude zrobił coś dziwnego przez 10 minut"

### Effort levels

\`\`\`
/effort high
\`\`\`

Im wyższy effort, tym więcej Claude "myśli" przed działaniem:

| Level | Do czego |
|-------|---------|
| low | Szybkie pytania |
| medium | Domyślny |
| high | Złożone zadania |
| max | Architektoniczne decyzje (tylko Opus) |

### Wskazówka

Dla zadań trwających dłużej niż 5 minut:
1. Użyj /plan
2. Przejrzyj plan
3. Dopiero potem "implementuj"

Zaoszczędzisz czas i nerwy.`,
  },

  // ═══════════════════ MODUŁ 2: Kontekst i pamięć ═══════════════════
  {
    id: "ca4",
    path_id: "cc-action",
    module_name: "Kontekst i pamięć",
    module_order: 2,
    title: "Okno kontekstu — ile Claude pamięta",
    slug: "okno-kontekstu",
    duration_minutes: 6,
    order: 1,
    content: `## Okno kontekstu

### Czym jest

Okno kontekstu to ilość informacji które Claude może trzymać "w głowie" w trakcie jednej rozmowy. Ma stały limit.

### Limity

| Model | Limit |
|-------|-------|
| Opus 4.6 | 1 000 000 tokenów |
| Sonnet | Mniejszy |
| Haiku | Najmniejszy |

1 token ≈ ¾ polskiego słowa. Milion tokenów to ~750 000 słów — dużo, ale nie nieskończenie.

### Co zajmuje kontekst

- Twoje polecenia
- Odpowiedzi Claude
- Pliki które Claude przeczytał
- Wyniki komend (npm run build, git log itp.)
- CLAUDE.md i auto-memory

### Co się dzieje gdy się zapełni

1. Claude **automatycznie kompresuje** starsze fragmenty
2. Traci szczegóły z początku rozmowy
3. Może zacząć powtarzać błędy lub pytania

### Jak zarządzać

**Sprawdź stan:**
\`\`\`
/context
\`\`\`

**Skompresuj ręcznie:**
\`\`\`
/compact
/compact zachowaj decyzje architektoniczne
\`\`\`

**Zacznij od nowa:**
\`\`\`
/clear
\`\`\`

### Zasady

- Pod 50% — pracuj normalnie
- 50-80% — rozważ /compact
- Ponad 80% — koniecznie /compact lub /clear
- Nowe zadanie = /clear`,
  },
  {
    id: "ca5",
    path_id: "cc-action",
    module_name: "Kontekst i pamięć",
    module_order: 2,
    title: "CLAUDE.md na poważnie",
    slug: "claude-md-zaawansowane",
    duration_minutes: 8,
    order: 2,
    content: `## CLAUDE.md — zaawansowana konfiguracja

### Import plików

Zamiast wpisywać wszystko do jednego pliku, możesz importować inne:

\`\`\`markdown
# Mój projekt

@docs/api-reference.md
@AGENTS.md
@.claude/rules/coding-standards.md
\`\`\`

Claude przeczyta te pliki automatycznie.

### Reguły per ścieżka

Katalog \`.claude/rules/\` — różne zasady dla różnych części projektu:

Plik \`.claude/rules/components.md\`:
\`\`\`yaml
---
globs: "src/components/**/*.tsx"
---
Komponenty React pisz jako funkcje.
Używaj TypeScript strict.
Eksportuj typy propsów.
\`\`\`

Plik \`.claude/rules/api.md\`:
\`\`\`yaml
---
globs: "src/app/api/**/*.ts"
---
Waliduj input na wejściu.
Zawsze zwracaj JSON.
Obsługuj błędy z try/catch.
\`\`\`

### Trzy poziomy — priorytet

1. **Managed** (organizacja) — najwyższy priorytet, nie do nadpisania
2. **Projekt** (\`./CLAUDE.md\`) — dla całego zespołu
3. **Lokalny** (\`./CLAUDE.local.md\`) — tylko Twoje preferencje
4. **User** (\`~/.claude/CLAUDE.md\`) — Twoje globalne ustawienia

### Dynamiczne komendy

CLAUDE.md może zawierać komendy wykonywane na starcie:

\`\`\`markdown
## Status
- Git branch: !\`git branch --show-current\`
- Node version: !\`node --version\`
\`\`\`

Claude wykona te komendy i zobaczy aktualne wyniki.

### Wskazówki

- Nie wpisuj sekretów
- Trzymaj poniżej 200 linii — za dużo = zapycha kontekst
- Aktualizuj regularnie`,
  },
  {
    id: "ca6",
    path_id: "cc-action",
    module_name: "Kontekst i pamięć",
    module_order: 2,
    title: "Auto-memory i wznawianie sesji",
    slug: "auto-memory-resume",
    duration_minutes: 6,
    order: 3,
    content: `## Auto-memory i wznawianie sesji

### Auto-memory

Claude automatycznie zapisuje ważne odkrycia:
- Komendy które działają (np. "build wymaga Node 20+")
- Twoje preferencje ("użytkownik preferuje shadcn/ui")
- Wzorce debugowania

Pliki pamięci: \`~/.claude/projects/<projekt>/memory/\`

### Zarządzanie pamięcią

\`\`\`
/memory
\`\`\`

Otwiera edytor pamięci. Możesz:
- Przejrzeć co Claude zapamiętał
- Dodać własne wpisy
- Usunąć nieaktualne

### Manualne zapamiętywanie

Powiedz Claude:
> "Zapamiętaj że deploy robimy zawsze z brancha main, nie z feature branchy"

Claude zapisze to do auto-memory.

### Zapominanie

> "Zapomnij o tym że używamy Prisma — przeszliśmy na Drizzle"

### Wznawianie sesji

\`\`\`
/resume
\`\`\`

Pokazuje listę poprzednich rozmów. Wybierz jedną — Claude wróci z pełnym kontekstem.

Przydatne gdy:
- Zamknąłeś przypadkowo VS Code
- Chcesz kontynuować wczorajszą pracę
- Przerwałeś w połowie zadania

### Eksport rozmowy

\`\`\`
/export rozmowa.txt
\`\`\`

Zapisuje rozmowę do pliku. Dobry do archiwizacji lub dzielenia się z zespołem.

### Praktyczne rady

- Używaj /resume zamiast zaczynać od nowa
- Ważne ustalenia zapisuj do CLAUDE.md (trwalsze niż auto-memory)
- Na początku sesji daj kontekst: "Kontynuuję pracę nad X, ostatnio zrobiłem Y"`,
  },

  // ═══════════════════ MODUŁ 3: Automatyzacja i integracja ═══════════════════
  {
    id: "ca7",
    path_id: "cc-action",
    module_name: "Automatyzacja i integracja",
    module_order: 3,
    title: "Skills — wielorazowe instrukcje",
    slug: "skills-instrukcje",
    duration_minutes: 8,
    order: 1,
    content: `## Skills — wielorazowe instrukcje

### Czym jest Skill?

Skill to plik markdown z instrukcjami, które Claude stosuje automatycznie do odpowiednich zadań. Pomyśl o tym jak o "szablonie zachowania".

### Skills vs CLAUDE.md

| CLAUDE.md | Skill |
|-----------|-------|
| Ładowany zawsze | Ładowany gdy pasuje |
| Ogólne zasady projektu | Konkretna umiejętność |
| Jeden plik | Wiele plików — każdy do innego zadania |

### Struktura Skill

Plik \`.claude/skills/deploy/SKILL.md\`:
\`\`\`yaml
---
name: deploy
description: Deploy aplikacji na Vercel
allowed-tools: Bash Read
---

Gdy użytkownik chce zdeplojować:
1. Sprawdź czy build przechodzi (npm run build)
2. Sprawdź czy są uncommitted changes
3. Uruchom vercel --prod
4. Podaj URL po deployu
\`\`\`

### Jak Claude wie kiedy użyć Skill?

Na podstawie \`description\`. Gdy Twoje polecenie pasuje do opisu — Skill się aktywuje.

### Tworzenie Skilla

Powiedz Claude:
> "Stwórz Skill do code review — sprawdzanie jakości kodu wg naszych zasad"

Albo ręcznie stwórz plik w \`.claude/skills/<nazwa>/SKILL.md\`.

### Ograniczanie narzędzi

\`allowed-tools: Read Grep\` — Skill może tylko czytać, nie zmieniać plików. Bezpieczne dla audytów.

### Udostępnianie

- W repo (Git) — cały zespół ma ten sam Skill
- Przez plugin — dystrybucja do innych projektów
- Managed settings — deploy w całej organizacji`,
  },
  {
    id: "ca8",
    path_id: "cc-action",
    module_name: "Automatyzacja i integracja",
    module_order: 3,
    title: "Integracja z GitHub",
    slug: "integracja-github",
    duration_minutes: 8,
    order: 2,
    content: `## Integracja z GitHub

### Co Claude umie z Gitem

- Tworzyć commity z sensownymi opisami
- Tworzyć branch'e
- Tworzyć Pull Requesty
- Robić code review
- Automatycznie naprawiać PR-y gdy CI/CD failuje

### Tworzenie Pull Request

> "Utwórz PR z opisem zmian"

Claude:
1. Sprawdzi co się zmieniło vs main
2. Napisze tytuł i opis PR-a
3. Użyje \`gh pr create\`
4. Poda Ci link

### Auto-fix PR

Gdy CI/CD na GitHub failuje albo reviewer zostawia komentarze, Claude może automatycznie:
- Przeczytać błędy CI
- Naprawić kod
- Pushować poprawki

Komenda: \`/autofix-pr\`

### Code Review przez Claude

> "Zrób code review tego PR-a"

Claude przejrzy zmiany i skomentuje:
- Potencjalne bugi
- Problemy z wydajnością
- Niespójności ze stylem projektu

### Workflow z branchami

1. "Utwórz branch feature/nowy-cennik"
2. Pracujesz z Claude na tym branchu
3. "Utwórz PR do main"
4. Review (Ty lub Claude)
5. Merge

### Integracja z MCP GitHub

Podłączając GitHub MCP server, Claude może dodatkowo:
- Tworzyć i zarządzać issues
- Przeglądać PR-y z innych repozytoriów
- Reagować na komentarze`,
  },
  {
    id: "ca9",
    path_id: "cc-action",
    module_name: "Automatyzacja i integracja",
    module_order: 3,
    title: "/batch i praca równoległa",
    slug: "batch-rownolegle",
    duration_minutes: 6,
    order: 3,
    content: `## /batch i praca równoległa

### /batch — masowe zmiany

Uruchamia 5-30 agentów równolegle, każdy modyfikuje inny plik.

\`\`\`
/batch Dodaj obsługę błędów do wszystkich API routes
\`\`\`

\`\`\`
/batch Zmień wszystkie console.log na logger.info
\`\`\`

### Jak działa

1. Claude analizuje zakres zmian
2. Dzieli pracę na podzadania
3. Uruchamia agentów (każdy w izolacji)
4. Zbiera wyniki
5. Pokazuje podsumowanie

### Kiedy używać

- Refactoring nazw w całym projekcie
- Aktualizacja importów po zmianie struktury
- Dodanie tego samego wzorca do wielu plików
- Migracje (np. zmiana API)

### Na co uważać

- **Commit PRZED /batch** — żebyś mógł cofnąć
- **Build PO /batch** — sprawdź czy się kompiluje
- Nie do zmian wymagających kontekstu między plikami

### Worktrees — izolowane sesje

\`\`\`
claude --worktree feature-auth
\`\`\`

Tworzy osobną kopię projektu na osobnym branchu. Claude pracuje tam, nie dotykając Twojego głównego kodu.

### /simplify — automatyczny code review

\`\`\`
/simplify
\`\`\`

Claude przegląda zmienione pliki, znajduje problemy i sam je naprawia. Jak code review + fix w jednym.`,
  },
];
