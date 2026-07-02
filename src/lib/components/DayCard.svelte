<script>
  let { service } = $props()
  const { day, name, date, team } = $derived(service)
  const { LIDER, APOYO } = $derived(team)

  const INSTRUMENTS = ['PIANO', 'BATERIA', 'GUITARRA', 'BAJO']
</script>

<article class="flex flex-col text-black h-auto gap-5 bg-white p-8 rounded-2xl shrink-0 w-full snap-center">
  <div class="ml-auto text-right flex flex-col gap-0">
    <span class="text-sm text-black/80 font-semibold">
      vocalistas
    </span>
    <ul class="text-lg -space-y-1.5">
      <li class="font-bold">{LIDER}</li>
      {#each APOYO as vocalist}
        <li>{vocalist}</li>
      {/each}
    </ul>
  </div>

  <div class="flex flex-col gap-0">
    <span class="text-sm text-black/80 font-semibold">
      instrumentos
    </span>
    <ul class="text-lg -space-y-1.5">
      {#each INSTRUMENTS as instrumet}
        {#if team[instrumet]}
          <li>
            <span class="text-black/80 italic">{instrumet.toLowerCase()}.</span>
            {team[instrumet]}
          </li>
        {/if}
      {/each}
    </ul>
  </div>

  <div class="flex flex-col gap-1 font-serif">
    <h2 class="text-5xl">
      {day} {date}
    </h2>
    <h3 class="text-2xl text-black/80">
      {name}
    </h3>
  </div>
</article>