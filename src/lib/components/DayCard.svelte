<script>
  let { service, animation } = $props()
  const { day, name, date, team } = $derived(service)
  const { LIDER, APOYO } = $derived(team)

  const INSTRUMENTS = ['PIANO', 'BATERIA', 'GUITARRA', 'BAJO']
</script>

<article class:bg-neutral-900={animation} class=" transition-all duration-500 flex flex-col text-white h-auto gap-5 p-5 rounded-2xl shrink-0 w-full snap-center">
  <div class="ml-auto text-right flex flex-col gap-0">
    <span class="text-white/80 font-semibold">
      vocalistas
    </span>
    <ul class="text-lg -space-y-1.5">
      <li class="font-bold flex gap-1.5">
        {LIDER}
        <img src="/star.svg" alt="star icon">
      </li>
      {#each APOYO as vocalist}
        <li>{vocalist}</li>
      {/each}
    </ul>
  </div>

  <div class="flex flex-col gap-0">
    <span class="text-white/80 font-semibold">
      instrumentos
    </span>
    <ul class="text-lg -space-y-1.5">
      {#each INSTRUMENTS as instrumet}
        {#if team[instrumet]}
          <li>
            <span class="text-white/80 italic">{instrumet.toLowerCase()}.</span>
            {team[instrumet]}
          </li>
        {/if}
      {/each}
    </ul>
  </div>

  <div class="flex flex-col gap-1 font-serif bg-neutral-800 px-5 py-3 rounded-xl">
    <h2 class="text-5xl">
      {day} {date}
    </h2>
    <h3 class="text-2xl text-white/80">
      {name}
    </h3>
  </div>
</article>