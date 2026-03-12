import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-base font-semibold tracking-tight">
          {siteConfig.name}
        </Link>
        <nav className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <Link href="/blog" className="hover:text-foreground">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}

