<script lang="ts">
  import { onMount } from "svelte"
  import { scale, blur } from "svelte/transition"

  import Metatags from "$lib/components/metatags.svelte"
  import Icon from "$lib/components/icon.svelte"

  import proot from "$lib/assets/Proot.png"
  import anime from "$lib/assets/Anime.png"

  import notbyai from "$lib/assets/notbyai-en.svg"

  const names = ["Sxnic", "Sora"]
  const images = [anime, proot]

  const { data } = $props()

  let name = $state(names[0])
  let image = $state(images[0])

  onMount(() => {
    let i = 0
    const interval = setInterval(() => {
      i++
      name = names[i % names.length]
      image = images[i % images.length]
    }, 15 * 1000)
    return () => clearInterval(interval)
  })
</script>

<Metatags />

<header class="mx-auto flex min-h-svh w-full max-w-7xl flex-col justify-center gap-6 p-6">
  <section class="flex flex-col items-center justify-center gap-8 lg:flex-row">
    <div class="flex flex-col space-y-1 lg:flex-1">
      <h1 class="pb-2 text-4xl font-black sm:text-5xl">
        <span class="inline-flex">
          <Icon class="size-6 sm:size-9" icon={data.icons.handWave} />
          <div class="pl-3"></div>
        </span>Hiya, I'm
        <div class="inline-flex">
          {#key name}
            <span in:scale>{name}</span>
          {/key}
        </div>
      </h1>
      <p class="text-md sm:text-lg">
        I'm a 23 year old programmer from The Netherlands with a passion for almost anything
        technology and railway.
      </p>
      <p class="text-md sm:text-lg">
        I like to explore the world of programming, as well as cooking, playing video games, making
        pixel art, railfanning and learning foreign languages like German and Japanese.
      </p>
    </div>
    <div class="relative order-first shrink-0 lg:order-last">
      {#key image}
        <img
          in:blur
          class="pointer-events-none text-transparent"
          src={image}
          alt="ProfilePicture"
          width="400"
        />
      {/key}
    </div>
  </section>
  <!-- Socials -->
  <section class="flex flex-row items-center justify-start gap-4 lg:justify-end">
    {#each data.socials as social}
      <a
        href={social.href}
        class="transition-colors hover:text-white/75"
        rel="noopener"
        target="_blank"
      >
        <Icon class="size-6 sm:size-8" icon={social.icon} />
      </a>
    {/each}
  </section>
  <!-- Links -->
  <section class="flex flex-col items-start justify-between gap-y-4 sm:flex-row sm:items-start">
    <div class="flex flex-row gap-2">
      <a
        class="text-md font-bold transition-colors hover:text-white/75 hover:underline sm:text-lg"
        href="/blog">Blog</a
      >
    </div>
    <a href="https://notbyai.fyi" target="_blank">
      <img alt="notbyai" src={notbyai} />
    </a>
  </section>
</header>
