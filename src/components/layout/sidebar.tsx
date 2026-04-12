"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut, Search, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/navigation";
import { createClient } from "@/lib/supabase/client";

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  };

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-full w-[260px] border-r border-border bg-sidebar lg:block">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center gap-3 border-b border-border px-6">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
            <Sparkles className="h-4 w-4 text-primary" />
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-tight leading-none">
              Claude Code
            </h1>
            <p className="text-[11px] font-medium text-primary/70">Academy</p>
          </div>
        </div>

        {/* Search trigger */}
        <div className="px-3 pt-4 pb-2">
          <button
            onClick={() =>
              document.dispatchEvent(
                new KeyboardEvent("keydown", { key: "k", metaKey: true })
              )
            }
            className="flex w-full items-center gap-2.5 rounded-lg border border-border bg-background/50 px-3 py-2 text-sm text-muted-foreground transition-all hover:border-primary/30 hover:bg-background"
          >
            <Search className="h-3.5 w-3.5" />
            <span className="flex-1 text-left text-xs">Szukaj...</span>
            <kbd className="flex items-center gap-0.5 rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
              <span className="text-[11px]">⌘</span>K
            </kbd>
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-0.5 overflow-y-auto px-3 py-2">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "group relative flex items-center gap-3 rounded-lg px-3 py-2 text-[13px] font-medium transition-all duration-150",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                )}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r-full bg-primary" />
                )}
                <item.icon
                  className={cn(
                    "h-4 w-4 transition-transform duration-150 group-hover:scale-110",
                    isActive ? "text-primary" : ""
                  )}
                />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-border p-3">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <LogOut className="h-3.5 w-3.5" />
            Wyloguj się
          </button>
          <p className="mt-2 px-3 text-[10px] text-muted-foreground/50">
            v1.0 · Kwiecień 2026
          </p>
        </div>
      </div>
    </aside>
  );
}
