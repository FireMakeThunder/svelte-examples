import { error, json, type Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";

/** contrived means to prevent going to the htmx routes via browser */
const stopDirectAccessToHTMXRoute = (async ({event, resolve}) => {
  const {request} = event;
  const url = new URL(request.url);
  if (url.pathname.startsWith('/htmx') && !request.headers.has('hx-request')) {
    throw error(403);
  } else {
    return resolve(event);
  }
}) satisfies Handle;


const validate = (async ({event, resolve}) => {
  // const {request} = event;
  // const url = new URL(request.url);
  // if (url.pathname.startsWith('/validate')) {
  //   const data = await request.formData();
  //   // console.log(data);
  //   // return new Response();
  // }

  return resolve(event);
}) satisfies Handle;

const save = (async ({event, resolve}) => {
  const url = new URL(event.request.url);
  if (url.pathname.startsWith('/save')) {
    console.log('save path')
    event.request.formData().then((data) => {
      console.log(Array.from(data.entries()))
    });
    return json({valid: true}, {status: 200})
  }

  return resolve(event);
}) satisfies Handle;



export const handle = sequence(stopDirectAccessToHTMXRoute, validate, save);