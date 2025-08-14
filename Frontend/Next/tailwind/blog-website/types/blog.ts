export interface Author {
  name: string
  role: string
  avatar?: string
  bio?: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  publishedAt: string
  updatedAt?: string
  author: Author
  category: string
  tags: string[]
  readTime: number
  featured?: boolean
}

export interface BlogPostsResponse {
  posts: BlogPost[]
  total: number
  page: number
  limit: number
}
