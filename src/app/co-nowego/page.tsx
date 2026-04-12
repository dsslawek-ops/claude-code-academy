import { AppShell } from "@/components/layout/app-shell";
import { Badge } from "@/components/ui/badge";
import { Newspaper, RefreshCw, Sparkles, Wrench, Bug } from "lucide-react";

const changelogEntries = [
  {
    date: "2026-04-12",
    title: "Claude Code Academy uruchomiona!",
    summary: "Pierwsza wersja platformy szkoleniowej z bazą wiedzy, ściągawką i troubleshootera.",
    type: "feature" as const,
  },
  {
    date: "2026-04-10",
    title: "Claude Opus 4.6 z kontekstem 1M tokenów",
    summary: "Najnowszy model Claude Opus 4.6 oferuje okno kontekstu do 1 miliona tokenów. Dostępny w Claude Code przez /model claude-opus-4-6.",
    type: "feature" as const,
  },
  {
    date: "2026-04-08",
    title: "Fast Mode — 2.5x szybsze odpowiedzi",
    summary: "Nowy tryb /fast przyspiesza Opus 4.6 o 2.5x. Wyższy koszt tokenów, ale drastycznie szybsze odpowiedzi. Research preview.",
    type: "feature" as const,
  },
  {
    date: "2026-04-05",
    title: "Desktop App — Cowork i App Preview",
    summary: "Aplikacja desktopowa zyskała tryb Cowork (autonomiczny agent w chmurze) i podgląd uruchomionej aplikacji bezpośrednio w panelu.",
    type: "feature" as const,
  },
  {
    date: "2026-04-02",
    title: "Plugins — nowy ekosystem rozszerzeń",
    summary: "System pluginów pozwala instalować rozszerzenia z marketplace: frontend-design, stripe, supabase, figma i inne.",
    type: "feature" as const,
  },
  {
    date: "2026-03-28",
    title: "Auto Mode — automatyczne uprawnienia z kontrolą bezpieczeństwa",
    summary: "Nowy tryb uprawnień 'auto' eliminuje większość promptów o zgodę, z wbudowaną weryfikacją bezpieczeństwa.",
    type: "change" as const,
  },
  {
    date: "2026-03-25",
    title: "/batch — równoległe zmiany w wielu plikach",
    summary: "Nowa komenda /batch uruchamia 5-30 agentów równolegle do zmian na dużą skalę (refactoring, migracje).",
    type: "feature" as const,
  },
];

const typeConfig = {
  feature: { label: "Nowa funkcja", icon: Sparkles, color: "bg-green-500/10 text-green-400 border-green-500/20" },
  change: { label: "Zmiana", icon: Wrench, color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
  fix: { label: "Poprawka", icon: Bug, color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
};

export default function ChangelogPage() {
  return (
    <AppShell>
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="mb-2 text-3xl font-bold tracking-tight">Co nowego</h1>
          <p className="text-muted-foreground">
            Najnowsze zmiany i aktualizacje w Claude Code.
          </p>
        </div>
        <button
          className="flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm transition-colors hover:bg-accent"
          title="Sprawdź aktualizacje (Faza 3)"
        >
          <RefreshCw className="h-4 w-4" />
          Sprawdź
        </button>
      </div>

      <div className="space-y-4">
        {changelogEntries.map((entry, i) => {
          const config = typeConfig[entry.type];
          return (
            <div
              key={i}
              className="rounded-lg border border-border bg-card p-5"
            >
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <Badge variant="outline" className={config.color}>
                  <config.icon className="mr-1 h-3 w-3" />
                  {config.label}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {entry.date}
                </span>
              </div>
              <h3 className="mb-1 font-semibold">{entry.title}</h3>
              <p className="text-sm text-muted-foreground">{entry.summary}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-lg border border-dashed border-border p-6 text-center">
        <Newspaper className="mx-auto mb-2 h-8 w-8 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">
          Automatyczne sprawdzanie aktualizacji będzie dostępne w Fazie 3.
          <br />
          Na razie wpisy dodawane są ręcznie.
        </p>
      </div>
    </AppShell>
  );
}
