import { w as writable, r as readable } from "./index.D97w0myq.js";
import { $ as get_store_value } from "./scheduler.fBTsnP2i.js";
const stores = {};
function getStorage(type) {
  return type === "local" ? localStorage : sessionStorage;
}
function localStorageStore(key, initialValue, options) {
  const serializer = (options == null ? void 0 : options.serializer) ?? JSON;
  const storageType = (options == null ? void 0 : options.storage) ?? "local";
  function updateStorage(key2, value) {
    getStorage(storageType).setItem(key2, serializer.stringify(value));
  }
  if (!stores[key]) {
    const store = writable(initialValue, (set2) => {
      const json = getStorage(storageType).getItem(key);
      if (json) {
        set2(serializer.parse(json));
      }
      {
        const handleStorage = (event) => {
          if (event.key === key)
            set2(event.newValue ? serializer.parse(event.newValue) : null);
        };
        window.addEventListener("storage", handleStorage);
        return () => window.removeEventListener("storage", handleStorage);
      }
    });
    const { subscribe, set } = store;
    stores[key] = {
      set(value) {
        updateStorage(key, value);
        set(value);
      },
      update(updater) {
        const value = updater(get_store_value(store));
        updateStorage(key, value);
        set(value);
      },
      subscribe
    };
  }
  return stores[key];
}
const modeOsPrefers = localStorageStore("modeOsPrefers", false);
const modeUserPrefers = localStorageStore("modeUserPrefers", void 0);
const modeCurrent = localStorageStore("modeCurrent", false);
function getModeOsPrefers() {
  const prefersLightMode = window.matchMedia("(prefers-color-scheme: light)").matches;
  modeOsPrefers.set(prefersLightMode);
  return prefersLightMode;
}
function setModeUserPrefers(value) {
  modeUserPrefers.set(value);
}
function setModeCurrent(value) {
  const elemHtmlClasses = document.documentElement.classList;
  const classDark = `dark`;
  value === true ? elemHtmlClasses.remove(classDark) : elemHtmlClasses.add(classDark);
  modeCurrent.set(value);
}
function setInitialClassState() {
  const elemHtmlClasses = document.documentElement.classList;
  const condLocalStorageUserPrefs = localStorage.getItem("modeUserPrefers") === "false";
  const condLocalStorageUserPrefsExists = !("modeUserPrefers" in localStorage);
  const condMatchMedia = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (condLocalStorageUserPrefs || condLocalStorageUserPrefsExists && condMatchMedia) {
    elemHtmlClasses.add("dark");
  } else {
    elemHtmlClasses.remove("dark");
  }
}
const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
function prefersReducedMotion() {
  return window.matchMedia(reducedMotionQuery).matches;
}
const prefersReducedMotionStore = readable(prefersReducedMotion(), (set) => {
  {
    const setReducedMotion = (event) => {
      set(event.matches);
    };
    const mediaQueryList = window.matchMedia(reducedMotionQuery);
    mediaQueryList.addEventListener("change", setReducedMotion);
    return () => {
      mediaQueryList.removeEventListener("change", setReducedMotion);
    };
  }
});
export {
  setModeCurrent as a,
  setModeUserPrefers as b,
  getModeOsPrefers as g,
  localStorageStore as l,
  modeCurrent as m,
  prefersReducedMotionStore as p,
  setInitialClassState as s
};
