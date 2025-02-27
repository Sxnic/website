import {
  PUBLIC_GITHUB,
  PUBLIC_GITLAB,
  PUBLIC_TELEGRAM,
  PUBLIC_TWITTER,
  PUBLIC_TWITCH,
  PUBLIC_EMAIL,
} from "$env/static/public"

export const prerender = true

export async function load({ parent }) {
  const { icons } = await parent()

  const socials = [
    {
      icon: icons.github,
      href: `https://github.com/${PUBLIC_GITHUB}`,
    },
    {
      icon: icons.gitlab,
      href: `https://gitlab.com/${PUBLIC_GITLAB}`,
    },
    {
      icon: icons.telegram,
      href: `https://t.me/${PUBLIC_TELEGRAM}`,
    },
    {
      icon: icons.twitter,
      href: `https://twitter.com/${PUBLIC_TWITTER}`,
    },
    {
      icon: icons.twitch,
      href: `https://twitch.tv/${PUBLIC_TWITCH}`,
    },
    {
      icon: icons.mail,
      href: `mailto:${PUBLIC_EMAIL}`,
    },
  ]

  return {
    socials,
  }
}
