"use client"

import type { BlogPost } from "@/lib/blog"
import { BlogCard } from "@/components/blog/blog-card"

interface BlogGridProps {
  posts: BlogPost[]
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <div key={post.slug} className={`animate-fade-in animation-delay-${(index % 3) * 200}`}>
          <BlogCard post={post} />
        </div>
      ))}
    </div>
  )
}
