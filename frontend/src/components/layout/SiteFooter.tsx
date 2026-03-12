import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t bg-background/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-6 text-xs text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}</p>
        <p>Powered by Django, DRF, and Next.js</p>
      </div>
    </footer>
  );
}

