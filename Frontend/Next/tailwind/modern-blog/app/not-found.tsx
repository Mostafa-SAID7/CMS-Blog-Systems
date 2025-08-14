import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NotFoundAnimation } from "@/components/ui/not-found-animation"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <NotFoundAnimation />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Page Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/blog">Browse Blog</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
