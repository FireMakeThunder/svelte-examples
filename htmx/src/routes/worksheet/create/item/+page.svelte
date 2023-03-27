<script lang="ts">
	import { enhance } from '$app/forms';


	export let data;
</script>

<ul id="items">
	{#each data.items as items, index}
		<li>{index}</li>
	{/each}
</ul>
<form method="post" action="/worksheet/create/item" use:enhance>
	<button>Add item</button>
	<!-- <button hx-post="/worksheet/create/item"></button>Add item</button> -->
</form>
