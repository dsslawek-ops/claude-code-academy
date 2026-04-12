"use client";

import { AppShell } from "@/components/layout/app-shell";
import { categories } from "@/data/categories";
import {
  BookOpen,
  Brain,
  Code,
  GitBranch,
  GraduationCap,
  Keyboard,
  LifeBuoy,
  Plug,
  Rocket,
  Search,
  Settings,
  Terminal,
  Users,
  Webhook,
  Wrench,
  Zap,
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
      <div className="mb-12 animate-fade-in">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          Platforma szkoleniowa Claude Code
        </div>
        <h1 className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Opanuj{" "}
          <span className="bg-gradient-to-r from-primary to-[oklch(0.627_0.265_303.9)] bg-clip-text text-transparent">
            Claude Code
          </span>
        </h1>
        <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
          Wszystko w jednym miejscu — po polsku, krok po kroku, dla
          nie-programistów. Szkolenia, ściągawki i AI troubleshooter.
        </p>
      </div>

      {/* Search */}
      <button
        onClick={() =>
          document.dispatchEvent(
            new KeyboardEvent("keydown", { key: "k", metaKey: true })
          )
        }
        className="card-interactive press-effect mb-12 flex w-full items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 text-left text-muted-foreground animate-fade-in animation-delay-100"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
          <Search className="h-4 w-4 text-primary" />
        </div>
        <span className="flex-1 text-sm">
          Szukaj artykułu, komendy, narzędzia...
        </span>
        <kbd className="hidden items-center gap-0.5 rounded-md border border-border bg-muted px-2 py-1 text-xs font-medium text-muted-foreground sm:flex">
          <span className="text-sm">⌘</span>K
        </kbd>
      </button>

      {/* Quick Links */}
      <div className="mb-14 grid gap-4 sm:grid-cols-3 animate-fade-in animation-delay-200">
        <Link
          href="/szkolenia"
          className="card-interactive press-effect group rounded-xl border border-border bg-card p-5"
        >
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 transition-transform duration-200 group-hover:scale-110">
            <GraduationCap className="h-5 w-5 text-primary" />
          </div>
          <h3 className="mb-1 text-sm font-semibold">Zacznij szkolenie</h3>
          <p className="text-xs leading-relaxed text-muted-foreground">
            Ścieżki krok po kroku od podstaw do zaawansowanych
          </p>
        </Link>
        <Link
          href="/sciagawka"
          className="card-interactive press-effect group rounded-xl border border-border bg-card p-5"
        >
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 transition-transform duration-200 group-hover:scale-110">
            <Keyboard className="h-5 w-5 text-primary" />
          </div>
          <h3 className="mb-1 text-sm font-semibold">Ściągawka</h3>
          <p className="text-xs leading-relaxed text-muted-foreground">
            Skróty, komendy i narzędzia w jednym miejscu
          </p>
        </Link>
        <Link
          href="/troubleshooter"
          className="card-interactive press-effect group rounded-xl border border-border bg-card p-5"
        >
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 transition-transform duration-200 group-hover:scale-110">
            <LifeBuoy className="h-5 w-5 text-primary" />
          </div>
          <h3 className="mb-1 text-sm font-semibold">Mam problem</h3>
          <p className="text-xs leading-relaxed text-muted-foreground">
            Opisz problem — AI znajdzie rozwiązanie
          </p>
        </Link>
      </div>

      {/* Categories */}
      <div className="animate-fade-in animation-delay-300">
        <h2 className="mb-1 text-lg font-semibold tracking-tight">
          Baza wiedzy
        </h2>
        <p className="mb-5 text-sm text-muted-foreground">
          Przeglądaj artykuły po kategoriach
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || BookOpen;
            return (
              <Link
                key={cat.id}
                href={`/baza-wiedzy/${cat.slug}`}
                className="group flex items-center gap-3 rounded-lg border border-transparent bg-card/50 px-4 py-3 transition-all duration-150 hover:border-border hover:bg-card"
              >
                <Icon className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                <div className="min-w-0">
                  <h3 className="text-[13px] font-medium">{cat.name}</h3>
                  <p className="truncate text-[11px] text-muted-foreground">
                    {cat.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}
