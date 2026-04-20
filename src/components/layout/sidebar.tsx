"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { navGroups } from "@/lib/navigation";
import { createClient } from "@/lib/supabase/client";
import { ThemeToggle } from "@/components/theme-toggle";

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
    <aside className="fixed left-0 top-0 z-40 hidden h-full w-[260px] border-r border-sidebar-border bg-sidebar lg:block">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <Link
          href="/"
          className="flex h-16 items-center gap-2.5 px-5 transition-opacity hover:opacity-80"
        >
          <span
            aria-hidden
            className="relative grid h-6 w-6 place-items-center rounded-md bg-brand text-[11px] font-semibold tracking-tight text-brand-contrast"
          >
            C
            <span className="pointer-events-none absolute inset-0 rounded-md shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[13px] font-semibold tracking-tight text-foreground">
              Claude Code
            </span>
            <span className="font-display text-[13px] italic text-muted-foreground">
              Academy
            </span>
          </span>
        </Link>

        {/* Search */}
        <div className="px-3 pb-3">
          <button
            onClick={() =>
              document.dispatchEvent(
                new KeyboardEvent("keydown", { key: "k", metaKey: true })
              )
            }
            className="group flex w-full items-center gap-2 rounded-md border border-sidebar-border bg-background/40 px-2.5 py-1.5 text-[12px] text-muted-foreground transition-colors hover:border-border hover:text-foreground"
          >
            <Search className="h-3.5 w-3.5" />
            <span className="flex-1 text-left">Szukaj</span>
            <kbd className="kbd text-[10px]">⌘K</kbd>
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-1">
          {navGroups.map((group, gi) => (
            <div key={gi} className={cn(gi === 0 ? "mb-1" : "mb-1 mt-5")}>
              {group.label && (
                <p className="label-eyebrow px-2.5 pb-1.5 text-[10px]">
                  {group.label}
                </p>
              )}
              <div className="space-y-0.5">
                {group.items.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(item.href));
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "group relative flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-[13px] transition-colors",
                        isActive
                          ? "bg-sidebar-accent font-medium text-foreground"
                          : "text-sidebar-foreground hover:bg-sidebar-accent/60 hover:text-foreground"
                      )}
                    >
                      {isActive && (
                        <span
                          aria-hidden
                          className="absolute left-0 top-1/2 h-4 w-[2px] -translate-y-1/2 rounded-r bg-brand"
                        />
                      )}
                      <item.icon
                        className={cn(
                          "h-[15px] w-[15px] shrink-0 transition-colors",
                          isActive
                            ? "text-foreground"
                            : "text-muted-foreground group-hover:text-foreground"
                        )}
                      />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="space-y-0.5 border-t border-sidebar-border px-3 py-3">
          <ThemeToggle />
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-2.5 rounded-md px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-foreground"
          >
            <LogOut className="h-3.5 w-3.5" />
            Wyloguj
          </button>
        </div>
      </div>
    </aside>
  );
}
