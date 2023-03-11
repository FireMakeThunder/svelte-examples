// https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#im-using-an-attributeevent-on-a-dom-element-and-it-throws-a-type-error

declare namespace svelteHTML {
  // enhance elements
  interface IntrinsicElements {
    // 'my-custom-element': { someattribute: string; 'on:event': (e: CustomEvent<any>) => void };
  }
  // enhance attributes
  interface HTMLAttributes<T> {
    // If you want to use on:beforeinstallprompt
    // 'on:beforeinstallprompt'?: (event: any) => any;
    // If you want to use myCustomAttribute={..} (note: all lowercase)
    // mycustomattribute?: any;
    // You can replace any with something more specific if you like

    // HTMX Core Attributes
    /** 
      * https://htmx.org/attributes/hx-boost/
      * 
      */
    "hx-boost"?: "true" | "false";
    /** 
      * https://htmx.org/attributes/hx-get/
      * 
      */
    "hx-get"?: string;
    /** 
      * https://htmx.org/attributes/hx-post/
      * 
      */
    "hx-post"?: string;
    /** 
      * https://htmx.org/attributes/hx-push-url/
      * 
      */
    "hx-push-url"?: string;
    /** 
      * https://htmx.org/attributes/hx-select/
      * 
      */
    "hx-select"?: string;
    /** 
      * https://htmx.org/attributes/hx-select-oob/
      * 
      */
    "hx-select-oob"?: string;
    /** 
      * https://htmx.org/attributes/hx-swap/
      * 
      */
    "hx-swap"?: string;
    /** 
      * https://htmx.org/attributes/hx-swap-oob/
      * 
      */
    "hx-swap-oob"?: string;
    /** 
      * https://htmx.org/attributes/hx-swap-target/
      * 
      */
    "hx-target"?: string;
    /** 
      * https://htmx.org/attributes/hx-target/
      * 
      */
    "hx-trigger"?: string;
    /** 
      * https://htmx.org/attributes/hx-vals/
      * 
      */
    "hx-vals"?: string;


    // HTMX Additional Attributes
    /** 
      * https://htmx.org/attributes/hx-confirm/
      * 
      */
    "hx-confirm"?: string;
    /** 
      * https://htmx.org/attributes/hx-delete/
      * 
      */
    "hx-delete"?: string;
    /** 
      * https://htmx.org/attributes/hx-disable/
      * 
      */
    "hx-disable"?: string;
    /** 
      * https://htmx.org/attributes/hx-disinherit/
      * 
      */
    "hx-disinherit"?: string;
    /** 
      * https://htmx.org/attributes/hx-encoding/
      * 
      */
    "hx-encoding"?: string;
    /** 
      * https://htmx.org/attributes/hx-ext/
      * 
      */
    "hx-ext"?: string;
    /** 
      * https://htmx.org/attributes/hx-headers/
      * 
      */
    "hx-headers"?: string;
    /** 
      * https://htmx.org/attributes/hx-history/
      * 
      */
    "hx-history"?: string;
    /** 
      * https://htmx.org/attributes/hx-history-elt/
      * 
      */
    "hx-history-elt"?: string;
    /** 
      * https://htmx.org/attributes/hx-include/
      * 
      */
    "hx-include"?: string;
    /** 
      * https://htmx.org/attributes/hx-indicator/
      * 
      */
    "hx-indicator"?: string;
    /** 
      * https://htmx.org/attributes/hx-params/
      * 
      */
    "hx-params"?: string;
    /** 
      * https://htmx.org/attributes/hx-patch/
      * 
      */
    "hx-patch"?: string;
    /** 
      * https://htmx.org/attributes/hx-preserve/
      * 
      */
    "hx-preserve"?: string;
    /** 
      * https://htmx.org/attributes/hx-prompt/
      * 
      */
    "hx-prompt"?: string;
    /** 
      * https://htmx.org/attributes/hx-put/
      * 
      */
    "hx-put"?: string;
    /** 
      * https://htmx.org/attributes/hx-replace-url/
      * 
      */
    "hx-replace-url"?: string;
    /** 
      * https://htmx.org/attributes/hx-request/
      * 
      */
    "hx-request"?: string;
    /** 
      * https://htmx.org/attributes/hx-sse/
      * 
      */
    "hx-sse"?: string;
    /** 
      * https://htmx.org/attributes/hx-sync/
      * 
      */
    "hx-sync"?: string;
    /** 
      * https://htmx.org/attributes/hx-validate/
      * 
      */
    "hx-validate"?: string;
    /** 
      * https://htmx.org/attributes/hx-vars/
      * 
      */
    "hx-vars"?: string;
  }
}