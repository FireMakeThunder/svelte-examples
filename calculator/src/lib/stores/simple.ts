import { writable, type Readable, type Writable } from "svelte/store";

// type Stores<T, S extends Writable<T> | Readable<T>> = S extends Writable<T> ? Writable<T> : Readable<T>;

export function gettable<T extends Writable<any> | Readable<any>>(store: T) {

  type Value = Parameters<Parameters<T['subscribe']>['0']>[0];
  let $value: Value;
  store.subscribe((value) => $value = value);

  return {
    ...store,
    get() {
      return $value
    },
    is(value: Value) {
      return this.get() === value;
    }
  }
}

export function writableExtra<T>(initial: T) {
  const initialStore = writable(initial);
  let $value = initial;
  const store = {
    ...initialStore,
    set(value: T) { initialStore.set($value = transformBefore(value)) },
    update(fn: (previous: T) => T) { initialStore.update(previous => $value = fn(previous)) },
  }

  const transformBeforeFn = [(value: T) => value];
  function transformBefore(value: T) {
    return transformBeforeFn.reduce((previousValue, transform) => {
      return transform(previousValue);
    }, value);
  }

  return {
    ...store,
    get() { return $value; },
    is(value: T) { return this.get() === value; },
    transformBefore: transformBeforeFn.push
  }
}




export function stateable<States extends string[]>(...states: States) {

  // const write = writable<typeof states[number]>(states[0]);
  // const store = gettable(write);
  // function wrap(num: number, min: number, max: number) {
  //   num = 101
  //   max = 99
  //   max - num === -2

  //   max = 99
  //   num = 97
  //   max - num === 2
  //   99 - 97 === 2
  //   99 - 99 - 97
  //   max - 2 === num
  //   99 - 2 === 97

  //   const greaterThanMax = num > max;
  //   if (greaterThanMax) {
  //     const difference = num - max;
  //     return min + difference - 1;
  //   }
  //   const lessThanMin = num < min;

  //   return Math.abs()
  // }

  // return {
  //   ...store,
  //   next() {
  //     const currentState = store.get()
  //     const currentIndex = states.indexOf(currentState);
  //     const nextState = 
  //     if (currentIndex === states.length - 1) {
  //       store.set(states[0])
  //     } else {
  //       store
  //     }
  //   }
  // };
}

// stateable('a', 'b', 'c').set('a')
// stateable('a', 'b', 'c').set('')
// stateable('a', 'b', 'c').set('d')

// stateable('a', 'b', 'c').is('a')
// stateable('a', 'b', 'c').is('')
// stateable('a', 'b', 'c').is('d')

// // stateable('a', 'b', 'c').


// if (import.meta.vitest) {
//   const { it, expect } = import.meta.vitest
//   it('add', () => {
//     expect(add()).toBe(0)
//     expect(add(1)).toBe(1)
//     expect(add(1, 2, 3)).toBe(6)
//   })
// }