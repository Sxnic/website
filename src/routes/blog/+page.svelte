<script lang="ts">
  // import Icon from "@iconify/svelte"

  import { formatDate } from "$lib/utils"

  import Icon from "$lib/components/icon.svelte"
  import Footer from "$lib/components/footer.svelte"
  import Metatags from "$lib/components/metatags.svelte"

  const { data } = $props()
</script>

<Metatags title="Blog" />

<main class="mx-auto flex min-h-svh w-full max-w-7xl flex-col px-6 pt-12 pb-6">
  <div class="pb-4">
    <a
      class="flex w-fit flex-row items-center gap-2 rounded-md bg-white px-4 py-1.5 font-bold text-black transition-colors hover:bg-white/75"
      href="/"
    >
      <Icon icon={data.icons.arrow} />
      Return</a
    >
  </div>
  <h1 class="pb-4 text-3xl font-black sm:text-4xl">Blog</h1>
  <p class="text-md sm:text-lg">Here are some things I've been writing about lately.</p>

  <div class="flex flex-1 flex-col items-start gap-4 pt-8">
    {#if data.posts.length > 0}
      {#each data.posts as blog}
        <a href="/blog/{blog.slug}" class="transition-colors hover:text-white/75">
          <h3 class="text-lg font-bold">{blog.metadata.title}</h3>
          <p class="text-sm">{formatDate(new Date(blog.metadata.date))}</p>
        </a>
      {/each}
    {:else}
      <p class="text-md py-4 italic sm:text-xl">Nothing here but crickets...</p>
    {/if}
  </div>

  <Footer />
</main>
