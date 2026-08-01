<script>
  import Card from '$lib/components/Card.svelte'

  let endsession = $state(false)

  function toggleAction () {
    if (!document.startViewTransition) {
      endsession = !endsession
      return
    }

    document.startViewTransition(() => {
      endsession = !endsession
    })
  }

  async function logout () {
    await fetch('/api/logout', { method: 'POST' })
    window.location.href = '/'
  }
</script>

<section
  class="flex flex-col gap-8 p-6 min-h-dvh justify-between bg-neutral-950/98"
>
  <header class="flex justify-between w-full items-center">
    {#if !endsession}
      <button
        onclick={toggleAction}
        style="view-transition-name: admin-badge;"
        class="p-2 rounded-md text-neutral-200 flex gap-1.5 items-center tracking-tight active:bg-white transition-colors duration-200"
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
              class="text-lg text-neutral-200/70 font-semibold leading-none"
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

    <article class="text-neutral-200 text-xl font-bold leading-5">
      <span class="text-neutral-200/70"> feb 7 </span>
      <br />
      feb 12
    </article>
  </header>

  <div class="flex flex-col gap-9">
    <article class="flex flex-col gap-4">
      <h2
        class="text-7xl text-neutral-200 font-sans font-black tracking-tight leading-17"
      >
        Panel de <br />
        admin<span
          class="inline-block w-3 h-3 rounded-full bg-green-300"
        ></span>
      </h2>

      <p class="text-neutral-200/70 leading-tight text-lg">
        Todo lo que necesitas para gestionar el grupo de alabanza. Cada sección incluye una guía.
      </p>
    </article>

    <div class="flex flex-col gap-3">
      <Card>
        <div class="flex justify-between items-center w-full">
          <h3 class="text-2xl text-neutral-800 font-semibold tracking-tight">
            Esta semana
          </h3>
          <p class="bg-green-800/40 text-neutral-800 px-2 rounded-sm text-xs font-semibold flex items-center h-5">
            3 acciones por realizar
          </p>
        </div>

        <p class="text-neutral-700 leading-tight text-sm">
          Administra los servicios de la semana: agrega, edita o elimina participantes, crea nuevos servicios y actualiza la información.
        </p>
      </Card>

      <article class="bg-neutral-700/70 p-3 rounded-sm border border-neutral-400/80 flex flex-col gap-1.5">
        <h3 class="text-2xl text-neutral-200 tracking-tight">
          Nuevo cronograma
        </h3>

        <p class="text-neutral-400 text-sm leading-tight">
          Genera un nuevo cronograma, selecciona los parémetros que puedan servirte. El cronograma actual será reemplazado por el nuevo.
        </p>
      </article>
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
