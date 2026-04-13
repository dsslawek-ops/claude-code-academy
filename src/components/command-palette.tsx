"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import Fuse from "fuse.js";
import { Search } from "lucide-react";
import { articles } from "@/data/articles";
import { slashCommands } from "@/data/slash-commands";
import { tools } from "@/data/tools";

interface SearchItem {
  type: "page" | "article" | "command" | "tool";
  label: string;
  sublabel?: string;
  href: string;
  searchText: string;
}

const allItems: SearchItem[] = [
  // Nav pages
  { type: "page", label: "Strona główna", href: "/", searchText: "strona główna start home" },
  { type: "page", label: "Baza wiedzy", href: "/baza-wiedzy", searchText: "baza wiedzy artykuły knowledge" },
  { type: "page", label: "Szkolenia", href: "/szkolenia", searchText: "szkolenia kursy lekcje nauka learning" },
  { type: "page", label: "Kursy Anthropic", href: "/kursy-anthropic", searchText: "kursy anthropic oficjalne skilljar" },
  { type: "page", label: "Ściągawka", href: "/sciagawka", searchText: "ściągawka skróty komendy narzędzia cheatsheet" },
  { type: "page", label: "Rozwiąż problem", href: "/troubleshooter", searchText: "problem troubleshooter pomoc help błąd error" },
  { type: "page", label: "Co nowego", href: "/co-nowego", searchText: "co nowego changelog aktualizacje updates" },
  // Articles
  ...articles.map((a) => ({
    type: "article" as const,
    label: a.title,
    sublabel: a.summary,
    href: `/baza-wiedzy/artykul/${a.slug}`,
    searchText: `${a.title} ${a.summary} ${a.tags.join(" ")}`,
  })),
  // Commands
  ...slashCommands.map((c) => ({
    type: "command" as const,
    label: c.command,
    sublabel: c.description,
    href: "/sciagawka",
    searchText: `${c.command} ${c.description} ${c.details}`,
  })),
  // Tools
  ...tools.map((t) => ({
    type: "tool" as const,
    label: t.name,
    sublabel: t.description,
    href: "/sciagawka",
    searchText: `${t.name} ${t.description} ${t.when_to_use}`,
  })),
];

const fuse = new Fuse(allItems, {
  keys: [
    { name: "label", weight: 3 },
    { name: "sublabel", weight: 2 },
    { name: "searchText", weight: 1 },
  ],
  threshold: 0.4,
  includeScore: true,
  minMatchCharLength: 2,
});

const typeLabels: Record<string, string> = {
  page: "Nawigacja",
  article: "Artykuły",
  command: "Komendy",
  tool: "Narzędzia",
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "/" && !open) {
        const t = e.target as HTMLElement;
        if (t.tagName === "INPUT" || t.tagName === "TEXTAREA") return;
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const go = useCallback(
    (href: string) => {
      setOpen(false);
      router.push(href);
    },
    [router]
  );

  const results = useMemo(() => {
    if (!query.trim()) return null;
    return fuse.search(query, { limit: 20 });
  }, [query]);

  // Group results by type
  const grouped = useMemo(() => {
    if (!results) return null;
    const groups: Record<string, SearchItem[]> = {};
    for (const r of results) {
      const type = r.item.type;
      if (!groups[type]) groups[type] = [];
      groups[type].push(r.item);
    }
    return groups;
  }, [results]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  // Flat list for keyboard nav
  const flatResults = useMemo(() => {
    if (!query.trim()) {
      return allItems.filter((i) => i.type === "page");
    }
    return results?.map((r) => r.item) ?? [];
  }, [query, results]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, flatResults.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && flatResults[selectedIndex]) {
      e.preventDefault();
      go(flatResults[selectedIndex].href);
    }
  };

  if (!open) return null;

  const showDefault = !query.trim();

  return (
    <>
      <div
        className="fixed inset-0 z-[100] bg-black/50"
        onClick={() => setOpen(false)}
      />

      <div className="fixed left-1/2 top-[18%] z-[101] w-full max-w-md -translate-x-1/2 px-4">
        <div
          className="overflow-hidden rounded-lg border border-border bg-popover shadow-2xl"
          onKeyDown={handleKeyDown}
        >
          <div className="flex items-center gap-2 border-b border-border px-4">
            <Search className="h-3.5 w-3.5 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Szukaj..."
              className="h-11 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              autoFocus
            />
          </div>

          <div className="max-h-[320px] overflow-y-auto p-1.5">
            {showDefault && (
              <div>
                <p className="px-3 py-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Nawigacja
                </p>
                {allItems
                  .filter((i) => i.type === "page")
                  .map((item, i) => (
                    <button
                      key={item.href}
                      onClick={() => go(item.href)}
                      className={`flex w-full cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm text-left transition-colors ${
                        i === selectedIndex
                          ? "bg-accent text-foreground"
                          : "text-muted-foreground hover:bg-accent hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
              </div>
            )}

            {!showDefault && grouped && Object.keys(grouped).length > 0 && (
              <>
                {Object.entries(grouped).map(([type, items]) => (
                  <div key={type}>
                    <p className="px-3 py-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {typeLabels[type] || type}
                    </p>
                    {items.map((item) => {
                      const flatIdx = flatResults.indexOf(item);
                      return (
                        <button
                          key={`${item.type}-${item.label}-${item.href}`}
                          onClick={() => go(item.href)}
                          className={`flex w-full cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-left transition-colors ${
                            flatIdx === selectedIndex
                              ? "bg-accent text-foreground"
                              : "text-muted-foreground hover:bg-accent hover:text-foreground"
                          }`}
                        >
                          <div className="min-w-0 flex-1">
                            {item.type === "command" ? (
                              <div className="flex items-center gap-2 text-sm">
                                <code className="shrink-0 font-mono text-xs">
                                  {item.label}
                                </code>
                                <span className="truncate text-xs">
                                  {item.sublabel}
                                </span>
                              </div>
                            ) : item.type === "tool" ? (
                              <div className="flex items-center gap-2 text-sm">
                                <code className="shrink-0 font-mono font-semibold text-xs">
                                  {item.label}
                                </code>
                                <span className="truncate text-xs">
                                  {item.sublabel}
                                </span>
                              </div>
                            ) : (
                              <>
                                <p className="truncate text-sm">{item.label}</p>
                                {item.sublabel && (
                                  <p className="truncate text-xs text-muted-foreground">
                                    {item.sublabel}
                                  </p>
                                )}
                              </>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                ))}
              </>
            )}

            {!showDefault && (!grouped || Object.keys(grouped).length === 0) && (
              <p className="py-8 text-center text-sm text-muted-foreground">
                Brak wyników dla &ldquo;{query}&rdquo;
              </p>
            )}
          </div>

          <div className="border-t border-border px-4 py-2 text-xs text-muted-foreground/60">
            ↑↓ nawiguj · ↵ otwórz · esc zamknij
          </div>
        </div>
      </div>
    </>
  );
}
