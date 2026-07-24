<script>
  import { goto } from "$app/navigation";
  import AdminCard from "$lib/components/AdminCard.svelte";

  let endsession = $state(false);

  function toggleAction() {
    if (!document.startViewTransition) {
      endsession = !endsession;
      return;
    }

    document.startViewTransition(() => {
      endsession = !endsession;
    });
  }

  async function logout() {
    await fetch("/api/logout", { method: "POST" });
    window.location.href = "/";
  }
</script>

<section
  class="flex flex-col gap-8 p-5.5 min-h-dvh justify-between bg-neutral-200/80"
>
  <header class="flex justify-between w-full items-center">
    {#if !endsession}
      <button
        onclick={toggleAction}
        style="view-transition-name: admin-badge;"
        class="p-2 rounded-md text-neutral-800 flex gap-1.5 items-center tracking-tight active:bg-white transition-colors duration-200"
      >
        <img
          class="h-10"
          src="/admin-check.svg"
          alt="Check mark icon for admin users"
        />

        <div>
          <p class="text-xl leading-5 text-left">
            Carolina <br />
            <span
              class="text-lg text-neutral-800/70 font-semibold leading-none"
            >
              admin
            </span>
          </p>
        </div>
      </button>
    {:else}
      <button
        onclick={logout}
        style="view-transition-name: admin-badge;"
        class="bg-green-200 p-3 rounded-md text-neutral-800 text-lg border-2 border-neutral-700 tracking-tight"
      >
        cerrar sesión?
      </button>
    {/if}

    <article class="text-neutral-800 text-xl font-bold leading-5">
      <span class="text-neutral-800/70"> feb 7 </span>
      <br />
      feb 12
    </article>
  </header>

  <div class="flex flex-col gap-9">
    <article class="flex flex-col gap-5">
      <h2
        class="text-7xl text-neutral-800 font-sans font-black tracking-tight leading-17"
      >
        Panel de <br />
        admin<span
          class="inline-block w-4 h-4 rounded-full bg-green-200 border-2 border-neutral-800"
        ></span>
      </h2>

      <p class="text-neutral-800 font-serif leading-6 text-2xl">
        Aquí están todas las herrameintas que necesitas para gestionar el grupo
        de alabanza. Cada sección incluye una guía para ayudarte.
      </p>
    </article>

    <div class="grid grid-cols-2 gird-rows-2 gap-2">
      <AdminCard title="Gestión del grupo" />
      <AdminCard title="Esta semana" />
      <AdminCard title="Nueva semana" />

      <a
        href="/"
        class="bg-neutral-800 text-neutral-200 text-xl flex p-2.5 justify-between rounded-md leading-none"
      >
        <p class="max-w-2/3 text-left">Volver al inicio</p>
      </a>
    </div>
  </div>
</section>

<style>
  :global(html)::view-transition-old(admin-badge),
  :global(html)::view-transition-new(admin-badge) {
    width: 100%;
    height: 100%;
  }
</style>
