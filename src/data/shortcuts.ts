import { Shortcut } from "@/types/database";

export const shortcuts: Shortcut[] = [
  // === Uniwersalne (Terminal / CLI) ===
  { id: "s1", key_combo: "Shift+Enter", key_combo_win: "Shift+Enter", description: "Nowa linia w polu wpisywania (bez wysyłania)", category: "editing", platform: "both", context: "Pisanie wielolinijkowych poleceń" },
  { id: "s2", key_combo: "Enter", key_combo_win: "Enter", description: "Wyślij wiadomość / zatwierdź", category: "navigation", platform: "both", context: "Wysyłanie polecenia do Claude" },
  { id: "s3", key_combo: "Tab", key_combo_win: "Tab", description: "Autouzupełnianie (tylko CLI)", category: "navigation", platform: "both", context: "Terminal CLI" },
  { id: "s4", key_combo: "Ctrl+R", key_combo_win: "Ctrl+R", description: "Przeszukaj historię poleceń", category: "search", platform: "both", context: "Terminal CLI" },
  { id: "s5", key_combo: "Ctrl+A", key_combo_win: "Home", description: "Skok na początek linii", category: "editing", platform: "both", context: "Terminal CLI" },
  { id: "s6", key_combo: "Ctrl+E", key_combo_win: "End", description: "Skok na koniec linii", category: "editing", platform: "both", context: "Terminal CLI" },
  { id: "s7", key_combo: "Ctrl+U", key_combo_win: "Ctrl+U", description: "Wyczyść całą linię", category: "editing", platform: "both", context: "Terminal CLI" },
  { id: "s8", key_combo: "Ctrl+W", key_combo_win: "Ctrl+Backspace", description: "Usuń ostatnie słowo", category: "editing", platform: "both", context: "Terminal CLI" },
  { id: "s9", key_combo: "Ctrl+C", key_combo_win: "Ctrl+C", description: "Przerwij aktualną operację", category: "session", platform: "both", context: "Zatrzymanie Claude w trakcie pracy" },
  { id: "s10", key_combo: "Esc", key_combo_win: "Esc", description: "Anuluj / wróć (w trybie interaktywnym)", category: "navigation", platform: "both", context: "Anulowanie akcji, zamknięcie dialogu" },

  // === VS Code ===
  { id: "v1", key_combo: "Cmd+Esc", key_combo_win: "Ctrl+Esc", description: "Przełącz fokus między edytorem a Claude", category: "vscode", platform: "vscode", context: "Najważniejszy skrót — przeskakuj między kodem a Claude" },
  { id: "v2", key_combo: "Cmd+Shift+Esc", key_combo_win: "Ctrl+Shift+Esc", description: "Otwórz nową rozmowę jako zakładka edytora", category: "vscode", platform: "vscode", context: "Nowa konwersacja w osobnej zakładce" },
  { id: "v3", key_combo: "Option+K", key_combo_win: "Alt+K", description: "Wstaw @-mention (odniesienie do pliku z numerami linii)", category: "vscode", platform: "vscode", context: "Odwołanie do pliku w poleceniu" },
  { id: "v4", key_combo: "Cmd+Shift+P", key_combo_win: "Ctrl+Shift+P", description: "Paleta poleceń — szukaj komend Claude Code", category: "vscode", platform: "vscode", context: "Dostęp do wszystkich komend VS Code i Claude" },
  { id: "v5", key_combo: "Cmd+Shift+X", key_combo_win: "Ctrl+Shift+X", description: "Otwórz panel rozszerzeń", category: "vscode", platform: "vscode", context: "Zarządzanie rozszerzeniami w tym Claude Code" },
  { id: "v6", key_combo: "Cmd+,", key_combo_win: "Ctrl+,", description: "Otwórz ustawienia VS Code", category: "vscode", platform: "vscode", context: "Konfiguracja Claude Code w Extensions → Claude Code" },
  { id: "v7", key_combo: "Cmd+`", key_combo_win: "Ctrl+`", description: "Otwórz/zamknij terminal zintegrowany", category: "vscode", platform: "vscode", context: "Dostęp do terminala w VS Code" },
  { id: "v8", key_combo: "Cmd+K", key_combo_win: "Ctrl+K", description: "Wstaw @-mention (skrót alternatywny)", category: "vscode", platform: "vscode", context: "Odwołanie do pliku" },
  { id: "v9", key_combo: "Cmd+N", key_combo_win: "Ctrl+N", description: "Nowa rozmowa z Claude", category: "vscode", platform: "vscode", context: "Start nowej konwersacji" },
  { id: "v10", key_combo: "Cmd+Option+J", key_combo_win: "Ctrl+Shift+J", description: "Otwórz Debug Console", category: "vscode", platform: "vscode", context: "Debugowanie" },

  // === Dodatkowe przydatne ===
  { id: "v11", key_combo: "Cmd+B", key_combo_win: "Ctrl+B", description: "Pokaż/ukryj sidebar", category: "vscode", platform: "vscode", context: "Więcej miejsca na kod" },
  { id: "v12", key_combo: "Cmd+Shift+F", key_combo_win: "Ctrl+Shift+F", description: "Szukaj w plikach (Find in Files)", category: "search", platform: "vscode", context: "Przeszukiwanie całego projektu" },
  { id: "v13", key_combo: "Cmd+P", key_combo_win: "Ctrl+P", description: "Szybkie otwieranie pliku po nazwie", category: "navigation", platform: "vscode", context: "Otwórz dowolny plik w projekcie" },
  { id: "v14", key_combo: "Cmd+Z", key_combo_win: "Ctrl+Z", description: "Cofnij ostatnią zmianę", category: "editing", platform: "vscode", context: "Cofnij gdy Claude zmienił coś źle" },
  { id: "v15", key_combo: "Cmd+Shift+Z", key_combo_win: "Ctrl+Y", description: "Ponów cofniętą zmianę", category: "editing", platform: "vscode", context: "Przywróć jeśli cofnąłeś za dużo" },
  { id: "v16", key_combo: "Cmd+S", key_combo_win: "Ctrl+S", description: "Zapisz plik", category: "editing", platform: "vscode", context: "Ręczne zapisanie (Claude zapisuje automatycznie)" },
];
