"use client";

import { useParams } from "next/navigation";
import { AppShell } from "@/components/layout/app-shell";
import { useLessons } from "@/hooks/use-lessons";
import { ArrowLeft, Award, Download } from "lucide-react";
import Link from "next/link";
import { useRef, useCallback } from "react";

const pathTitles: Record<string, string> = {
  entrepreneur: "Przedsiębiorca",
  cc101: "Claude Code 101",
  "cc-action": "Claude Code w praktyce",
  assistant: "Asystent / Pracownik",
};

export default function CertificatePage() {
  const { pathId } = useParams<{ pathId: string }>();
  const { completedCount, totalCount, progressPercent } = useLessons(pathId);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const isComplete = totalCount > 0 && completedCount === totalCount;
  const title = pathTitles[pathId] || pathId;
  const today = new Date().toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const generateAndDownload = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = 1400;
    const h = 900;
    canvas.width = w;
    canvas.height = h;

    // Warm background
    const grad = ctx.createRadialGradient(w * 0.2, 0, 100, w * 0.5, h * 0.5, w);
    grad.addColorStop(0, "#1a1410");
    grad.addColorStop(0.5, "#0f0d0a");
    grad.addColorStop(1, "#0b0a08");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Border frame
    ctx.strokeStyle = "rgba(217, 119, 87, 0.5)";
    ctx.lineWidth = 2;
    ctx.strokeRect(60, 60, w - 120, h - 120);

    // Inner fine border
    ctx.strokeStyle = "rgba(255, 253, 244, 0.08)";
    ctx.lineWidth = 1;
    ctx.strokeRect(80, 80, w - 160, h - 160);

    // Brand mark
    ctx.fillStyle = "#D97757";
    ctx.beginPath();
    ctx.roundRect(w / 2 - 28, 150, 56, 56, 10);
    ctx.fill();
    ctx.fillStyle = "#1a0f0a";
    ctx.font = "600 28px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("C", w / 2, 180);

    // Eyebrow
    ctx.fillStyle = "#8c877e";
    ctx.font = "500 13px ui-monospace, monospace";
    ctx.textBaseline = "alphabetic";
    ctx.fillText("CERTYFIKAT  ·  CLAUDE CODE ACADEMY", w / 2, 260);

    // Path title — display serif
    ctx.fillStyle = "#ecebe5";
    ctx.font = "400 italic 68px 'Instrument Serif', Georgia, serif";
    ctx.fillText(title, w / 2, 400);

    // Meta
    ctx.fillStyle = "#8c877e";
    ctx.font = "400 16px system-ui, sans-serif";
    ctx.fillText(
      `${totalCount} lekcji ukończonych  ·  ${today}`,
      w / 2,
      460
    );

    // Divider
    ctx.strokeStyle = "rgba(217, 119, 87, 0.35)";
    ctx.beginPath();
    ctx.moveTo(w / 2 - 60, 520);
    ctx.lineTo(w / 2 + 60, 520);
    ctx.stroke();

    // Statement
    ctx.fillStyle = "#ecebe5";
    ctx.font = "400 18px system-ui, sans-serif";
    ctx.fillText("Ukończono wszystkie lekcje ścieżki.", w / 2, 580);

    // Footer
    ctx.fillStyle = "#6a655c";
    ctx.font = "400 13px ui-monospace, monospace";
    ctx.fillText("claude-code-academy-tan.vercel.app", w / 2, h - 110);

    const link = document.createElement("a");
    link.download = `certyfikat-${pathId}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  }, [pathId, title, today, totalCount]);

  return (
    <AppShell>
      <Link
        href={`/szkolenia/${pathId}`}
        className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Wróć do ścieżki
      </Link>

      {isComplete ? (
        <div className="mt-12 overflow-hidden rounded-2xl border border-brand/30 bg-card">
          <div className="relative p-10 text-center">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-glow-brand"
            />
            <div className="relative">
              <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-xl bg-brand text-brand-contrast">
                <Award className="h-6 w-6" />
              </div>
              <p className="label-eyebrow mb-3">Gratulacje</p>
              <h1 className="font-display text-4xl italic leading-tight sm:text-5xl">
                {title}
              </h1>
              <p className="mx-auto mt-4 max-w-md text-[14px] leading-relaxed text-muted-foreground">
                Ukończyłeś wszystkie {totalCount} lekcji. Pobierz certyfikat
                PNG jako pamiątkę i dowód nauki.
              </p>

              <button
                onClick={generateAndDownload}
                className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-medium text-brand-contrast shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_8px_24px_-8px_rgba(217,119,87,0.5)] transition-transform hover:-translate-y-[1px]"
              >
                <Download className="h-4 w-4" />
                Pobierz certyfikat (PNG)
              </button>

              <canvas ref={canvasRef} className="hidden" />
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-12 rounded-2xl border border-dashed border-border bg-card p-10 text-center">
          <Award className="mx-auto mb-4 h-10 w-10 text-muted-foreground" />
          <h1 className="text-2xl font-medium tracking-tight">
            Jeszcze nie ukończono
          </h1>
          <p className="mx-auto mt-3 max-w-md text-[13.5px] text-muted-foreground">
            Ukończ wszystkie lekcje żeby odblokować certyfikat.
          </p>
          <div className="mx-auto mt-6 max-w-xs">
            <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
              <span>Postęp</span>
              <span>
                {completedCount}/{totalCount} · {progressPercent}%
              </span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-background">
              <div
                className="h-full rounded-full bg-brand transition-all"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
          <Link
            href={`/szkolenia/${pathId}`}
            className="mt-8 inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm text-foreground transition-colors hover:border-foreground/25 hover:bg-accent"
          >
            Kontynuuj naukę
          </Link>
        </div>
      )}
    </AppShell>
  );
}
