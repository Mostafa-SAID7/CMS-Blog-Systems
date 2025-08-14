import type { BlogPost } from "@/types/blog"
import blogData from "@/data/blog-posts.json"

/**
 * Service class for blog operations following Single Responsibility Principle
 */
class BlogService {
  private posts: BlogPost[]

  constructor(posts: BlogPost[]) {
    this.posts = posts
  }

  /**
   * Get all blog posts with optional limit
   */
  async getAllPosts(limit?: number): Promise<BlogPost[]> {
    const sortedPosts = this.posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

    return limit ? sortedPosts.slice(0, limit) : sortedPosts
  }

  /**
   * Get a single blog post by slug
   */
  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    return this.posts.find((post) => post.slug === slug) || null
  }

  /**
   * Get posts by category
   */
  async getPostsByCategory(category: string): Promise<BlogPost[]> {
    return this.posts.filter((post) => post.category.toLowerCase() === category.toLowerCase())
  }

  /**
   * Search posts by title or content
   */
  async searchPosts(query: string): Promise<BlogPost[]> {
    const lowercaseQuery = query.toLowerCase()
    return this.posts.filter(
      (post) =>
        post.title.toLowerCase().includes(lowercaseQuery) ||
        post.excerpt.toLowerCase().includes(lowercaseQuery) ||
        post.content.toLowerCase().includes(lowercaseQuery),
    )
  }
}

// Create service instance
const blogService = new BlogService(blogData.posts)

// Export functions that use the service (Dependency Inversion Principle)
export const getBlogPosts = (limit?: number) => blogService.getAllPosts(limit)
export const getBlogPost = (slug: string) => blogService.getPostBySlug(slug)
export const getBlogPostsByCategory = (category: string) => blogService.getPostsByCategory(category)
export const searchBlogPosts = (query: string) => blogService.searchPosts(query)
