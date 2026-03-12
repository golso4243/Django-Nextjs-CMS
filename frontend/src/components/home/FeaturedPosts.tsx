import Link from "next/link";
import type { BlogPost } from "@/types/cms";
import { BlogList } from "@/components/blog/BlogList";

interface FeaturedPostsProps {
  posts: BlogPost[];
}

export function FeaturedPosts({ posts }: FeaturedPostsProps) {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Latest from the blog
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl">
            Posts are powered by your Django CMS. Publish new entries in the
            admin and they&apos;ll appear here automatically.
          </p>
        </div>
        <Link
          href="/blog"
          className="mt-1 text-sm font-medium text-primary hover:underline sm:mt-0"
        >
          View all posts
        </Link>
      </div>
      <BlogList posts={posts} />
    </section>
  );
}

