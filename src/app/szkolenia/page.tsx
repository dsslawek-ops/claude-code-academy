import { AppShell } from "@/components/layout/app-shell";
import { Clock, GraduationCap, Users, Briefcase, Megaphone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

const learningPaths = [
  {
    id: "entrepreneur",
    title: "Przedsiębiorca",
    description: "Budujesz produkty, zarządzasz projektami, deployujesz na produkcję. Ta ścieżka jest dla Ciebie.",
    icon: Briefcase,
    modules: 4,
    lessons: 32,
    hours: 4,
    progress: 0,
    status: "available" as const,
  },
  {
    id: "assistant",
    title: "Asystent / Pracownik",
    description: "Codzienne zadania z Claude Code — edycja kodu, Git, wyszukiwanie, proste zmiany.",
    icon: Users,
    modules: 3,
    lessons: 20,
    hours: 2.5,
    progress: 0,
    status: "available" as const,
  },
  {
    id: "marketer",
    title: "Marketer / Content",
    description: "Automatyzacja treści, SEO, zarządzanie blogiem, integracje z narzędziami marketingowymi.",
    icon: Megaphone,
    modules: 3,
    lessons: 18,
    hours: 2,
    progress: 0,
    status: "coming-soon" as const,
  },
];

export default function TrainingPage() {
  return (
    <AppShell>
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Szkolenia</h1>
        <p className="text-muted-foreground">
          Wybierz ścieżkę dopasowaną do Twojej roli. Każda prowadzi od podstaw
          do zaawansowanych technik.
        </p>
      </div>

      <div className="space-y-4">
        {learningPaths.map((path) => (
          <div
            key={path.id}
            className="rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-primary/10 p-3">
                <path.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="mb-1 flex items-center gap-2">
                  <h2 className="text-lg font-semibold">{path.title}</h2>
                  {path.status === "coming-soon" && (
                    <Badge variant="secondary">Wkrótce</Badge>
                  )}
                </div>
                <p className="mb-4 text-sm text-muted-foreground">
                  {path.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <GraduationCap className="h-3.5 w-3.5" />
                    {path.modules} moduły, {path.lessons} lekcji
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />~{path.hours} godz.
                  </span>
                </div>

                {path.status === "available" ? (
                  <>
                    <div className="mb-2 flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Postęp</span>
                      <span className="font-medium">{path.progress}%</span>
                    </div>
                    <Progress value={path.progress} className="mb-4 h-2" />
                    <Link
                      href={`/szkolenia/${path.id}`}
                      className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      {path.progress > 0 ? "Kontynuuj" : "Zacznij szkolenie"}
                    </Link>
                  </>
                ) : (
                  <p className="text-sm italic text-muted-foreground">
                    Ta ścieżka jest w przygotowaniu — wkrótce dostępna.
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
