<script>
  import "../app.css";

  import { onNavigate } from "$app/navigation";

  onNavigate((navigation) => {
    if (!document.startViewTransition) return
    return new Promise(resolve => {
      document.startViewTransition(async () => {
        resolve()
        await navigation.complete
      })
    })
  })

  let { children } = $props();
</script>

<svelte:head>
  <title>CALENDARIO SEMANAL</title>
</svelte:head>

<main>

</main>

{@render children()}
