<script>
  import { goto } from "$app/navigation";
  import AdminCard from "./AdminCard.svelte";

</script>
<section class="flex flex-col gap-8 p-5 h-full justify-center bg-neutral-200/80">
  <div class="flex flex-col gap-4 ml-5">
    <h2 class="text-5xl font-serif leading-15">
      BIENVENIDO, <br>
      <span class="bg-red-300 px-2 rounded-sm ">Juan Pablo</span>
    </h2>

    <p class="text-xl leading-5.5 max-w-3/4">
      Administra el grupo desde aquí. Cada sección incluye una guía para ayudarte.
    </p>
  </div>

  <div class="flex flex-col gap-3">
    <AdminCard title={['ADMINISTRAR', 'GRUPO']} content='Crea, suspende o elimina un miembro del grupo de alabanza.' />
    
    <AdminCard title={['CRONOGRAMA', 'ACTUAL']} content='Revisa y edtia los servicios de la semana en curso.' />
    
    <AdminCard title={['NUEVA', 'SEMANA']} content='Genera el cronograma para la próxima semana y publícalo para todos.' />
  </div>

  <button onclick={() => goto('/')} class="bg-neutral-300 p-2 rounded-xl text-lg font-semibold text-neutral-900 border-2 border-neutral-50 active:border-neutral-500 active:scale-95 transition">
    Inicio
  </button>
</section>