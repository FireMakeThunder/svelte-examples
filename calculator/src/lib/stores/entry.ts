import { writable } from "svelte/store";
import type { Operators } from "./operator";

export type EntryStore = ReturnType<typeof createEntryStore>;

export function createEntryStore() {
  let entry = '0';
  const store = writable(entry);

  /** Set value and inform subscribers */
  function set(value: string | number) {
    // Parse value to make sure it works as a number
    // Provide 0 as a fallback
    const newValue = Number(value) || '0';

    store.set(entry = String(newValue));
  }

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
    subscribe: store.subscribe,
    set,
    ...operations,
    percentage() {
      set(Number(entry) * 0.01);
    },

    negate() {
      set(Number(entry) * -1);
    },

    decimal() {
      if (entry.includes('.') === false) {
        set(entry.concat('.'));
      }
    },

    /** Appends payload, or replaces with payload if entry is "0" */
    append(payload: number | string) {
      const newValue = entry !== "0"
        ? entry + payload
        : payload;

      set(newValue);
    },

    backspace() {
      set(entry.slice(0, -1));
    },

    clear() {
      set('');
    },



  }
}