import {
  BookOpen,
  GraduationCap,
  Keyboard,
  LifeBuoy,
  MessageSquare,
  Search,
  Award,
  Sun,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: GraduationCap,
    title: "42+ lekcji po polsku",
    description: "3 ścieżki szkoleniowe od podstaw do zaawansowanych. Kursy Anthropic przetłumaczone.",
  },
  {
    icon: BookOpen,
    title: "20 artykułów w bazie wiedzy",
    description: "Skróty, komendy, narzędzia, konfiguracja, MCP — wszystko opisane przystępnie.",
  },
  {
    icon: Keyboard,
    title: "Ściągawka z wyszukiwarką",
    description: "50 slash commands, 20 skrótów, 12 narzędzi. Filtruj, szukaj, rozwijaj opisy.",
  },
  {
    icon: LifeBuoy,
    title: "AI Troubleshooter",
    description: "Opisz problem — AI przeszuka bazę wiedzy i odpowie krok po kroku.",
  },
  {
    icon: Search,
    title: "Fuzzy search (Cmd+K)",
    description: "Wpisz cokolwiek — znajdzie artykuły, komendy, narzędzia. Działa nawet z literówkami.",
  },
  {
    icon: Award,
    title: "Certyfikaty ukończenia",
    description: "Ukończ ścieżkę → pobierz certyfikat PNG. Motywacja i dowód nauki.",
  },
  {
    icon: MessageSquare,
    title: "Dla nie-programistów",
    description: "Pisane prostym językiem, z analogiami. Bez żargonu, z praktycznymi przykładami.",
  },
  {
    icon: Sun,
    title: "Jasny i ciemny motyw",
    description: "Przełącznik w sidebarze. Zapamiętuje Twój wybór.",
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
];

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
          <span className="text-sm font-semibold tracking-tight">
            Claude Code Academy
          </span>
          <Link
            href="/"
            className="rounded-md bg-foreground px-4 py-1.5 text-xs font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Wejdź na platformę
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Darmowa platforma szkoleniowa
        </p>
        <h1 className="mb-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Opanuj Claude Code
          <br />
          <span className="text-muted-foreground">bez bycia programistą</span>
        </h1>
        <p className="mb-10 max-w-lg text-sm leading-relaxed text-muted-foreground">
          Wszystko o Claude Code w jednym miejscu — po polsku, krok po kroku.
          Szkolenia, ściągawki, AI troubleshooter i certyfikaty ukończenia.
          Dla przedsiębiorców, asystentów i pracowników.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Zacznij naukę
          </Link>
          <Link
            href="/sciagawka"
            className="rounded-md border border-border px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            Zobacz ściągawkę
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="mb-8 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Co dostajesz
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4">
                <f.icon className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">{f.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paths */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="mb-8 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Ścieżki szkoleniowe
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {paths.map((p) => (
              <div
                key={p.title}
                className="rounded-lg border border-border p-5"
              >
                <p className="text-sm font-medium">{p.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {p.lessons} lekcji
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight">
            Darmowy dostęp. Zero rejestracji.
          </h2>
          <p className="mb-8 text-sm text-muted-foreground">
            Wejdź i zacznij się uczyć. Bez zakładania konta, bez karty kredytowej.
          </p>
          <Link
            href="/"
            className="inline-block rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Zacznij naukę →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        Claude Code Academy · Na podstawie materiałów Anthropic · 2026
      </footer>
    </div>
  );
}
