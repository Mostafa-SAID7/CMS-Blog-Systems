import { getBlogPost, getBlogPosts } from "@/lib/blog"
import { BlogPostContent } from "@/components/blog/blog-post-content"
import { AuthorInfo } from "@/components/blog/author-info"
import { SocialShare } from "@/components/blog/social-share"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug)

  if (!post) {
    return {}
  }

  return {
    title: `${post.title} - ModernBlog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  }
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <AuthorInfo author={post.author} publishedAt={post.publishedAt} />
            <SocialShare title={post.title} slug={post.slug} />
          </div>
        </header>

        <BlogPostContent content={post.content} />
      </div>
    </article>
  )
}
