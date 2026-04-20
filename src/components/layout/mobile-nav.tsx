"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navGroups } from "@/lib/navigation";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 flex h-14 w-full items-center justify-between border-b border-border bg-background/80 px-4 backdrop-blur-xl lg:hidden">
        <Link href="/" className="flex items-center gap-2">
          <span
            aria-hidden
            className="grid h-5 w-5 place-items-center rounded bg-brand text-[10px] font-semibold text-brand-contrast"
          >
            C
          </span>
          <span className="text-[13px] font-semibold tracking-tight">
            Claude Code <span className="font-display italic text-muted-foreground">Academy</span>
          </span>
        </Link>
        <div className="flex items-center gap-1">
          <button
            onClick={() =>
              document.dispatchEvent(
                new KeyboardEvent("keydown", { key: "k", metaKey: true })
              )
            }
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-foreground"
            aria-label="Szukaj"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-foreground"
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <nav
        className={cn(
          "fixed right-0 top-14 z-50 flex h-[calc(100%-3.5rem)] w-72 flex-col border-l border-border bg-background transition-transform duration-200 ease-out lg:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex-1 overflow-y-auto p-3">
          {navGroups.map((group, gi) => (
            <div key={gi} className={gi === 0 ? "mb-1" : "mb-1 mt-5"}>
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
                      className={cn(
                        "relative flex items-center gap-3 rounded-md px-3 py-2.5 text-[13px] transition-colors",
                        isActive
                          ? "bg-sidebar-accent font-medium text-foreground"
                          : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground"
                      )}
                    >
                      {isActive && (
                        <span
                          aria-hidden
                          className="absolute left-0 top-1/2 h-4 w-[2px] -translate-y-1/2 rounded-r bg-brand"
                        />
                      )}
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-border p-3">
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
}
