"use client";

import { useParams } from "next/navigation";
import { AppShell } from "@/components/layout/app-shell";
import { ArrowLeft, Award, Check, Clock } from "lucide-react";
import Link from "next/link";
import { useLessons } from "@/hooks/use-lessons";

const pathTitles: Record<string, string> = {
  entrepreneur: "Przedsiębiorca",
  cc101: "Claude Code 101",
  "cc-action": "Claude Code w praktyce",
  assistant: "Asystent / Pracownik",
};

const pathDescriptions: Record<string, string> = {
  entrepreneur:
    "Dla osób budujących produkty i zarządzających projektami w Claude Code.",
  cc101:
    "Oficjalny program Anthropic przetłumaczony na polski — od instalacji po MCP.",
  "cc-action":
    "Zaawansowane techniki: narzędzia, kontekst, GitHub, automatyzacja.",
  assistant: "Codzienne zadania — edycja, Git, wyszukiwanie, pomoc.",
};

export default function LearningPathPage() {
  const { pathId } = useParams<{ pathId: string }>();
  const {
    lessons,
    modules,
    completedCount,
    totalCount,
    progressPercent,
  } = useLessons(pathId);

  const title = pathTitles[pathId] || pathId;
  const description = pathDescriptions[pathId];
  const totalMinutes = lessons.reduce((s, l) => s + l.duration_minutes, 0);

  return (
    <AppShell>
      {/* Breadcrumb */}
      <Link
        href="/szkolenia"
        className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Wszystkie szkolenia
      </Link>

      {/* Header */}
      <div className="mt-6 mb-12">
        <p className="label-eyebrow mb-3">Ścieżka szkoleniowa</p>
        <h1 className="text-4xl leading-[1.05] tracking-tight sm:text-[44px]">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}

        {/* Progress card */}
        <div className="mt-8 rounded-xl border border-border bg-card p-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="label-eyebrow mb-2">Twój postęp</p>
              <div className="flex items-baseline gap-3">
                <span className="font-display text-5xl italic leading-none text-foreground">
                  {progressPercent}
                  <span className="text-2xl text-muted-foreground">%</span>
                </span>
                <span className="text-xs text-muted-foreground">
                  {completedCount} z {totalCount} lekcji
                </span>
              </div>
            </div>
            <div className="flex items-center gap-6 text-xs text-muted-foreground">
              <div className="flex flex-col">
                <span className="text-foreground">{modules.length}</span>
                <span>modułów</span>
              </div>
              <div className="flex flex-col">
                <span className="text-foreground">
                  ~{Math.round((totalMinutes / 60) * 10) / 10}h
                </span>
                <span>nauki</span>
              </div>
            </div>
          </div>

          <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-background">
            <div
              className="h-full rounded-full bg-brand transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Modules */}
      <div className="space-y-10">
        {modules.map((mod, mi) => (
          <section key={mod.name}>
            <div className="mb-4 flex items-baseline gap-3">
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                Moduł {String(mod.order).padStart(2, "0")}
              </span>
              <span className="h-px flex-1 bg-border" />
              <span className="font-mono text-[11px] text-muted-foreground">
                {mod.lessons.filter((l) => l.completed).length}/
                {mod.lessons.length}
              </span>
            </div>
            <h2 className="mb-4 text-xl font-medium tracking-tight">
              {mod.name}
            </h2>

            <ul className="overflow-hidden rounded-xl border border-border bg-card">
              {mod.lessons.map((lesson, li) => (
                <li
                  key={lesson.id}
                  className={li > 0 ? "border-t border-border" : ""}
                >
                  <Link
                    href={`/szkolenia/${pathId}/${lesson.slug}`}
                    className="group flex items-center gap-4 px-5 py-3.5 transition-colors hover:bg-accent"
                  >
                    <span
                      className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border transition-colors ${
                        lesson.completed
                          ? "border-brand bg-brand text-brand-contrast"
                          : "border-border bg-background text-muted-foreground group-hover:border-foreground/30"
                      }`}
                    >
                      {lesson.completed ? (
                        <Check className="h-3 w-3" strokeWidth={3} />
                      ) : (
                        <span className="font-mono text-[10px]">
                          {String(li + 1).padStart(2, "0")}
                        </span>
                      )}
                    </span>
                    <span className="flex-1 text-sm text-foreground">
                      {lesson.title}
                    </span>
                    <span className="hidden items-center gap-1 text-[11px] text-muted-foreground sm:inline-flex">
                      <Clock className="h-3 w-3" />
                      {lesson.duration_minutes} min
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* Certificate */}
      {totalCount > 0 && (
        <div
          className={`mt-12 overflow-hidden rounded-xl border p-6 text-center ${
            completedCount === totalCount
              ? "border-brand/40 bg-brand-soft"
              : "border-dashed border-border bg-card"
          }`}
        >
          <Award
            className={`mx-auto mb-3 h-8 w-8 ${
              completedCount === totalCount ? "text-brand" : "text-muted-foreground"
            }`}
          />
          {completedCount === totalCount ? (
            <Link
              href={`/szkolenia/${pathId}/certyfikat`}
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline"
            >
              Ukończyłeś wszystkie lekcje — pobierz certyfikat →
            </Link>
          ) : (
            <>
              <p className="text-sm font-medium text-foreground">
                Certyfikat po ukończeniu
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Zostało {totalCount - completedCount} lekcji do odblokowania
                certyfikatu PNG.
              </p>
            </>
          )}
        </div>
      )}
    </AppShell>
  );
}
