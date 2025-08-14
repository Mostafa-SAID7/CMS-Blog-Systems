"use client"

import { useState, useEffect } from "react"
import type { BlogPost } from "@/types/blog"

interface UseBlogOptions {
  limit?: number
  category?: string
  searchQuery?: string
}

interface UseBlogReturn {
  posts: BlogPost[]
  loading: boolean
  error: string | null
  refetch: () => void
}

/**
 * Custom hook for fetching blog data
 * Follows Single Responsibility Principle by handling only blog data fetching
 */
export function useBlog(options: UseBlogOptions = {}): UseBlogReturn {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchPosts = async () => {
    try {
      setLoading(true)
      setError(null)

      const params = new URLSearchParams()
      if (options.limit) params.append("limit", options.limit.toString())
      if (options.category) params.append("category", options.category)
      if (options.searchQuery) params.append("search", options.searchQuery)

      const response = await fetch(`/api/blog?${params.toString()}`)

      if (!response.ok) {
        throw new Error("Failed to fetch blog posts")
      }

      const data = await response.json()
      setPosts(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [options.limit, options.category, options.searchQuery])

  return {
    posts,
    loading,
    error,
    refetch: fetchPosts,
  }
}
