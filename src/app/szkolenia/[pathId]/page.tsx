"use client";

import { useParams } from "next/navigation";
import { AppShell } from "@/components/layout/app-shell";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, CheckCircle2, Circle, Clock } from "lucide-react";
import Link from "next/link";
import { useLessons } from "@/hooks/use-lessons";

export default function LearningPathPage() {
  const { pathId } = useParams<{ pathId: string }>();
  const { lessons, modules, completedCount, totalCount, progressPercent } =
    useLessons(pathId);

  const pathTitles: Record<string, string> = {
    entrepreneur: "Przedsiębiorca",
    assistant: "Asystent / Pracownik",
    marketer: "Marketer / Content",
  };

  return (
    <AppShell>
      <div className="mb-6">
        <Link
          href="/szkolenia"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Szkolenia
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          {pathTitles[pathId] || pathId}
        </h1>
        <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span>{totalCount} lekcji</span>
          <span>{completedCount} ukończonych</span>
        </div>
        <div className="flex items-center gap-3">
          <Progress value={progressPercent} className="h-2 flex-1" />
          <span className="text-sm font-medium">{progressPercent}%</span>
        </div>
      </div>

      <div className="space-y-8">
        {modules.map((mod) => (
          <div key={mod.name}>
            <h2 className="mb-3 text-lg font-semibold">
              Moduł {mod.order}: {mod.name}
            </h2>
            <div className="space-y-1">
              {mod.lessons.map((lesson) => (
                <Link
                  key={lesson.id}
                  href={`/szkolenia/${pathId}/${lesson.slug}`}
                  className="flex items-center gap-3 rounded-md px-3 py-3 transition-colors hover:bg-accent"
                >
                  {lesson.completed ? (
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-green-400" />
                  ) : (
                    <Circle className="h-5 w-5 shrink-0 text-muted-foreground" />
                  )}
                  <div className="flex-1">
                    <p className="text-sm font-medium">{lesson.title}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {lesson.duration_minutes} min
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
