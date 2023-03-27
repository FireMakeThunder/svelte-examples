<script lang="ts">
	import { spring }  from 'svelte/motion';

  const a = spring(0);
  setTimeout(() => $a = 100, 0);
</script>


<div class="relative" style:top="{$a}px">
  Wait
</div>