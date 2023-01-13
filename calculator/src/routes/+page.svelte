<script lang="ts">
  import "../app.css";
  import { shrink } from "$lib/shrink";
  import { createOperation } from "$lib/stores/operation";
    import { Operators } from "$lib/stores/operator";

  let currentOperation = createOperation();
  $: ({currentEntry, previousEntry} = $currentOperation);

  function keydown(event: KeyboardEvent) {
    switch (event.code) {
      case "Enter":
      case "NumpadEnter":
        return currentOperation.equals();

      case "Escape":
        return currentOperation.clear();

      case "Delete":
        return currentEntry.clear();

      case "Backspace":
        return currentEntry.backspace();
    }

    // Handle Numpad keys
    if (event.code.includes("Numpad")) {
      const suffix = event.code.replace("Numpad", "").toLowerCase();

      if (suffix in Operators) {
        // console.log("operator", suffix);
        return currentOperation[suffix as keyof Operators]();
      }

      if (suffix === "Decimal") {
        // console.log("decimal", suffix);
        return currentOperation.decimal();
      }

      if (Number.isInteger(parseInt(suffix))) {
        // console.log("number", suffix);
        return currentEntry.append(suffix);
      }
    }
  }
</script>

<svelte:window on:keydown={keydown} />

<main class="p-1 grid items-end h-full grid-rows-[minmax(0,1fr)_auto]">
  <section id="top" class="grid grid-rows-2 text-right pb-1 px-2.5">
    <div class="h-full row-span-1 overflow-x-hidden grid items-end">
      <!-- {#if $currentOperation.equation} -->
      <div use:shrink={$currentOperation.equation} class="w-full opacity-70 font-light whitespace-nowrap">
        {$currentOperation.equation}
      </div>
      <!-- {/if} -->
    </div>
    <div class="h-full row-span-1 overflow-x-hidden grid items-end">
      <div use:shrink={$currentOperation.display} class="w-full text-5xl font-light">
        {$currentOperation.display}
      </div>
    </div>
  </section>

  <article id="calculator">
    <section id="actions" class="grid grid-cols-3">
      <button name="all-clear" on:click={currentOperation.clear}>AC</button>
      <button name="negate" on:click={currentEntry.negate}>±</button>
      <button name="percent" on:click={currentEntry.percentage}>%</button>
    </section>

    <section id="numbers" class="grid grid-cols-3">
      {#each "789456123".split("") as number}
        <button
          name="number-{number}"
          class="aspect-square"
          on:click={() => currentEntry.append(number)}
        >
          {number}
        </button>
      {/each}
      <button
        name="number-0"
        class="grid grid-cols-2 col-span-2"
        on:click={() => currentEntry.append(0)}
      >
        0
      </button>
      <button name="decimal" on:click={currentEntry.decimal}>.</button>
    </section>

    <section id="operators" class="grid grid-rows-5">
      <button name="divide" on:click={currentOperation.divide}>÷</button>
      <button name="multiply" on:click={currentOperation.multiply}>×</button>
      <button name="subtract" on:click={currentOperation.subtract}>=</button>
      <button name="add" on:click={currentOperation.add}>+</button>
      <button name="equal" on:click={currentOperation.equals}>=</button>
    </section>
  </article>
</main>

<!-- <img
  src="https://help.apple.com/assets/5C913108094622D50F674514/5C91310A094622D50F67451E/en_US/a2449af78d8d0428414121c07b2a8b18.png"
  alt="iPhone calculator"
  class="h-96"
/> -->
<style lang="postcss">
  :root {
    font-size: 8vw;
    height: 100%;
    /* font-family: Arial, Helvetica, sans-serif; */
  }

  :global(body) {
    height: 100%;
  }

  button {
    @apply grid place-items-center rounded-full text-lg;
    /* font-size: 10vw; */
    /* border-radius: 9999px; */

    &:hover {
      border-color: #646cff;
    }

    &:focus,
    &:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }
  }

  main #calculator {
    --gap: 0.35rem;
    /* --gridSize: 2.5rem; */
    --gridSize: 1fr;
    --gridAuto: minmax(0, var(--gridSize));
    grid-auto-columns: var(--gridAuto);
    grid-auto-rows: var(--gridAuto);
    display: grid;
    grid-template-areas:
      "a a a o"
      "n n n o"
      "n n n o"
      "n n n o"
      "n n n o";
    &,
    * {
      gap: var(--gap);
    }
  }

  #top {
    /* grid-area: t; */
  }

  #numbers {
    grid-area: n;
    grid-auto-columns: var(--gridAuto);
    grid-auto-rows: var(--gridAuto);

    button {
      @apply bg-zinc-800;
    }
  }

  #actions {
    grid-area: a;
    grid-auto-columns: var(--gridAuto);
    grid-auto-rows: var(--gridAuto);
    button {
      @apply bg-neutral-400  text-black;
    }
  }

  #operators {
    grid-area: o;
    grid-auto-columns: var(--gridAuto);
    grid-auto-rows: var(--gridAuto);
    button {
      @apply bg-orange-400;
    }
  }
</style>
