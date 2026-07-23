export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("en-us", { dateStyle: "medium" }).format(date)

function env(name: string) {
  return import.meta.env[name] ?? ""
}

export const externalLinks: { icon: string; url: string; name: string }[] = [
  { icon: "simple-icons:github", url: env("GITHUB_URL"), name: "Github" },
  { icon: "simple-icons:telegram", url: env("TELEGRAM_URL"), name: "Telegram" },
  { icon: "simple-icons:x", url: env("TWITTER_URL"), name: "Twitter/X" },
  { icon: "simple-icons:twitch", url: env("TWITCH_URL"), name: "Twitch" },
  { icon: "lucide:mail", url: env("EMAIL_URL"), name: "Email" },
]
