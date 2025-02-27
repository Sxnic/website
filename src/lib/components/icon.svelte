<script lang="ts">
  import type { IconifyIconBuildResult } from "@iconify/utils"

  const { icon, ...rest }: { icon: IconifyIconBuildResult } & Record<string, any> = $props()
</script>

<svg {...icon.attributes} xmlns="http://www.w3.org/2000/svg" {...rest}>
  {@html icon.body}
</svg>
