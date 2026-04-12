/**
 * Simple markdown-to-HTML converter.
 * Uses prose-custom CSS classes from globals.css.
 */
export function markdownToHtml(content: string): string {
  return content
    // Code blocks
    .replace(/```(\w*)\n([\s\S]*?)```/g, (_m, _lang, code) =>
      `<pre><code>${code.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>`
    )
    // Tables
    .replace(
      /\|(.+)\|\n\|[-| :]+\|\n((?:\|.+\|\n?)*)/g,
      (_m, header, body) => {
        const headers = header
          .split("|")
          .map((h: string) => h.trim())
          .filter(Boolean);
        const rows = body
          .trim()
          .split("\n")
          .map((row: string) =>
            row
              .split("|")
              .map((c: string) => c.trim())
              .filter(Boolean)
          );
        return `<table><thead><tr>${headers
          .map((h: string) => `<th>${h}</th>`)
          .join("")}</tr></thead><tbody>${rows
          .map(
            (row: string[]) =>
              `<tr>${row.map((c: string) => `<td>${c}</td>`).join("")}</tr>`
          )
          .join("")}</tbody></table>`;
      }
    )
    // Headings
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    // Lists
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    // Blockquotes
    .replace(/^> (.+)$/gm, "<blockquote>$1</blockquote>")
    // Paragraphs
    .replace(/^(?!<|$|\s*$)(.+)$/gm, "<p>$1</p>")
    // Inline code
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    // Bold
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    // Wrap consecutive li in ul
    .replace(/((?:<li>.*<\/li>\n?)+)/g, "<ul>$1</ul>");
}
