import { get, writable, type Writable } from "svelte/store";

export const Operators = {
  'divide': '÷',
  'multiply': '×',
  'subtract': '-',
  'add': '+'
} as const;


export type Operators = typeof Operators;
export type OperatorStore = ReturnType<typeof createOperatorStore>;

type Type = keyof Operators;
const getSymbol = (type: Type) => Operators[type] ?? '';

export function createOperatorStore() {
  const store: Writable<{ type: Type, symbol: string } | undefined> = writable();

  return {
    subscribe: store.subscribe,
    set(type: Type) {
      store.set(type ? { type, symbol: getSymbol(type) } : undefined);
    },
    clear() {
      store.set(undefined);
    }
    // divide: () => store.set('divide'),
    // add: () => store.set('add'),
    // multiply: () => store.set('multiply'),
    // subtract: () => store.set('subtract'),
  };
}