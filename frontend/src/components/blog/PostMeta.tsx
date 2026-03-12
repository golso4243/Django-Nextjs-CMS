import type { BlogPost } from "@/types/cms";

interface PostMetaProps {
  post: Pick<BlogPost, "created_at" | "updated_at">;
}

export function PostMeta({ post }: PostMetaProps) {
  const created = new Date(post.created_at);
  const updated = new Date(post.updated_at);

  const sameDay =
    created.toDateString() === updated.toDateString();

  return (
    <span className="text-xs text-muted-foreground">
      Published{" "}
      <time dateTime={created.toISOString()}>
        {created.toLocaleDateString()}
      </time>
      {!sameDay && (
        <>
          {" · Updated "}
          <time dateTime={updated.toISOString()}>
            {updated.toLocaleDateString()}
          </time>
        </>
      )}
    </span>
  );
}

