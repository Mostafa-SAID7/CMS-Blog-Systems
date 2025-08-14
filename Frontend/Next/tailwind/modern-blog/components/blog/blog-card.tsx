"use client"

import Link from "next/link"
import Image from "next/image"
import type { BlogPost } from "@/lib/blog"
import { useTranslations } from "@/hooks/use-translations"
import { Calendar, Clock } from "lucide-react"

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const { t } = useTranslations()

  return (
    <article
      className={`card group cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
        featured ? "lg:col-span-1" : ""
      }`}
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="relative overflow-hidden rounded-t-xl">
          <Image
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            width={400}
            height={250}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {featured && (
            <div className="absolute top-4 left-4">
              <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
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

          <h3 className="text-xl font-bold font-serif mb-3 group-hover:text-primary transition-colors">{post.title}</h3>

          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src={post.author.avatar || "/placeholder.svg"}
                alt={post.author.name}
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-sm font-medium">{post.author.name}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
