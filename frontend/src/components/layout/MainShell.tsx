import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

interface MainShellProps {
  children: ReactNode;
}

export function MainShell({ children }: MainShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 py-10">{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}

