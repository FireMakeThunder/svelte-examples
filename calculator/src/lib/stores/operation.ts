import { derived, get, writable, } from "svelte/store";
import { createEntryStore, type EntryStore } from "./entry";
import { createOperatorStore } from "./operator";

export function createOperation() {
  const left = '0';
  const right = '0'
  const left = createEntryStore();
  const right = createEntryStore();
  const operator = createOperatorStore();
  const state = writable<'INITIAL' | 'EQUALS' | 'FINAL'>('INITIAL');

  function equationFormat(left: string, operator: string, right?: string) {
    return `${left} ${operator}${right ? ` ${right} =` : ''}`;
  }

  const initialValues = () => ({
    previousEntry: <EntryStore | undefined>undefined,
    currentEntry: left,
    display: get(left),
    equals: 0,
    equation: ''
  });

  const store = derived([left, right, operator, state], ([$left, $right, $operator, $state], set) => {
    console.log('operation derived called');

    if ($operator) {
      const equals = left[$operator.type]($right);
      set({
        previousEntry: left,
        currentEntry: right,
        display: $state === 'FINAL' ? String(equals) : $right,
        equals: equals,
        equation: $state !== 'INITIAL'
          ? equationFormat($left, $operator.symbol, $right)
          : equationFormat($left, $operator.symbol)
      });
    } else {
      set(initialValues());
    }
  }, initialValues());

  return {
    ...store,
    add() {
      operator.set('add');
    },
    subtract() {
      operator.set('subtract');
    },
    multiply() {
      operator.set('multiply');
    },
    divide() {
      operator.set('divide');
    },
    equals() {
      if (get(state) === 'INITIAL') {
        state.set('EQUALS');
      } else {
        state.set('FINAL');
        left.set(get(store).equals);
      }
    },
    clear() {
      state.set('INITIAL');
      operator.clear();
      left.clear();
      right.clear();
    }
  };
}
