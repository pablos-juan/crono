<script>
  import "../app.css";
  import { goto } from "$app/navigation";
  import DayCard from "$lib/components/DayCard.svelte";
  import MainCard from "$lib/components/MainCard.svelte";
  import datos from "$lib/mock/data.json";
  import { fade } from "svelte/transition";

  const { title, services } = datos;

  let current = $state(0);
  let animation = $state(false);
  let timeout;

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

      <article class="text-white/90 text-xl font-semibold leading-5">
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
          Revisa la programación de la próxima semana antes de su publicación
          automática.
        </p>

        <img class="h-5" src="/link-arrow.svg" alt="Arrow link button" />
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
