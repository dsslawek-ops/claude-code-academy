import { NextResponse } from "next/server";

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

export async function POST() {
  if (!ANTHROPIC_API_KEY) {
    return NextResponse.json(
      { error: "Brak klucza API" },
      { status: 500 }
    );
  }

  try {
    // Fetch Claude Code changelog from official docs
    const changelogUrl = "https://docs.anthropic.com/en/docs/claude-code/changelog";
    const res = await fetch(changelogUrl, {
      headers: { "User-Agent": "ClaudeCodeAcademy/1.0" },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Nie udało się pobrać changelog" },
        { status: 502 }
      );
    }

    const html = await res.text();

    // Extract text content (strip HTML tags)
    const textContent = html
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .slice(0, 15000); // Limit to avoid token overflow

    // Ask Claude to summarize changes in Polish
    const aiRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-5-20250514",
        max_tokens: 2000,
        system: `Jesteś ekspertem od Claude Code. Analizujesz changelog i tworzysz podsumowanie po polsku.

ZASADY:
- Odpowiadaj WYŁĄCZNIE po polsku
- Wylistuj ostatnie 5-10 zmian jako JSON array
- Każda zmiana: { "date": "YYYY-MM-DD", "title": "tytuł po polsku", "summary": "1-2 zdania opisu po polsku", "type": "feature" | "change" | "fix" }
- Zwróć TYLKO JSON array, bez markdown, bez tekstu wokół
- Jeśli nie możesz wyciągnąć zmian, zwróć pusty array []`,
        messages: [
          {
            role: "user",
            content: `Przeanalizuj ten changelog Claude Code i wyciągnij ostatnie zmiany:\n\n${textContent}`,
          },
        ],
      }),
    });

    if (!aiRes.ok) {
      console.error("AI changelog error:", await aiRes.text());
      return NextResponse.json(
        { error: "Błąd analizy changelog" },
        { status: 502 }
      );
    }

    const aiData = await aiRes.json();
    const rawText = aiData.content?.[0]?.text || "[]";

    // Parse JSON from response
    let entries;
    try {
      // Try to extract JSON array from response
      const jsonMatch = rawText.match(/\[[\s\S]*\]/);
      entries = jsonMatch ? JSON.parse(jsonMatch[0]) : [];
    } catch {
      entries = [];
    }

    return NextResponse.json({
      entries,
      fetched_at: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Changelog fetch error:", error);
    return NextResponse.json(
      { error: "Błąd pobierania changelog" },
      { status: 500 }
    );
  }
}
