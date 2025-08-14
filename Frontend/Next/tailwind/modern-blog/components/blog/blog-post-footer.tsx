"use client"

import type { BlogPost } from "@/lib/blog"
import { BlogCard } from "@/components/blog/blog-card"
import { useTranslations } from "@/hooks/use-translations"

interface BlogPostFooterProps {
  post: BlogPost
}

export function BlogPostFooter({ post }: BlogPostFooterProps) {
  const { t } = useTranslations()

  // In a real app, you'd fetch related posts based on tags or categories
  const relatedPosts: BlogPost[] = []

  return (
    <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
      <div className="mb-8">
        <div className="flex items-center gap-4 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
          <img
            src={post.author.avatar || "/placeholder.svg"}
            alt={post.author.name}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-lg">{post.author.name}</h3>
            <p className="text-gray-600 dark:text-gray-400">{post.author.bio}</p>
          </div>
        </div>
      </div>

      {relatedPosts.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold font-serif mb-6">{t("blog.relatedPosts")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.slice(0, 2).map((relatedPost) => (
              <BlogCard key={relatedPost.slug} post={relatedPost} />
            ))}
          </div>
        </div>
      )}
    </footer>
  )
}
