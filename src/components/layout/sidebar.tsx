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
    <aside className="fixed left-0 top-0 z-40 hidden h-full w-[240px] border-r border-border bg-background lg:block">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-14 items-center gap-2.5 px-5">
          <Sparkles className="h-4 w-4 text-muted-foreground" />
          <span className="text-[13px] font-semibold tracking-tight">
            Claude Code Academy
          </span>
        </div>

        {/* Search */}
        <div className="px-3 pb-3">
          <button
            onClick={() =>
              document.dispatchEvent(
                new KeyboardEvent("keydown", { key: "k", metaKey: true })
              )
            }
            className="flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-[12px] text-muted-foreground transition-colors hover:text-foreground"
          >
            <Search className="h-3.5 w-3.5" />
            <span className="flex-1 text-left">Szukaj</span>
            <kbd className="text-[10px] text-muted-foreground/60">⌘K</kbd>
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-1">
          <div className="space-y-0.5">
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
                    "flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-[13px] transition-colors",
                    isActive
                      ? "font-medium text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Footer */}
        <div className="border-t border-border px-3 py-3">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-[12px] text-muted-foreground transition-colors hover:text-foreground"
          >
            <LogOut className="h-3.5 w-3.5" />
            Wyloguj
          </button>
        </div>
      </div>
    </aside>
  );
}
