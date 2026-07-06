<script>
  import "../app.css";
  import { goto } from '$app/navigation';
  import DayCard from "$lib/components/DayCard.svelte";
  import MainCard from "$lib/components/MainCard.svelte";
  import data from "$lib/mock/data.json";
  import { fade } from "svelte/transition";

  const { title, services } = data;

  let current = $state(0);
  let animation = $state(false);
  let timeout;
  let showInfo = $state(true);

  function prev() {
    if (current > 0) current -= 1;
  }

  function next() {
    if (current < services.length - 1) current += 1;
  }

  $effect(() => {
    current;
    clearTimeout(timeout);

    animation = true;

    timeout = setTimeout(() => {
      animation = false;
    }, 300);
  });
</script>

<main class="h-dvh w-screen">
  <section
    class="flex flex-col justify-between h-dvh bg-neutral-950/98 text-white p-5 py-6.5 items-center"
  >
    <span
      class="bg-neutral-400 text-neutral-800/90 px-2.5 rounded-md text-lg font-sans font-bold tracking-tight"
    >
      {title}
    </span>

    {#if showInfo}
      <article
        out:fade={{ duration: 200 }}
        class="flex gap-4 bg-neutral-800 rounded-xl p-4 items-start"
      >
        <p class="leading-5.5 font-serif text-xl text-white/80">
          Revisa la programación de la próxima semana antes de su publicación
          automática.
        </p>
        <button onclick={() => goto('/admin')} class="w-18">
          <img
            class="h-full w-full"
            src="/link_arrow.svg"
            alt="Arrow link button"
          />
        </button>
      </article>
    {/if}

    <div class="flex flex-col w-full gap-3">
      <div>
        <DayCard {animation} service={services[current]} />
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

        <div class="flex gap-2">
          <button
            onclick={prev}
            class="flex p-2 w-10 justify-center bg-neutral-800 rounded-lg active:bg-neutral-400 active:scale-95 transition"
          >
            <img src="/left.svg" alt="arrow left" />
          </button>

          <button
            onclick={next}
            class="flex p-2 w-10 justify-center bg-neutral-800 rounded-lg active:bg-neutral-400 active:scale-95 transition"
          >
            <img src="/right.svg" alt="arrow rigth" />
          </button>
        </div>
      </aside>
    </div>
  </section>
</main>
