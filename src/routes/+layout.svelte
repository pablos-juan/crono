<script lang="ts">
  import "../app.css";
  import MainCard from "$lib/components/Hero.svelte";
	import { onMount } from "svelte";
  import { createDefaultImportMeta } from "vite/module-runner";

	const slides = [
		{
			title: 'JUEVES 25',
			content: 'ORACION Y DOCTRINA'
		},
		{
			title: 'SABADO 27',
			content: 'JOVENES'
		},
		{
			title: 'DOMINGO 28',
			content: 'ESCUELA DOMINICAL'
		}
	]

  let { children } = $props();
</script>

<svelte:head>
  <title>CALENDARIO SEMANAL</title>
</svelte:head>

<main>
	

</main>

{@render children()}
