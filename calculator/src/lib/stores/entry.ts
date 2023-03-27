import type { Operators } from "./operator";
import { writableExtra } from "$lib/stores/simple";

export type EntryStore = ReturnType<typeof createEntryStore>;

export function createEntryStore() {
  const store = writableExtra('0')
    .transformBefore(value => String(value) || '0');

  let $value;
  store.subscribe(value => $value = value);

  store.transformBefore(value => String(value) || '0');
  
  /** Set value and inform subscribers */
  let entry = '0';

  const operations = {
    add(val: number | string) {
      return Number(entry) + Number(val);
    },
    subtract(val: number | string) {
      return Number(entry) - Number(val);
    },
    multiply(val: number | string) {
      return Number(entry) * Number(val);
    },
    divide(val: number | string) {
      return Number(entry) / Number(val);
    }
  } as const satisfies Record<Lowercase<keyof Operators>, (val: number | string) => number>

  return {
    ...store,
    ...operations,
    clear() {
      store.set('');
    },
    decimal() {
      if (entry.includes('.') === false) {
        store.set(entry + '.');
      }
    },

    /** Appends payload, or replaces with payload if entry is "0" */
    append(payload: number | string) {
      const newValue = entry !== "0"
        ? entry + payload
        : payload;

      store.set(newValue);
    },

    backspace() {
      set(entry.slice(0, -1));
    },

    clear() {
      set('0');
    },



  }
}