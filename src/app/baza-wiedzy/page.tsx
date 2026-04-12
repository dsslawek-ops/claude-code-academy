"use client";

import { useState } from "react";
import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { categories } from "@/data/categories";
import { articles } from "@/data/articles";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Rocket, Keyboard, Terminal, Wrench, Code, Settings, Webhook, Plug, Users, Brain, GitBranch, Zap, LifeBuoy, BookOpen,
};

const difficultyLabels: Record<string, { label: string; color: string }> = {
  beginner: { label: "Podstawowy", color: "bg-green-500/10 text-green-400 border-green-500/20" },
  intermediate: { label: "Średni", color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
  advanced: { label: "Zaawansowany", color: "bg-red-500/10 text-red-400 border-red-500/20" },
};

export default function KnowledgeBasePage() {
  const [query, setQuery] = useState("");
  const q = query.toLowerCase();

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
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Baza wiedzy</h1>
        <p className="text-muted-foreground">
          Artykuły o Claude Code pogrupowane tematycznie. Szukaj lub przeglądaj
          kategorie.
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Szukaj artykułu..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Search results */}
      {filteredArticles ? (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            {filteredArticles.length} wyników dla &ldquo;{query}&rdquo;
          </p>
          {filteredArticles.map((a) => {
            const diff = difficultyLabels[a.difficulty];
            return (
              <Link
                key={a.id}
                href={`/baza-wiedzy/artykul/${a.slug}`}
                className="block rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/50"
              >
                <div className="mb-1 flex items-center gap-2">
                  <h3 className="font-medium">{a.title}</h3>
                  <Badge variant="outline" className={diff.color}>
                    {diff.label}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{a.summary}</p>
              </Link>
            );
          })}
        </div>
      ) : (
        /* Categories */
        <div className="space-y-8">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || BookOpen;
            const catArticles = articles
              .filter((a) => a.category_id === cat.id)
              .sort((a, b) => a.order - b.order);
            if (catArticles.length === 0) return null;
            return (
              <div key={cat.id}>
                <div className="mb-3 flex items-center gap-2">
                  <Icon className="h-5 w-5 text-muted-foreground" />
                  <h2 className="text-lg font-semibold">{cat.name}</h2>
                  <span className="text-sm text-muted-foreground">
                    ({catArticles.length})
                  </span>
                </div>
                <div className="space-y-2 pl-7">
                  {catArticles.map((a) => {
                    const diff = difficultyLabels[a.difficulty];
                    return (
                      <Link
                        key={a.id}
                        href={`/baza-wiedzy/artykul/${a.slug}`}
                        className="flex items-center justify-between rounded-md px-3 py-2 transition-colors hover:bg-accent"
                      >
                        <div>
                          <p className="text-sm font-medium">{a.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {a.summary}
                          </p>
                        </div>
                        <Badge
                          variant="outline"
                          className={`ml-4 shrink-0 ${diff.color}`}
                        >
                          {diff.label}
                        </Badge>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </AppShell>
  );
}
