"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { LifeBuoy, Loader2, Send, Lightbulb } from "lucide-react";

const commonProblems = [
  { q: "Claude nie odpowiada / zawiesił się", hint: "Spróbuj Ctrl+C żeby przerwać, potem /clear żeby zacząć nową rozmowę." },
  { q: "Build się nie kompiluje po zmianach Claude", hint: "Powiedz Claude: 'npm run build się nie kompiluje — napraw błędy'. Claude przeczyta output i poprawi." },
  { q: "Claude zmienił nie ten plik co trzeba", hint: "Powiedz: 'Cofnij ostatnią zmianę' lub 'To był zły plik — zmień X w pliku Y.tsx'" },
  { q: "Nie widzę panelu Claude w VS Code", hint: "Cmd+Shift+P → wpisz 'Claude Code' → wybierz 'Focus'. Jeśli nie ma, zainstaluj rozszerzenie (Cmd+Shift+X → Claude Code)." },
  { q: "Claude nie widzi moich plików", hint: "Upewnij się że otworzyłeś folder projektu w VS Code (File → Open Folder). Claude widzi tylko pliki w otwartym folderze." },
  { q: "Kontekst się zapełnił, Claude gubi wątek", hint: "Wpisz /compact żeby skompresować rozmowę. Albo /clear i zacznij od nowa z precyzyjnym opisem." },
  { q: "Claude ciągle pyta o pozwolenie", hint: "Wpisz /permissions i dodaj często używane komendy do 'Allow'. Albo zmień tryb na 'acceptEdits'." },
  { q: "Deploy na Vercel się nie udał", hint: "Powiedz Claude: 'Sprawdź dlaczego deploy się nie udał'. Pokaż mu logi błędów (skopiuj ze strony Vercel)." },
];

export default function TroubleshooterPage() {
  const [problem, setProblem] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleQuickProblem = (hint: string) => {
    setAnswer(hint);
  };

  const handleAsk = async () => {
    if (!problem.trim()) return;
    setLoading(true);
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
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          Rozwiąż problem
        </h1>
        <p className="text-muted-foreground">
          Opisz swój problem lub wybierz z najczęstszych poniżej.
        </p>
      </div>

      {/* Ask AI */}
      <div className="mb-8 rounded-lg border border-border bg-card p-5">
        <div className="mb-3 flex items-center gap-2">
          <LifeBuoy className="h-5 w-5 text-primary" />
          <h2 className="font-semibold">Opisz swój problem</h2>
        </div>
        <Textarea
          placeholder="Np. 'Claude nie widzi moich plików w VS Code' lub 'Build się nie kompiluje po zmianach'..."
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          rows={3}
          className="mb-3"
        />
        <Button onClick={handleAsk} disabled={loading || !problem.trim()}>
          {loading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Send className="mr-2 h-4 w-4" />
          )}
          Szukaj rozwiązania
        </Button>

        {answer && (
          <div className="mt-4 animate-fade-in rounded-lg border border-border bg-surface p-5 prose-custom">
            <div dangerouslySetInnerHTML={{ __html: answer.replace(/\n/g, "<br/>") }} />
          </div>
        )}
      </div>

      {/* Common problems */}
      <div>
        <div className="mb-4 flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-yellow-400" />
          <h2 className="font-semibold">Najczęstsze problemy</h2>
        </div>
        <div className="space-y-2">
          {commonProblems.map((p, i) => (
            <button
              key={i}
              onClick={() => handleQuickProblem(p.hint)}
              className="w-full rounded-lg border border-border bg-card p-4 text-left transition-all hover:border-primary/50"
            >
              <p className="text-sm font-medium">{p.q}</p>
              {answer === p.hint && (
                <div className="mt-3 rounded-md border border-border bg-muted p-3">
                  <p className="text-sm text-muted-foreground">{p.hint}</p>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
