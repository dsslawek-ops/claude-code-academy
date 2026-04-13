"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { Badge } from "@/components/ui/badge";
import { Loader2, RefreshCw, Sparkles, Wrench, Bug } from "lucide-react";

interface ChangelogEntry {
  date: string;
  title: string;
  summary: string;
  type: "feature" | "change" | "fix";
}

const staticEntries: ChangelogEntry[] = [
  {
    date: "2026-04-13",
    title: "RAG Troubleshooter, fuzzy search, certyfikaty",
    summary: "AI Troubleshooter teraz przeszukuje całą bazę wiedzy (RAG). Cmd+K używa fuzzy search (fuse.js). Certyfikat ukończenia ścieżki do pobrania jako PNG.",
    type: "feature",
  },
  {
    date: "2026-04-12",
    title: "Claude Code Academy uruchomiona!",
    summary: "Pierwsza wersja platformy szkoleniowej z bazą wiedzy, ściągawką, szkoleniami i troubleshootera.",
    type: "feature",
  },
  {
    date: "2026-04-10",
    title: "Claude Opus 4.6 z kontekstem 1M tokenów",
    summary: "Najnowszy model Claude Opus 4.6 oferuje okno kontekstu do 1 miliona tokenów. Dostępny w Claude Code przez /model claude-opus-4-6.",
    type: "feature",
  },
  {
    date: "2026-04-08",
    title: "Fast Mode — 2.5x szybsze odpowiedzi",
    summary: "Nowy tryb /fast przyspiesza Opus 4.6 o 2.5x. Wyższy koszt tokenów, ale drastycznie szybsze odpowiedzi.",
    type: "feature",
  },
  {
    date: "2026-04-05",
    title: "Desktop App — Cowork i App Preview",
    summary: "Aplikacja desktopowa zyskała tryb Cowork (autonomiczny agent w chmurze) i podgląd uruchomionej aplikacji.",
    type: "feature",
  },
  {
    date: "2026-04-02",
    title: "Plugins — nowy ekosystem rozszerzeń",
    summary: "System pluginów pozwala instalować rozszerzenia z marketplace: frontend-design, stripe, supabase, figma i inne.",
    type: "feature",
  },
  {
    date: "2026-03-28",
    title: "Auto Mode — automatyczne uprawnienia",
    summary: "Nowy tryb uprawnień 'auto' eliminuje większość promptów o zgodę, z wbudowaną weryfikacją bezpieczeństwa.",
    type: "change",
  },
];

const typeConfig = {
  feature: {
    label: "Nowa funkcja",
    icon: Sparkles,
    color: "bg-green-500/10 text-green-400 border-green-500/20",
  },
  change: {
    label: "Zmiana",
    icon: Wrench,
    color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  },
  fix: {
    label: "Poprawka",
    icon: Bug,
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
};

export default function ChangelogPage() {
  const [liveEntries, setLiveEntries] = useState<ChangelogEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [lastFetched, setLastFetched] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchChangelog = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/changelog", { method: "POST" });
      const data = await res.json();
      if (data.entries && data.entries.length > 0) {
        setLiveEntries(data.entries);
        setLastFetched(
          new Date().toLocaleString("pl-PL", {
            day: "numeric",
            month: "short",
            hour: "2-digit",
            minute: "2-digit",
          })
        );
      } else if (data.error) {
        setError(data.error);
      } else {
        setError("Nie znaleziono nowych zmian");
      }
    } catch {
      setError("Błąd połączenia");
    } finally {
      setLoading(false);
    }
  };

  const allEntries = liveEntries.length > 0 ? liveEntries : staticEntries;

  return (
    <AppShell>
      <div className="mb-10">
        <p className="mb-3 text-xs font-medium tracking-wide uppercase text-muted-foreground">
          Changelog
        </p>
        <h1 className="mb-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          Co nowego w Claude Code
        </h1>
        <p className="mb-6 max-w-md text-sm leading-relaxed text-muted-foreground">
          Aktualizacje Claude Code i naszej platformy.
        </p>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchChangelog}
            disabled={loading}
            className="flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-xs transition-colors hover:bg-accent disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <RefreshCw className="h-3.5 w-3.5" />
            )}
            Sprawdź aktualizacje
          </button>
          {lastFetched && (
            <span className="text-xs text-muted-foreground">
              Ostatnio: {lastFetched}
            </span>
          )}
          {error && (
            <span className="text-xs text-destructive">{error}</span>
          )}
        </div>

        {liveEntries.length > 0 && (
          <p className="mt-2 text-xs text-muted-foreground">
            Pobrano {liveEntries.length} wpisów z oficjalnego changelog Anthropic
          </p>
        )}
      </div>

      <div className="space-y-3">
        {allEntries.map((entry, i) => {
          const config = typeConfig[entry.type] || typeConfig.feature;
          return (
            <div
              key={`${entry.date}-${i}`}
              className="rounded-lg border border-border p-4"
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
              <h3 className="mb-1 text-sm font-medium">{entry.title}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {entry.summary}
              </p>
            </div>
          );
        })}
      </div>
    </AppShell>
  );
}
