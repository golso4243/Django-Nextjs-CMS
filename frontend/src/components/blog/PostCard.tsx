import Link from "next/link";
import type { BlogPost } from "@/types/cms";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PostMeta } from "./PostMeta";

interface PostCardProps {
  post: BlogPost;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="bg-muted/40">
        {post.featured_image_url ? (
          <div className="aspect-video w-full">
            <img
              src={post.featured_image_url}
              alt={post.title}
              className="h-full w-full object-cover"
            />
          </div>
        ) : (
          <div className="aspect-video w-full bg-muted/60" />
        )}
      </div>
      <CardHeader className="space-y-1">
        <CardTitle className="text-lg">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </CardTitle>
        <CardDescription>
          <PostMeta post={post} />
        </CardDescription>
      </CardHeader>
      {post.excerpt && (
        <CardContent>
          <p className="line-clamp-3 text-sm text-muted-foreground">
            {post.excerpt}
          </p>
        </CardContent>
      )}
    </Card>
  );
}

