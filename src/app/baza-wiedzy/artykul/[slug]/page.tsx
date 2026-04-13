import { AppShell } from "@/components/layout/app-shell";
import { articles } from "@/data/articles";
import { categories } from "@/data/categories";
import { markdownToHtml } from "@/lib/markdown";
import { FeedbackButtons } from "@/components/feedback-buttons";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const difficultyLabels: Record<string, { label: string; color: string }> = {
  beginner: {
    label: "Podstawowy",
    color: "bg-green-500/10 text-green-400 border-green-500/20",
  },
  intermediate: {
    label: "Średni",
    color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  },
  advanced: {
    label: "Zaawansowany",
    color: "bg-red-500/10 text-red-400 border-red-500/20",
  },
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
  const html = markdownToHtml(article.content);

  const relatedArticles = articles
    .filter(
      (a) =>
        a.id !== article.id &&
        (a.category_id === article.category_id ||
          a.tags.some((t) => article.tags.includes(t)))
    )
    .slice(0, 3);

  return (
    <AppShell>
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-1.5 text-xs text-muted-foreground animate-fade-in">
        <Link href="/baza-wiedzy" className="hover:text-foreground transition-colors">
          Baza wiedzy
        </Link>
        <ChevronRight className="h-3 w-3" />
        {category && (
          <>
            <span className="text-foreground/60">{category.name}</span>
            <ChevronRight className="h-3 w-3" />
          </>
        )}
        <span className="truncate text-foreground/80">{article.title}</span>
      </nav>

      {/* Header */}
      <div className="mb-10 animate-fade-in">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          {category && (
            <Badge variant="secondary" className="text-xs">{category.name}</Badge>
          )}
          <Badge variant="outline" className={`text-xs ${diff.color}`}>
            {diff.label}
          </Badge>
        </div>
        <h1 className="mb-3 text-3xl font-bold tracking-tight">
          {article.title}
        </h1>
        <p className="text-base leading-relaxed text-muted-foreground">
          {article.summary}
        </p>
      </div>

      {/* Content */}
      <div
        className="prose-custom animate-fade-in animation-delay-100"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {/* Feedback */}
      <div className="mt-10 border-t border-border pt-5">
        <FeedbackButtons contentType="article" contentId={article.id} />
      </div>

      {/* Tags */}
      <div className="mt-6">
        <div className="flex flex-wrap gap-1.5">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Related */}
      {relatedArticles.length > 0 && (
        <div className="mt-8 animate-fade-in animation-delay-300">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Zobacz też
          </h3>
          <div className="space-y-1">
            {relatedArticles.map((a) => (
              <Link
                key={a.id}
                href={`/baza-wiedzy/artykul/${a.slug}`}
                className="group flex items-center gap-2 rounded-lg px-3 py-2.5 transition-colors hover:bg-accent"
              >
                <ArrowLeft className="h-3 w-3 rotate-180 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                <span className="text-sm">{a.title}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </AppShell>
  );
}
