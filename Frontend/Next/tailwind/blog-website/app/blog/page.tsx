import { BlogCard } from "@/components/ui/blog-card"
import { getBlogPosts } from "@/lib/blog"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - ModernBlog",
  description: "Explore our latest articles on technology, design, and innovation.",
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Our Blog</h1>
        <p className="text-xl text-muted-foreground text-center mb-12">
          Discover insights, stories, and thoughts on the latest trends
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}
