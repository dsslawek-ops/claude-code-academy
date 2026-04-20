import { AppShell } from "@/components/layout/app-shell";
import { officialCourses } from "@/data/official-courses";
import { ArrowUpRight, ExternalLink } from "lucide-react";
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

const levelClass: Record<string, string> = {
  beginner: "text-ok",
  intermediate: "text-warn",
  advanced: "text-danger",
};

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
      {/* Header */}
      <div className="mb-12">
        <p className="label-eyebrow mb-4">Oficjalne materiały</p>
        <h1 className="text-4xl leading-[1.05] tracking-tight sm:text-5xl">
          Kursy <span className="font-display italic">Anthropic</span>
        </h1>
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
          Oficjalne szkolenia od twórców Claude. Dwa kluczowe kursy dostępne po
          polsku — reszta z linkami do oryginałów na Skilljar.
        </p>
      </div>

      <div className="space-y-12">
        {grouped.map((group) => (
          <section key={group.key}>
            <div className="mb-4 flex items-baseline gap-3">
              <span className="label-eyebrow">{group.label}</span>
              <span className="h-px flex-1 bg-border" />
              <span className="font-mono text-[11px] text-muted-foreground">
                {group.courses.length}
              </span>
            </div>

            <ul className="space-y-2">
              {group.courses.map((course) => {
                const localPath = localPaths[course.id];
                const isLocal = !!localPath;

                const content = (
                  <div className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-accent">
                    <div className="min-w-0 flex-1">
                      <div className="mb-1.5 flex flex-wrap items-center gap-2.5">
                        <h3 className="text-[15px] font-medium text-foreground">
                          {course.titlePl}
                        </h3>
                        {isLocal ? (
                          <span className="rounded-full border border-brand/30 bg-brand-soft px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-brand">
                            Po polsku
                          </span>
                        ) : null}
                        <span
                          className={`font-mono text-[10px] uppercase tracking-wider ${levelClass[course.level]}`}
                        >
                          {levelLabels[course.level]}
                        </span>
                      </div>
                      <p className="mb-3 text-[12px] italic text-muted-foreground">
                        {course.title}
                      </p>
                      <p className="mb-3 text-[13px] leading-relaxed text-muted-foreground">
                        {course.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {course.topics.slice(0, 6).map((topic) => (
                          <span
                            key={topic}
                            className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                          >
                            {topic}
                          </span>
                        ))}
                        {course.topics.length > 6 && (
                          <span className="px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                            +{course.topics.length - 6}
                          </span>
                        )}
                      </div>
                    </div>

                    <span className="mt-1 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground">
                      {isLocal ? (
                        <ArrowUpRight className="h-4 w-4" />
                      ) : (
                        <ExternalLink className="h-4 w-4" />
                      )}
                    </span>
                  </div>
                );

                if (isLocal) {
                  return (
                    <li key={course.id}>
                      <Link href={localPath}>{content}</Link>
                    </li>
                  );
                }

                return (
                  <li key={course.id}>
                    <a
                      href={course.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {content}
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-dashed border-border bg-card p-6 text-center">
        <p className="text-[12.5px] leading-relaxed text-muted-foreground">
          Kursy z etykietą <em className="not-italic text-brand">Po polsku</em>{" "}
          są dostępne bezpośrednio na naszej platformie. Pozostałe po angielsku
          na{" "}
          <a
            href="https://anthropic.skilljar.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline decoration-brand/50 underline-offset-4 hover:decoration-brand"
          >
            anthropic.skilljar.com
          </a>{" "}
          (darmowy dostęp).
        </p>
      </div>
    </AppShell>
  );
}
