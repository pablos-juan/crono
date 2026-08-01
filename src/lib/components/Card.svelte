<script>
  let { children } = $props()
</script>

<article
  class="flex flex-col justify-between gap-2 p-3.5
   rounded-md bg-green-300"
>
  {@render children()}
</article>
