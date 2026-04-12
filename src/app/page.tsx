"use client";

import { AppShell } from "@/components/layout/app-shell";
import { categories } from "@/data/categories";
import {
  BookOpen, Brain, Code, GitBranch, GraduationCap, Keyboard,
  LifeBuoy, Plug, Rocket, Search, Settings, Terminal,
  Users, Webhook, Wrench, Zap,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Rocket, Keyboard, Terminal, Wrench, Code, Settings, Webhook, Plug,
  Users, Brain, GitBranch, Zap, LifeBuoy, BookOpen, GraduationCap, Search,
};

export default function HomePage() {
  return (
    <AppShell>
      {/* Hero */}
      <div className="mb-16 pt-4">
        <p className="mb-3 text-[13px] font-medium tracking-wide text-muted-foreground uppercase">
          Platforma szkoleniowa
        </p>
        <h1 className="mb-4 text-[2rem] font-semibold leading-tight tracking-tight sm:text-[2.5rem]">
          Opanuj Claude Code
        </h1>
        <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground">
          Wszystko w jednym miejscu — po polsku, krok po kroku.
          Szkolenia, ściągawki i AI troubleshooter.
        </p>
      </div>

      {/* Search */}
      <button
        onClick={() =>
          document.dispatchEvent(
            new KeyboardEvent("keydown", { key: "k", metaKey: true })
          )
        }
        className="mb-16 flex w-full items-center gap-3 rounded-lg border border-border px-4 py-3 text-left text-[13px] text-muted-foreground transition-colors hover:border-muted-foreground/25"
      >
        <Search className="h-4 w-4" />
        <span className="flex-1">Szukaj...</span>
        <kbd className="hidden text-[11px] text-muted-foreground sm:inline">⌘K</kbd>
      </button>

      {/* Quick Links */}
      <div className="mb-16 grid gap-px overflow-hidden rounded-lg border border-border sm:grid-cols-3">
        <Link
          href="/szkolenia"
          className="flex flex-col gap-2 bg-card p-5 transition-colors hover:bg-accent"
        >
          <GraduationCap className="h-4 w-4 text-muted-foreground" />
          <p className="text-[13px] font-medium">Szkolenia</p>
          <p className="text-[12px] leading-relaxed text-muted-foreground">
            Ścieżki krok po kroku
          </p>
        </Link>
        <Link
          href="/sciagawka"
          className="flex flex-col gap-2 border-t border-border bg-card p-5 transition-colors hover:bg-accent sm:border-l sm:border-t-0"
        >
          <Keyboard className="h-4 w-4 text-muted-foreground" />
          <p className="text-[13px] font-medium">Ściągawka</p>
          <p className="text-[12px] leading-relaxed text-muted-foreground">
            Skróty, komendy, narzędzia
          </p>
        </Link>
        <Link
          href="/troubleshooter"
          className="flex flex-col gap-2 border-t border-border bg-card p-5 transition-colors hover:bg-accent sm:border-l sm:border-t-0"
        >
          <LifeBuoy className="h-4 w-4 text-muted-foreground" />
          <p className="text-[13px] font-medium">Rozwiąż problem</p>
          <p className="text-[12px] leading-relaxed text-muted-foreground">
            AI znajdzie odpowiedź
          </p>
        </Link>
      </div>

      {/* Categories */}
      <div>
        <p className="mb-6 text-[13px] font-medium tracking-wide text-muted-foreground uppercase">
          Baza wiedzy
        </p>
        <div className="space-y-px">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || BookOpen;
            return (
              <Link
                key={cat.id}
                href={`/baza-wiedzy/${cat.slug}`}
                className="group flex items-center gap-4 rounded-md px-3 py-3 transition-colors hover:bg-accent"
              >
                <Icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] font-medium">{cat.name}</p>
                  <p className="truncate text-[12px] text-muted-foreground">
                    {cat.description}
                  </p>
                </div>
                <span className="text-[12px] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                  →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}
