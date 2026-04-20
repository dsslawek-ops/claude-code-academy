import { Sidebar } from "./sidebar";
import { MobileNav } from "./mobile-nav";
import { CommandPalette } from "@/components/command-palette";
import { cn } from "@/lib/utils";

type Width = "default" | "wide" | "prose";

const widthMap: Record<Width, string> = {
  default: "max-w-4xl",
  wide: "max-w-6xl",
  prose: "max-w-3xl",
};

export function AppShell({
  children,
  width = "default",
  className,
}: {
  children: React.ReactNode;
  width?: Width;
  className?: string;
}) {
  return (
    <>
      <Sidebar />
      <MobileNav />
      <CommandPalette />
      <main className="relative min-h-screen pt-14 lg:pl-[260px] lg:pt-0">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[360px] bg-glow-brand"
        />
        <div
          className={cn(
            "relative mx-auto px-5 py-10 sm:px-8 lg:px-12 lg:py-16",
            widthMap[width],
            className
          )}
        >
          {children}
        </div>
      </main>
    </>
  );
}
