import { onMount } from "svelte";
import type { Operators } from "$lib/stores/operator";

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
type Numbers = typeof numbers[number];
// type NumbersStr<T extends Numbers = Numbers> = `${T}`;
type NumpadCode<T extends string | number> = `Numpad${T}`;
/** Keyboard codes that are anticipated for registration */
type CodeList =
  | 'Enter' | 'Delete' | 'Escape' | '.' | 'Backspace'
  | NumpadCode<'Enter' | 'Decimal'>
  | NumpadCode<Numbers>
  | NumpadCode<Capitalize<keyof Operators>>;

export function numpadNumber<T extends Numbers>(number: T): NumpadCode<Numbers> {
  if (!numbers.includes(number)) throw new RangeError(number + ' is not for numpad use in this app.');
  return `Numpad${number}`;
}

type CodeParam = (number | CodeList)[];



function createMapListener<T>(actOnValue: (value: T) => void) {
  const map = new Map<string, T>;

  const eventType = 'keydown';
  const addListener = () => addEventListener(eventType, listener);
  const removeListener = () => removeEventListener(eventType, listener);
  function listener({ code }: KeyboardEvent) {
    // console.log('listener called', code);
    const value = map.get(code);
    if (value) {
      console.log('listener called and received value', code, value);
      actOnValue(value);
    }
  }


  /**
   * 
   * @param keyboardCodes Keyboard codes 
   * @param value Value to act on when listener is called and matches with your register codes
   * @returns A cleanup callback, to be used at the end of a lifecycle
   */
  function register(keyboardCodes: (number | string)[], value: T) {
    const codes = [keyboardCodes].map(String);

    if (map.size === 0) {
      console.log('First registration, adding window keydown listener');
      addListener();
    }

    codes.forEach(code => {
      if (map.delete(code)) {
        console.error(new ReferenceError(`${code} was already registered - deleting and reregistering`));
      }
      map.set(code, value)
    });

    return () => deregister(codes);
  }

  function deregister(codes: string[]) {
    codes.forEach(code => map.delete(code));

    if (map.size === 0) {
      console.log('Deleted last registration, removing keydown listener')
      removeListener
    }
  }

  return { register };
}


/** Maps keyboard codes to button */
const buttons = createMapListener((button: HTMLButtonElement) => {
  console.log('clicking button!', button);
  button.click();
});

/** Maps keyboard codes to listeners */
const callbacks = createMapListener((callback: () => void) => {
  callback();
});

/**
 * Action used to click a button when codes are matched in a keydown event/
 * @param button Button that will click when the keydown is called with the registered codes
 * @param keyboardCodes Codes to register to the keydown
 * @returns Action object { destroy }
 */
export function registerButton(button: HTMLButtonElement, keyboardCodes: CodeParam) {
  console.group('Button Register:', keyboardCodes);
  const destroy = buttons.register(keyboardCodes, button);
  console.groupEnd();
  return { destroy }
}


/**
 * Register a callback to be call when codes are matched in a keydown event.
 * Is initiated in mount event of the lifecycle.
 * @param keyboardCodes Codes to register to the window keydown
 * @param callback will be called when codes are matched with a window keydown event
 */
export function registerCallback(keyboardCodes: CodeParam, callback: () => void) {
  onMount(() => {
    console.group('Callback register:', keyboardCodes);
    const destroy = callbacks.register(keyboardCodes, callback);
    console.groupEnd();

    return destroy;
  });
}
