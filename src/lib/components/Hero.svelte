<script>
  import '../../app.css'
  import DayCard from './DayCard.svelte';
  import MainCard from './MainCard.svelte';
  import Hero from './MainCard.svelte';
  import data from '$lib/mock/data.json'

  const { title, services } = data

  let current = $state(-1)
  let touchStartX = 0
  let onTransition = $state(false)

  function onTouchStart (event) {
    touchStartX = event.touches[0].clientX
  }

  function onTouchEnd (event) {
    if (onTransition) return

    const diff = touchStartX - event.changedTouches[0].clientX

    if (Math.abs(diff) < 50) return

    if (diff > 0 && current < services.length - 1) {
      changeTo(current + 1)
    } else if (diff < 0 && current >= 0) {
      changeTo(current - 1)
    }
  }

  function changeTo (index) {
    onTransition = true
    setTimeout(() => {
      current = index
      onTransition = false
    }, 300)
  }
</script>

<section class="flex flex-col justify-between h-full bg-neutral-950 text-white p-10 py-18">
  <div class="flex flex-col items-center gap-1.5">
    <span
      class="bg-neutral-400 text-neutral-800/90 px-2.5 rounded-md text-lg font-sans font-bold tracking-tight"
    >
      {title}
    </span>
    <a class="text-neutral-400/90 text-lg underline" href="https://youtube.com">
      Eres administrador? Ingresa aquí
    </a>
  </div>

  <div role="none" ontouchstart={onTouchStart} ontouchend={onTouchEnd} class="flex flex-col gap-5">
    <div class="transition-opacity duration-300 {onTransition ? 'opacity-0' : 'opacity-100'} items-end">
      {#if current === -1}
        <MainCard />
      {:else}
        <DayCard service={services[current]} />
      {/if}
    </div>

    <aside class="w-full flex gap-2">
      <div class="flex-1 h-1 rounded transition-colors duration-500 {current === -1 ? 'bg-white/80' : 'bg-white/30'}"></div>
      {#each services as _, i}
        <div class="flex-1 h-1 rounded transition-colors duration-500 {current === i ? 'bg-white/80' : 'bg-white/30'}"></div>
      {/each}
  </aside>
  </div>
</section>
