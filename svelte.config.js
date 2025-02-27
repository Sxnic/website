import { mdsvex, escapeSvelte } from "mdsvex"

import { getSingletonHighlighter } from "shiki"

import adapter from "@sveltejs/adapter-static"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extension: ".md",
      highlight: {
        highlighter: async (code, lang = "text") => {
          const highlight = await getSingletonHighlighter({
            langs: ["ts", "tsx"],
            themes: ["poimandres"],
          })
          const html = escapeSvelte(highlight.codeToHtml(code, { lang, theme: "poimandres" }))
          return `{@html \`${html}\`}`
        },
      },
    }),
  ],

  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    prerender: { handleHttpError: "warn" },
    adapter: adapter(),
  },

  extensions: [".svelte", ".md", ".svx"],
}

export default config
