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

<div role="none" ontouchstart={onTouchStart} ontouchend={onTouchEnd} class="flex flex-col gap-5">
    <div class="transition-opacity duration-500 ease-in-out {onTransition ? 'opacity-0' : 'opacity-100'} items-end">
      {#if current === -1}
        <MainCard />
      {:else}
        <DayCard service={services[current]} />
      {/if}
    </div>

    <aside class="w-full flex gap-2">
      <div class="flex-1 h-1 rounded transition-colors duration-450 {current === -1 ? 'bg-white/80' : 'bg-white/30'}"></div>
      {#each services as _, i}
        <div class="flex-1 h-1 rounded transition-colors duration-500 {current === i ? 'bg-white/80' : 'bg-white/30'}"></div>
      {/each}
  </aside>
  </div>
