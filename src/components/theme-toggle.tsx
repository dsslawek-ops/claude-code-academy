"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored !== "light";
    setDark(isDark);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  if (!mounted) {
    return (
      <div className="flex items-center gap-2.5 px-2.5 py-1.5 text-xs text-muted-foreground">
        <Sun className="h-3.5 w-3.5" />
        <span>Motyw</span>
      </div>
    );
  }

  return (
    <button
      onClick={toggle}
      className="group flex w-full items-center gap-2.5 rounded-md px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-foreground"
      aria-label={dark ? "Przełącz na jasny motyw" : "Przełącz na ciemny motyw"}
    >
      {dark ? (
        <Sun className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
      ) : (
        <Moon className="h-3.5 w-3.5 transition-transform group-hover:-rotate-12" />
      )}
      <span>{dark ? "Jasny motyw" : "Ciemny motyw"}</span>
    </button>
  );
}
