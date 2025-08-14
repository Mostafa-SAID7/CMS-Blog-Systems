"use client"

import Image from "next/image"
import type { BlogPost } from "@/lib/blog"
import { useTranslations } from "@/hooks/use-translations"
import { Calendar, Clock } from "lucide-react"

interface BlogPostHeaderProps {
  post: BlogPost
}

export function BlogPostHeader({ post }: BlogPostHeaderProps) {
  const { t } = useTranslations()

  return (
    <header className="mb-12">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span key={tag} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 leading-tight">{post.title}</h1>

        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">{post.excerpt}</p>

        <div className="flex items-center gap-6 text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <Image
              src={post.author.avatar || "/placeholder.svg"}
              alt={post.author.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">{post.author.name}</p>
              <p className="text-sm">{post.author.bio}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString()}</time>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>
                {post.readingTime} {t("blog.readingTime")}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-xl">
        <Image
          src={post.coverImage || "/placeholder.svg"}
          alt={post.title}
          width={1200}
          height={600}
          className="w-full h-64 md:h-96 object-cover"
          priority
        />
      </div>
    </header>
  )
}
