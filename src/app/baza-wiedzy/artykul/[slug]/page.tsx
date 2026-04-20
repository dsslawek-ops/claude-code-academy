import { AppShell } from "@/components/layout/app-shell";
import { articles } from "@/data/articles";
import { categories } from "@/data/categories";
import { markdownToHtml } from "@/lib/markdown";
import { FeedbackButtons } from "@/components/feedback-buttons";
import { ArrowLeft, ArrowUpRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const difficultyConfig: Record<
  string,
  { label: string; className: string }
> = {
  beginner: { label: "Podstawowy", className: "text-ok" },
  intermediate: { label: "Średni", className: "text-warn" },
  advanced: { label: "Zaawansowany", className: "text-danger" },
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
  const diff = difficultyConfig[article.difficulty];
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
    <AppShell width="prose">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-1.5 text-xs text-muted-foreground">
        <Link
          href="/baza-wiedzy"
          className="transition-colors hover:text-foreground"
        >
          Baza wiedzy
        </Link>
        {category && (
          <>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50" />
            <Link
              href={`/baza-wiedzy#${category.slug}`}
              className="transition-colors hover:text-foreground"
            >
              {category.name}
            </Link>
          </>
        )}
      </nav>

      {/* Header */}
      <header className="mb-10">
        <div className="mb-5 flex flex-wrap items-center gap-3 text-[11px] font-mono uppercase tracking-wider">
          {category && (
            <span className="text-muted-foreground">{category.name}</span>
          )}
          <span className="text-muted-foreground/40">·</span>
          <span className={diff.className}>{diff.label}</span>
        </div>
        <h1 className="font-display text-4xl italic leading-[1.05] tracking-tight sm:text-[54px]">
          {article.title}
        </h1>
        <p className="mt-5 text-[16px] leading-relaxed text-muted-foreground">
          {article.summary}
        </p>
      </header>

      {/* Content */}
      <article
        className="prose-custom"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {/* Tags */}
      {article.tags.length > 0 && (
        <div className="mt-10 border-t border-border pt-6">
          <p className="label-eyebrow mb-3">Tagi</p>
          <div className="flex flex-wrap gap-1.5">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border bg-card px-2 py-1 font-mono text-[11px] text-muted-foreground"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Feedback */}
      <div className="mt-8">
        <FeedbackButtons contentType="article" contentId={article.id} />
      </div>

      {/* Related */}
      {relatedArticles.length > 0 && (
        <section className="mt-14 border-t border-border pt-10">
          <p className="label-eyebrow mb-5">Zobacz też</p>
          <ul className="overflow-hidden rounded-xl border border-border bg-card">
            {relatedArticles.map((a, i) => (
              <li
                key={a.id}
                className={i > 0 ? "border-t border-border" : ""}
              >
                <Link
                  href={`/baza-wiedzy/artykul/${a.slug}`}
                  className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-accent"
                >
                  <ArrowLeft className="h-3 w-3 rotate-180 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                  <div className="min-w-0 flex-1">
                    <h4 className="truncate text-[14px] font-medium text-foreground">
                      {a.title}
                    </h4>
                    <p className="truncate text-[12.5px] text-muted-foreground">
                      {a.summary}
                    </p>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </AppShell>
  );
}
