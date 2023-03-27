<script lang="ts">
	import { beforeNavigate } from "$app/navigation";
  import "../app.postcss";

  beforeNavigate(({type}) => {
    console.log('before navigate', type)
    if (type === "form") {
      console.log('form');
    }
  })

  // HTMX doesn't wire up behavior for elements affected by HMR
  // This will rerun the HTMX wiring after the HMR update
  // Found the way to hook into Vite HMR via https://stackoverflow.com/a/72388322
  if (import.meta.hot) {
    import.meta.hot.on('vite:afterUpdate', () => {
      console.log('running after update');
      const body = document.querySelector('body');
      if (htmx && body) {
        console.log('running htmx process');
        htmx.process(body);
      }
    })
  }
</script>

<svelte:head>
  <script src="./htmx@1.8.6.js"></script>
</svelte:head>

<slot />