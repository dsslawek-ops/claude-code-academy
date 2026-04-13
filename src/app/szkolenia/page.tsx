"use client";

import { AppShell } from "@/components/layout/app-shell";
import { lessons } from "@/data/lessons";
import Link from "next/link";

const learningPaths = [
  {
    id: "entrepreneur",
    title: "Przedsiębiorca",
    description: "Budujesz produkty, zarządzasz projektami, deployujesz na produkcję.",
    status: "available" as const,
  },
  {
    id: "cc101",
    title: "Claude Code 101",
    description: "Oficjalny program Anthropic przetłumaczony na polski. Od instalacji po hooks i MCP.",
    badge: "Na podstawie kursu Anthropic",
    status: "available" as const,
  },
  {
    id: "cc-action",
    title: "Claude Code w praktyce",
    description: "Zaawansowane techniki z oficjalnego kursu Anthropic. Narzędzia, kontekst, GitHub, automatyzacja.",
    badge: "Na podstawie kursu Anthropic",
    status: "available" as const,
  },
  {
    id: "assistant",
    title: "Asystent / Pracownik",
    description: "Codzienne zadania z Claude Code — edycja, Git, wyszukiwanie.",
    badge: "Wkrótce",
    status: "coming-soon" as const,
  },
];

export default function TrainingPage() {
  return (
    <AppShell>
      <div className="mb-12">
        <p className="mb-3 text-xs font-medium tracking-wide uppercase text-muted-foreground">
          Szkolenia
        </p>
        <h1 className="mb-4 text-3xl font-semibold leading-tight tracking-tight">
          Ścieżki szkoleniowe
        </h1>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          Wybierz ścieżkę dopasowaną do siebie. Wszystko po polsku, krok po kroku.
        </p>
      </div>

      <div className="space-y-2">
        {learningPaths.map((path) => {
          const pathLessons = lessons.filter((l) => l.path_id === path.id);
          const totalMinutes = pathLessons.reduce((s, l) => s + l.duration_minutes, 0);
          const moduleNames = [...new Set(pathLessons.map((l) => l.module_name))];

          if (path.status === "coming-soon") {
            return (
              <div
                key={path.id}
                className="flex items-start justify-between rounded-lg border border-dashed border-border p-5 opacity-60"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-sm font-medium">{path.title}</h2>
                    <span className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                      Wkrótce
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{path.description}</p>
                </div>
              </div>
            );
          }

          return (
            <Link
              key={path.id}
              href={`/szkolenia/${path.id}`}
              className="group flex items-start justify-between rounded-lg border border-border p-5 transition-colors hover:bg-accent"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h2 className="text-sm font-medium">{path.title}</h2>
                  {path.badge && (
                    <span className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                      {path.badge}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {path.description}
                </p>
                {pathLessons.length > 0 && (
                  <p className="mt-2 text-xs text-muted-foreground">
                    {moduleNames.length} moduły · {pathLessons.length} lekcji · ~{Math.round(totalMinutes / 60 * 10) / 10} godz.
                  </p>
                )}
              </div>
              <span className="mt-1 text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                →
              </span>
            </Link>
          );
        })}
      </div>
    </AppShell>
  );
}
