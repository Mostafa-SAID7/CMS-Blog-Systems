"use client"

import { Button } from "@/components/ui/button"
import { Share2, Twitter, Facebook, Linkedin, Copy } from "lucide-react"
import { useState } from "react"

interface SocialShareProps {
  title: string
  slug: string
}

export function SocialShare({ title, slug }: SocialShareProps) {
  const [copied, setCopied] = useState(false)

  const url = typeof window !== "undefined" ? `${window.location.origin}/blog/${slug}` : ""
  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(url)

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error("Failed to copy URL:", error)
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <Share2 className="h-4 w-4 text-muted-foreground" />
      <span className="text-sm text-muted-foreground mr-2">Share:</span>

      <Button variant="ghost" size="sm" asChild className="hover:text-blue-500">
        <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">
          <Twitter className="h-4 w-4" />
        </a>
      </Button>

      <Button variant="ghost" size="sm" asChild className="hover:text-blue-600">
        <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer">
          <Facebook className="h-4 w-4" />
        </a>
      </Button>

      <Button variant="ghost" size="sm" asChild className="hover:text-blue-700">
        <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin className="h-4 w-4" />
        </a>
      </Button>

      <Button variant="ghost" size="sm" onClick={copyToClipboard} className="hover:text-green-600">
        <Copy className="h-4 w-4" />
        {copied && <span className="ml-1 text-xs">Copied!</span>}
      </Button>
    </div>
  )
}
