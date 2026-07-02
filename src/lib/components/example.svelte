<ul class="flex w-full overflow-x-scroll snap-x snap-mandatory scrollbar-none">
  {#each slides as { title, content }}
    <li class="shrink-0 h-screen w-screen snap-center">
      <h1>{title}</h1>
      <p>{content}</p>
    </li>
  {/each}
</ul>

<article class="flex flex-col gap-2">
  <p class="text-7xl font-serif font-normal tracking-tight leading-16">
    CALENDARIO SEMANAL
  </p>
  <p class="text-xl font-sans leading-6">
    Consulta el calendario semanal y la programación correspondiente a cada
    servicio.
  </p>
</article>
