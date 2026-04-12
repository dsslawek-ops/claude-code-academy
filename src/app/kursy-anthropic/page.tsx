import { AppShell } from "@/components/layout/app-shell";
import { officialCourses } from "@/data/official-courses";
import { ExternalLink } from "lucide-react";

const categoryLabels: Record<string, string> = {
  "claude-code": "Claude Code",
  mcp: "Model Context Protocol",
  api: "Claude API",
  fluency: "Podstawy AI",
  cloud: "Chmura",
};

const levelLabels: Record<string, string> = {
  beginner: "Podstawowy",
  intermediate: "Średni",
  advanced: "Zaawansowany",
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
        <p className="mb-3 text-[13px] font-medium tracking-wide uppercase text-muted-foreground">
          Oficjalne materiały
        </p>
        <h1 className="mb-4 text-[2rem] font-semibold leading-tight tracking-tight">
          Kursy Anthropic
        </h1>
        <p className="max-w-lg text-[15px] leading-relaxed text-muted-foreground">
          Oficjalne, darmowe szkolenia od twórców Claude. Opisy przetłumaczone
          na polski — kursy prowadzone po angielsku.
        </p>
      </div>

      {grouped.map((group) => (
        <div key={group.key} className="mb-12">
          <p className="mb-4 text-[13px] font-medium tracking-wide uppercase text-muted-foreground">
            {group.label}
          </p>
          <div className="space-y-3">
            {group.courses.map((course) => (
              <a
                key={course.id}
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg border border-border p-5 transition-colors hover:bg-accent"
              >
                <div className="mb-2 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[15px] font-medium">
                      {course.titlePl}
                    </h3>
                    <p className="mt-0.5 text-[12px] text-muted-foreground">
                      {course.title} · {levelLabels[course.level]}
                    </p>
                  </div>
                  <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <p className="mb-4 text-[13px] leading-relaxed text-muted-foreground">
                  {course.description}
                </p>
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {course.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <div className="space-y-1 text-[12px] text-muted-foreground">
                  <p>
                    <span className="text-foreground">Wymagania:</span>{" "}
                    {course.prerequisites}
                  </p>
                  <p>
                    <span className="text-foreground">Dla kogo:</span>{" "}
                    {course.forWhom}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}

      <div className="rounded-lg border border-dashed border-border p-6 text-center">
        <p className="text-[13px] text-muted-foreground">
          Kursy prowadzone są po angielsku na platformie{" "}
          <a
            href="https://anthropic.skilljar.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-border underline-offset-2 hover:decoration-foreground"
          >
            anthropic.skilljar.com
          </a>
          . Rejestracja i dostęp są darmowe.
        </p>
      </div>
    </AppShell>
  );
}
