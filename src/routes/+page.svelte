<script>
  import "../app.css";
  import { goto } from "$app/navigation";
  import DayCard from "$lib/components/DayCard.svelte";
  import MainCard from "$lib/components/MainCard.svelte";
  import datos from "$lib/mock/data.json";
  import { fade } from "svelte/transition";

  const { title, services } = datos;

  let current = $state(0);
  let dragX = $state(0)
  let startX = 0
  let dragging = $state(false)

  function onTouchStart (event) {
    startX = event.touches[0].clientX
    dragging = true
  }

  function onTouchMove (event) {
    if(!dragging) return
    dragX = event.touches[0].clientX - startX
  }

  function onTouchEnd () {
    dragging = false

    if (dragX < -80 && current < services.length - 1) {
      current += 1
    } else if (dragX > 80 && current > 0) {
      current -= 1
    }

    dragX = 0
  }

  let { data } = $props();
</script>

<main class="h-dvh w-screen">
  <section
    class="flex flex-col justify-between h-dvh bg-neutral-950/98 text-white p-5.5 py-6.5 items-center"
  >
    <header class="flex justify-between w-full items-center">
      <a href="/admin" class="flex gap-1 items-center h-full">
        {#if data.isadmin}
          <img
            class="h-10"
            src="/admin-check.svg"
            alt="Check mark icon for admin users"
          />
        {:else}
          <img
            class="h-10"
            src="/check.svg"
            alt="Check mark icon for users"
          />
        {/if}

        <div class="flex flex-col justify-center">
          <p class="text-xl leading-5 tracking-tight">
            Carolina <br />
            <span class="text-lg text-green-200 font-semibold leading-none">
              {data.isadmin ? "admin" : "miembro"}
            </span>
          </p>
        </div>
      </a>

      <article class="text-white/90 text-xl font-bold leading-5">
        <span class="text-white/60">
          {title[0]}
        </span>
        <br />
        {title[1]}
      </article>
    </header>

    {#if data.isadmin}
      <article class="flex gap-3 bg-green-200 p-2 rounded-md">
        <p class="leading-4.5 font-serif text-lg rounded-md text-neutral-800">
          Revisa la programación de la próxima semana antes de su publicación automática.
        </p>

        <img class="h-5" src="/link-arrow.svg" alt="Arrow link button" />
      </article>
    {/if}

    <div class="flex flex-col w-full gap-3">
      <div
        role="article"
        ontouchstart={onTouchStart}
        ontouchmove={onTouchMove}
        ontouchend={onTouchEnd}
        style="transform: translatex({dragX}px); transition: {dragging ? 'none' : 'transform 0.3s ease'}"
      >
        <DayCard service={services[current]} />
      </div>

      <aside class="w-full gap-2 px-5 flex justify-between">
        <div
          class="bg-neutral-800 flex rounded-lg gap-1.5 justify-center items-center p-3 px-3"
        >
          {#each services as _, i}
            <div
              class="h-3 w-3 rounded-full transition-all duration-200 {current ===
              i
                ? 'bg-neutral-400 w-6'
                : 'bg-neutral-600'}"
            ></div>
          {/each}
        </div>
      </aside>
    </div>
  </section>
</main>
