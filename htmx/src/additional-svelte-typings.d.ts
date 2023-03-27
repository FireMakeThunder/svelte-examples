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
     * The hx-boost attribute allows you to "boost" normal anchors and form tags to use AJAX instead. This has the nice fallback that, if the user does not have javascript enabled, the site will continue to work.
    
     * For anchor tags, clicking on the anchor will issue a GET request to the url specified in the href and will push the url so that a history entry is created. The target is the <body> tag, and the innerHTML swap strategy is used by default. All of these can be modified by using the appropriate attributes, except the click trigger.
    
    * For forms the request will be converted into a GET or POST, based on the method in the method attribute and will be triggered by a submit. Again, the target will be the body of the page, and the innerHTML swap will be used. The url will not be pushed, however, and no history entry will be created. (You can use the hx-push-url attribute if you want the url to be pushed.)
      * 
      * https://htmx.org/attributes/hx-boost/
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
     * The hx-target attribute allows you to target a different element for swapping than the one issuing the AJAX request. The value of this attribute can be:
    
     ** a CSS query selector of the element to target
     ** this which indicates that the element that the hx-target attribute is on is the target
     ** closest <CSS selector> which will find the closest parent ancestor that matches the given CSS selector. (e.g. closest tr will target the closest table row to the element)
     ** find <CSS selector> which will find the first child descendant element that matches the given CSS selector. (e.g find tr will target the first child descendant row to the element)
     * 
     * https://htmx.org/attributes/hx-target/
      */
    "hx-target"?: string;
    /** 
      * https://htmx.org/attributes/hx-trigger/
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
      * The hx-confirm attribute allows you to confirm an action before issuing a request. This can be useful in cases where the action is destructive and you want to ensure that the user really wants to do it.
      * 
      * @example <button hx-delete="/account" hx-confirm="Are you sure you wish to delete your account?">
      * Delete My Account
      * </button>
      * 
      * https://htmx.org/attributes/hx-confirm/
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