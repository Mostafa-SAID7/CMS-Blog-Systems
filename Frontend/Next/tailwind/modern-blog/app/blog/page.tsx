"use client"

import { BlogGrid } from "@/components/blog/blog-grid"
import { BlogHeader } from "@/components/blog/blog-header"
import { getBlogPosts } from "@/lib/blog"
import { useTranslations } from "@/hooks/use-translations"

export default async function BlogPage() {
  const posts = await getBlogPosts()
  const { t } = useTranslations()

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <BlogHeader />
        <BlogGrid posts={posts} />
      </div>
    </div>
  )
}
