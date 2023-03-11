import { error, type Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";

/** contrived means to prevent going to the htmx routes via browser */
const stopDirectAccessToHTMXRoute = (({event, resolve}) => {
  const {request} = event;
  const url = new URL(request.url);
  if (url.pathname.startsWith('/htmx') && !request.headers.has('hx-request')) {
    throw error(403);
  } else {
    return resolve(event);
  }
}) satisfies Handle;


export const handle = sequence(stopDirectAccessToHTMXRoute);