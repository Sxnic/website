import { error } from "@sveltejs/kit"
import { getPosts } from "$lib/utils"

export const prerender = true
export const csr = false // There is no interactivity on these pages, at least for now

export async function entries() {
  const posts = getPosts()
  if (posts.length === 0) return [{ slug: "null" }]
  return posts.map((post) => ({ slug: post.slug }))
}

export async function load({ parent, params }) {
  const { posts } = await parent()
  const post = posts.find((p) => p.slug.toLowerCase() === params.slug.toLowerCase())

  if (!post) error(404, "Post not found")

  return { post }
}
