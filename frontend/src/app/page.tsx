import { siteConfig } from "@/config/site";
import { getPosts } from "@/lib/api/blog";
import { Hero } from "@/components/home/Hero";
import { FeaturedPosts } from "@/components/home/FeaturedPosts";

export default async function Home() {
  const posts = await getPosts();
  const latestPosts = posts.slice(0, 3);

  return (
    <div className="space-y-16">
      <Hero title={siteConfig.name} description={siteConfig.description} />
      <FeaturedPosts posts={latestPosts} />
    </div>
  );
}
