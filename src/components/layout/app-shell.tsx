import { Sidebar } from "./sidebar";
import { MobileNav } from "./mobile-nav";
import { CommandPalette } from "@/components/command-palette";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      <MobileNav />
      <CommandPalette />
      <main className="min-h-screen pt-14 lg:pl-[240px] lg:pt-0">
        <div className="mx-auto max-w-2xl px-6 py-12 lg:px-8">
          {children}
        </div>
      </main>
    </>
  );
}
