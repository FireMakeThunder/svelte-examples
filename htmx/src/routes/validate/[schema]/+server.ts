import type { RequestHandler } from "./$types";
import {error} from '@sveltejs/kit';


export const GET: RequestHandler = async () => {
  throw error(403);
};
export const POST: RequestHandler = async ({fetch}) => {

  return fetch('/validate');
}