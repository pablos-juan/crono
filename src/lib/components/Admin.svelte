<script>
  import { goto } from "$app/navigation";
  import AdminCard from "./AdminCard.svelte";
</script>

<section
  class="flex flex-col gap-8 p-5.5 h-full justify-between bg-neutral-200/80"
>
  <header class="flex justify-between w-full items-center">
    <span class="text-neutral-800 text-2xl font-serif italic">
      feb 22, mar 1
    </span>

    <span
      class="bg-green-200 p-2.5 py-0.5 rounded-md text-neutral-800 flex gap-1.5 items-center text-lg border-2 border-neutral-800"
    >
      admin
      <img class="h-5" src="/admin-check.svg" alt="Check mark icon for admin users" />
    </span>
  </header>

  <div class="flex flex-col gap-9">
    <article class="flex flex-col gap-5">
      <h2
        class="text-7xl text-neutral-800 font-sans font-black tracking-tight leading-17"
      >
        Panel de <br />
        admin.
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

      <a href="/" class="bg-neutral-800 text-neutral-200 text-xl flex p-2.5 justify-between rounded-md leading-none">
        <p class="max-w-2/3 text-left">
          Volver al inicio
        </p>
      </a>
    </div>
  </div>
</section>
