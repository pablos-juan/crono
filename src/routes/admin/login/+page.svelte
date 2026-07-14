<script>
  import { fade } from "svelte/transition";
  let code = $state("");
  let error = $state(false);

  async function verify() {
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ code }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      window.location.href = "/admin";
    } else {
      error = true;
    }
  }
</script>

<main
  class="h-dvh flex flex-col justify-center items-center gap-5 p-5.5 bg-neutral-100 text-white"
>
  <h1 class="text-7xl text-neutral-800 font-sans font-black tracking-tight leading-17">
    Ingresa <br>
    tu código de admin
  </h1>

  <p class="text-neutral-800 font-serif leading-6 text-2xl">
    Cada administrador recibe un código especial, si no tienes uno ponte en contacto con tu iglesia.
  </p>

  <input
    type="password"
    bind:value={code}
    placeholder="AB2349"
    class="w-full bg-green-200 border-2 border-neutral-700 rounded-md p-3 text-neutral-800 text-lg tracking-tight"
  />

  {#if error}
    <p transition:fade class="text-red-400 text-sm">Código incorrecto</p>
  {/if}

  <button
    onclick={verify}
    class="w-full bg-neutral-800 text-neutral-100 rounded-lg p-3 text-lg"
  >
    Ingresar
  </button>
</main>
