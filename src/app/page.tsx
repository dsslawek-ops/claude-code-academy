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
  Rocket,
  Keyboard,
  Terminal,
  Wrench,
  Code,
  Settings,
  Webhook,
  Plug,
  Users,
  Brain,
  GitBranch,
  Zap,
  LifeBuoy,
  BookOpen,
  GraduationCap,
  Search,
};

export default function HomePage() {
  return (
    <AppShell>
      {/* Hero */}
      <div className="mb-10">
        <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Claude Code Academy
        </h1>
        <p className="text-lg text-muted-foreground">
          Wszystko o Claude Code — po polsku, krok po kroku, dla
          nie-programistów.
        </p>
      </div>

      {/* Search */}
      <Link
        href="/szukaj"
        className="mb-10 flex items-center gap-3 rounded-lg border border-border bg-card px-5 py-4 text-muted-foreground transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
      >
        <Search className="h-5 w-5" />
        <span className="text-base">
          Czego szukasz? Wpisz problem lub pytanie...
        </span>
        <kbd className="ml-auto hidden rounded border border-border bg-muted px-2 py-1 text-xs font-medium sm:inline-block">
          /
        </kbd>
      </Link>

      {/* Quick Links */}
      <div className="mb-10 grid gap-4 sm:grid-cols-3">
        <Link
          href="/szkolenia"
          className="group rounded-lg border border-border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
        >
          <GraduationCap className="mb-3 h-8 w-8 text-primary" />
          <h3 className="mb-1 font-semibold">Zacznij szkolenie</h3>
          <p className="text-sm text-muted-foreground">
            Ścieżki krok po kroku od podstaw do zaawansowanych
          </p>
        </Link>
        <Link
          href="/sciagawka"
          className="group rounded-lg border border-border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
        >
          <Keyboard className="mb-3 h-8 w-8 text-primary" />
          <h3 className="mb-1 font-semibold">Ściągawka</h3>
          <p className="text-sm text-muted-foreground">
            Skróty, komendy i narzędzia w jednym miejscu
          </p>
        </Link>
        <Link
          href="/troubleshooter"
          className="group rounded-lg border border-border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
        >
          <LifeBuoy className="mb-3 h-8 w-8 text-primary" />
          <h3 className="mb-1 font-semibold">Mam problem</h3>
          <p className="text-sm text-muted-foreground">
            Opisz problem — znajdziemy rozwiązanie
          </p>
        </Link>
      </div>

      {/* Categories */}
      <div>
        <h2 className="mb-4 text-xl font-semibold">Baza wiedzy</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || BookOpen;
            return (
              <Link
                key={cat.id}
                href={`/baza-wiedzy/${cat.slug}`}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-md hover:shadow-primary/5"
              >
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                <div>
                  <h3 className="text-sm font-medium">{cat.name}</h3>
                  <p className="text-xs text-muted-foreground">
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
