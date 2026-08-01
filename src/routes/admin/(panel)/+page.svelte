<script>
  import Card from '$lib/components/Card.svelte'

  let endsession = $state(false)
  const badges = [
    { label: 'Vigilia', active: false },
    { label: 'Sin servicio en la tarde', active: false },
    { label: 'Lista de ausentes', active: false },
  ]

  let activeBadges = $state(badges)

  function toggleBadge (index) {
    activeBadges[index].active = !activeBadges[index].active
  }

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
        <div class="flex gap-2 items-center w-full">
          <span class="bg-green-800/40 text-neutral-800 px-2 rounded-sm text-sm font-semibold flex items-center h-6">
            Sin acciones
          </span>
          <h3 class="text-2xl text-neutral-800 font-semibold tracking-tight">
            Esta semana
          </h3>
        </div>

        <p class="text-neutral-700 leading-tight text-sm">
          Administra los servicios de la semana: agrega, edita o elimina participantes, crea nuevos servicios y actualiza la información.
        </p>
      </Card>

      <article class="bg-neutral-700/70 p-3 rounded-sm border border-neutral-400/80 flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <h3 class="text-2xl text-neutral-200 tracking-tight font-semibold">
            Nuevo cronograma
          </h3>

          <p class="text-neutral-400 text-sm leading-tight">
            Genera un nuevo cronograma, selecciona los parémetros que puedan servirte. El cronograma actual será reemplazado por el nuevo.
          </p>
        </div>

        <div class="flex flex-wrap gap-2">
          {#each  activeBadges as badge, i (i)}
            <button
              onclick={() => toggleBadge(i)}
              class="px-2 py-1 rounded-sm transition-colors duration-200 {badge.active
                ? 'bg-green-300 text-neutral-900'
                : 'bg-neutral-800/80 text-neutral-400'}"
            >
              {badge.label}
            </button>
          {/each}
        </div>
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
