import { notFound } from "next/navigation"
import { getBlogPost, getBlogPosts } from "@/lib/blog"
import { BlogPostHeader } from "@/components/blog/blog-post-header"
import { BlogPostContent } from "@/components/blog/blog-post-content"
import { BlogPostFooter } from "@/components/blog/blog-post-footer"
import { ReadingProgress } from "@/components/ui/reading-progress"
import { ShareButtons } from "@/components/ui/share-buttons"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug)

  if (!post) {
    return {}
  }

  return {
    title: `${post.title} | InkFlow`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="min-h-screen">
      <ReadingProgress />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <BlogPostHeader post={post} />
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <BlogPostContent content={post.content} />
            </div>
            <aside className="lg:w-64">
              <div className="sticky top-24 space-y-6">
                <ShareButtons url={`/blog/${post.slug}`} title={post.title} />
              </div>
            </aside>
          </div>
          <BlogPostFooter post={post} />
        </div>
      </div>
    </article>
  )
}
