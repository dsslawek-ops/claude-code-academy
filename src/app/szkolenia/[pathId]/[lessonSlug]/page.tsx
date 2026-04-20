"use client";

import { useParams, useRouter } from "next/navigation";
import { AppShell } from "@/components/layout/app-shell";
import { markdownToHtml } from "@/lib/markdown";
import { FeedbackButtons } from "@/components/feedback-buttons";
import { ArrowLeft, ArrowRight, Check, Clock } from "lucide-react";
import Link from "next/link";
import { useLessons } from "@/hooks/use-lessons";
import { useCallback } from "react";

export default function LessonPage() {
  const { pathId, lessonSlug } = useParams<{
    pathId: string;
    lessonSlug: string;
  }>();
  const router = useRouter();
  const { lessons, markComplete } = useLessons(pathId);

  const currentIndex = lessons.findIndex((l) => l.slug === lessonSlug);
  const lesson = lessons[currentIndex];
  const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null;
  const nextLesson =
    currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;

  const handleComplete = useCallback(async () => {
    if (!lesson) return;
    await markComplete(lesson.id);
    if (nextLesson) {
      router.push(`/szkolenia/${pathId}/${nextLesson.slug}`);
    } else {
      router.push(`/szkolenia/${pathId}`);
    }
  }, [lesson, nextLesson, pathId, router, markComplete]);

  if (!lesson) {
    return (
      <AppShell width="prose">
        <p className="text-muted-foreground">Lekcja nie znaleziona.</p>
      </AppShell>
    );
  }

  const html = markdownToHtml(lesson.content);
  const total = lessons.length;
  const positionLabel = `${String(currentIndex + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

  return (
    <AppShell width="prose">
      {/* Breadcrumb */}
      <Link
        href={`/szkolenia/${pathId}`}
        className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Wróć do ścieżki
      </Link>

      {/* Header */}
      <div className="mb-10 mt-6">
        <div className="mb-4 flex flex-wrap items-center gap-3 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
          <span>{lesson.module_name}</span>
          <span className="text-muted-foreground/40">·</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {lesson.duration_minutes} min
          </span>
          <span className="text-muted-foreground/40">·</span>
          <span>{positionLabel}</span>
          {lesson.completed && (
            <>
              <span className="text-muted-foreground/40">·</span>
              <span className="inline-flex items-center gap-1 text-brand">
                <Check className="h-3 w-3" strokeWidth={3} />
                Ukończona
              </span>
            </>
          )}
        </div>
        <h1 className="font-display text-4xl italic leading-[1.05] tracking-tight sm:text-5xl">
          {lesson.title}
        </h1>
      </div>

      {/* Content */}
      <article
        className="prose-custom"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {/* Feedback */}
      <div className="mt-10">
        <FeedbackButtons contentType="lesson" contentId={lesson.id} />
      </div>

      {/* Actions */}
      <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        {prevLesson ? (
          <Link
            href={`/szkolenia/${pathId}/${prevLesson.slug}`}
            className="group inline-flex max-w-[240px] items-start gap-2 text-left text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="mt-0.5 h-3.5 w-3.5 shrink-0 transition-transform group-hover:-translate-x-0.5" />
            <span className="flex flex-col gap-0.5">
              <span className="text-[10px] uppercase tracking-wider">
                Poprzednia
              </span>
              <span className="truncate text-[13px] text-foreground">
                {prevLesson.title}
              </span>
            </span>
          </Link>
        ) : (
          <div />
        )}

        <button
          onClick={handleComplete}
          className="group inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-brand-contrast shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_8px_24px_-8px_rgba(217,119,87,0.5)] transition-transform hover:-translate-y-[1px]"
        >
          {lesson.completed ? "Następna lekcja" : "Ukończ lekcję"}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </AppShell>
  );
}
