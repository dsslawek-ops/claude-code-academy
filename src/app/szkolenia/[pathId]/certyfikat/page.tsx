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

    const w = 1200;
    const h = 800;
    canvas.width = w;
    canvas.height = h;

    // Background
    ctx.fillStyle = "#0a0a0a";
    ctx.fillRect(0, 0, w, h);

    // Border
    ctx.strokeStyle = "#262626";
    ctx.lineWidth = 2;
    ctx.strokeRect(40, 40, w - 80, h - 80);

    // Inner border
    ctx.strokeStyle = "#1a1a1a";
    ctx.lineWidth = 1;
    ctx.strokeRect(50, 50, w - 100, h - 100);

    // Title
    ctx.fillStyle = "#ededed";
    ctx.font = "bold 14px system-ui, -apple-system, sans-serif";
    ctx.textAlign = "center";
    ctx.letterSpacing = "4px";
    ctx.fillText("CERTYFIKAT UKOŃCZENIA", w / 2, 160);

    // Course name
    ctx.fillStyle = "#ededed";
    ctx.font = "bold 36px system-ui, -apple-system, sans-serif";
    ctx.letterSpacing = "0px";
    ctx.fillText(title, w / 2, 300);

    // Subtitle
    ctx.fillStyle = "#737373";
    ctx.font = "16px system-ui, -apple-system, sans-serif";
    ctx.fillText("Claude Code Academy", w / 2, 350);

    // Lessons info
    ctx.fillStyle = "#737373";
    ctx.font = "14px system-ui, -apple-system, sans-serif";
    ctx.fillText(
      `${totalCount} lekcji ukończonych`,
      w / 2,
      420
    );

    // Divider
    ctx.strokeStyle = "#262626";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(w / 2 - 100, 470);
    ctx.lineTo(w / 2 + 100, 470);
    ctx.stroke();

    // Date
    ctx.fillStyle = "#525252";
    ctx.font = "14px system-ui, -apple-system, sans-serif";
    ctx.fillText(today, w / 2, 520);

    // Footer
    ctx.fillStyle = "#404040";
    ctx.font = "12px system-ui, -apple-system, sans-serif";
    ctx.fillText(
      "claude-code-academy-tan.vercel.app",
      w / 2,
      h - 80
    );

    // Download
    const link = document.createElement("a");
    link.download = `certyfikat-${pathId}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  }, [pathId, title, today, totalCount]);

  return (
    <AppShell>
      <div className="mb-6">
        <Link
          href={`/szkolenia/${pathId}`}
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Wróć do ścieżki
        </Link>
      </div>

      {isComplete ? (
        <div className="text-center">
          <Award className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
          <h1 className="mb-2 text-2xl font-semibold tracking-tight">
            Gratulacje!
          </h1>
          <p className="mb-8 text-sm text-muted-foreground">
            Ukończyłeś ścieżkę &ldquo;{title}&rdquo; — wszystkie {totalCount} lekcji.
          </p>

          <button
            onClick={generateAndDownload}
            className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            <Download className="h-4 w-4" />
            Pobierz certyfikat (PNG)
          </button>

          <canvas ref={canvasRef} className="hidden" />
        </div>
      ) : (
        <div className="text-center">
          <h1 className="mb-2 text-2xl font-semibold tracking-tight">
            Jeszcze nie ukończono
          </h1>
          <p className="mb-4 text-sm text-muted-foreground">
            Ukończ wszystkie lekcje żeby otrzymać certyfikat.
          </p>
          <p className="text-sm text-muted-foreground">
            Postęp: {completedCount}/{totalCount} ({progressPercent}%)
          </p>
          <Link
            href={`/szkolenia/${pathId}`}
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Kontynuuj naukę
          </Link>
        </div>
      )}
    </AppShell>
  );
}
