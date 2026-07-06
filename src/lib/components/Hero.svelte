<script>
  import '../../app.css'
  import DayCard from './DayCard.svelte';
  import MainCard from './MainCard.svelte';
  import data from '$lib/mock/data.json'

  const { title, services } = data

  let current = $state(0)
  let animation = $state(false)
  let timeout

  function prev () {
    if (current > 0) current -= 1
  }

  function next () {
    if (current < services.length - 1) current += 1
  }

  $effect(() => {
    current
    clearTimeout(timeout)

    animation = true

    timeout = setTimeout(() => {
      animation = false
    }, 500)
  })
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
      <DayCard animation={animation} service={services[current]} />
    </div>
    
    <aside class="w-full gap-2 px-5 flex justify-between">
      <div class="bg-neutral-800 flex rounded-lg gap-1.5 justify-center items-center p-2 px-3">
        {#each services as _, i }
          <div class="h-3 w-3 rounded-full transition-all duration-200 {current === i ? 'bg-neutral-400 w-6' : 'bg-neutral-600'}"></div>
        {/each}
      </div>
  
      <div class="flex gap-2">
        <button onclick={prev} class="flex p-1.5 w-10 justify-center bg-neutral-800 rounded-lg active:bg-neutral-400 active:scale-95 transition">
          <img src="/left.svg" alt="arrow left">
        </button>
  
        <button onclick={next} class="flex p-1.5 w-10 justify-center bg-neutral-800 rounded-lg active:bg-neutral-400 active:scale-95 transition">
          <img src="/right.svg" alt="arrow rigth">
        </button>
      </div>
    </aside>
  </div>

</section>
