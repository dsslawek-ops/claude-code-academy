"use client";

import { useState } from "react";
import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { categories } from "@/data/categories";
import { articles } from "@/data/articles";
import {
  BookOpen,
  Brain,
  Code,
  GitBranch,
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
  X,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Rocket, Keyboard, Terminal, Wrench, Code, Settings, Webhook, Plug,
  Users, Brain, GitBranch, Zap, LifeBuoy, BookOpen,
};

const difficultyConfig: Record<string, { label: string; className: string }> = {
  beginner: {
    label: "Podstawowy",
    className: "text-ok",
  },
  intermediate: {
    label: "Średni",
    className: "text-warn",
  },
  advanced: {
    label: "Zaawansowany",
    className: "text-danger",
  },
};

export default function KnowledgeBasePage() {
  const [query, setQuery] = useState("");
  const q = query.toLowerCase().trim();

  const filteredArticles = q
    ? articles.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.summary.toLowerCase().includes(q) ||
          a.tags.some((t) => t.includes(q))
      )
    : null;

  return (
    <AppShell>
      {/* Header */}
      <div className="mb-10">
        <p className="label-eyebrow mb-4">Baza wiedzy</p>
        <h1 className="text-4xl leading-[1.05] tracking-tight sm:text-5xl">
          <span className="font-display italic">Artykuły</span> o Claude Code
        </h1>
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
          {articles.length} artykułów w {categories.length} kategoriach. Szukaj
          słowem kluczowym albo przeglądaj tematycznie.
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-10">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Szukaj artykułu, tagu, tematu…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-12 w-full rounded-xl border border-border bg-card pl-11 pr-11 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand/40 focus:outline-none focus:ring-2 focus:ring-brand/20"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground"
            aria-label="Wyczyść"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {filteredArticles ? (
        <div>
          <p className="mb-5 text-xs text-muted-foreground">
            {filteredArticles.length}{" "}
            {filteredArticles.length === 1 ? "wynik" : "wyników"} dla „{query}"
          </p>
          {filteredArticles.length > 0 ? (
            <ul className="overflow-hidden rounded-xl border border-border bg-card">
              {filteredArticles.map((a, i) => {
                const diff = difficultyConfig[a.difficulty];
                return (
                  <li
                    key={a.id}
                    className={i > 0 ? "border-t border-border" : ""}
                  >
                    <Link
                      href={`/baza-wiedzy/artykul/${a.slug}`}
                      className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-accent"
                    >
                      <div className="min-w-0 flex-1">
                        <h3 className="text-[14px] font-medium text-foreground">
                          {a.title}
                        </h3>
                        <p className="mt-0.5 truncate text-[13px] text-muted-foreground">
                          {a.summary}
                        </p>
                      </div>
                      <span
                        className={`shrink-0 font-mono text-[10px] uppercase tracking-wider ${diff.className}`}
                      >
                        {diff.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="rounded-xl border border-dashed border-border p-10 text-center">
              <p className="text-sm text-muted-foreground">
                Brak wyników. Spróbuj innego słowa kluczowego.
              </p>
            </div>
          )}
        </div>
      ) : (
        <>
          {/* Category index */}
          <nav className="mb-12 flex flex-wrap gap-2">
            {categories.map((cat) => {
              const count = articles.filter(
                (a) => a.category_id === cat.id
              ).length;
              if (count === 0) return null;
              return (
                <a
                  key={cat.id}
                  href={`#${cat.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-foreground/25 hover:text-foreground"
                >
                  {cat.name}
                  <span className="font-mono text-[10px] text-muted-foreground/60">
                    {count}
                  </span>
                </a>
              );
            })}
          </nav>

          <div className="space-y-12">
            {categories.map((cat) => {
              const Icon = iconMap[cat.icon] || BookOpen;
              const catArticles = articles
                .filter((a) => a.category_id === cat.id)
                .sort((a, b) => a.order - b.order);
              if (catArticles.length === 0) return null;
              return (
                <section key={cat.id} id={cat.slug} className="scroll-mt-16">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="grid h-8 w-8 place-items-center rounded-lg border border-border bg-card text-brand">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-lg font-medium tracking-tight text-foreground">
                        {cat.name}
                      </h2>
                      <p className="text-xs text-muted-foreground">
                        {cat.description}
                      </p>
                    </div>
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {catArticles.length}
                    </span>
                  </div>

                  <ul className="overflow-hidden rounded-xl border border-border bg-card">
                    {catArticles.map((a, i) => {
                      const diff = difficultyConfig[a.difficulty];
                      return (
                        <li
                          key={a.id}
                          className={i > 0 ? "border-t border-border" : ""}
                        >
                          <Link
                            href={`/baza-wiedzy/artykul/${a.slug}`}
                            className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-3.5 transition-colors hover:bg-accent"
                          >
                            <span className="font-mono text-[10px] text-muted-foreground/60">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <div className="min-w-0">
                              <h3 className="truncate text-[14px] font-medium text-foreground">
                                {a.title}
                              </h3>
                              <p className="truncate text-[12.5px] text-muted-foreground">
                                {a.summary}
                              </p>
                            </div>
                            <span
                              className={`shrink-0 font-mono text-[10px] uppercase tracking-wider ${diff.className}`}
                            >
                              {diff.label}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </section>
              );
            })}
          </div>
        </>
      )}
    </AppShell>
  );
}
