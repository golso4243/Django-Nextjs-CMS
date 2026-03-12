import type { Metadata } from "next";
import { getPosts } from "@/lib/api/blog";
import type { BlogPost } from "@/types/cms";
import { BlogList } from "@/components/blog/BlogList";

export const metadata: Metadata = {
  title: "Blog",
};

export default async function BlogIndexPage() {
  let posts: BlogPost[] = [];
  let error: string | null = null;

  try {
    posts = await getPosts();
  } catch (e) {
    error = e instanceof Error ? e.message : "Failed to load blog posts";
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Latest articles from your Django CMS.
        </p>
        {error && (
          <p className="mt-2 text-sm text-destructive">
            {error}
          </p>
        )}
      </div>
      {!error && <BlogList posts={posts} />}
    </div>
  );
}


