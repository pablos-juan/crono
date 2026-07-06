<script>
  import { fade } from "svelte/transition";
  let code = $state('')
  let error = $state(false)

  async function verify () {
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ code }),
      headers: { 'Content-Type': 'application/json' }
    })

    if (res.ok) {
      window.location.href = '/admin'
    } else {
      error = true
    }
  }
</script>

<main class="h-dvh flex flex-col justify-center items-center gap-5 p-10 bg-neutral-950/98 text-white">
  <h1 class="text-4xl font-serif">Ingresa tu código de administrador</h1>

  <input
    type="password"
    bind:value={code}
    placeholder="CODE"
    class="w-full bg-neutral-800 rounded-lg p-3 text-white text-center tracking-widest font-serif"
  />

  {#if error}
    <p transition:fade class="text-red-400 text-sm">Código incorrecto</p>
  {/if}

  <button
    onclick={verify}
    class="w-full bg-white text-neutral-900 font-semibold rounded-lg p-3 text-lg"
  >
    Ingresar
  </button>
</main>