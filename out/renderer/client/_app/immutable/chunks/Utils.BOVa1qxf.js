import { w as writable } from "./index.D97w0myq.js";
import { C as getContext, D as setContext } from "./scheduler.fBTsnP2i.js";
import { g as goto } from "./entry.Cs_QM1XO.js";
const MODAL_STORE_KEY = "modalStore";
function getModalStore() {
  const modalStore = getContext(MODAL_STORE_KEY);
  if (!modalStore)
    throw new Error("modalStore is not initialized. Please ensure that `initializeStores()` is invoked in the root layout file of this app!");
  return modalStore;
}
function initializeModalStore() {
  const modalStore = modalService();
  return setContext(MODAL_STORE_KEY, modalStore);
}
function modalService() {
  const { subscribe, set, update } = writable([]);
  return {
    subscribe,
    set,
    update,
    /** Append to end of queue. */
    trigger: (modal) => update((mStore) => {
      mStore.push(modal);
      return mStore;
    }),
    /**  Remove first item in queue. */
    close: () => update((mStore) => {
      if (mStore.length > 0)
        mStore.shift();
      return mStore;
    }),
    /** Remove all items from queue. */
    clear: () => set([])
  };
}
function formatDate(date) {
  if (!date)
    return "N/A";
  return new Date(date).toLocaleString();
}
function createOnPageChange(params, path) {
  return function onPageChange(e) {
    const urlParams = new URLSearchParams();
    urlParams.set("page", e.detail);
    urlParams.set("limit", params.limit);
    urlParams.set("sorters", params.sorters);
    urlParams.set("filters", params.filters);
    console.log(`${path}?${urlParams.toString()}`);
    goto(`${path}?${urlParams.toString()}`);
  };
}
function createOnAmountChange(params, path) {
  return function onAmountChange(e) {
    const urlParams = new URLSearchParams();
    urlParams.set("page", params.page);
    urlParams.set("limit", e.detail);
    urlParams.set("sorters", params.sorters);
    urlParams.set("filters", params.filters);
    console.log(`${path}?${urlParams.toString()}`);
    goto(`${path}?${urlParams.toString()}`);
  };
}
function createOnGo(params, path) {
  return function onGo(e) {
    if (e.type !== "click" && e.key !== "Enter")
      return;
    const urlParams = new URLSearchParams();
    if (params.page != "")
      urlParams.set("page", params.page);
    if (params.limit != "")
      urlParams.set("limit", params.limit);
    if (params.sorters != "")
      urlParams.set("sorters", params.sorters);
    if (params.filters != "")
      urlParams.set("filters", params.filters);
    console.log(`${path}?${urlParams.toString()}`);
    goto(`${path}?${urlParams.toString()}`);
  };
}
function capitalize(s) {
  if (typeof s !== "string")
    return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
}
function TriggerCodeModal(object, modalStore) {
  const modal = {
    type: "component",
    component: "codeBlockModal",
    meta: {
      code: JSON.stringify(object, null, 4),
      language: "json"
    }
  };
  modalStore.trigger(modal);
}
function parseInitials(name) {
  const initials = name.match(/\b(\w)/g) || ["A", "U"];
  return initials.join("");
}
export {
  TriggerCodeModal as T,
  createOnAmountChange as a,
  createOnGo as b,
  createOnPageChange as c,
  capitalize as d,
  formatDate as f,
  getModalStore as g,
  initializeModalStore as i,
  parseInitials as p
};
