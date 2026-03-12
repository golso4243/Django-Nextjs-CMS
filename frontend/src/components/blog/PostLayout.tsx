import type { ReactNode } from "react";
import type { BlogPost } from "@/types/cms";
import { PostMeta } from "./PostMeta";

interface PostLayoutProps {
  post: BlogPost;
  children: ReactNode;
}

export function PostLayout({ post, children }: PostLayoutProps) {
  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-wide text-primary/80">
          Blog
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {post.title}
        </h1>
        <PostMeta post={post} />
        {post.excerpt && (
          <p className="mt-2 max-w-2xl text-base text-muted-foreground">
            {post.excerpt}
          </p>
        )}
      </header>

      {post.featured_image_url && (
        <div className="overflow-hidden rounded-xl border bg-muted/30">
          <img
            src={post.featured_image_url}
            alt={post.title}
            className="h-64 w-full object-cover sm:h-80"
          />
        </div>
      )}

      <div>{children}</div>
    </article>
  );
}

