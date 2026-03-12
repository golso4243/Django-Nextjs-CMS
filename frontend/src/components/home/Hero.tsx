import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  description: string;
}

export function Hero({ title, description }: HeroProps) {
  return (
    <section className="space-y-6">
      <div className="space-y-4 max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          {title}
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button asChild>
          <Link href="/blog">Read the blog</Link>
        </Button>
        <Button variant="outline" asChild>
          <a href="http://localhost:8000/admin/" target="_blank" rel="noreferrer">
            Open Django admin
          </a>
        </Button>
      </div>
    </section>
  );
}

