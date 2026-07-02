<script>
  import '../../app.css'
  import DayCard from './DayCard.svelte';
  import MainCard from './MainCard.svelte';
  import Hero from './MainCard.svelte';
</script>

<section class="flex flex-col justify-between h-full bg-neutral-950 text-white p-10 py-16">
  <div class="flex flex-col items-center gap-1.5">
    <span
      class="bg-neutral-400 text-neutral-800/90 px-2.5 rounded-md text-lg font-sans font-bold tracking-tight"
    >
      22 de febrero - 1 de marzo
    </span>
    <a class="text-neutral-400/90 text-lg underline" href="https://youtube.com">
      Eres administrador? Ingresa aquí
    </a>
  </div>

  <div class="flex flex-col gap-5">
    <div class="flex w-full overflow-x-scroll snap-x snap-mandatory scrollbar-none gap-1 items-end">
      <MainCard />
      <DayCard />
    </div>

    <aside class="w-full flex gap-2">
      <div class="flex-1 h-1 bg-white/50 rounded"></div>
      <div class="flex-1 h-1 bg-white/30 rounded"></div>
      <div class="flex-1 h-1 bg-white/30 rounded"></div>
    </aside>
  </div>
</section>
