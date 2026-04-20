import {
  ArrowUpRight,
  Award,
  BookOpen,
  GraduationCap,
  Keyboard,
  LifeBuoy,
  MessageSquare,
  Search,
  Sparkles,
  Sun,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: GraduationCap,
    title: "52 lekcje po polsku",
    description:
      "Cztery ścieżki od podstaw do zaawansowanych. Oficjalne kursy Anthropic przetłumaczone.",
  },
  {
    icon: BookOpen,
    title: "20 artykułów w bazie wiedzy",
    description:
      "Skróty, komendy, narzędzia, konfiguracja, MCP — wszystko opisane przystępnie.",
  },
  {
    icon: Keyboard,
    title: "Ściągawka z wyszukiwarką",
    description:
      "50 slash commands, 26 skrótów, 12 narzędzi. Filtruj, szukaj, rozwijaj opisy.",
  },
  {
    icon: LifeBuoy,
    title: "AI Troubleshooter",
    description:
      "Opisz problem — AI przeszuka bazę wiedzy (RAG) i odpowie krok po kroku.",
  },
  {
    icon: Search,
    title: "Fuzzy search ⌘K",
    description:
      "Wpisz cokolwiek — znajdzie artykuły, komendy, narzędzia. Działa z literówkami.",
  },
  {
    icon: Award,
    title: "Certyfikaty ukończenia",
    description:
      "Ukończ ścieżkę → pobierz certyfikat PNG. Motywacja i dowód nauki.",
  },
  {
    icon: MessageSquare,
    title: "Dla nie-programistów",
    description:
      "Pisane prostym językiem, z analogiami. Bez żargonu, z praktycznymi przykładami.",
  },
  {
    icon: Sun,
    title: "Jasny i ciemny motyw",
    description:
      "Przełącznik w sidebarze. Zapamiętuje Twój wybór.",
  },
];

const paths = [
  {
    title: "Przedsiębiorca",
    lessons: 17,
    description: "Budujesz produkty, zarządzasz projektami, deployujesz.",
  },
  {
    title: "Claude Code 101",
    lessons: 12,
    description: "Oficjalny kurs Anthropic przetłumaczony na polski.",
  },
  {
    title: "Claude Code w praktyce",
    lessons: 13,
    description: "Zaawansowane techniki z oficjalnego kursu Anthropic.",
  },
  {
    title: "Asystent / Pracownik",
    lessons: 10,
    description: "Codzienne zadania — edycja, Git, wyszukiwanie, pomoc.",
  },
];

export default function WelcomePage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px] bg-glow-brand"
      />

      {/* Header */}
      <header className="relative border-b border-border">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Link href="/welcome" className="flex items-center gap-2.5">
            <span
              aria-hidden
              className="grid h-6 w-6 place-items-center rounded-md bg-brand text-[11px] font-semibold text-brand-contrast"
            >
              C
            </span>
            <span className="text-sm font-semibold tracking-tight">
              Claude Code{" "}
              <span className="font-display italic text-muted-foreground">
                Academy
              </span>
            </span>
          </Link>
          <Link
            href="/"
            className="group inline-flex items-center gap-1.5 rounded-lg bg-foreground px-4 py-2 text-xs font-medium text-background transition-transform hover:-translate-y-[1px]"
          >
            Wejdź
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground animate-fade-up">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand pulse-brand" />
          Darmowa platforma szkoleniowa · PL
        </div>

        <h1 className="mt-6 max-w-3xl text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-[72px] animate-fade-up stagger-1">
          Opanuj{" "}
          <span className="font-display italic text-brand">Claude Code</span>
          <br />
          <span className="text-muted-foreground">bez bycia programistą.</span>
        </h1>

        <p className="mt-7 max-w-xl text-[16px] leading-relaxed text-muted-foreground animate-fade-up stagger-2">
          Wszystko o Claude Code po polsku — szkolenia krok po kroku, baza
          wiedzy, ściągawka i AI troubleshooter. Bez rejestracji, bez opłat.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3 animate-fade-up stagger-3">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-medium text-brand-contrast shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_10px_28px_-10px_rgba(217,119,87,0.6)] transition-transform hover:-translate-y-[1px]"
          >
            <Sparkles className="h-4 w-4" />
            Zacznij naukę
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/sciagawka"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            Zobacz ściągawkę
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="relative border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="mb-10 flex items-baseline justify-between">
            <p className="label-eyebrow">Co dostajesz</p>
            <span className="text-xs text-muted-foreground">Osiem rzeczy</span>
          </div>
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex flex-col gap-3 bg-background p-6 transition-colors hover:bg-accent"
              >
                <f.icon className="h-4 w-4 text-brand" />
                <div>
                  <p className="text-[14px] font-medium">{f.title}</p>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted-foreground">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paths */}
      <section className="relative border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="mb-10 flex items-baseline justify-between">
            <p className="label-eyebrow">Cztery ścieżki</p>
            <Link
              href="/szkolenia"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Wszystkie →
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {paths.map((p, i) => (
              <div
                key={p.title}
                className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/20"
              >
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-[15px] font-medium">{p.title}</p>
                <p className="mt-1 text-[12px] text-muted-foreground">
                  {p.lessons} lekcji
                </p>
                <p className="mt-3 text-[12.5px] leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="text-3xl leading-[1.1] tracking-tight sm:text-4xl">
            <span className="font-display italic">Zero</span> rejestracji.
            <br />
            Zero opłat.
          </h2>
          <p className="mt-5 text-[15px] text-muted-foreground">
            Wejdź i zacznij się uczyć. Bez zakładania konta, bez karty.
          </p>
          <Link
            href="/"
            className="group mt-10 inline-flex items-center gap-2 rounded-lg bg-brand px-7 py-3 text-sm font-medium text-brand-contrast shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_10px_28px_-10px_rgba(217,119,87,0.6)] transition-transform hover:-translate-y-[1px]"
          >
            Zacznij naukę
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        Claude Code Academy · Na podstawie materiałów Anthropic · 2026
      </footer>
    </div>
  );
}
