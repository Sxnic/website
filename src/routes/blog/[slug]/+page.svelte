<script lang="ts">
  // import Icon from "@iconify/svelte"

  import { formatDate } from "$lib/utils"

  import Icon from "$lib/components/icon.svelte"
  import Footer from "$lib/components/footer.svelte"
  import Metatags from "$lib/components/metatags.svelte"

  const { data } = $props()
  const Content = $derived(data.post.default)
</script>

<Metatags title={data.post.metadata.title} hasOg hasTwitter />

<main class="mx-auto flex min-h-svh w-full max-w-7xl flex-col px-6 pt-12 pb-6">
  <div class="pb-4">
    <a
      class="flex w-fit flex-row items-center gap-2 rounded-md bg-white px-4 py-1.5 font-bold text-black transition-colors hover:bg-white/75"
      href="/blog"
    >
      <Icon icon={data.icons.arrow} />
      Return</a
    >
  </div>

  <h1 class="pb-4 text-3xl font-black sm:text-4xl">{data.post.metadata.title}</h1>
  <p class="text-md sm:text-lg">
    {formatDate(new Date(data.post.metadata.date))}
  </p>

  <article class="flex flex-1 flex-col pt-8">
    <Content />
  </article>

  <Footer />
</main>

<style lang="postcss" scoped>
  @reference "tailwindcss/theme";

  :global(article h2) {
    @apply text-3xl font-bold not-first:pt-12;
  }

  :global(article h3) {
    @apply pt-8 font-semibold;
  }

  :global(article > p) {
    @apply pt-4;
  }

  :global(article ol) {
    @apply list-inside list-decimal pt-4;
  }

  :global(article ul) {
    @apply list-inside list-disc pt-4;
  }

  :global(article a) {
    @apply text-base underline hover:text-black;
  }

  :global(article .shiki) {
    @apply my-2 rounded-lg p-2.5 text-sm;
  }

  :global(article .shiki .line) {
    @apply text-balance;
  }

  :global(article table) {
    @apply mt-6 mb-2 w-full table-auto border-collapse text-left text-sm;
  }

  :global(article .table-wrapper) {
    @apply w-full overflow-auto whitespace-nowrap;
  }

  :global(article td) {
    @apply border-b px-1 py-1.5;
  }

  :global(article table th) {
    @apply border-b px-1 py-1.5 text-xs font-medium;
  }
</style>
