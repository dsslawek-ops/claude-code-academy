import { AppShell } from "@/components/layout/app-shell";
import { officialCourses } from "@/data/official-courses";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const categoryLabels: Record<string, string> = {
  "claude-code": "Claude Code",
  mcp: "Model Context Protocol",
  api: "Claude API",
  fluency: "Podstawy AI",
};

const levelLabels: Record<string, string> = {
  beginner: "Podstawowy",
  intermediate: "Średni",
  advanced: "Zaawansowany",
};

// Kursy które mamy przetłumaczone jako ścieżki szkoleniowe
const localPaths: Record<string, string> = {
  cc101: "/szkolenia/cc101",
  "cc-action": "/szkolenia/cc-action",
};

export default function OfficialCoursesPage() {
  const grouped = Object.entries(categoryLabels)
    .map(([key, label]) => ({
      key,
      label,
      courses: officialCourses.filter((c) => c.category === key),
    }))
    .filter((g) => g.courses.length > 0);

  return (
    <AppShell>
      <div className="mb-12">
        <p className="mb-3 text-xs font-medium tracking-wide uppercase text-muted-foreground">
          Oficjalne materiały
        </p>
        <h1 className="mb-4 text-3xl font-semibold leading-tight tracking-tight">
          Kursy Anthropic
        </h1>
        <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
          Oficjalne szkolenia od twórców Claude. Dwa kluczowe kursy dostępne
          po polsku na naszej platformie. Reszta z linkami do oryginałów.
        </p>
      </div>

      {grouped.map((group) => (
        <div key={group.key} className="mb-12">
          <p className="mb-4 text-xs font-medium tracking-wide uppercase text-muted-foreground">
            {group.label}
          </p>
          <div className="space-y-2">
            {group.courses.map((course) => {
              const localPath = localPaths[course.id];
              const isLocal = !!localPath;

              const content = (
                <div className="group flex items-start justify-between rounded-lg border border-border p-5 transition-colors hover:bg-accent">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-medium">
                        {course.titlePl}
                      </h3>
                      {isLocal ? (
                        <span className="rounded bg-foreground/10 px-2 py-0.5 text-xs font-medium text-foreground">
                          Po polsku
                        </span>
                      ) : (
                        <ExternalLink className="h-3 w-3 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                      )}
                    </div>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {course.title} · {levelLabels[course.level]}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {course.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {course.topics.slice(0, 6).map((topic) => (
                        <span
                          key={topic}
                          className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                        >
                          {topic}
                        </span>
                      ))}
                      {course.topics.length > 6 && (
                        <span className="text-xs text-muted-foreground">
                          +{course.topics.length - 6}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );

              if (isLocal) {
                return (
                  <Link key={course.id} href={localPath}>
                    {content}
                  </Link>
                );
              }

              return (
                <a
                  key={course.id}
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              );
            })}
          </div>
        </div>
      ))}

      <div className="rounded-lg border border-dashed border-border p-6 text-center">
        <p className="text-xs text-muted-foreground">
          Kursy oznaczone "Po polsku" są dostępne bezpośrednio na naszej platformie.
          Pozostałe prowadzone po angielsku na{" "}
          <a
            href="https://anthropic.skilljar.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-border underline-offset-2 hover:decoration-foreground"
          >
            anthropic.skilljar.com
          </a>
          {" "}(darmowy dostęp).
        </p>
      </div>
    </AppShell>
  );
}
