import { getPosts } from "$lib/utils"

export async function load() {
  const posts = getPosts()
  return { posts }
}
