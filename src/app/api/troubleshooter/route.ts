import { NextRequest, NextResponse } from "next/server";
import { articles } from "@/data/articles";
import { shortcuts } from "@/data/shortcuts";
import { slashCommands } from "@/data/slash-commands";
import { tools } from "@/data/tools";

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

function buildContext(): string {
  const articlesSummary = articles
    .map((a) => `- ${a.title}: ${a.summary}`)
    .join("\n");

  const shortcutsSummary = shortcuts
    .map((s) => `- ${s.key_combo}: ${s.description} (${s.platform})`)
    .join("\n");

  const commandsSummary = slashCommands
    .map((c) => `- ${c.command}: ${c.description}`)
    .join("\n");

  const toolsSummary = tools
    .map((t) => `- ${t.name}: ${t.description}`)
    .join("\n");

  return `Jesteś ekspertem od Claude Code — narzędzia AI do programowania od Anthropic.
Odpowiadasz po polsku, przystępnie, dla osób które NIE są programistami.
Używaj prostego języka, analogii, konkretnych kroków.

BAZA WIEDZY:

ARTYKUŁY:
${articlesSummary}

SKRÓTY KLAWISZOWE:
${shortcutsSummary}

SLASH COMMANDS:
${commandsSummary}

NARZĘDZIA:
${toolsSummary}

ZASADY:
- Odpowiadaj WYŁĄCZNIE po polsku
- Dawaj konkretne kroki do rozwiązania (1, 2, 3...)
- Jeśli nie znasz odpowiedzi, powiedz to wprost
- Unikaj żargonu — wyjaśniaj terminy techniczne
- Odwołuj się do artykułów z bazy wiedzy gdy to pasuje
- Bądź zwięzły — max 300 słów`;
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

  const { question } = await request.json();

  if (!question || typeof question !== "string" || question.length > 2000) {
    return NextResponse.json(
      { error: "Pytanie jest wymagane (max 2000 znaków)" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-5-20250514",
        max_tokens: 1024,
        system: buildContext(),
        messages: [{ role: "user", content: question }],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Anthropic API error:", errorText);
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
