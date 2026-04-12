"use client";

import { useParams, useRouter } from "next/navigation";
import { AppShell } from "@/components/layout/app-shell";
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

  // Simple markdown to HTML (reuse from article page)
  const html = lesson.content
    .replace(/```(\w*)\n([\s\S]*?)```/g, (_m: string, lang: string, code: string) =>
      `<pre class="rounded-lg bg-muted p-4 overflow-x-auto text-sm font-mono my-4"><code class="language-${lang}">${code.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>`
    )
    .replace(/\|(.+)\|\n\|[-| :]+\|\n((?:\|.+\|\n?)*)/g, (_m: string, header: string, body: string) => {
      const headers = header.split("|").map((h: string) => h.trim()).filter(Boolean);
      const rows = body.trim().split("\n").map((row: string) =>
        row.split("|").map((c: string) => c.trim()).filter(Boolean)
      );
      return `<div class="overflow-x-auto my-4"><table class="w-full text-sm border-collapse"><thead><tr>${headers.map((h: string) => `<th class="border border-border px-3 py-2 text-left font-medium bg-muted">${h}</th>`).join("")}</tr></thead><tbody>${rows.map((row: string[]) => `<tr>${row.map((c: string) => `<td class="border border-border px-3 py-2">${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
    })
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-semibold mt-6 mb-2">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold mt-8 mb-3">$1</h2>')
    .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc text-sm leading-relaxed">$1</li>')
    .replace(/^(?!<|$|\s*$)(.+)$/gm, '<p class="text-sm leading-relaxed mb-3">$1</p>')
    .replace(/`([^`]+)`/g, '<code class="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/^> (.+)$/gm, '<blockquote class="border-l-2 border-primary pl-4 my-3 text-sm text-muted-foreground italic">$1</blockquote>')
    .replace(/((?:<li[^>]*>.*<\/li>\n?)+)/g, '<ul class="my-3 space-y-1">$1</ul>');

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
