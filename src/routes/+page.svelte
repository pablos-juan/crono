<script>
  import "../app.css";
  import DayCard from "$lib/components/DayCard.svelte";
  import MainCard from "$lib/components/MainCard.svelte";
  import datos from "$lib/mock/data.json";

  const { title, services } = datos;

  let current = $state(0);
  let contentVisible = $state(true)

  function select (index) {
    if (!document.startViewTransition) {
      current = index
      return
    }

    document.startViewTransition(() => {
      current = index
    })
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
          <img class="h-10" src="/check.svg" alt="Check mark icon for users" />
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

    <div class="flex flex-col w-full gap-2">
      {#each services as service, i}
        <button
          onclick={() => select(i)}
          style='view-transition-name: services-{i};'
          class="w-full rounded-sm overflow-hidden transition-all duration-300 {current === i ? 'flex-1' : 'h-9'}"
        >
          {#if current === i}
            <DayCard service={service} />
          {:else}
            <div class="h-full flex items-center justify-between p-2.5 bg-neutral-800/70 opacity-80">
              <span class="text-white/70">{service.day}</span>
              <span class="text-white/50 font-bold text-xl">{service.date}</span>
            </div>
          {/if}
        </button>
      {/each}
    </div>
  </section>
</main>
