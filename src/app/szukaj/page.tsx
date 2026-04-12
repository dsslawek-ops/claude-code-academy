"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { articles } from "@/data/articles";
import { shortcuts } from "@/data/shortcuts";
import { slashCommands } from "@/data/slash-commands";
import { tools } from "@/data/tools";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { BookOpen, Keyboard, Search, Terminal, Wrench } from "lucide-react";
import Link from "next/link";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const q = query.toLowerCase().trim();

  const matchedArticles = q
    ? articles.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.summary.toLowerCase().includes(q) ||
          a.content.toLowerCase().includes(q) ||
          a.tags.some((t) => t.includes(q))
      )
    : [];

  const matchedShortcuts = q
    ? shortcuts.filter(
        (s) =>
          s.key_combo.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q)
      )
    : [];

  const matchedCommands = q
    ? slashCommands.filter(
        (c) =>
          c.command.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q)
      )
    : [];

  const matchedTools = q
    ? tools.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q)
      )
    : [];

  const totalResults =
    matchedArticles.length +
    matchedShortcuts.length +
    matchedCommands.length +
    matchedTools.length;

  return (
    <AppShell>
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Szukaj</h1>
        <p className="text-muted-foreground">
          Przeszukaj całą bazę wiedzy, skróty, komendy i narzędzia.
        </p>
      </div>

      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Wpisz cokolwiek — problem, skrót, komendę, narzędzie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-12 pl-12 text-base"
          autoFocus
        />
      </div>

      {q && (
        <p className="mb-6 text-sm text-muted-foreground">
          {totalResults} wyników dla &ldquo;{query}&rdquo;
        </p>
      )}

      {/* Articles */}
      {matchedArticles.length > 0 && (
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-muted-foreground" />
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Artykuły ({matchedArticles.length})
            </h2>
          </div>
          <div className="space-y-2">
            {matchedArticles.map((a) => (
              <Link
                key={a.id}
                href={`/baza-wiedzy/artykul/${a.slug}`}
                className="block rounded-md border border-border bg-card p-3 transition-colors hover:border-primary/50"
              >
                <p className="text-sm font-medium">{a.title}</p>
                <p className="text-xs text-muted-foreground">{a.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Shortcuts */}
      {matchedShortcuts.length > 0 && (
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-2">
            <Keyboard className="h-4 w-4 text-muted-foreground" />
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Skróty ({matchedShortcuts.length})
            </h2>
          </div>
          <div className="space-y-1">
            {matchedShortcuts.map((s) => (
              <div key={s.id} className="flex items-center gap-4 rounded-md px-3 py-2 hover:bg-accent">
                <kbd className="rounded border border-border bg-muted px-2 py-1 text-xs font-mono">
                  {s.key_combo}
                </kbd>
                <span className="text-sm">{s.description}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Commands */}
      {matchedCommands.length > 0 && (
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-2">
            <Terminal className="h-4 w-4 text-muted-foreground" />
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Komendy ({matchedCommands.length})
            </h2>
          </div>
          <div className="space-y-1">
            {matchedCommands.map((c) => (
              <div key={c.id} className="flex items-start gap-4 rounded-md px-3 py-2 hover:bg-accent">
                <code className="shrink-0 rounded bg-muted px-2 py-1 text-sm font-mono text-primary">
                  {c.command}
                </code>
                <span className="text-sm">{c.description}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tools */}
      {matchedTools.length > 0 && (
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-2">
            <Wrench className="h-4 w-4 text-muted-foreground" />
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Narzędzia ({matchedTools.length})
            </h2>
          </div>
          <div className="space-y-2">
            {matchedTools.map((t) => (
              <div key={t.id} className="rounded-md border border-border bg-card p-3">
                <code className="rounded bg-primary px-2 py-0.5 text-sm font-mono font-bold text-primary-foreground">
                  {t.name}
                </code>
                <p className="mt-1 text-sm">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No query */}
      {!q && (
        <div className="rounded-lg border border-dashed border-border p-8 text-center">
          <Search className="mx-auto mb-3 h-10 w-10 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            Zacznij pisać żeby przeszukać bazę wiedzy
          </p>
        </div>
      )}

      {/* No results */}
      {q && totalResults === 0 && (
        <div className="rounded-lg border border-dashed border-border p-8 text-center">
          <p className="mb-2 text-sm text-muted-foreground">
            Nie znaleziono wyników dla &ldquo;{query}&rdquo;
          </p>
          <Link
            href="/troubleshooter"
            className="text-sm text-primary hover:underline"
          >
            Spróbuj opisać problem w Troubleshooterze
          </Link>
        </div>
      )}
    </AppShell>
  );
}
