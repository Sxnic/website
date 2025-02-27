import { loadIcon } from "@iconify/svelte"
import { iconToSVG } from "@iconify/utils"

export type Metadata = {
  title: string
  date: string
  hidden?: boolean
}

export type Post = {
  metadata: Metadata
  default: any
}

export type Blog = Post & { slug: string }

// Quite convoluted if I do say so myself, but unplugin-icons was no good either.
export const loadIconData = async (name: string) => {
  const iconData = await loadIcon(name)
  const iconSvg = iconToSVG(iconData)

  return iconSvg
}

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("en-us", { dateStyle: "medium" }).format(date)

export const getPosts = () => {
  const posts: Blog[] = []
  const urls = import.meta.glob<Post>("/src/lib/content/*.md", {
    eager: true,
  })

  for (const url in urls) {
    const file = urls[url]
    const slug = url.split("/").at(-1)!.replace(".md", "")

    posts.push({
      default: file.default,
      metadata: file.metadata,
      slug,
    })
  }

  const final = posts
    .filter((post) => post.metadata.hidden !== true)
    .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime())

  return final
}
