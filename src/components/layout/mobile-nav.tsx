"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/navigation";
import { useState, useEffect } from "react";

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 flex h-14 w-full items-center justify-between border-b border-border bg-background/80 px-4 backdrop-blur-xl lg:hidden">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-muted-foreground" />
          <span className="text-[13px] font-semibold">Claude Code Academy</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() =>
              document.dispatchEvent(
                new KeyboardEvent("keydown", { key: "k", metaKey: true })
              )
            }
            className="rounded-md p-2 text-muted-foreground hover:text-foreground"
            aria-label="Szukaj"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 text-muted-foreground hover:text-foreground"
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <nav
        className={cn(
          "fixed right-0 top-14 z-50 h-[calc(100%-3.5rem)] w-64 border-l border-border bg-background transition-transform duration-200 ease-out lg:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="space-y-0.5 p-3">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2.5 text-[13px] transition-colors",
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
    </>
  );
}
