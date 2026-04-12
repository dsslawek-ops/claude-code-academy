# Claude Code Academy

## Projekt
Interaktywna platforma szkoleniowa Claude Code. Next.js 16, Supabase, Tailwind, shadcn/ui.

## Stack
- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript strict
- Tailwind CSS v4 + shadcn/ui
- Supabase (Auth, DB, full-text search)
- Lucide React icons
- Deploy: Vercel (claude-guide.vercel.app)

## Konwencje
- Język interfejsu: polski
- Dark theme domyślny (class="dark" na html)
- Komponenty w src/components/, strony w src/app/
- Supabase client: src/lib/supabase/
- Typy: src/types/
- Dane statyczne (seed): src/data/

## Bezpieczeństwo
- Sekrety w env, nigdy w kodzie
- RLS na każdej tabeli publicznej
- CORS z env

@AGENTS.md
