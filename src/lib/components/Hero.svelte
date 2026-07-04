<script>
  import '../../app.css'
  import DayCard from './DayCard.svelte';
  import MainCard from './MainCard.svelte';
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
    }, 500)
  }
</script>

<section class="flex flex-col justify-between h-dvh bg-neutral-950/98 text-white p-5 py-10">
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

  
  <div class="flex flex-col gap-5">
    <div>
      <DayCard service={services[0]} />
    </div>
    
    <aside class="w-full gap-2 px-5 flex justify-between">
      <div class="bg-neutral-800 flex rounded-lg gap-1.5 justify-center items-center p-2 px-3">
        <div class="bg-neutral-400 h-3.5 w-6 rounded-full"></div>
        <div class="bg-neutral-600 h-3.5 w-3.5 rounded-full"></div>
        <div class="bg-neutral-600 h-3.5 w-3.5 rounded-full"></div>
        <div class="bg-neutral-600 h-3.5 w-3.5 rounded-full"></div>
        <div class="bg-neutral-600 h-3.5 w-3.5 rounded-full"></div>
      </div>
  
      <div class="flex gap-2">
        <button class="flex p-1.5 w-10 justify-center bg-neutral-800 rounded-lg">
          <img src="/left.svg" alt="arrow left">
        </button>
  
        <button class="flex p-1.5 w-10 justify-center bg-neutral-800 rounded-lg">
          <img src="/right.svg" alt="arrow left">
        </button>
      </div>
    </aside>
  </div>

</section>
