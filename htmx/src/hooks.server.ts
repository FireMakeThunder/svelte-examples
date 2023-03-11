import type { Handle } from "@sveltejs/kit";

export const handle = (({event, resolve}) => {
  console.log('serverhandle', event.url.pathname);

  if (event.request.headers.has('hx-request')) {
    return new Response('Response from the handle')
  } else {
    return resolve(event);
  }

}) satisfies Handle;