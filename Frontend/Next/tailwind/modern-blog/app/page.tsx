import { HeroSection } from "@/components/sections/hero-section"
import { FeaturedPosts } from "@/components/sections/featured-posts"
import { LatestPosts } from "@/components/sections/latest-posts"
import { NewsletterSection } from "@/components/sections/newsletter-section"
import { getBlogPosts } from "@/lib/blog"

export default async function HomePage() {
  const posts = await getBlogPosts()
  const featuredPosts = posts.filter((post) => post.featured).slice(0, 3)
  const latestPosts = posts.slice(0, 6)

  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedPosts posts={featuredPosts} />
      <LatestPosts posts={latestPosts} />
      <NewsletterSection />
    </div>
  )
}
