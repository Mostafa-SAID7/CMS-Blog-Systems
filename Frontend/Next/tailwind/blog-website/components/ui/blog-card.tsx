import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import type { BlogPost } from "@/types/blog"

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <Badge variant="secondary">{post.category}</Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            {post.readTime} min read
          </div>
        </div>
        <h3 className="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">{post.title}</h3>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>

        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 mr-1" />
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-sm font-medium text-primary">{post.author.name.charAt(0)}</span>
          </div>
          <span className="text-sm font-medium">{post.author.name}</span>
        </div>

        <Button asChild variant="ghost" size="sm">
          <Link href={`/blog/${post.slug}`} className="flex items-center gap-1">
            Read More
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
