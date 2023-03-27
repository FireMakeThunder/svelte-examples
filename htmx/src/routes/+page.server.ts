// import type { Actions } from "./$types";

import { items } from '$lib/database';

// import Success from '$lib/components/Success.svelte';

// export const actions = {
//   async default({request}) {
//     console.log(request);
//     return Success;
//   }
// } satisfies Actions;


export async function load({}) {
  return {items};
}