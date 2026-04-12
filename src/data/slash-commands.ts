import { SlashCommand } from "@/types/database";

export const slashCommands: SlashCommand[] = [
  // Sesja
  { id: "c1", command: "/clear", description: "Wyczyść historię rozmowy i zacznij od nowa", category: "session", example: "/clear" },
  { id: "c2", command: "/reset", description: "Reset sesji (alias dla /clear)", category: "session" },
  { id: "c3", command: "/exit", description: "Wyjdź z Claude Code", category: "session" },
  { id: "c4", command: "/login", description: "Zaloguj się do konta Anthropic", category: "session" },
  { id: "c5", command: "/logout", description: "Wyloguj się", category: "session" },
  { id: "c6", command: "/status", description: "Wersja, model, konto, połączenie", category: "session" },

  // Nawigacja i kontekst
  { id: "c7", command: "/memory", description: "Edytuj pliki CLAUDE.md, włącz/wyłącz auto-memory", category: "navigation", example: "/memory" },
  { id: "c8", command: "/context", description: "Pokaż ile kontekstu (tokenów) jest zajęte", category: "navigation" },
  { id: "c9", command: "/diff", description: "Interaktywny podgląd niezacommitowanych zmian", category: "navigation" },
  { id: "c10", command: "/copy", description: "Skopiuj ostatnią odpowiedź Claude do schowka", category: "navigation", example: "/copy" },
  { id: "c11", command: "/export", description: "Eksportuj rozmowę jako plik tekstowy", category: "navigation", example: "/export chat.txt" },
  { id: "c12", command: "/branch", description: "Utwórz gałąź rozmowy w aktualnym punkcie", category: "navigation" },
  { id: "c13", command: "/resume", description: "Wznów poprzednią rozmowę", category: "navigation", example: "/resume" },
  { id: "c14", command: "/rewind", description: "Cofnij do wcześniejszego punktu rozmowy", category: "navigation" },
  { id: "c15", command: "/rename", description: "Zmień nazwę bieżącej sesji", category: "navigation", example: "/rename mój-projekt" },

  // Model i wydajność
  { id: "c16", command: "/model", description: "Wybierz model AI (Opus 4.6, Sonnet, Haiku)", category: "model", example: "/model claude-opus-4-6" },
  { id: "c17", command: "/effort", description: "Ustaw poziom wysiłku (low/medium/high/max/auto)", category: "model", example: "/effort high" },
  { id: "c18", command: "/fast", description: "Tryb szybki — 2.5x szybszy Opus (wyższy koszt)", category: "model", example: "/fast on" },
  { id: "c19", command: "/compact", description: "Kompresuj rozmowę (odzyskaj kontekst)", category: "model", example: "/compact zachowaj wyniki testów" },

  // Narzędzia i uprawnienia
  { id: "c20", command: "/permissions", description: "Zarządzaj regułami uprawnień (allow/ask/deny)", category: "tools" },
  { id: "c21", command: "/add-dir", description: "Dodaj katalog roboczy na czas sesji", category: "tools", example: "/add-dir /Users/me/other-project" },
  { id: "c22", command: "/hooks", description: "Podgląd konfiguracji hooks", category: "tools" },

  // Wygląd
  { id: "c23", command: "/color", description: "Zmień kolor paska (red, blue, green, yellow...)", category: "tools", example: "/color purple" },
  { id: "c24", command: "/theme", description: "Zmień motyw kolorystyczny (dark/light)", category: "tools" },
  { id: "c25", command: "/keybindings", description: "Otwórz konfigurację skrótów klawiszowych", category: "tools" },
  { id: "c26", command: "/terminal-setup", description: "Konfiguruj Shift+Enter w terminalu", category: "tools" },

  // Planowanie i wykonanie
  { id: "c27", command: "/plan", description: "Tryb planowania — Claude proponuje, nie wykonuje", category: "planning", example: "/plan dodaj stronę kontaktu" },
  { id: "c28", command: "/batch", description: "Zmiany na dużą skalę (5-30 równoległych agentów)", category: "planning", example: "/batch zmień nazwy wszystkich komponentów na PascalCase" },
  { id: "c29", command: "/simplify", description: "Przegląd kodu pod kątem jakości, potem poprawki", category: "planning" },
  { id: "c30", command: "/loop", description: "Powtarzaj polecenie w odstępach czasu", category: "planning", example: "/loop 5m sprawdź status builda" },
  { id: "c31", command: "/ultraplan", description: "Zaplanuj w przeglądarce, wykonaj zdalnie lub lokalnie", category: "planning" },

  // Narzędzia deweloperskie
  { id: "c32", command: "/ide", description: "Zarządzaj integracjami z IDE (VS Code, JetBrains)", category: "dev" },
  { id: "c33", command: "/schedule", description: "Twórz zadania zaplanowane w chmurze", category: "dev" },
  { id: "c34", command: "/remote-control", description: "Udostępnij sesję CLI do podglądu na web", category: "dev" },
  { id: "c35", command: "/debug", description: "Włącz logowanie diagnostyczne", category: "dev" },

  // Informacje
  { id: "c36", command: "/help", description: "Pokaż pomoc i dostępne komendy", category: "info" },
  { id: "c37", command: "/btw", description: "Szybkie pytanie poboczne (nie dodaje do kontekstu)", category: "info", example: "/btw jaka jest wersja Node?" },
  { id: "c38", command: "/cost", description: "Statystyki zużycia tokenów", category: "info" },
  { id: "c39", command: "/usage", description: "Limity planu i rate limit", category: "info" },
  { id: "c40", command: "/release-notes", description: "Changelog Claude Code (interaktywny wybór wersji)", category: "info" },
  { id: "c41", command: "/doctor", description: "Diagnostyka instalacji Claude Code", category: "info" },
  { id: "c42", command: "/insights", description: "Raport analizy Twoich sesji Claude Code", category: "info" },
  { id: "c43", command: "/stats", description: "Dzienne użycie, historia sesji, streak, modele", category: "info" },

  // Zaawansowane
  { id: "c44", command: "/mcp", description: "Zarządzaj serwerami MCP i OAuth", category: "advanced" },
  { id: "c45", command: "/plugin", description: "Zarządzaj pluginami Claude Code", category: "advanced" },
  { id: "c46", command: "/powerup", description: "Interaktywne lekcje odkrywania funkcji", category: "advanced" },
  { id: "c47", command: "/teleport", description: "Przenieś sesję web do terminala", category: "advanced", example: "/teleport" },
  { id: "c48", command: "/web-setup", description: "Podłącz GitHub do sesji webowych", category: "advanced" },
  { id: "c49", command: "/tasks", description: "Lista i zarządzanie zadaniami w tle", category: "advanced" },
  { id: "c50", command: "/extra-usage", description: "Konfiguracja dodatkowego zużycia ponad plan", category: "advanced" },
];
