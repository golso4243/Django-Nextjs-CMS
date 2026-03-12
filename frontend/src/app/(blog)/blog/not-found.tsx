import Link from "next/link";

export default function BlogNotFound() {
  return (
    <div className="mx-auto max-w-2xl space-y-4 py-16 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">
        Post not found
      </h1>
      <p className="text-sm text-muted-foreground">
        The blog post you were looking for doesn&apos;t exist or is no longer
        published.
      </p>
      <div className="pt-2">
        <Link
          href="/blog"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
        >
          Back to blog
        </Link>
      </div>
    </div>
  );
}

