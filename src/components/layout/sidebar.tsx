"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  GraduationCap,
  Home,
  Keyboard,
  LifeBuoy,
  Newspaper,
  Search,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Start", icon: Home },
  { href: "/baza-wiedzy", label: "Baza wiedzy", icon: BookOpen },
  { href: "/szkolenia", label: "Szkolenia", icon: GraduationCap },
  { href: "/sciagawka", label: "Ściągawka", icon: Keyboard },
  { href: "/troubleshooter", label: "Rozwiąż problem", icon: LifeBuoy },
  { href: "/co-nowego", label: "Co nowego", icon: Newspaper },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-full w-64 border-r border-border bg-card lg:block">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center gap-2 border-b border-border px-6">
          <Sparkles className="h-6 w-6 text-primary" />
          <div>
            <h1 className="text-sm font-bold leading-tight">Claude Code</h1>
            <p className="text-xs text-muted-foreground">Academy</p>
          </div>
        </div>

        {/* Search */}
        <div className="px-4 py-3">
          <Link
            href="/szukaj"
            className="flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
          >
            <Search className="h-4 w-4" />
            <span>Szukaj...</span>
            <kbd className="ml-auto rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-medium">
              /
            </kbd>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-1 px-3 py-2">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
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
        </nav>

        {/* Footer */}
        <div className="border-t border-border px-4 py-3">
          <p className="text-xs text-muted-foreground">
            Dane aktualne na kwiecień 2026
          </p>
        </div>
      </div>
    </aside>
  );
}
