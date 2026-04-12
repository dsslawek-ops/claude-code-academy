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
];
