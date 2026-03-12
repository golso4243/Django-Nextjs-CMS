import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getPosts } from "@/lib/api/blog";
import type { BlogPost } from "@/types/cms";
import type { BlogSlugParams } from "@/types/routing";
import { PostMeta } from "@/components/blog/PostMeta";
import { RichText } from "@/components/blog/RichText";
import { PostLayout } from "@/components/blog/PostLayout";

type PageProps = BlogSlugParams;

export const revalidate = 60;

export async function generateStaticParams() {
  let posts: BlogPost[] = [];

  try {
    posts = await getPosts();
  } catch {
    // fall back to no pre-rendered paths
  }

  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  props: PageProps
): Promise<Metadata> {
  const { params } = props;
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt ?? undefined,
  };
}

export default async function BlogPostPage(props: PageProps) {
  const { params } = props;
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <PostLayout post={post}>
      <RichText body={post.content} />
    </PostLayout>
  );
}

