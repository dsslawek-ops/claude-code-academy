"use client";

import { AppShell } from "@/components/layout/app-shell";
import { categories } from "@/data/categories";
import {
  ArrowUpRight,
  BookOpen,
  Brain,
  Code,
  GitBranch,
  GraduationCap,
  Keyboard,
  LifeBuoy,
  Plug,
  Rocket,
  Search,
  Settings,
  Sparkles,
  Terminal,
  Users,
  Webhook,
  Wrench,
  Zap,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Rocket, Keyboard, Terminal, Wrench, Code, Settings, Webhook, Plug,
  Users, Brain, GitBranch, Zap, LifeBuoy, BookOpen, GraduationCap, Search,
};

const stats = [
  { value: "52", label: "lekcje" },
  { value: "20", label: "artykułów" },
  { value: "50", label: "komend" },
  { value: "26", label: "skrótów" },
];

const primary = [
  {
    href: "/szkolenia",
    label: "Ścieżki szkoleniowe",
    desc: "Cztery kursy od podstaw po zaawansowane techniki.",
    eyebrow: "01 / Nauka",
    icon: GraduationCap,
    accent: true,
  },
  {
    href: "/sciagawka",
    label: "Ściągawka",
    desc: "Wszystkie skróty, komendy i narzędzia w jednym widoku.",
    eyebrow: "02 / Referencja",
    icon: Keyboard,
  },
  {
    href: "/troubleshooter",
    label: "Rozwiąż problem",
    desc: "Opisz co się dzieje — AI przeszuka bazę i odpowie.",
    eyebrow: "03 / Pomoc",
    icon: LifeBuoy,
  },
];

export default function HomePage() {
  return (
    <AppShell>
      {/* Hero */}
      <section className="mb-20">
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground animate-fade-up">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand pulse-brand" />
          <span>Platforma szkoleniowa · PL</span>
        </div>

        <h1 className="mt-5 max-w-3xl text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[58px] animate-fade-up stagger-1">
          Opanuj{" "}
          <span className="font-display italic text-brand">Claude Code</span>{" "}
          <span className="text-muted-foreground">bez</span>
          <br className="hidden sm:block" />
          <span className="text-muted-foreground"> bycia programistą.</span>
        </h1>

        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground animate-fade-up stagger-2">
          Interaktywne szkolenia, baza wiedzy, ściągawka i AI troubleshooter —
          wszystko po polsku, krok po kroku. Darmowe, bez rejestracji.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up stagger-3">
          <Link
            href="/szkolenia"
            className="group inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-brand-contrast shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_8px_24px_-8px_rgba(217,119,87,0.5)] transition-transform hover:-translate-y-[1px]"
          >
            <Sparkles className="h-4 w-4" />
            Zacznij naukę
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <button
            onClick={() =>
              document.dispatchEvent(
                new KeyboardEvent("keydown", { key: "k", metaKey: true })
              )
            }
            className="group inline-flex items-center gap-2.5 rounded-lg border border-border px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            <Search className="h-4 w-4" />
            Szukaj wszędzie
            <kbd className="kbd ml-1">⌘K</kbd>
          </button>
        </div>

        {/* Stats */}
        <dl className="mt-14 grid grid-cols-2 gap-8 border-t border-border pt-8 sm:grid-cols-4 animate-fade-up stagger-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <dt className="font-display text-3xl italic leading-none text-foreground">
                {s.value}
              </dt>
              <dd className="text-xs text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Primary actions */}
      <section className="mb-20">
        <div className="mb-6 flex items-baseline justify-between">
          <p className="label-eyebrow">Gdzie zacząć</p>
          <span className="text-xs text-muted-foreground">Trzy drogi</span>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {primary.map((p, i) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.href}
                href={p.href}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card p-5 transition-all hover:border-foreground/25 hover:bg-accent animate-fade-up stagger-${i + 4}`}
              >
                {p.accent && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent"
                  />
                )}
                <div>
                  <div className="mb-8 flex items-center justify-between">
                    <span className="label-eyebrow text-[10px]">
                      {p.eyebrow}
                    </span>
                    <Icon
                      className={`h-4 w-4 transition-colors ${p.accent ? "text-brand" : "text-muted-foreground group-hover:text-foreground"}`}
                    />
                  </div>
                  <h3 className="text-[15px] font-medium tracking-tight text-foreground">
                    {p.label}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                  Otwórz
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Categories */}
      <section>
        <div className="mb-6 flex items-baseline justify-between">
          <p className="label-eyebrow">Baza wiedzy · 13 kategorii</p>
          <Link
            href="/baza-wiedzy"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Wszystkie artykuły →
          </Link>
        </div>

        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {categories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || BookOpen;
            return (
              <Link
                key={cat.id}
                href={`/baza-wiedzy#${cat.slug}`}
                className="group relative flex items-start gap-4 bg-background p-5 transition-colors hover:bg-accent"
              >
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-card text-muted-foreground transition-colors group-hover:border-brand/40 group-hover:text-brand">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-muted-foreground/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-[13px] font-medium text-foreground">
                      {cat.name}
                    </h3>
                  </div>
                  <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground">
                    {cat.description}
                  </p>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </Link>
            );
          })}
        </div>
      </section>
    </AppShell>
  );
}
