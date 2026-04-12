import { Shortcut } from "@/types/database";

export const shortcuts: Shortcut[] = [
  // macOS / Terminal
  { id: "s1", key_combo: "Shift+Enter", description: "Nowa linia w polu wpisywania (bez wysyłania)", category: "editing", platform: "both", context: "Pisanie wielolinijkowych poleceń" },
  { id: "s2", key_combo: "Enter", description: "Wyślij wiadomość / zatwierdź", category: "navigation", platform: "both", context: "Wysyłanie polecenia do Claude" },
  { id: "s3", key_combo: "Tab", description: "Autouzupełnianie (tylko CLI)", category: "navigation", platform: "macos", context: "Terminal CLI" },
  { id: "s4", key_combo: "Ctrl+R", description: "Przeszukaj historię poleceń", category: "search", platform: "macos", context: "Terminal CLI" },
  { id: "s5", key_combo: "Ctrl+A", description: "Skok na początek linii", category: "editing", platform: "macos", context: "Terminal CLI" },
  { id: "s6", key_combo: "Ctrl+E", description: "Skok na koniec linii", category: "editing", platform: "macos", context: "Terminal CLI" },
  { id: "s7", key_combo: "Ctrl+U", description: "Wyczyść całą linię", category: "editing", platform: "macos", context: "Terminal CLI" },
  { id: "s8", key_combo: "Ctrl+W", description: "Usuń ostatnie słowo", category: "editing", platform: "macos", context: "Terminal CLI" },
  { id: "s9", key_combo: "Ctrl+C", description: "Przerwij aktualną operację", category: "session", platform: "macos", context: "Zatrzymanie Claude w trakcie pracy" },
  { id: "s10", key_combo: "Esc", description: "Anuluj / wróć (w trybie interaktywnym)", category: "navigation", platform: "both", context: "Anulowanie akcji, zamknięcie dialogu" },

  // VS Code
  { id: "v1", key_combo: "Cmd+Esc", description: "Przełącz fokus między edytorem a Claude", category: "navigation", platform: "vscode", context: "Szybkie przeskakiwanie do panelu Claude" },
  { id: "v2", key_combo: "Cmd+Shift+Esc", description: "Otwórz nową rozmowę jako zakładka edytora", category: "session", platform: "vscode", context: "Nowa konwersacja w osobnej zakładce" },
  { id: "v3", key_combo: "Option+K", description: "Wstaw @-mention (odniesienie do pliku z numerami linii)", category: "tools", platform: "vscode", context: "Odwołanie do pliku w poleceniu" },
  { id: "v4", key_combo: "Cmd+Shift+P", description: "Paleta poleceń — szukaj komend Claude Code", category: "navigation", platform: "vscode", context: "Dostęp do wszystkich komend VS Code i Claude" },
  { id: "v5", key_combo: "Cmd+Shift+X", description: "Otwórz panel rozszerzeń", category: "navigation", platform: "vscode", context: "Zarządzanie rozszerzeniami w tym Claude Code" },
  { id: "v6", key_combo: "Cmd+,", description: "Otwórz ustawienia VS Code", category: "navigation", platform: "vscode", context: "Konfiguracja Claude Code w Extensions → Claude Code" },
  { id: "v7", key_combo: "Cmd+`", description: "Otwórz/zamknij terminal zintegrowany", category: "navigation", platform: "vscode", context: "Dostęp do terminala w VS Code" },
  { id: "v8", key_combo: "Cmd+K", description: "Wstaw @-mention (skrót alternatywny)", category: "tools", platform: "vscode", context: "Odwołanie do pliku" },
  { id: "v9", key_combo: "Cmd+N", description: "Nowa rozmowa z Claude", category: "session", platform: "vscode", context: "Start nowej konwersacji" },
  { id: "v10", key_combo: "Cmd+Option+J", description: "Otwórz Debug Console", category: "tools", platform: "vscode", context: "Debugowanie" },
];
