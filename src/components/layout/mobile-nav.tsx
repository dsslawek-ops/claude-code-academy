"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  GraduationCap,
  Home,
  Keyboard,
  LifeBuoy,
  Menu,
  Newspaper,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Start", icon: Home },
  { href: "/baza-wiedzy", label: "Baza wiedzy", icon: BookOpen },
  { href: "/szkolenia", label: "Szkolenia", icon: GraduationCap },
  { href: "/sciagawka", label: "Ściągawka", icon: Keyboard },
  { href: "/troubleshooter", label: "Rozwiąż problem", icon: LifeBuoy },
  { href: "/co-nowego", label: "Co nowego", icon: Newspaper },
];

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <header className="fixed left-0 top-0 z-50 flex h-14 w-full items-center justify-between border-b border-border bg-card px-4 lg:hidden">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <span className="text-sm font-bold">Claude Code Academy</span>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/szukaj" className="rounded-md p-2 hover:bg-accent">
            <Search className="h-5 w-5" />
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 hover:bg-accent"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <nav
        className={cn(
          "fixed right-0 top-14 z-50 h-[calc(100%-3.5rem)] w-64 border-l border-border bg-card transition-transform duration-200 lg:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="space-y-1 p-3">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
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
