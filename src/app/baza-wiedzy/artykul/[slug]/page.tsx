import { AppShell } from "@/components/layout/app-shell";
import { articles } from "@/data/articles";
import { categories } from "@/data/categories";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const difficultyLabels: Record<string, { label: string; color: string }> = {
  beginner: { label: "Podstawowy", color: "bg-green-500/10 text-green-400 border-green-500/20" },
  intermediate: { label: "Średni", color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
  advanced: { label: "Zaawansowany", color: "bg-red-500/10 text-red-400 border-red-500/20" },
};

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const category = categories.find((c) => c.id === article.category_id);
  const diff = difficultyLabels[article.difficulty];

  // Simple markdown-to-HTML: headings, code blocks, tables, lists, inline code, bold
  const html = article.content
    // Code blocks
    .replace(/```(\w*)\n([\s\S]*?)```/g, (_m, lang, code) =>
      `<pre class="rounded-lg bg-muted p-4 overflow-x-auto text-sm font-mono my-4"><code class="language-${lang}">${code.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>`
    )
    // Tables
    .replace(/\|(.+)\|\n\|[-| :]+\|\n((?:\|.+\|\n?)*)/g, (_m, header, body) => {
      const headers = header.split("|").map((h: string) => h.trim()).filter(Boolean);
      const rows = body.trim().split("\n").map((row: string) =>
        row.split("|").map((c: string) => c.trim()).filter(Boolean)
      );
      return `<div class="overflow-x-auto my-4"><table class="w-full text-sm border-collapse"><thead><tr>${
        headers.map((h: string) => `<th class="border border-border px-3 py-2 text-left font-medium bg-muted">${h}</th>`).join("")
      }</tr></thead><tbody>${
        rows.map((row: string[]) => `<tr>${row.map((c: string) => `<td class="border border-border px-3 py-2">${c}</td>`).join("")}</tr>`).join("")
      }</tbody></table></div>`;
    })
    // Headings
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-semibold mt-6 mb-2">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold mt-8 mb-3">$1</h2>')
    // Lists
    .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc text-sm leading-relaxed">$1</li>')
    // Paragraphs (lines that don't start with < or are empty)
    .replace(/^(?!<|$|\s*$)(.+)$/gm, '<p class="text-sm leading-relaxed mb-3">$1</p>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code class="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">$1</code>')
    // Bold
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    // Blockquotes
    .replace(/^> (.+)$/gm, '<blockquote class="border-l-2 border-primary pl-4 my-3 text-sm text-muted-foreground italic">$1</blockquote>')
    // Wrap consecutive li items in ul
    .replace(/((?:<li[^>]*>.*<\/li>\n?)+)/g, '<ul class="my-3 space-y-1">$1</ul>');

  return (
    <AppShell>
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link
          href="/baza-wiedzy"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Baza wiedzy
        </Link>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          {category && (
            <Badge variant="secondary">{category.name}</Badge>
          )}
          <Badge variant="outline" className={diff.color}>
            {diff.label}
          </Badge>
        </div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          {article.title}
        </h1>
        <p className="text-lg text-muted-foreground">{article.summary}</p>
      </div>

      {/* Content */}
      <div
        className="prose-custom"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {/* Tags */}
      <div className="mt-8 border-t border-border pt-4">
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              #{tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Related articles */}
      <div className="mt-8">
        <h3 className="mb-3 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Zobacz też
        </h3>
        <div className="space-y-2">
          {articles
            .filter(
              (a) =>
                a.id !== article.id &&
                (a.category_id === article.category_id ||
                  a.tags.some((t) => article.tags.includes(t)))
            )
            .slice(0, 3)
            .map((a) => (
              <Link
                key={a.id}
                href={`/baza-wiedzy/artykul/${a.slug}`}
                className="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent"
              >
                {a.title}
              </Link>
            ))}
        </div>
      </div>
    </AppShell>
  );
}
