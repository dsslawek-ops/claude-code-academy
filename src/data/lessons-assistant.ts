import { Lesson } from "@/types/database";

export const lessonsAssistant: Lesson[] = [
  // ═══════════════════ MODUŁ 1: Pierwsze kroki ═══════════════════
  {
    id: "as1",
    path_id: "assistant",
    module_name: "Pierwsze kroki",
    module_order: 1,
    title: "Co to jest Claude Code — szybkie wprowadzenie",
    slug: "co-to-jest-claude-code",
    duration_minutes: 5,
    order: 1,
    content: `## Co to jest Claude Code

### W jednym zdaniu

Claude Code to asystent wbudowany w program do pracy z kodem (VS Code). Piszesz mu po polsku co chcesz zrobić, a on to robi za Ciebie.

### Gdzie go znajdziesz

1. Otwórz program **VS Code** (ikona niebieskiego edytora)
2. Po lewej stronie zobaczysz panel z ikoną Claude
3. Kliknij tę ikonę — otworzy się okno czatu

Jeśli nie widzisz ikony, poproś osobę techniczną o zainstalowanie rozszerzenia "Claude Code" w VS Code.

### Jak wysłać pierwszą wiadomość

1. Kliknij w pole tekstowe na dole panelu Claude
2. Napisz po polsku, np.: **"Pokaż mi jakie strony ma ten projekt"**
3. Naciśnij **Enter**
4. Claude przeczyta pliki projektu i odpowie

To naprawdę takie proste. Piszesz co chcesz — Claude robi.

### Co Claude potrafi

- **Zmienić tekst** na stronie — "Zmień tytuł na Witamy w naszej firmie"
- **Znaleźć plik** — "Gdzie jest strona kontaktowa?"
- **Poprawić błąd** — "Na stronie wyświetla się error, napraw to"
- **Dodać treść** — "Dodaj nowy akapit pod opisem usług"

### Czego NIE musisz umieć

Nie musisz znać się na programowaniu. Nie musisz wiedzieć jak działają pliki kodu. Claude rozumie polskie polecenia i sam wie co z nimi zrobić.

### Ważna zasada

Claude zmienia prawdziwe pliki na Twoim komputerze. Zanim zatwierdzisz zmianę, zawsze możesz powiedzieć "pokaż mi co zmienisz" albo "cofnij to". Nie bój się pytać — Claude odpowiada cierpliwie.

### Podsumowanie

Claude Code to jak rozmowa z pomocnym kolegą, który siedzi obok i zmienia rzeczy w projekcie gdy go poprosisz. Ty mówisz co, on robi jak.`,
  },
  {
    id: "as2",
    path_id: "assistant",
    module_name: "Pierwsze kroki",
    module_order: 1,
    title: "Jak rozmawiać z Claude — praktyczne przykłady",
    slug: "jak-rozmawiac-z-claude",
    duration_minutes: 6,
    order: 2,
    content: `## Jak rozmawiać z Claude

### Zasada nr 1: pisz jak do człowieka

Nie musisz używać specjalnego języka. Pisz tak, jakbyś prosił kolegę z biura o pomoc. Po polsku, zwykłymi zdaniami.

### 10 przykładów na co dzień

Oto gotowe polecenia, które możesz skopiować i użyć od razu:

**1. Zmiana tekstu:**
> Zmień tytuł strony głównej na "Najlepsze pelety w Polsce"

**2. Znalezienie pliku:**
> Gdzie jest strona z kontaktem? Pokaż mi ścieżkę do pliku

**3. Poprawienie błędu:**
> Na stronie wyświetla się "undefined" zamiast nazwy produktu — napraw to

**4. Dodanie nowego tekstu:**
> Dodaj pod sekcją "O nas" nowy akapit z tekstem: "Działamy od 2015 roku"

**5. Zmiana numeru telefonu:**
> Znajdź numer telefonu 123-456-789 i zamień go na 987-654-321 we wszystkich plikach

**6. Sprawdzenie co jest na stronie:**
> Pokaż mi co wyświetla się na stronie głównej — jaki jest tytuł i opis

**7. Dodanie nowej podstrony:**
> Stwórz nową stronę "Regulamin" z tekstem który Ci podam

**8. Zmiana koloru:**
> Zmień kolor przycisku "Wyślij" z niebieskiego na zielony

**9. Sprawdzenie czy strona działa:**
> Uruchom stronę lokalnie i powiedz mi czy są jakieś błędy

**10. Zapisanie zmian:**
> Zrób commit i push z opisem "aktualizacja treści strony"

### Gdy Claude czegoś nie rozumie

Napisz po prostu jeszcze raz, inaczej. Np. zamiast "zmień header" napisz "zmień duży napis na górze strony". Im prościej, tym lepiej.

### Gdy efekt nie pasuje

Powiedz wprost:
- "Cofnij to"
- "Nie o to chodziło, chcę żeby..."
- "Zrób to inaczej"

Claude nie obrazi się na poprawki. Możesz prosić o zmiany ile razy chcesz.`,
  },
  {
    id: "as3",
    path_id: "assistant",
    module_name: "Pierwsze kroki",
    module_order: 1,
    title: "Skróty klawiszowe na co dzień",
    slug: "skroty-klawiszowe",
    duration_minutes: 4,
    order: 3,
    content: `## Skróty klawiszowe na co dzień

### Tylko 5 skrótów — to wystarczy

Nie musisz uczyć się dziesiątek kombinacji klawiszy. Te pięć pokryje 90% Twojej pracy.

### Tabela skrótów

| Skrót | Co robi | Kiedy użyć |
|-------|---------|------------|
| **Enter** | Wysyła wiadomość do Claude | Gdy skończysz pisać polecenie |
| **Shift + Enter** | Nowa linia (bez wysyłania) | Gdy chcesz napisać dłuższą wiadomość w kilku linijkach |
| **Cmd + Esc** | Otwiera/zamyka panel Claude | Gdy chcesz szybko otworzyć lub schować Claude |
| **Option + K** | Wstawia nazwę pliku | Gdy chcesz powiedzieć Claude o konkretnym pliku |
| **Cmd + Shift + P** | Otwiera paletę komend | Gdy szukasz jakiejś funkcji VS Code |

### Jak zapamiętać

**Enter** — to znasz z każdego czatu. Napisałeś, wysyłasz.

**Shift + Enter** — też znasz z WhatsAppa czy Messengera. Nowa linia bez wysyłania.

**Cmd + Esc** — jak wyłącznik światła. Jedno kliknięcie = Claude się pojawia. Drugie = znika.

**Option + K** — gdy Claude pyta "który plik?" albo chcesz mu wskazać konkretny plik. Naciśnij i wybierz plik z listy.

**Cmd + Shift + P** — "paleta komend". Wpisz co szukasz, np. "Claude" i zobaczysz wszystkie opcje związane z Claude Code.

### Wskazówka

Nie musisz zapamiętywać tego od razu. Wydrukuj sobie tę tabelkę i przyklej obok monitora. Po tygodniu będziesz używać tych skrótów bez myślenia.

### Bonus

Jeśli Claude pracuje i chcesz go zatrzymać, naciśnij **Escape**. To jak powiedzenie "stop, poczekaj".

### Na Windowsie

Jeśli pracujesz na Windowsie zamiast Maca, zamień **Cmd** na **Ctrl**. Reszta działa tak samo. Czyli Ctrl + Esc zamiast Cmd + Esc itd.`,
  },

  // ═══════════════════ MODUŁ 2: Codzienne zadania ═══════════════════
  {
    id: "as4",
    path_id: "assistant",
    module_name: "Codzienne zadania",
    module_order: 2,
    title: "Edycja tekstu i treści na stronie",
    slug: "edycja-tekstu-i-tresci",
    duration_minutes: 5,
    order: 1,
    content: `## Edycja tekstu i treści na stronie

### Najczęstsze zadanie

Zmiana tekstu na stronie to pewnie 80% tego, o co poprosi Cię szef. "Zmień numer telefonu", "popraw literówkę", "dodaj nowy akapit". Claude robi to w kilka sekund.

### Gotowe polecenia do skopiowania

**Zmiana tytułu:**
> Zmień tytuł strony głównej na "Witamy w Pellet4Future"

**Zmiana opisu:**
> Na stronie "O nas" zmień opis firmy na: "Jesteśmy liderem rynku peletów w Europie Środkowej od 2015 roku."

**Zmiana danych kontaktowych:**
> Zamień numer telefonu na stronie kontaktowej na +48 600 700 800

**Dodanie nowego tekstu:**
> Pod sekcją z cenami dodaj akapit: "Ceny obowiązują do końca miesiąca. Zamówienia powyżej 5 ton — rabat 10%."

**Zmiana tekstu przycisku:**
> Zmień tekst przycisku z "Kup teraz" na "Zamów z dostawą"

**Poprawienie literówki:**
> Na stronie głównej jest napisane "nasze usługi" — zmień na "Nasze Usługi" z dużych liter

### Jak sprawdzić efekt

Po każdej zmianie możesz powiedzieć:

> Uruchom stronę żebym mógł zobaczyć zmiany

Claude uruchomi stronę lokalnie i poda Ci adres (zwykle http://localhost:3000). Otwórz go w przeglądarce i sprawdź czy wygląda dobrze.

### Gdy zmiana jest większa

Jeśli trzeba zmienić tekst w wielu miejscach naraz:

> Znajdź wszystkie miejsca gdzie jest napisane "Firma ABC" i zamień na "Firma XYZ"

Claude przeszuka cały projekt i zmieni wszędzie.

### Kilka zmian na raz

Możesz w jednej wiadomości poprosić o wiele zmian:

> Zmień tytuł na "Nowa oferta", dodaj pod nim tekst "Promocja do końca miesiąca" i zmień numer telefonu w stopce na +48 111 222 333

Claude wykona wszystko za jednym razem.

### Ważne

Zawsze po zmianach powiedz: **"Sprawdź czy strona się buduje"**. Claude uruchomi sprawdzanie i powie czy wszystko jest OK. Dopiero wtedy rób commit.`,
  },
  {
    id: "as5",
    path_id: "assistant",
    module_name: "Codzienne zadania",
    module_order: 2,
    title: "Wyszukiwanie w kodzie — znajdź cokolwiek",
    slug: "wyszukiwanie-w-kodzie",
    duration_minutes: 5,
    order: 2,
    content: `## Wyszukiwanie w kodzie — znajdź cokolwiek

### Po co szukać w kodzie?

Szef pyta: "Gdzie jest nasz numer telefonu na stronie?" albo "Na której podstronie mamy cennik?". Zamiast klikać po plikach, pytasz Claude.

### Gotowe polecenia do szukania

**Znajdź stronę:**
> Gdzie jest strona kontaktowa? Pokaż mi ścieżkę do pliku

**Znajdź tekst:**
> Znajdź wszystkie miejsca gdzie jest napisany adres email info@firma.pl

**Znajdź numer telefonu:**
> Gdzie w projekcie jest numer telefonu +48 123 456 789?

**Znajdź podstronę:**
> Jakie strony (podstrony) ma ten projekt? Wylistuj je

**Znajdź obrazek:**
> Gdzie jest logo firmy? Jaki plik to jest?

**Znajdź komponent:**
> Gdzie jest formularz kontaktowy? W jakim pliku?

### Jak czytać odpowiedź Claude

Claude poda Ci ścieżkę do pliku, np.:
**src/app/kontakt/page.tsx**

To znaczy:
- **src** — folder z kodem
- **app** — folder z podstronami
- **kontakt** — nazwa podstrony
- **page.tsx** — plik ze stroną

Nie musisz rozumieć co jest w środku pliku. Wystarczy, że wiesz gdzie szukać.

### Szukanie błędów

Gdy coś nie działa na stronie:

> Na stronie produktów wyświetla się pusty ekran. Sprawdź co jest nie tak

Claude przeczyta pliki, znajdzie problem i powie co trzeba naprawić (a często sam naprawi).

### Wskazówka

Gdy nie wiesz jak coś nazwać, opisz to swoimi słowami:

> Znajdź to miejsce na stronie gdzie jest duży napis powitalny z obrazkiem w tle

Claude zrozumie, że chodzi Ci o sekcję "hero" i znajdzie odpowiedni plik.

### Pamiętaj

Claude widzi **wszystkie pliki** w projekcie. Nie musisz sam ich przeglądać. Po prostu opisz co szukasz — Claude znajdzie.`,
  },
  {
    id: "as6",
    path_id: "assistant",
    module_name: "Codzienne zadania",
    module_order: 2,
    title: "Git dla asystenta — commit i push bez strachu",
    slug: "git-commit-i-push",
    duration_minutes: 6,
    order: 3,
    content: `## Git dla asystenta — commit i push bez strachu

### Co to jest Git?

Git to system zapisywania zmian. Pomyśl o nim jak o historii wersji w Google Docs — każda zmiana jest zapisana i można do niej wrócić.

### Trzy słowa, które musisz znać

| Słowo | Co znaczy | Analogia |
|-------|-----------|----------|
| **commit** | Zapisanie zmian z opisem | Jak "Zapisz" w Wordzie, ale z notatką co zmieniłeś |
| **push** | Wysłanie zmian na serwer | Jak kliknięcie "Udostępnij" — inni widzą Twoje zmiany |
| **pull** | Pobranie zmian od innych | Jak "Odśwież" — dostajesz zmiany kolegów |

### Jak to zrobić z Claude

Po zakończeniu pracy napisz:

> Zrób commit i push z opisem "aktualizacja treści na stronie głównej"

Claude sam:
1. Sprawdzi co się zmieniło
2. Zapisze zmiany (commit)
3. Wyśle na serwer (push)
4. Potwierdzi że gotowe

**To wszystko.** Nie musisz wiedzieć nic więcej.

### Przed commitem — zawsze sprawdź

Zanim powiesz "commit i push", zawsze poproś:

> Sprawdź czy strona się buduje bez błędów

Jeśli Claude powie że jest OK — rób commit. Jeśli są błędy — poproś żeby je naprawił.

### Co jeśli chcę cofnąć?

Jeśli zrobiłeś commit ale jeszcze nie zrobiłeś push:

> Cofnij ostatni commit

Jeśli już zrobiłeś push — powiedz szefowi. Zmiany na serwerze powinien cofać ktoś doświadczony.

### Kiedy robić commit?

- Po każdym skończonym zadaniu (np. "zmieniłem wszystkie numery telefonów")
- Przed końcem dnia pracy
- Przed przerwą, gdy wracasz do pracy później

### Złota zasada

**Nigdy nie rób push jeśli nie jesteś pewien, że strona działa.** Zawsze najpierw: sprawdź build, potem commit, potem push.`,
  },
  {
    id: "as7",
    path_id: "assistant",
    module_name: "Codzienne zadania",
    module_order: 2,
    title: "Uruchamianie i sprawdzanie strony",
    slug: "uruchamianie-i-sprawdzanie",
    duration_minutes: 4,
    order: 4,
    content: `## Uruchamianie i sprawdzanie strony

### Dwie komendy — to wystarczy

W pracy ze stronami internetowymi potrzebujesz tylko dwóch komend. Nie musisz ich wpisywać ręcznie — Claude zrobi to za Ciebie.

### Komenda 1: Uruchomienie strony

Powiedz Claude:

> Uruchom stronę lokalnie

Claude wpisze \`npm run dev\` i strona ruszy na Twoim komputerze. Dostaniesz adres:

**http://localhost:3000**

Otwórz go w przeglądarce (Chrome, Firefox) i zobaczysz stronę. Zmiany które robisz pojawiają się automatycznie — wystarczy odświeżyć stronę w przeglądarce.

### Komenda 2: Sprawdzenie czy strona działa

Powiedz Claude:

> Sprawdź czy strona się buduje

Claude wpisze \`npm run build\` i sprawdzi czy nie ma żadnych błędów. To jak "kontrola jakości" przed wysłaniem zmian.

| Wynik | Co znaczy | Co robić |
|-------|-----------|----------|
| **Build przeszedł** | Wszystko OK | Możesz robić commit i push |
| **Build nie przeszedł** | Są błędy | Poproś Claude: "Napraw błędy z builda" |

### Kiedy co używać?

**npm run dev** (uruchom stronę):
- Gdy chcesz zobaczyć jak strona wygląda
- Gdy sprawdzasz swoje zmiany na żywo
- Na początku pracy

**npm run build** (sprawdź):
- Przed commitem i pushem
- Gdy szef pyta "czy strona działa?"
- Gdy coś wygląda dziwnie

### Jak zatrzymać stronę?

Jeśli strona jest uruchomiona i chcesz ją wyłączyć, naciśnij **Ctrl + C** w terminalu. Albo powiedz Claude:

> Zatrzymaj serwer

### Typowa kolejność

1. Na początku pracy: "Uruchom stronę" — żebyś widział efekty zmian
2. W trakcie pracy: odświeżaj przeglądarkę po każdej zmianie
3. Na koniec pracy: "Sprawdź build" — żeby mieć pewność że nic się nie zepsuło
4. Dopiero po udanym buildzie: commit i push

### Pamiętaj

Nie musisz wpisywać tych komend samodzielnie. Po prostu proś Claude: "uruchom stronę" albo "sprawdź build". Claude wie co zrobić.`,
  },

  // ═══════════════════ MODUŁ 3: Dobre nawyki ═══════════════════
  {
    id: "as8",
    path_id: "assistant",
    module_name: "Dobre nawyki",
    module_order: 3,
    title: "Czego NIE robić z Claude Code",
    slug: "czego-nie-robic",
    duration_minutes: 5,
    order: 1,
    content: `## Czego NIE robić z Claude Code

### Zasada ogólna

Claude Code ma dużą moc — może zmieniać pliki, usuwać rzeczy, wysyłać zmiany na serwer. Z mocą idzie odpowiedzialność. Oto rzeczy, których lepiej nie robić bez konsultacji z szefem.

### 1. Nie usuwaj plików bez pytania

Nigdy nie mów Claude:
- "Usuń ten plik"
- "Wyczyść projekt"
- "Usuń niepotrzebne pliki"

**Zamiast tego:** zapytaj szefa czy dany plik jest potrzebny. Możesz poprosić Claude: "Pokaż mi co robi ten plik" — żeby zrozumieć zanim usuniesz.

### 2. Nie rób push bez sprawdzenia

Nigdy nie wysyłaj zmian na serwer (push) jeśli:
- Nie sprawdziłeś builda (\`npm run build\`)
- Nie wiesz co dokładnie się zmieniło
- Nie jesteś pewien czy szef zatwierdził tę zmianę

**Zamiast tego:** "Pokaż mi co się zmieniło" → sprawdź build → dopiero push.

### 3. Nie udostępniaj kluczy i haseł

Nigdy nie wpisuj w rozmowie z Claude:
- Haseł do serwisów
- Kluczy API (takie długie ciągi znaków)
- Danych logowania

**Zamiast tego:** jeśli Claude potrzebuje klucza, powiedz szefowi — on wie jak to bezpiecznie dodać.

### 4. Nie zmieniaj konfiguracji

Nie proś Claude o:
- Zmianę ustawień serwera
- Modyfikację plików .env
- Zmianę bazy danych

To są zmiany, które mogą popsuć cały projekt. Zostaw to osobie technicznej.

### 5. Nie ignoruj ostrzeżeń

Gdy Claude mówi "to może być ryzykowne" albo "czy na pewno chcesz?" — nie zatwierdzaj automatycznie. Przeczytaj co pisze. W razie wątpliwości napisz "nie" i zapytaj szefa.

### Checklista bezpieczeństwa

Przed każdym pushem zadaj sobie pytania:
- Czy sprawdziłem build?
- Czy wiem co się zmieniło?
- Czy szef wie o tej zmianie?

Jeśli na którekolwiek odpowiedź brzmi "nie" — nie rób push.`,
  },
  {
    id: "as9",
    path_id: "assistant",
    module_name: "Dobre nawyki",
    module_order: 3,
    title: "Gdy coś pójdzie nie tak — plan ratunkowy",
    slug: "plan-ratunkowy",
    duration_minutes: 5,
    order: 2,
    content: `## Gdy coś pójdzie nie tak — plan ratunkowy

### Bez paniki

Każdemu się zdarza. Ważne jest żebyś wiedział co robić. Oto Twój plan ratunkowy w trzech krokach.

### Krok 1: Zatrzymaj Claude

Jeśli Claude robi coś dziwnego albo nie tego co chciałeś:

Naciśnij **Escape** albo **Ctrl + C**

To natychmiast go zatrzymuje. Nic złego się nie stanie — Claude po prostu przestanie pracować.

### Krok 2: Wyczyść rozmowę

Jeśli Claude się "pogubił" i odpowiada bez sensu:

Wpisz: **/clear**

To czyści całą rozmowę i zaczyna od nowa. Żadne pliki nie są zmieniane — to tylko reset rozmowy.

### Krok 3: Zapytaj szefa

Jeśli:
- Strona przestała działać
- Build pokazuje błędy, których nie rozumiesz
- Nie wiesz czy Twoja zmiana jest poprawna
- Claude zrobił coś czego nie rozumiesz

**Nie próbuj sam naprawiać.** Napisz do szefa lub osoby technicznej. Opisz:
1. Co chciałeś zrobić
2. Co powiedziałeś Claude
3. Co się stało

### Sytuacje awaryjne i co robić

| Sytuacja | Co robić |
|----------|----------|
| Claude się zapętlił | Escape, potem /clear |
| Strona nie odpala | Powiedz Claude: "Sprawdź błędy" |
| Build nie przechodzi | Powiedz Claude: "Napraw błędy z builda" |
| Nie wiem co Claude zmienił | Powiedz: "Pokaż mi co zmieniłeś" |
| Chcę cofnąć zmiany | Powiedz: "Cofnij ostatnie zmiany" |
| Coś się popsuło po pushu | Napisz do szefa — NIE próbuj sam naprawiać |

### Czego NIE robić w panice

- Nie wpisuj "usuń wszystko i zacznij od nowa"
- Nie rób push żeby "naprawić" — to może pogorszyć sprawę
- Nie zamykaj VS Code w nadziei że problem zniknie

### Złota zasada

**Lepiej zapytać i poczekać, niż naprawić i popsuć.** Nikt nie będzie zły, że pytasz. Ludzie będą źli, gdy popsujesz coś na produkcji.`,
  },
  {
    id: "as10",
    path_id: "assistant",
    module_name: "Dobre nawyki",
    module_order: 3,
    title: "5 poleceń które rozwiążą 90% Twoich zadań",
    slug: "5-polecen-na-co-dzien",
    duration_minutes: 4,
    order: 3,
    content: `## 5 poleceń które rozwiążą 90% Twoich zadań

### Twój codzienny zestaw narzędzi

Nie musisz zapamiętywać dziesiątek komend. Te pięć gotowych szablonów wystarczą na prawie każdy dzień pracy. Skopiuj je i używaj.

### 1. Zmiana tekstu

> Zmień [co] na [nowy tekst] na stronie [która strona]

**Przykład:**
> Zmień numer telefonu na +48 600 700 800 na stronie kontaktowej

Używaj gdy: szef każe zmienić tekst, numer, adres, tytuł, opis.

### 2. Dodanie treści

> Dodaj [co] na stronie [która strona], pod/nad sekcją [która sekcja]

**Przykład:**
> Dodaj nowy akapit "Oferujemy darmową dostawę powyżej 3 ton" na stronie głównej, pod sekcją z cenami

Używaj gdy: trzeba dodać nowy tekst, akapit, sekcję.

### 3. Znalezienie błędu

> Na stronie [adres/nazwa] jest problem: [opis problemu]. Sprawdź co jest nie tak i napraw

**Przykład:**
> Na stronie produktów jest problem: zamiast ceny wyświetla się "NaN". Sprawdź co jest nie tak i napraw

Używaj gdy: coś nie działa, dziwnie wygląda, wyświetla się błąd.

### 4. Sprawdzenie builda

> Sprawdź czy strona się buduje bez błędów. Jeśli są błędy, napraw je

**Przykład użycia:** zawsze przed commitem. To Twoja "kontrola jakości".

Używaj gdy: kończysz pracę, przed commitem, gdy coś wygląda podejrzanie.

### 5. Commit i push

> Zrób commit z opisem "[opis zmian]" i push

**Przykład:**
> Zrób commit z opisem "aktualizacja numerów telefonów i adresu" i push

Używaj gdy: skończyłeś zadanie i chcesz zapisać zmiany.

### Typowy dzień pracy

1. Otwierasz VS Code
2. Szef mówi co zmienić → używasz polecenia 1 lub 2
3. Sprawdzasz czy działa → polecenie 4
4. Zapisujesz → polecenie 5
5. Idziesz na kawę

### Wydrukuj sobie

Te 5 poleceń to Twoja ściągawka. Wydrukuj tę stronę i trzymaj przy biurku. Po dwóch tygodniach nie będziesz jej już potrzebować.`,
  },
];
