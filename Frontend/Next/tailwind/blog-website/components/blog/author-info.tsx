import { Calendar, User } from "lucide-react"
import type { Author } from "@/types/blog"

interface AuthorInfoProps {
  author: Author
  publishedAt: string
}

export function AuthorInfo({ author, publishedAt }: AuthorInfoProps) {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <User className="h-5 w-5 text-primary" />
        </div>
        <div>
          <p className="font-medium">{author.name}</p>
          <p className="text-sm text-muted-foreground">{author.role}</p>
        </div>
      </div>

      <div className="flex items-center text-sm text-muted-foreground">
        <Calendar className="h-4 w-4 mr-1" />
        {new Date(publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
    </div>
  )
}
