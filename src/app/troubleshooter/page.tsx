"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { LifeBuoy, Loader2, Send, Lightbulb, ChevronRight } from "lucide-react";

const commonProblems = [
  {
    q: "Claude nie odpowiada / zawiesił się",
    hint: "Spróbuj Ctrl+C żeby przerwać, potem /clear żeby zacząć nową rozmowę.",
  },
  {
    q: "Build się nie kompiluje po zmianach Claude",
    hint: "Powiedz Claude: 'npm run build się nie kompiluje — napraw błędy'. Claude przeczyta output i poprawi.",
  },
  {
    q: "Claude zmienił nie ten plik co trzeba",
    hint: "Powiedz: 'Cofnij ostatnią zmianę' lub 'To był zły plik — zmień X w pliku Y.tsx'",
  },
  {
    q: "Nie widzę panelu Claude w VS Code",
    hint: "Cmd+Shift+P → wpisz 'Claude Code' → wybierz 'Focus'. Jeśli nie ma, zainstaluj rozszerzenie (Cmd+Shift+X → Claude Code).",
  },
  {
    q: "Claude nie widzi moich plików",
    hint: "Upewnij się że otworzyłeś folder projektu w VS Code (File → Open Folder). Claude widzi tylko pliki w otwartym folderze.",
  },
  {
    q: "Kontekst się zapełnił, Claude gubi wątek",
    hint: "Wpisz /compact żeby skompresować rozmowę. Albo /clear i zacznij od nowa z precyzyjnym opisem.",
  },
  {
    q: "Claude ciągle pyta o pozwolenie",
    hint: "Wpisz /permissions i dodaj często używane komendy do 'Allow'. Albo zmień tryb na 'acceptEdits'.",
  },
  {
    q: "Deploy na Vercel się nie udał",
    hint: "Powiedz Claude: 'Sprawdź dlaczego deploy się nie udał'. Pokaż mu logi błędów (skopiuj ze strony Vercel).",
  },
];

export default function TroubleshooterPage() {
  const [problem, setProblem] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedHint, setSelectedHint] = useState<number | null>(null);

  const handleQuickProblem = (i: number, hint: string) => {
    setSelectedHint(i);
    setAnswer(hint);
  };

  const handleAsk = async () => {
    if (!problem.trim()) return;
    setLoading(true);
    setSelectedHint(null);
    setAnswer("");
    try {
      const res = await fetch("/api/troubleshooter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: problem }),
      });
      const data = await res.json();
      setAnswer(data.answer || "Nie udało się uzyskać odpowiedzi.");
    } catch {
      setAnswer("Błąd połączenia. Spróbuj ponownie.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppShell>
      {/* Header */}
      <div className="mb-10">
        <p className="label-eyebrow mb-4">Pomoc</p>
        <h1 className="text-4xl leading-[1.05] tracking-tight sm:text-5xl">
          <span className="font-display italic">Rozwiąż</span> problem
        </h1>
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
          Opisz co się dzieje. AI przeszuka bazę wiedzy i wróci z rozwiązaniem.
          Albo wybierz z listy najczęstszych problemów.
        </p>
      </div>

      {/* Ask AI */}
      <div className="mb-12 overflow-hidden rounded-xl border border-border bg-card">
        <div className="flex items-center gap-2.5 border-b border-border px-5 py-3">
          <LifeBuoy className="h-4 w-4 text-brand" />
          <h2 className="text-[13px] font-medium">Opisz swój problem</h2>
        </div>
        <div className="p-5">
          <textarea
            placeholder={`Np. „Claude nie widzi moich plików w VS Code" lub „Build się nie kompiluje"…`}
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            rows={3}
            className="mb-4 w-full resize-none rounded-lg border border-border bg-background p-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand/40 focus:outline-none focus:ring-2 focus:ring-brand/20"
          />
          <button
            onClick={handleAsk}
            disabled={loading || !problem.trim()}
            className="group inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-brand-contrast shadow-[0_1px_0_rgba(255,255,255,0.15)_inset] transition-transform hover:-translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
            Szukaj rozwiązania
          </button>

          {answer && selectedHint === null && (
            <div className="mt-5 rounded-lg border border-border bg-background p-5 prose-custom">
              <div
                dangerouslySetInnerHTML={{
                  __html: answer.replace(/\n/g, "<br/>"),
                }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Common problems */}
      <div>
        <div className="mb-5 flex items-center gap-2.5">
          <Lightbulb className="h-4 w-4 text-warn" />
          <h2 className="text-[13px] font-medium uppercase tracking-wider text-muted-foreground font-mono">
            Najczęstsze problemy
          </h2>
        </div>
        <ul className="overflow-hidden rounded-xl border border-border bg-card">
          {commonProblems.map((p, i) => {
            const isOpen = selectedHint === i;
            return (
              <li
                key={i}
                className={i > 0 ? "border-t border-border" : ""}
              >
                <button
                  onClick={() => handleQuickProblem(i, p.hint)}
                  className="group flex w-full items-center gap-4 px-5 py-3.5 text-left transition-colors hover:bg-accent"
                >
                  <span className="font-mono text-[10px] text-muted-foreground/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="flex-1 text-[13.5px] text-foreground">{p.q}</p>
                  <ChevronRight
                    className={`h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform ${
                      isOpen ? "rotate-90 text-brand" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-border bg-background/50 px-5 py-4 pl-12">
                    <p className="text-[13px] leading-relaxed text-muted-foreground">
                      {p.hint}
                    </p>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </AppShell>
  );
}
