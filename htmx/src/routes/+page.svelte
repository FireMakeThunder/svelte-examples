<script lang="ts">
	import { enhance } from '$app/forms';
	import Items from './worksheet/create/item/+page.svelte';

	export let data;

	let count = 0;
	count++;
</script>

<!-- <svelte:window on:popstate={() => console.log("POPSTATE")} on:submit={() => console.log("submit")} /> -->

<!-- <h1>Click below to send a get request to the server and see the swap occur.</h1> -->

<button hx-get="/htmx/test" hx-swap="outerHTML">HX get request</button>

<!-- <button on:click={() => count++}>{count} + 1</button> -->

<main>
	<section class="grid">
		<h2>Describe something</h2>
		<textarea
			hx-post="/save/worksheet/description"
			hx-trigger="keyup changed delay:500ms"
			name="description"
			class="text-black"
		/>

		<Items {data} />
	</section>
</main>
