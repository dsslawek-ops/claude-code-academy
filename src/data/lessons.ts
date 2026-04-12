import { Lesson } from "@/types/database";

export const lessons: Lesson[] = [
  // ═══════════════════════════════════════════════════════════════
  // MODULE 1: Fundamenty (module_order: 1)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "l1",
    path_id: "entrepreneur",
    module_name: "Fundamenty",
    module_order: 1,
    title: "Czym jest Claude Code i jak myśleć o AI",
    slug: "czym-jest-claude-code-i-jak-myslec-o-ai",
    duration_minutes: 8,
    order: 1,
    content: `# Czym jest Claude Code i jak myśleć o AI

## Wyobraź sobie super-kompetentnego pracownika

Wyobraź sobie, że zatrudniasz programistę, który:
- Nigdy nie śpi i jest dostępny 24/7
- Zna praktycznie każdy język programowania
- Potrafi czytać i pisać kod w kilka sekund
- Rozumie polecenia po polsku
- Nie obraża się, gdy poprosisz o poprawki

To właśnie jest **Claude Code** — asystent AI od firmy Anthropic, który działa bezpośrednio w Twoim edytorze kodu (VS Code) lub w terminalu.

## Co to właściwie jest?

Claude Code to **narzędzie w wierszu poleceń (CLI)**, które łączy sztuczną inteligencję z Twoim projektem. Zamiast pisać kod ręcznie, opisujesz po polsku co chcesz osiągnąć, a Claude:

1. **Czyta** Twój istniejący kod i rozumie jego strukturę
2. **Proponuje** zmiany lub nowy kod
3. **Wprowadza** zmiany bezpośrednio w plikach
4. **Testuje** czy wszystko działa (jeśli go poprosisz)

## Analogia: nawigacja GPS

Pomyśl o Claude Code jak o **nawigacji GPS w samochodzie**:

| GPS | Claude Code |
|-----|-------------|
| Ty mówisz dokąd jechać | Ty mówisz co chcesz zbudować |
| GPS proponuje trasę | Claude proponuje rozwiązanie |
| Ty decydujesz czy jechać tą trasą | Ty decydujesz czy zaakceptować kod |
| GPS nie jedzie za Ciebie | Claude nie podejmuje decyzji biznesowych za Ciebie |

**Kluczowa zasada**: Ty jesteś szefem. Claude jest wykonawcą. Ty mówisz CO, Claude mówi JAK.

## Jak to się różni od zwykłego ChatGPT?

| Zwykły chatbot | Claude Code |
|----------------|-------------|
| Odpowiada tekstem | **Bezpośrednio edytuje pliki** na Twoim komputerze |
| Nie widzi Twojego projektu | **Czyta wszystkie pliki** w Twoim projekcie |
| Musisz kopiować/wklejać kod | **Sam zmienia kod** i uruchamia komendy |
| Nie pamięta Twojego projektu | **Zna zasady** dzięki CLAUDE.md |

## Czego Claude Code NIE robi

Ważne, żeby mieć realistyczne oczekiwania:

- **Nie zastępuje myślenia** — musisz wiedzieć, czego chcesz
- **Nie zna Twojego biznesu** — musisz mu wyjaśnić kontekst
- **Nie jest nieomylny** — czasem się myli i trzeba poprawić
- **Nie działa bez internetu** — potrzebuje połączenia z API Anthropic

## Jak myśleć o AI jako przedsiębiorca?

Jako przedsiębiorca nie musisz rozumieć każdej linijki kodu. Musisz rozumieć:

1. **Co jest możliwe** — Claude potrafi zbudować strony, API, bazy danych, integracje
2. **Jak komunikować potrzeby** — jasne polecenia = lepsze wyniki
3. **Jak weryfikować efekty** — czy strona działa? Czy dane się zapisują?
4. **Kiedy potrzebujesz człowieka** — architektura, bezpieczeństwo, skomplikowane migracje

## Praktyczny przykład

Zamiast pisać do programisty: *"Potrzebuję formularz kontaktowy na stronie"*

Piszesz do Claude Code: *"Dodaj formularz kontaktowy na stronie /kontakt. Pola: imię, email, wiadomość. Po wysłaniu pokaż komunikat 'Dziękujemy, odezwiemy się w 24h'. Zapisz dane do Supabase."*

Claude przeczyta Twój projekt, znajdzie odpowiednie pliki i napisze cały kod. Ty tylko sprawdzasz efekt w przeglądarce.

## Podsumowanie

Claude Code to Twój **cyfrowy programista na żądanie**. Nie musisz uczyć się programować — musisz nauczyć się jasno komunikować czego potrzebujesz. I właśnie tego nauczysz się w tym kursie.`,
  },
  {
    id: "l2",
    path_id: "entrepreneur",
    module_name: "Fundamenty",
    module_order: 1,
    title: "Interfejs — co widzisz i co możesz kliknąć",
    slug: "interfejs-co-widzisz-i-co-mozesz-kliknac",
    duration_minutes: 5,
    order: 2,
    content: `# Interfejs — co widzisz i co możesz kliknąć

## VS Code — Twoje biuro

VS Code (Visual Studio Code) to edytor kodu, w którym będziesz pracować. Pomyśl o nim jak o **Wordzie dla programistów** — ale zamiast dokumentów, otwierasz w nim projekty.

## Mapa interfejsu

Gdy otworzysz VS Code, zobaczysz kilka głównych obszarów:

| Obszar | Gdzie jest | Do czego służy |
|--------|-----------|----------------|
| **Pasek boczny (Explorer)** | Lewa strona | Lista plików i folderów Twojego projektu |
| **Edytor** | Środek | Tu widzisz i edytujesz pliki |
| **Terminal** | Dół | Tu rozmawiasz z Claude Code |
| **Pasek aktywności** | Skrajnie lewa | Ikony do przełączania widoków |
| **Pasek statusu** | Sam dół | Informacje o pliku, gałęzi git |

## Terminal — tu żyje Claude Code

**Terminal to najważniejsze miejsce dla Ciebie.** To jest takie "okno czatu" z komputerem.

Żeby otworzyć terminal:
- Skrót: \`Ctrl + \`\` (klawisz z tyldą, obok cyfry 1)
- Albo: menu górne > Terminal > Nowy terminal

W terminalu wpisujesz \`claude\` i zaczyna się rozmowa z AI.

## Jak wygląda rozmowa z Claude?

\`\`\`
$ claude
╭──────────────────────────────────────╮
│ Claude Code                          │
│ Type your message...                 │
╰──────────────────────────────────────╯

> Dodaj przycisk "Kup teraz" na stronie produktu
\`\`\`

Claude odpowiada tekstem i kodem. Gdy chce zmienić plik, pyta Cię o zgodę:

\`\`\`
Claude wants to edit src/app/product/page.tsx
[y] Accept  [n] Reject  [e] Edit
\`\`\`

- **y** — akceptujesz zmianę
- **n** — odrzucasz
- **e** — chcesz najpierw zmodyfikować

## Pasek boczny — Twoja mapa projektu

Pasek boczny (Explorer) pokazuje strukturę projektu jak drzewko folderów w Windowsie. Typowy projekt Next.js wygląda tak:

\`\`\`
moj-projekt/
├── src/           ← kod aplikacji
│   ├── app/       ← strony
│   └── components/← elementy wielokrotnego użytku
├── public/        ← obrazki, ikony
├── package.json   ← lista "składników" projektu
└── CLAUDE.md      ← instrukcja dla Claude
\`\`\`

Nie musisz znać każdego pliku — Claude zna je za Ciebie.

## Panele, które warto znać

### Panel problemów (Problems)
Pokazuje błędy w kodzie. Jeśli widzisz czerwone podkreślenia — Claude może je naprawić.

### Panel Source Control (Git)
Ikona z rozgałęzieniem po lewej stronie. Pokazuje co się zmieniło od ostatniego zapisu (commita). Więcej o tym w module 2.

### Panel wyszukiwania
\`Cmd + Shift + F\` — szuka tekst we wszystkich plikach. Przydatne gdy szukasz gdzie jest dany tekst na stronie.

## Kluczowa zasada

Nie musisz klikać w każdy plik i rozumieć co jest w środku. Twoja rola to:

1. **Otworzyć terminal** (\`Ctrl + \`\`)
2. **Napisać co chcesz** (po polsku)
3. **Sprawdzić efekt** (w przeglądarce)
4. **Zaakceptować lub poprawić** (y/n/e)

Reszta dzieje się automatycznie.`,
  },
  {
    id: "l3",
    path_id: "entrepreneur",
    module_name: "Fundamenty",
    module_order: 1,
    title: "Pierwsza rozmowa — jak pisać polecenia",
    slug: "pierwsza-rozmowa-jak-pisac-polecenia",
    duration_minutes: 7,
    order: 3,
    content: `# Pierwsza rozmowa — jak pisać polecenia

## Prompt = polecenie dla AI

Słowo "prompt" (czyt. prompt) to po prostu **polecenie, które piszesz do Claude**. Im lepsze polecenie, tym lepszy wynik. To jak zlecanie zadań pracownikowi — im precyzyjniej opiszesz, tym mniej poprawek.

## Złota zasada: Bądź konkretny

| Złe polecenie | Dobre polecenie |
|---------------|-----------------|
| "Napraw stronę" | "Na stronie /kontakt formularz nie wysyła maila. Po kliknięciu 'Wyślij' nic się nie dzieje." |
| "Dodaj coś ładnego" | "Dodaj sekcję z opiniami klientów na stronie głównej. 3 opinie w kartkach obok siebie." |
| "Zrób to lepiej" | "Zmień kolor przycisku 'Kup' z szarego na zielony (#22c55e) i zwiększ go o 20%." |
| "Pomóż mi" | "Potrzebuję stronę z cennikiem. 3 plany: Basic 49 zł, Pro 99 zł, Enterprise 199 zł." |

## Szablon dobrego polecenia

Używaj tego schematu, gdy piszesz bardziej złożone polecenia:

\`\`\`
CO: [co chcesz osiągnąć]
GDZIE: [na której stronie / w jakim pliku]
SZCZEGÓŁY: [konkretne wymagania]
UWAGI: [czego NIE robić lub na co uważać]
\`\`\`

**Przykład:**
\`\`\`
CO: Dodaj formularz zapisu na newsletter
GDZIE: Stopka na każdej stronie (komponent Footer)
SZCZEGÓŁY:
- Jedno pole: email
- Przycisk "Zapisz się"
- Po zapisie komunikat "Dziękujemy!"
- Zapisz email do tabeli 'subscribers' w Supabase
UWAGI: Nie zmieniaj obecnego wyglądu stopki, tylko dodaj formularz pod linkami
\`\`\`

## Rozmowa, nie jednorazowe polecenie

Claude Code to **rozmowa**, nie jednorazowe polecenie. Możesz:

1. **Dać ogólne polecenie** — Claude zrobi pierwszą wersję
2. **Poprosić o poprawki** — "Zmień kolor na niebieski"
3. **Doprecyzować** — "Dodaj jeszcze walidację emaila"
4. **Zapytać** — "Czy to zadziała na telefonie?"

To tak jak rozmowa z grafikiem — najpierw ogólna wizja, potem szlifowanie detali.

## 5 typów poleceń, które będziesz używać najczęściej

### 1. Budowanie nowej funkcji
> "Stwórz stronę z galerią zdjęć produktów. Zdjęcia pobieraj z folderu /public/products."

### 2. Naprawianie błędu
> "Na stronie /zamowienie po kliknięciu 'Dalej' pokazuje się biała strona. Sprawdź konsolę przeglądarki — jest błąd 'Cannot read property of undefined'."

### 3. Zmiana wyglądu
> "Zmień nagłówek strony głównej: tekst 'Witamy' zamień na 'Pellet najwyższej jakości', font na pogrubiony, rozmiar 3xl."

### 4. Pytanie o istniejący kod
> "Wyjaśnij mi jak działa wysyłanie maili w tym projekcie. Gdzie jest ta logika?"

### 5. Refaktoryzacja (porządki)
> "Przenieś konfigurację kolorów do jednego pliku, żeby łatwo zmieniać paletę."

## Czego unikać

- **Zbyt wiele na raz** — lepiej 3 małe polecenia niż 1 ogromne
- **Niejasne słowa** — "zrób ładniej" nic nie znaczy. Powiedz CO konkretnie
- **Brak kontekstu** — Claude nie wie jaki masz biznes, powiedz mu
- **Ignorowanie pytań Claude** — jeśli pyta o coś, to znaczy że potrzebuje info

## Twoje pierwsze ćwiczenie

Otwórz terminal, wpisz \`claude\` i napisz:

> "Wyjaśnij mi strukturę tego projektu. Jakie strony ma ta aplikacja i co każda z nich robi?"

To bezpieczne polecenie — Claude tylko przeczyta i opowie, nic nie zmieni. Idealne na start.`,
  },
  {
    id: "l4",
    path_id: "entrepreneur",
    module_name: "Fundamenty",
    module_order: 1,
    title: "Skróty klawiszowe — 10 które zmienią Twoje życie",
    slug: "skroty-klawiszowe-10-ktore-zmienia-twoje-zycie",
    duration_minutes: 5,
    order: 4,
    content: `# Skróty klawiszowe — 10 które zmienią Twoje życie

## Dlaczego skróty?

Każde kliknięcie myszką to **2-3 sekundy**. Jeśli klikasz 100 razy dziennie, tracisz **5 minut dziennie**, czyli **30 godzin rocznie**. Skróty klawiszowe to jak autostrady zamiast dróg polnych.

## Top 10 skrótów dla macOS + VS Code

| # | Skrót | Co robi | Analogia |
|---|-------|---------|----------|
| 1 | \`Ctrl + \`\` | Otwiera/zamyka terminal | Włączanie czatu z Claude |
| 2 | \`Cmd + S\` | Zapisuje plik | Jak Ctrl+S w Wordzie |
| 3 | \`Cmd + Shift + F\` | Szuka tekst we WSZYSTKICH plikach | Wyszukiwarka Google, ale w Twoim projekcie |
| 4 | \`Cmd + P\` | Szybkie otwieranie pliku po nazwie | Szukaj pliku bez klikania w drzewko |
| 5 | \`Cmd + Z\` | Cofnij ostatnią zmianę | Przycisk "Cofnij" |
| 6 | \`Cmd + Shift + Z\` | Ponów cofniętą zmianę | Przycisk "Ponów" |
| 7 | \`Cmd + /\` | Zakomentuj/odkomentuj linię | Tymczasowe wyłączenie kodu |
| 8 | \`Cmd + D\` | Zaznacz kolejne wystąpienie słowa | Zaznacz i zmień wiele naraz |
| 9 | \`Cmd + Shift + P\` | Paleta komend VS Code | "Menu wszystkiego" |
| 10 | \`Cmd + W\` | Zamknij aktualną kartę | Zamknij zakładkę |

## Skróty specyficzne dla Claude Code

| Skrót | Co robi | Kiedy użyć |
|-------|---------|------------|
| \`Escape\` | Przerywa odpowiedź Claude | Gdy Claude pisze za dużo lub nie to co chcesz |
| \`Tab\` | Akceptuje sugestię | Gdy Claude proponuje dokończenie kodu |
| \`Shift + Tab\` | Odrzuca sugestię | Gdy sugestia jest niepotrzebna |

## Jak zapamiętać?

Nie ucz się wszystkich naraz. Strategia **"1 skrót na tydzień"**:

### Tydzień 1-2: Podstawy przetrwania
- \`Ctrl + \`\` — terminal (tu żyje Claude)
- \`Cmd + S\` — zapis
- \`Cmd + Z\` — cofnij

### Tydzień 3-4: Nawigacja
- \`Cmd + P\` — otwórz plik
- \`Cmd + Shift + F\` — szukaj w plikach

### Tydzień 5-6: Produktywność
- \`Cmd + Shift + P\` — paleta komend
- \`Cmd + D\` — zaznacz wielokrotnie

### Tydzień 7+: Wszystko razem
Reszta skrótów wejdzie naturalnie.

## Sztuczka: Naklejki na klawiaturze

Serio — niektórzy przyklejają małe karteczki na monitor z 3 najważniejszymi skrótami. Po tygodniu zdejmują. Proste i skuteczne.

## Skróty w terminalu (nie VS Code)

Gdy jesteś w terminalu (tam gdzie piszesz do Claude):

| Skrót | Co robi |
|-------|---------|
| \`Ctrl + C\` | Przerywa bieżące polecenie |
| \`Ctrl + L\` | Czyści ekran terminala |
| \`↑\` (strzałka w górę) | Poprzednie polecenie |
| \`Ctrl + A\` | Skocz na początek linii |
| \`Ctrl + E\` | Skocz na koniec linii |

## Podsumowanie

Zacznij od **trzech skrótów**: \`Ctrl + \`\`, \`Cmd + S\`, \`Cmd + Z\`. Gdy je opanujesz, dodawaj kolejne. Za miesiąc będziesz pracować dwa razy szybciej.`,
  },
  {
    id: "l5",
    path_id: "entrepreneur",
    module_name: "Fundamenty",
    module_order: 1,
    title: "CLAUDE.md — instrukcja dla Claude w Twoim projekcie",
    slug: "claude-md-instrukcja-dla-claude-w-twoim-projekcie",
    duration_minutes: 6,
    order: 5,
    content: `# CLAUDE.md — instrukcja dla Claude w Twoim projekcie

## Co to jest CLAUDE.md?

Wyobraź sobie, że zatrudniasz nowego pracownika. Pierwszego dnia dajesz mu **instrukcję stanowiskową** — jak działamy, jakich narzędzi używamy, czego nie robimy. CLAUDE.md to dokładnie to samo, ale dla Claude Code.

Jest to **specjalny plik tekstowy** w głównym folderze projektu, który Claude automatycznie czyta za każdym razem, gdy rozpoczyna rozmowę.

## Po co to?

Bez CLAUDE.md, Claude:
- Nie wie jakiego stacku technologicznego używasz
- Nie zna Twoich konwencji (np. że piszesz po polsku)
- Nie wie o ograniczeniach (np. "nie zmieniaj pliku X")
- Za każdym razem musisz powtarzać te same informacje

Z CLAUDE.md, Claude **od razu wie** jak pracować w Twoim projekcie.

## Jak stworzyć CLAUDE.md?

Poproś Claude! Napisz w terminalu:

> "Stwórz plik CLAUDE.md w głównym folderze projektu z podstawowymi zasadami."

Albo stwórz go ręcznie. Plik musi nazywać się dokładnie \`CLAUDE.md\` (wielkość liter ma znaczenie) i leżeć w głównym folderze projektu.

## Co powinien zawierać?

### Minimum (dla każdego projektu):

\`\`\`markdown
# Instrukcja dla Claude

## Stack technologiczny
- Next.js 16, React 19, TypeScript
- Tailwind CSS
- Supabase (baza danych, auth)
- Deploy: Vercel

## Zasady
- Pisz komunikaty interfejsu po polsku
- Commit messages po angielsku z prefixem (feat/fix/docs)
- Po zmianach uruchom: npm run build
- Nie hardcoduj sekretów — używaj zmiennych środowiskowych
\`\`\`

### Rozbudowany (dla dojrzałego projektu):

Twój CLAUDE.md może zawierać:

| Sekcja | Przykład |
|--------|----------|
| **Stack** | "Next.js 16, Supabase, Tailwind" |
| **Konwencje** | "Interfejs po polsku, kod po angielsku" |
| **Struktura** | "Strony w src/app/, komponenty w src/components/" |
| **Deploy** | "Vercel auto-deploy z brancha main" |
| **Zakazy** | "Nie zmieniaj pliku middleware.ts" |
| **Integracje** | "Używamy Resend do maili, SMSAPI do SMS" |
| **Zmienne** | "Sekrety w .env.local, nigdy w kodzie" |

## Gdzie Claude szuka instrukcji?

Claude czyta CLAUDE.md z trzech miejsc (w tej kolejności):

1. **~/.claude/CLAUDE.md** — globalne zasady (dla WSZYSTKICH projektów)
2. **CLAUDE.md** w głównym folderze projektu — zasady tego projektu
3. **CLAUDE.md** w podfolderach — zasady dla konkretnej części

To jak hierarchia w firmie: zasady firmy > zasady działu > zasady stanowiska.

## Praktyczne porady

### Aktualizuj regularnie
Gdy dodajesz nową integrację (np. Stripe), dopisz to do CLAUDE.md. Claude będzie o tym wiedział w przyszłych rozmowach.

### Nie przesadzaj z długością
CLAUDE.md z 10 stron to jak regulamin, którego nikt nie czyta. Trzymaj go **zwięźle** — najważniejsze zasady, nie encyklopedia.

### Używaj formatowania Markdown
Tabele, listy, nagłówki — Claude lepiej rozumie strukturyzowany tekst.

## Ćwiczenie

Napisz do Claude:

> "Przeanalizuj ten projekt i zaproponuj zawartość pliku CLAUDE.md. Uwzględnij stack, konwencje i najważniejsze zasady."

Claude przejrzy Twój projekt i zaproponuje gotowy plik. Idealne na start!`,
  },

  // ═══════════════════════════════════════════════════════════════
  // MODULE 2: Codzienna praca (module_order: 2)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "l6",
    path_id: "entrepreneur",
    module_name: "Codzienna praca",
    module_order: 2,
    title: "Git: commit, push, pull — o co chodzi",
    slug: "git-commit-push-pull-o-co-chodzi",
    duration_minutes: 8,
    order: 1,
    content: `# Git: commit, push, pull — o co chodzi

## Git to jak "Historia wersji" w Google Docs

Znasz tę funkcję w Google Docs, która pozwala cofnąć się do dowolnej wersji dokumentu? **Git robi to samo, ale dla całego projektu** — wszystkich plików naraz.

## Trzy magiczne słowa

### 1. Commit = "Zapisz punkt kontrolny"

**Commit** to jak zrobienie zdjęcia Twojemu projektowi w danym momencie. Każdy commit ma:
- **Opis** (co zrobiłeś) — np. "Dodano formularz kontaktowy"
- **Datę** i **autora**
- **Zmiany** — które pliki się zmieniły

Analogia: **Commit = zapis w grze komputerowej.** Możesz wrócić do dowolnego zapisu.

\`\`\`
$ git commit -m "feat: add contact form to landing page"
\`\`\`

### 2. Push = "Wyślij na serwer"

**Push** wysyła Twoje commity (zapisy) na GitHub — serwer w chmurze. Dlaczego?
- **Backup** — nawet jak laptop padnie, kod jest bezpieczny
- **Deploy** — Vercel automatycznie aktualizuje stronę po pushu
- **Współpraca** — inni (lub Claude) mogą widzieć zmiany

Analogia: **Push = kliknięcie "Synchronizuj" w Dropboxie.**

\`\`\`
$ git push
\`\`\`

### 3. Pull = "Pobierz z serwera"

**Pull** pobiera najnowsze zmiany z GitHuba na Twój komputer. Potrzebny gdy:
- Ktoś inny wprowadził zmiany
- Edytowałeś coś z innego komputera
- Chcesz mieć pewność, że masz najnowszą wersję

Analogia: **Pull = "Odśwież" w skrzynce mailowej.**

\`\`\`
$ git pull
\`\`\`

## Cały cykl pracy w 4 krokach

| Krok | Co robisz | Polecenie |
|------|-----------|-----------|
| 1. Wprowadź zmiany | Piszesz do Claude, akceptujesz kod | — |
| 2. Sprawdź co się zmieniło | Zobacz listę zmienionych plików | \`git status\` |
| 3. Commit (zapisz punkt) | Opisz co zrobiłeś | \`git add . && git commit -m "opis"\` |
| 4. Push (wyślij) | Prześlij na GitHub | \`git push\` |

## Ale ja nie chcę tego robić ręcznie!

Dobra wiadomość: **Claude zrobi to za Ciebie**. Wystarczy powiedzieć:

> "Zrób commit z opisem 'dodano formularz kontaktowy' i wypchnij na GitHub"

Claude wykona wszystkie kroki sam.

## Branch = "kopia robocza"

Czasem chcesz eksperymentować bez ryzyka. **Branch** (gałąź) to kopia Twojego projektu, na której możesz pracować bez wpływu na wersję produkcyjną.

Analogia: **Branch = kopia zapasowa dokumentu przed dużymi zmianami.**

- **main** — wersja produkcyjna (ta na stronie)
- **feat/nowy-cennik** — Twój eksperyment

Gdy eksperyment się uda, łączysz go z main (to się nazywa **merge**).

## Co gdy coś zepsuję?

Git pozwala **cofnąć się do dowolnego commita**. Powiedz Claude:

> "Cofnij ostatnie zmiany — coś się zepsuło"

Albo bardziej konkretnie:

> "Pokaż mi historię commitów z ostatnich 3 dni"

## Podsumowanie

| Pojęcie | Analogia | Jednym zdaniem |
|---------|----------|----------------|
| **Git** | Historia wersji | System śledzenia zmian |
| **Commit** | Zapis w grze | Punkt kontrolny |
| **Push** | Synchronizuj w Dropbox | Wyślij na serwer |
| **Pull** | Odśwież pocztę | Pobierz z serwera |
| **Branch** | Kopia robocza | Bezpieczny eksperyment |

Nie musisz pamiętać komend — Claude je zna. Musisz rozumieć **koncepcję**, żeby wiedzieć o co Claude pyta.`,
  },
  {
    id: "l7",
    path_id: "entrepreneur",
    module_name: "Codzienna praca",
    module_order: 2,
    title: "Jak poprosić o poprawkę buga",
    slug: "jak-poprosic-o-poprawke-buga",
    duration_minutes: 5,
    order: 2,
    content: `# Jak poprosić o poprawkę buga

## Bug = coś nie działa jak powinno

Bug (czyt. bag) to błąd w programie. Przycisk nie reaguje, strona się nie ładuje, tekst jest ucięty. Każdy projekt ma bugi — to normalne.

## Szablon zgłaszania buga do Claude

Gdy coś nie działa, opisz to Claude według tego schematu:

\`\`\`
CO NIE DZIAŁA: [co widzisz / co się dzieje]
CO POWINNO SIĘ DZIAĆ: [czego oczekujesz]
GDZIE: [na jakiej stronie / w jakiej funkcji]
KIEDY: [po jakim działaniu się pojawia]
BŁĄD: [tekst błędu, jeśli jest]
\`\`\`

## Przykłady dobrych zgłoszeń

### Przykład 1: Formularz nie wysyła
> CO NIE DZIAŁA: Po kliknięciu "Wyślij" na stronie /kontakt nic się nie dzieje.
> CO POWINNO SIĘ DZIAĆ: Powinien pojawić się komunikat "Wiadomość wysłana" i dane trafić do bazy.
> GDZIE: Strona /kontakt, formularz kontaktowy.
> KIEDY: Za każdym razem gdy kliknę "Wyślij".
> BŁĄD: W konsoli przeglądarki widzę "Error 500: Internal Server Error".

### Przykład 2: Strona się nie ładuje
> Na stronie /produkty po zalogowaniu widzę białą stronę. Przed dodaniem filtra cenowego działało. Sprawdź ostatnie zmiany w tym pliku.

### Przykład 3: Wygląd
> Na telefonie (iPhone) nagłówek na stronie głównej nachodzi na menu hamburger. Na komputerze wygląda OK.

## Skąd wziąć tekst błędu?

### Konsola przeglądarki
1. Otwórz stronę z problemem
2. Kliknij prawym przyciskiem myszy > "Zbadaj" (Inspect)
3. Przejdź do zakładki "Console"
4. Czerwone teksty = błędy. Skopiuj je i wklej Claude.

### Terminal
Jeśli w terminalu (gdzie działa \`npm run dev\`) widzisz czerwone komunikaty — skopiuj je.

## Jak Claude naprawia buga?

1. **Czyta Twój opis** problemu
2. **Szuka** w kodzie miejsca, które może powodować błąd
3. **Analizuje** przyczynę
4. **Proponuje naprawę** — pokazuje co chce zmienić
5. **Ty akceptujesz** (y) lub prosisz o inną wersję

## Co robić, gdy Claude nie może naprawić?

Czasem jeden opis nie wystarczy. Wtedy:

1. **Doprecyzuj** — "Błąd pojawia się TYLKO gdy pole email jest puste"
2. **Daj więcej kontekstu** — "To działało wczoraj, dzisiaj po aktualizacji przestało"
3. **Poproś o diagnozę** — "Nie naprawiaj jeszcze, najpierw wyjaśnij mi co może być nie tak"
4. **Poproś o logi** — "Dodaj console.log żeby zobaczyć co przychodzi z API"

## Profilaktyka — jak unikać bugów

| Zasada | Jak to zrobić |
|--------|---------------|
| Testuj po każdej zmianie | Otwórz stronę i kliknij to co zmienił Claude |
| Małe kroki | Lepiej 5 małych zmian niż 1 ogromna |
| Czytaj co Claude zmienia | Nie klikaj "y" na ślepo |
| Build przed pushem | "Uruchom npm run build i sprawdź czy nie ma błędów" |

## Podsumowanie

Dobry opis buga = szybka naprawa. Im więcej konkretów dasz Claude, tym szybciej znajdzie rozwiązanie. Nie bój się pytać — Claude nie ocenia. Każdy projekt ma bugi.`,
  },
  {
    id: "l8",
    path_id: "entrepreneur",
    module_name: "Codzienna praca",
    module_order: 2,
    title: "Jak dodać nową funkcję do projektu",
    slug: "jak-dodac-nowa-funkcje-do-projektu",
    duration_minutes: 7,
    order: 3,
    content: `# Jak dodać nową funkcję do projektu

## Funkcja = nowa możliwość w aplikacji

"Funkcja" (feature) to nowa rzecz, którą Twoja aplikacja potrafi robić. Może to być:
- Nowa strona (np. cennik)
- Nowy formularz (np. zapis na newsletter)
- Nowa integracja (np. płatności Stripe)
- Nowy widok (np. panel administracyjny)

## Workflow krok po kroku

### Krok 1: Zaplanuj na papierze

Zanim napiszesz do Claude, odpowiedz sobie na pytania:

| Pytanie | Przykładowa odpowiedź |
|---------|----------------------|
| Co ma robić ta funkcja? | Klienci mogą zostawiać opinie o produktach |
| Kto z tego korzysta? | Zalogowani klienci |
| Jakie dane zbieramy? | Ocena (1-5 gwiazdek), tekst opinii, data |
| Gdzie to się pojawi? | Na stronie każdego produktu, pod opisem |
| Jak to wygląda? | Gwiazdki do kliknięcia + pole tekstowe + przycisk "Dodaj opinię" |

### Krok 2: Stwórz nowy branch

Powiedz Claude:

> "Stwórz nowy branch o nazwie feat/opinie-produktow"

Dzięki temu pracujesz na kopii — jeśli coś pójdzie nie tak, wersja produkcyjna jest bezpieczna.

### Krok 3: Opisz funkcję Claude

Teraz napisz szczegółowe polecenie. Im więcej detali, tym lepiej:

> "Dodaj system opinii na stronach produktów.
> Wymagania:
> - Pod opisem produktu dodaj sekcję 'Opinie klientów'
> - Formularz: gwiazdki 1-5, pole tekstowe (max 500 znaków), przycisk 'Dodaj opinię'
> - Tylko zalogowani użytkownicy mogą dodawać opinie
> - Opinie zapisuj w tabeli 'reviews' w Supabase (user_id, product_id, rating, text, created_at)
> - Wyświetlaj średnią ocenę i listę opinii od najnowszej
> - Dodaj walidację: tekst min. 10 znaków"

### Krok 4: Sprawdź efekt

Claude napisze kod. Teraz:

1. Otwórz przeglądarkę (\`http://localhost:3000\`)
2. Przejdź na stronę produktu
3. Sprawdź czy widzisz sekcję opinii
4. Przetestuj: dodaj opinię, sprawdź czy się zapisała
5. Sprawdź edge cases: co jak nie jesteś zalogowany? Co jak wpiszesz pusty tekst?

### Krok 5: Popraw co trzeba

Prawie nigdy pierwsza wersja nie jest idealna. Napisz poprawki:

> "Gwiazdki powinny być żółte, nie szare. Dodaj animację hover na gwiazdkach."

> "Po dodaniu opinii, formularz powinien się wyczyścić i nowa opinia od razu pojawić na liście."

### Krok 6: Build i commit

Gdy wszystko działa:

> "Uruchom npm run build. Jeśli przejdzie bez błędów, zrób commit z opisem 'feat: add product reviews' i wypchnij na GitHub."

### Krok 7: Merge do main

Gdy jesteś pewien, że wszystko jest OK:

> "Zmerguj branch feat/opinie-produktow do main"

Po tym Vercel automatycznie wdroży zmiany na produkcję.

## Złożone funkcje: dziel na etapy

Jeśli funkcja jest duża, podziel ją na mniejsze kroki:

| Etap | Co robimy |
|------|-----------|
| 1 | Stwórz tabelę w bazie danych |
| 2 | Zbuduj formularz (wygląd) |
| 3 | Podłącz formularz do bazy (logika) |
| 4 | Dodaj wyświetlanie opinii |
| 5 | Dodaj walidację i obsługę błędów |

Każdy etap = osobne polecenie, osobny test, osobny commit.

## Podsumowanie

Dodawanie funkcji to cykl: **planuj > buduj > testuj > poprawiaj > wdrażaj**. Kluczem jest jasna komunikacja i testowanie po każdym kroku. Claude jest szybki, ale Ty musisz wiedzieć czego chcesz.`,
  },
  {
    id: "l9",
    path_id: "entrepreneur",
    module_name: "Codzienna praca",
    module_order: 2,
    title: "Deploy na Vercel — od kodu do strony",
    slug: "deploy-na-vercel-od-kodu-do-strony",
    duration_minutes: 6,
    order: 4,
    content: `# Deploy na Vercel — od kodu do strony

## Co to jest deploy?

**Deploy** (czyt. di-ploj) to proces przeniesienia kodu z Twojego komputera na serwer, tak żeby strona była dostępna dla wszystkich w internecie.

Analogia: Napisałeś książkę na komputerze (= Twój kod). Deploy to **wysłanie jej do drukarni i umieszczenie w księgarni** (= serwer).

## Co to jest Vercel?

**Vercel** to firma, która hostuje (przechowuje i serwuje) Twoje strony internetowe. Jest idealny dla projektów w Next.js, bo:

- **Darmowy** plan wystarcza dla wielu projektów
- **Automatyczny deploy** — wystarczy push na GitHub
- **Szybki** — strony ładują się błyskawicznie
- **HTTPS** — certyfikat SSL automatycznie (ta kłódka w przeglądarce)

## Jak działa automatyczny deploy?

Oto magia: **nie musisz nic robić ręcznie**.

\`\`\`
[Twój komputer] > git push > [GitHub] > automatycznie > [Vercel] > Twoja strona live
\`\`\`

| Krok | Co się dzieje | Kto to robi |
|------|---------------|-------------|
| 1 | Zmieniasz kod z Claude | Ty + Claude |
| 2 | Commit + push | Ty (lub Claude) |
| 3 | GitHub odbiera zmiany | Automatycznie |
| 4 | Vercel wykrywa push | Automatycznie |
| 5 | Vercel buduje projekt | Automatycznie (2-3 min) |
| 6 | Nowa wersja strony live | Automatycznie |

**Czyli: po \`git push\` czekasz 2-3 minuty i strona jest zaktualizowana.**

## Konfiguracja (jednorazowa)

### Jeśli jeszcze nie masz Vercela:

1. Wejdź na vercel.com i załóż konto (przez GitHub)
2. Kliknij "Import Project" i wybierz swoje repozytorium
3. Vercel sam wykryje, że to Next.js i ustawi wszystko
4. Kliknij "Deploy"

### Jeśli masz Vercela, ale chcesz deploy z terminala:

Powiedz Claude:

> "Zainstaluj Vercel CLI i zdeployuj projekt na produkcję"

Claude wykona:
\`\`\`bash
npm i -g vercel
vercel --prod
\`\`\`

## Zmienne środowiskowe (Environment Variables)

Twój projekt pewnie używa sekretów (klucze API, hasła do bazy). Te NIE mogą być w kodzie.

W Vercelu ustawiasz je w panelu:
1. Wejdź na vercel.com > Twój projekt
2. Settings > Environment Variables
3. Dodaj zmienne (np. \`SUPABASE_URL\`, \`SUPABASE_ANON_KEY\`)

Albo powiedz Claude:

> "Jakie zmienne środowiskowe potrzebuje ten projekt na Vercelu?"

Claude sprawdzi plik \`.env.local\` i poda listę.

## Co gdy deploy się nie udał?

Vercel pokazuje logi (dziennik) z procesu budowania. Gdy coś nie zadziała:

1. Wejdź na vercel.com > Twój projekt > Deployments
2. Kliknij nieudany deploy (czerwony)
3. Przeczytaj logi — skopiuj błąd
4. Wklej do Claude: "Deploy na Vercel nie udał się. Oto błąd: [wklej]"

Najczęstsze przyczyny:
- **Brak zmiennej środowiskowej** — dodaj ją w panelu Vercel
- **Błąd TypeScript** — Claude naprawi
- **Brak dependencji** — \`npm install\` rozwiąże

## Preview deploys — podgląd przed produkcją

Każdy branch (gałąź) w Git dostaje **własny URL do podglądu**. Czyli:

- \`main\` > Twoja-strona.vercel.app (produkcja)
- \`feat/nowy-cennik\` > Twoja-strona-feat-nowy-cennik.vercel.app (podgląd)

Możesz sprawdzić zmiany przed mergem do main. Bezpiecznie!

## Podsumowanie

Deploy na Vercel to w praktyce **jeden push na GitHuba**. Reszta dzieje się automatycznie. Raz skonfigurowany, działa bez Twojej interwencji. Claude pomoże z konfiguracją i rozwiąże problemy gdy się pojawią.`,
  },
  {
    id: "l10",
    path_id: "entrepreneur",
    module_name: "Codzienna praca",
    module_order: 2,
    title: "Slash commands — komendy które musisz znać",
    slug: "slash-commands-komendy-ktore-musisz-znac",
    duration_minutes: 5,
    order: 5,
    content: `# Slash commands — komendy które musisz znać

## Co to są slash commands?

Slash commands to **specjalne komendy zaczynające się od ukośnika** (/), które mówią Claude Code co ma zrobić. To jak szybkie skróty — zamiast pisać długie polecenie, wpisujesz krótką komendę.

Analogia: **Slash commands = przyciski szybkiego wybierania na telefonie.** Zamiast wpisywać cały numer, klikasz jeden przycisk.

## Najważniejsze komendy

### Zarządzanie rozmową

| Komenda | Co robi | Kiedy użyć |
|---------|---------|------------|
| \`/clear\` | Czyści historię rozmowy | Gdy zaczynasz nowy temat |
| \`/compact\` | Kompresuje historię (zachowuje kontekst) | Gdy rozmowa jest długa i Claude zaczyna "zapominać" |
| \`/status\` | Pokazuje status sesji | Gdy chcesz wiedzieć ile kontekstu zostało |

### Praca z kodem

| Komenda | Co robi | Kiedy użyć |
|---------|---------|------------|
| \`/review\` | Przegląda i komentuje kod | Gdy chcesz sprawdzić jakość kodu |
| \`/commit\` | Tworzy commit z opisem | Gdy chcesz zapisać zmiany |
| \`/pr\` | Tworzy Pull Request | Gdy chcesz zmergować zmiany |

### Konfiguracja

| Komenda | Co robi | Kiedy użyć |
|---------|---------|------------|
| \`/model\` | Zmienia model AI | Gdy chcesz użyć szybszego/lepszego modelu |
| \`/permissions\` | Zarządza uprawnieniami | Gdy chcesz zmienić co Claude może robić |
| \`/config\` | Otwiera konfigurację | Gdy chcesz zmienić ustawienia |

### Pomoc i informacje

| Komenda | Co robi | Kiedy użyć |
|---------|---------|------------|
| \`/help\` | Lista wszystkich komend | Gdy nie pamiętasz komendy |
| \`/cost\` | Pokazuje koszt sesji | Gdy chcesz kontrolować wydatki |

## Praktyczne scenariusze

### Scenariusz 1: Długa sesja pracy
Po godzinie pracy rozmowa jest bardzo długa. Claude zaczyna się "gubić":

1. Wpisz \`/compact\` — Claude skompresuje historię, ale zachowa kluczowe informacje
2. Kontynuuj pracę

### Scenariusz 2: Zmiana tematu
Pracowałeś nad formularzem, teraz chcesz pracować nad stroną główną:

1. Wpisz \`/clear\` — czysta karta
2. Opisz nowe zadanie

### Scenariusz 3: Zapis postępu
Skończyłeś dodawać nową funkcję:

1. Wpisz \`/commit\` — Claude zobaczy zmiany i zaproponuje opis commita
2. Zaakceptuj lub popraw opis
3. Gotowe!

### Scenariusz 4: Kontrola kosztów
Pracujesz cały dzień i chcesz wiedzieć ile wydajesz:

1. Wpisz \`/cost\`
2. Zobaczysz ile tokenów zużyłeś i ile to kosztuje

## Pro tips

### Łączenie komend z poleceniami
Slash commands możesz łączyć z normalnymi poleceniami:

> "/review — sprawdź czy w ostatnich zmianach nie ma problemów z bezpieczeństwem"

### Autouzupełnianie
Zacznij pisać \`/\` i Claude pokaże Ci dostępne komendy. Nie musisz ich pamiętać.

### Częstotliwość /compact
Dobra praktyka: używaj \`/compact\` co 30-40 minut intensywnej pracy. Dzięki temu Claude zawsze ma "świeży umysł" z pełnym kontekstem.

## Podsumowanie

Slash commands to Twoje **szybkie skróty** do efektywnej pracy z Claude Code. Zacznij od trzech: \`/clear\`, \`/compact\`, \`/commit\`. Reszta przyjdzie z czasem. Gdy zapomnisz — wpisz \`/help\`.`,
  },

  // ═══════════════════════════════════════════════════════════════
  // MODULE 3: Zaawansowane techniki (module_order: 3)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "l11",
    path_id: "entrepreneur",
    module_name: "Zaawansowane techniki",
    module_order: 3,
    title: "Uprawnienia — co Claude może, a czego nie",
    slug: "uprawnienia-co-claude-moze-a-czego-nie",
    duration_minutes: 6,
    order: 1,
    content: `# Uprawnienia — co Claude może, a czego nie

## Po co uprawnienia?

Wyobraź sobie, że dajesz nowemu pracownikowi klucze do firmy. Czy od razu dajesz mu klucz do sejfu, kasy i archiwum? Nie — zaczynasz od kluczy do biura, a resztę dodajesz gdy zbuduje zaufanie.

**Uprawnienia w Claude Code działają tak samo.** Kontrolujesz co Claude może robić samodzielnie, a gdzie musi pytać o zgodę.

## Trzy tryby pracy

### 1. Tryb z pytaniem (domyślny)

Claude **pyta o zgodę** przed każdą zmianą w pliku:

\`\`\`
Claude wants to edit src/app/page.tsx
[y] Accept  [n] Reject  [e] Edit
\`\`\`

**Dla kogo**: Na początku, gdy dopiero poznajesz Claude Code. Bezpieczny, ale wolniejszy.

### 2. Tryb z auto-akceptacją plików

Claude **automatycznie edytuje pliki**, ale nadal pyta przed uruchomieniem komend (np. \`npm install\`):

\`\`\`
claude --allowedTools "Edit,Write,Read"
\`\`\`

**Dla kogo**: Gdy ufasz Claude co do zmian w kodzie, ale chcesz kontrolować komendy systemowe.

### 3. Tryb YOLO (pełna automatyzacja)

Claude robi **wszystko bez pytania** — edytuje pliki, uruchamia komendy, instaluje paczki:

\`\`\`
claude --dangerously-skip-permissions
\`\`\`

**Dla kogo**: Doświadczeni użytkownicy, projekty testowe. NIE używaj na produkcji bez przemyślenia.

## Co Claude może robić?

| Akcja | Domyślnie | Opis |
|-------|-----------|------|
| **Czytać pliki** | Tak (auto) | Przegląda kod, konfigurację |
| **Edytować pliki** | Pyta o zgodę | Zmienia istniejące pliki |
| **Tworzyć pliki** | Pyta o zgodę | Tworzy nowe pliki |
| **Usuwać pliki** | Pyta o zgodę | Kasuje pliki |
| **Uruchamiać komendy** | Pyta o zgodę | npm install, git push itp. |
| **Czytać internet** | Nie | Nie ma dostępu do stron www (chyba że przez MCP) |

## Jak zarządzać uprawnieniami?

### Przez slash command
Wpisz \`/permissions\` w rozmowie z Claude.

### Przez plik konfiguracyjny
Plik \`.claude/settings.json\` w projekcie:

\`\`\`json
{
  "permissions": {
    "allow": ["Read", "Edit", "Write"],
    "deny": ["Bash(rm *)"]
  }
}
\`\`\`

### Przez flagę przy starcie
\`\`\`bash
claude --allowedTools "Read,Edit,Write,Bash(npm run build)"
\`\`\`

## Praktyczne rekomendacje dla przedsiębiorcy

| Sytuacja | Rekomendowany tryb |
|----------|-------------------|
| Pierwszy tydzień z Claude | Domyślny (pyta o wszystko) |
| Codzienne poprawki | Auto-akceptacja plików |
| Duży refaktoring | Domyślny + uważne przeglądanie |
| Projekt testowy / nauka | YOLO (ale uważaj!) |
| Produkcja z klientami | Domyślny lub auto-akceptacja, nigdy YOLO |

## Złota zasada

**Zaczynaj restrykcyjnie, luzuj stopniowo.** Lepiej klikać "y" kilka razy za dużo niż pozwolić Claude usunąć ważny plik.

Gdy klikasz "y" na pytanie Claude, możesz też wybrać "Always allow" — wtedy Claude nie będzie pytał o tę konkretną akcję w przyszłości. To dobre rozwiązanie pośrednie.

## Podsumowanie

Uprawnienia to Twoja **siatka bezpieczeństwa**. Na początku trzymaj je ciasno. Z czasem, gdy nauczysz się jak Claude pracuje, możesz je rozluźnić. Pamiętaj: w każdej chwili możesz wrócić do trybu z pytaniem — wystarczy zrestartować Claude.`,
  },
  {
    id: "l12",
    path_id: "entrepreneur",
    module_name: "Zaawansowane techniki",
    module_order: 3,
    title: "MCP Servers — podłączanie usług",
    slug: "mcp-servers-podlaczanie-uslug",
    duration_minutes: 7,
    order: 2,
    content: `# MCP Servers — podłączanie usług

## Czym jest MCP?

**MCP** (Model Context Protocol) to sposób na podłączenie Claude Code do zewnętrznych usług. Dzięki MCP, Claude może **bezpośrednio** pracować z Twoimi narzędziami — bez wychodzenia z terminala.

Analogia: Wyobraź sobie, że Twoje biurko to Claude Code. Bez MCP musisz wstawać i iść do szafy po każdy dokument. Z MCP — **wszystkie szuflady są w zasięgu ręki**.

## Co MCP pozwala Claude robić?

| Usługa | Bez MCP | Z MCP |
|--------|---------|-------|
| **Supabase** | Musisz sam wejść na panel, skopiować SQL | Claude sam odpytuje bazę danych |
| **GitHub** | Musisz otworzyć przeglądarkę, kliknąć | Claude tworzy PR, czyta issues |
| **Notion** | Musisz ręcznie kopiować notatki | Claude czyta dokumentację z Notion |
| **Slack** | Musisz sam pisać wiadomości | Claude wysyła na kanał |
| **Stripe** | Musisz logować się do dashboardu | Claude sprawdza płatności |
| **Figma** | Musisz eksportować designy | Claude czyta design bezpośrednio |

## Jak to wygląda w praktyce?

### Przykład 1: Sprawdzenie bazy danych

Bez MCP:
1. Otwierasz panel Supabase
2. Wchodzisz w SQL Editor
3. Piszesz zapytanie
4. Kopiujesz wynik
5. Wklejasz do Claude

Z MCP:
> "Sprawdź ile mamy zamówień z ostatniego tygodnia w tabeli orders"

Claude **sam** łączy się z Supabase i daje odpowiedź.

### Przykład 2: Tworzenie zadania w Notion

> "Dodaj do naszej bazy w Notion zadanie: 'Dodać stronę regulaminu' z priorytetem Wysoki"

Claude tworzy wpis bez otwierania przeglądarki.

## Jak podłączyć MCP Server?

### Krok 1: Konfiguracja
MCP serwery konfiguruje się w pliku \`~/.claude/settings.json\`:

\`\`\`json
{
  "mcpServers": {
    "supabase": {
      "type": "url",
      "url": "https://mcp.supabase.com"
    }
  }
}
\`\`\`

### Krok 2: Autoryzacja
Większość MCP wymaga logowania (OAuth). Przy pierwszym użyciu Claude zapyta Cię o autoryzację — kliknij "Zaloguj" i gotowe.

### Krok 3: Używanie
Po podłączeniu, po prostu pisz polecenia. Claude sam wie, że może użyć MCP:

> "Sprawdź ostatnie 5 commitów na GitHubie"
> "Ile mamy nieodczytanych wiadomości na Slacku?"
> "Pokaż ostatnie płatności ze Stripe"

## Dostępne MCP Servery

### Oficjalne (przez Anthropic)
- **Supabase** — bazy danych, auth, storage
- **GitHub** — repozytoria, issues, PR
- **Slack** — wiadomości, kanały
- **Notion** — dokumenty, bazy danych
- **Figma** — designy, mockupy
- **Stripe** — płatności

### Lokalne (uruchamiane na Twoim komputerze)
- **Google Ads MCP** — keyword research
- **Facebook Page MCP** — posty, komentarze
- Dowolne własne — można tworzyć custom MCP

## Bezpieczeństwo MCP

| Aspekt | Jak działa |
|--------|-----------|
| **Autoryzacja** | OAuth — logujesz się przez przeglądarkę |
| **Uprawnienia** | Każdy MCP ma ograniczony zakres (np. tylko odczyt) |
| **Tokeny** | Przechowywane bezpiecznie (macOS Keychain) |
| **Odwołanie** | Możesz odłączyć MCP w każdej chwili |

## Kiedy MCP jest przydatne?

- Gdy **często** sprawdzasz dane w zewnętrznych usługach
- Gdy chcesz **automatyzować** powtarzalne zadania
- Gdy pracujesz z **wieloma narzędziami** jednocześnie
- Gdy chcesz, żeby Claude miał **pełny kontekst** (nie tylko kod)

## Podsumowanie

MCP to **supermoc Claude Code** — podłączasz usługi i Claude może z nimi rozmawiać bezpośrednio. Zacznij od Supabase i GitHuba (jeśli ich używasz), potem dodawaj kolejne według potrzeb. Konfiguracja jest jednorazowa, a korzyści — codzienne.`,
  },
  {
    id: "l13",
    path_id: "entrepreneur",
    module_name: "Zaawansowane techniki",
    module_order: 3,
    title: "Hooks — automatyczne akcje",
    slug: "hooks-automatyczne-akcje",
    duration_minutes: 8,
    order: 3,
    content: `# Hooks — automatyczne akcje

## Czym są hooks?

**Hooks** (czyt. huks) to automatyczne akcje, które uruchamiają się w określonym momencie. Pomyśl o nich jak o **automatycznych odpowiedziach w mailu** — gdy przychodzi mail z określonym słowem, automatycznie trafia do odpowiedniego folderu.

W Claude Code hooks pozwalają powiedzieć: **"Za każdym razem gdy Claude robi X, automatycznie zrób Y."**

## Analogia: domowa automatyka

| Automatyka w domu | Hook w Claude Code |
|--------------------|-------------------|
| Gdy wychodzisz > światło się wyłącza | Gdy Claude commituje > uruchom build |
| Gdy jest 22:00 > termostat się obniża | Przed każdym pushem > uruchom testy |
| Gdy dzwoni domofon > kamera nagrywa | Gdy Claude tworzy plik > sprawdź formatowanie |

## Jakie hooks są dostępne?

### PreToolUse — PRZED akcją Claude
Uruchamia się zanim Claude wykona narzędzie (np. zanim edytuje plik).

**Przykład**: Sprawdź czy Claude nie edytuje pliku, którego nie powinien:
\`\`\`json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Edit",
        "command": "echo 'Sprawdzam czy plik jest dozwolony...'"
      }
    ]
  }
}
\`\`\`

### PostToolUse — PO akcji Claude
Uruchamia się po tym jak Claude wykona narzędzie.

**Przykład**: Po każdej edycji pliku automatycznie uruchom formatter:
\`\`\`json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit",
        "command": "npx prettier --write $CLAUDE_FILE_PATH"
      }
    ]
  }
}
\`\`\`

### Notification — gdy Claude chce Twojej uwagi
Uruchamia się gdy Claude skończy długie zadanie i czeka na Twoją odpowiedź.

**Przykład**: Wyślij powiadomienie systemowe:
\`\`\`json
{
  "hooks": {
    "Notification": [
      {
        "command": "osascript -e 'display notification \\"Claude czeka na odpowiedź\\" with title \\"Claude Code\\"'"
      }
    ]
  }
}
\`\`\`

## Praktyczne zastosowania

### 1. Automatyczny build po zmianach
Po każdym edytowanym pliku \`.ts\` lub \`.tsx\`, sprawdź czy projekt się buduje:

> "Dodaj hook, który po każdej edycji pliku TypeScript uruchamia npm run build"

### 2. Automatyczne formatowanie
Kod powinien być zawsze ładnie sformatowany:

> "Dodaj hook, który po każdej edycji pliku uruchamia Prettier"

### 3. Powiadomienia
Gdy Claude skończy długie zadanie:

> "Dodaj hook, który wyświetla powiadomienie macOS gdy Claude czeka na moją odpowiedź"

### 4. Ochrona ważnych plików
Zablokuj edycję krytycznych plików:

> "Dodaj hook, który blokuje edycję pliku middleware.ts i .env.local"

## Jak skonfigurować hooks?

Hooks konfiguruje się w pliku \`.claude/settings.json\` w projekcie:

\`\`\`json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit",
        "command": "npx prettier --write $CLAUDE_FILE_PATH"
      }
    ],
    "Notification": [
      {
        "command": "osascript -e 'display notification \\"Claude gotowy\\" with title \\"Claude Code\\"'"
      }
    ]
  }
}
\`\`\`

Albo po prostu powiedz Claude:

> "Skonfiguruj hook, który automatycznie formatuje kod po każdej edycji pliku."

Claude sam utworzy lub zmodyfikuje konfigurację.

## Kiedy hooks się przydają?

| Sytuacja | Bez hooks | Z hooks |
|----------|-----------|---------|
| Formatowanie kodu | Musisz pamiętać żeby uruchomić | Automatyczne |
| Sprawdzanie błędów | Ręcznie po każdej zmianie | Automatyczne |
| Powiadomienia | Musisz patrzeć na terminal | System Cię powiadomi |
| Ochrona plików | Musisz odrzucać ręcznie | Automatyczna blokada |

## Ważne zasady

1. **Hooks nie zastępują uprawnień** — to dodatkowa warstwa automatyzacji
2. **Testuj hooks na małych zmianach** — upewnij się że działają
3. **Nie przesadzaj z ilością** — za dużo hooks = wolniejsza praca
4. **Logi** — jeśli hook nie działa, sprawdź czy komenda jest poprawna

## Podsumowanie

Hooks to Twoja **automatyzacja na sterydach**. Zamiast pamiętać o formatowaniu, testach i buildzie — skonfiguruj hooks i zapomnij. Claude zajmie się resztą. Zacznij od jednego prostego hooka (np. powiadomienia) i dodawaj kolejne w miarę potrzeb.`,
  },
  {
    id: "l14",
    path_id: "entrepreneur",
    module_name: "Zaawansowane techniki",
    module_order: 3,
    title: "Agenty i subagenty — zlecanie zadań",
    slug: "agenty-i-subagenty-zlecanie-zadan",
    duration_minutes: 7,
    order: 4,
    content: `# Agenty i subagenty — zlecanie zadań

## Co to jest agent?

Gdy rozmawiasz z Claude Code w terminalu, rozmawiasz z **agentem AI**. Agent to program, który potrafi:
- Czytać i rozumieć kontekst
- Planować kroki do wykonania zadania
- Używać narzędzi (edycja plików, uruchamianie komend)
- Podejmować decyzje na bieżąco

Analogia: Agent to jak **kierownik projektu** — rozumie cel, planuje pracę i wykonuje ją krok po kroku.

## Co to jest subagent?

**Subagent** to agent, którego Twój główny agent (Claude) uruchamia do wykonania podzadania. To jak sytuacja, gdy kierownik deleguje zadanie pracownikowi.

\`\`\`
Ty > Claude (główny agent) > Subagent 1 (szuka pliki)
                           > Subagent 2 (analizuje kod)
                           > Subagent 3 (pisze testy)
\`\`\`

## Kiedy Claude używa subagentów?

Claude automatycznie tworzy subagentów gdy:

1. **Zadanie jest złożone** — np. "Przejrzyj cały projekt i popraw wszystkie błędy TypeScript"
2. **Potrzebna jest analiza** — np. "Sprawdź wszystkie pliki pod kątem bezpieczeństwa"
3. **Praca na wielu plikach** — np. "Zmień nazwę komponentu Button na PrimaryButton wszędzie"

### Jak to wygląda?

Piszesz:
> "Sprawdź wszystkie formularze w projekcie i upewnij się, że każdy ma walidację"

Claude myśli:
1. Muszę znaleźć wszystkie formularze > **uruchamia subagenta do wyszukiwania**
2. Dla każdego formularza muszę sprawdzić walidację > **uruchamia subagenta do analizy**
3. Tam gdzie brakuje walidacji, muszę ją dodać > **główny agent robi zmiany**

## Agent w trybie headless (bezgłowy)

Claude Code może działać **bez Twojej interakcji** — to tryb headless. Przydatny do automatyzacji:

\`\`\`bash
claude -p "Sprawdź czy npm run build przechodzi bez błędów i wypisz listę ostrzeżeń"
\`\`\`

Flaga \`-p\` (prompt) oznacza: "Wykonaj to polecenie i wyjdź". Nie czeka na Twoją interakcję.

### Praktyczne zastosowania trybu headless:

| Scenariusz | Polecenie |
|------------|-----------|
| Sprawdź build | \`claude -p "Uruchom npm run build i podaj wynik"\` |
| Review kodu | \`claude -p "Przejrzyj ostatnie zmiany i zasugeruj poprawki"\` |
| Generuj raport | \`claude -p "Policz ile linii kodu ma ten projekt, podział na języki"\` |
| Sprawdź bezpieczeństwo | \`claude -p "Czy w kodzie są hardcodowane sekrety?"\` |

## Multi-turn vs single-turn

| Tryb | Jak działa | Kiedy użyć |
|------|-----------|------------|
| **Multi-turn** (rozmowa) | Piszesz > Claude odpowiada > Ty odpowiadasz > ... | Budowanie, debugowanie, eksploracja |
| **Single-turn** (-p flag) | Jedno polecenie > wynik > koniec | Automatyzacja, CI/CD, szybkie pytania |

## Agenty w CI/CD (automatyzacja deploymentu)

Zaawansowane użycie: Claude Code jako **automatyczny reviewer kodu** w GitHub:

1. Ktoś tworzy Pull Request
2. GitHub automatycznie uruchamia Claude Code
3. Claude przegląda zmiany i zostawia komentarze
4. Ty dostajesz gotowe review

To wymaga konfiguracji GitHub Actions, ale Claude może to dla Ciebie skonfigurować:

> "Skonfiguruj GitHub Action, który uruchamia Claude Code review na każdym PR"

## Praktyczne wskazówki

### Kiedy Claude sam zdecyduje o subagentach?
- Nie musisz prosić o subagenty — Claude sam decyduje kiedy je użyć
- Im większe i bardziej złożone zadanie, tym większa szansa na subagenty

### Jak pisać polecenia dla optymalnej pracy agenta?
1. **Podaj kontekst**: "W tym projekcie Next.js z Supabase..."
2. **Podaj cel**: "...chcę dodać system logowania..."
3. **Podaj ograniczenia**: "...ale nie zmieniaj obecnej nawigacji"
4. **Podaj kryteria sukcesu**: "...powinno działać na telefonie i komputerze"

## Podsumowanie

Agenty to sposób w jaki Claude Code **organizuje swoją pracę**. Nie musisz nimi zarządzać bezpośrednio — po prostu daj jasne polecenie, a Claude sam zdecyduje czy potrzebuje pomocy subagentów. Tryb headless (\`-p\`) przydaje się do automatyzacji i szybkich zadań. Z czasem nauczysz się rozpoznawać kiedy Claude deleguje — zobaczysz to w logach.`,
  },

  // ═══════════════════════════════════════════════════════════════
  // MODULE 4: Produktywność Pro (module_order: 4)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "l15",
    path_id: "entrepreneur",
    module_name: "Produktywność Pro",
    module_order: 4,
    title: "Pamięć i kontekst — jak Claude pamięta",
    slug: "pamiec-i-kontekst-jak-claude-pamieta",
    duration_minutes: 6,
    order: 1,
    content: `# Pamięć i kontekst — jak Claude pamięta

## Problem z pamięcią AI

Wyobraź sobie rozmowę telefoniczną, w której po każdym zdaniu Twój rozmówca **zapomina wszystko, co powiedzieliście wcześniej**. Frustrujące, prawda? Właśnie tak działałyby modele AI bez systemu pamięci.

Claude Code rozwiązuje ten problem na kilka sposobów.

## Okno kontekstowe — "pamięć robocza"

Claude ma **okno kontekstowe** — to ile tekstu może "pamiętać" w jednej rozmowie. Pomyśl o tym jak o **biurku**: im większe biurko, tym więcej dokumentów możesz rozłożyć jednocześnie.

| Model | Okno kontekstowe | Analogia |
|-------|-------------------|----------|
| Claude Opus | ~200 000 tokenów | Ogromne biurko |
| Claude Sonnet | ~200 000 tokenów | Duże biurko |
| Claude Haiku | ~200 000 tokenów | Standardowe biurko |

**Token** to mniej więcej 4 znaki tekstu. 200 000 tokenów to mniej więcej **150 000 słów** — czyli cała powieść!

Ale uwaga: im dłuższa rozmowa, tym więcej kontekstu zużywasz. Dlatego istnieją mechanizmy zarządzania pamięcią.

## CLAUDE.md — pamięć długoterminowa

Jak wiesz z wcześniejszej lekcji, **CLAUDE.md** to plik, który Claude czyta na początku każdej rozmowy. To jest jak **notatka przypięta do monitora** — zawsze widoczna.

Co warto tam umieścić:
- Technologie projektu
- Konwencje kodowania
- Ważne decyzje architektoniczne
- Rzeczy, których Claude NIE powinien robić

## Auto-pamięć — Claude uczy się z rozmów

Claude Code może **automatycznie zapisywać** ważne informacje z rozmów. Gdy nauczy się czegoś nowego o Twoim projekcie, może to zapamiętać na przyszłość.

Jak to działa:
1. Podczas rozmowy Claude odkrywa ważną informację (np. "ten projekt używa Supabase, nie Firebase")
2. Claude może zaproponować zapisanie tej informacji
3. Zapisana informacja będzie dostępna w przyszłych rozmowach

## /compact — kompresja kontekstu

Gdy rozmowa jest długa (30+ minut intensywnej pracy), Claude może zacząć "zapominać" wcześniejsze fragmenty. Wtedy:

\`\`\`
/compact
\`\`\`

Co robi \`/compact\`?
1. **Streszcza** całą dotychczasową rozmowę
2. **Zachowuje** kluczowe informacje (decyzje, zmiany, kontekst)
3. **Usuwa** nieistotne detale (powtórzenia, próby, ślepe zaułki)
4. **Zwalnia miejsce** na nowe informacje

Analogia: To jak **sprzątanie biurka** — odkładasz niepotrzebne dokumenty do szuflady, zostawiając na wierzchu tylko to, co jest potrzebne.

### Kiedy używać /compact?
- Co **30-40 minut** intensywnej pracy
- Gdy Claude zaczyna **powtarzać się** lub **zapominać** wcześniejsze ustalenia
- Przed rozpoczęciem **nowego podzadania** w tej samej sesji
- Gdy widzisz ostrzeżenie o limicie kontekstu

## /clear — czysta karta

\`\`\`
/clear
\`\`\`

W przeciwieństwie do \`/compact\`, \`/clear\` **kasuje CAŁĄ historię rozmowy**. Jak zamknięcie i ponowne otwarcie aplikacji. Claude czyta od nowa CLAUDE.md i zaczyna z czystą kartą.

### Kiedy używać /clear?
- Gdy zmieniasz **kompletnie temat** (od frontendu do bazy danych)
- Gdy Claude się "zapętlił" i powtarza te same błędy
- Na początku nowego dnia pracy

## Porównanie mechanizmów pamięci

| Mechanizm | Zasięg | Trwałość | Analogia |
|-----------|--------|----------|----------|
| **Okno kontekstowe** | Bieżąca rozmowa | Do końca sesji | Biurko |
| **CLAUDE.md** | Każda rozmowa | Stała (plik) | Notatka na monitorze |
| **Auto-pamięć** | Przyszłe rozmowy | Stała | Notatnik w szufladzie |
| **/compact** | Bieżąca rozmowa | Do końca sesji | Sprzątanie biurka |
| **/clear** | Reset | — | Nowe biurko |

## Podsumowanie

Claude ma dobrą pamięć, ale nie nieskończoną. Twoja rola to **pomagać mu pamiętać** — przez dobry CLAUDE.md, regularne /compact i /clear gdy trzeba zacząć od nowa. Im lepiej zarządzasz kontekstem, tym lepsze wyniki dostajesz od Claude.`,
  },
  {
    id: "l16",
    path_id: "entrepreneur",
    module_name: "Produktywność Pro",
    module_order: 4,
    title: "Tryby modeli — Opus, Sonnet, Haiku, Fast",
    slug: "tryby-modeli-opus-sonnet-haiku-fast",
    duration_minutes: 5,
    order: 2,
    content: `# Tryby modeli — Opus, Sonnet, Haiku, Fast

## Co to są modele?

Claude to nie jeden "mózg" — to rodzina modeli o różnych możliwościach. Pomyśl o tym jak o **samochodach**:

| Model | Analogia samochodowa | Szybkość | Jakość | Koszt |
|-------|---------------------|----------|--------|-------|
| **Opus** | Mercedes S-klasa | Wolniejszy | Najwyższa | Najdroższy |
| **Sonnet** | Toyota Camry | Średnia | Bardzo dobra | Średni |
| **Haiku** | Smart | Najszybszy | Dobra | Najtańszy |

## Kiedy którego używać?

### Claude Opus — "Ekspert"
**Najlepszy do**: Skomplikowanych zadań wymagających głębokiego myślenia

| Dobry do | Przykład |
|----------|---------|
| Architektura projektu | "Zaplanuj strukturę bazy danych dla CRM" |
| Debugowanie trudnych problemów | "Ten bug pojawia się losowo, pomóż znaleźć przyczynę" |
| Refaktoryzacja | "Przebuduj system autoryzacji" |
| Pisanie złożonej logiki | "Zaimplementuj algorytm rabatów" |

### Claude Sonnet — "Wszechstronny pracownik"
**Najlepszy do**: Codziennej pracy — balans między jakością a szybkością

| Dobry do | Przykład |
|----------|---------|
| Nowe funkcje | "Dodaj formularz kontaktowy" |
| Poprawki bugów | "Przycisk nie reaguje na klik" |
| Zmiany w UI | "Zmień kolory na stronie" |
| Pisanie komponentów | "Stwórz komponent karty produktu" |

### Claude Haiku — "Szybki asystent"
**Najlepszy do**: Prostych, szybkich zadań

| Dobry do | Przykład |
|----------|---------|
| Pytania o kod | "Co robi ta funkcja?" |
| Małe poprawki | "Zmień tekst przycisku" |
| Generowanie danych | "Stwórz 10 testowych produktów" |
| Formatowanie | "Przeformatuj ten plik" |

## Jak zmienić model?

### W trakcie rozmowy:
\`\`\`
/model
\`\`\`
Zobaczysz listę dostępnych modeli do wyboru.

### Przy starcie:
\`\`\`bash
claude --model opus
claude --model sonnet
claude --model haiku
\`\`\`

## Tryb "Extended Thinking" — głębokie myślenie

Niektóre modele mają opcję **extended thinking** — Claude "myśli" dłużej przed odpowiedzią. To jak powiedzenie pracownikowi: "Nie spiesz się, przemyśl to dokładnie."

Kiedy warto:
- Skomplikowane problemy z wieloma zmiennymi
- Planowanie architektury
- Szukanie subtelnych bugów

## Strategia kosztowa dla przedsiębiorcy

| Typ pracy | Rekomendowany model | Dlaczego |
|-----------|---------------------|----------|
| Planowanie i architektura | Opus | Najlepsza jakość myślenia |
| Codzienne programowanie | Sonnet | Optymalny balans |
| Szybkie pytania | Haiku | Tanie i szybkie |
| Review kodu | Sonnet | Dobra analiza, rozsądna cena |
| Generowanie treści | Sonnet lub Haiku | Zależy od złożoności |

## Praktyczna rada

**Zacznij od Sonnet.** Jest domyślny i sprawdza się w 80% przypadków. Przeskocz na Opus gdy:
- Claude nie radzi sobie z zadaniem
- Budujesz coś naprawdę skomplikowanego
- Potrzebujesz najlepszej jakości za wszelką cenę

Użyj Haiku gdy:
- Robisz dużo małych zmian
- Pytasz o wyjaśnienia
- Generujesz powtarzalne rzeczy

## Podsumowanie

Nie musisz się nad tym długo zastanawiać. Sonnet na co dzień, Opus na trudne zadania, Haiku na szybkie pytania. Zmiana modelu to jedna komenda (\`/model\`). Eksperymentuj i zobacz co działa najlepiej dla Twoich zadań.`,
  },
  {
    id: "l17",
    path_id: "entrepreneur",
    module_name: "Produktywność Pro",
    module_order: 4,
    title: "/batch — zmiany na dużą skalę",
    slug: "batch-zmiany-na-duza-skale",
    duration_minutes: 7,
    order: 3,
    content: `# /batch — zmiany na dużą skalę

## Problem: wiele plików do zmiany

Wyobraź sobie, że chcesz zmienić nazwę firmy w całej aplikacji. Nazwa pojawia się na 30 stronach, w 15 komponentach, w 5 emailach. Ręcznie to by zajęło godziny. A co jeśli chcesz zmienić kolorystykę na 20 stronach? Albo dodać footer do każdej strony?

To właśnie problem, który rozwiązuje **praca batchowa** — zmiany na dużą skalę w wielu plikach naraz.

## Jak to działa?

Zamiast zmieniać pliki jeden po drugim, mówisz Claude co chcesz zmienić i **gdzie** — a on robi to hurtowo.

### Przykład 1: Zmiana nazwy firmy

> "Zmień wszystkie wystąpienia 'Pellet4Future Sp. z o.o.' na 'Pellet4Future S.A.' w całym projekcie. Sprawdź pliki .tsx, .ts i .json."

Claude:
1. Przeszuka cały projekt
2. Znajdzie wszystkie wystąpienia
3. Zmieni je jednocześnie
4. Pokaże raport: "Zmieniono w 23 plikach"

### Przykład 2: Dodanie komponentu do wielu stron

> "Dodaj komponent CookieBanner na dole każdej strony w folderze src/app/. Zaimportuj go z '@/components/CookieBanner'."

### Przykład 3: Aktualizacja stylu

> "We wszystkich komponentach zmień klasę 'bg-blue-500' na 'bg-brand-primary'. Dotyczy plików w src/components/ i src/app/."

## Tryb headless do batch

Dla powtarzalnych zadań możesz użyć trybu headless (bez interakcji):

\`\`\`bash
claude -p "Znajdź wszystkie pliki .tsx które importują 'oldComponent' i zmień import na 'newComponent'. Zaktualizuj też użycia w JSX."
\`\`\`

To uruchomi Claude, wykona zadanie i zakończy sesję. Idealne do automatyzacji.

## Praktyczne scenariusze batchowe

| Scenariusz | Polecenie |
|------------|-----------|
| Zmiana branding | "Zmień logo, kolory i nazwę firmy wszędzie" |
| Dodanie meta tagów | "Dodaj og:image do każdej strony" |
| Aktualizacja footera | "Zmień numer telefonu w stopce na wszystkich stronach" |
| Migracja importów | "Zmień wszystkie importy z '@/lib/old' na '@/lib/new'" |
| Dodanie walidacji | "Dodaj walidację email do każdego formularza" |
| Zmiana języka | "Przetłumacz wszystkie teksty interfejsu z angielskiego na polski" |
| Aktualizacja API | "Zmień wszystkie wywołania /api/v1/ na /api/v2/" |

## Bezpieczeństwo przy zmianach batchowych

### Zasada 1: Zawsze na osobnym branchu
Przed dużą zmianą:
> "Stwórz branch 'chore/rebrand-to-sa' i tam wprowadź zmiany"

Jeśli coś pójdzie nie tak, \`main\` jest bezpieczny.

### Zasada 2: Review przed mergem
Po zmianach:
> "Pokaż mi listę wszystkich zmienionych plików i co dokładnie się zmieniło"

Albo użyj:
\`\`\`
/review
\`\`\`

### Zasada 3: Build po zmianach
Zawsze:
> "Uruchom npm run build i sprawdź czy nie ma błędów"

Zmiana jednego słowa w złym miejscu może zepsuć cały projekt.

### Zasada 4: Testuj kluczowe ścieżki
Po batchu sprawdź ręcznie:
- Stronę główną
- Formularz kontaktowy
- Proces logowania
- Proces zakupu (jeśli masz)

## Porównanie podejść

| Podejście | Czas | Ryzyko błędu | Kiedy użyć |
|-----------|------|--------------|------------|
| **Ręcznie plik po pliku** | Godziny | Wysokie (zapomnienie pliku) | Nigdy |
| **Find and Replace w VS Code** | Minuty | Średnie (brak kontekstu) | Proste zamiany tekstu |
| **Claude batch** | Minuty | Niskie (rozumie kontekst) | Złożone zmiany, wiele plików |

## Zaawansowane: wiele operacji w jednym batchu

Możesz łączyć wiele zmian w jedno polecenie:

> "W ramach rebrandingu:
> 1. Zmień nazwę z 'Pellet4Future Sp. z o.o.' na 'Pellet4Future S.A.'
> 2. Zmień kolor główny z #3b82f6 na #059669
> 3. Zaktualizuj numer telefonu z '+48 123 456 789' na '+48 987 654 321'
> 4. Zmień email z 'info@pellet4future.com' na 'kontakt@pellet4future.com'
> Sprawdź wszystkie pliki .tsx, .ts, .json i .md."

Claude wykona wszystko w jednym przebiegu.

## Podsumowanie

Zmiany batchowe to jedno z najpotężniejszych narzędzi Claude Code. Gdzie kiedyś potrzebowałeś programisty na cały dzień, teraz robisz to **w kilka minut**. Pamiętaj o branchu, review i buildzie — to Twoja siatka bezpieczeństwa. Używaj śmiało, ale odpowiedzialnie.`,
  },

  // ═══════════════════════════════════════════════════════════════
  // LEARNING PATH: Claude Code in Action (cc-action)
  // ═══════════════════════════════════════════════════════════════

  // ═══════════════════════════════════════════════════════════════
  // MODULE 1: Architektura i narzędzia (module_order: 1)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "ca1",
    path_id: "cc-action",
    module_name: "Architektura i narzędzia",
    module_order: 1,
    title: "Jak Claude Code widzi Twój projekt",
    slug: "jak-claude-code-widzi-twoj-projekt",
    duration_minutes: 7,
    order: 1,
    content: `# Jak Claude Code widzi Twój projekt

## Claude to nie chatbot — to agent

Zwykły chatbot (np. ChatGPT w przeglądarce) odpowiada na pytania. Claude Code to **agent** — samodzielnie podejmuje kroki, żeby wykonać Twoje zadanie. Różnica jest ogromna.

Wyobraź sobie dwa scenariusze:

| Chatbot | Agent (Claude Code) |
|---------|---------------------|
| "Oto kod, skopiuj go do pliku X" | Sam otwiera plik X, wkleja kod, zapisuje |
| "Powinieneś uruchomić tę komendę" | Sam uruchamia komendę i sprawdza wynik |
| "Sprawdź plik konfiguracyjny" | Sam znajduje i czyta plik konfiguracyjny |

## Pętla agenta — jak Claude myśli

Gdy dajesz Claude zadanie, uruchamia się **pętla agenta** (agentic loop). Działa to tak:

1. **Odczytaj** — Claude czyta Twoje polecenie i zastanawia się co zrobić
2. **Zaplanuj** — decyduje, jakiego narzędzia użyć (przeczytać plik? uruchomić komendę?)
3. **Wykonaj** — używa wybranego narzędzia
4. **Oceń** — sprawdza wynik i decyduje: czy zadanie gotowe, czy trzeba kolejny krok?
5. **Powtórz** — jeśli zadanie nie jest gotowe, wraca do kroku 1

To jak doświadczony pracownik, który dostaje zadanie i sam planuje kroki zamiast pytać o każdy szczegół.

## Przykład pętli w praktyce

Mówisz: *"Dodaj pole telefonu do formularza kontaktowego"*

Claude wykonuje kolejno:
1. **Szuka** pliku z formularzem (narzędzie Grep/Glob)
2. **Czyta** ten plik, żeby zrozumieć obecną strukturę (narzędzie Read)
3. **Edytuje** plik — dodaje pole telefonu (narzędzie Edit)
4. **Szuka** pliku z walidacją — może tam też trzeba dodać telefon
5. **Edytuje** plik walidacji
6. **Uruchamia** build, żeby sprawdzić czy nie ma błędów (narzędzie Bash)
7. **Raportuje** co zrobił

Każdy z tych kroków to **jedno obrócenie pętli**. Claude może wykonać 5, 10 albo nawet 30 kroków w jednym zadaniu.

## Co Claude widzi, a czego nie widzi

| Widzi | Nie widzi |
|-------|-----------|
| Wszystkie pliki w folderze projektu | Pliki poza projektem |
| Treść plików, gdy je otworzy | Twój ekran / przeglądarkę |
| Wynik komend w terminalu | Bazę danych (bez dodatkowych narzędzi) |
| Plik CLAUDE.md z instrukcjami | Twoje myśli — musisz je napisać |

## Narzędzia — ręce Claude'a

Claude "myśli" za pomocą modelu językowego, ale "działa" za pomocą **narzędzi** (tools). Każde narzędzie to jedna konkretna umiejętność:

- **Read** — czytanie plików
- **Edit** — edycja plików
- **Write** — tworzenie nowych plików
- **Bash** — uruchamianie komend w terminalu
- **Grep** — szukanie tekstu w plikach
- **Glob** — szukanie plików po nazwie

Claude sam wybiera, którego narzędzia użyć w danym momencie. Ty nie musisz mu mówić "użyj narzędzia Read" — wystarczy powiedzieć "przeczytaj ten plik".

## Analogia: kucharz w Twojej kuchni

Claude Code to jak **kucharz**, który przychodzi do Twojej kuchni. Nie przynosi swoich produktów — korzysta z tego, co masz w lodówce (Twoje pliki). Ma własne narzędzia (noże, garnki = Read, Edit, Bash), ale gotuje z Twoich składników. Ty mówisz "zrób pierogi", on planuje kroki i gotuje. Ale to Ty próbujesz i mówisz "za mało soli".

## Podsumowanie

Claude Code to agent, który samodzielnie planuje i wykonuje kroki za pomocą narzędzi. Działa w pętli: czyta, planuje, wykonuje, ocenia. Twoja rola to dawać jasne zadania i weryfikować efekty.`,
  },
  {
    id: "ca2",
    path_id: "cc-action",
    module_name: "Architektura i narzędzia",
    module_order: 1,
    title: "System narzędzi — jak Claude wykonuje zadania",
    slug: "system-narzedzi-jak-claude-wykonuje-zadania",
    duration_minutes: 8,
    order: 2,
    content: `# System narzędzi — jak Claude wykonuje zadania

## Narzędzia to supermoc Claude'a

Bez narzędzi Claude byłby tylko chatbotem — mógłby gadać, ale nie mógłby nic zrobić. Narzędzia pozwalają mu **działać w Twoim projekcie**: czytać pliki, edytować kod, uruchamiać komendy.

Pomyśl o narzędziach jak o **skrzynce z narzędziami hydraulika**. Hydraulik nie używa wszystkich naraz — wybiera właściwe do danego zadania.

## Przegląd narzędzi

| Narzędzie | Co robi | Analogia | Przykład użycia |
|-----------|---------|----------|-----------------|
| **Read** | Czyta zawartość pliku | Otwarcie dokumentu | Claude czyta plik konfiguracyjny |
| **Edit** | Zmienia fragment pliku | Poprawienie akapitu w dokumencie | Zmiana koloru przycisku |
| **Write** | Tworzy nowy plik od zera | Napisanie nowego dokumentu | Stworzenie nowej strony |
| **Bash** | Uruchamia komendy w terminalu | Zlecenie zadania asystentowi | \`npm run build\`, \`git status\` |
| **Grep** | Szuka tekstu w plikach | Ctrl+F we wszystkich plikach | "Gdzie jest użyty kolor #3b82f6?" |
| **Glob** | Szuka plików po nazwie | Szukanie dokumentu po nazwie | "Znajdź wszystkie pliki .tsx" |

## Read — oczy Claude'a

**Read** to najczęściej używane narzędzie. Claude czyta plik, żeby zrozumieć co w nim jest, zanim cokolwiek zmieni.

Kiedy Claude używa Read:
- Na początku zadania — żeby poznać strukturę projektu
- Przed edycją — żeby wiedzieć co zmienić
- Po błędzie — żeby zrozumieć co poszło nie tak

Claude nie czyta wszystkich plików naraz — to byłoby jak próba przeczytania całej biblioteki. Czyta strategicznie, plik po pliku.

## Edit vs Write — kiedy który?

To częste pytanie. Zasada jest prosta:

| Sytuacja | Narzędzie | Dlaczego |
|----------|-----------|----------|
| Plik już istnieje, zmieniasz fragment | **Edit** | Zmienia tylko to co trzeba, reszta nietknięta |
| Tworzysz zupełnie nowy plik | **Write** | Nie ma czego edytować, trzeba stworzyć od zera |
| Plik istnieje, ale przepisujesz go całkowicie | **Write** | Łatwiej napisać od nowa niż edytować wszystko |

Claude sam wybiera właściwe narzędzie — nie musisz mu podpowiadać.

## Bash — ręce Claude'a

**Bash** to narzędzie, które pozwala Claude uruchamiać komendy w terminalu. To potężne narzędzie, bo pozwala:

- Instalować paczki (\`npm install\`)
- Budować projekt (\`npm run build\`)
- Sprawdzać status git (\`git status\`)
- Uruchamiać testy (\`npm test\`)
- Tworzyć foldery (\`mkdir\`)

Ważne: gdy Claude chce uruchomić komendę Bash, **pyta Cię o zgodę**. To zabezpieczenie — nie chcesz, żeby przypadkiem usunął ważne pliki.

## Grep i Glob — detektywi

Te dwa narzędzia pomagają Claude **znaleźć** rzeczy w projekcie:

- **Grep** szuka **treści** — "w którym pliku jest tekst 'Witamy'?"
- **Glob** szuka **plików** — "które pliki kończą się na .config.ts?"

To jak różnica między szukaniem **słowa w książce** (Grep) a szukaniem **książki na półce** (Glob).

## Jak Claude wybiera narzędzie?

Claude nie rzuca monetą. Ma logikę:

1. Zadanie wymaga informacji? → **Read** lub **Grep/Glob**
2. Trzeba zmienić istniejący plik? → **Edit**
3. Trzeba stworzyć nowy plik? → **Write**
4. Trzeba uruchomić komendę? → **Bash**

Często jedno zadanie wymaga **wielu narzędzi** w sekwencji. Np. "napraw błąd na stronie kontakt":
1. **Grep** — szuka pliku ze stroną kontakt
2. **Read** — czyta ten plik
3. **Edit** — naprawia błąd
4. **Bash** — uruchamia build, żeby sprawdzić

## Podsumowanie

Claude ma sześć głównych narzędzi i sam wybiera, którego użyć. Ty nie musisz mówić "użyj Read" — po prostu opisz zadanie, a Claude dobierze odpowiednie narzędzia. Im lepiej opiszesz problem, tym trafniej Claude wybierze narzędzia i sekwencję kroków.`,
  },
  {
    id: "ca3",
    path_id: "cc-action",
    module_name: "Architektura i narzędzia",
    module_order: 1,
    title: "Wielokrokowe zadania — jak Claude planuje",
    slug: "wielokrokowe-zadania-jak-claude-planuje",
    duration_minutes: 7,
    order: 3,
    content: `# Wielokrokowe zadania — jak Claude planuje

## Proste vs złożone zadania

Nie każde zadanie to jedno kliknięcie. Są dwa rodzaje:

| Proste zadanie | Złożone zadanie |
|----------------|-----------------|
| "Zmień kolor przycisku na zielony" | "Dodaj system logowania z rejestracją i resetem hasła" |
| 1-2 kroki | 10-30 kroków |
| Jeden plik | Wiele plików |
| Sekundy | Minuty |

Przy złożonych zadaniach Claude musi **zaplanować** zanim zacznie działać. Jak architekt rysuje projekt domu zanim murarz zacznie stawiać ściany.

## Tryb planowania (Plan mode)

Claude Code ma specjalny **tryb planowania**. Zamiast od razu pisać kod, najpierw przedstawia plan:

> "Żeby dodać system logowania, muszę:
> 1. Stworzyć stronę logowania (/login)
> 2. Stworzyć stronę rejestracji (/register)
> 3. Dodać middleware do ochrony stron
> 4. Połączyć z Supabase Auth
> 5. Dodać przycisk wylogowania w nawigacji"

Ty możesz:
- **Zaakceptować plan** — Claude zaczyna realizację
- **Zmodyfikować** — "Pomiń reset hasła na razie"
- **Doprecyzować** — "Użyj formularza z shadcn/ui"

## Jak włączyć tryb planowania?

Są dwa sposoby:

### 1. Poproś wprost
> "Zaplanuj dodanie galerii zdjęć. Nie implementuj jeszcze — pokaż mi plan."

### 2. Użyj komendy /effort
\`/effort\` kontroluje jak głęboko Claude myśli:
- **low** — szybka odpowiedź, minimalny plan
- **medium** — standardowe podejście
- **high** — głębokie myślenie, dokładny plan

Przy złożonych zadaniach warto ustawić \`/effort high\`.

## Jak Claude rozkłada zadanie na kroki?

Claude stosuje podejście **"od ogółu do szczegółu"**:

1. **Rozumie cel** — co ma być efektem końcowym?
2. **Identyfikuje komponenty** — jakie części trzeba stworzyć/zmienić?
3. **Ustala kolejność** — co musi być pierwsze? (np. baza danych przed frontendem)
4. **Realizuje krok po kroku** — jeden krok naraz, sprawdzając wynik

Analogia: to jak **planowanie remontu mieszkania**. Nie zaczynasz od malowania ścian, jeśli nie masz jeszcze tynków. Kolejność ma znaczenie.

## Praktyczny przykład: dodanie bloga

Polecenie: *"Dodaj sekcję blog do strony"*

Claude planuje:
1. Sprawdź obecną strukturę projektu (Read/Glob)
2. Stwórz tabelę \`posts\` w bazie danych (Bash — migracja SQL)
3. Stwórz stronę listy postów \`/blog\` (Write)
4. Stwórz stronę pojedynczego posta \`/blog/[slug]\` (Write)
5. Dodaj link "Blog" do nawigacji (Edit)
6. Stwórz komponent karty posta (Write)
7. Dodaj przykładowe dane (Bash — seed)
8. Uruchom build i sprawdź (Bash)

Każdy krok zależy od poprzedniego — Claude nie stworzy strony posta, jeśli nie wie jeszcze jak wygląda struktura danych.

## Kiedy warto planować?

| Sytuacja | Czy planować? | Dlaczego |
|----------|---------------|----------|
| Zmiana koloru | Nie | Jeden plik, jeden krok |
| Nowa strona | Raczej tak | Kilka plików, trzeba spiąć razem |
| Nowa funkcja (auth, płatności) | Tak | Wiele plików, baza danych, logika |
| Refaktoryzacja | Tak | Zmiana wielu plików naraz |

## Wskazówka: dziel duże zadania

Zamiast jednego ogromnego polecenia, podziel na etapy:

Zamiast: *"Zbuduj cały sklep internetowy"*

Lepiej:
1. *"Stwórz stronę z listą produktów"*
2. *"Dodaj koszyk"*
3. *"Dodaj proces zamówienia"*
4. *"Połącz z systemem płatności"*

Mniejsze zadania = lepsze wyniki. Claude skupia się na jednym problemie naraz i robi to dokładniej.

## Podsumowanie

Claude potrafi planować złożone zadania krok po kroku. Używaj trybu planowania przy zadaniach wymagających wielu plików. Dziel duże zadania na mniejsze etapy — to daje najlepsze wyniki.`,
  },

  // ═══════════════════════════════════════════════════════════════
  // MODULE 2: Kontekst i pamięć (module_order: 2)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "ca4",
    path_id: "cc-action",
    module_name: "Kontekst i pamięć",
    module_order: 2,
    title: "Okno kontekstu — ile Claude pamięta",
    slug: "okno-kontekstu-ile-claude-pamieta",
    duration_minutes: 6,
    order: 1,
    content: `# Okno kontekstu — ile Claude pamięta

## Czym jest okno kontekstu?

Wyobraź sobie **biurko robocze**. Możesz na nim rozłożyć określoną liczbę dokumentów. Gdy biurko się zapełni, musisz odłożyć stare dokumenty, żeby zmieścić nowe. **Okno kontekstu** to właśnie takie biurko — ale cyfrowe.

Okno kontekstu to ilość tekstu, którą Claude może "trzymać w głowie" podczas jednej rozmowy. Mierzy się ją w **tokenach** (w uproszczeniu: 1 token to mniej więcej 1 słowo).

## Ile pamięta Claude?

| Model | Okno kontekstu | W przybliżeniu |
|-------|----------------|-----------------|
| Claude Opus | **1 000 000 tokenów** | ~750 000 słów |
| Claude Sonnet | 200 000 tokenów | ~150 000 słów |

Milion tokenów to bardzo dużo — to **kilka grubych książek**. W praktyce oznacza to, że Claude może przeczytać i pamiętać jednocześnie tysiące linii kodu.

## Co się dzieje, gdy okno się zapełnia?

Gdy rozmowa jest bardzo długa, okno kontekstu się zapełnia. Claude zaczyna "zapominać" to, co było na początku rozmowy. To jak biurko — nowe dokumenty wypychają stare.

Objaw: Claude nagle zapomina o ustaleniach z początku rozmowy albo pyta o coś, co już mu mówiłeś.

## Trzy komendy ratunkowe

### /compact — skompresuj rozmowę
Gdy rozmowa się rozrasta, wpisz \`/compact\`. Claude:
- Podsumuje dotychczasową rozmowę
- Zapamięta kluczowe ustalenia
- Zwolni miejsce w oknie kontekstu

To jak **zrobienie notatek ze spotkania** zamiast trzymania w głowie każdego słowa.

### /clear — zacznij od zera
\`/clear\` czyści całą rozmowę. Używaj, gdy:
- Zaczynasz nowe, niezwiązane zadanie
- Rozmowa zrobiła się chaotyczna
- Claude zaczął się "gubić"

To jak **czyste biurko** — nowy start.

### /context — sprawdź ile miejsca zostało
\`/context\` pokazuje, ile okna kontekstu jest zajęte. Przydatne, żeby wiedzieć kiedy pora na \`/compact\`.

## Praktyczne wskazówki

### 1. Jedna rozmowa = jedno zadanie
Nie rób 10 różnych rzeczy w jednej rozmowie. Po skończeniu zadania użyj \`/clear\` i zacznij nowe.

### 2. Używaj /compact regularnie
Przy długich sesjach (30+ minut) używaj \`/compact\` co kilkanaście minut. Claude zachowa ważne informacje i będzie pracował sprawniej.

### 3. Nie wklejaj ogromnych plików ręcznie
Zamiast wklejać 1000 linii kodu do rozmowy, powiedz:
> "Przeczytaj plik src/app/page.tsx"

Claude użyje narzędzia Read i przeczyta plik efektywniej niż gdybyś go wkleił.

### 4. Kontekst to cenny zasób
Każda wiadomość, każdy przeczytany plik, każdy wynik komendy **zajmuje miejsce** w oknie kontekstu. Dlatego:
- Pisz zwięźle (ale precyzyjnie)
- Nie proś Claude o tłumaczenie rzeczy, które są nieistotne
- Skupiaj się na jednym zadaniu naraz

## Analogia: rozmowa telefoniczna

Rozmowa z Claude jest jak **rozmowa telefoniczna**, nie jak wymiana maili. Podczas rozmowy pamiętasz co powiedziano wcześniej — ale jeśli rozmowa trwa 5 godzin, zapominasz szczegóły z początku. \`/compact\` to jak krótkie podsumowanie "ok, więc ustaliliśmy że...".

## Podsumowanie

Okno kontekstu to ilość informacji, którą Claude trzyma w pamięci podczas rozmowy. Opus ma milion tokenów — dużo, ale nie nieskończenie. Używaj \`/compact\` do kompresji, \`/clear\` do nowego startu i \`/context\` do sprawdzenia stanu.`,
  },
  {
    id: "ca5",
    path_id: "cc-action",
    module_name: "Kontekst i pamięć",
    module_order: 2,
    title: "CLAUDE.md na poważnie — zaawansowana konfiguracja",
    slug: "claude-md-na-powaznie-zaawansowana-konfiguracja",
    duration_minutes: 8,
    order: 2,
    content: `# CLAUDE.md na poważnie — zaawansowana konfiguracja

## Więcej niż prosty opis projektu

Jeśli znasz już podstawy CLAUDE.md (opis stacku, zasady, konwencje), czas na zaawansowane techniki. CLAUDE.md to potężne narzędzie — dobrze skonfigurowane może diametralnie zmienić jakość pracy Claude'a.

## Importowanie innych plików — @file

Nie musisz trzymać wszystkiego w jednym CLAUDE.md. Możesz **importować** inne pliki:

\`\`\`markdown
# CLAUDE.md

## Architektura
@docs/architecture.md

## API
@docs/api-reference.md

## Konwencje
@docs/coding-standards.md
\`\`\`

Gdy Claude czyta CLAUDE.md, automatycznie wciąga treść z importowanych plików. To jak dołączanie załączników do instrukcji.

Kiedy używać importów:
| Sytuacja | Rozwiązanie |
|----------|-------------|
| CLAUDE.md ma ponad 200 linii | Podziel na mniejsze pliki i importuj |
| Dokumentacja API jest obszerna | Osobny plik, import w CLAUDE.md |
| Masz wspólne zasady dla wielu projektów | Plik globalny + import |

## Hierarchia plików konfiguracyjnych

Claude czyta instrukcje z **trzech poziomów** (każdy kolejny jest bardziej szczegółowy):

### Poziom 1: Globalny (~/.claude/CLAUDE.md)
Zasady dla **wszystkich** Twoich projektów. Tu wpisujesz:
- Preferowany język komunikacji (polski)
- Globalny styl commitów
- Uniwersalne zasady bezpieczeństwa

### Poziom 2: Projekt (./CLAUDE.md)
Zasady dla **tego konkretnego projektu**. Tu wpisujesz:
- Stack technologiczny
- Struktura folderów
- Konwencje nazewnictwa
- Integracje (Supabase, Stripe, itp.)

### Poziom 3: Folder (.claude/rules/)
Zasady dla **konkretnych części projektu**. Możesz tworzyć pliki w folderze \`.claude/rules/\`:

\`\`\`
.claude/
  rules/
    api.md          ← zasady dla plików API
    components.md   ← zasady dla komponentów
    database.md     ← zasady dla bazy danych
\`\`\`

Te pliki mogą mieć specjalne nagłówki, które mówią Claude **kiedy** je czytać:

\`\`\`markdown
---
globs: src/api/**
---
# Zasady API
- Każdy endpoint musi mieć walidację inputu
- Zawsze zwracaj odpowiedni status HTTP
\`\`\`

Claude przeczyta ten plik **tylko** gdy pracuje z plikami w folderze \`src/api/\`.

## Lokalny vs współdzielony CLAUDE.md

| Plik | Kto widzi | Do czego |
|------|-----------|----------|
| \`CLAUDE.md\` (w głównym folderze) | Commitowany do git, wszyscy w zespole | Zasady projektu, stack, konwencje |
| \`.claude/CLAUDE.local.md\` | **Nie commitowany** (w .gitignore) | Twoje prywatne preferencje |

To ważne rozróżnienie. W pliku lokalnym możesz trzymać:
- Ścieżki specyficzne dla Twojego komputera
- Osobiste preferencje stylu
- Notatki, których nie chcesz udostępniać zespołowi

## Zaawansowane techniki

### Definiowanie "osobowości"
\`\`\`markdown
## Styl odpowiedzi
- Odpowiadaj zwięźle, bez zbędnych wyjaśnień
- Nie pytaj o potwierdzenie przy prostych zadaniach
- Przy złożonych — najpierw pokaż plan
\`\`\`

### Definiowanie zakazów
\`\`\`markdown
## NIGDY nie rób
- Nie zmieniaj pliku middleware.ts
- Nie usuwaj komentarzy TODO
- Nie zmieniaj wersji zależności w package.json
\`\`\`

### Definiowanie procedur
\`\`\`markdown
## Po każdej zmianie
1. Uruchom npm run build
2. Sprawdź TypeScript errors
3. Jeśli są testy — uruchom npm test
\`\`\`

## Weryfikacja konfiguracji

Chcesz sprawdzić, czy Claude poprawnie czyta Twój CLAUDE.md? Wpisz:

> "Pokaż mi jakie instrukcje z CLAUDE.md stosujesz w tym projekcie"

Claude wypisze, co przeczytał i jakie zasady stosuje. To dobry sposób na debugowanie konfiguracji.

## Podsumowanie

CLAUDE.md to nie tylko opis projektu — to pełnoprawny system konfiguracji. Używaj importów (@file) do podziału treści, hierarchii plików do różnych poziomów szczegółowości i folderu \`.claude/rules/\` do zasad kontekstowych. Lokalne pliki trzymaj poza gitem.`,
  },
  {
    id: "ca6",
    path_id: "cc-action",
    module_name: "Kontekst i pamięć",
    module_order: 2,
    title: "Auto-memory i wznawianie sesji",
    slug: "auto-memory-i-wznawianie-sesji",
    duration_minutes: 6,
    order: 3,
    content: `# Auto-memory i wznawianie sesji

## Problem: Claude zapomina między sesjami

Zamykasz terminal, idziesz na obiad, wracasz, piszesz \`claude\` — i Claude nie pamięta nic z poprzedniej rozmowy. To jak pracownik, który codziennie rano zapomina co robił wczoraj.

Na szczęście są rozwiązania: **auto-memory**, komenda **/memory** i **wznawianie sesji**.

## Auto-memory — Claude notuje sam

Claude Code ma system **automatycznej pamięci**. Gdy podczas rozmowy pojawią się ważne ustalenia, Claude może sam zapisać je do pliku pamięci (\`~/.claude/memory.md\` lub \`CLAUDE.md\`).

Kiedy auto-memory się włącza:
- Gdy ustalicie ważną konwencję ("od teraz commit messages po angielsku")
- Gdy poprawisz Claude'a i powie "zapamiętam na przyszłość"
- Gdy wyraźnie powiesz "zapamiętaj to"

Co Claude zapamiętuje:
| Zapamiętuje | Nie zapamiętuje |
|-------------|-----------------|
| Konwencje projektu | Szczegóły pojedynczego zadania |
| Twoje preferencje | Treść konkretnych plików |
| Ważne decyzje architektoniczne | Tymczasowe ustalenia |
| Nazwy kluczowych plików | Każde zdanie z rozmowy |

## /memory — ręczne zarządzanie pamięcią

Komenda \`/memory\` pozwala Ci **ręcznie** zarządzać tym, co Claude pamięta:

### Dodawanie do pamięci
> "/memory Projekt używa Supabase Auth z magicznym linkiem, nie hasłami"

### Przeglądanie pamięci
> "/memory"
Pokazuje co Claude ma zapisane.

### Kiedy używać /memory?
- Na początku nowego projektu — wpisz kluczowe informacje
- Gdy podejmujesz ważną decyzję architektoniczną
- Gdy Claude powtarza ten sam błąd — zapisz korektę do pamięci

## /resume — wznawianie sesji

\`/resume\` to komenda, która pozwala **wrócić do poprzedniej rozmowy**. Zamiast zaczynać od zera, kontynuujesz tam, gdzie skończyłeś.

Jak to działa:
1. Zamykasz terminal (Ctrl+C lub po prostu zamykasz okno)
2. Wracasz, piszesz \`claude\`
3. Wpisujesz \`/resume\`
4. Claude ładuje poprzednią rozmowę i kontynuuje

Możesz też od razu uruchomić z flagą:
\`\`\`
claude --resume
\`\`\`

### Kiedy /resume jest przydatne?
| Sytuacja | Użyj /resume? |
|----------|---------------|
| Przerwa na obiad w trakcie zadania | Tak |
| Pad komputera w połowie pracy | Tak |
| Nowe, niezwiązane zadanie | Nie — lepiej /clear |
| Kontynuacja wczorajszej pracy | Tak, jeśli to to samo zadanie |

## Strategie pamięci — co robić na co dzień

### Strategia 1: "Notatka na start dnia"
Na początku dnia pracy napisz do Claude:
> "Kontynuuję pracę nad systemem zamówień. Wczoraj skończyłem formularz, dziś robię integrację z płatnościami."

Jeden zdanie kontekstu oszczędza 10 minut nieporozumień.

### Strategia 2: "Zapisuj decyzje"
Gdy podejmiesz ważną decyzję:
> "Zapamiętaj: zdecydowaliśmy, że ceny będą w groszach (integer), nie w złotych (float)"

Claude zapisze to i nie będzie już proponował cen jako liczb zmiennoprzecinkowych.

### Strategia 3: "CLAUDE.md jako źródło prawdy"
Najważniejsze ustalenia wpisuj do CLAUDE.md, nie tylko do pamięci. CLAUDE.md jest czytany **zawsze** na starcie rozmowy — to gwarancja, że Claude nie zapomni.

## Jak to wszystko współgra?

\`\`\`
Poziom 1: CLAUDE.md        → czytany ZAWSZE
Poziom 2: Auto-memory      → dodawany automatycznie
Poziom 3: /memory           → dodawany ręcznie
Poziom 4: /resume           → kontynuacja rozmowy
\`\`\`

Najtrwalsze są informacje w CLAUDE.md. Najmniej trwałe — /resume (trwa tylko do następnej sesji).

## Podsumowanie

Claude ma trzy systemy pamięci: auto-memory (zapisuje sam), /memory (zapisujesz Ty) i /resume (wznawia rozmowę). Najważniejsze ustalenia trzymaj w CLAUDE.md — to jedyne miejsce, które Claude czyta zawsze, niezależnie od sesji.`,
  },

  // ═══════════════════════════════════════════════════════════════
  // MODULE 3: Komunikacja i wizualizacja (module_order: 3)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "ca7",
    path_id: "cc-action",
    module_name: "Komunikacja i wizualizacja",
    module_order: 3,
    title: "Screenshoty i obrazy — pokaż Claude co widzisz",
    slug: "screenshoty-i-obrazy-pokaz-claude-co-widzisz",
    duration_minutes: 5,
    order: 1,
    content: `# Screenshoty i obrazy — pokaż Claude co widzisz

## Obraz wart więcej niż tysiąc słów

Próbowałeś kiedyś opisać słowami co widzisz na ekranie? "Ten przycisk jest za duży, a tekst nachodzi na obrazek, i w prawym górnym rogu jest dziwna linia..." — to frustrujące i nieprecyzyjne.

Claude Code rozumie obrazy. Możesz mu **pokazać** co widzisz, zamiast opisywać.

## Jak wkleić screenshot?

### Metoda 1: Wklej ze schowka
1. Zrób screenshot (\`Cmd + Shift + 4\` na macOS)
2. W terminalu z Claude wklej obraz (\`Cmd + V\`)
3. Claude zobaczy obraz i zrozumie kontekst

### Metoda 2: Podaj ścieżkę do pliku
> "Spójrz na screenshot w ~/Desktop/bug-screenshot.png i powiedz co jest nie tak"

### Metoda 3: Przeciągnij i upuść
W niektórych terminalach możesz po prostu przeciągnąć plik obrazu do okna czatu.

## Co Claude widzi na screenshocie?

Claude analizuje obraz jak człowiek — widzi:
- **Układ strony** — co jest gdzie, jakie elementy są widoczne
- **Kolory** — czy coś jest za ciemne, za jasne, nieczytelne
- **Tekst na obrazie** — czyta tekst widoczny na screenshocie
- **Błędy wizualne** — nachodzące elementy, złe wyrównanie, brakujące grafiki
- **Stan interfejsu** — komunikaty błędów, puste pola, spinner ładowania

## Kiedy używać screenshotów?

| Sytuacja | Przykład polecenia |
|----------|-------------------|
| **Błąd wizualny** | "Spójrz na ten screenshot — przycisk nachodzi na tekst. Napraw to." |
| **Porównanie z designem** | "Oto mockup z Figmy. Zrób żeby strona wyglądała tak samo." |
| **Błąd w przeglądarce** | "Mam taki błąd w konsoli [screenshot]. Co to znaczy i jak naprawić?" |
| **Responsywność** | "Tak wygląda strona na telefonie [screenshot]. Menu się rozjeżdża." |

## Praktyczne przykłady

### Raportowanie błędu wizualnego
Zamiast: *"Na stronie produktu cena jest ucięta po prawej stronie i nie widać groszy"*

Lepiej: *"Spójrz na ten screenshot [wklej]. Napraw wyświetlanie ceny."*

Claude widzi dokładnie co jest nie tak i naprawia celniej.

### Implementacja z mockupu
> "Oto design strony głównej [screenshot z Figmy]. Zaimplementuj to w komponencie HeroSection."

Claude porówna obecny wygląd z mockupem i dopasuje.

### Debugging z konsoli
Zrzut ekranu błędu z przeglądarki (F12 > Console) to **złoto dla Claude'a**. Widzi dokładny komunikat błędu, stack trace i kontekst.

## Ograniczenia

- Claude **nie widzi Twojego ekranu na żywo** — musisz zrobić screenshot
- Bardzo długie screenshoty (np. cała strona) mogą być nieczytelne — lepiej przyciąć do problematycznego fragmentu
- Claude nie widzi animacji — screenshot to pojedyncza klatka

## Wskazówki

1. **Przycinaj screenshoty** — pokaż konkretny fragment, nie cały ekran
2. **Zaznacz problem** — narysuj strzałkę lub kółko wokół problemu (Preview na macOS: Cmd + Shift + A)
3. **Dodaj kontekst tekstem** — "Ten screenshot jest z /produkty na Safari, iPhone 14"

## Podsumowanie

Screenshoty to najszybszy sposób na komunikację wizualną z Claude. Zamiast opisywać problem słowami, pokaż go. Claude rozumie obrazy i potrafi na ich podstawie naprawić błędy wizualne, zaimplementować design i zdiagnozować problemy.`,
  },
  {
    id: "ca8",
    path_id: "cc-action",
    module_name: "Komunikacja i wizualizacja",
    module_order: 3,
    title: "Diff view — przeglądanie zmian",
    slug: "diff-view-przegladanie-zmian",
    duration_minutes: 6,
    order: 2,
    content: `# Diff view — przeglądanie zmian

## Co to jest diff?

**Diff** (od angielskiego "difference" — różnica) to zestawienie tego, co **było** i co **jest teraz** w pliku. Pokazuje dokładnie które linie zostały dodane, usunięte lub zmienione.

Analogia: wyobraź sobie, że porównujesz dwie wersje umowy. Prawnik zaznacza na żółto co dodano i przekreśla co usunięto. Diff robi dokładnie to samo, ale dla kodu.

## Jak wygląda diff?

\`\`\`diff
- <button className="bg-gray-500 text-white">
+ <button className="bg-green-500 text-white font-bold">
    Kup teraz
  </button>
\`\`\`

| Symbol | Znaczenie | Kolor |
|--------|-----------|-------|
| \`-\` | Usunięta linia | Czerwony |
| \`+\` | Dodana linia | Zielony |
| (brak) | Niezmieniona linia | Szary |

W powyższym przykładzie: zmieniono kolor przycisku z szarego na zielony i dodano pogrubienie.

## Kiedy widzisz diff?

### 1. Gdy Claude proponuje zmianę
Gdy Claude chce edytować plik, pokazuje Ci diff:
\`\`\`
Claude wants to edit src/components/Button.tsx

- bg-gray-500
+ bg-green-500

[y] Accept  [n] Reject  [e] Edit
\`\`\`

To Twój moment decyzji. Sprawdź diff i zdecyduj:
- **y** — zmiana wygląda dobrze, akceptuję
- **n** — nie chcę tej zmiany
- **e** — chcę zmodyfikować to co Claude proponuje

### 2. Komenda /diff
Wpisz \`/diff\` w rozmowie z Claude, żeby zobaczyć **wszystkie zmiany** od początku sesji. To przydatne, gdy Claude zrobił wiele zmian i chcesz je przejrzeć naraz.

### 3. Git diff przed commitem
Przed zapisaniem zmian (commitem) warto zobaczyć co się zmieniło:
> "Pokaż mi git diff — co się zmieniło?"

Claude uruchomi \`git diff\` i pokaże wszystkie modyfikacje.

## Jak czytać diff — poradnik dla nie-programistów

Nie musisz rozumieć każdej linii kodu. Szukaj tych rzeczy:

### 1. Nazwa pliku
Na górze diffa widać **który plik** się zmienił. Sprawdź czy to właściwy plik.

### 2. Rozmiar zmiany
Dużo zielonych linii (dodania) = Claude stworzył sporo nowego kodu. Kilka linii = drobna zmiana. Jeśli spodziewałeś się drobnej zmiany, a diff jest ogromny — zapytaj Claude'a dlaczego.

### 3. Usunięcia
Czerwone linie (usunięcia) wymagają uwagi. Claude coś usunął — czy to było zamierzone? Jeśli nie jesteś pewien, zapytaj:
> "Dlaczego usunąłeś te linie? Co one robiły?"

### 4. Czytelne fragmenty
Nawet bez znajomości kodu, możesz zauważyć:
- Zmianę tekstu (np. "Witamy" → "Cześć")
- Zmianę kolorów (np. "gray-500" → "green-500")
- Dodanie nowych elementów (np. nowy \`<button>\`)

## Praktyka: review przed commitem

Dobra praktyka to **zawsze** przejrzeć zmiany przed commitem:

1. Claude kończy zadanie
2. Wpisujesz: *"Pokaż podsumowanie zmian"*
3. Claude listuje zmienione pliki i kluczowe modyfikacje
4. Sprawdzasz czy wszystko się zgadza
5. Dopiero wtedy: *"Ok, commituj z opisem 'feat: add green buy button'"*

To jak **sprawdzenie paragonu** przed zapłaceniem — zajmuje sekundę, a może uratować przed problemem.

## Cofanie zmian

Zaakceptowałeś zmianę, ale jest źle? Masz opcje:
- **Cmd + Z** w edytorze — cofnij ostatnią zmianę
- \`git checkout -- nazwa-pliku\` — przywróć plik do ostatniego commita
- Powiedz Claude: *"Cofnij ostatnią zmianę w pliku X"*

## Podsumowanie

Diff to zestawienie zmian w pliku — czerwone linie usunięte, zielone dodane. Zawsze przeglądaj diff przed akceptacją zmian Claude'a. Używaj \`/diff\` do przeglądu wszystkich zmian w sesji. Nie musisz rozumieć kodu — szukaj nazw plików, rozmiaru zmian i czytelnych fragmentów tekstowych.`,
  },
  {
    id: "ca9",
    path_id: "cc-action",
    module_name: "Komunikacja i wizualizacja",
    module_order: 3,
    title: "Tryby myślenia — kiedy który",
    slug: "tryby-myslenia-kiedy-ktory",
    duration_minutes: 6,
    order: 3,
    content: `# Tryby myślenia — kiedy który

## Claude nie zawsze myśli tak samo

Wyobraź sobie, że prosisz kogoś o pomoc. Przy prostym pytaniu ("Która godzina?") nie potrzeba głębokiego namysłu. Ale przy złożonym problemie ("Jak zreorganizować firmę?") chcesz, żeby ktoś się dobrze zastanowił.

Claude Code ma **tryby myślenia**, które kontrolują jak głęboko analizuje problem.

## Trzy poziomy wysiłku (/effort)

Komenda \`/effort\` pozwala ustawić poziom myślenia:

| Poziom | Komenda | Jak Claude pracuje | Analogia |
|--------|---------|-------------------|----------|
| **Niski** | \`/effort low\` | Szybka, zwięzła odpowiedź. Minimum analizy | Odpowiedź SMS-em |
| **Średni** | \`/effort medium\` | Standardowe podejście. Dobry balans | Rozmowa telefoniczna |
| **Wysoki** | \`/effort high\` | Głęboka analiza, dokładny plan, rozważa alternatywy | Spotkanie projektowe |

### Kiedy jaki poziom?

| Zadanie | Rekomendowany /effort | Dlaczego |
|---------|-----------------------|----------|
| "Zmień tytuł strony" | low | Proste, jednokrokowe zadanie |
| "Dodaj nową stronę /regulamin" | medium | Kilka kroków, ale jasne co zrobić |
| "Zaprojektuj system uprawnień użytkowników" | high | Złożone, wiele decyzji architektonicznych |
| "Napraw literówkę" | low | Trywialne |
| "Przepisz moduł płatności" | high | Kluczowy moduł, potrzeba dokładności |

## Tryb domyślny vs tryb planowania (Plan mode)

Claude Code ma dwa główne tryby pracy:

### Tryb domyślny
Claude od razu zaczyna pracę — czyta pliki, edytuje, uruchamia komendy. Dobry dla jasnych, konkretnych zadań.

> "Zmień kolor nagłówka na niebieski"
→ Claude od razu edytuje plik. Gotowe.

### Tryb planowania
Claude najpierw **przedstawia plan**, a dopiero po Twojej akceptacji go realizuje. Dobry dla złożonych zadań.

Jak włączyć:
> "Zaplanuj dodanie systemu komentarzy. Nie implementuj — pokaż plan."

Albo użyj komendy:
\`\`\`
/effort high
\`\`\`

Przy wysokim wysiłku Claude naturalnie zaczyna od planu.

## Porównanie trybów — praktyczny przewodnik

| Cecha | Tryb domyślny | Tryb planowania |
|-------|--------------|-----------------|
| **Szybkość** | Szybki | Wolniejszy (ale dokładniejszy) |
| **Kontrola** | Mniejsza — Claude działa sam | Większa — akceptujesz plan |
| **Ryzyko błędu** | Wyższe przy złożonych zadaniach | Niższe — plan wyłapuje problemy |
| **Najlepszy dla** | Prostych zmian | Nowych funkcji, refaktoryzacji |

## Praktyczne wskazówki

### 1. Zacznij od medium, dostosuj w razie potrzeby
\`/effort medium\` to dobry domyślny poziom. Jeśli Claude daje za krótkie odpowiedzi — przełącz na high. Jeśli za długo myśli nad prostym zadaniem — przełącz na low.

### 2. Używaj high na początku projektu
Gdy zaczynasz nową funkcjonalność, warto żeby Claude dobrze przemyślał architekturę. Potem, przy drobnych poprawkach, przełącz na low/medium.

### 3. Nie bój się zmieniać trybu w trakcie
Możesz zacząć od \`/effort high\` (planowanie) i po akceptacji planu przełączyć na \`/effort medium\` (szybsza realizacja).

### 4. Tryb wysoki = lepsza jakość przy debugowaniu
Gdy Claude nie potrafi naprawić błędu, przełącz na \`/effort high\`. Głębsza analiza często znajduje przyczynę, której szybki tryb pomija.

## Analogia: gaz w samochodzie

- **Low** = jazda po mieście — szybko, bez zastanawiania się nad każdym zakrętem
- **Medium** = jazda po nieznanych drogach — uważnie, ale płynnie
- **High** = planowanie trasy na długą podróż — analiza mapy, tankowania, postoje

Nie jedziesz 200 km/h po osiedlu i nie 30 km/h na autostradzie. Dobierasz prędkość do sytuacji.

## Podsumowanie

Używaj \`/effort low\` dla prostych zadań, \`/effort medium\` jako domyślny, \`/effort high\` dla złożonych problemów. Tryb planowania daje więcej kontroli, ale zajmuje więcej czasu. Dostosowuj tryb do zadania — to klucz do efektywnej pracy z Claude.`,
  },

  // ═══════════════════════════════════════════════════════════════
  // MODULE 4: Automatyzacja i integracja (module_order: 4)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "ca10",
    path_id: "cc-action",
    module_name: "Automatyzacja i integracja",
    module_order: 4,
    title: "Własne automatyzacje — Skills i hooks",
    slug: "wlasne-automatyzacje-skills-i-hooks",
    duration_minutes: 8,
    order: 1,
    content: `# Własne automatyzacje — Skills i hooks

## Automatyzacja = mniej powtarzania

Jeśli za każdym razem mówisz Claude to samo — "po commicie uruchom build", "sprawdź TypeScript przed pushem", "dodaj testy po stworzeniu komponentu" — to znak, że potrzebujesz automatyzacji.

Claude Code oferuje dwa mechanizmy: **Skills** (umiejętności) i **Hooks** (haki automatyczne).

## Skills — nauczanie Claude nowych umiejętności

**Skill** to gotowy przepis, który Claude może wykonać na żądanie. To jak makro w Excelu — raz definiujesz, wielokrotnie używasz.

### Jak to działa?
Skill to plik Markdown (np. \`deploy.md\`) z instrukcjami, które Claude wykonuje gdy go "wywołasz".

### Przykład: skill do deploymentu

Plik \`.claude/skills/deploy.md\`:
\`\`\`markdown
# Deploy na produkcję

1. Uruchom npm run build
2. Sprawdź czy nie ma błędów TypeScript
3. Uruchom testy (npm test)
4. Jeśli wszystko przeszło — git add, commit, push
5. Poczekaj na Vercel deploy
6. Sprawdź czy strona działa
\`\`\`

Użycie w rozmowie:
> "/deploy" lub "Uruchom skill deploy"

Claude wykona wszystkie kroki po kolei.

### Kiedy tworzyć skill?
| Sytuacja | Czy robić skill? |
|----------|-----------------|
| Robisz to samo 3+ razy w tygodniu | Tak |
| Procedura ma więcej niż 3 kroki | Tak |
| Jednorazowe zadanie | Nie |
| Kroki wymagają Twojej decyzji na każdym etapie | Raczej nie |

## Hooks — automatyczne reagowanie na zdarzenia

**Hook** to automatyczna akcja, która uruchamia się **sama** przy określonym zdarzeniu. Nie musisz nic mówić — hook działa w tle.

### Rodzaje hooków

| Hook | Kiedy się uruchamia | Przykład użycia |
|------|---------------------|-----------------|
| **Pre-commit** | Przed commitem | Sprawdź lint i formatowanie |
| **Post-commit** | Po commicie | Wyślij powiadomienie |
| **Pre-push** | Przed pushem na serwer | Uruchom testy |
| **On file save** | Gdy plik jest zapisywany | Auto-formatowanie |

### Jak skonfigurować hook?

Hooki konfiguruje się w pliku \`.claude/settings.json\`:

\`\`\`json
{
  "hooks": {
    "pre-commit": ["npm run lint", "npm run typecheck"],
    "pre-push": ["npm test"]
  }
}
\`\`\`

Teraz za każdym razem, gdy Claude (lub Ty) będziesz commitować, automatycznie uruchomi się lint i sprawdzenie typów.

## Skills vs Hooks — porównanie

| Cecha | Skills | Hooks |
|-------|--------|-------|
| **Uruchomienie** | Ręczne (piszesz komendę) | Automatyczne (przy zdarzeniu) |
| **Kontrola** | Pełna — decydujesz kiedy | Brak — uruchamia się sam |
| **Złożoność** | Mogą być bardzo rozbudowane | Raczej proste, szybkie akcje |
| **Przykład** | Deploy, code review, setup | Lint, format, testy |

Analogia:
- **Skill** to jak przycisk "Uruchom raport" w systemie — klikasz gdy chcesz
- **Hook** to jak automatyczne zamykanie drzwi — dzieje się samo, bez Twojego udziału

## Praktyczne przykłady hooków

### Hook: auto-format po zapisie
Automatycznie formatuje kod po każdym zapisie pliku. Koniec z nierównym wcięciem.

### Hook: sprawdzenie bezpieczeństwa przed pushem
Przed wypchnięciem kodu na serwer, hook sprawdza czy nie commitnąłeś przypadkiem haseł lub kluczy API.

### Hook: build po commicie
Po każdym commicie automatycznie uruchamia build — od razu wiesz, czy coś się zepsuło.

## Tworzenie własnych Skills i Hooków

Poproś Claude:
> "Stwórz skill do generowania komponentu React z testem. Skill powinien pytać o nazwę komponentu i tworzyć plik .tsx oraz plik .test.tsx."

Albo:
> "Skonfiguruj hook pre-commit, który uruchamia npm run lint i npm run build."

Claude stworzy odpowiednie pliki i konfigurację.

## Podsumowanie

Skills to przepisy uruchamiane na żądanie — idealne dla powtarzalnych procedur. Hooks to automatyczne akcje przy zdarzeniach — idealne dla walidacji i formatowania. Zacznij od prostych hooków (lint, build) i dodawaj skills w miarę potrzeb.`,
  },
  {
    id: "ca11",
    path_id: "cc-action",
    module_name: "Automatyzacja i integracja",
    module_order: 4,
    title: "MCP Servers — rozszerzanie Claude",
    slug: "mcp-servers-rozszerzanie-claude",
    duration_minutes: 7,
    order: 2,
    content: `# MCP Servers — rozszerzanie Claude

## Problem: Claude nie zna Twoich usług

Domyślnie Claude Code umie czytać pliki, edytować kod i uruchamiać komendy. Ale **nie ma dostępu** do Twojej bazy danych, systemu płatności, Slacka czy Figmy. To jak pracownik, który ma dostęp do biura, ale nie ma loginów do żadnego systemu firmowego.

**MCP Servers** rozwiązują ten problem.

## Czym jest MCP?

**MCP** (Model Context Protocol) to standard, który pozwala podłączyć Claude'a do **zewnętrznych usług**. Każdy MCP Server daje Claude nowe umiejętności.

Analogia: pomyśl o MCP jak o **wtyczkach do przeglądarki**. Przeglądarka sama w sobie wyświetla strony — ale z wtyczką do blokowania reklam robi więcej. Claude sam w sobie czyta pliki — ale z MCP do Supabase zarządza bazą danych.

## Popularne MCP Servers

| MCP Server | Co daje Claude'owi | Przykład użycia |
|------------|--------------------|-----------------|
| **Supabase** | Dostęp do bazy danych, auth, storage | "Pokaż ostatnich 10 użytkowników z bazy" |
| **GitHub** | Pull requesty, issues, code review | "Stwórz PR z opisem zmian" |
| **Slack** | Wysyłanie wiadomości, czytanie kanałów | "Wyślij podsumowanie na kanał #dev" |
| **Figma** | Czytanie designów, komponentów | "Zaimplementuj ten design z Figmy" |
| **Stripe** | Płatności, subskrypcje, faktury | "Sprawdź status płatności klienta" |
| **Google Analytics** | Dane o ruchu, konwersje | "Pokaż ruch na stronie z ostatniego tygodnia" |

## Jak podłączyć MCP Server?

### Krok 1: Konfiguracja
MCP Servers konfiguruje się w pliku \`.claude/settings.json\` lub globalnie w \`~/.claude/settings.json\`:

\`\`\`json
{
  "mcpServers": {
    "supabase": {
      "type": "url",
      "url": "https://mcp.supabase.com"
    }
  }
}
\`\`\`

### Krok 2: Autoryzacja (OAuth)
Większość MCP Servers wymaga autoryzacji — logujesz się do usługi, żeby dać Claude'owi dostęp. To jak logowanie przez Google na stronie — klikasz "Zezwól" i gotowe.

### Krok 3: Używanie
Po podłączeniu Claude **automatycznie** wie, że ma nowe możliwości. Nie musisz mówić "użyj MCP Supabase" — po prostu mówisz:

> "Pokaż wszystkich użytkowników z tabeli users"

Claude sam użyje MCP Supabase, żeby wykonać zapytanie.

## MCP lokalne vs chmurowe

| Typ | Gdzie działa | Przykład | Plusy |
|-----|-------------|---------|-------|
| **Chmurowe** | Na serwerze usługi | Supabase, GitHub, Slack | Zero konfiguracji, auto-aktualizacje |
| **Lokalne** | Na Twoim komputerze | Google Ads MCP, custom MCP | Pełna kontrola, prywatność danych |

MCP lokalne to programy uruchomione na Twoim komputerze, które Claude odpytuje. Przydatne gdy:
- Usługa nie ma oficjalnego MCP
- Chcesz pełną kontrolę nad danymi
- Integrujesz się z wewnętrznym systemem firmy

## Bezpieczeństwo MCP

Ważne zasady:
- **Sprawdzaj uprawnienia** — daj Claude'owi tylko te uprawnienia, których potrzebuje
- **Nie dawaj write access bez potrzeby** — jeśli Claude ma tylko czytać dane, nie dawaj mu możliwości zapisu
- **Oficjalne MCP są bezpieczniejsze** — sprawdzone przez twórców usługi
- **Tokeny w env** — nigdy nie wpisuj tokenów bezpośrednio w konfiguracji

## Praktyczny przykład: Supabase MCP

Po podłączeniu Supabase MCP, Claude może:

| Akcja | Przykład polecenia |
|-------|-------------------|
| Czytać dane | "Pokaż 5 ostatnich zamówień" |
| Pisać dane | "Dodaj nowy produkt: Pellet Premium, 1200 zł/t" |
| Zarządzać tabelami | "Dodaj kolumnę 'telefon' do tabeli klientów" |
| Sprawdzać polityki RLS | "Czy tabela orders ma włączone RLS?" |
| Edge Functions | "Zadeploy edge function do wysyłania maili" |

Wszystko przez naturalną rozmowę, bez pisania SQL ręcznie.

## Podsumowanie

MCP Servers to wtyczki rozszerzające możliwości Claude'a. Podłączasz usługę (Supabase, GitHub, Slack), autoryzujesz dostęp i Claude zyskuje nowe umiejętności. Konfiguracja w settings.json, autoryzacja przez OAuth. Pamiętaj o bezpieczeństwie — dawaj minimalne uprawnienia.`,
  },
  {
    id: "ca12",
    path_id: "cc-action",
    module_name: "Automatyzacja i integracja",
    module_order: 4,
    title: "Integracja z GitHub — PR, code review, CI/CD",
    slug: "integracja-z-github-pr-code-review-cicd",
    duration_minutes: 8,
    order: 3,
    content: `# Integracja z GitHub — PR, code review, CI/CD

## GitHub to Twoje centrum dowodzenia

Jeśli Twój kod jest na GitHub, Claude Code potrafi z nim pracować na wielu poziomach — od tworzenia commitów po automatyczne naprawianie błędów z CI/CD.

## Git workflow z Claude — od zera

Typowy przepływ pracy wygląda tak:

\`\`\`
1. Stwórz branch    →  "Stwórz branch feat/newsletter"
2. Koduj z Claude   →  "Dodaj formularz newslettera"
3. Commituj         →  "Commituj z opisem 'feat: add newsletter form'"
4. Push             →  "Pushuj na GitHub"
5. Stwórz PR        →  "Stwórz pull request"
6. Code review      →  Ktoś (lub Claude) sprawdza
7. Merge            →  "Zmerdżuj PR"
\`\`\`

Claude potrafi wykonać **każdy** z tych kroków. Ty mówisz co, Claude robi jak.

## Pull Requesty (PR) — tworzenie

**Pull Request** to prośba o dodanie Twoich zmian do głównej wersji kodu. To jak wysłanie dokumentu do akceptacji szefowi.

### Tworzenie PR z Claude
> "Stwórz pull request z opisem zmian. Tytuł: 'Dodanie formularza newslettera'"

Claude:
1. Sprawdza jakie zmiany są na branchu
2. Tworzy PR z tytułem i opisem
3. Listuje zmienione pliki
4. Opisuje co i dlaczego zostało zmienione

### Dobry opis PR — co powinien zawierać

| Sekcja | Opis |
|--------|------|
| **Summary** | 2-3 zdania co zostało zrobione |
| **Changes** | Lista konkretnych zmian |
| **Test plan** | Jak sprawdzić czy działa |
| **Screenshots** | Jeśli zmiana jest wizualna |

Claude generuje to automatycznie na podstawie commitów.

## Code Review z Claude

Claude potrafi przeglądać kod — zarówno Twój, jak i cudzych PR-ów.

### Przeglądanie własnych zmian
> "Przejrzyj moje zmiany i powiedz czy widzisz jakieś problemy"

Claude sprawdzi:
- Błędy logiczne
- Problemy z bezpieczeństwem (hardcoded secrets, brak walidacji)
- Niezgodności z konwencjami projektu
- Brakujące edge case'y

### Przeglądanie cudzego PR
> "Przejrzyj PR #42 na GitHub"

Claude pobierze PR, przeczyta zmiany i da feedback.

## CI/CD — automatyczne budowanie i testowanie

**CI/CD** to automatyczny proces, który uruchamia się po pushu kodu:
- **CI** (Continuous Integration) — automatycznie buduje i testuje kod
- **CD** (Continuous Deployment) — automatycznie deployuje na serwer

### Vercel + GitHub = automatyczny deploy
Jeśli używasz Vercel, każdy push na GitHub automatycznie:
1. Buduje Twój projekt
2. Uruchamia testy (jeśli są skonfigurowane)
3. Deployuje na preview URL (branch) lub produkcję (main)

### Gdy CI/CD się nie powiedzie
Czasem build na GitHub/Vercel nie przechodzi. Claude może pomóc:

> "Build na Vercel nie przeszedł. Oto błąd: [wklej błąd]. Napraw to."

Claude przeczyta błąd, znajdzie przyczynę i naprawi.

## Auto-fix PR — Claude naprawia sam

Jedna z najpotężniejszych funkcji: Claude może automatycznie naprawiać PR-y, które nie przeszły CI:

1. CI wykrywa błąd w PR
2. Claude dostaje powiadomienie
3. Claude analizuje błąd
4. Claude tworzy commit z poprawką
5. CI uruchamia się ponownie

To jak **pracownik QA**, który sam naprawia znalezione błędy.

## Praktyczne komendy

| Co chcesz zrobić | Co powiedzieć Claude'owi |
|------------------|--------------------------|
| Stworzyć branch | "Stwórz branch fix/login-bug" |
| Commitnąć zmiany | "Commituj z opisem 'fix: resolve login redirect'" |
| Pushnąć na GitHub | "Pushuj na origin" |
| Stworzyć PR | "Stwórz PR do brancha main" |
| Przejrzeć PR | "Przejrzyj PR #15" |
| Naprawić błąd CI | "Build nie przeszedł, oto log: [wklej]. Napraw." |
| Zmerdżować | "Zmerdżuj PR #15" |

## Dobre praktyki

1. **Jeden PR = jedna funkcja** — nie mieszaj wielu zmian w jednym PR
2. **Descriptive branch names** — \`feat/newsletter\`, nie \`fix1\`
3. **Commituj często** — małe commity łatwiej przeglądać
4. **Zawsze review przed merge** — nawet jeśli sam piszesz kod
5. **Nie pushuj na main bezpośrednio** — zawsze przez PR

## Podsumowanie

Claude Code integruje się z GitHub na każdym etapie: tworzenie branchy, commitów, PR-ów, code review i naprawianie błędów CI/CD. Używaj branchy i PR-ów zamiast pushowania na main. Claude automatycznie generuje opisy PR-ów i potrafi naprawiać błędy z CI.`,
  },
  {
    id: "ca13",
    path_id: "cc-action",
    module_name: "Automatyzacja i integracja",
    module_order: 4,
    title: "/batch i praca równoległa",
    slug: "batch-i-praca-rownolegla",
    duration_minutes: 6,
    order: 4,
    content: `# /batch i praca równoległa

## Problem: jedno zadanie na raz to za mało

Standardowo rozmawiasz z Claude jak z jedną osobą — dajesz zadanie, czekasz, dajesz następne. Ale co jeśli masz **pięć niezależnych zadań**? Czekanie na każde po kolei to strata czasu.

**Praca równoległa** pozwala uruchomić wiele instancji Claude'a jednocześnie.

## Czym jest /batch?

\`/batch\` to tryb, w którym dajesz Claude'owi **listę zadań**, a on wykonuje je jedno po drugim (lub kieruje do równoległych agentów). To jak danie listy zakupów zamiast mówienia "kup mleko... ok teraz kup chleb... ok teraz kup masło".

### Przykład /batch
> "Wykonaj te zadania:
> 1. Napraw literówkę na stronie /o-nas — 'firam' powinno być 'firma'
> 2. Zmień kolor footer z szarego na ciemnoniebieski
> 3. Dodaj meta description do strony /kontakt
> 4. Usuń nieużywany import w pliku Header.tsx"

Claude wykona wszystkie cztery zadania w jednym przebiegu.

## Równoległe agenty (parallel agents)

Dla zaawansowanych: Claude Code pozwala uruchomić **kilka agentów jednocześnie**, każdy pracujący nad innym zadaniem.

Jak to działa:
\`\`\`
Terminal 1: claude → "Dodaj stronę cennika"
Terminal 2: claude → "Napraw formularz kontaktowy"
Terminal 3: claude → "Zaktualizuj README"
\`\`\`

Trzy niezależne zadania — trzy instancje Claude — trzy wyniki naraz.

### Kiedy to ma sens?

| Sytuacja | Równoległa praca? | Dlaczego |
|----------|-------------------|----------|
| Zadania dotyczą **różnych plików** | Tak | Nie ma konfliktów |
| Zadania dotyczą **tego samego pliku** | Nie | Mogą się nadpisać |
| Zadania są od siebie **niezależne** | Tak | Nie czekają na siebie |
| Jedno zadanie **zależy od drugiego** | Nie | Trzeba sekwencyjnie |

## Worktrees — każdy agent w swoim "świecie"

**Git worktree** to technika, która tworzy osobną kopię projektu dla każdego agenta. Dzięki temu agenty nie wchodzą sobie w drogę.

Analogia: zamiast dwóch kucharzy w jednej kuchni (ryzyko kolizji), każdy dostaje **własną kuchnię** z kopią składników.

Jak to uruchomić:
\`\`\`bash
git worktree add ../moj-projekt-feature1 feat/feature1
cd ../moj-projekt-feature1
claude
\`\`\`

Teraz Claude pracuje na osobnej kopii projektu. Gdy skończy, mergujesz zmiany do głównego brancha.

## Praktyczny scenariusz: rebranding

Masz 4 zadania rebrandingowe. Zamiast robić je sekwencyjnie (40 minut), uruchamiasz równolegle (10 minut):

| Agent | Zadanie | Pliki |
|-------|---------|-------|
| Agent 1 | Zmień logo i kolory w nagłówku | Header.tsx, globals.css |
| Agent 2 | Zaktualizuj stronę "O nas" | about/page.tsx |
| Agent 3 | Zmień stopkę i dane kontaktowe | Footer.tsx |
| Agent 4 | Zaktualizuj meta tagi i SEO | layout.tsx, sitemap.ts |

Każdy agent pracuje na swoich plikach — zero konfliktów, czterokrotne przyspieszenie.

## Ograniczenia i pułapki

### 1. Nie wszystko nadaje się do równoległości
Jeśli zadanie B zależy od wyniku zadania A — musisz je robić sekwencyjnie.

### 2. Konflikty plików
Dwa agenty edytujące ten sam plik = problemy. Planuj podział tak, żeby pliki się nie pokrywały.

### 3. Koszt
Każda równoległa instancja Claude zużywa tokeny. 4 agenty = 4x koszt. Używaj mądrze.

### 4. Merge na końcu
Po pracy równoległej musisz **scalić** zmiany. Jeśli korzystasz z worktrees i branchy, git pomoże:
> "Zmerdżuj branch feat/new-header do main"

## Kiedy używać czego?

| Podejście | Kiedy | Oszczędność czasu |
|-----------|-------|-------------------|
| **Sekwencyjnie** (jedno po drugim) | Zadania zależne od siebie | Brak — ale bezpieczne |
| **/batch** (lista zadań) | Proste, niezależne zadania | Umiarkowana |
| **Równoległe agenty** | Duże, niezależne zadania | Duża (2-4x szybciej) |
| **Worktrees** | Złożone zadania wymagające izolacji | Duża + bezpieczne |

## Podsumowanie

/batch pozwala zlecić listę zadań naraz. Równoległe agenty przyspieszają pracę 2-4 razy. Worktrees izolują agentów, eliminując konflikty. Kluczowa zasada: równolegle tylko zadania niezależne, dotyczące różnych plików.`,
  },
];
