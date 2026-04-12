"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import {
  BookOpen,
  GraduationCap,
  Keyboard,
  LifeBuoy,
  Newspaper,
  Search,
  Terminal,
  Wrench,
  Home,
} from "lucide-react";
import { articles } from "@/data/articles";
import { slashCommands } from "@/data/slash-commands";
import { tools } from "@/data/tools";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Toggle with Cmd+K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "/" && !open) {
        const target = e.target as HTMLElement;
        if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") return;
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  const navigate = useCallback(
    (href: string) => {
      setOpen(false);
      router.push(href);
    },
    [router]
  );

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm animate-fade-in"
        onClick={() => setOpen(false)}
      />

      {/* Modal */}
      <div className="fixed left-1/2 top-[15%] z-[101] w-full max-w-lg -translate-x-1/2 animate-scale-in">
        <Command
          className="overflow-hidden rounded-xl border border-border bg-popover shadow-2xl shadow-black/20"
          loop
        >
          {/* Input */}
          <div className="flex items-center gap-2 border-b border-border px-4">
            <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
            <Command.Input
              placeholder="Szukaj artykułu, komendy, narzędzia..."
              className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              autoFocus
            />
            <kbd className="hidden shrink-0 rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground sm:inline-block">
              ESC
            </kbd>
          </div>

          {/* Results */}
          <Command.List className="max-h-[360px] overflow-y-auto p-2">
            <Command.Empty className="py-8 text-center text-sm text-muted-foreground">
              Brak wyników. Spróbuj innego zapytania.
            </Command.Empty>

            {/* Pages */}
            <Command.Group
              heading="Nawigacja"
              className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:text-muted-foreground"
            >
              <Command.Item
                onSelect={() => navigate("/")}
                className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm aria-selected:bg-accent"
              >
                <Home className="h-4 w-4 text-muted-foreground" />
                Strona główna
              </Command.Item>
              <Command.Item
                onSelect={() => navigate("/baza-wiedzy")}
                className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm aria-selected:bg-accent"
              >
                <BookOpen className="h-4 w-4 text-muted-foreground" />
                Baza wiedzy
              </Command.Item>
              <Command.Item
                onSelect={() => navigate("/szkolenia")}
                className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm aria-selected:bg-accent"
              >
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
                Szkolenia
              </Command.Item>
              <Command.Item
                onSelect={() => navigate("/sciagawka")}
                className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm aria-selected:bg-accent"
              >
                <Keyboard className="h-4 w-4 text-muted-foreground" />
                Ściągawka
              </Command.Item>
              <Command.Item
                onSelect={() => navigate("/troubleshooter")}
                className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm aria-selected:bg-accent"
              >
                <LifeBuoy className="h-4 w-4 text-muted-foreground" />
                Rozwiąż problem
              </Command.Item>
              <Command.Item
                onSelect={() => navigate("/co-nowego")}
                className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm aria-selected:bg-accent"
              >
                <Newspaper className="h-4 w-4 text-muted-foreground" />
                Co nowego
              </Command.Item>
            </Command.Group>

            {/* Articles */}
            <Command.Group
              heading="Artykuły"
              className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:text-muted-foreground"
            >
              {articles.map((a) => (
                <Command.Item
                  key={a.id}
                  value={`${a.title} ${a.summary} ${a.tags.join(" ")}`}
                  onSelect={() =>
                    navigate(`/baza-wiedzy/artykul/${a.slug}`)
                  }
                  className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm aria-selected:bg-accent"
                >
                  <BookOpen className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <div className="min-w-0">
                    <p className="truncate font-medium">{a.title}</p>
                    <p className="truncate text-xs text-muted-foreground">
                      {a.summary}
                    </p>
                  </div>
                </Command.Item>
              ))}
            </Command.Group>

            {/* Commands */}
            <Command.Group
              heading="Slash Commands"
              className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:text-muted-foreground"
            >
              {slashCommands.slice(0, 15).map((c) => (
                <Command.Item
                  key={c.id}
                  value={`${c.command} ${c.description} ${c.details}`}
                  onSelect={() => navigate("/sciagawka")}
                  className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm aria-selected:bg-accent"
                >
                  <Terminal className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <code className="text-xs font-mono text-primary">
                        {c.command}
                      </code>
                      <span className="truncate text-muted-foreground">
                        {c.description}
                      </span>
                    </div>
                  </div>
                </Command.Item>
              ))}
            </Command.Group>

            {/* Tools */}
            <Command.Group
              heading="Narzędzia"
              className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:text-muted-foreground"
            >
              {tools.map((t) => (
                <Command.Item
                  key={t.id}
                  value={`${t.name} ${t.description} ${t.when_to_use}`}
                  onSelect={() => navigate("/sciagawka")}
                  className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm aria-selected:bg-accent"
                >
                  <Wrench className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <code className="text-xs font-mono font-bold text-primary">
                        {t.name}
                      </code>
                      <span className="truncate text-muted-foreground">
                        {t.description}
                      </span>
                    </div>
                  </div>
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-border px-4 py-2">
            <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1">
                <kbd className="rounded border border-border bg-muted px-1 py-0.5 text-[10px]">
                  ↑↓
                </kbd>
                nawiguj
              </span>
              <span className="flex items-center gap-1">
                <kbd className="rounded border border-border bg-muted px-1 py-0.5 text-[10px]">
                  ↵
                </kbd>
                otwórz
              </span>
              <span className="flex items-center gap-1">
                <kbd className="rounded border border-border bg-muted px-1 py-0.5 text-[10px]">
                  esc
                </kbd>
                zamknij
              </span>
            </div>
          </div>
        </Command>
      </div>
    </>
  );
}
