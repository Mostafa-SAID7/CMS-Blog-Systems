"use client"

import type { BlogPost } from "@/lib/blog"
import { BlogCard } from "@/components/blog/blog-card"
import { Button } from "@/components/ui/button"
import { useTranslations } from "@/hooks/use-translations"
import Link from "next/link"

interface LatestPostsProps {
  posts: BlogPost[]
}

export function LatestPosts({ posts }: LatestPostsProps) {
  const { t } = useTranslations()

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Latest Articles</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Stay up to date with our newest content and insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <div key={post.slug} className={`animate-fade-in animation-delay-${index * 100}`}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
