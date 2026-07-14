<script>
  const { title = '' } = $props()
</script>

<article
  class="flex justify-between gap-2 p-2
   rounded-md bg-green-200 border-2 border-neutral-700 items-start h-23"
>
  <h3 class="text-xl leading-none max-w-2/3">
    {title}
  </h3>
  <img class="h-7" src="/link-arrow.svg" alt="Arrow link icon" />
</article>
