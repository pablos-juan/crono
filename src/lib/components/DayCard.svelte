<script>
  let { service } = $props()
  const { day, name, date, team } = $derived(service)
  const { LIDER, APOYO } = $derived(team)

  const INSTRUMENTS = ['PIANO', 'BATERIA', 'GUITARRA', 'BAJO']
</script>

<article
  class="flex flex-col text-white bg-neutral-600/40 h-auto w-full border-2 border-neutral-600 rounded-sm"
>
  <div class="flex flex-col gap-5 p-7">
    <div class="ml-auto text-right flex flex-col gap-0">
      <span class="text-white/80 font-semibold"> vocalistas </span>
      <ul class="text-xl -space-y-1">
        <li class="font-bold flex gap-1 flex-row-reverse">
          {LIDER}
          <img src="/star.svg" alt="star icon" />
        </li>
        {#each APOYO as vocalist (vocalist)}
          <li>{vocalist}</li>
        {/each}
      </ul>
    </div>

    <div class="flex flex-col text-left">
      <span class="text-white/80 font-semibold"> instrumentos </span>
      <ul class="text-xl -space-y-1">
        {#each INSTRUMENTS as instrumet (instrumet)}
          {#if team[instrumet]}
            <li>
              <span class="text-white/80 italic font-serif"
                >{instrumet.toLowerCase()}.</span
              >
              {team[instrumet]}
            </li>
          {/if}
        {/each}
      </ul>
    </div>
  </div>

  <div
    class="flex gap-1 justify-between items-center font-sans bg-neutral-900/70 rounded-t-sm p-4 border-t-2 border-dashed border-t-neutral-600 text-left"
  >
    <div class="flex flex-col gap-1">
      <h2 class="text-xl leading-5">
        {day}
      </h2>
      <h3 class="text-lg leading-4 text-white/70 font-semibold">
        {name}
      </h3>
    </div>

    <span class="text-4xl text-white/50 font-bold">{date}</span>
  </div>
</article>
