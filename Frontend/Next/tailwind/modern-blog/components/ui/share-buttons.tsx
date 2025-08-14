"use client"

import { Button } from "@/components/ui/button"
import { Twitter, Facebook, Linkedin, Link2, Copy } from "lucide-react"
import { useState } from "react"

interface ShareButtonsProps {
  url: string
  title: string
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)
  const fullUrl = `${window.location.origin}${url}`

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(fullUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <div className="card p-6">
      <h3 className="font-semibold mb-4">Share this article</h3>
      <div className="space-y-2">
        <Button
          variant="outline"
          size="sm"
          className="w-full justify-start bg-transparent"
          onClick={() => window.open(shareLinks.twitter, "_blank")}
        >
          <Twitter className="h-4 w-4 mr-2" />
          Twitter
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="w-full justify-start bg-transparent"
          onClick={() => window.open(shareLinks.facebook, "_blank")}
        >
          <Facebook className="h-4 w-4 mr-2" />
          Facebook
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="w-full justify-start bg-transparent"
          onClick={() => window.open(shareLinks.linkedin, "_blank")}
        >
          <Linkedin className="h-4 w-4 mr-2" />
          LinkedIn
        </Button>

        <Button variant="outline" size="sm" className="w-full justify-start bg-transparent" onClick={copyToClipboard}>
          {copied ? (
            <>
              <Copy className="h-4 w-4 mr-2" />
              Copied!
            </>
          ) : (
            <>
              <Link2 className="h-4 w-4 mr-2" />
              Copy Link
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
