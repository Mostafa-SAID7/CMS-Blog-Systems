import { NextResponse } from "next/server"
import { getBlogPosts } from "@/lib/blog"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = searchParams.get("limit")

    const posts = await getBlogPosts(limit ? Number.parseInt(limit) : undefined)

    return NextResponse.json(posts)
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return NextResponse.json({ error: "Failed to fetch blog posts" }, { status: 500 })
  }
}
