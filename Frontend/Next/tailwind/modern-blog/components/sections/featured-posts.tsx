"use client"

import type { BlogPost } from "@/lib/blog"
import { BlogCard } from "@/components/blog/blog-card"
import { useTranslations } from "@/hooks/use-translations"

interface FeaturedPostsProps {
  posts: BlogPost[]
}

export function FeaturedPosts({ posts }: FeaturedPostsProps) {
  const { t } = useTranslations()

  if (posts.length === 0) return null

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Featured Articles</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our most popular and insightful articles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={post.slug} className={`animate-fade-in animation-delay-${index * 200}`}>
              <BlogCard post={post} featured />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
