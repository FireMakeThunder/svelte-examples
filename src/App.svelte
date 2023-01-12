<script lang="ts">
  import "./app.css";

  // Track the operands and operations, in the order they're received.

</script>

<main class="grid grid-cols-4">

<section id="numbers" class="grid grid-cols-3">
{#each Array(9) as _, number}
  <button>{number}</button>
{/each}
  <button class="col-span-2">0</button>
  <button class="">.</button>
</section>

</main>

<button>+</button>

<style>
  button {
    @apply grid place-items-center;
    border-radius: 9999px;
  }
</style>