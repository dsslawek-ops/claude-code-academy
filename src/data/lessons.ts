import { Lesson } from "@/types/database";

export const lessons: Lesson[] = [
  // === MODUŁ 1: FUNDAMENTY ===
  {
    id: "l1",
    path_id: "entrepreneur",
    module_name: "Fundamenty",
    module_order: 1,
    title: "Czym jest Claude Code i jak myśleć o AI",
    slug: "czym-jest-claude-code",
    duration_minutes: 8,
    order: 1,
    content: `## Czym jest Claude Code?

Wyobraź sobie, że masz przy sobie **doświadczonego programistę**, który:
- Nigdy się nie denerwuje
- Zna praktycznie każdy język programowania
- Ma dostęp do Twojego komputera i Twoich plików
- Rozumie co mówisz po polsku

To jest Claude Code. Narzędzie stworzone przez firmę Anthropic, które pozwala Ci **rozmawiać z AI** i prosić go o zmiany w kodzie, tworzenie nowych plików, uruchamianie komend — wszystko przez naturalny język.

### Jak to się różni od zwykłego ChatGPT?

| Zwykły chatbot | Claude Code |
|----------------|-------------|
| Odpowiada tekstem | **Bezpośrednio edytuje pliki** na Twoim komputerze |
| Nie widzi Twojego projektu | **Czyta wszystkie pliki** w Twoim projekcie |
| Musisz kopiować/wklejać kod | **Sam zmienia kod** i uruchamia komendy |
| Nie pamięta Twojego projektu | **Zna zasady** dzięki CLAUDE.md |

### Jak myśleć o AI w programowaniu?

Najlepsza analogia: Claude Code to jak **pilot automatyczny** w samolocie.
- Pilot (Ty) podejmuje decyzje strategiczne — co budujemy, dokąd lecimy
- Autopilot (Claude) wykonuje techniczne detale — pisze kod, konfiguruje
- Pilot musi wiedzieć **co** chce osiągnąć, ale nie musi znać każdego przełącznika

### Co Claude Code potrafi?

1. **Czytać** — analizuje pliki, rozumie strukturę projektu
2. **Pisać** — tworzy nowe pliki, komponenty, strony
3. **Edytować** — zmienia istniejący kod precyzyjnie
4. **Uruchamiać** — wykonuje komendy (build, deploy, instalacja)
5. **Szukać** — przeszukuje pliki i internet
6. **Planować** — rozkłada złożone zadania na kroki

### Na co uważać?

- Claude **może się mylić** — zawsze sprawdzaj efekty (np. czy strona wygląda OK)
- Claude **nie zna Twojego biznesu** — musisz mu powiedzieć co chcesz osiągnąć
- Claude **jest narzędziem** — odpowiedzialność za projekt jest Twoja`,
  },
  {
    id: "l2",
    path_id: "entrepreneur",
    module_name: "Fundamenty",
    module_order: 1,
    title: "Interfejs — co widzisz i co możesz kliknąć",
    slug: "interfejs",
    duration_minutes: 5,
    order: 2,
    content: `## Interfejs Claude Code w VS Code

Gdy otwierasz VS Code z zainstalowanym rozszerzeniem Claude Code, widzisz kilka ważnych elementów:

### Gdzie jest Claude?

Claude ma **cztery miejsca** z których go otworzysz:

1. **Ikona iskierki** (✱) — w prawym górnym rogu edytora. Kliknij i otworzy się panel.
2. **Pasek boczny** — ikona Claude na lewym pasku z ikonami
3. **Paleta poleceń** — naciśnij \`Cmd+Shift+P\` i wpisz "Claude Code"
4. **Pasek statusu** — na samym dole VS Code, kliknij "✱ Claude Code"

### Anatomia panelu Claude

Gdy otworzysz panel Claude, zobaczysz:

- **Pole tekstowe** na dole — tu wpisujesz polecenia
- **Historia rozmowy** powyżej — Twoje polecenia i odpowiedzi Claude
- **Pasek statusu** — model (Opus/Sonnet), tryb uprawnień, zużycie kontekstu
- **Przycisk wysyłania** — albo po prostu naciśnij Enter

### Dwa panele obok siebie

Najwygodniejszy układ pracy:
- **Lewa strona**: Twój kod (pliki, edytor)
- **Prawa strona** (lub dolny panel): Claude Code

Przełączaj się szybko: \`Cmd+Esc\` — skacze między kodem a Claude.

### Podgląd zmian (Diff View)

Gdy Claude zmieni plik, VS Code pokaże Ci **różnice**:
- **Zielone linie** = dodane
- **Czerwone linie** = usunięte

Możesz:
- Zaakceptować zmianę (kliknij ✓)
- Odrzucić zmianę (kliknij ✗)
- Zaakceptować/odrzucić plik po pliku

### Wiele rozmów

Możesz otworzyć kilka rozmów jednocześnie w osobnych zakładkach: \`Cmd+Shift+Esc\` otwiera nową rozmowę.`,
  },
  {
    id: "l3",
    path_id: "entrepreneur",
    module_name: "Fundamenty",
    module_order: 1,
    title: "Pierwsza rozmowa — jak pisać polecenia",
    slug: "pierwsza-rozmowa",
    duration_minutes: 7,
    order: 3,
    content: `## Jak pisać polecenia do Claude

Najważniejsza zasada: **pisz jak do człowieka**. Nie musisz znać żadnego specjalnego języka.

### Dobre vs złe polecenia

| Złe (zbyt ogólne) | Dobre (konkretne) |
|-------------------|-------------------|
| "Napraw stronę" | "Na stronie głównej przycisk 'Zapisz' nie działa — po kliknięciu nic się nie dzieje" |
| "Dodaj formularz" | "Dodaj formularz kontaktowy z polami: imię, email, wiadomość. Pod formularzem przycisk 'Wyślij'" |
| "Zrób ładniej" | "Zmień kolor tła nagłówka na ciemnogranatowy i zwiększ czcionkę tytułu" |

### Formuła dobrego polecenia

1. **CO** chcesz zmienić — "Na stronie O nas..."
2. **JAK** ma wyglądać efekt — "...dodaj sekcję z zespołem"
3. **SZCZEGÓŁY** jeśli ważne — "...z imionami, zdjęciami i stanowiskami"

### Przykłady prawdziwych poleceń

**Prosta zmiana:**
> Zmień tytuł strony głównej z "Welcome" na "Witaj w naszym sklepie"

**Nowa funkcja:**
> Dodaj stronę "Cennik" z tabelą trzech planów: Basic (49 zł/mies), Pro (99 zł/mies), Enterprise (do uzgodnienia). Każdy plan z listą funkcji.

**Naprawa buga:**
> Gdy klikam "Dodaj do koszyka" na stronie produktu, pojawia się błąd w konsoli. Napraw to.

### Wielolinijkowe polecenia

Żeby napisać polecenie w kilku liniach bez wysyłania:
- Naciśnij \`Shift+Enter\` — nowa linia
- \`Enter\` (bez Shift) — wysyła

### Wskazówki

- **Pisz po polsku** — Claude świetnie rozumie
- **Bądź konkretny** — im więcej szczegółów, tym lepszy efekt
- **Mów co chcesz osiągnąć**, nie jak to zrobić technicznie
- **Jeśli efekt nie pasuje** — po prostu napisz "Nie, chodziło mi o..." i doprecyzuj`,
  },
  {
    id: "l4",
    path_id: "entrepreneur",
    module_name: "Fundamenty",
    module_order: 1,
    title: "Skróty klawiszowe — 10 które zmienią Twoje życie",
    slug: "skroty-klawiszowe-top10",
    duration_minutes: 5,
    order: 4,
    content: `## 10 skrótów które musisz znać

Nie musisz uczyć się 100 skrótów. Te 10 wystarczy na 90% codziennej pracy:

### Top 10

| # | Skrót | Co robi | Kiedy używasz |
|---|-------|---------|---------------|
| 1 | \`Cmd+Esc\` | Przełącz między kodem a Claude | Cały czas — najważniejszy! |
| 2 | \`Shift+Enter\` | Nowa linia (bez wysyłania) | Pisanie długich poleceń |
| 3 | \`Enter\` | Wyślij polecenie | Po każdym poleceniu |
| 4 | \`Option+K\` | Wstaw odniesienie do pliku | Gdy mówisz "w tym pliku..." |
| 5 | \`Cmd+Shift+P\` | Paleta poleceń | Szukanie komend |
| 6 | \`Cmd+Shift+Esc\` | Nowa rozmowa w zakładce | Równoległa rozmowa |
| 7 | \`Cmd+N\` | Nowa rozmowa | Start od nowa |
| 8 | \`Cmd+,\` | Ustawienia VS Code | Konfiguracja |
| 9 | \`Cmd+\`\` | Otwórz terminal | Podgląd komend |
| 10 | \`Ctrl+C\` | Przerwij Claude | Gdy Claude robi coś złego |

### Jak zapamiętać?

Zacznij od **trzech najważniejszych**:
1. \`Cmd+Esc\` — przeskakuj między kodem a Claude
2. \`Shift+Enter\` — pisz wielolinijkowe polecenia
3. \`Option+K\` — odwołuj się do plików

Resztę dodawaj stopniowo. Po tygodniu będziesz ich używać odruchowo.

### Podpowiedź

Pełną listę skrótów znajdziesz w **Ściągawce** na tej platformie — z filtrami i wyszukiwarką.`,
  },
  {
    id: "l5",
    path_id: "entrepreneur",
    module_name: "Fundamenty",
    module_order: 1,
    title: "CLAUDE.md — instrukcja dla Claude",
    slug: "claude-md-intro",
    duration_minutes: 6,
    order: 5,
    content: `## CLAUDE.md — instrukcja obsługi Twojego projektu

### Po co jest CLAUDE.md?

Wyobraź sobie, że zatrudniasz nowego pracownika. Pierwszy dzień w pracy — co mu dajesz? **Instrukcję**: jak działamy, jakie mamy zasady, czego nie wolno robić.

CLAUDE.md to dokładnie to samo, ale dla Claude Code. Plik ten jest **ładowany automatycznie** na początku każdej rozmowy.

### Co wpisać do CLAUDE.md?

Minimum:
- **Jaki to projekt** — "Sklep internetowy z pelletem"
- **Jaki stack** — "Next.js, Supabase, Tailwind"
- **Jakie zasady** — "Pisz po polsku", "Po zmianach uruchom build"
- **Komendy** — "Build: npm run build", "Dev: npm run dev"

### Jak stworzyć CLAUDE.md?

Najprostszy sposób — powiedz Claude:

> Stwórz plik CLAUDE.md dla tego projektu z opisem stacku i zasadami

Claude przeanalizuje Twój projekt i sam stworzy sensowny CLAUDE.md!

### Trzy poziomy

| Plik | Gdzie | Kto widzi |
|------|-------|-----------|
| \`~/.claude/CLAUDE.md\` | W katalogu domowym | Ty — we wszystkich projektach |
| \`./CLAUDE.md\` | W katalogu projektu | Cały zespół (commitowany do Git) |
| \`./CLAUDE.local.md\` | W katalogu projektu | Tylko Ty (nie idzie do Git) |

### Praktyczny przykład

\`\`\`markdown
# Mój Sklep Online

## Stack
- Next.js 16, TypeScript, Tailwind CSS
- Supabase (baza danych, auth)
- Vercel (deploy)

## Zasady
- Język interfejsu: polski
- Po każdej zmianie: npm run build musi przejść
- Nie zmieniaj plików w katalogu /public/images/
- Commit messages po angielsku

## Komendy
- Dev server: npm run dev
- Build: npm run build
\`\`\`

### Rada

Aktualizuj CLAUDE.md regularnie. Im lepiej opisany projekt, tym mniej musisz powtarzać Claude te same rzeczy.`,
  },

  // === MODUŁ 2: CODZIENNA PRACA ===
  {
    id: "l6",
    path_id: "entrepreneur",
    module_name: "Codzienna praca",
    module_order: 2,
    title: "Git: commit, push, pull — o co chodzi",
    slug: "git-podstawy",
    duration_minutes: 8,
    order: 1,
    content: `## Git — system kontroli wersji

### Co to Git? (bez żargonu)

Git to jak **"Historia wersji" w Google Docs**, ale dla całego projektu.

Wyobraź sobie:
- Piszesz dokument w Google Docs
- Robisz zmiany
- Możesz wrócić do dowolnej poprzedniej wersji
- Widzisz kto co zmienił i kiedy

Git robi dokładnie to samo, ale dla **wszystkich plików** w Twoim projekcie naraz.

### Kluczowe pojęcia

| Pojęcie | Co to znaczy | Analogia |
|---------|-------------|----------|
| **Commit** | Zapisanie zestawu zmian | "Zapisz punkt kontrolny" |
| **Push** | Wysłanie zmian na GitHub | "Prześlij do chmury" |
| **Pull** | Pobranie zmian z GitHub | "Pobierz najnowszą wersję" |
| **Branch** | Równoległa wersja projektu | "Kopia robocza" |
| **Merge** | Połączenie dwóch wersji | "Scal zmiany" |
| **Repository (repo)** | Projekt + cała historia | "Folder projektu z historią" |

### Typowy workflow z Claude

1. Pracujesz z Claude (edytujesz pliki)
2. Gdy jesteś zadowolony, mówisz: **"Zrób commit i push"**
3. Claude robi:
   - \`git add\` — zbiera zmienione pliki
   - \`git commit -m "opis zmian"\` — zapisuje punkt kontrolny
   - \`git push\` — wysyła na GitHub
4. Vercel widzi nowy push → automatycznie deployuje

### Nie musisz znać komend!

Po prostu mów Claude:
- "Zrób commit z tymi zmianami"
- "Pokaż co się zmieniło"
- "Cofnij ostatni commit"
- "Utwórz pull request"

Claude zna Git doskonale i wykona wszystko za Ciebie.

### Na co uważać

- **Nigdy nie commituj sekretów** (hasła, klucze API) — Claude o tym wie i ostrzega
- **Rób commity często** — łatwiej cofnąć małą zmianę niż dużą
- **Opisuj commity sensownie** — Claude to robi automatycznie`,
  },
  {
    id: "l7",
    path_id: "entrepreneur",
    module_name: "Codzienna praca",
    module_order: 2,
    title: "Jak poprosić o poprawkę buga",
    slug: "poprawka-buga",
    duration_minutes: 5,
    order: 2,
    content: `## Raportowanie bugów do Claude

### Formuła opisu buga

**Co robię → Co się dzieje → Co powinno się dziać**

Przykład:
> Klikam przycisk "Dodaj do koszyka" na stronie produktu → Nic się nie dzieje, przycisk jest nieaktywny → Powinien dodać produkt do koszyka i pokazać potwierdzenie

### Dobre opisy bugów

**Z kontekstem:**
> Na stronie /cennik, tabela z cenami nie wyświetla się na telefonie — jest ucięta z prawej strony. Na komputerze wygląda OK.

**Z błędem z konsoli:**
> Strona /kontakt wyrzuca błąd. W konsoli przeglądarki widzę: "TypeError: Cannot read properties of undefined"

**Z porównaniem:**
> Wczoraj strona główna ładowała się w 2 sekundy, dzisiaj trwa ponad 10 sekund. Nic nie zmieniałem.

### Złe opisy bugów

- "Nie działa" — co nie działa?
- "Strona jest zepsuta" — jak jest zepsuta?
- "Napraw to" — naprawić co?

### Co Claude zrobi?

1. **Przeczyta** pliki których dotyczy bug
2. **Zidentyfikuje** przyczynę
3. **Zaproponuje** poprawkę
4. **Wdroży** zmianę (jeśli zatwierdzisz)
5. **Przetestuje** — uruchomi build

### Wskazówka

Jeśli masz screenshot — zrób go i wklej. Claude rozumie obrazy i widzi co jest nie tak na ekranie.`,
  },
  {
    id: "l8",
    path_id: "entrepreneur",
    module_name: "Codzienna praca",
    module_order: 2,
    title: "Jak dodać nową funkcję do projektu",
    slug: "nowa-funkcja",
    duration_minutes: 7,
    order: 3,
    content: `## Dodawanie nowych funkcji

### Workflow krok po kroku

**Krok 1: Opisz co chcesz**
> Dodaj stronę "FAQ" z listą 10 najczęściej zadawanych pytań. Pytania rozwijane po kliknięciu (accordion). Styl taki sam jak reszta strony.

**Krok 2: Claude planuje**
Claude powie Ci co zamierza zrobić:
- "Stworzę plik src/app/faq/page.tsx"
- "Dodam link do nawigacji"
- "Użyję komponentu Accordion z shadcn/ui"

**Krok 3: Claude implementuje**
Zobaczyciwy diff (podgląd zmian). Sprawdź czy to co chciałeś.

**Krok 4: Testuj**
Powiedz: "Uruchom dev server i pokaż jak to wygląda"
Albo sam otwórz stronę w przeglądarce.

**Krok 5: Poprawki**
> Wygląda dobrze, ale zmień kolor tła na jaśniejszy i dodaj ikonę przy każdym pytaniu

### Tryb planowania

Dla większych zmian użyj trybu planowania:
> /plan Dodaj system rezerwacji wizyt z kalendarzem

Claude napisze **plan** bez zmieniania kodu. Możesz go przejrzeć, skomentować, i dopiero potem powiedzieć "OK, implementuj".

### Praktyczne wskazówki

- **Jedna funkcja na raz** — nie proś o 5 rzeczy jednocześnie
- **Sprawdzaj po każdej zmianie** — łatwiej poprawić od razu
- **Testuj na telefonie** — powiedz Claude "zrób to responsive"
- **Build musi przechodzić** — po zmianach zawsze \`npm run build\``,
  },
  {
    id: "l9",
    path_id: "entrepreneur",
    module_name: "Codzienna praca",
    module_order: 2,
    title: "Deploy na Vercel — od kodu do strony",
    slug: "deploy-vercel",
    duration_minutes: 6,
    order: 4,
    content: `## Deploy na Vercel

### Co to deploy?

Deploy to proces **publikowania** Twojej aplikacji w internecie. Przed deployem strona istnieje tylko na Twoim komputerze. Po deployu — każdy może ją odwiedzić.

### Jak działa Vercel?

Vercel to platforma, która:
1. **Obserwuje** Twoje repozytorium na GitHub
2. **Automatycznie buduje** aplikację po każdym pushu
3. **Hostuje** stronę pod adresem .vercel.app (lub Twoją domeną)

### Workflow deploy

Najprostszy sposób:

> Zrób commit i push na GitHub

I to wszystko! Vercel automatycznie:
- Pobierze nowy kod
- Uruchomi \`npm run build\`
- Opublikuje nową wersję
- Stara wersja zniknie, nowa się pojawi

### Pierwszy deploy

Jeśli jeszcze nie masz projektu na Vercel:

> Zdeplojuj ten projekt na Vercel

Claude uruchomi \`npx vercel\` i przeprowadzi Cię przez konfigurację.

### Zmienne środowiskowe

Sekrety (klucze API, hasła) dodaje się w panelu Vercel:
1. Otwórz vercel.com → Twój projekt → Settings → Environment Variables
2. Dodaj zmienną (np. ANTHROPIC_API_KEY)
3. Redeploy

Albo powiedz Claude: "Dodaj zmienną ANTHROPIC_API_KEY na Vercel"

### Typowe problemy

| Problem | Rozwiązanie |
|---------|------------|
| Build failed | Powiedz Claude: "Build na Vercel się nie udał — napraw" |
| Strona 404 | Sprawdź czy plik page.tsx istnieje w odpowiednim katalogu |
| Brak zmiennych env | Dodaj je w panelu Vercel (Settings → Environment Variables) |
| Stara wersja | Poczekaj 1-2 minuty, odśwież stronę (Cmd+Shift+R) |`,
  },
  {
    id: "l10",
    path_id: "entrepreneur",
    module_name: "Codzienna praca",
    module_order: 2,
    title: "Slash commands — komendy które musisz znać",
    slug: "slash-commands-essentials",
    duration_minutes: 5,
    order: 5,
    content: `## Slash Commands — Twój zestaw narzędzi

### Czym są slash commands?

To komendy zaczynające się od \`/\` które wpisujesz w pole czatu. Działają jak **skróty do częstych akcji**.

### 5 komend na każdy dzień

| Komenda | Co robi | Kiedy |
|---------|---------|-------|
| \`/help\` | Lista wszystkich komend | Gdy nie wiesz co zrobić |
| \`/clear\` | Czyści rozmowę | Nowy start, nowe zadanie |
| \`/compact\` | Kompresuje kontekst | Długa rozmowa, Claude gubi wątek |
| \`/diff\` | Podgląd zmian w plikach | Przed commitem — co się zmieniło? |
| \`/cost\` | Zużycie tokenów | Kontrola kosztów |

### 5 komend dla zaawansowanych

| Komenda | Co robi |
|---------|---------|
| \`/model\` | Zmień model AI (Opus = najlepszy, Sonnet = szybszy, Haiku = najtańszy) |
| \`/fast\` | Tryb szybki (2.5x szybciej ale drożej) |
| \`/plan\` | Tryb planowania — Claude proponuje, nie zmienia |
| \`/memory\` | Zarządzaj pamięcią Claude |
| \`/permissions\` | Kontroluj co Claude może robić |

### Jak zapamiętać?

Zacznij od **trzech**: \`/help\`, \`/clear\`, \`/compact\`. Resztę odkryjesz z czasem.

Pełna lista z opisami jest w **Ściągawce** na tej platformie.`,
  },

  // === MODUŁ 3: ZAAWANSOWANE TECHNIKI ===
  {
    id: "l11",
    path_id: "entrepreneur",
    module_name: "Zaawansowane techniki",
    module_order: 3,
    title: "Uprawnienia — co Claude może, a czego nie",
    slug: "uprawnienia",
    duration_minutes: 6,
    order: 1,
    content: `## Uprawnienia w Claude Code

### Dlaczego istnieją uprawnienia?

Claude ma dostęp do Twojego komputera. Może czytać pliki, zmieniać kod, uruchamiać komendy. Uprawnienia kontrolują **co robi bez pytania Cię o zgodę**.

### Tryby uprawnień

| Tryb | Opis | Dla kogo |
|------|------|----------|
| **default** | Pyta przy każdym nowym narzędziu | Początkujący — bezpieczny start |
| **acceptEdits** | Auto-akceptuje edycje plików | Codzienne użycie (polecany!) |
| **plan** | Claude analizuje ale NIE zmienia | Gdy chcesz tylko plan |
| **auto** | Auto-akceptuje prawie wszystko | Zaawansowani, zaufane projekty |

### Jak zmienić?

W VS Code: kliknij tryb na pasku statusu (na dole okna).

### Reguły allow/deny

Możesz precyzyjnie określić co Claude może:

Wpisz \`/permissions\` i dodaj:
- **Allow**: \`Bash(npm run build)\` — zawsze pozwalaj na build
- **Deny**: \`Bash(rm -rf *)\` — nigdy nie pozwalaj usuwać wszystkiego

### Praktyczna rada

1. Zacznij od **default** (bezpieczny)
2. Gdy Claude pyta o to samo 10. raz → dodaj do allow
3. Z czasem przejdź na **acceptEdits** (wygodny)
4. Tryb **auto** — tylko gdy wiesz co robisz`,
  },
  {
    id: "l12",
    path_id: "entrepreneur",
    module_name: "Zaawansowane techniki",
    module_order: 3,
    title: "MCP Servers — podłączanie usług",
    slug: "mcp-serwery",
    duration_minutes: 7,
    order: 2,
    content: `## MCP — podłącz zewnętrzne usługi do Claude

### Co to MCP?

MCP (Model Context Protocol) to sposób na podłączenie **zewnętrznych usług** do Claude Code. Dzięki temu Claude może np.:

- Wykonywać zapytania do bazy danych Supabase
- Tworzyć issues na GitHub
- Wysyłać wiadomości na Slack
- Pobierać dane z Google Analytics

### Analogia

Pomyśl o MCP jak o **adapterach/wtyczkach**. Claude sam z siebie umie czytać pliki i uruchamiać komendy. MCP dodaje mu **nowe umiejętności** — jak wtyczki w przeglądarce.

### Popularne serwery MCP

| Serwer | Co daje Claude |
|--------|---------------|
| **Supabase** | Zapytania do bazy, zarządzanie tabelami |
| **GitHub** | Tworzenie PR, zarządzanie issues |
| **Slack** | Wysyłanie wiadomości |
| **Figma** | Dostęp do designów |
| **Stripe** | Zarządzanie płatnościami |
| **Notion** | Dokumenty i bazy danych |

### Jak podłączyć?

Najprościej — powiedz Claude:
> Podłącz Supabase MCP

Albo użyj komendy:
> /mcp

### Autoryzacja (OAuth)

Większość serwerów MCP wymaga logowania. Przy pierwszym użyciu:
1. Claude otworzy link w przeglądarce
2. Zalogujesz się do usługi
3. Zatwierdzisz dostęp
4. Gotowe — Claude pamięta sesję

### Czy to bezpieczne?

Tak — Claude ma dostęp tylko do tego co zatwierdzisz. Każdy serwer MCP ma określone uprawnienia (np. "tylko odczyt" albo "odczyt i zapis").`,
  },
  {
    id: "l13",
    path_id: "entrepreneur",
    module_name: "Zaawansowane techniki",
    module_order: 3,
    title: "Hooks — automatyczne akcje",
    slug: "hooks-intro",
    duration_minutes: 8,
    order: 3,
    content: `## Hooks — automatyzacja w Claude Code

### Czym są hooks?

Hooks to **automatyczne reguły**: "Gdy X się wydarzy, zrób Y".

### Przykłady z życia

- **Przed usunięciem pliku** → wyświetl ostrzeżenie
- **Gdy Claude pisze do .env** → zablokuj (bezpieczeństwo!)
- **Po każdej edycji** → uruchom linter (sprawdź jakość kodu)
- **Na starcie sesji** → wyświetl przypomnienia o projekcie

### Typy hooks

| Typ | Opis |
|-----|------|
| **command** | Uruchamia skrypt (np. sprawdź plik) |
| **prompt** | Pyta Claude tak/nie |

### Kiedy się uruchamiają?

- \`PreToolUse\` — **przed** użyciem narzędzia
- \`PostToolUse\` — **po** użyciu narzędzia
- \`SessionStart\` — na początku rozmowy

### Jak skonfigurować?

Wpisz \`/hooks\` w Claude Code. Albo edytuj plik \`settings.json\`.

### Praktyczny hook: blokada .env

Ten hook **blokuje** edycję plików .env (gdzie trzymasz sekrety):

Claude sam może Ci go stworzyć — powiedz:
> Stwórz hook który blokuje edycję plików .env

### Kody wyjścia

- \`0\` — OK, kontynuuj
- \`2\` — ZABLOKUJ akcję

### Dla kogo?

Hooks to narzędzie **zaawansowane**. Nie musisz ich używać na start. Ale gdy poczujesz, że powtarzasz te same instrukcje — hook to zautomatyzuje.`,
  },
  {
    id: "l14",
    path_id: "entrepreneur",
    module_name: "Zaawansowane techniki",
    module_order: 3,
    title: "Agenty i subagenty — zlecanie zadań",
    slug: "agenty-subagenty",
    duration_minutes: 7,
    order: 4,
    content: `## Agenty — Claude deleguje pracę

### Czym jest agent?

Agent to **mini-Claude** uruchomiony do konkretnego zadania. Główny Claude może "zlecić" podrzędne zadanie agentowi, który pracuje niezależnie.

### Analogia

Wyobraź sobie menedżera (Claude) który ma zespół:
- **Explore** — analityk, czyta kod i raportuje co znalazł
- **Plan** — architekt, planuje jak coś zbudować
- **General-purpose** — junior dev, wykonuje konkretne zadania

### Kiedy Claude używa agentów?

Automatycznie! Gdy powiesz:
> "Zbadaj jak działa autentykacja w tym projekcie"

Claude może uruchomić agenta **Explore**, który przeczyta 20 plików i wróci z raportem — bez zapychania głównej rozmowy.

### Równoległa praca

Agenty mogą pracować **równolegle**. Np.:
> "Sprawdź czy testy przechodzą i jednocześnie przejrzyj jakość kodu"

Claude uruchomi dwóch agentów — jeden testuje, drugi przegląda.

### Worktree — izolacja

Dla większych zmian Claude może pracować w **osobnej kopii** projektu (worktree). Jeśli coś pójdzie nie tak — oryginał jest bezpieczny.

### Batch — zmiany na masową skalę

Komenda \`/batch\` uruchamia 5-30 agentów równolegle:
> /batch Zmień wszystkie console.log na logger.info w całym projekcie

### Nie musisz tego kontrolować

Agenty to wewnętrzny mechanizm Claude. Nie musisz ich ręcznie uruchamiać — Claude sam decyduje kiedy delegować.`,
  },

  // === MODUŁ 4: PRODUKTYWNOŚĆ PRO ===
  {
    id: "l15",
    path_id: "entrepreneur",
    module_name: "Produktywność Pro",
    module_order: 4,
    title: "Pamięć i kontekst — jak Claude pamięta",
    slug: "pamiec-kontekst",
    duration_minutes: 6,
    order: 1,
    content: `## Jak Claude pamięta

### Problem: Claude zapomina

Każda nowa rozmowa zaczyna się od zera. Claude nie pamięta co robiliście wczoraj. Ale istnieją **trzy mechanizmy pamięci**:

### 1. CLAUDE.md — pamięć stała

Plik CLAUDE.md jest ładowany **zawsze**, na początku każdej rozmowy. To najważniejszy mechanizm — tu wpisujesz:
- Zasady projektu
- Stack technologiczny
- Komendy do uruchomienia

### 2. Auto-memory — pamięć automatyczna

Claude sam zapisuje ważne odkrycia:
- "Build wymaga Node 20+"
- "Użytkownik preferuje shadcn/ui"
- "Testy uruchamia się przez npm test"

Zarządzaj: \`/memory\`

### 3. Kontekst rozmowy — pamięć tymczasowa

W trakcie jednej rozmowy Claude pamięta wszystko. Ale jest limit — **okno kontekstu** (do 1 miliona tokenów w Opus 4.6).

Gdy kontekst się zapełnia:
- Claude automatycznie kompresuje starsze wiadomości
- Ręcznie: \`/compact\` — skompresuj rozmowę
- Sprawdź stan: \`/context\`

### 4. Wznawianie rozmów

Nie musisz zaczynać od nowa! \`/resume\` — wraca do poprzedniej rozmowy.

### Praktyczne rady

1. **Dobry CLAUDE.md = mniej powtarzania** — zainwestuj 10 minut w napisanie
2. **Używaj /compact** gdy Claude gubi wątek
3. **Powiedz "Zapamiętaj że..."** — Claude zapisze do auto-memory
4. **Na start długiej sesji** opisz kontekst: "Pracuję nad stroną cennika, chcę dodać..."`,
  },
  {
    id: "l16",
    path_id: "entrepreneur",
    module_name: "Produktywność Pro",
    module_order: 4,
    title: "Tryby modeli — Opus, Sonnet, Haiku, Fast",
    slug: "tryby-modeli",
    duration_minutes: 5,
    order: 2,
    content: `## Który model wybrać?

### Trzy modele Claude

| Model | Inteligencja | Szybkość | Koszt | Kiedy używać |
|-------|-------------|----------|-------|--------------|
| **Opus 4.6** | Najwyższa | Wolniejszy | Najdroższy | Złożone zadania, architektura, debugging |
| **Sonnet** | Dobra | Szybki | Średni | Codzienne zadania, edycje, proste zmiany |
| **Haiku** | Podstawowa | Najszybszy | Najtańszy | Szybkie pytania, proste operacje |

### Fast Mode

\`/fast\` — przyspiesza Opus 4.6 o **2.5x** (ale kosztuje więcej).

Używaj gdy:
- Potrzebujesz szybkiej odpowiedzi od Opusa
- Masz duże limity na planie Max

### Effort Levels

\`/effort high\` — Claude myśli dłużej = lepsze odpowiedzi

| Poziom | Opis |
|--------|------|
| \`low\` | Szybka odpowiedź, minimum myślenia |
| \`medium\` | Domyślny, wyważony |
| \`high\` | Więcej myślenia, lepsze wyniki |
| \`max\` | Maksimum (tylko Opus) |

### Jak zmienić model?

- \`/model\` — interaktywny wybór
- \`/model claude-opus-4-6\` — bezpośrednio
- \`/fast on\` — włącz tryb szybki

### Moja rekomendacja

- **Na co dzień**: Sonnet (szybki, wystarczający)
- **Na trudne zadania**: Opus 4.6 (najinteligentniejszy)
- **Na szybkie pytania**: Haiku (tani i błyskawiczny)`,
  },
  {
    id: "l17",
    path_id: "entrepreneur",
    module_name: "Produktywność Pro",
    module_order: 4,
    title: "/batch — zmiany na dużą skalę",
    slug: "batch-zmiany",
    duration_minutes: 7,
    order: 3,
    content: `## /batch — równoległe zmiany w wielu plikach

### Czym jest /batch?

Komenda \`/batch\` uruchamia **5 do 30 agentów równolegle**, każdy modyfikujący inny plik. To jak wysłanie 30 programistów do pracy jednocześnie.

### Kiedy używać?

- **Refactoring** — zmień nazwy we wszystkich plikach
- **Migracja** — zaktualizuj importy w całym projekcie
- **Masowe zmiany** — dodaj komentarze, zmień styl, popraw formatowanie

### Jak użyć?

\`\`\`
/batch Zmień wszystkie 'backgroundColor' na 'bg-color' w plikach CSS
\`\`\`

\`\`\`
/batch Dodaj obsługę błędów do wszystkich API routes
\`\`\`

### Jak to działa pod maską?

1. Claude analizuje zakres zmian
2. Dzieli pracę na podzadania
3. Uruchamia agentów (każdy w izolacji)
4. Zbiera wyniki
5. Pokazuje Ci podsumowanie

### Na co uważać

- **Zrób commit przed /batch** — żebyś mógł cofnąć
- **Sprawdź wyniki** — nie wszystkie agenty mogą zrobić dobrze
- **Build po batch** — upewnij się że wszystko kompiluje
- Nie używaj do zmian wymagających **kontekstu między plikami**

### Alternatywa: /simplify

\`/simplify\` przegląda Twój kod pod kątem jakości i sam poprawia problemy. Dobry do code review.`,
  },
];
