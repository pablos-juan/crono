<script>
  let code = $state('')
  let error = $state(false)

  async function verify () {
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ code }),
      headers: { 'Content-Type': 'application/json' },
    })

    if (res.ok) {
      window.location.href = '/admin'
    } else {
      error = true
    }
  }
</script>

<main
  class="h-dvh flex flex-col justify-center items-center gap-5 p-6 bg-neutral-950/98"
>
  <h1
    class="text-7xl text-neutral-100 font-sans font-black tracking-tight leading-17"
  >
    Ingresa <br />
    tu código de admin<span
      class="inline-block w-4 h-4 rounded-full bg-green-200 border-2 border-neutral-800"
    ></span>
  </h1>

  <p class="leading-5 text-lg text-neutral-100/80">
    Cada administrador recibe un código especial, si no tienes uno ponte en contacto con tu iglesia.
  </p>

  <div class="flex gap-2">
    <input
    type="password"
    bind:value={code}
    placeholder="A"
    class="w-full bg-neutral-800 rounded-sm p-3 text-neutral-600 text-4xl text-center font-bold"
    />

    <input
    type="password"
    bind:value={code}
    placeholder="B"
    class="w-full bg-neutral-800 rounded-sm p-3 text-neutral-600 text-4xl text-center font-bold"
    />

    <input
    type="password"
    bind:value={code}
    placeholder=8
    class="w-full bg-neutral-800 rounded-sm p-3 text-neutral-600 text-4xl text-center font-bold"
    />

    <input
    type="password"
    bind:value={code}
    placeholder=9
    class="w-full bg-neutral-800 rounded-sm p-3 text-neutral-600 text-4xl text-center font-bold"
    />
  </div>

  {#if error}
    <article class="bg-red-200 w-full p-2 leading-4 text-red-900 font-normal rounded-sm border border-red-900 flex gap-2">
      Este código no pertenece a ningún administrador.

      <img class="h-5" src="/adv.svg" alt="Error icon">
    </article>
  {/if}

  <button
    onclick={verify}
    class="w-full transition-colors duration-200 active:bg-green-300 active:text-neutral-800 bg-neutral-800 text-neutral-200 border border-neutral-200 rounded-md p-3 text-xl font-semibold"
  >
    Ingresar
  </button>
</main>
