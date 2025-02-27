<script lang="ts">
  import { PUBLIC_BASE_URL } from "$env/static/public"
  import banner from "$lib/assets/Banner.png"

  const {
    title,
    hasOg = false,
    hasTwitter = false,
  }: { title?: string; hasOg?: boolean; hasTwitter?: boolean } = $props()
  const base = "Sxnic/Sora"
</script>

<svelte:head>
  {#if title}
    <title>{title} - {base}</title>
  {:else}
    <title>{base}</title>
  {/if}

  {#if hasOg}
    <meta property="og:title" content={title} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={base} />
    <meta property="og:url" content={`https://${PUBLIC_BASE_URL}`} />

    <meta name="og:image" content={banner} />
  {/if}

  {#if hasTwitter}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content={base} />
    <meta name="twitter:title" content={title} />

    <meta name="twitter:image" content={banner} />
    <meta name="twitter:image:alt" content={base} />
  {/if}

  <meta name="theme-color" content="#000000" />
</svelte:head>
