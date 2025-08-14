import { HeroSection } from "@/components/sections/hero-section"
import { RecentPosts } from "@/components/sections/recent-posts"
import { getBlogPosts } from "@/lib/blog"

export default async function HomePage() {
  const recentPosts = await getBlogPosts(3) // Get 3 most recent posts

  return (
    <div className="flex flex-col">
      <HeroSection />
      <RecentPosts posts={recentPosts} />
    </div>
  )
}
