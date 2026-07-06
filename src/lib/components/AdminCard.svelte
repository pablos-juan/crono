<script>
  const { title, content } = $props()
</script>

<article
  class="flex gap-2 bg-white p-5
   rounded-xl"
>
  <img class="h-12" src="/div_star.svg" alt="Star icon" />

  <div class="flex flex-col gap-1">
    <div class="flex justify-between">
      <h3 class="font-serif text-2xl leading-6">
        {title[0]} <br />
        {title[1]}
      </h3>

      <img class="h-9" src="/link_arrow.svg" alt="Arrow link icon" />
    </div>

    <p class="text-lg leading-none">
      {content}
    </p>
  </div>
</article>
