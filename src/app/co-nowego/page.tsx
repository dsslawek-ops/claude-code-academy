"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/app-shell";
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
    color: "text-brand",
    dot: "bg-brand",
  },
  change: {
    label: "Zmiana",
    icon: Wrench,
    color: "text-warn",
    dot: "bg-warn",
  },
  fix: {
    label: "Poprawka",
    icon: Bug,
    color: "text-info",
    dot: "bg-info",
  },
} as const;

function formatDate(s: string) {
  const d = new Date(s);
  if (Number.isNaN(d.getTime())) return s;
  return d.toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

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
    <AppShell width="prose">
      {/* Header */}
      <div className="mb-12">
        <p className="label-eyebrow mb-4">Changelog</p>
        <h1 className="text-4xl leading-[1.05] tracking-tight sm:text-5xl">
          Co nowego w <span className="font-display italic text-brand">Claude Code</span>
        </h1>
        <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
          Aktualizacje Claude Code i naszej platformy, ułożone chronologicznie.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button
            onClick={fetchChangelog}
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3.5 py-2 text-xs font-medium transition-colors hover:border-foreground/25 hover:bg-accent disabled:opacity-50"
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
              Ostatnio sprawdzone: {lastFetched}
            </span>
          )}
          {error && <span className="text-xs text-danger">{error}</span>}
        </div>

        {liveEntries.length > 0 && (
          <p className="mt-3 text-xs text-muted-foreground">
            Pobrano {liveEntries.length} wpisów z oficjalnego changelog Anthropic
          </p>
        )}
      </div>

      {/* Timeline */}
      <div className="relative">
        <div
          aria-hidden
          className="absolute left-[7px] top-3 bottom-3 w-px bg-border"
        />

        <ul className="space-y-10">
          {allEntries.map((entry, i) => {
            const config = typeConfig[entry.type] || typeConfig.feature;
            const Icon = config.icon;
            return (
              <li
                key={`${entry.date}-${i}`}
                className="relative grid grid-cols-[auto_1fr] gap-x-5"
              >
                <div className="relative flex flex-col items-center pt-1.5">
                  <span
                    className={`relative grid h-[15px] w-[15px] place-items-center rounded-full border-2 border-background ${config.dot}`}
                  >
                    <span className="absolute inset-[-6px] rounded-full bg-background" />
                    <span
                      className={`relative h-[15px] w-[15px] rounded-full ${config.dot}`}
                    />
                  </span>
                </div>

                <div className="min-w-0">
                  <div className="mb-2 flex flex-wrap items-center gap-2.5 text-[11px]">
                    <span
                      className={`inline-flex items-center gap-1.5 font-mono uppercase tracking-wider ${config.color}`}
                    >
                      <Icon className="h-3 w-3" />
                      {config.label}
                    </span>
                    <span className="text-muted-foreground/60">·</span>
                    <time className="text-muted-foreground">
                      {formatDate(entry.date)}
                    </time>
                  </div>
                  <h3 className="text-[15px] font-medium tracking-tight text-foreground">
                    {entry.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                    {entry.summary}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </AppShell>
  );
}
