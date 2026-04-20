"use client";

import { AppShell } from "@/components/layout/app-shell";
import { lessons as lessonsBase } from "@/data/lessons";
import { lessonsCC101 } from "@/data/lessons-cc101";
import { lessonsAssistant } from "@/data/lessons-assistant";
import Link from "next/link";
import {
  ArrowUpRight,
  Briefcase,
  BookMarked,
  Rocket,
  UserCog,
  type LucideIcon,
} from "lucide-react";

type PathStatus = "available" | "coming-soon";

interface LearningPath {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  badge?: string;
  status: PathStatus;
}

const learningPaths: LearningPath[] = [
  {
    id: "entrepreneur",
    title: "Przedsiębiorca",
    description:
      "Budujesz produkty, zarządzasz projektami, deployujesz na produkcję.",
    icon: Briefcase,
    status: "available",
  },
  {
    id: "cc101",
    title: "Claude Code 101",
    description:
      "Oficjalny program Anthropic przetłumaczony na polski. Od instalacji po hooks i MCP.",
    badge: "Kurs Anthropic",
    icon: Rocket,
    status: "available",
  },
  {
    id: "cc-action",
    title: "Claude Code w praktyce",
    description:
      "Zaawansowane techniki. Narzędzia, kontekst, GitHub, automatyzacja.",
    badge: "Kurs Anthropic",
    icon: BookMarked,
    status: "available",
  },
  {
    id: "assistant",
    title: "Asystent / Pracownik",
    description:
      "Codzienne zadania z Claude Code — edycja, Git, wyszukiwanie.",
    icon: UserCog,
    status: "available",
  },
];

const allLessons = [...lessonsBase, ...lessonsCC101, ...lessonsAssistant];

export default function TrainingPage() {
  return (
    <AppShell>
      {/* Header */}
      <div className="mb-12">
        <p className="label-eyebrow mb-4">Szkolenia</p>
        <h1 className="text-4xl leading-[1.05] tracking-tight sm:text-5xl">
          <span className="font-display italic">Cztery</span> ścieżki,
          <br />
          jeden cel.
        </h1>
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
          Wybierz ścieżkę dopasowaną do siebie. Wszystko po polsku, krok po
          kroku, z postępem zapisywanym automatycznie.
        </p>
      </div>

      {/* Paths */}
      <div className="grid gap-4 md:grid-cols-2">
        {learningPaths.map((path, i) => {
          const Icon = path.icon;
          const pathLessons = allLessons.filter((l) => l.path_id === path.id);
          const totalMinutes = pathLessons.reduce(
            (s, l) => s + l.duration_minutes,
            0
          );
          const moduleNames = [
            ...new Set(pathLessons.map((l) => l.module_name)),
          ];
          const hours = Math.round((totalMinutes / 60) * 10) / 10;

          if (path.status === "coming-soon") {
            return (
              <div
                key={path.id}
                className="relative flex min-h-[180px] flex-col justify-between rounded-xl border border-dashed border-border p-6 opacity-50"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-5 w-5 text-muted-foreground" />
                  <span className="rounded border border-border bg-card px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    Wkrótce
                  </span>
                </div>
                <div>
                  <h2 className="text-lg font-medium">{path.title}</h2>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                    {path.description}
                  </p>
                </div>
              </div>
            );
          }

          return (
            <Link
              key={path.id}
              href={`/szkolenia/${path.id}`}
              className={`group relative flex min-h-[200px] flex-col justify-between overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-foreground/25 hover:bg-accent hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.6)] animate-fade-up stagger-${i + 1}`}
            >
              <div className="flex items-start justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-background text-muted-foreground transition-colors group-hover:border-brand/40 group-hover:text-brand">
                  <Icon className="h-4 w-4" />
                </div>
                {path.badge && (
                  <span className="rounded-full border border-border bg-background px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {path.badge}
                  </span>
                )}
              </div>

              <div className="mt-10">
                <h2 className="text-lg font-medium tracking-tight text-foreground">
                  {path.title}
                </h2>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                  {path.description}
                </p>

                {pathLessons.length > 0 && (
                  <div className="mt-4 flex items-center gap-3 text-[11px] text-muted-foreground">
                    <span>{moduleNames.length} modułów</span>
                    <span className="text-muted-foreground/40">·</span>
                    <span>{pathLessons.length} lekcji</span>
                    <span className="text-muted-foreground/40">·</span>
                    <span>~{hours} godz.</span>
                  </div>
                )}
              </div>

              <span
                aria-hidden
                className="pointer-events-none absolute right-5 top-5 opacity-0 transition-opacity group-hover:opacity-100"
              >
                <ArrowUpRight className="h-4 w-4 text-brand" />
              </span>
            </Link>
          );
        })}
      </div>
    </AppShell>
  );
}
