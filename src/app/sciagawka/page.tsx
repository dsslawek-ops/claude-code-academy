"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { shortcuts } from "@/data/shortcuts";
import { slashCommands } from "@/data/slash-commands";
import { tools } from "@/data/tools";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, ChevronRight, Search } from "lucide-react";

const platformLabels: Record<string, string> = {
  macos: "macOS",
  vscode: "VS Code",
  both: "Oba",
};

const shortcutCategoryLabels: Record<string, string> = {
  navigation: "Nawigacja",
  editing: "Edycja",
  git: "Git",
  search: "Szukanie",
  tools: "Narzędzia",
  session: "Sesja",
  vscode: "VS Code",
};

const commandCategoryLabels: Record<string, string> = {
  session: "Sesja",
  navigation: "Nawigacja",
  model: "Model / wydajność",
  tools: "Narzędzia",
  planning: "Planowanie",
  dev: "Developerskie",
  info: "Informacje",
  advanced: "Zaawansowane",
};

export default function CheatsheetPage() {
  const [query, setQuery] = useState("");
  const [os, setOs] = useState<"mac" | "win">("mac");
  const q = query.toLowerCase();

  const filteredShortcuts = shortcuts.filter(
    (s) => {
      const combo = os === "mac" ? s.key_combo : s.key_combo_win;
      return combo.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.context.toLowerCase().includes(q);
    }
  );

  const [expandedCmd, setExpandedCmd] = useState<string | null>(null);

  const filteredCommands = slashCommands.filter(
    (c) =>
      c.command.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.details.toLowerCase().includes(q)
  );

  const filteredTools = tools.filter(
    (t) =>
      t.name.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.when_to_use.toLowerCase().includes(q)
  );

  return (
    <AppShell>
      <div className="mb-8">
        <h1 className="mb-2 text-4xl font-semibold tracking-tight antialiased font-[-apple-system,BlinkMacSystemFont,'SF_Pro_Display','SF_Pro_Text','Helvetica_Neue',sans-serif]">Ściągawka</h1>
        <p className="text-muted-foreground">
          Wszystkie skróty, komendy i narzędzia w jednym miejscu. Filtruj i
          szukaj.
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Szukaj skrótu, komendy lub narzędzia..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      <Tabs defaultValue="shortcuts">
        <TabsList className="mb-6 w-full justify-start">
          <TabsTrigger value="shortcuts">
            Skróty ({filteredShortcuts.length})
          </TabsTrigger>
          <TabsTrigger value="commands">
            Komendy ({filteredCommands.length})
          </TabsTrigger>
          <TabsTrigger value="tools">
            Narzędzia ({filteredTools.length})
          </TabsTrigger>
        </TabsList>

        {/* Shortcuts */}
        <TabsContent value="shortcuts">
          {/* OS toggle */}
          <div className="mb-4 flex items-center gap-1 rounded-md border border-border p-1 w-fit">
            <button
              onClick={() => setOs("mac")}
              className={`rounded px-3 py-1 text-xs font-medium transition-colors ${
                os === "mac"
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              macOS
            </button>
            <button
              onClick={() => setOs("win")}
              className={`rounded px-3 py-1 text-xs font-medium transition-colors ${
                os === "win"
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Windows
            </button>
          </div>

          <div className="space-y-1">
            <div className="grid grid-cols-[160px_1fr_80px] gap-4 border-b border-border px-3 pb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <span>Skrót ({os === "mac" ? "macOS" : "Windows"})</span>
              <span>Opis</span>
              <span>Gdzie</span>
            </div>
            {filteredShortcuts.map((s) => {
              const combo = os === "mac" ? s.key_combo : s.key_combo_win;
              return (
                <div
                  key={s.id}
                  className="grid grid-cols-[160px_1fr_80px] items-center gap-4 rounded-md px-3 py-2.5 transition-colors hover:bg-accent"
                >
                  <kbd className="inline-flex w-fit items-center rounded border border-border bg-muted px-2 py-1 text-xs font-mono font-medium">
                    {combo}
                  </kbd>
                  <div>
                    <p className="text-sm">{s.description}</p>
                    <p className="text-xs text-muted-foreground">{s.context}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {platformLabels[s.platform]}
                  </span>
                </div>
              );
            })}
            {filteredShortcuts.length === 0 && (
              <p className="py-8 text-center text-sm text-muted-foreground">
                Brak wyników dla &ldquo;{query}&rdquo;
              </p>
            )}
          </div>
        </TabsContent>

        {/* Commands */}
        <TabsContent value="commands">
          {Object.entries(commandCategoryLabels).map(([key, label]) => {
            const items = filteredCommands.filter((c) => c.category === key);
            if (items.length === 0) return null;
            return (
              <div key={key} className="mb-6">
                <h3 className="mb-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  {label}
                </h3>
                <div className="space-y-1">
                  {items.map((c) => {
                    const isExpanded = expandedCmd === c.id;
                    return (
                      <div key={c.id}>
                        <button
                          onClick={() =>
                            setExpandedCmd(isExpanded ? null : c.id)
                          }
                          className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left transition-colors hover:bg-accent"
                        >
                          {isExpanded ? (
                            <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
                          ) : (
                            <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                          )}
                          <code className="inline-block w-40 shrink-0 rounded bg-muted px-2 py-1 text-sm font-mono font-medium text-primary">
                            {c.command}
                          </code>
                          <p className="min-w-0 text-sm">
                            {c.description}
                          </p>
                        </button>
                        {isExpanded && (
                          <div className="mb-2 ml-10 rounded-md border border-border bg-card p-4">
                            <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                              {c.details}
                            </p>
                            {c.example && (
                              <p className="mt-3 text-xs">
                                <span className="font-medium">Przykład: </span>
                                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-primary">
                                  {c.example}
                                </code>
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          {filteredCommands.length === 0 && (
            <p className="py-8 text-center text-sm text-muted-foreground">
              Brak wyników dla &ldquo;{query}&rdquo;
            </p>
          )}
        </TabsContent>

        {/* Tools */}
        <TabsContent value="tools">
          <div className="space-y-4">
            {filteredTools.map((t) => (
              <div
                key={t.id}
                className="rounded-lg border border-border bg-card p-4"
              >
                <div className="mb-2 flex items-center gap-2">
                  <code className="rounded bg-primary px-2 py-1 text-sm font-mono font-bold text-primary-foreground">
                    {t.name}
                  </code>
                </div>
                <p className="mb-2 text-sm">{t.description}</p>
                <p className="text-xs text-muted-foreground">
                  <strong>Kiedy używać:</strong> {t.when_to_use}
                </p>
                {t.example && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    <strong>Przykład:</strong>{" "}
                    <span className="italic">&ldquo;{t.example}&rdquo;</span>
                  </p>
                )}
              </div>
            ))}
            {filteredTools.length === 0 && (
              <p className="py-8 text-center text-sm text-muted-foreground">
                Brak wyników dla &ldquo;{query}&rdquo;
              </p>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </AppShell>
  );
}
