import { loadIconData } from "$lib/utils"

export const prerender = true

export async function load() {
  const icons = {
    // Landing
    handWave: await loadIconData("fluent:hand-wave-24-filled"),

    // Social Icons
    github: await loadIconData("mdi:github"),
    gitlab: await loadIconData("ri:gitlab-fill"),
    telegram: await loadIconData("mingcute:telegram-fill"),
    twitter: await loadIconData("mingcute:twitter-fill"),
    twitch: await loadIconData("lucide:twitch"),
    mail: await loadIconData("lucide:mail"),

    // Blog
    arrow: await loadIconData("lucide:arrow-left"),
  }

  return { icons }
}
