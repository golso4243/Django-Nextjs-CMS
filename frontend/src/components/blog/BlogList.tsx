import type { BlogPost } from "@/types/cms";
import { PostCard } from "./PostCard";
import { EmptyState } from "./EmptyState";

interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
  if (!posts.length) {
    return <EmptyState />;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

