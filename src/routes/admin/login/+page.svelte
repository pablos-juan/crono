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

<main class="h-dvh flex flex-col justify-center items-center gap-5 p-5.5 bg-neutral-100 text-white">
  <h1 class="text-6xl text-neutral-800 font-sans font-black tracking-tight">Ingresa tu código de admin<span>.</span></h1>

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