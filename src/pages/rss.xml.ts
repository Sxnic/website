import type { APIContext } from "astro"

import rss from "@astrojs/rss"
import { getCollection } from "astro:content"

import { env } from "~/utils"

export async function GET(ctx: APIContext) {
  const blog = await getCollection("blog", ({ data }) => !data.draft)
  const site = ctx.site || new URL(env("BASE_URL", "http://localhost:4321/"))

  return rss({
    title: "Sora The Protogen",
    description: "The blog of Sora The Protogen",
    site,
    items: blog.map((post) => ({
      title: post.data.title,
      date: post.data.date,
      tags: post.data.tags,

      // Compute RSS link from post `id`
      // This example assumes all posts are rendered as `/blog/[id]` routes
      link: `/blog/${post.id}/`,
    })),
  })
}
