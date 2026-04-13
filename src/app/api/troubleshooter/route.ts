import { NextRequest, NextResponse } from "next/server";
import Fuse from "fuse.js";
import { articles } from "@/data/articles";
import { shortcuts } from "@/data/shortcuts";
import { slashCommands } from "@/data/slash-commands";
import { tools } from "@/data/tools";
import { lessons } from "@/data/lessons";
import { lessonsCC101 } from "@/data/lessons-cc101";

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

// Build a searchable index of all content for RAG
interface ContentChunk {
  type: string;
  title: string;
  content: string;
}

const allContent: ContentChunk[] = [
  ...articles.map((a) => ({
    type: "article",
    title: a.title,
    content: a.content,
  })),
  ...[...lessons, ...lessonsCC101].map((l) => ({
    type: "lesson",
    title: l.title,
    content: l.content,
  })),
];

const fuse = new Fuse(allContent, {
  keys: [
    { name: "title", weight: 3 },
    { name: "content", weight: 1 },
  ],
  threshold: 0.5,
  includeScore: true,
});

function findRelevantContent(question: string): string {
  // Find top 5 most relevant pieces of content
  const results = fuse.search(question, { limit: 5 });

  if (results.length === 0) return "";

  return results
    .map(
      (r) =>
        `### ${r.item.title} (${r.item.type})\n${r.item.content.slice(0, 1500)}`
    )
    .join("\n\n---\n\n");
}

function buildSystemPrompt(relevantContent: string): string {
  // Compact reference data
  const shortcutRef = shortcuts
    .map((s) => `${s.key_combo}: ${s.description}`)
    .join("\n");

  const commandRef = slashCommands
    .map((c) => `${c.command}: ${c.description}`)
    .join("\n");

  const toolRef = tools.map((t) => `${t.name}: ${t.description}`).join("\n");

  return `Jesteś ekspertem od Claude Code — narzędzia AI do programowania od Anthropic.
Odpowiadasz po polsku, przystępnie, dla osób które NIE są programistami.

ZASADY:
- Odpowiadaj WYŁĄCZNIE po polsku
- Dawaj konkretne kroki do rozwiązania (1, 2, 3...)
- Jeśli nie znasz odpowiedzi, powiedz wprost
- Unikaj żargonu — wyjaśniaj terminy techniczne
- Formatuj odpowiedź z nagłówkami (##) i listami
- Bądź zwięzły — max 400 słów
- Na końcu zasugeruj powiązany artykuł z bazy wiedzy jeśli pasuje

REFERENCJA SKRÓTÓW:
${shortcutRef}

REFERENCJA KOMEND:
${commandRef}

REFERENCJA NARZĘDZI:
${toolRef}

${
  relevantContent
    ? `NAJISTOTNIEJSZA TREŚĆ Z BAZY WIEDZY (użyj do odpowiedzi):\n\n${relevantContent}`
    : ""
}`;
}

export async function POST(request: NextRequest) {
  if (!ANTHROPIC_API_KEY) {
    return NextResponse.json(
      {
        answer:
          "AI Troubleshooter nie jest jeszcze skonfigurowany — brakuje klucza API. Skontaktuj się z administratorem.",
      },
      { status: 200 }
    );
  }

  let question: string;
  try {
    const body = await request.json();
    question = body.question;
  } catch {
    return NextResponse.json(
      { error: "Nieprawidłowe żądanie" },
      { status: 400 }
    );
  }

  if (!question || typeof question !== "string" || question.length > 2000) {
    return NextResponse.json(
      { error: "Pytanie jest wymagane (max 2000 znaków)" },
      { status: 400 }
    );
  }

  try {
    // RAG: find relevant content from knowledge base
    const relevantContent = findRelevantContent(question);
    const systemPrompt = buildSystemPrompt(relevantContent);

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-5-20250514",
        max_tokens: 1500,
        system: systemPrompt,
        messages: [{ role: "user", content: question }],
      }),
    });

    if (!response.ok) {
      console.error("Anthropic API error:", await response.text());
      return NextResponse.json(
        {
          answer:
            "Przepraszam, nie udało się uzyskać odpowiedzi. Spróbuj ponownie za chwilę.",
        },
        { status: 200 }
      );
    }

    const data = await response.json();
    const answer =
      data.content?.[0]?.text || "Nie udało się wygenerować odpowiedzi.";

    return NextResponse.json({ answer });
  } catch (error) {
    console.error("Troubleshooter error:", error);
    return NextResponse.json(
      {
        answer:
          "Wystąpił błąd połączenia. Sprawdź czy masz internet i spróbuj ponownie.",
      },
      { status: 200 }
    );
  }
}
