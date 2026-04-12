import { Sidebar } from "./sidebar";
import { MobileNav } from "./mobile-nav";
import { CommandPalette } from "@/components/command-palette";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      <MobileNav />
      <CommandPalette />
      <main className="min-h-screen pt-14 lg:pl-[260px] lg:pt-0">
        <div className="mx-auto max-w-3xl px-5 py-10 sm:px-8 lg:px-10">
          {children}
        </div>
      </main>
    </>
  );
}
