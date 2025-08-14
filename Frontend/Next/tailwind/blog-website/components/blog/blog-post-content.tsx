"use client"

import { useEffect, useState } from "react"

interface BlogPostContentProps {
  content: string
}

export function BlogPostContent({ content }: BlogPostContentProps) {
  const [processedContent, setProcessedContent] = useState<string>("")

  useEffect(() => {
    // Simple markdown-like processing
    // In a real app, you'd use a proper markdown parser like react-markdown
    const processed = content
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mb-4 mt-8">$1</h1>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold mb-3 mt-6">$1</h2>')
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-medium mb-2 mt-4">$1</h3>')
      .replace(/\*\*(.*)\*\*/gim, '<strong class="font-semibold">$1</strong>')
      .replace(/\*(.*)\*/gim, '<em class="italic">$1</em>')
      .replace(/\n\n/gim, '</p><p class="mb-4">')
      .replace(/\n/gim, "<br />")

    setProcessedContent(`<p class="mb-4">${processed}</p>`)
  }, [content])

  return (
    <div
      className="prose prose-lg max-w-none dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: processedContent }}
    />
  )
}
