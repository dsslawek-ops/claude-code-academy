"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { Search } from "lucide-react";
import { articles } from "@/data/articles";
import { slashCommands } from "@/data/slash-commands";
import { tools } from "@/data/tools";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
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
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  const go = useCallback(
    (href: string) => {
      setOpen(false);
      router.push(href);
    },
    [router]
  );

  if (!open) return null;

  const groupHeadingClass =
    "[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:text-muted-foreground";

  const itemClass =
    "flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-[13px] text-muted-foreground aria-selected:bg-accent aria-selected:text-foreground";

  return (
    <>
      <div
        className="fixed inset-0 z-[100] bg-black/50"
        onClick={() => setOpen(false)}
      />

      <div className="fixed left-1/2 top-[18%] z-[101] w-full max-w-md -translate-x-1/2">
        <Command
          className="overflow-hidden rounded-lg border border-border bg-popover shadow-2xl"
          loop
        >
          <div className="flex items-center gap-2 border-b border-border px-4">
            <Search className="h-3.5 w-3.5 text-muted-foreground" />
            <Command.Input
              placeholder="Szukaj..."
              className="h-11 w-full bg-transparent text-[13px] outline-none placeholder:text-muted-foreground"
              autoFocus
            />
          </div>

          <Command.List className="max-h-[320px] overflow-y-auto p-1.5">
            <Command.Empty className="py-8 text-center text-[13px] text-muted-foreground">
              Brak wyników
            </Command.Empty>

            <Command.Group heading="Nawigacja" className={groupHeadingClass}>
              {[
                { label: "Strona główna", href: "/" },
                { label: "Baza wiedzy", href: "/baza-wiedzy" },
                { label: "Szkolenia", href: "/szkolenia" },
                { label: "Kursy Anthropic", href: "/kursy-anthropic" },
                { label: "Ściągawka", href: "/sciagawka" },
                { label: "Rozwiąż problem", href: "/troubleshooter" },
                { label: "Co nowego", href: "/co-nowego" },
              ].map((item) => (
                <Command.Item
                  key={item.href}
                  onSelect={() => go(item.href)}
                  className={itemClass}
                >
                  {item.label}
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group heading="Artykuły" className={groupHeadingClass}>
              {articles.map((a) => (
                <Command.Item
                  key={a.id}
                  value={`${a.title} ${a.summary} ${a.tags.join(" ")}`}
                  onSelect={() => go(`/baza-wiedzy/artykul/${a.slug}`)}
                  className={itemClass}
                >
                  <div className="min-w-0">
                    <p className="truncate">{a.title}</p>
                  </div>
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group heading="Komendy" className={groupHeadingClass}>
              {slashCommands.slice(0, 20).map((c) => (
                <Command.Item
                  key={c.id}
                  value={`${c.command} ${c.description} ${c.details}`}
                  onSelect={() => go("/sciagawka")}
                  className={itemClass}
                >
                  <code className="shrink-0 text-[12px] font-mono">
                    {c.command}
                  </code>
                  <span className="truncate">{c.description}</span>
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group heading="Narzędzia" className={groupHeadingClass}>
              {tools.map((t) => (
                <Command.Item
                  key={t.id}
                  value={`${t.name} ${t.description}`}
                  onSelect={() => go("/sciagawka")}
                  className={itemClass}
                >
                  <code className="shrink-0 text-[12px] font-mono font-semibold">
                    {t.name}
                  </code>
                  <span className="truncate">{t.description}</span>
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>

          <div className="border-t border-border px-4 py-2 text-[11px] text-muted-foreground/60">
            ↑↓ nawiguj · ↵ otwórz · esc zamknij
          </div>
        </Command>
      </div>
    </>
  );
}
