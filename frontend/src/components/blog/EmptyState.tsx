export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-10 text-center">
      <h2 className="text-lg font-semibold tracking-tight">
        No blog posts yet
      </h2>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        When you publish your first blog post in the Django CMS, it will show up
        here automatically.
      </p>
    </div>
  );
}

