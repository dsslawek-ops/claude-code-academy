"use client";

import { useParams, useRouter } from "next/navigation";
import { AppShell } from "@/components/layout/app-shell";
import { markdownToHtml } from "@/lib/markdown";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock } from "lucide-react";
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
      <AppShell>
        <p>Lekcja nie znaleziona.</p>
      </AppShell>
    );
  }

  const html = markdownToHtml(lesson.content);

  return (
    <AppShell>
      {/* Nav */}
      <div className="mb-6">
        <Link
          href={`/szkolenia/${pathId}`}
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Wróć do ścieżki
        </Link>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="mb-2 flex items-center gap-2">
          <Badge variant="secondary">{lesson.module_name}</Badge>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            {lesson.duration_minutes} min
          </div>
          {lesson.completed && (
            <Badge
              variant="outline"
              className="bg-green-500/10 text-green-400 border-green-500/20"
            >
              <CheckCircle2 className="mr-1 h-3 w-3" />
              Ukończona
            </Badge>
          )}
        </div>
        <h1 className="text-2xl font-bold tracking-tight">{lesson.title}</h1>
      </div>

      {/* Content */}
      <div dangerouslySetInnerHTML={{ __html: html }} />

      {/* Actions */}
      <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
        {prevLesson ? (
          <Link
            href={`/szkolenia/${pathId}/${prevLesson.slug}`}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {prevLesson.title}
          </Link>
        ) : (
          <div />
        )}

        <Button onClick={handleComplete}>
          {lesson.completed ? "Następna lekcja" : "Ukończ lekcję"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </AppShell>
  );
}
