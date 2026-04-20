"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Loader2, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("Nieprawidłowy email lub hasło");
      setLoading(false);
    } else {
      router.push("/");
      router.refresh();
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background px-4">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-glow-brand"
      />

      <div className="relative w-full max-w-sm">
        <Link
          href="/welcome"
          className="mb-10 flex items-center justify-center gap-2.5"
        >
          <span
            aria-hidden
            className="grid h-7 w-7 place-items-center rounded-md bg-brand text-[12px] font-semibold text-brand-contrast"
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

        <div className="rounded-2xl border border-border bg-card p-7">
          <div className="mb-6">
            <h1 className="text-xl font-medium tracking-tight">
              Zaloguj się
            </h1>
            <p className="mt-1 text-xs text-muted-foreground">
              Żeby zapisywać postęp w szkoleniach.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-3">
            <div>
              <label className="mb-1.5 block text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                Email
              </label>
              <input
                type="email"
                placeholder="ty@email.pl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
                className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand/40 focus:outline-none focus:ring-2 focus:ring-brand/20"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                Hasło
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand/40 focus:outline-none focus:ring-2 focus:ring-brand/20"
              />
            </div>

            {error && (
              <p className="rounded-md border border-danger/30 bg-danger/10 px-3 py-2 text-xs text-danger">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="group mt-2 inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-brand px-4 text-sm font-medium text-brand-contrast transition-transform hover:-translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  Zaloguj
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Dostęp na zaproszenie — skontaktuj się z administratorem.
        </p>
      </div>
    </div>
  );
}
