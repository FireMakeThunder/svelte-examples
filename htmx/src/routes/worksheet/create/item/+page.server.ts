import type { Actions, PageServerLoad } from "./$types";

let items = [null];

export const load = (async () => {
  return {items};
}) satisfies PageServerLoad;

export const actions = {
  default: async () => {
    items.push(null);
  }
} satisfies Actions;

// export const POST = (async({request}) => {
//   // const data = await request.formData();
//   items++;

//   const listHTML = Array(items).fill(null).map((_, index) => `<li>${index}</li>`);
//   console.log(listHTML)

//   const html = `
//     <ul id="items">
//       ${listHTML.join('\n')}
//     </ul>
//   `

//   return new Response(html, {status: 200, headers: {'content-type': 'text/html'}})
// }) satisfies RequestHandler;