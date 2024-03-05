import { $ as get_store_value, C as getContext, D as setContext, a3 as identity, ad as split_css_unit, s as safe_not_equal, P as create_slot, e as element, a as space, c as claim_element, b as children, f as claim_space, g as detach, i as attr, j as insert_hydration, k as append_hydration, Q as update_slot_base, R as get_all_dirty_from_scope, S as get_slot_changes, L as compute_slots, N as assign, O as exclude_internal_props, K as set_style, x as listen, ae as bubble, t as text, d as claim_text, o as noop, y as run_all, af as compute_rest_props, I as svg_element, J as claim_svg_element, l as set_data, ag as set_attributes, W as action_destroyer, ah as src_url_equal, X as is_function, v as add_render_callback, z as empty, m as component_subscribe, V as createEventDispatcher, B as binding_callbacks, Y as HtmlTagHydration, Z as claim_html_tag, T as construct_svelte_component, u as set_input_value, ai as head_selector, p as onMount, q as set_store_value, n as destroy_each, A as toggle_class, h as get_svelte_dataset } from "../chunks/scheduler.fBTsnP2i.js";
import { S as SvelteComponent, i as init, t as transition_in, g as group_outros, a as transition_out, c as check_outros, h as create_in_transition, j as create_bidirectional_transition, k as create_out_transition, b as create_component, d as claim_component, m as mount_component, e as destroy_component } from "../chunks/index.DdnDjIf5.js";
import { e as ensure_array_like, u as update_keyed_each, o as outro_and_destroy_block } from "../chunks/each.C9vk03ly.js";
import { C as CodeBlock, p as page, s as storeHighlightJs } from "../chunks/stores.BRlO1dnN.js";
import { w as writable } from "../chunks/index.D97w0myq.js";
import { i as initializeModalStore, g as getModalStore, d as capitalize, p as parseInitials } from "../chunks/Utils.BOVa1qxf.js";
import { p as prefersReducedMotionStore, s as setInitialClassState, m as modeCurrent, a as setModeCurrent, g as getModeOsPrefers, b as setModeUserPrefers } from "../chunks/ProgressBar.svelte_svelte_type_style_lang.DcCzH8ar.js";
const globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function get_spread_update(levels, updates) {
  const update = {};
  const to_null_out = {};
  const accounted_for = { $$scope: 1 };
  let i = levels.length;
  while (i--) {
    const o = levels[i];
    const n = updates[i];
    if (n) {
      for (const key in o) {
        if (!(key in n))
          to_null_out[key] = 1;
      }
      for (const key in n) {
        if (!accounted_for[key]) {
          update[key] = n[key];
          accounted_for[key] = 1;
        }
      }
      levels[i] = n;
    } else {
      for (const key in o) {
        accounted_for[key] = 1;
      }
    }
  }
  for (const key in to_null_out) {
    if (!(key in update))
      update[key] = void 0;
  }
  return update;
}
function get_spread_object(spread_props) {
  return typeof spread_props === "object" && spread_props !== null ? spread_props : {};
}
const storePopup = writable(void 0);
function popup(triggerNode, args) {
  const { computePosition: computePosition2, autoUpdate: autoUpdate2, offset: offset2, shift: shift2, flip: flip2, arrow: arrow2, size, autoPlacement, hide, inline } = get_store_value(storePopup);
  const popupState = {
    open: false,
    autoUpdateCleanup: () => {
    }
  };
  const focusableAllowedList = ':is(a[href], button, input, textarea, select, details, [tabindex]):not([tabindex="-1"])';
  let focusablePopupElements;
  const documentationLink = "https://www.skeleton.dev/utilities/popups";
  let elemPopup;
  let elemArrow;
  function setDomElements() {
    elemPopup = document.querySelector(`[data-popup="${args.target}"]`) ?? document.createElement("div");
    elemArrow = elemPopup.querySelector(`.arrow`) ?? document.createElement("div");
  }
  setDomElements();
  function render() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (!elemPopup)
      throw new Error(`The data-popup="${args.target}" element was not found. ${documentationLink}`);
    if (!computePosition2)
      throw new Error(`Floating UI 'computePosition' not found for data-popup="${args.target}". ${documentationLink}`);
    if (!offset2)
      throw new Error(`Floating UI 'offset' not found for data-popup="${args.target}". ${documentationLink}`);
    if (!shift2)
      throw new Error(`Floating UI 'shift' not found for data-popup="${args.target}". ${documentationLink}`);
    if (!flip2)
      throw new Error(`Floating UI 'flip' not found for data-popup="${args.target}". ${documentationLink}`);
    if (!arrow2)
      throw new Error(`Floating UI 'arrow' not found for data-popup="${args.target}". ${documentationLink}`);
    const optionalMiddleware = [];
    if (size)
      optionalMiddleware.push(size((_a = args.middleware) == null ? void 0 : _a.size));
    if (autoPlacement)
      optionalMiddleware.push(autoPlacement((_b = args.middleware) == null ? void 0 : _b.autoPlacement));
    if (hide)
      optionalMiddleware.push(hide((_c = args.middleware) == null ? void 0 : _c.hide));
    if (inline)
      optionalMiddleware.push(inline((_d = args.middleware) == null ? void 0 : _d.inline));
    computePosition2(triggerNode, elemPopup, {
      placement: args.placement ?? "bottom",
      // Middleware - NOTE: the order matters:
      // https://floating-ui.com/docs/middleware#ordering
      middleware: [
        // https://floating-ui.com/docs/offset
        offset2(((_e = args.middleware) == null ? void 0 : _e.offset) ?? 8),
        // https://floating-ui.com/docs/shift
        shift2(((_f = args.middleware) == null ? void 0 : _f.shift) ?? { padding: 8 }),
        // https://floating-ui.com/docs/flip
        flip2((_g = args.middleware) == null ? void 0 : _g.flip),
        // https://floating-ui.com/docs/arrow
        arrow2(((_h = args.middleware) == null ? void 0 : _h.arrow) ?? { element: elemArrow || null }),
        // Implement optional middleware
        ...optionalMiddleware
      ]
    }).then(({ x, y, placement, middlewareData }) => {
      Object.assign(elemPopup.style, {
        left: `${x}px`,
        top: `${y}px`
      });
      if (elemArrow) {
        const { x: arrowX, y: arrowY } = middlewareData.arrow;
        const staticSide = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[placement.split("-")[0]];
        Object.assign(elemArrow.style, {
          left: arrowX != null ? `${arrowX}px` : "",
          top: arrowY != null ? `${arrowY}px` : "",
          right: "",
          bottom: "",
          [staticSide]: "-4px"
        });
      }
    });
  }
  function open() {
    if (!elemPopup)
      return;
    popupState.open = true;
    if (args.state)
      args.state({ state: popupState.open });
    render();
    elemPopup.style.display = "block";
    elemPopup.style.opacity = "1";
    elemPopup.style.pointerEvents = "auto";
    elemPopup.removeAttribute("inert");
    popupState.autoUpdateCleanup = autoUpdate2(triggerNode, elemPopup, render);
    focusablePopupElements = Array.from(elemPopup == null ? void 0 : elemPopup.querySelectorAll(focusableAllowedList));
  }
  function close(callback) {
    if (!elemPopup)
      return;
    const cssTransitionDuration = parseFloat(window.getComputedStyle(elemPopup).transitionDuration.replace("s", "")) * 1e3;
    setTimeout(() => {
      popupState.open = false;
      if (args.state)
        args.state({ state: popupState.open });
      elemPopup.style.opacity = "0";
      elemPopup.setAttribute("inert", "");
      if (popupState.autoUpdateCleanup)
        popupState.autoUpdateCleanup();
      if (callback)
        callback();
    }, cssTransitionDuration);
  }
  function toggle() {
    popupState.open === false ? open() : close();
  }
  function onWindowClick(event) {
    if (popupState.open === false)
      return;
    if (triggerNode.contains(event.target))
      return;
    if (elemPopup && elemPopup.contains(event.target) === false) {
      close();
      return;
    }
    const closeQueryString = args.closeQuery === void 0 ? "a[href], button" : args.closeQuery;
    if (closeQueryString === "")
      return;
    const closableMenuElements = elemPopup == null ? void 0 : elemPopup.querySelectorAll(closeQueryString);
    closableMenuElements == null ? void 0 : closableMenuElements.forEach((elem) => {
      if (elem.contains(event.target))
        close();
    });
  }
  const onWindowKeyDown = (event) => {
    if (popupState.open === false)
      return;
    const key = event.key;
    if (key === "Escape") {
      event.preventDefault();
      triggerNode.focus();
      close();
      return;
    }
    focusablePopupElements = Array.from(elemPopup == null ? void 0 : elemPopup.querySelectorAll(focusableAllowedList));
    const triggerMenuFocused = popupState.open && document.activeElement === triggerNode;
    if (triggerMenuFocused && (key === "ArrowDown" || key === "Tab") && focusableAllowedList.length > 0 && focusablePopupElements.length > 0) {
      event.preventDefault();
      focusablePopupElements[0].focus();
    }
  };
  switch (args.event) {
    case "click":
      triggerNode.addEventListener("click", toggle, true);
      window.addEventListener("click", onWindowClick, true);
      break;
    case "hover":
      triggerNode.addEventListener("mouseover", open, true);
      triggerNode.addEventListener("mouseleave", () => close(), true);
      break;
    case "focus-blur":
      triggerNode.addEventListener("focus", toggle, true);
      triggerNode.addEventListener("blur", () => close(), true);
      break;
    case "focus-click":
      triggerNode.addEventListener("focus", open, true);
      window.addEventListener("click", onWindowClick, true);
      break;
    default:
      throw new Error(`Event value of '${args.event}' is not supported. ${documentationLink}`);
  }
  window.addEventListener("keydown", onWindowKeyDown, true);
  render();
  return {
    update(newArgs) {
      close(() => {
        args = newArgs;
        render();
        setDomElements();
      });
    },
    destroy() {
      triggerNode.removeEventListener("click", toggle, true);
      triggerNode.removeEventListener("mouseover", open, true);
      triggerNode.removeEventListener("mouseleave", () => close(), true);
      triggerNode.removeEventListener("focus", toggle, true);
      triggerNode.removeEventListener("focus", open, true);
      triggerNode.removeEventListener("blur", () => close(), true);
      window.removeEventListener("click", onWindowClick, true);
      window.removeEventListener("keydown", onWindowKeyDown, true);
    }
  };
}
const DRAWER_STORE_KEY = "drawerStore";
function getDrawerStore() {
  const drawerStore = getContext(DRAWER_STORE_KEY);
  if (!drawerStore)
    throw new Error("drawerStore is not initialized. Please ensure that `initializeStores()` is invoked in the root layout file of this app!");
  return drawerStore;
}
function initializeDrawerStore() {
  const drawerStore = drawerService();
  return setContext(DRAWER_STORE_KEY, drawerStore);
}
function drawerService() {
  const { subscribe, set, update } = writable({});
  return {
    subscribe,
    set,
    update,
    /** Open the drawer. */
    open: (newSettings) => update(() => {
      return { open: true, ...newSettings };
    }),
    /** Close the drawer. */
    close: () => update((d) => {
      d.open = false;
      return d;
    })
  };
}
const toastDefaults = { message: "Missing Toast Message", autohide: true, timeout: 5e3 };
const TOAST_STORE_KEY = "toastStore";
function initializeToastStore() {
  const toastStore = toastService();
  return setContext(TOAST_STORE_KEY, toastStore);
}
function randomUUID() {
  const random = Math.random();
  return Number(random).toString(32);
}
function toastService() {
  const { subscribe, set, update } = writable([]);
  const close = (id) => update((tStore) => {
    if (tStore.length > 0) {
      const index = tStore.findIndex((t) => t.id === id);
      const selectedToast = tStore[index];
      if (selectedToast) {
        if (selectedToast.callback)
          selectedToast.callback({ id, status: "closed" });
        if (selectedToast.timeoutId)
          clearTimeout(selectedToast.timeoutId);
        tStore.splice(index, 1);
      }
    }
    return tStore;
  });
  function handleAutoHide(toast) {
    if (toast.autohide === true) {
      return setTimeout(() => {
        close(toast.id);
      }, toast.timeout);
    }
  }
  return {
    subscribe,
    close,
    /** Add a new toast to the queue. */
    trigger: (toast) => {
      const id = randomUUID();
      update((tStore) => {
        if (toast && toast.callback)
          toast.callback({ id, status: "queued" });
        if (toast.hideDismiss)
          toast.autohide = true;
        const tMerged = { ...toastDefaults, ...toast, id };
        tMerged.timeoutId = handleAutoHide(tMerged);
        tStore.push(tMerged);
        return tStore;
      });
      return id;
    },
    /** Remain visible on hover */
    freeze: (index) => update((tStore) => {
      if (tStore.length > 0)
        clearTimeout(tStore[index].timeoutId);
      return tStore;
    }),
    /** Cancel remain visible on leave */
    unfreeze: (index) => update((tStore) => {
      if (tStore.length > 0)
        tStore[index].timeoutId = handleAutoHide(tStore[index]);
      return tStore;
    }),
    /** Remove all toasts from queue */
    clear: () => set([])
  };
}
function initializeStores() {
  initializeModalStore();
  initializeToastStore();
  initializeDrawerStore();
}
function focusTrap(node, enabled) {
  const elemWhitelist = 'a[href]:not([tabindex="-1"]), button:not([tabindex="-1"]), input:not([tabindex="-1"]), textarea:not([tabindex="-1"]), select:not([tabindex="-1"]), details:not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])';
  let elemFirst;
  let elemLast;
  function onFirstElemKeydown(e) {
    if (e.shiftKey && e.code === "Tab") {
      e.preventDefault();
      elemLast.focus();
    }
  }
  function onLastElemKeydown(e) {
    if (!e.shiftKey && e.code === "Tab") {
      e.preventDefault();
      elemFirst.focus();
    }
  }
  const sortByTabIndex = (focusableElems) => {
    return focusableElems.filter((elem) => elem.tabIndex >= 0).sort((a, b) => {
      if (a.tabIndex === 0 && b.tabIndex > 0)
        return 1;
      else if (a.tabIndex > 0 && b.tabIndex === 0)
        return -1;
      else
        return a.tabIndex - b.tabIndex;
    });
  };
  const getFocusTrapTarget = (elemFirst2) => {
    const focusindexElements = [...node.querySelectorAll("[data-focusindex]")];
    if (!focusindexElements || focusindexElements.length === 0)
      return elemFirst2;
    return focusindexElements.sort((a, b) => {
      return +a.dataset.focusindex - +b.dataset.focusindex;
    })[0] || elemFirst2;
  };
  const onScanElements = (fromObserver) => {
    if (enabled === false)
      return;
    const focusableElems = sortByTabIndex(Array.from(node.querySelectorAll(elemWhitelist)));
    if (focusableElems.length) {
      elemFirst = focusableElems[0];
      elemLast = focusableElems[focusableElems.length - 1];
      if (!fromObserver)
        getFocusTrapTarget(elemFirst).focus();
      elemFirst.addEventListener("keydown", onFirstElemKeydown);
      elemLast.addEventListener("keydown", onLastElemKeydown);
    }
  };
  onScanElements(false);
  function onCleanUp() {
    if (elemFirst)
      elemFirst.removeEventListener("keydown", onFirstElemKeydown);
    if (elemLast)
      elemLast.removeEventListener("keydown", onLastElemKeydown);
  }
  const onObservationChange = (mutationRecords, observer2) => {
    if (mutationRecords.length) {
      onCleanUp();
      onScanElements(true);
    }
    return observer2;
  };
  const observer = new MutationObserver(onObservationChange);
  observer.observe(node, { childList: true, subtree: true });
  return {
    update(newArgs) {
      enabled = newArgs;
      newArgs ? onScanElements(false) : onCleanUp();
    },
    destroy() {
      onCleanUp();
      observer.disconnect();
    }
  };
}
function cubicIn(t) {
  return t * t * t;
}
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
function fly(node, { delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0 } = {}) {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const transform = style.transform === "none" ? "" : style.transform;
  const od = target_opacity * (1 - opacity);
  const [xValue, xUnit] = split_css_unit(x);
  const [yValue, yUnit] = split_css_unit(y);
  return {
    delay,
    duration,
    easing,
    css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * xValue}${xUnit}, ${(1 - t) * yValue}${yUnit});
			opacity: ${target_opacity - od * u}`
  };
}
function dynamicTransition(node, dynParams) {
  const { transition, params, enabled } = dynParams;
  if (enabled)
    return transition(node, params);
  if ("duration" in params)
    return transition(node, { duration: 0 });
  return { duration: 0 };
}
const get_headline_slot_changes = (dirty) => ({});
const get_headline_slot_context = (ctx) => ({});
const get_trail_slot_changes = (dirty) => ({});
const get_trail_slot_context = (ctx) => ({});
const get_lead_slot_changes = (dirty) => ({});
const get_lead_slot_context = (ctx) => ({});
function create_if_block_2$3(ctx) {
  let div;
  let div_class_value;
  let current;
  const lead_slot_template = (
    /*#slots*/
    ctx[22].lead
  );
  const lead_slot = create_slot(
    lead_slot_template,
    ctx,
    /*$$scope*/
    ctx[21],
    get_lead_slot_context
  );
  return {
    c() {
      div = element("div");
      if (lead_slot)
        lead_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (lead_slot)
        lead_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", div_class_value = "app-bar-slot-lead " + /*classesSlotLead*/
      ctx[4]);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (lead_slot) {
        lead_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (lead_slot) {
        if (lead_slot.p && (!current || dirty & /*$$scope*/
        2097152)) {
          update_slot_base(
            lead_slot,
            lead_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[21],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[21]
            ) : get_slot_changes(
              lead_slot_template,
              /*$$scope*/
              ctx2[21],
              dirty,
              get_lead_slot_changes
            ),
            get_lead_slot_context
          );
        }
      }
      if (!current || dirty & /*classesSlotLead*/
      16 && div_class_value !== (div_class_value = "app-bar-slot-lead " + /*classesSlotLead*/
      ctx2[4])) {
        attr(div, "class", div_class_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(lead_slot, local);
      current = true;
    },
    o(local) {
      transition_out(lead_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      if (lead_slot)
        lead_slot.d(detaching);
    }
  };
}
function create_if_block_1$3(ctx) {
  let div;
  let div_class_value;
  let current;
  const trail_slot_template = (
    /*#slots*/
    ctx[22].trail
  );
  const trail_slot = create_slot(
    trail_slot_template,
    ctx,
    /*$$scope*/
    ctx[21],
    get_trail_slot_context
  );
  return {
    c() {
      div = element("div");
      if (trail_slot)
        trail_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (trail_slot)
        trail_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", div_class_value = "app-bar-slot-trail " + /*classesSlotTrail*/
      ctx[2]);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (trail_slot) {
        trail_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (trail_slot) {
        if (trail_slot.p && (!current || dirty & /*$$scope*/
        2097152)) {
          update_slot_base(
            trail_slot,
            trail_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[21],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[21]
            ) : get_slot_changes(
              trail_slot_template,
              /*$$scope*/
              ctx2[21],
              dirty,
              get_trail_slot_changes
            ),
            get_trail_slot_context
          );
        }
      }
      if (!current || dirty & /*classesSlotTrail*/
      4 && div_class_value !== (div_class_value = "app-bar-slot-trail " + /*classesSlotTrail*/
      ctx2[2])) {
        attr(div, "class", div_class_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(trail_slot, local);
      current = true;
    },
    o(local) {
      transition_out(trail_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      if (trail_slot)
        trail_slot.d(detaching);
    }
  };
}
function create_if_block$7(ctx) {
  let div;
  let div_class_value;
  let current;
  const headline_slot_template = (
    /*#slots*/
    ctx[22].headline
  );
  const headline_slot = create_slot(
    headline_slot_template,
    ctx,
    /*$$scope*/
    ctx[21],
    get_headline_slot_context
  );
  return {
    c() {
      div = element("div");
      if (headline_slot)
        headline_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (headline_slot)
        headline_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", div_class_value = "app-bar-row-headline " + /*classesRowHeadline*/
      ctx[5]);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (headline_slot) {
        headline_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (headline_slot) {
        if (headline_slot.p && (!current || dirty & /*$$scope*/
        2097152)) {
          update_slot_base(
            headline_slot,
            headline_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[21],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[21]
            ) : get_slot_changes(
              headline_slot_template,
              /*$$scope*/
              ctx2[21],
              dirty,
              get_headline_slot_changes
            ),
            get_headline_slot_context
          );
        }
      }
      if (!current || dirty & /*classesRowHeadline*/
      32 && div_class_value !== (div_class_value = "app-bar-row-headline " + /*classesRowHeadline*/
      ctx2[5])) {
        attr(div, "class", div_class_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(headline_slot, local);
      current = true;
    },
    o(local) {
      transition_out(headline_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      if (headline_slot)
        headline_slot.d(detaching);
    }
  };
}
function create_fragment$c(ctx) {
  let div2;
  let div1;
  let t0;
  let div0;
  let div0_class_value;
  let t1;
  let div1_class_value;
  let t2;
  let div2_class_value;
  let current;
  let if_block0 = (
    /*$$slots*/
    ctx[8].lead && create_if_block_2$3(ctx)
  );
  const default_slot_template = (
    /*#slots*/
    ctx[22].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[21],
    null
  );
  let if_block1 = (
    /*$$slots*/
    ctx[8].trail && create_if_block_1$3(ctx)
  );
  let if_block2 = (
    /*$$slots*/
    ctx[8].headline && create_if_block$7(ctx)
  );
  return {
    c() {
      div2 = element("div");
      div1 = element("div");
      if (if_block0)
        if_block0.c();
      t0 = space();
      div0 = element("div");
      if (default_slot)
        default_slot.c();
      t1 = space();
      if (if_block1)
        if_block1.c();
      t2 = space();
      if (if_block2)
        if_block2.c();
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", {
        class: true,
        "data-testid": true,
        role: true,
        "aria-label": true,
        "aria-labelledby": true
      });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      if (if_block0)
        if_block0.l(div1_nodes);
      t0 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if (default_slot)
        default_slot.l(div0_nodes);
      div0_nodes.forEach(detach);
      t1 = claim_space(div1_nodes);
      if (if_block1)
        if_block1.l(div1_nodes);
      div1_nodes.forEach(detach);
      t2 = claim_space(div2_nodes);
      if (if_block2)
        if_block2.l(div2_nodes);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", div0_class_value = "app-bar-slot-default " + /*classesSlotDefault*/
      ctx[3]);
      attr(div1, "class", div1_class_value = "app-bar-row-main " + /*classesRowMain*/
      ctx[6]);
      attr(div2, "class", div2_class_value = "app-bar " + /*classesBase*/
      ctx[7]);
      attr(div2, "data-testid", "app-bar");
      attr(div2, "role", "toolbar");
      attr(
        div2,
        "aria-label",
        /*label*/
        ctx[0]
      );
      attr(
        div2,
        "aria-labelledby",
        /*labelledby*/
        ctx[1]
      );
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div1);
      if (if_block0)
        if_block0.m(div1, null);
      append_hydration(div1, t0);
      append_hydration(div1, div0);
      if (default_slot) {
        default_slot.m(div0, null);
      }
      append_hydration(div1, t1);
      if (if_block1)
        if_block1.m(div1, null);
      append_hydration(div2, t2);
      if (if_block2)
        if_block2.m(div2, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (
        /*$$slots*/
        ctx2[8].lead
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & /*$$slots*/
          256) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_2$3(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div1, t0);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        2097152)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[21],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[21]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[21],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty & /*classesSlotDefault*/
      8 && div0_class_value !== (div0_class_value = "app-bar-slot-default " + /*classesSlotDefault*/
      ctx2[3])) {
        attr(div0, "class", div0_class_value);
      }
      if (
        /*$$slots*/
        ctx2[8].trail
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*$$slots*/
          256) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_1$3(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div1, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      if (!current || dirty & /*classesRowMain*/
      64 && div1_class_value !== (div1_class_value = "app-bar-row-main " + /*classesRowMain*/
      ctx2[6])) {
        attr(div1, "class", div1_class_value);
      }
      if (
        /*$$slots*/
        ctx2[8].headline
      ) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
          if (dirty & /*$$slots*/
          256) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block$7(ctx2);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(div2, null);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, () => {
          if_block2 = null;
        });
        check_outros();
      }
      if (!current || dirty & /*classesBase*/
      128 && div2_class_value !== (div2_class_value = "app-bar " + /*classesBase*/
      ctx2[7])) {
        attr(div2, "class", div2_class_value);
      }
      if (!current || dirty & /*label*/
      1) {
        attr(
          div2,
          "aria-label",
          /*label*/
          ctx2[0]
        );
      }
      if (!current || dirty & /*labelledby*/
      2) {
        attr(
          div2,
          "aria-labelledby",
          /*labelledby*/
          ctx2[1]
        );
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(default_slot, local);
      transition_in(if_block1);
      transition_in(if_block2);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(default_slot, local);
      transition_out(if_block1);
      transition_out(if_block2);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div2);
      }
      if (if_block0)
        if_block0.d();
      if (default_slot)
        default_slot.d(detaching);
      if (if_block1)
        if_block1.d();
      if (if_block2)
        if_block2.d();
    }
  };
}
const cBase$1 = "flex flex-col";
const cRowMain = "grid items-center";
const cRowHeadline = "";
const cSlotLead = "flex-none flex justify-between items-center";
const cSlotDefault = "flex-auto";
const cSlotTrail = "flex-none flex items-center space-x-4";
function instance$a($$self, $$props, $$invalidate) {
  let classesBase;
  let classesRowMain;
  let classesRowHeadline;
  let classesSlotLead;
  let classesSlotDefault;
  let classesSlotTrail;
  let { $$slots: slots = {}, $$scope } = $$props;
  const $$slots = compute_slots(slots);
  let { background = "bg-surface-100-800-token" } = $$props;
  let { border = "" } = $$props;
  let { padding = "p-4" } = $$props;
  let { shadow = "" } = $$props;
  let { spacing = "space-y-4" } = $$props;
  let { gridColumns = "grid-cols-[auto_1fr_auto]" } = $$props;
  let { gap = "gap-4" } = $$props;
  let { regionRowMain = "" } = $$props;
  let { regionRowHeadline = "" } = $$props;
  let { slotLead = "" } = $$props;
  let { slotDefault = "" } = $$props;
  let { slotTrail = "" } = $$props;
  let { label = "" } = $$props;
  let { labelledby = "" } = $$props;
  $$self.$$set = ($$new_props) => {
    $$invalidate(23, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("background" in $$new_props)
      $$invalidate(9, background = $$new_props.background);
    if ("border" in $$new_props)
      $$invalidate(10, border = $$new_props.border);
    if ("padding" in $$new_props)
      $$invalidate(11, padding = $$new_props.padding);
    if ("shadow" in $$new_props)
      $$invalidate(12, shadow = $$new_props.shadow);
    if ("spacing" in $$new_props)
      $$invalidate(13, spacing = $$new_props.spacing);
    if ("gridColumns" in $$new_props)
      $$invalidate(14, gridColumns = $$new_props.gridColumns);
    if ("gap" in $$new_props)
      $$invalidate(15, gap = $$new_props.gap);
    if ("regionRowMain" in $$new_props)
      $$invalidate(16, regionRowMain = $$new_props.regionRowMain);
    if ("regionRowHeadline" in $$new_props)
      $$invalidate(17, regionRowHeadline = $$new_props.regionRowHeadline);
    if ("slotLead" in $$new_props)
      $$invalidate(18, slotLead = $$new_props.slotLead);
    if ("slotDefault" in $$new_props)
      $$invalidate(19, slotDefault = $$new_props.slotDefault);
    if ("slotTrail" in $$new_props)
      $$invalidate(20, slotTrail = $$new_props.slotTrail);
    if ("label" in $$new_props)
      $$invalidate(0, label = $$new_props.label);
    if ("labelledby" in $$new_props)
      $$invalidate(1, labelledby = $$new_props.labelledby);
    if ("$$scope" in $$new_props)
      $$invalidate(21, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    $$invalidate(7, classesBase = `${cBase$1} ${background} ${border} ${spacing} ${padding} ${shadow} ${$$props.class ?? ""}`);
    if ($$self.$$.dirty & /*gridColumns, gap, regionRowMain*/
    114688) {
      $$invalidate(6, classesRowMain = `${cRowMain} ${gridColumns} ${gap} ${regionRowMain}`);
    }
    if ($$self.$$.dirty & /*regionRowHeadline*/
    131072) {
      $$invalidate(5, classesRowHeadline = `${cRowHeadline} ${regionRowHeadline}`);
    }
    if ($$self.$$.dirty & /*slotLead*/
    262144) {
      $$invalidate(4, classesSlotLead = `${cSlotLead} ${slotLead}`);
    }
    if ($$self.$$.dirty & /*slotDefault*/
    524288) {
      $$invalidate(3, classesSlotDefault = `${cSlotDefault} ${slotDefault}`);
    }
    if ($$self.$$.dirty & /*slotTrail*/
    1048576) {
      $$invalidate(2, classesSlotTrail = `${cSlotTrail} ${slotTrail}`);
    }
  };
  $$props = exclude_internal_props($$props);
  return [
    label,
    labelledby,
    classesSlotTrail,
    classesSlotDefault,
    classesSlotLead,
    classesRowHeadline,
    classesRowMain,
    classesBase,
    $$slots,
    background,
    border,
    padding,
    shadow,
    spacing,
    gridColumns,
    gap,
    regionRowMain,
    regionRowHeadline,
    slotLead,
    slotDefault,
    slotTrail,
    $$scope,
    slots
  ];
}
class AppBar extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$a, create_fragment$c, safe_not_equal, {
      background: 9,
      border: 10,
      padding: 11,
      shadow: 12,
      spacing: 13,
      gridColumns: 14,
      gap: 15,
      regionRowMain: 16,
      regionRowHeadline: 17,
      slotLead: 18,
      slotDefault: 19,
      slotTrail: 20,
      label: 0,
      labelledby: 1
    });
  }
}
const get_footer_slot_changes = (dirty) => ({});
const get_footer_slot_context = (ctx) => ({});
const get_sidebarRight_slot_changes = (dirty) => ({});
const get_sidebarRight_slot_context = (ctx) => ({});
const get_pageFooter_slot_changes = (dirty) => ({});
const get_pageFooter_slot_context = (ctx) => ({});
const get_pageHeader_slot_changes = (dirty) => ({});
const get_pageHeader_slot_context = (ctx) => ({});
const get_sidebarLeft_slot_changes = (dirty) => ({});
const get_sidebarLeft_slot_context = (ctx) => ({});
const get_header_slot_changes = (dirty) => ({});
const get_header_slot_context = (ctx) => ({});
function create_if_block_5$2(ctx) {
  let header;
  let header_class_value;
  let current;
  const header_slot_template = (
    /*#slots*/
    ctx[19].header
  );
  const header_slot = create_slot(
    header_slot_template,
    ctx,
    /*$$scope*/
    ctx[18],
    get_header_slot_context
  );
  return {
    c() {
      header = element("header");
      if (header_slot)
        header_slot.c();
      this.h();
    },
    l(nodes) {
      header = claim_element(nodes, "HEADER", { id: true, class: true });
      var header_nodes = children(header);
      if (header_slot)
        header_slot.l(header_nodes);
      header_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(header, "id", "shell-header");
      attr(header, "class", header_class_value = "flex-none " + /*classesHeader*/
      ctx[8]);
    },
    m(target, anchor) {
      insert_hydration(target, header, anchor);
      if (header_slot) {
        header_slot.m(header, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (header_slot) {
        if (header_slot.p && (!current || dirty & /*$$scope*/
        262144)) {
          update_slot_base(
            header_slot,
            header_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[18],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[18]
            ) : get_slot_changes(
              header_slot_template,
              /*$$scope*/
              ctx2[18],
              dirty,
              get_header_slot_changes
            ),
            get_header_slot_context
          );
        }
      }
      if (!current || dirty & /*classesHeader*/
      256 && header_class_value !== (header_class_value = "flex-none " + /*classesHeader*/
      ctx2[8])) {
        attr(header, "class", header_class_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(header_slot, local);
      current = true;
    },
    o(local) {
      transition_out(header_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(header);
      }
      if (header_slot)
        header_slot.d(detaching);
    }
  };
}
function create_if_block_4$2(ctx) {
  let aside;
  let current;
  const sidebarLeft_slot_template = (
    /*#slots*/
    ctx[19].sidebarLeft
  );
  const sidebarLeft_slot = create_slot(
    sidebarLeft_slot_template,
    ctx,
    /*$$scope*/
    ctx[18],
    get_sidebarLeft_slot_context
  );
  return {
    c() {
      aside = element("aside");
      if (sidebarLeft_slot)
        sidebarLeft_slot.c();
      this.h();
    },
    l(nodes) {
      aside = claim_element(nodes, "ASIDE", { id: true, class: true });
      var aside_nodes = children(aside);
      if (sidebarLeft_slot)
        sidebarLeft_slot.l(aside_nodes);
      aside_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(aside, "id", "sidebar-left");
      attr(
        aside,
        "class",
        /*classesSidebarLeft*/
        ctx[7]
      );
    },
    m(target, anchor) {
      insert_hydration(target, aside, anchor);
      if (sidebarLeft_slot) {
        sidebarLeft_slot.m(aside, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (sidebarLeft_slot) {
        if (sidebarLeft_slot.p && (!current || dirty & /*$$scope*/
        262144)) {
          update_slot_base(
            sidebarLeft_slot,
            sidebarLeft_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[18],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[18]
            ) : get_slot_changes(
              sidebarLeft_slot_template,
              /*$$scope*/
              ctx2[18],
              dirty,
              get_sidebarLeft_slot_changes
            ),
            get_sidebarLeft_slot_context
          );
        }
      }
      if (!current || dirty & /*classesSidebarLeft*/
      128) {
        attr(
          aside,
          "class",
          /*classesSidebarLeft*/
          ctx2[7]
        );
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(sidebarLeft_slot, local);
      current = true;
    },
    o(local) {
      transition_out(sidebarLeft_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(aside);
      }
      if (sidebarLeft_slot)
        sidebarLeft_slot.d(detaching);
    }
  };
}
function create_if_block_3$2(ctx) {
  let header;
  let header_class_value;
  let current;
  const pageHeader_slot_template = (
    /*#slots*/
    ctx[19].pageHeader
  );
  const pageHeader_slot = create_slot(
    pageHeader_slot_template,
    ctx,
    /*$$scope*/
    ctx[18],
    get_pageHeader_slot_context
  );
  const pageHeader_slot_or_fallback = pageHeader_slot || fallback_block_1();
  return {
    c() {
      header = element("header");
      if (pageHeader_slot_or_fallback)
        pageHeader_slot_or_fallback.c();
      this.h();
    },
    l(nodes) {
      header = claim_element(nodes, "HEADER", { id: true, class: true });
      var header_nodes = children(header);
      if (pageHeader_slot_or_fallback)
        pageHeader_slot_or_fallback.l(header_nodes);
      header_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(header, "id", "page-header");
      attr(header, "class", header_class_value = "flex-none " + /*classesPageHeader*/
      ctx[5]);
    },
    m(target, anchor) {
      insert_hydration(target, header, anchor);
      if (pageHeader_slot_or_fallback) {
        pageHeader_slot_or_fallback.m(header, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (pageHeader_slot) {
        if (pageHeader_slot.p && (!current || dirty & /*$$scope*/
        262144)) {
          update_slot_base(
            pageHeader_slot,
            pageHeader_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[18],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[18]
            ) : get_slot_changes(
              pageHeader_slot_template,
              /*$$scope*/
              ctx2[18],
              dirty,
              get_pageHeader_slot_changes
            ),
            get_pageHeader_slot_context
          );
        }
      }
      if (!current || dirty & /*classesPageHeader*/
      32 && header_class_value !== (header_class_value = "flex-none " + /*classesPageHeader*/
      ctx2[5])) {
        attr(header, "class", header_class_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(pageHeader_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(pageHeader_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(header);
      }
      if (pageHeader_slot_or_fallback)
        pageHeader_slot_or_fallback.d(detaching);
    }
  };
}
function fallback_block_1(ctx) {
  let t;
  return {
    c() {
      t = text("(slot:header)");
    },
    l(nodes) {
      t = claim_text(nodes, "(slot:header)");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching) {
        detach(t);
      }
    }
  };
}
function create_if_block_2$2(ctx) {
  let footer;
  let footer_class_value;
  let current;
  const pageFooter_slot_template = (
    /*#slots*/
    ctx[19].pageFooter
  );
  const pageFooter_slot = create_slot(
    pageFooter_slot_template,
    ctx,
    /*$$scope*/
    ctx[18],
    get_pageFooter_slot_context
  );
  const pageFooter_slot_or_fallback = pageFooter_slot || fallback_block();
  return {
    c() {
      footer = element("footer");
      if (pageFooter_slot_or_fallback)
        pageFooter_slot_or_fallback.c();
      this.h();
    },
    l(nodes) {
      footer = claim_element(nodes, "FOOTER", { id: true, class: true });
      var footer_nodes = children(footer);
      if (pageFooter_slot_or_fallback)
        pageFooter_slot_or_fallback.l(footer_nodes);
      footer_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(footer, "id", "page-footer");
      attr(footer, "class", footer_class_value = "flex-none " + /*classesPageFooter*/
      ctx[3]);
    },
    m(target, anchor) {
      insert_hydration(target, footer, anchor);
      if (pageFooter_slot_or_fallback) {
        pageFooter_slot_or_fallback.m(footer, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (pageFooter_slot) {
        if (pageFooter_slot.p && (!current || dirty & /*$$scope*/
        262144)) {
          update_slot_base(
            pageFooter_slot,
            pageFooter_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[18],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[18]
            ) : get_slot_changes(
              pageFooter_slot_template,
              /*$$scope*/
              ctx2[18],
              dirty,
              get_pageFooter_slot_changes
            ),
            get_pageFooter_slot_context
          );
        }
      }
      if (!current || dirty & /*classesPageFooter*/
      8 && footer_class_value !== (footer_class_value = "flex-none " + /*classesPageFooter*/
      ctx2[3])) {
        attr(footer, "class", footer_class_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(pageFooter_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(pageFooter_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(footer);
      }
      if (pageFooter_slot_or_fallback)
        pageFooter_slot_or_fallback.d(detaching);
    }
  };
}
function fallback_block(ctx) {
  let t;
  return {
    c() {
      t = text("(slot:footer)");
    },
    l(nodes) {
      t = claim_text(nodes, "(slot:footer)");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching) {
        detach(t);
      }
    }
  };
}
function create_if_block_1$2(ctx) {
  let aside;
  let current;
  const sidebarRight_slot_template = (
    /*#slots*/
    ctx[19].sidebarRight
  );
  const sidebarRight_slot = create_slot(
    sidebarRight_slot_template,
    ctx,
    /*$$scope*/
    ctx[18],
    get_sidebarRight_slot_context
  );
  return {
    c() {
      aside = element("aside");
      if (sidebarRight_slot)
        sidebarRight_slot.c();
      this.h();
    },
    l(nodes) {
      aside = claim_element(nodes, "ASIDE", { id: true, class: true });
      var aside_nodes = children(aside);
      if (sidebarRight_slot)
        sidebarRight_slot.l(aside_nodes);
      aside_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(aside, "id", "sidebar-right");
      attr(
        aside,
        "class",
        /*classesSidebarRight*/
        ctx[6]
      );
    },
    m(target, anchor) {
      insert_hydration(target, aside, anchor);
      if (sidebarRight_slot) {
        sidebarRight_slot.m(aside, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (sidebarRight_slot) {
        if (sidebarRight_slot.p && (!current || dirty & /*$$scope*/
        262144)) {
          update_slot_base(
            sidebarRight_slot,
            sidebarRight_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[18],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[18]
            ) : get_slot_changes(
              sidebarRight_slot_template,
              /*$$scope*/
              ctx2[18],
              dirty,
              get_sidebarRight_slot_changes
            ),
            get_sidebarRight_slot_context
          );
        }
      }
      if (!current || dirty & /*classesSidebarRight*/
      64) {
        attr(
          aside,
          "class",
          /*classesSidebarRight*/
          ctx2[6]
        );
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(sidebarRight_slot, local);
      current = true;
    },
    o(local) {
      transition_out(sidebarRight_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(aside);
      }
      if (sidebarRight_slot)
        sidebarRight_slot.d(detaching);
    }
  };
}
function create_if_block$6(ctx) {
  let footer;
  let footer_class_value;
  let current;
  const footer_slot_template = (
    /*#slots*/
    ctx[19].footer
  );
  const footer_slot = create_slot(
    footer_slot_template,
    ctx,
    /*$$scope*/
    ctx[18],
    get_footer_slot_context
  );
  return {
    c() {
      footer = element("footer");
      if (footer_slot)
        footer_slot.c();
      this.h();
    },
    l(nodes) {
      footer = claim_element(nodes, "FOOTER", { id: true, class: true });
      var footer_nodes = children(footer);
      if (footer_slot)
        footer_slot.l(footer_nodes);
      footer_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(footer, "id", "shell-footer");
      attr(footer, "class", footer_class_value = "flex-none " + /*classesFooter*/
      ctx[2]);
    },
    m(target, anchor) {
      insert_hydration(target, footer, anchor);
      if (footer_slot) {
        footer_slot.m(footer, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (footer_slot) {
        if (footer_slot.p && (!current || dirty & /*$$scope*/
        262144)) {
          update_slot_base(
            footer_slot,
            footer_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[18],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[18]
            ) : get_slot_changes(
              footer_slot_template,
              /*$$scope*/
              ctx2[18],
              dirty,
              get_footer_slot_changes
            ),
            get_footer_slot_context
          );
        }
      }
      if (!current || dirty & /*classesFooter*/
      4 && footer_class_value !== (footer_class_value = "flex-none " + /*classesFooter*/
      ctx2[2])) {
        attr(footer, "class", footer_class_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(footer_slot, local);
      current = true;
    },
    o(local) {
      transition_out(footer_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(footer);
      }
      if (footer_slot)
        footer_slot.d(detaching);
    }
  };
}
function create_fragment$b(ctx) {
  let div2;
  let t0;
  let div1;
  let t1;
  let div0;
  let t2;
  let main;
  let main_class_value;
  let t3;
  let div0_class_value;
  let t4;
  let t5;
  let current;
  let mounted;
  let dispose;
  let if_block0 = (
    /*$$slots*/
    ctx[10].header && create_if_block_5$2(ctx)
  );
  let if_block1 = (
    /*$$slots*/
    ctx[10].sidebarLeft && create_if_block_4$2(ctx)
  );
  let if_block2 = (
    /*$$slots*/
    ctx[10].pageHeader && create_if_block_3$2(ctx)
  );
  const default_slot_template = (
    /*#slots*/
    ctx[19].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[18],
    null
  );
  let if_block3 = (
    /*$$slots*/
    ctx[10].pageFooter && create_if_block_2$2(ctx)
  );
  let if_block4 = (
    /*$$slots*/
    ctx[10].sidebarRight && create_if_block_1$2(ctx)
  );
  let if_block5 = (
    /*$$slots*/
    ctx[10].footer && create_if_block$6(ctx)
  );
  return {
    c() {
      div2 = element("div");
      if (if_block0)
        if_block0.c();
      t0 = space();
      div1 = element("div");
      if (if_block1)
        if_block1.c();
      t1 = space();
      div0 = element("div");
      if (if_block2)
        if_block2.c();
      t2 = space();
      main = element("main");
      if (default_slot)
        default_slot.c();
      t3 = space();
      if (if_block3)
        if_block3.c();
      t4 = space();
      if (if_block4)
        if_block4.c();
      t5 = space();
      if (if_block5)
        if_block5.c();
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", {
        id: true,
        class: true,
        "data-testid": true
      });
      var div2_nodes = children(div2);
      if (if_block0)
        if_block0.l(div2_nodes);
      t0 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      if (if_block1)
        if_block1.l(div1_nodes);
      t1 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { id: true, class: true });
      var div0_nodes = children(div0);
      if (if_block2)
        if_block2.l(div0_nodes);
      t2 = claim_space(div0_nodes);
      main = claim_element(div0_nodes, "MAIN", { id: true, class: true });
      var main_nodes = children(main);
      if (default_slot)
        default_slot.l(main_nodes);
      main_nodes.forEach(detach);
      t3 = claim_space(div0_nodes);
      if (if_block3)
        if_block3.l(div0_nodes);
      div0_nodes.forEach(detach);
      t4 = claim_space(div1_nodes);
      if (if_block4)
        if_block4.l(div1_nodes);
      div1_nodes.forEach(detach);
      t5 = claim_space(div2_nodes);
      if (if_block5)
        if_block5.l(div2_nodes);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(main, "id", "page-content");
      attr(main, "class", main_class_value = "flex-auto " + /*classesPageContent*/
      ctx[4]);
      attr(div0, "id", "page");
      attr(div0, "class", div0_class_value = /*regionPage*/
      ctx[1] + " " + cPage);
      set_style(
        div0,
        "scrollbar-gutter",
        /*scrollbarGutter*/
        ctx[0]
      );
      attr(div1, "class", "flex-auto " + cContentArea);
      attr(div2, "id", "appShell");
      attr(
        div2,
        "class",
        /*classesBase*/
        ctx[9]
      );
      attr(div2, "data-testid", "app-shell");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      if (if_block0)
        if_block0.m(div2, null);
      append_hydration(div2, t0);
      append_hydration(div2, div1);
      if (if_block1)
        if_block1.m(div1, null);
      append_hydration(div1, t1);
      append_hydration(div1, div0);
      if (if_block2)
        if_block2.m(div0, null);
      append_hydration(div0, t2);
      append_hydration(div0, main);
      if (default_slot) {
        default_slot.m(main, null);
      }
      append_hydration(div0, t3);
      if (if_block3)
        if_block3.m(div0, null);
      append_hydration(div1, t4);
      if (if_block4)
        if_block4.m(div1, null);
      append_hydration(div2, t5);
      if (if_block5)
        if_block5.m(div2, null);
      current = true;
      if (!mounted) {
        dispose = listen(
          div0,
          "scroll",
          /*scroll_handler*/
          ctx[20]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (
        /*$$slots*/
        ctx2[10].header
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & /*$$slots*/
          1024) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_5$2(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div2, t0);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (
        /*$$slots*/
        ctx2[10].sidebarLeft
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*$$slots*/
          1024) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_4$2(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div1, t1);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      if (
        /*$$slots*/
        ctx2[10].pageHeader
      ) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
          if (dirty & /*$$slots*/
          1024) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block_3$2(ctx2);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(div0, t2);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, () => {
          if_block2 = null;
        });
        check_outros();
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        262144)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[18],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[18]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[18],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty & /*classesPageContent*/
      16 && main_class_value !== (main_class_value = "flex-auto " + /*classesPageContent*/
      ctx2[4])) {
        attr(main, "class", main_class_value);
      }
      if (
        /*$$slots*/
        ctx2[10].pageFooter
      ) {
        if (if_block3) {
          if_block3.p(ctx2, dirty);
          if (dirty & /*$$slots*/
          1024) {
            transition_in(if_block3, 1);
          }
        } else {
          if_block3 = create_if_block_2$2(ctx2);
          if_block3.c();
          transition_in(if_block3, 1);
          if_block3.m(div0, null);
        }
      } else if (if_block3) {
        group_outros();
        transition_out(if_block3, 1, 1, () => {
          if_block3 = null;
        });
        check_outros();
      }
      if (!current || dirty & /*regionPage*/
      2 && div0_class_value !== (div0_class_value = /*regionPage*/
      ctx2[1] + " " + cPage)) {
        attr(div0, "class", div0_class_value);
      }
      if (dirty & /*scrollbarGutter*/
      1) {
        set_style(
          div0,
          "scrollbar-gutter",
          /*scrollbarGutter*/
          ctx2[0]
        );
      }
      if (
        /*$$slots*/
        ctx2[10].sidebarRight
      ) {
        if (if_block4) {
          if_block4.p(ctx2, dirty);
          if (dirty & /*$$slots*/
          1024) {
            transition_in(if_block4, 1);
          }
        } else {
          if_block4 = create_if_block_1$2(ctx2);
          if_block4.c();
          transition_in(if_block4, 1);
          if_block4.m(div1, null);
        }
      } else if (if_block4) {
        group_outros();
        transition_out(if_block4, 1, 1, () => {
          if_block4 = null;
        });
        check_outros();
      }
      if (
        /*$$slots*/
        ctx2[10].footer
      ) {
        if (if_block5) {
          if_block5.p(ctx2, dirty);
          if (dirty & /*$$slots*/
          1024) {
            transition_in(if_block5, 1);
          }
        } else {
          if_block5 = create_if_block$6(ctx2);
          if_block5.c();
          transition_in(if_block5, 1);
          if_block5.m(div2, null);
        }
      } else if (if_block5) {
        group_outros();
        transition_out(if_block5, 1, 1, () => {
          if_block5 = null;
        });
        check_outros();
      }
      if (!current || dirty & /*classesBase*/
      512) {
        attr(
          div2,
          "class",
          /*classesBase*/
          ctx2[9]
        );
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block1);
      transition_in(if_block2);
      transition_in(default_slot, local);
      transition_in(if_block3);
      transition_in(if_block4);
      transition_in(if_block5);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      transition_out(if_block2);
      transition_out(default_slot, local);
      transition_out(if_block3);
      transition_out(if_block4);
      transition_out(if_block5);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div2);
      }
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      if (if_block2)
        if_block2.d();
      if (default_slot)
        default_slot.d(detaching);
      if (if_block3)
        if_block3.d();
      if (if_block4)
        if_block4.d();
      if (if_block5)
        if_block5.d();
      mounted = false;
      dispose();
    }
  };
}
const cBaseAppShell = "w-full h-full flex flex-col overflow-hidden";
const cContentArea = "w-full h-full flex overflow-hidden";
const cPage = "flex-1 overflow-x-hidden flex flex-col";
const cSidebarLeft = "flex-none overflow-x-hidden overflow-y-auto";
const cSidebarRight = "flex-none overflow-x-hidden overflow-y-auto";
function instance$9($$self, $$props, $$invalidate) {
  let classesBase;
  let classesHeader;
  let classesSidebarLeft;
  let classesSidebarRight;
  let classesPageHeader;
  let classesPageContent;
  let classesPageFooter;
  let classesFooter;
  let { $$slots: slots = {}, $$scope } = $$props;
  const $$slots = compute_slots(slots);
  let { scrollbarGutter = "auto" } = $$props;
  let { regionPage = "" } = $$props;
  let { slotHeader = "z-10" } = $$props;
  let { slotSidebarLeft = "w-auto" } = $$props;
  let { slotSidebarRight = "w-auto" } = $$props;
  let { slotPageHeader = "" } = $$props;
  let { slotPageContent = "" } = $$props;
  let { slotPageFooter = "" } = $$props;
  let { slotFooter = "" } = $$props;
  function scroll_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(21, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("scrollbarGutter" in $$new_props)
      $$invalidate(0, scrollbarGutter = $$new_props.scrollbarGutter);
    if ("regionPage" in $$new_props)
      $$invalidate(1, regionPage = $$new_props.regionPage);
    if ("slotHeader" in $$new_props)
      $$invalidate(11, slotHeader = $$new_props.slotHeader);
    if ("slotSidebarLeft" in $$new_props)
      $$invalidate(12, slotSidebarLeft = $$new_props.slotSidebarLeft);
    if ("slotSidebarRight" in $$new_props)
      $$invalidate(13, slotSidebarRight = $$new_props.slotSidebarRight);
    if ("slotPageHeader" in $$new_props)
      $$invalidate(14, slotPageHeader = $$new_props.slotPageHeader);
    if ("slotPageContent" in $$new_props)
      $$invalidate(15, slotPageContent = $$new_props.slotPageContent);
    if ("slotPageFooter" in $$new_props)
      $$invalidate(16, slotPageFooter = $$new_props.slotPageFooter);
    if ("slotFooter" in $$new_props)
      $$invalidate(17, slotFooter = $$new_props.slotFooter);
    if ("$$scope" in $$new_props)
      $$invalidate(18, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    $$invalidate(9, classesBase = `${cBaseAppShell} ${$$props.class ?? ""}`);
    if ($$self.$$.dirty & /*slotHeader*/
    2048) {
      $$invalidate(8, classesHeader = `${slotHeader}`);
    }
    if ($$self.$$.dirty & /*slotSidebarLeft*/
    4096) {
      $$invalidate(7, classesSidebarLeft = `${cSidebarLeft} ${slotSidebarLeft}`);
    }
    if ($$self.$$.dirty & /*slotSidebarRight*/
    8192) {
      $$invalidate(6, classesSidebarRight = `${cSidebarRight} ${slotSidebarRight}`);
    }
    if ($$self.$$.dirty & /*slotPageHeader*/
    16384) {
      $$invalidate(5, classesPageHeader = `${slotPageHeader}`);
    }
    if ($$self.$$.dirty & /*slotPageContent*/
    32768) {
      $$invalidate(4, classesPageContent = `${slotPageContent}`);
    }
    if ($$self.$$.dirty & /*slotPageFooter*/
    65536) {
      $$invalidate(3, classesPageFooter = `${slotPageFooter}`);
    }
    if ($$self.$$.dirty & /*slotFooter*/
    131072) {
      $$invalidate(2, classesFooter = `${slotFooter}`);
    }
  };
  $$props = exclude_internal_props($$props);
  return [
    scrollbarGutter,
    regionPage,
    classesFooter,
    classesPageFooter,
    classesPageContent,
    classesPageHeader,
    classesSidebarRight,
    classesSidebarLeft,
    classesHeader,
    classesBase,
    $$slots,
    slotHeader,
    slotSidebarLeft,
    slotSidebarRight,
    slotPageHeader,
    slotPageContent,
    slotPageFooter,
    slotFooter,
    $$scope,
    slots,
    scroll_handler
  ];
}
class AppShell extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$9, create_fragment$b, safe_not_equal, {
      scrollbarGutter: 0,
      regionPage: 1,
      slotHeader: 11,
      slotSidebarLeft: 12,
      slotSidebarRight: 13,
      slotPageHeader: 14,
      slotPageContent: 15,
      slotPageFooter: 16,
      slotFooter: 17
    });
  }
}
function create_else_block$2(ctx) {
  let svg;
  let text_1;
  let t_value = String(
    /*initials*/
    ctx[1]
  ).substring(0, 2).toUpperCase() + "";
  let t;
  let text_1_class_value;
  return {
    c() {
      svg = svg_element("svg");
      text_1 = svg_element("text");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", { class: true, viewBox: true });
      var svg_nodes = children(svg);
      text_1 = claim_svg_element(svg_nodes, "text", {
        x: true,
        y: true,
        "dominant-baseline": true,
        "text-anchor": true,
        "font-weight": true,
        "font-size": true,
        class: true
      });
      var text_1_nodes = children(text_1);
      t = claim_text(text_1_nodes, t_value);
      text_1_nodes.forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(text_1, "x", "50%");
      attr(text_1, "y", "50%");
      attr(text_1, "dominant-baseline", "central");
      attr(text_1, "text-anchor", "middle");
      attr(text_1, "font-weight", "bold");
      attr(
        text_1,
        "font-size",
        /*fontSize*/
        ctx[3]
      );
      attr(text_1, "class", text_1_class_value = "avatar-text " + /*fill*/
      ctx[2]);
      attr(svg, "class", "avatar-initials w-full h-full");
      attr(svg, "viewBox", "0 0 512 512");
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      append_hydration(svg, text_1);
      append_hydration(text_1, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*initials*/
      2 && t_value !== (t_value = String(
        /*initials*/
        ctx2[1]
      ).substring(0, 2).toUpperCase() + ""))
        set_data(t, t_value);
      if (dirty & /*fontSize*/
      8) {
        attr(
          text_1,
          "font-size",
          /*fontSize*/
          ctx2[3]
        );
      }
      if (dirty & /*fill*/
      4 && text_1_class_value !== (text_1_class_value = "avatar-text " + /*fill*/
      ctx2[2])) {
        attr(text_1, "class", text_1_class_value);
      }
    },
    d(detaching) {
      if (detaching) {
        detach(svg);
      }
    }
  };
}
function create_if_block$5(ctx) {
  let img;
  let img_class_value;
  let img_style_value;
  let img_src_value;
  let img_alt_value;
  let action_action;
  let mounted;
  let dispose;
  let img_levels = [
    {
      class: img_class_value = "avatar-image " + cImage
    },
    {
      style: img_style_value = /*$$props*/
      ctx[9].style ?? ""
    },
    { src: img_src_value = /*src*/
    ctx[0] },
    {
      alt: img_alt_value = /*$$props*/
      ctx[9].alt || ""
    },
    /*prunedRestProps*/
    ctx[8]()
  ];
  let img_data = {};
  for (let i = 0; i < img_levels.length; i += 1) {
    img_data = assign(img_data, img_levels[i]);
  }
  return {
    c() {
      img = element("img");
      this.h();
    },
    l(nodes) {
      img = claim_element(nodes, "IMG", {
        class: true,
        style: true,
        src: true,
        alt: true
      });
      this.h();
    },
    h() {
      set_attributes(img, img_data);
    },
    m(target, anchor) {
      insert_hydration(target, img, anchor);
      if (!mounted) {
        dispose = [
          action_destroyer(action_action = /*action*/
          ctx[5].call(
            null,
            img,
            /*actionParams*/
            ctx[6]
          )),
          listen(
            img,
            "error",
            /*error_handler*/
            ctx[20]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      set_attributes(img, img_data = get_spread_update(img_levels, [
        { class: img_class_value },
        dirty & /*$$props*/
        512 && img_style_value !== (img_style_value = /*$$props*/
        ctx2[9].style ?? "") && { style: img_style_value },
        dirty & /*src*/
        1 && !src_url_equal(img.src, img_src_value = /*src*/
        ctx2[0]) && { src: img_src_value },
        dirty & /*$$props*/
        512 && img_alt_value !== (img_alt_value = /*$$props*/
        ctx2[9].alt || "") && { alt: img_alt_value },
        /*prunedRestProps*/
        ctx2[8]()
      ]));
      if (action_action && is_function(action_action.update) && dirty & /*actionParams*/
      64)
        action_action.update.call(
          null,
          /*actionParams*/
          ctx2[6]
        );
    },
    d(detaching) {
      if (detaching) {
        detach(img);
      }
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$a(ctx) {
  let figure;
  let figure_class_value;
  let mounted;
  let dispose;
  function select_block_type(ctx2, dirty) {
    if (
      /*src*/
      ctx2[0]
    )
      return create_if_block$5;
    return create_else_block$2;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      figure = element("figure");
      if_block.c();
      this.h();
    },
    l(nodes) {
      figure = claim_element(nodes, "FIGURE", { class: true, "data-testid": true });
      var figure_nodes = children(figure);
      if_block.l(figure_nodes);
      figure_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(figure, "class", figure_class_value = "avatar " + /*classesBase*/
      ctx[7]);
      attr(figure, "data-testid", "avatar");
    },
    m(target, anchor) {
      insert_hydration(target, figure, anchor);
      if_block.m(figure, null);
      if (!mounted) {
        dispose = [
          listen(
            figure,
            "click",
            /*click_handler*/
            ctx[16]
          ),
          listen(
            figure,
            "keydown",
            /*keydown_handler*/
            ctx[17]
          ),
          listen(
            figure,
            "keyup",
            /*keyup_handler*/
            ctx[18]
          ),
          listen(
            figure,
            "keypress",
            /*keypress_handler*/
            ctx[19]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(figure, null);
        }
      }
      if (dirty & /*classesBase*/
      128 && figure_class_value !== (figure_class_value = "avatar " + /*classesBase*/
      ctx2[7])) {
        attr(figure, "class", figure_class_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(figure);
      }
      if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
let cBase = "flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate";
let cImage = "w-full object-cover";
function instance$8($$self, $$props, $$invalidate) {
  let classesBase;
  const omit_props_names = [
    "initials",
    "fill",
    "fontSize",
    "src",
    "fallback",
    "action",
    "actionParams",
    "background",
    "width",
    "border",
    "rounded",
    "shadow",
    "cursor"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { initials = "AB" } = $$props;
  let { fill = "fill-token" } = $$props;
  let { fontSize = 150 } = $$props;
  let { src = "" } = $$props;
  let { fallback = "" } = $$props;
  let { action = () => {
  } } = $$props;
  let { actionParams = "" } = $$props;
  let { background = "bg-surface-400-500-token" } = $$props;
  let { width = "w-16" } = $$props;
  let { border = "" } = $$props;
  let { rounded = "rounded-full" } = $$props;
  let { shadow = "" } = $$props;
  let { cursor = "" } = $$props;
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keydown_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keyup_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keypress_handler(event) {
    bubble.call(this, $$self, event);
  }
  const error_handler = () => $$invalidate(0, src = fallback);
  $$self.$$set = ($$new_props) => {
    $$invalidate(9, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(21, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("initials" in $$new_props)
      $$invalidate(1, initials = $$new_props.initials);
    if ("fill" in $$new_props)
      $$invalidate(2, fill = $$new_props.fill);
    if ("fontSize" in $$new_props)
      $$invalidate(3, fontSize = $$new_props.fontSize);
    if ("src" in $$new_props)
      $$invalidate(0, src = $$new_props.src);
    if ("fallback" in $$new_props)
      $$invalidate(4, fallback = $$new_props.fallback);
    if ("action" in $$new_props)
      $$invalidate(5, action = $$new_props.action);
    if ("actionParams" in $$new_props)
      $$invalidate(6, actionParams = $$new_props.actionParams);
    if ("background" in $$new_props)
      $$invalidate(10, background = $$new_props.background);
    if ("width" in $$new_props)
      $$invalidate(11, width = $$new_props.width);
    if ("border" in $$new_props)
      $$invalidate(12, border = $$new_props.border);
    if ("rounded" in $$new_props)
      $$invalidate(13, rounded = $$new_props.rounded);
    if ("shadow" in $$new_props)
      $$invalidate(14, shadow = $$new_props.shadow);
    if ("cursor" in $$new_props)
      $$invalidate(15, cursor = $$new_props.cursor);
  };
  $$self.$$.update = () => {
    $$invalidate(7, classesBase = `${cBase} ${background} ${width} ${border} ${rounded} ${shadow} ${cursor} ${$$props.class ?? ""}`);
  };
  $$props = exclude_internal_props($$props);
  return [
    src,
    initials,
    fill,
    fontSize,
    fallback,
    action,
    actionParams,
    classesBase,
    prunedRestProps,
    $$props,
    background,
    width,
    border,
    rounded,
    shadow,
    cursor,
    click_handler,
    keydown_handler,
    keyup_handler,
    keypress_handler,
    error_handler
  ];
}
class Avatar extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$8, create_fragment$a, safe_not_equal, {
      initials: 1,
      fill: 2,
      fontSize: 3,
      src: 0,
      fallback: 4,
      action: 5,
      actionParams: 6,
      background: 10,
      width: 11,
      border: 12,
      rounded: 13,
      shadow: 14,
      cursor: 15
    });
  }
}
function create_if_block$4(ctx) {
  let previous_key = (
    /*$modalStore*/
    ctx[14]
  );
  let key_block_anchor;
  let current;
  let key_block = create_key_block(ctx);
  return {
    c() {
      key_block.c();
      key_block_anchor = empty();
    },
    l(nodes) {
      key_block.l(nodes);
      key_block_anchor = empty();
    },
    m(target, anchor) {
      key_block.m(target, anchor);
      insert_hydration(target, key_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty[0] & /*$modalStore*/
      16384 && safe_not_equal(previous_key, previous_key = /*$modalStore*/
      ctx2[14])) {
        group_outros();
        transition_out(key_block, 1, 1, noop);
        check_outros();
        key_block = create_key_block(ctx2);
        key_block.c();
        transition_in(key_block, 1);
        key_block.m(key_block_anchor.parentNode, key_block_anchor);
      } else {
        key_block.p(ctx2, dirty);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(key_block);
      current = true;
    },
    o(local) {
      transition_out(key_block);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(key_block_anchor);
      }
      key_block.d(detaching);
    }
  };
}
function create_else_block$1(ctx) {
  let div;
  let current_block_type_index;
  let if_block;
  let div_class_value;
  let div_aria_label_value;
  let current;
  const if_block_creators = [create_if_block_8, create_else_block_1];
  const if_blocks = [];
  function select_block_type_2(ctx2, dirty) {
    var _a;
    if (
      /*currentComponent*/
      (_a = ctx2[16]) == null ? void 0 : _a.slot
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type_2(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      div = element("div");
      if_block.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true,
        "data-testid": true,
        role: true,
        "aria-modal": true,
        "aria-label": true
      });
      var div_nodes = children(div);
      if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      var _a;
      attr(div, "class", div_class_value = "modal contents " + /*$modalStore*/
      (((_a = ctx[14][0]) == null ? void 0 : _a.modalClasses) ?? ""));
      attr(div, "data-testid", "modal-component");
      attr(div, "role", "dialog");
      attr(div, "aria-modal", "true");
      attr(div, "aria-label", div_aria_label_value = /*$modalStore*/
      ctx[14][0].title ?? "");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if_blocks[current_block_type_index].m(div, null);
      ctx[47](div);
      current = true;
    },
    p(ctx2, dirty) {
      var _a;
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_2(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(div, null);
      }
      if (!current || dirty[0] & /*$modalStore*/
      16384 && div_class_value !== (div_class_value = "modal contents " + /*$modalStore*/
      (((_a = ctx2[14][0]) == null ? void 0 : _a.modalClasses) ?? ""))) {
        attr(div, "class", div_class_value);
      }
      if (!current || dirty[0] & /*$modalStore*/
      16384 && div_aria_label_value !== (div_aria_label_value = /*$modalStore*/
      ctx2[14][0].title ?? "")) {
        attr(div, "aria-label", div_aria_label_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      if_blocks[current_block_type_index].d();
      ctx[47](null);
    }
  };
}
function create_if_block_1$1(ctx) {
  var _a, _b, _c, _d;
  let div;
  let t0;
  let t1;
  let t2;
  let div_class_value;
  let div_aria_label_value;
  let if_block0 = (
    /*$modalStore*/
    ((_a = ctx[14][0]) == null ? void 0 : _a.title) && create_if_block_7(ctx)
  );
  let if_block1 = (
    /*$modalStore*/
    ((_b = ctx[14][0]) == null ? void 0 : _b.body) && create_if_block_6(ctx)
  );
  let if_block2 = (
    /*$modalStore*/
    ((_c = ctx[14][0]) == null ? void 0 : _c.image) && typeof /*$modalStore*/
    ((_d = ctx[14][0]) == null ? void 0 : _d.image) === "string" && create_if_block_5$1(ctx)
  );
  function select_block_type_1(ctx2, dirty) {
    if (
      /*$modalStore*/
      ctx2[14][0].type === "alert"
    )
      return create_if_block_2$1;
    if (
      /*$modalStore*/
      ctx2[14][0].type === "confirm"
    )
      return create_if_block_3$1;
    if (
      /*$modalStore*/
      ctx2[14][0].type === "prompt"
    )
      return create_if_block_4$1;
  }
  let current_block_type = select_block_type_1(ctx);
  let if_block3 = current_block_type && current_block_type(ctx);
  return {
    c() {
      div = element("div");
      if (if_block0)
        if_block0.c();
      t0 = space();
      if (if_block1)
        if_block1.c();
      t1 = space();
      if (if_block2)
        if_block2.c();
      t2 = space();
      if (if_block3)
        if_block3.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true,
        "data-testid": true,
        role: true,
        "aria-modal": true,
        "aria-label": true
      });
      var div_nodes = children(div);
      if (if_block0)
        if_block0.l(div_nodes);
      t0 = claim_space(div_nodes);
      if (if_block1)
        if_block1.l(div_nodes);
      t1 = claim_space(div_nodes);
      if (if_block2)
        if_block2.l(div_nodes);
      t2 = claim_space(div_nodes);
      if (if_block3)
        if_block3.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", div_class_value = "modal " + /*classesModal*/
      ctx[20]);
      attr(div, "data-testid", "modal");
      attr(div, "role", "dialog");
      attr(div, "aria-modal", "true");
      attr(div, "aria-label", div_aria_label_value = /*$modalStore*/
      ctx[14][0].title ?? "");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (if_block0)
        if_block0.m(div, null);
      append_hydration(div, t0);
      if (if_block1)
        if_block1.m(div, null);
      append_hydration(div, t1);
      if (if_block2)
        if_block2.m(div, null);
      append_hydration(div, t2);
      if (if_block3)
        if_block3.m(div, null);
      ctx[46](div);
    },
    p(ctx2, dirty) {
      var _a2, _b2, _c2, _d2;
      if (
        /*$modalStore*/
        (_a2 = ctx2[14][0]) == null ? void 0 : _a2.title
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_7(ctx2);
          if_block0.c();
          if_block0.m(div, t0);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (
        /*$modalStore*/
        (_b2 = ctx2[14][0]) == null ? void 0 : _b2.body
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_6(ctx2);
          if_block1.c();
          if_block1.m(div, t1);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (
        /*$modalStore*/
        ((_c2 = ctx2[14][0]) == null ? void 0 : _c2.image) && typeof /*$modalStore*/
        ((_d2 = ctx2[14][0]) == null ? void 0 : _d2.image) === "string"
      ) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
        } else {
          if_block2 = create_if_block_5$1(ctx2);
          if_block2.c();
          if_block2.m(div, t2);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }
      if (current_block_type === (current_block_type = select_block_type_1(ctx2)) && if_block3) {
        if_block3.p(ctx2, dirty);
      } else {
        if (if_block3)
          if_block3.d(1);
        if_block3 = current_block_type && current_block_type(ctx2);
        if (if_block3) {
          if_block3.c();
          if_block3.m(div, null);
        }
      }
      if (dirty[0] & /*classesModal*/
      1048576 && div_class_value !== (div_class_value = "modal " + /*classesModal*/
      ctx2[20])) {
        attr(div, "class", div_class_value);
      }
      if (dirty[0] & /*$modalStore*/
      16384 && div_aria_label_value !== (div_aria_label_value = /*$modalStore*/
      ctx2[14][0].title ?? "")) {
        attr(div, "aria-label", div_aria_label_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      if (if_block2)
        if_block2.d();
      if (if_block3) {
        if_block3.d();
      }
      ctx[46](null);
    }
  };
}
function create_else_block_1(ctx) {
  var _a, _b;
  let switch_instance;
  let switch_instance_anchor;
  let current;
  const switch_instance_spread_levels = [
    /*currentComponent*/
    (_a = ctx[16]) == null ? void 0 : _a.props,
    { parent: (
      /*parent*/
      ctx[19]
    ) }
  ];
  var switch_value = (
    /*currentComponent*/
    (_b = ctx[16]) == null ? void 0 : _b.ref
  );
  function switch_props(ctx2, dirty) {
    var _a2;
    let switch_instance_props = {};
    for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    }
    if (dirty !== void 0 && dirty[0] & /*currentComponent, parent*/
    589824) {
      switch_instance_props = assign(switch_instance_props, get_spread_update(switch_instance_spread_levels, [
        dirty[0] & /*currentComponent*/
        65536 && get_spread_object(
          /*currentComponent*/
          (_a2 = ctx2[16]) == null ? void 0 : _a2.props
        ),
        dirty[0] & /*parent*/
        524288 && { parent: (
          /*parent*/
          ctx2[19]
        ) }
      ]));
    }
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes) {
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, nodes);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance)
        mount_component(switch_instance, target, anchor);
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      var _a2, _b2;
      if (dirty[0] & /*currentComponent*/
      65536 && switch_value !== (switch_value = /*currentComponent*/
      (_a2 = ctx2[16]) == null ? void 0 : _a2.ref)) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = construct_svelte_component(switch_value, switch_props(ctx2, dirty));
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        const switch_instance_changes = dirty[0] & /*currentComponent, parent*/
        589824 ? get_spread_update(switch_instance_spread_levels, [
          dirty[0] & /*currentComponent*/
          65536 && get_spread_object(
            /*currentComponent*/
            (_b2 = ctx2[16]) == null ? void 0 : _b2.props
          ),
          dirty[0] & /*parent*/
          524288 && { parent: (
            /*parent*/
            ctx2[19]
          ) }
        ]) : {};
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(switch_instance_anchor);
      }
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function create_if_block_8(ctx) {
  var _a, _b;
  let switch_instance;
  let switch_instance_anchor;
  let current;
  const switch_instance_spread_levels = [
    /*currentComponent*/
    (_a = ctx[16]) == null ? void 0 : _a.props,
    { parent: (
      /*parent*/
      ctx[19]
    ) }
  ];
  var switch_value = (
    /*currentComponent*/
    (_b = ctx[16]) == null ? void 0 : _b.ref
  );
  function switch_props(ctx2, dirty) {
    var _a2;
    let switch_instance_props = {
      $$slots: { default: [create_default_slot$2] },
      $$scope: { ctx: ctx2 }
    };
    for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    }
    if (dirty !== void 0 && dirty[0] & /*currentComponent, parent*/
    589824) {
      switch_instance_props = assign(switch_instance_props, get_spread_update(switch_instance_spread_levels, [
        dirty[0] & /*currentComponent*/
        65536 && get_spread_object(
          /*currentComponent*/
          (_a2 = ctx2[16]) == null ? void 0 : _a2.props
        ),
        dirty[0] & /*parent*/
        524288 && { parent: (
          /*parent*/
          ctx2[19]
        ) }
      ]));
    }
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes) {
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, nodes);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance)
        mount_component(switch_instance, target, anchor);
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      var _a2, _b2;
      if (dirty[0] & /*currentComponent*/
      65536 && switch_value !== (switch_value = /*currentComponent*/
      (_a2 = ctx2[16]) == null ? void 0 : _a2.ref)) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = construct_svelte_component(switch_value, switch_props(ctx2, dirty));
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        const switch_instance_changes = dirty[0] & /*currentComponent, parent*/
        589824 ? get_spread_update(switch_instance_spread_levels, [
          dirty[0] & /*currentComponent*/
          65536 && get_spread_object(
            /*currentComponent*/
            (_b2 = ctx2[16]) == null ? void 0 : _b2.props
          ),
          dirty[0] & /*parent*/
          524288 && { parent: (
            /*parent*/
            ctx2[19]
          ) }
        ]) : {};
        if (dirty[0] & /*currentComponent*/
        65536 | dirty[1] & /*$$scope*/
        16777216) {
          switch_instance_changes.$$scope = { dirty, ctx: ctx2 };
        }
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(switch_instance_anchor);
      }
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function create_default_slot$2(ctx) {
  var _a;
  let html_tag;
  let raw_value = (
    /*currentComponent*/
    ((_a = ctx[16]) == null ? void 0 : _a.slot) + ""
  );
  let html_anchor;
  return {
    c() {
      html_tag = new HtmlTagHydration(false);
      html_anchor = empty();
      this.h();
    },
    l(nodes) {
      html_tag = claim_html_tag(nodes, false);
      html_anchor = empty();
      this.h();
    },
    h() {
      html_tag.a = html_anchor;
    },
    m(target, anchor) {
      html_tag.m(raw_value, target, anchor);
      insert_hydration(target, html_anchor, anchor);
    },
    p(ctx2, dirty) {
      var _a2;
      if (dirty[0] & /*currentComponent*/
      65536 && raw_value !== (raw_value = /*currentComponent*/
      ((_a2 = ctx2[16]) == null ? void 0 : _a2.slot) + ""))
        html_tag.p(raw_value);
    },
    d(detaching) {
      if (detaching) {
        detach(html_anchor);
        html_tag.d();
      }
    }
  };
}
function create_if_block_7(ctx) {
  let header;
  let html_tag;
  let raw_value = (
    /*$modalStore*/
    ctx[14][0].title + ""
  );
  let header_class_value;
  return {
    c() {
      header = element("header");
      html_tag = new HtmlTagHydration(false);
      this.h();
    },
    l(nodes) {
      header = claim_element(nodes, "HEADER", { class: true });
      var header_nodes = children(header);
      html_tag = claim_html_tag(header_nodes, false);
      header_nodes.forEach(detach);
      this.h();
    },
    h() {
      html_tag.a = null;
      attr(header, "class", header_class_value = "modal-header " + /*regionHeader*/
      ctx[5]);
    },
    m(target, anchor) {
      insert_hydration(target, header, anchor);
      html_tag.m(raw_value, header);
    },
    p(ctx2, dirty) {
      if (dirty[0] & /*$modalStore*/
      16384 && raw_value !== (raw_value = /*$modalStore*/
      ctx2[14][0].title + ""))
        html_tag.p(raw_value);
      if (dirty[0] & /*regionHeader*/
      32 && header_class_value !== (header_class_value = "modal-header " + /*regionHeader*/
      ctx2[5])) {
        attr(header, "class", header_class_value);
      }
    },
    d(detaching) {
      if (detaching) {
        detach(header);
      }
    }
  };
}
function create_if_block_6(ctx) {
  let article;
  let html_tag;
  let raw_value = (
    /*$modalStore*/
    ctx[14][0].body + ""
  );
  let article_class_value;
  return {
    c() {
      article = element("article");
      html_tag = new HtmlTagHydration(false);
      this.h();
    },
    l(nodes) {
      article = claim_element(nodes, "ARTICLE", { class: true });
      var article_nodes = children(article);
      html_tag = claim_html_tag(article_nodes, false);
      article_nodes.forEach(detach);
      this.h();
    },
    h() {
      html_tag.a = null;
      attr(article, "class", article_class_value = "modal-body " + /*regionBody*/
      ctx[6]);
    },
    m(target, anchor) {
      insert_hydration(target, article, anchor);
      html_tag.m(raw_value, article);
    },
    p(ctx2, dirty) {
      if (dirty[0] & /*$modalStore*/
      16384 && raw_value !== (raw_value = /*$modalStore*/
      ctx2[14][0].body + ""))
        html_tag.p(raw_value);
      if (dirty[0] & /*regionBody*/
      64 && article_class_value !== (article_class_value = "modal-body " + /*regionBody*/
      ctx2[6])) {
        attr(article, "class", article_class_value);
      }
    },
    d(detaching) {
      if (detaching) {
        detach(article);
      }
    }
  };
}
function create_if_block_5$1(ctx) {
  let img;
  let img_src_value;
  return {
    c() {
      img = element("img");
      this.h();
    },
    l(nodes) {
      img = claim_element(nodes, "IMG", { class: true, src: true, alt: true });
      this.h();
    },
    h() {
      var _a;
      attr(img, "class", "modal-image " + cModalImage);
      if (!src_url_equal(img.src, img_src_value = /*$modalStore*/
      (_a = ctx[14][0]) == null ? void 0 : _a.image))
        attr(img, "src", img_src_value);
      attr(img, "alt", "Modal");
    },
    m(target, anchor) {
      insert_hydration(target, img, anchor);
    },
    p(ctx2, dirty) {
      var _a;
      if (dirty[0] & /*$modalStore*/
      16384 && !src_url_equal(img.src, img_src_value = /*$modalStore*/
      (_a = ctx2[14][0]) == null ? void 0 : _a.image)) {
        attr(img, "src", img_src_value);
      }
    },
    d(detaching) {
      if (detaching) {
        detach(img);
      }
    }
  };
}
function create_if_block_4$1(ctx) {
  let form;
  let input;
  let t0;
  let footer;
  let button0;
  let t1;
  let button0_class_value;
  let t2;
  let button1;
  let t3;
  let button1_class_value;
  let footer_class_value;
  let mounted;
  let dispose;
  let input_levels = [
    { class: "modal-prompt-input input" },
    { name: "prompt" },
    { type: "text" },
    /*$modalStore*/
    ctx[14][0].valueAttr
  ];
  let input_data = {};
  for (let i = 0; i < input_levels.length; i += 1) {
    input_data = assign(input_data, input_levels[i]);
  }
  return {
    c() {
      form = element("form");
      input = element("input");
      t0 = space();
      footer = element("footer");
      button0 = element("button");
      t1 = text(
        /*buttonTextCancel*/
        ctx[0]
      );
      t2 = space();
      button1 = element("button");
      t3 = text(
        /*buttonTextSubmit*/
        ctx[2]
      );
      this.h();
    },
    l(nodes) {
      form = claim_element(nodes, "FORM", { class: true });
      var form_nodes = children(form);
      input = claim_element(form_nodes, "INPUT", { class: true, name: true, type: true });
      t0 = claim_space(form_nodes);
      footer = claim_element(form_nodes, "FOOTER", { class: true });
      var footer_nodes = children(footer);
      button0 = claim_element(footer_nodes, "BUTTON", { type: true, class: true });
      var button0_nodes = children(button0);
      t1 = claim_text(
        button0_nodes,
        /*buttonTextCancel*/
        ctx[0]
      );
      button0_nodes.forEach(detach);
      t2 = claim_space(footer_nodes);
      button1 = claim_element(footer_nodes, "BUTTON", { type: true, class: true });
      var button1_nodes = children(button1);
      t3 = claim_text(
        button1_nodes,
        /*buttonTextSubmit*/
        ctx[2]
      );
      button1_nodes.forEach(detach);
      footer_nodes.forEach(detach);
      form_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(input, input_data);
      attr(button0, "type", "button");
      attr(button0, "class", button0_class_value = "btn " + /*buttonNeutral*/
      ctx[3]);
      attr(button1, "type", "submit");
      attr(button1, "class", button1_class_value = "btn " + /*buttonPositive*/
      ctx[4]);
      attr(footer, "class", footer_class_value = "modal-footer " + /*regionFooter*/
      ctx[7]);
      attr(form, "class", "space-y-4");
    },
    m(target, anchor) {
      insert_hydration(target, form, anchor);
      append_hydration(form, input);
      if (input.autofocus)
        input.focus();
      set_input_value(
        input,
        /*promptValue*/
        ctx[15]
      );
      append_hydration(form, t0);
      append_hydration(form, footer);
      append_hydration(footer, button0);
      append_hydration(button0, t1);
      append_hydration(footer, t2);
      append_hydration(footer, button1);
      append_hydration(button1, t3);
      if (!mounted) {
        dispose = [
          listen(
            input,
            "input",
            /*input_input_handler*/
            ctx[45]
          ),
          listen(
            button0,
            "click",
            /*onClose*/
            ctx[26]
          ),
          listen(
            form,
            "submit",
            /*onPromptSubmit*/
            ctx[28]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      set_attributes(input, input_data = get_spread_update(input_levels, [
        { class: "modal-prompt-input input" },
        { name: "prompt" },
        { type: "text" },
        dirty[0] & /*$modalStore*/
        16384 && /*$modalStore*/
        ctx2[14][0].valueAttr
      ]));
      if (dirty[0] & /*promptValue*/
      32768 && input.value !== /*promptValue*/
      ctx2[15]) {
        set_input_value(
          input,
          /*promptValue*/
          ctx2[15]
        );
      }
      if (dirty[0] & /*buttonTextCancel*/
      1)
        set_data(
          t1,
          /*buttonTextCancel*/
          ctx2[0]
        );
      if (dirty[0] & /*buttonNeutral*/
      8 && button0_class_value !== (button0_class_value = "btn " + /*buttonNeutral*/
      ctx2[3])) {
        attr(button0, "class", button0_class_value);
      }
      if (dirty[0] & /*buttonTextSubmit*/
      4)
        set_data(
          t3,
          /*buttonTextSubmit*/
          ctx2[2]
        );
      if (dirty[0] & /*buttonPositive*/
      16 && button1_class_value !== (button1_class_value = "btn " + /*buttonPositive*/
      ctx2[4])) {
        attr(button1, "class", button1_class_value);
      }
      if (dirty[0] & /*regionFooter*/
      128 && footer_class_value !== (footer_class_value = "modal-footer " + /*regionFooter*/
      ctx2[7])) {
        attr(footer, "class", footer_class_value);
      }
    },
    d(detaching) {
      if (detaching) {
        detach(form);
      }
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_3$1(ctx) {
  let footer;
  let button0;
  let t0;
  let button0_class_value;
  let t1;
  let button1;
  let t2;
  let button1_class_value;
  let footer_class_value;
  let mounted;
  let dispose;
  return {
    c() {
      footer = element("footer");
      button0 = element("button");
      t0 = text(
        /*buttonTextCancel*/
        ctx[0]
      );
      t1 = space();
      button1 = element("button");
      t2 = text(
        /*buttonTextConfirm*/
        ctx[1]
      );
      this.h();
    },
    l(nodes) {
      footer = claim_element(nodes, "FOOTER", { class: true });
      var footer_nodes = children(footer);
      button0 = claim_element(footer_nodes, "BUTTON", { type: true, class: true });
      var button0_nodes = children(button0);
      t0 = claim_text(
        button0_nodes,
        /*buttonTextCancel*/
        ctx[0]
      );
      button0_nodes.forEach(detach);
      t1 = claim_space(footer_nodes);
      button1 = claim_element(footer_nodes, "BUTTON", { type: true, class: true });
      var button1_nodes = children(button1);
      t2 = claim_text(
        button1_nodes,
        /*buttonTextConfirm*/
        ctx[1]
      );
      button1_nodes.forEach(detach);
      footer_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button0, "type", "button");
      attr(button0, "class", button0_class_value = "btn " + /*buttonNeutral*/
      ctx[3]);
      attr(button1, "type", "button");
      attr(button1, "class", button1_class_value = "btn " + /*buttonPositive*/
      ctx[4]);
      attr(footer, "class", footer_class_value = "modal-footer " + /*regionFooter*/
      ctx[7]);
    },
    m(target, anchor) {
      insert_hydration(target, footer, anchor);
      append_hydration(footer, button0);
      append_hydration(button0, t0);
      append_hydration(footer, t1);
      append_hydration(footer, button1);
      append_hydration(button1, t2);
      if (!mounted) {
        dispose = [
          listen(
            button0,
            "click",
            /*onClose*/
            ctx[26]
          ),
          listen(
            button1,
            "click",
            /*onConfirm*/
            ctx[27]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty[0] & /*buttonTextCancel*/
      1)
        set_data(
          t0,
          /*buttonTextCancel*/
          ctx2[0]
        );
      if (dirty[0] & /*buttonNeutral*/
      8 && button0_class_value !== (button0_class_value = "btn " + /*buttonNeutral*/
      ctx2[3])) {
        attr(button0, "class", button0_class_value);
      }
      if (dirty[0] & /*buttonTextConfirm*/
      2)
        set_data(
          t2,
          /*buttonTextConfirm*/
          ctx2[1]
        );
      if (dirty[0] & /*buttonPositive*/
      16 && button1_class_value !== (button1_class_value = "btn " + /*buttonPositive*/
      ctx2[4])) {
        attr(button1, "class", button1_class_value);
      }
      if (dirty[0] & /*regionFooter*/
      128 && footer_class_value !== (footer_class_value = "modal-footer " + /*regionFooter*/
      ctx2[7])) {
        attr(footer, "class", footer_class_value);
      }
    },
    d(detaching) {
      if (detaching) {
        detach(footer);
      }
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_2$1(ctx) {
  let footer;
  let button;
  let t;
  let button_class_value;
  let footer_class_value;
  let mounted;
  let dispose;
  return {
    c() {
      footer = element("footer");
      button = element("button");
      t = text(
        /*buttonTextCancel*/
        ctx[0]
      );
      this.h();
    },
    l(nodes) {
      footer = claim_element(nodes, "FOOTER", { class: true });
      var footer_nodes = children(footer);
      button = claim_element(footer_nodes, "BUTTON", { type: true, class: true });
      var button_nodes = children(button);
      t = claim_text(
        button_nodes,
        /*buttonTextCancel*/
        ctx[0]
      );
      button_nodes.forEach(detach);
      footer_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "type", "button");
      attr(button, "class", button_class_value = "btn " + /*buttonNeutral*/
      ctx[3]);
      attr(footer, "class", footer_class_value = "modal-footer " + /*regionFooter*/
      ctx[7]);
    },
    m(target, anchor) {
      insert_hydration(target, footer, anchor);
      append_hydration(footer, button);
      append_hydration(button, t);
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*onClose*/
          ctx[26]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty[0] & /*buttonTextCancel*/
      1)
        set_data(
          t,
          /*buttonTextCancel*/
          ctx2[0]
        );
      if (dirty[0] & /*buttonNeutral*/
      8 && button_class_value !== (button_class_value = "btn " + /*buttonNeutral*/
      ctx2[3])) {
        attr(button, "class", button_class_value);
      }
      if (dirty[0] & /*regionFooter*/
      128 && footer_class_value !== (footer_class_value = "modal-footer " + /*regionFooter*/
      ctx2[7])) {
        attr(footer, "class", footer_class_value);
      }
    },
    d(detaching) {
      if (detaching) {
        detach(footer);
      }
      mounted = false;
      dispose();
    }
  };
}
function create_key_block(ctx) {
  let div1;
  let div0;
  let current_block_type_index;
  let if_block;
  let div0_class_value;
  let div0_intro;
  let div0_outro;
  let div1_class_value;
  let div1_transition;
  let current;
  let mounted;
  let dispose;
  const if_block_creators = [create_if_block_1$1, create_else_block$1];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*$modalStore*/
      ctx2[14][0].type !== "component"
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      if_block.c();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true, "data-testid": true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if_block.l(div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", div0_class_value = "modal-transition " + /*classesTransitionLayer*/
      ctx[21]);
      attr(div1, "class", div1_class_value = "modal-backdrop " + /*classesBackdrop*/
      ctx[22] + " " + /*backdropOverflow*/
      ctx[18]);
      attr(div1, "data-testid", "modal-backdrop");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      if_blocks[current_block_type_index].m(div0, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            div1,
            "mousedown",
            /*onBackdropInteractionBegin*/
            ctx[24]
          ),
          listen(
            div1,
            "mouseup",
            /*onBackdropInteractionEnd*/
            ctx[25]
          ),
          listen(
            div1,
            "touchstart",
            /*touchstart_handler*/
            ctx[42],
            { passive: true }
          ),
          listen(
            div1,
            "touchend",
            /*touchend_handler*/
            ctx[43],
            { passive: true }
          ),
          action_destroyer(focusTrap.call(null, div1, true))
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        } else {
          if_block.p(ctx, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(div0, null);
      }
      if (!current || dirty[0] & /*classesTransitionLayer*/
      2097152 && div0_class_value !== (div0_class_value = "modal-transition " + /*classesTransitionLayer*/
      ctx[21])) {
        attr(div0, "class", div0_class_value);
      }
      if (!current || dirty[0] & /*classesBackdrop, backdropOverflow*/
      4456448 && div1_class_value !== (div1_class_value = "modal-backdrop " + /*classesBackdrop*/
      ctx[22] + " " + /*backdropOverflow*/
      ctx[18])) {
        attr(div1, "class", div1_class_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      add_render_callback(() => {
        if (!current)
          return;
        if (div0_outro)
          div0_outro.end(1);
        div0_intro = create_in_transition(div0, dynamicTransition, {
          transition: (
            /*transitionIn*/
            ctx[9]
          ),
          params: (
            /*transitionInParams*/
            ctx[10]
          ),
          enabled: (
            /*transitions*/
            ctx[8]
          )
        });
        div0_intro.start();
      });
      add_render_callback(() => {
        if (!current)
          return;
        if (!div1_transition)
          div1_transition = create_bidirectional_transition(
            div1,
            dynamicTransition,
            {
              transition: fade,
              params: { duration: 150 },
              enabled: (
                /*transitions*/
                ctx[8]
              )
            },
            true
          );
        div1_transition.run(1);
      });
      current = true;
    },
    o(local) {
      transition_out(if_block);
      if (div0_intro)
        div0_intro.invalidate();
      div0_outro = create_out_transition(div0, dynamicTransition, {
        transition: (
          /*transitionOut*/
          ctx[11]
        ),
        params: (
          /*transitionOutParams*/
          ctx[12]
        ),
        enabled: (
          /*transitions*/
          ctx[8]
        )
      });
      if (!div1_transition)
        div1_transition = create_bidirectional_transition(
          div1,
          dynamicTransition,
          {
            transition: fade,
            params: { duration: 150 },
            enabled: (
              /*transitions*/
              ctx[8]
            )
          },
          false
        );
      div1_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div1);
      }
      if_blocks[current_block_type_index].d();
      if (detaching && div0_outro)
        div0_outro.end();
      if (detaching && div1_transition)
        div1_transition.end();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$9(ctx) {
  let if_block_anchor;
  let current;
  let mounted;
  let dispose;
  add_render_callback(
    /*onwindowresize*/
    ctx[44]
  );
  let if_block = (
    /*$modalStore*/
    ctx[14].length > 0 && create_if_block$4(ctx)
  );
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            window,
            "keydown",
            /*onKeyDown*/
            ctx[29]
          ),
          listen(
            window,
            "resize",
            /*onwindowresize*/
            ctx[44]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (
        /*$modalStore*/
        ctx2[14].length > 0
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty[0] & /*$modalStore*/
          16384) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$4(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(if_block_anchor);
      }
      if (if_block)
        if_block.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
const cBackdrop$1 = "fixed top-0 left-0 right-0 bottom-0 bg-surface-backdrop-token p-4";
const cTransitionLayer = "w-full h-fit min-h-full overflow-y-auto flex justify-center";
const cModal = "block overflow-y-auto";
const cModalImage = "w-full h-auto";
function instance$7($$self, $$props, $$invalidate) {
  let cPosition;
  let classesBackdrop;
  let classesTransitionLayer;
  let classesModal;
  let parent;
  let $modalStore;
  let $prefersReducedMotionStore;
  component_subscribe($$self, prefersReducedMotionStore, ($$value) => $$invalidate(49, $prefersReducedMotionStore = $$value));
  const dispatch = createEventDispatcher();
  let { components = {} } = $$props;
  let { position = "items-center" } = $$props;
  let { background = "bg-surface-100-800-token" } = $$props;
  let { width = "w-modal" } = $$props;
  let { height = "h-auto" } = $$props;
  let { padding = "p-4" } = $$props;
  let { spacing = "space-y-4" } = $$props;
  let { rounded = "rounded-container-token" } = $$props;
  let { shadow = "shadow-xl" } = $$props;
  let { zIndex = "z-[999]" } = $$props;
  let { buttonNeutral = "variant-ghost-surface" } = $$props;
  let { buttonPositive = "variant-filled" } = $$props;
  let { buttonTextCancel = "Cancel" } = $$props;
  let { buttonTextConfirm = "Confirm" } = $$props;
  let { buttonTextSubmit = "Submit" } = $$props;
  let { regionBackdrop = "" } = $$props;
  let { regionHeader = "text-2xl font-bold" } = $$props;
  let { regionBody = "max-h-[200px] overflow-hidden" } = $$props;
  let { regionFooter = "flex justify-end space-x-2" } = $$props;
  let { transitions = !$prefersReducedMotionStore } = $$props;
  let { transitionIn = fly } = $$props;
  let { transitionInParams = { duration: 150, opacity: 0, x: 0, y: 100 } } = $$props;
  let { transitionOut = fly } = $$props;
  let { transitionOutParams = { duration: 150, opacity: 0, x: 0, y: 100 } } = $$props;
  let promptValue;
  const buttonTextDefaults = {
    buttonTextCancel,
    buttonTextConfirm,
    buttonTextSubmit
  };
  let currentComponent;
  let registeredInteractionWithBackdrop = false;
  let modalElement;
  let windowHeight;
  let backdropOverflow = "overflow-y-hidden";
  const modalStore = getModalStore();
  component_subscribe($$self, modalStore, (value) => $$invalidate(14, $modalStore = value));
  function handleModals(modals) {
    if (modals[0].type === "prompt")
      $$invalidate(15, promptValue = modals[0].value);
    $$invalidate(0, buttonTextCancel = modals[0].buttonTextCancel || buttonTextDefaults.buttonTextCancel);
    $$invalidate(1, buttonTextConfirm = modals[0].buttonTextConfirm || buttonTextDefaults.buttonTextConfirm);
    $$invalidate(2, buttonTextSubmit = modals[0].buttonTextSubmit || buttonTextDefaults.buttonTextSubmit);
    $$invalidate(16, currentComponent = typeof modals[0].component === "string" ? components[modals[0].component] : modals[0].component);
  }
  function onModalHeightChange(modal) {
    var _a;
    let modalHeight = modal == null ? void 0 : modal.clientHeight;
    if (!modalHeight)
      modalHeight = (_a = modal == null ? void 0 : modal.firstChild) == null ? void 0 : _a.clientHeight;
    if (!modalHeight)
      return;
    if (modalHeight > windowHeight) {
      $$invalidate(18, backdropOverflow = "overflow-y-auto");
    } else {
      $$invalidate(18, backdropOverflow = "overflow-y-hidden");
    }
  }
  function onBackdropInteractionBegin(event) {
    if (!(event.target instanceof Element))
      return;
    const classList = event.target.classList;
    if (classList.contains("modal-backdrop") || classList.contains("modal-transition")) {
      registeredInteractionWithBackdrop = true;
    }
  }
  function onBackdropInteractionEnd(event) {
    if (!(event.target instanceof Element))
      return;
    const classList = event.target.classList;
    if ((classList.contains("modal-backdrop") || classList.contains("modal-transition")) && registeredInteractionWithBackdrop) {
      if ($modalStore[0].response)
        $modalStore[0].response(void 0);
      modalStore.close();
      dispatch("backdrop", event);
    }
    registeredInteractionWithBackdrop = false;
  }
  function onClose() {
    if ($modalStore[0].response)
      $modalStore[0].response(false);
    modalStore.close();
  }
  function onConfirm() {
    if ($modalStore[0].response)
      $modalStore[0].response(true);
    modalStore.close();
  }
  function onPromptSubmit(event) {
    event.preventDefault();
    if ($modalStore[0].response) {
      if ($modalStore[0].valueAttr !== void 0 && "type" in $modalStore[0].valueAttr && $modalStore[0].valueAttr.type === "number")
        $modalStore[0].response(parseInt(promptValue));
      else
        $modalStore[0].response(promptValue);
    }
    modalStore.close();
  }
  function onKeyDown2(event) {
    if (!$modalStore.length)
      return;
    if (event.code === "Escape")
      onClose();
  }
  function touchstart_handler(event) {
    bubble.call(this, $$self, event);
  }
  function touchend_handler(event) {
    bubble.call(this, $$self, event);
  }
  function onwindowresize() {
    $$invalidate(17, windowHeight = window.innerHeight);
  }
  function input_input_handler() {
    promptValue = this.value;
    $$invalidate(15, promptValue);
  }
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      modalElement = $$value;
      $$invalidate(13, modalElement);
    });
  }
  function div_binding_1($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      modalElement = $$value;
      $$invalidate(13, modalElement);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(54, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("components" in $$new_props)
      $$invalidate(30, components = $$new_props.components);
    if ("position" in $$new_props)
      $$invalidate(31, position = $$new_props.position);
    if ("background" in $$new_props)
      $$invalidate(32, background = $$new_props.background);
    if ("width" in $$new_props)
      $$invalidate(33, width = $$new_props.width);
    if ("height" in $$new_props)
      $$invalidate(34, height = $$new_props.height);
    if ("padding" in $$new_props)
      $$invalidate(35, padding = $$new_props.padding);
    if ("spacing" in $$new_props)
      $$invalidate(36, spacing = $$new_props.spacing);
    if ("rounded" in $$new_props)
      $$invalidate(37, rounded = $$new_props.rounded);
    if ("shadow" in $$new_props)
      $$invalidate(38, shadow = $$new_props.shadow);
    if ("zIndex" in $$new_props)
      $$invalidate(39, zIndex = $$new_props.zIndex);
    if ("buttonNeutral" in $$new_props)
      $$invalidate(3, buttonNeutral = $$new_props.buttonNeutral);
    if ("buttonPositive" in $$new_props)
      $$invalidate(4, buttonPositive = $$new_props.buttonPositive);
    if ("buttonTextCancel" in $$new_props)
      $$invalidate(0, buttonTextCancel = $$new_props.buttonTextCancel);
    if ("buttonTextConfirm" in $$new_props)
      $$invalidate(1, buttonTextConfirm = $$new_props.buttonTextConfirm);
    if ("buttonTextSubmit" in $$new_props)
      $$invalidate(2, buttonTextSubmit = $$new_props.buttonTextSubmit);
    if ("regionBackdrop" in $$new_props)
      $$invalidate(40, regionBackdrop = $$new_props.regionBackdrop);
    if ("regionHeader" in $$new_props)
      $$invalidate(5, regionHeader = $$new_props.regionHeader);
    if ("regionBody" in $$new_props)
      $$invalidate(6, regionBody = $$new_props.regionBody);
    if ("regionFooter" in $$new_props)
      $$invalidate(7, regionFooter = $$new_props.regionFooter);
    if ("transitions" in $$new_props)
      $$invalidate(8, transitions = $$new_props.transitions);
    if ("transitionIn" in $$new_props)
      $$invalidate(9, transitionIn = $$new_props.transitionIn);
    if ("transitionInParams" in $$new_props)
      $$invalidate(10, transitionInParams = $$new_props.transitionInParams);
    if ("transitionOut" in $$new_props)
      $$invalidate(11, transitionOut = $$new_props.transitionOut);
    if ("transitionOutParams" in $$new_props)
      $$invalidate(12, transitionOutParams = $$new_props.transitionOutParams);
  };
  $$self.$$.update = () => {
    var _a, _b, _c;
    if ($$self.$$.dirty[0] & /*$modalStore*/
    16384) {
      if ($modalStore.length)
        handleModals($modalStore);
    }
    if ($$self.$$.dirty[0] & /*modalElement*/
    8192) {
      onModalHeightChange(modalElement);
    }
    if ($$self.$$.dirty[0] & /*$modalStore*/
    16384 | $$self.$$.dirty[1] & /*position*/
    1) {
      $$invalidate(41, cPosition = ((_a = $modalStore[0]) == null ? void 0 : _a.position) ?? position);
    }
    $$invalidate(22, classesBackdrop = `${cBackdrop$1} ${regionBackdrop} ${zIndex} ${$$props.class ?? ""} ${((_b = $modalStore[0]) == null ? void 0 : _b.backdropClasses) ?? ""}`);
    if ($$self.$$.dirty[1] & /*cPosition*/
    1024) {
      $$invalidate(21, classesTransitionLayer = `${cTransitionLayer} ${cPosition ?? ""}`);
    }
    if ($$self.$$.dirty[0] & /*$modalStore*/
    16384 | $$self.$$.dirty[1] & /*background, width, height, padding, spacing, rounded, shadow*/
    254) {
      $$invalidate(20, classesModal = `${cModal} ${background} ${width} ${height} ${padding} ${spacing} ${rounded} ${shadow} ${((_c = $modalStore[0]) == null ? void 0 : _c.modalClasses) ?? ""}`);
    }
    if ($$self.$$.dirty[0] & /*buttonNeutral, buttonPositive, buttonTextCancel, buttonTextConfirm, buttonTextSubmit, regionHeader, regionBody, regionFooter*/
    255 | $$self.$$.dirty[1] & /*position, background, width, height, padding, spacing, rounded, shadow, regionBackdrop*/
    767) {
      $$invalidate(19, parent = {
        position,
        // ---
        background,
        width,
        height,
        padding,
        spacing,
        rounded,
        shadow,
        // ---
        buttonNeutral,
        buttonPositive,
        buttonTextCancel,
        buttonTextConfirm,
        buttonTextSubmit,
        // ---
        regionBackdrop,
        regionHeader,
        regionBody,
        regionFooter,
        // ---
        onClose
      });
    }
  };
  $$props = exclude_internal_props($$props);
  return [
    buttonTextCancel,
    buttonTextConfirm,
    buttonTextSubmit,
    buttonNeutral,
    buttonPositive,
    regionHeader,
    regionBody,
    regionFooter,
    transitions,
    transitionIn,
    transitionInParams,
    transitionOut,
    transitionOutParams,
    modalElement,
    $modalStore,
    promptValue,
    currentComponent,
    windowHeight,
    backdropOverflow,
    parent,
    classesModal,
    classesTransitionLayer,
    classesBackdrop,
    modalStore,
    onBackdropInteractionBegin,
    onBackdropInteractionEnd,
    onClose,
    onConfirm,
    onPromptSubmit,
    onKeyDown2,
    components,
    position,
    background,
    width,
    height,
    padding,
    spacing,
    rounded,
    shadow,
    zIndex,
    regionBackdrop,
    cPosition,
    touchstart_handler,
    touchend_handler,
    onwindowresize,
    input_input_handler,
    div_binding,
    div_binding_1
  ];
}
class Modal extends SvelteComponent {
  constructor(options) {
    super();
    init(
      this,
      options,
      instance$7,
      create_fragment$9,
      safe_not_equal,
      {
        components: 30,
        position: 31,
        background: 32,
        width: 33,
        height: 34,
        padding: 35,
        spacing: 36,
        rounded: 37,
        shadow: 38,
        zIndex: 39,
        buttonNeutral: 3,
        buttonPositive: 4,
        buttonTextCancel: 0,
        buttonTextConfirm: 1,
        buttonTextSubmit: 2,
        regionBackdrop: 40,
        regionHeader: 5,
        regionBody: 6,
        regionFooter: 7,
        transitions: 8,
        transitionIn: 9,
        transitionInParams: 10,
        transitionOut: 11,
        transitionOutParams: 12
      },
      null,
      [-1, -1]
    );
  }
}
const { window: window_1 } = globals;
function create_if_block$3(ctx) {
  let div1;
  let div0;
  let div0_class_value;
  let div0_intro;
  let div0_outro;
  let div1_class_value;
  let div1_intro;
  let div1_outro;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = (
    /*#slots*/
    ctx[32].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[31],
    null
  );
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true, "data-testid": true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true,
        "data-testid": true,
        role: true,
        "aria-modal": true,
        "aria-labelledby": true,
        "aria-describedby": true
      });
      var div0_nodes = children(div0);
      if (default_slot)
        default_slot.l(div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", div0_class_value = "drawer " + /*classesDrawer*/
      ctx[8]);
      attr(div0, "data-testid", "drawer");
      attr(div0, "role", "dialog");
      attr(div0, "aria-modal", "true");
      attr(
        div0,
        "aria-labelledby",
        /*labelledby*/
        ctx[0]
      );
      attr(
        div0,
        "aria-describedby",
        /*describedby*/
        ctx[1]
      );
      attr(div1, "class", div1_class_value = "drawer-backdrop " + /*classesBackdrop*/
      ctx[9]);
      attr(div1, "data-testid", "drawer-backdrop");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      if (default_slot) {
        default_slot.m(div0, null);
      }
      ctx[36](div0);
      ctx[37](div1);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            div1,
            "mousedown",
            /*onDrawerInteraction*/
            ctx[12]
          ),
          listen(
            div1,
            "touchstart",
            /*touchstart_handler*/
            ctx[33],
            { passive: true }
          ),
          listen(
            div1,
            "touchend",
            /*touchend_handler*/
            ctx[34],
            { passive: true }
          ),
          listen(
            div1,
            "keypress",
            /*keypress_handler*/
            ctx[35]
          ),
          action_destroyer(focusTrap.call(null, div1, true))
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (default_slot) {
        if (default_slot.p && (!current || dirty[1] & /*$$scope*/
        1)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx,
            /*$$scope*/
            ctx[31],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx[31]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx[31],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty[0] & /*classesDrawer*/
      256 && div0_class_value !== (div0_class_value = "drawer " + /*classesDrawer*/
      ctx[8])) {
        attr(div0, "class", div0_class_value);
      }
      if (!current || dirty[0] & /*labelledby*/
      1) {
        attr(
          div0,
          "aria-labelledby",
          /*labelledby*/
          ctx[0]
        );
      }
      if (!current || dirty[0] & /*describedby*/
      2) {
        attr(
          div0,
          "aria-describedby",
          /*describedby*/
          ctx[1]
        );
      }
      if (!current || dirty[0] & /*classesBackdrop*/
      512 && div1_class_value !== (div1_class_value = "drawer-backdrop " + /*classesBackdrop*/
      ctx[9])) {
        attr(div1, "class", div1_class_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      if (local) {
        add_render_callback(() => {
          if (!current)
            return;
          if (div0_outro)
            div0_outro.end(1);
          div0_intro = create_in_transition(div0, dynamicTransition, {
            transition: fly,
            params: {
              x: (
                /*anim*/
                ctx[7].x
              ),
              y: (
                /*anim*/
                ctx[7].y
              ),
              duration: (
                /*duration*/
                ctx[2]
              ),
              opacity: (
                /*opacityTransition*/
                ctx[3] ? void 0 : 1
              )
            },
            enabled: (
              /*transitions*/
              ctx[4]
            )
          });
          div0_intro.start();
        });
      }
      if (local) {
        add_render_callback(() => {
          if (!current)
            return;
          if (div1_outro)
            div1_outro.end(1);
          div1_intro = create_in_transition(div1, dynamicTransition, {
            transition: fade,
            params: { duration: (
              /*duration*/
              ctx[2]
            ) },
            enabled: (
              /*transitions*/
              ctx[4] && /*opacityTransition*/
              ctx[3]
            )
          });
          div1_intro.start();
        });
      }
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      if (div0_intro)
        div0_intro.invalidate();
      if (local) {
        div0_outro = create_out_transition(div0, dynamicTransition, {
          transition: fly,
          params: {
            x: (
              /*anim*/
              ctx[7].x
            ),
            y: (
              /*anim*/
              ctx[7].y
            ),
            duration: (
              /*duration*/
              ctx[2]
            ),
            opacity: (
              /*opacityTransition*/
              ctx[3] ? void 0 : 1
            ),
            easing: cubicIn
          },
          enabled: (
            /*transitions*/
            ctx[4]
          )
        });
      }
      if (div1_intro)
        div1_intro.invalidate();
      if (local) {
        div1_outro = create_out_transition(div1, dynamicTransition, {
          transition: fade,
          params: { duration: (
            /*duration*/
            ctx[2]
          ) },
          enabled: (
            /*transitions*/
            ctx[4] && /*opacityTransition*/
            ctx[3]
          )
        });
      }
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div1);
      }
      if (default_slot)
        default_slot.d(detaching);
      ctx[36](null);
      if (detaching && div0_outro)
        div0_outro.end();
      ctx[37](null);
      if (detaching && div1_outro)
        div1_outro.end();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$8(ctx) {
  let if_block_anchor;
  let current;
  let mounted;
  let dispose;
  let if_block = (
    /*$drawerStore*/
    ctx[10].open === true && create_if_block$3(ctx)
  );
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = listen(
          window_1,
          "keydown",
          /*onKeydownWindow*/
          ctx[13]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (
        /*$drawerStore*/
        ctx2[10].open === true
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty[0] & /*$drawerStore*/
          1024) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$3(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(if_block_anchor);
      }
      if (if_block)
        if_block.d(detaching);
      mounted = false;
      dispose();
    }
  };
}
const cBackdrop = "fixed top-0 left-0 right-0 bottom-0 flex";
const cDrawer = "overflow-y-auto transition-transform";
function instance$6($$self, $$props, $$invalidate) {
  let classesPosition;
  let classesWidth;
  let classesHeight;
  let classesRounded;
  let classesBackdrop;
  let classesDrawer;
  let $drawerStore;
  let $prefersReducedMotionStore;
  component_subscribe($$self, prefersReducedMotionStore, ($$value) => $$invalidate(38, $prefersReducedMotionStore = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  const dispatch = createEventDispatcher();
  let { position = "left" } = $$props;
  let { bgDrawer = "bg-surface-100-800-token" } = $$props;
  let { border = "" } = $$props;
  let { rounded = "" } = $$props;
  let { shadow = "shadow-xl" } = $$props;
  let { width = "" } = $$props;
  let { height = "" } = $$props;
  let { bgBackdrop = "bg-surface-backdrop-token" } = $$props;
  let { blur = "" } = $$props;
  let { padding = "" } = $$props;
  let { zIndex = "z-40" } = $$props;
  let { regionBackdrop = "" } = $$props;
  let { regionDrawer = "" } = $$props;
  let { labelledby = "" } = $$props;
  let { describedby = "" } = $$props;
  let { duration = 200 } = $$props;
  let { transitions = !$prefersReducedMotionStore } = $$props;
  let { opacityTransition = true } = $$props;
  const presets = {
    top: {
      alignment: "items-start",
      width: "w-full",
      height: "h-[50%]",
      rounded: "rounded-bl-container-token rounded-br-container-token"
    },
    bottom: {
      alignment: "items-end",
      width: "w-full",
      height: " h-[50%]",
      rounded: "rounded-tl-container-token rounded-tr-container-token"
    },
    left: {
      alignment: "justify-start",
      width: "w-[90%]",
      height: "h-full",
      rounded: "rounded-tr-container-token rounded-br-container-token"
    },
    right: {
      alignment: "justify-end",
      width: "w-[90%]",
      height: "h-full",
      rounded: "rounded-tl-container-token rounded-bl-container-token"
    }
  };
  let elemBackdrop;
  let elemDrawer;
  let anim = { x: 0, y: 0 };
  const drawerStore = getDrawerStore();
  component_subscribe($$self, drawerStore, (value) => $$invalidate(10, $drawerStore = value));
  const propDefaults = {
    position,
    bgBackdrop,
    blur,
    padding,
    bgDrawer,
    border,
    rounded,
    shadow,
    width,
    height,
    opacityTransition,
    regionBackdrop,
    regionDrawer,
    labelledby,
    describedby,
    duration
  };
  function applyPropSettings(settings) {
    $$invalidate(14, position = settings.position || propDefaults.position);
    $$invalidate(21, bgBackdrop = settings.bgBackdrop || propDefaults.bgBackdrop);
    $$invalidate(22, blur = settings.blur || propDefaults.blur);
    $$invalidate(23, padding = settings.padding || propDefaults.padding);
    $$invalidate(15, bgDrawer = settings.bgDrawer || propDefaults.bgDrawer);
    $$invalidate(16, border = settings.border || propDefaults.border);
    $$invalidate(17, rounded = settings.rounded || propDefaults.rounded);
    $$invalidate(18, shadow = settings.shadow || propDefaults.shadow);
    $$invalidate(19, width = settings.width || propDefaults.width);
    $$invalidate(20, height = settings.height || propDefaults.height);
    $$invalidate(24, regionBackdrop = settings.regionBackdrop || propDefaults.regionBackdrop);
    $$invalidate(25, regionDrawer = settings.regionDrawer || propDefaults.regionDrawer);
    $$invalidate(0, labelledby = settings.labelledby || propDefaults.labelledby);
    $$invalidate(1, describedby = settings.describedby || propDefaults.describedby);
    $$invalidate(3, opacityTransition = settings.opacityTransition || propDefaults.opacityTransition);
    $$invalidate(2, duration = settings.duration || propDefaults.duration);
  }
  function applyAnimationSettings() {
    switch (position) {
      case "top":
        $$invalidate(7, anim = { x: 0, y: -window.innerWidth });
        break;
      case "bottom":
        $$invalidate(7, anim = { x: 0, y: window.innerWidth });
        break;
      case "left":
        $$invalidate(7, anim = { x: -window.innerHeight, y: 0 });
        break;
      case "right":
        $$invalidate(7, anim = { x: window.innerHeight, y: 0 });
        break;
      default:
        console.error("Error: unknown position property value.");
        break;
    }
  }
  function onDrawerInteraction(event) {
    if (event.target === elemBackdrop) {
      drawerStore.close();
      dispatch("backdrop", event);
    } else {
      dispatch("drawer", event);
    }
  }
  function onKeydownWindow(event) {
    if (!$drawerStore)
      return;
    if (event.code === "Escape")
      drawerStore.close();
  }
  drawerStore.subscribe((settings) => {
    if (settings.open !== true)
      return;
    applyPropSettings(settings);
    applyAnimationSettings();
  });
  function touchstart_handler(event) {
    bubble.call(this, $$self, event);
  }
  function touchend_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keypress_handler(event) {
    bubble.call(this, $$self, event);
  }
  function div0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      elemDrawer = $$value;
      $$invalidate(6, elemDrawer);
    });
  }
  function div1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      elemBackdrop = $$value;
      $$invalidate(5, elemBackdrop);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(44, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("position" in $$new_props)
      $$invalidate(14, position = $$new_props.position);
    if ("bgDrawer" in $$new_props)
      $$invalidate(15, bgDrawer = $$new_props.bgDrawer);
    if ("border" in $$new_props)
      $$invalidate(16, border = $$new_props.border);
    if ("rounded" in $$new_props)
      $$invalidate(17, rounded = $$new_props.rounded);
    if ("shadow" in $$new_props)
      $$invalidate(18, shadow = $$new_props.shadow);
    if ("width" in $$new_props)
      $$invalidate(19, width = $$new_props.width);
    if ("height" in $$new_props)
      $$invalidate(20, height = $$new_props.height);
    if ("bgBackdrop" in $$new_props)
      $$invalidate(21, bgBackdrop = $$new_props.bgBackdrop);
    if ("blur" in $$new_props)
      $$invalidate(22, blur = $$new_props.blur);
    if ("padding" in $$new_props)
      $$invalidate(23, padding = $$new_props.padding);
    if ("zIndex" in $$new_props)
      $$invalidate(26, zIndex = $$new_props.zIndex);
    if ("regionBackdrop" in $$new_props)
      $$invalidate(24, regionBackdrop = $$new_props.regionBackdrop);
    if ("regionDrawer" in $$new_props)
      $$invalidate(25, regionDrawer = $$new_props.regionDrawer);
    if ("labelledby" in $$new_props)
      $$invalidate(0, labelledby = $$new_props.labelledby);
    if ("describedby" in $$new_props)
      $$invalidate(1, describedby = $$new_props.describedby);
    if ("duration" in $$new_props)
      $$invalidate(2, duration = $$new_props.duration);
    if ("transitions" in $$new_props)
      $$invalidate(4, transitions = $$new_props.transitions);
    if ("opacityTransition" in $$new_props)
      $$invalidate(3, opacityTransition = $$new_props.opacityTransition);
    if ("$$scope" in $$new_props)
      $$invalidate(31, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & /*position*/
    16384) {
      $$invalidate(30, classesPosition = presets[position].alignment);
    }
    if ($$self.$$.dirty[0] & /*width, position*/
    540672) {
      $$invalidate(29, classesWidth = width ? width : presets[position].width);
    }
    if ($$self.$$.dirty[0] & /*height, position*/
    1064960) {
      $$invalidate(28, classesHeight = height ? height : presets[position].height);
    }
    if ($$self.$$.dirty[0] & /*rounded, position*/
    147456) {
      $$invalidate(27, classesRounded = rounded ? rounded : presets[position].rounded);
    }
    $$invalidate(9, classesBackdrop = `${cBackdrop} ${bgBackdrop} ${padding} ${blur} ${classesPosition} ${regionBackdrop} ${zIndex} ${$$props.class ?? ""}`);
    if ($$self.$$.dirty[0] & /*bgDrawer, border, rounded, shadow, classesWidth, classesHeight, classesRounded, regionDrawer*/
    973570048) {
      $$invalidate(8, classesDrawer = `${cDrawer} ${bgDrawer} ${border} ${rounded} ${shadow} ${classesWidth} ${classesHeight} ${classesRounded} ${regionDrawer}`);
    }
  };
  $$props = exclude_internal_props($$props);
  return [
    labelledby,
    describedby,
    duration,
    opacityTransition,
    transitions,
    elemBackdrop,
    elemDrawer,
    anim,
    classesDrawer,
    classesBackdrop,
    $drawerStore,
    drawerStore,
    onDrawerInteraction,
    onKeydownWindow,
    position,
    bgDrawer,
    border,
    rounded,
    shadow,
    width,
    height,
    bgBackdrop,
    blur,
    padding,
    regionBackdrop,
    regionDrawer,
    zIndex,
    classesRounded,
    classesHeight,
    classesWidth,
    classesPosition,
    $$scope,
    slots,
    touchstart_handler,
    touchend_handler,
    keypress_handler,
    div0_binding,
    div1_binding
  ];
}
class Drawer extends SvelteComponent {
  constructor(options) {
    super();
    init(
      this,
      options,
      instance$6,
      create_fragment$8,
      safe_not_equal,
      {
        position: 14,
        bgDrawer: 15,
        border: 16,
        rounded: 17,
        shadow: 18,
        width: 19,
        height: 20,
        bgBackdrop: 21,
        blur: 22,
        padding: 23,
        zIndex: 26,
        regionBackdrop: 24,
        regionDrawer: 25,
        labelledby: 0,
        describedby: 1,
        duration: 2,
        transitions: 4,
        opacityTransition: 3
      },
      null,
      [-1, -1]
    );
  }
}
function create_fragment$7(ctx) {
  let html_tag;
  let raw_value = `<script nonce="%sveltekit.nonce%">(${setInitialClassState.toString()})();<\/script>`;
  let html_anchor;
  let t;
  let div1;
  let div0;
  let svg;
  let path;
  let path_d_value;
  let svg_class_value;
  let div0_class_value;
  let div1_class_value;
  let mounted;
  let dispose;
  return {
    c() {
      html_tag = new HtmlTagHydration(false);
      html_anchor = empty();
      t = space();
      div1 = element("div");
      div0 = element("div");
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-gewkj4", document.head);
      html_tag = claim_html_tag(head_nodes, false);
      html_anchor = empty();
      head_nodes.forEach(detach);
      t = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", {
        class: true,
        role: true,
        "aria-label": true,
        "aria-checked": true,
        title: true,
        tabindex: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      svg = claim_svg_element(div0_nodes, "svg", { class: true, xmlns: true, viewBox: true });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", { d: true });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      html_tag.a = html_anchor;
      attr(path, "d", path_d_value = /*$modeCurrent*/
      ctx[1] ? (
        /*svgPath*/
        ctx[5].sun
      ) : (
        /*svgPath*/
        ctx[5].moon
      ));
      attr(svg, "class", svg_class_value = "lightswitch-icon " + /*classesIcon*/
      ctx[2]);
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "viewBox", "0 0 512 512");
      attr(div0, "class", div0_class_value = "lightswitch-thumb " + /*classesThumb*/
      ctx[3]);
      attr(div1, "class", div1_class_value = "lightswitch-track " + /*classesTrack*/
      ctx[4]);
      attr(div1, "role", "switch");
      attr(div1, "aria-label", "Light Switch");
      attr(
        div1,
        "aria-checked",
        /*$modeCurrent*/
        ctx[1]
      );
      attr(
        div1,
        "title",
        /*title*/
        ctx[0]
      );
      attr(div1, "tabindex", "0");
    },
    m(target, anchor) {
      html_tag.m(raw_value, document.head);
      append_hydration(document.head, html_anchor);
      insert_hydration(target, t, anchor);
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div0, svg);
      append_hydration(svg, path);
      if (!mounted) {
        dispose = [
          listen(
            div1,
            "click",
            /*onToggleHandler*/
            ctx[6]
          ),
          listen(
            div1,
            "click",
            /*click_handler*/
            ctx[19]
          ),
          listen(div1, "keydown", onKeyDown),
          listen(
            div1,
            "keydown",
            /*keydown_handler*/
            ctx[20]
          ),
          listen(
            div1,
            "keyup",
            /*keyup_handler*/
            ctx[21]
          ),
          listen(
            div1,
            "keypress",
            /*keypress_handler*/
            ctx[22]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*$modeCurrent*/
      2 && path_d_value !== (path_d_value = /*$modeCurrent*/
      ctx2[1] ? (
        /*svgPath*/
        ctx2[5].sun
      ) : (
        /*svgPath*/
        ctx2[5].moon
      ))) {
        attr(path, "d", path_d_value);
      }
      if (dirty & /*classesIcon*/
      4 && svg_class_value !== (svg_class_value = "lightswitch-icon " + /*classesIcon*/
      ctx2[2])) {
        attr(svg, "class", svg_class_value);
      }
      if (dirty & /*classesThumb*/
      8 && div0_class_value !== (div0_class_value = "lightswitch-thumb " + /*classesThumb*/
      ctx2[3])) {
        attr(div0, "class", div0_class_value);
      }
      if (dirty & /*classesTrack*/
      16 && div1_class_value !== (div1_class_value = "lightswitch-track " + /*classesTrack*/
      ctx2[4])) {
        attr(div1, "class", div1_class_value);
      }
      if (dirty & /*$modeCurrent*/
      2) {
        attr(
          div1,
          "aria-checked",
          /*$modeCurrent*/
          ctx2[1]
        );
      }
      if (dirty & /*title*/
      1) {
        attr(
          div1,
          "title",
          /*title*/
          ctx2[0]
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        html_tag.d();
        detach(t);
        detach(div1);
      }
      detach(html_anchor);
      mounted = false;
      run_all(dispose);
    }
  };
}
const cTrack = "cursor-pointer";
const cThumb = "aspect-square scale-[0.8] flex justify-center items-center";
const cIcon = "w-[70%] aspect-square";
function onKeyDown(event) {
  if (["Enter", "Space"].includes(event.code)) {
    event.preventDefault();
    event.currentTarget.click();
  }
}
function instance$5($$self, $$props, $$invalidate) {
  let trackBg;
  let thumbBg;
  let thumbPosition;
  let iconFill;
  let classesTrack;
  let classesThumb;
  let classesIcon;
  let $modeCurrent;
  component_subscribe($$self, modeCurrent, ($$value) => $$invalidate(1, $modeCurrent = $$value));
  let { title = "Toggle light or dark mode." } = $$props;
  let { bgLight = "bg-surface-50" } = $$props;
  let { bgDark = "bg-surface-900" } = $$props;
  let { fillLight = "fill-surface-50" } = $$props;
  let { fillDark = "fill-surface-900" } = $$props;
  let { width = "w-12" } = $$props;
  let { height = "h-6" } = $$props;
  let { ring = "ring-[1px] ring-surface-500/30" } = $$props;
  let { rounded = "rounded-token" } = $$props;
  const cTransition = `transition-all duration-[200ms]`;
  const svgPath = {
    sun: "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z",
    moon: "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
  };
  function onToggleHandler() {
    set_store_value(modeCurrent, $modeCurrent = !$modeCurrent, $modeCurrent);
    setModeUserPrefers($modeCurrent);
    setModeCurrent($modeCurrent);
  }
  onMount(() => {
    if (!("modeCurrent" in localStorage)) {
      setModeCurrent(getModeOsPrefers());
    }
  });
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keydown_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keyup_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keypress_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(24, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("title" in $$new_props)
      $$invalidate(0, title = $$new_props.title);
    if ("bgLight" in $$new_props)
      $$invalidate(7, bgLight = $$new_props.bgLight);
    if ("bgDark" in $$new_props)
      $$invalidate(8, bgDark = $$new_props.bgDark);
    if ("fillLight" in $$new_props)
      $$invalidate(9, fillLight = $$new_props.fillLight);
    if ("fillDark" in $$new_props)
      $$invalidate(10, fillDark = $$new_props.fillDark);
    if ("width" in $$new_props)
      $$invalidate(11, width = $$new_props.width);
    if ("height" in $$new_props)
      $$invalidate(12, height = $$new_props.height);
    if ("ring" in $$new_props)
      $$invalidate(13, ring = $$new_props.ring);
    if ("rounded" in $$new_props)
      $$invalidate(14, rounded = $$new_props.rounded);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$modeCurrent, bgLight, bgDark*/
    386) {
      $$invalidate(18, trackBg = $modeCurrent === true ? bgLight : bgDark);
    }
    if ($$self.$$.dirty & /*$modeCurrent, bgDark, bgLight*/
    386) {
      $$invalidate(17, thumbBg = $modeCurrent === true ? bgDark : bgLight);
    }
    if ($$self.$$.dirty & /*$modeCurrent*/
    2) {
      $$invalidate(16, thumbPosition = $modeCurrent === true ? "translate-x-[100%]" : "");
    }
    if ($$self.$$.dirty & /*$modeCurrent, fillLight, fillDark*/
    1538) {
      $$invalidate(15, iconFill = $modeCurrent === true ? fillLight : fillDark);
    }
    $$invalidate(4, classesTrack = `${cTrack} ${cTransition} ${width} ${height} ${ring} ${rounded} ${trackBg} ${$$props.class ?? ""}`);
    if ($$self.$$.dirty & /*height, rounded, thumbBg, thumbPosition*/
    217088) {
      $$invalidate(3, classesThumb = `${cThumb} ${cTransition} ${height} ${rounded} ${thumbBg} ${thumbPosition}`);
    }
    if ($$self.$$.dirty & /*iconFill*/
    32768) {
      $$invalidate(2, classesIcon = `${cIcon} ${iconFill}`);
    }
  };
  $$props = exclude_internal_props($$props);
  return [
    title,
    $modeCurrent,
    classesIcon,
    classesThumb,
    classesTrack,
    svgPath,
    onToggleHandler,
    bgLight,
    bgDark,
    fillLight,
    fillDark,
    width,
    height,
    ring,
    rounded,
    iconFill,
    thumbPosition,
    thumbBg,
    trackBg,
    click_handler,
    keydown_handler,
    keyup_handler,
    keypress_handler
  ];
}
class LightSwitch extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$7, safe_not_equal, {
      title: 0,
      bgLight: 7,
      bgDark: 8,
      fillLight: 9,
      fillDark: 10,
      width: 11,
      height: 12,
      ring: 13,
      rounded: 14
    });
  }
}
function create_fragment$6(ctx) {
  var _a, _b, _c, _d;
  let div;
  let codeblock;
  let current;
  codeblock = new CodeBlock({
    props: {
      lineNumbers: true,
      language: (
        /*$modalStore*/
        ((_b = (_a = ctx[0][0]) == null ? void 0 : _a.meta) == null ? void 0 : _b.language) || "json"
      ),
      code: (
        /*$modalStore*/
        ((_d = (_c = ctx[0][0]) == null ? void 0 : _c.meta) == null ? void 0 : _d.code) || ""
      )
    }
  });
  return {
    c() {
      div = element("div");
      create_component(codeblock.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(codeblock.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "card p-4 w-[85%]");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(codeblock, div, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      var _a2, _b2, _c2, _d2;
      const codeblock_changes = {};
      if (dirty & /*$modalStore*/
      1)
        codeblock_changes.language = /*$modalStore*/
        ((_b2 = (_a2 = ctx2[0][0]) == null ? void 0 : _a2.meta) == null ? void 0 : _b2.language) || "json";
      if (dirty & /*$modalStore*/
      1)
        codeblock_changes.code = /*$modalStore*/
        ((_d2 = (_c2 = ctx2[0][0]) == null ? void 0 : _c2.meta) == null ? void 0 : _d2.code) || "";
      codeblock.$set(codeblock_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(codeblock.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(codeblock.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      destroy_component(codeblock);
    }
  };
}
function instance$4($$self, $$props, $$invalidate) {
  let $modalStore;
  const modalStore = getModalStore();
  component_subscribe($$self, modalStore, (value) => $$invalidate(0, $modalStore = value));
  return [$modalStore, modalStore];
}
class CodeBlockModal extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$6, safe_not_equal, {});
  }
}
function create_fragment$5(ctx) {
  let svg;
  let path;
  return {
    c() {
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        class: true,
        xmlns: true,
        fill: true,
        viewBox: true,
        stroke: true
      });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", {
        "stroke-linecap": true,
        "stroke-linejoin": true,
        "stroke-width": true,
        d: true
      });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "stroke-linecap", "round");
      attr(path, "stroke-linejoin", "round");
      attr(path, "stroke-width", "2");
      attr(path, "d", "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6");
      attr(svg, "class", "w-6 h-6 stroke-current");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "fill", "none");
      attr(svg, "viewBox", "0 0 24 24");
      attr(svg, "stroke", "currentColor");
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      append_hydration(svg, path);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(svg);
      }
    }
  };
}
class HomeSVG extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$5, safe_not_equal, {});
  }
}
function create_fragment$4(ctx) {
  let svg;
  let path;
  return {
    c() {
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        class: true,
        xmlns: true,
        fill: true,
        viewBox: true,
        stroke: true
      });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", {
        "stroke-linecap": true,
        "stroke-linejoin": true,
        "stroke-width": true,
        d: true
      });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "stroke-linecap", "round");
      attr(path, "stroke-linejoin", "round");
      attr(path, "stroke-width", "2");
      attr(path, "d", "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z");
      attr(svg, "class", "w-6 h-6 stroke-current");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "fill", "none");
      attr(svg, "viewBox", "0 0 24 24");
      attr(svg, "stroke", "currentColor");
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      append_hydration(svg, path);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(svg);
      }
    }
  };
}
class ReportsSVG extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$4, safe_not_equal, {});
  }
}
const navigation = [
  {
    name: "Main",
    content: [
      {
        url: "/home",
        name: "Home",
        description: "Home page for the application.",
        icon: HomeSVG
      },
      {
        url: "/home/example-pages",
        name: "Example Pages",
        description: "a list of example pages showcasing how to implement the IdentityNow SDK.",
        icon: ReportsSVG
      },
      {
        url: "/home/example-form",
        name: "Example Form",
        description: "A form example using the IdentityNow SDK."
      },
      {
        url: "/home/form-integration",
        name: "SailPoint Form Integration",
        description: "A form example using the IdentityNow SDK."
      }
    ]
  }
];
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[2] = list[i];
  return child_ctx;
}
function get_each_context_1$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[5] = list[i];
  return child_ctx;
}
function create_if_block$2(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = (
    /*link*/
    ctx[5].icon
  );
  function switch_props(ctx2, dirty) {
    return {};
  }
  if (switch_value) {
    switch_instance = construct_svelte_component(switch_value, switch_props());
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes) {
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, nodes);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance)
        mount_component(switch_instance, target, anchor);
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(switch_instance_anchor);
      }
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function create_each_block_1$1(key_1, ctx) {
  let a;
  let t0;
  let p;
  let t1_value = (
    /*link*/
    ctx[5].name + ""
  );
  let t1;
  let t2;
  let current;
  let if_block = (
    /*link*/
    ctx[5].icon && create_if_block$2(ctx)
  );
  return {
    key: key_1,
    first: null,
    c() {
      a = element("a");
      if (if_block)
        if_block.c();
      t0 = space();
      p = element("p");
      t1 = text(t1_value);
      t2 = space();
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", {
        href: true,
        "data-sveltekit-preload-data": true,
        class: true
      });
      var a_nodes = children(a);
      if (if_block)
        if_block.l(a_nodes);
      t0 = claim_space(a_nodes);
      p = claim_element(a_nodes, "P", { class: true });
      var p_nodes = children(p);
      t1 = claim_text(p_nodes, t1_value);
      p_nodes.forEach(detach);
      t2 = claim_space(a_nodes);
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(p, "class", "ml-2 text-sm font-medium");
      attr(
        a,
        "href",
        /*link*/
        ctx[5].url
      );
      attr(a, "data-sveltekit-preload-data", "hover");
      attr(a, "class", "flex items-center w-full h-12 px-3 mt-2 rounded");
      toggle_class(
        a,
        "bg-surface-active-token",
        /*link*/
        ctx[5].url === /*$page*/
        ctx[0].url.pathname
      );
      toggle_class(
        a,
        "!text-white",
        /*link*/
        ctx[5].url === /*$page*/
        ctx[0].url.pathname
      );
      this.first = a;
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      if (if_block)
        if_block.m(a, null);
      append_hydration(a, t0);
      append_hydration(a, p);
      append_hydration(p, t1);
      append_hydration(a, t2);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (!current || dirty & /*$page*/
      1) {
        toggle_class(
          a,
          "bg-surface-active-token",
          /*link*/
          ctx[5].url === /*$page*/
          ctx[0].url.pathname
        );
      }
      if (!current || dirty & /*$page*/
      1) {
        toggle_class(
          a,
          "!text-white",
          /*link*/
          ctx[5].url === /*$page*/
          ctx[0].url.pathname
        );
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(a);
      }
      if (if_block)
        if_block.d();
    }
  };
}
function create_each_block$1(ctx) {
  let each_blocks = [];
  let each_1_lookup = /* @__PURE__ */ new Map();
  let each_1_anchor;
  let current;
  let each_value_1 = ensure_array_like(
    /*section*/
    ctx[2].content
  );
  const get_key = (ctx2) => (
    /*link*/
    ctx2[5].url
  );
  for (let i = 0; i < each_value_1.length; i += 1) {
    let child_ctx = get_each_context_1$1(ctx, each_value_1, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block_1$1(key, child_ctx));
  }
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(target, anchor);
        }
      }
      insert_hydration(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*$page*/
      1) {
        each_value_1 = ensure_array_like(
          /*section*/
          ctx2[2].content
        );
        group_outros();
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value_1, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block_1$1, each_1_anchor, get_each_context_1$1);
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value_1.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(each_1_anchor);
      }
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d(detaching);
      }
    }
  };
}
function create_fragment$3(ctx) {
  let div3;
  let div2;
  let div1;
  let div0;
  let div3_class_value;
  let current;
  let each_value = ensure_array_like(navigation);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      div3 = element("div");
      div2 = element("div");
      div1 = element("div");
      div0 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div0_nodes);
      }
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "flex flex-col items-center w-full mt-3 border-surface-400-500-token");
      attr(div1, "class", "w-full px-2");
      attr(div2, "class", "flex flex-col w-36 items-center h-full overflow-hidden");
      attr(div3, "class", div3_class_value = /*$$props*/
      (ctx[1].class ?? "") + " w-[144px] overflow-hidden bg-surface-50-900-token h-full");
    },
    m(target, anchor) {
      insert_hydration(target, div3, anchor);
      append_hydration(div3, div2);
      append_hydration(div2, div1);
      append_hydration(div1, div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div0, null);
        }
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (dirty & /*$page*/
      1) {
        each_value = ensure_array_like(navigation);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$1(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$1(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(div0, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
      if (!current || dirty & /*$$props*/
      2 && div3_class_value !== (div3_class_value = /*$$props*/
      (ctx2[1].class ?? "") + " w-[144px] overflow-hidden bg-surface-50-900-token h-full")) {
        attr(div3, "class", div3_class_value);
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div3);
      }
      destroy_each(each_blocks, detaching);
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  let $page;
  component_subscribe($$self, page, ($$value) => $$invalidate(0, $page = $$value));
  $$self.$$set = ($$new_props) => {
    $$invalidate(1, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
  };
  $$props = exclude_internal_props($$props);
  return [$page, $$props];
}
class Sidebar extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {});
  }
}
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = (v) => ({
  x: v,
  y: v
});
const oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
const oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element2 = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element2))) != null ? _await$platform$isEle : true) ? element2 : element2.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    ...rects.floating,
    x,
    y
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
const arrow$1 = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element: element2,
      padding = 0
    } = evaluate(options, state) || {};
    if (element2 == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element2);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element2));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = clamp(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
const flip$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides[0]], overflow[sides[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$map$so;
              const placement2 = (_overflowsData$map$so = overflowsData.map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
const offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
const shift$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element2) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element2);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element2) {
  return ["table", "td", "th"].includes(getNodeName(element2));
}
function isContainingBlock(element2) {
  const webkit = isWebKit();
  const css2 = getComputedStyle$1(element2);
  return css2.transform !== "none" || css2.perspective !== "none" || (css2.containerType ? css2.containerType !== "normal" : false) || !webkit && (css2.backdropFilter ? css2.backdropFilter !== "none" : false) || !webkit && (css2.filter ? css2.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css2.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css2.contain || "").includes(value));
}
function getContainingBlock(element2) {
  let currentNode = getParentNode(element2);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports)
    return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle$1(element2) {
  return getWindow(element2).getComputedStyle(element2);
}
function getNodeScroll(element2) {
  if (isElement(element2)) {
    return {
      scrollLeft: element2.scrollLeft,
      scrollTop: element2.scrollTop
    };
  }
  return {
    scrollLeft: element2.pageXOffset,
    scrollTop: element2.pageYOffset
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getCssDimensions(element2) {
  const css2 = getComputedStyle$1(element2);
  let width = parseFloat(css2.width) || 0;
  let height = parseFloat(css2.height) || 0;
  const hasOffset = isHTMLElement(element2);
  const offsetWidth = hasOffset ? element2.offsetWidth : width;
  const offsetHeight = hasOffset ? element2.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element2) {
  return !isElement(element2) ? element2.contextElement : element2;
}
function getScale(element2) {
  const domElement = unwrapElement(element2);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
const noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element2) {
  const win = getWindow(element2);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element2, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element2)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element2, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element2.getBoundingClientRect();
  const domElement = unwrapElement(element2);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element2);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = currentWin.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css2 = getComputedStyle$1(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css2.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css2.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = currentWin.frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
const topLayerSelectors = [":popover-open", ":modal"];
function isTopLayer(floating) {
  return topLayerSelectors.some((selector) => {
    try {
      return floating.matches(selector);
    } catch (e) {
      return false;
    }
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element2) {
  return Array.from(element2.getClientRects());
}
function getWindowScrollBarX(element2) {
  return getBoundingClientRect(getDocumentElement(element2)).left + getNodeScroll(element2).scrollLeft;
}
function getDocumentRect(element2) {
  const html = getDocumentElement(element2);
  const scroll = getNodeScroll(element2);
  const body = element2.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element2);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect(element2, strategy) {
  const win = getWindow(element2);
  const html = getDocumentElement(element2);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element2, strategy) {
  const clientRect = getBoundingClientRect(element2, true, strategy === "fixed");
  const top = clientRect.top + element2.clientTop;
  const left = clientRect.left + element2.clientLeft;
  const scale = isHTMLElement(element2) ? getScale(element2) : createCoords(1);
  const width = element2.clientWidth * scale.x;
  const height = element2.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element2, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element2, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element2));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element2);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element2, stopNode) {
  const parentNode = getParentNode(element2);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element2, cache) {
  const cachedResult = cache.get(element2);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element2, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element2).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element2) : element2;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element2, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element2, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element: element2,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element2, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element2, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element2, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element2) {
  const {
    width,
    height
  } = getCssDimensions(element2);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element2, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element2, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const x = rect.left + scroll.scrollLeft - offsets.x;
  const y = rect.top + scroll.scrollTop - offsets.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function getTrueOffsetParent(element2, polyfill) {
  if (!isHTMLElement(element2) || getComputedStyle$1(element2).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element2);
  }
  return element2.offsetParent;
}
function getOffsetParent(element2, polyfill) {
  const window2 = getWindow(element2);
  if (!isHTMLElement(element2) || isTopLayer(element2)) {
    return window2;
  }
  let offsetParent = getTrueOffsetParent(element2, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock(element2) || window2;
}
const getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      ...await getDimensionsFn(data.floating)
    }
  };
};
function isRTL(element2) {
  return getComputedStyle$1(element2).direction === "rtl";
}
const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function observeMove(element2, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element2);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element2.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 100);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element2);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
const shift = shift$1;
const flip = flip$1;
const arrow = arrow$1;
const computePosition = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};
function create_fragment$2(ctx) {
  let svg;
  let line0;
  let line1;
  let line2;
  let svg_class_value;
  return {
    c() {
      svg = svg_element("svg");
      line0 = svg_element("line");
      line1 = svg_element("line");
      line2 = svg_element("line");
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        class: true,
        width: true,
        height: true,
        viewBox: true,
        "enable-background": true,
        id: true,
        version: true,
        "xml:space": true,
        xmlns: true,
        "xmlns:xlink": true
      });
      var svg_nodes = children(svg);
      line0 = claim_svg_element(svg_nodes, "line", {
        fill: true,
        id: true,
        stroke: true,
        "stroke-linecap": true,
        "stroke-linejoin": true,
        "stroke-miterlimit": true,
        "stroke-width": true,
        x1: true,
        x2: true,
        y1: true,
        y2: true
      });
      children(line0).forEach(detach);
      line1 = claim_svg_element(svg_nodes, "line", {
        fill: true,
        id: true,
        stroke: true,
        "stroke-linecap": true,
        "stroke-linejoin": true,
        "stroke-miterlimit": true,
        "stroke-width": true,
        x1: true,
        x2: true,
        y1: true,
        y2: true
      });
      children(line1).forEach(detach);
      line2 = claim_svg_element(svg_nodes, "line", {
        fill: true,
        id: true,
        stroke: true,
        "stroke-linecap": true,
        "stroke-linejoin": true,
        "stroke-miterlimit": true,
        "stroke-width": true,
        x1: true,
        x2: true,
        y1: true,
        y2: true
      });
      children(line2).forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(line0, "fill", "none");
      attr(line0, "id", "XMLID_103_");
      attr(line0, "stroke", "#000000");
      attr(line0, "stroke-linecap", "round");
      attr(line0, "stroke-linejoin", "round");
      attr(line0, "stroke-miterlimit", "10");
      attr(line0, "stroke-width", "2");
      attr(line0, "x1", "7");
      attr(line0, "x2", "25");
      attr(line0, "y1", "16");
      attr(line0, "y2", "16");
      attr(line1, "fill", "none");
      attr(line1, "id", "XMLID_102_");
      attr(line1, "stroke", "#000000");
      attr(line1, "stroke-linecap", "round");
      attr(line1, "stroke-linejoin", "round");
      attr(line1, "stroke-miterlimit", "10");
      attr(line1, "stroke-width", "2");
      attr(line1, "x1", "7");
      attr(line1, "x2", "25");
      attr(line1, "y1", "25");
      attr(line1, "y2", "25");
      attr(line2, "fill", "none");
      attr(line2, "id", "XMLID_101_");
      attr(line2, "stroke", "#000000");
      attr(line2, "stroke-linecap", "round");
      attr(line2, "stroke-linejoin", "round");
      attr(line2, "stroke-miterlimit", "10");
      attr(line2, "stroke-width", "2");
      attr(line2, "x1", "7");
      attr(line2, "x2", "25");
      attr(line2, "y1", "7");
      attr(line2, "y2", "7");
      attr(svg, "class", svg_class_value = /*$$restProps*/
      ctx[0].class || "");
      attr(svg, "width", "800px");
      attr(svg, "height", "800px");
      attr(svg, "viewBox", "0 0 32 32");
      attr(svg, "enable-background", "new 0 0 32 32");
      attr(svg, "id", "Editable-line");
      attr(svg, "version", "1.1");
      attr(svg, "xml:space", "preserve");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "xmlns:xlink", "http://www.w3.org/1999/xlink");
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      append_hydration(svg, line0);
      append_hydration(svg, line1);
      append_hydration(svg, line2);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*$$restProps*/
      1 && svg_class_value !== (svg_class_value = /*$$restProps*/
      ctx2[0].class || "")) {
        attr(svg, "class", svg_class_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(svg);
      }
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  const omit_props_names = [];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(0, $$restProps = compute_rest_props($$props, omit_props_names));
  };
  return [$$restProps];
}
class HamburgerSVG extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {});
  }
}
function create_if_block$1(ctx) {
  let sidebar;
  let current;
  sidebar = new Sidebar({});
  return {
    c() {
      create_component(sidebar.$$.fragment);
    },
    l(nodes) {
      claim_component(sidebar.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(sidebar, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(sidebar.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(sidebar.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(sidebar, detaching);
    }
  };
}
function create_default_slot$1(ctx) {
  let if_block_anchor;
  let current;
  let if_block = (
    /*$drawerStore*/
    ctx[0].id === "doc-sidenav" && create_if_block$1()
  );
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (
        /*$drawerStore*/
        ctx2[0].id === "doc-sidenav"
      ) {
        if (if_block) {
          if (dirty & /*$drawerStore*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$1();
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(if_block_anchor);
      }
      if (if_block)
        if_block.d(detaching);
    }
  };
}
function create_fragment$1(ctx) {
  let drawer;
  let current;
  drawer = new Drawer({
    props: {
      width: "w-[144px]",
      class: (
        /*classesDrawer*/
        ctx[1]
      ),
      $$slots: { default: [create_default_slot$1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(drawer.$$.fragment);
    },
    l(nodes) {
      claim_component(drawer.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(drawer, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const drawer_changes = {};
      if (dirty & /*classesDrawer*/
      2)
        drawer_changes.class = /*classesDrawer*/
        ctx2[1];
      if (dirty & /*$$scope, $drawerStore*/
      9) {
        drawer_changes.$$scope = { dirty, ctx: ctx2 };
      }
      drawer.$set(drawer_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(drawer.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(drawer.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(drawer, detaching);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let classesDrawer;
  let $drawerStore;
  const drawerStore = getDrawerStore();
  component_subscribe($$self, drawerStore, (value) => $$invalidate(0, $drawerStore = value));
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$drawerStore*/
    1) {
      $$invalidate(1, classesDrawer = $drawerStore.id === "doc-sidenav" ? "lg:hidden" : "");
    }
  };
  return [$drawerStore, classesDrawer, drawerStore];
}
class SidebarDrawer extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {});
  }
}
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function deepFreeze(obj) {
  if (obj instanceof Map) {
    obj.clear = obj.delete = obj.set = function() {
      throw new Error("map is read-only");
    };
  } else if (obj instanceof Set) {
    obj.add = obj.clear = obj.delete = function() {
      throw new Error("set is read-only");
    };
  }
  Object.freeze(obj);
  Object.getOwnPropertyNames(obj).forEach((name) => {
    const prop = obj[name];
    const type = typeof prop;
    if ((type === "object" || type === "function") && !Object.isFrozen(prop)) {
      deepFreeze(prop);
    }
  });
  return obj;
}
class Response {
  /**
   * @param {CompiledMode} mode
   */
  constructor(mode) {
    if (mode.data === void 0)
      mode.data = {};
    this.data = mode.data;
    this.isMatchIgnored = false;
  }
  ignoreMatch() {
    this.isMatchIgnored = true;
  }
}
function escapeHTML(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}
function inherit$1(original, ...objects) {
  const result = /* @__PURE__ */ Object.create(null);
  for (const key in original) {
    result[key] = original[key];
  }
  objects.forEach(function(obj) {
    for (const key in obj) {
      result[key] = obj[key];
    }
  });
  return (
    /** @type {T} */
    result
  );
}
const SPAN_CLOSE = "</span>";
const emitsWrappingTags = (node) => {
  return !!node.scope;
};
const scopeToCSSClass = (name, { prefix }) => {
  if (name.startsWith("language:")) {
    return name.replace("language:", "language-");
  }
  if (name.includes(".")) {
    const pieces = name.split(".");
    return [
      `${prefix}${pieces.shift()}`,
      ...pieces.map((x, i) => `${x}${"_".repeat(i + 1)}`)
    ].join(" ");
  }
  return `${prefix}${name}`;
};
class HTMLRenderer {
  /**
   * Creates a new HTMLRenderer
   *
   * @param {Tree} parseTree - the parse tree (must support `walk` API)
   * @param {{classPrefix: string}} options
   */
  constructor(parseTree, options) {
    this.buffer = "";
    this.classPrefix = options.classPrefix;
    parseTree.walk(this);
  }
  /**
   * Adds texts to the output stream
   *
   * @param {string} text */
  addText(text2) {
    this.buffer += escapeHTML(text2);
  }
  /**
   * Adds a node open to the output stream (if needed)
   *
   * @param {Node} node */
  openNode(node) {
    if (!emitsWrappingTags(node))
      return;
    const className = scopeToCSSClass(
      node.scope,
      { prefix: this.classPrefix }
    );
    this.span(className);
  }
  /**
   * Adds a node close to the output stream (if needed)
   *
   * @param {Node} node */
  closeNode(node) {
    if (!emitsWrappingTags(node))
      return;
    this.buffer += SPAN_CLOSE;
  }
  /**
   * returns the accumulated buffer
  */
  value() {
    return this.buffer;
  }
  // helpers
  /**
   * Builds a span element
   *
   * @param {string} className */
  span(className) {
    this.buffer += `<span class="${className}">`;
  }
}
const newNode = (opts = {}) => {
  const result = { children: [] };
  Object.assign(result, opts);
  return result;
};
class TokenTree {
  constructor() {
    this.rootNode = newNode();
    this.stack = [this.rootNode];
  }
  get top() {
    return this.stack[this.stack.length - 1];
  }
  get root() {
    return this.rootNode;
  }
  /** @param {Node} node */
  add(node) {
    this.top.children.push(node);
  }
  /** @param {string} scope */
  openNode(scope) {
    const node = newNode({ scope });
    this.add(node);
    this.stack.push(node);
  }
  closeNode() {
    if (this.stack.length > 1) {
      return this.stack.pop();
    }
    return void 0;
  }
  closeAllNodes() {
    while (this.closeNode())
      ;
  }
  toJSON() {
    return JSON.stringify(this.rootNode, null, 4);
  }
  /**
   * @typedef { import("./html_renderer").Renderer } Renderer
   * @param {Renderer} builder
   */
  walk(builder) {
    return this.constructor._walk(builder, this.rootNode);
  }
  /**
   * @param {Renderer} builder
   * @param {Node} node
   */
  static _walk(builder, node) {
    if (typeof node === "string") {
      builder.addText(node);
    } else if (node.children) {
      builder.openNode(node);
      node.children.forEach((child) => this._walk(builder, child));
      builder.closeNode(node);
    }
    return builder;
  }
  /**
   * @param {Node} node
   */
  static _collapse(node) {
    if (typeof node === "string")
      return;
    if (!node.children)
      return;
    if (node.children.every((el) => typeof el === "string")) {
      node.children = [node.children.join("")];
    } else {
      node.children.forEach((child) => {
        TokenTree._collapse(child);
      });
    }
  }
}
class TokenTreeEmitter extends TokenTree {
  /**
   * @param {*} options
   */
  constructor(options) {
    super();
    this.options = options;
  }
  /**
   * @param {string} text
   */
  addText(text2) {
    if (text2 === "") {
      return;
    }
    this.add(text2);
  }
  /** @param {string} scope */
  startScope(scope) {
    this.openNode(scope);
  }
  endScope() {
    this.closeNode();
  }
  /**
   * @param {Emitter & {root: DataNode}} emitter
   * @param {string} name
   */
  __addSublanguage(emitter, name) {
    const node = emitter.root;
    if (name)
      node.scope = `language:${name}`;
    this.add(node);
  }
  toHTML() {
    const renderer = new HTMLRenderer(this, this.options);
    return renderer.value();
  }
  finalize() {
    this.closeAllNodes();
    return true;
  }
}
function source(re) {
  if (!re)
    return null;
  if (typeof re === "string")
    return re;
  return re.source;
}
function lookahead(re) {
  return concat("(?=", re, ")");
}
function anyNumberOfTimes(re) {
  return concat("(?:", re, ")*");
}
function optional(re) {
  return concat("(?:", re, ")?");
}
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}
function stripOptionsFromArgs(args) {
  const opts = args[args.length - 1];
  if (typeof opts === "object" && opts.constructor === Object) {
    args.splice(args.length - 1, 1);
    return opts;
  } else {
    return {};
  }
}
function either(...args) {
  const opts = stripOptionsFromArgs(args);
  const joined = "(" + (opts.capture ? "" : "?:") + args.map((x) => source(x)).join("|") + ")";
  return joined;
}
function countMatchGroups(re) {
  return new RegExp(re.toString() + "|").exec("").length - 1;
}
function startsWith(re, lexeme) {
  const match = re && re.exec(lexeme);
  return match && match.index === 0;
}
const BACKREF_RE = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function _rewriteBackreferences(regexps, { joinWith }) {
  let numCaptures = 0;
  return regexps.map((regex) => {
    numCaptures += 1;
    const offset2 = numCaptures;
    let re = source(regex);
    let out = "";
    while (re.length > 0) {
      const match = BACKREF_RE.exec(re);
      if (!match) {
        out += re;
        break;
      }
      out += re.substring(0, match.index);
      re = re.substring(match.index + match[0].length);
      if (match[0][0] === "\\" && match[1]) {
        out += "\\" + String(Number(match[1]) + offset2);
      } else {
        out += match[0];
        if (match[0] === "(") {
          numCaptures++;
        }
      }
    }
    return out;
  }).map((re) => `(${re})`).join(joinWith);
}
const MATCH_NOTHING_RE = /\b\B/;
const IDENT_RE$2 = "[a-zA-Z]\\w*";
const UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*";
const NUMBER_RE = "\\b\\d+(\\.\\d+)?";
const C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
const BINARY_NUMBER_RE = "\\b(0b[01]+)";
const RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
const SHEBANG = (opts = {}) => {
  const beginShebang = /^#![ ]*\//;
  if (opts.binary) {
    opts.begin = concat(
      beginShebang,
      /.*\b/,
      opts.binary,
      /\b.*/
    );
  }
  return inherit$1({
    scope: "meta",
    begin: beginShebang,
    end: /$/,
    relevance: 0,
    /** @type {ModeCallback} */
    "on:begin": (m, resp) => {
      if (m.index !== 0)
        resp.ignoreMatch();
    }
  }, opts);
};
const BACKSLASH_ESCAPE = {
  begin: "\\\\[\\s\\S]",
  relevance: 0
};
const APOS_STRING_MODE = {
  scope: "string",
  begin: "'",
  end: "'",
  illegal: "\\n",
  contains: [BACKSLASH_ESCAPE]
};
const QUOTE_STRING_MODE = {
  scope: "string",
  begin: '"',
  end: '"',
  illegal: "\\n",
  contains: [BACKSLASH_ESCAPE]
};
const PHRASAL_WORDS_MODE = {
  begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
};
const COMMENT = function(begin, end, modeOptions = {}) {
  const mode = inherit$1(
    {
      scope: "comment",
      begin,
      end,
      contains: []
    },
    modeOptions
  );
  mode.contains.push({
    scope: "doctag",
    // hack to avoid the space from being included. the space is necessary to
    // match here to prevent the plain text rule below from gobbling up doctags
    begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
    end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
    excludeBegin: true,
    relevance: 0
  });
  const ENGLISH_WORD = either(
    // list of common 1 and 2 letter words in English
    "I",
    "a",
    "is",
    "so",
    "us",
    "to",
    "at",
    "if",
    "in",
    "it",
    "on",
    // note: this is not an exhaustive list of contractions, just popular ones
    /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
    // contractions - can't we'd they're let's, etc
    /[A-Za-z]+[-][a-z]+/,
    // `no-way`, etc.
    /[A-Za-z][a-z]{2,}/
    // allow capitalized words at beginning of sentences
  );
  mode.contains.push(
    {
      // TODO: how to include ", (, ) without breaking grammars that use these for
      // comment delimiters?
      // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
      // ---
      // this tries to find sequences of 3 english words in a row (without any
      // "programming" type syntax) this gives us a strong signal that we've
      // TRULY found a comment - vs perhaps scanning with the wrong language.
      // It's possible to find something that LOOKS like the start of the
      // comment - but then if there is no readable text - good chance it is a
      // false match and not a comment.
      //
      // for a visual example please see:
      // https://github.com/highlightjs/highlight.js/issues/2827
      begin: concat(
        /[ ]+/,
        // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
        "(",
        ENGLISH_WORD,
        /[.]?[:]?([.][ ]|[ ])/,
        "){3}"
      )
      // look for 3 words in a row
    }
  );
  return mode;
};
const C_LINE_COMMENT_MODE = COMMENT("//", "$");
const C_BLOCK_COMMENT_MODE = COMMENT("/\\*", "\\*/");
const HASH_COMMENT_MODE = COMMENT("#", "$");
const NUMBER_MODE = {
  scope: "number",
  begin: NUMBER_RE,
  relevance: 0
};
const C_NUMBER_MODE = {
  scope: "number",
  begin: C_NUMBER_RE,
  relevance: 0
};
const BINARY_NUMBER_MODE = {
  scope: "number",
  begin: BINARY_NUMBER_RE,
  relevance: 0
};
const REGEXP_MODE = {
  scope: "regexp",
  begin: /\/(?=[^/\n]*\/)/,
  end: /\/[gimuy]*/,
  contains: [
    BACKSLASH_ESCAPE,
    {
      begin: /\[/,
      end: /\]/,
      relevance: 0,
      contains: [BACKSLASH_ESCAPE]
    }
  ]
};
const TITLE_MODE = {
  scope: "title",
  begin: IDENT_RE$2,
  relevance: 0
};
const UNDERSCORE_TITLE_MODE = {
  scope: "title",
  begin: UNDERSCORE_IDENT_RE,
  relevance: 0
};
const METHOD_GUARD = {
  // excludes method names from keyword processing
  begin: "\\.\\s*" + UNDERSCORE_IDENT_RE,
  relevance: 0
};
const END_SAME_AS_BEGIN = function(mode) {
  return Object.assign(
    mode,
    {
      /** @type {ModeCallback} */
      "on:begin": (m, resp) => {
        resp.data._beginMatch = m[1];
      },
      /** @type {ModeCallback} */
      "on:end": (m, resp) => {
        if (resp.data._beginMatch !== m[1])
          resp.ignoreMatch();
      }
    }
  );
};
var MODES$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  APOS_STRING_MODE,
  BACKSLASH_ESCAPE,
  BINARY_NUMBER_MODE,
  BINARY_NUMBER_RE,
  COMMENT,
  C_BLOCK_COMMENT_MODE,
  C_LINE_COMMENT_MODE,
  C_NUMBER_MODE,
  C_NUMBER_RE,
  END_SAME_AS_BEGIN,
  HASH_COMMENT_MODE,
  IDENT_RE: IDENT_RE$2,
  MATCH_NOTHING_RE,
  METHOD_GUARD,
  NUMBER_MODE,
  NUMBER_RE,
  PHRASAL_WORDS_MODE,
  QUOTE_STRING_MODE,
  REGEXP_MODE,
  RE_STARTERS_RE,
  SHEBANG,
  TITLE_MODE,
  UNDERSCORE_IDENT_RE,
  UNDERSCORE_TITLE_MODE
});
function skipIfHasPrecedingDot(match, response) {
  const before = match.input[match.index - 1];
  if (before === ".") {
    response.ignoreMatch();
  }
}
function scopeClassName(mode, _parent) {
  if (mode.className !== void 0) {
    mode.scope = mode.className;
    delete mode.className;
  }
}
function beginKeywords(mode, parent) {
  if (!parent)
    return;
  if (!mode.beginKeywords)
    return;
  mode.begin = "\\b(" + mode.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)";
  mode.__beforeBegin = skipIfHasPrecedingDot;
  mode.keywords = mode.keywords || mode.beginKeywords;
  delete mode.beginKeywords;
  if (mode.relevance === void 0)
    mode.relevance = 0;
}
function compileIllegal(mode, _parent) {
  if (!Array.isArray(mode.illegal))
    return;
  mode.illegal = either(...mode.illegal);
}
function compileMatch(mode, _parent) {
  if (!mode.match)
    return;
  if (mode.begin || mode.end)
    throw new Error("begin & end are not supported with match");
  mode.begin = mode.match;
  delete mode.match;
}
function compileRelevance(mode, _parent) {
  if (mode.relevance === void 0)
    mode.relevance = 1;
}
const beforeMatchExt = (mode, parent) => {
  if (!mode.beforeMatch)
    return;
  if (mode.starts)
    throw new Error("beforeMatch cannot be used with starts");
  const originalMode = Object.assign({}, mode);
  Object.keys(mode).forEach((key) => {
    delete mode[key];
  });
  mode.keywords = originalMode.keywords;
  mode.begin = concat(originalMode.beforeMatch, lookahead(originalMode.begin));
  mode.starts = {
    relevance: 0,
    contains: [
      Object.assign(originalMode, { endsParent: true })
    ]
  };
  mode.relevance = 0;
  delete originalMode.beforeMatch;
};
const COMMON_KEYWORDS = [
  "of",
  "and",
  "for",
  "in",
  "not",
  "or",
  "if",
  "then",
  "parent",
  // common variable name
  "list",
  // common variable name
  "value"
  // common variable name
];
const DEFAULT_KEYWORD_SCOPE = "keyword";
function compileKeywords(rawKeywords, caseInsensitive, scopeName = DEFAULT_KEYWORD_SCOPE) {
  const compiledKeywords = /* @__PURE__ */ Object.create(null);
  if (typeof rawKeywords === "string") {
    compileList(scopeName, rawKeywords.split(" "));
  } else if (Array.isArray(rawKeywords)) {
    compileList(scopeName, rawKeywords);
  } else {
    Object.keys(rawKeywords).forEach(function(scopeName2) {
      Object.assign(
        compiledKeywords,
        compileKeywords(rawKeywords[scopeName2], caseInsensitive, scopeName2)
      );
    });
  }
  return compiledKeywords;
  function compileList(scopeName2, keywordList) {
    if (caseInsensitive) {
      keywordList = keywordList.map((x) => x.toLowerCase());
    }
    keywordList.forEach(function(keyword) {
      const pair = keyword.split("|");
      compiledKeywords[pair[0]] = [scopeName2, scoreForKeyword(pair[0], pair[1])];
    });
  }
}
function scoreForKeyword(keyword, providedScore) {
  if (providedScore) {
    return Number(providedScore);
  }
  return commonKeyword(keyword) ? 0 : 1;
}
function commonKeyword(keyword) {
  return COMMON_KEYWORDS.includes(keyword.toLowerCase());
}
const seenDeprecations = {};
const error = (message) => {
  console.error(message);
};
const warn = (message, ...args) => {
  console.log(`WARN: ${message}`, ...args);
};
const deprecated = (version2, message) => {
  if (seenDeprecations[`${version2}/${message}`])
    return;
  console.log(`Deprecated as of ${version2}. ${message}`);
  seenDeprecations[`${version2}/${message}`] = true;
};
const MultiClassError = new Error();
function remapScopeNames(mode, regexes, { key }) {
  let offset2 = 0;
  const scopeNames = mode[key];
  const emit = {};
  const positions = {};
  for (let i = 1; i <= regexes.length; i++) {
    positions[i + offset2] = scopeNames[i];
    emit[i + offset2] = true;
    offset2 += countMatchGroups(regexes[i - 1]);
  }
  mode[key] = positions;
  mode[key]._emit = emit;
  mode[key]._multi = true;
}
function beginMultiClass(mode) {
  if (!Array.isArray(mode.begin))
    return;
  if (mode.skip || mode.excludeBegin || mode.returnBegin) {
    error("skip, excludeBegin, returnBegin not compatible with beginScope: {}");
    throw MultiClassError;
  }
  if (typeof mode.beginScope !== "object" || mode.beginScope === null) {
    error("beginScope must be object");
    throw MultiClassError;
  }
  remapScopeNames(mode, mode.begin, { key: "beginScope" });
  mode.begin = _rewriteBackreferences(mode.begin, { joinWith: "" });
}
function endMultiClass(mode) {
  if (!Array.isArray(mode.end))
    return;
  if (mode.skip || mode.excludeEnd || mode.returnEnd) {
    error("skip, excludeEnd, returnEnd not compatible with endScope: {}");
    throw MultiClassError;
  }
  if (typeof mode.endScope !== "object" || mode.endScope === null) {
    error("endScope must be object");
    throw MultiClassError;
  }
  remapScopeNames(mode, mode.end, { key: "endScope" });
  mode.end = _rewriteBackreferences(mode.end, { joinWith: "" });
}
function scopeSugar(mode) {
  if (mode.scope && typeof mode.scope === "object" && mode.scope !== null) {
    mode.beginScope = mode.scope;
    delete mode.scope;
  }
}
function MultiClass(mode) {
  scopeSugar(mode);
  if (typeof mode.beginScope === "string") {
    mode.beginScope = { _wrap: mode.beginScope };
  }
  if (typeof mode.endScope === "string") {
    mode.endScope = { _wrap: mode.endScope };
  }
  beginMultiClass(mode);
  endMultiClass(mode);
}
function compileLanguage(language) {
  function langRe(value, global2) {
    return new RegExp(
      source(value),
      "m" + (language.case_insensitive ? "i" : "") + (language.unicodeRegex ? "u" : "") + (global2 ? "g" : "")
    );
  }
  class MultiRegex {
    constructor() {
      this.matchIndexes = {};
      this.regexes = [];
      this.matchAt = 1;
      this.position = 0;
    }
    // @ts-ignore
    addRule(re, opts) {
      opts.position = this.position++;
      this.matchIndexes[this.matchAt] = opts;
      this.regexes.push([opts, re]);
      this.matchAt += countMatchGroups(re) + 1;
    }
    compile() {
      if (this.regexes.length === 0) {
        this.exec = () => null;
      }
      const terminators = this.regexes.map((el) => el[1]);
      this.matcherRe = langRe(_rewriteBackreferences(terminators, { joinWith: "|" }), true);
      this.lastIndex = 0;
    }
    /** @param {string} s */
    exec(s) {
      this.matcherRe.lastIndex = this.lastIndex;
      const match = this.matcherRe.exec(s);
      if (!match) {
        return null;
      }
      const i = match.findIndex((el, i2) => i2 > 0 && el !== void 0);
      const matchData = this.matchIndexes[i];
      match.splice(0, i);
      return Object.assign(match, matchData);
    }
  }
  class ResumableMultiRegex {
    constructor() {
      this.rules = [];
      this.multiRegexes = [];
      this.count = 0;
      this.lastIndex = 0;
      this.regexIndex = 0;
    }
    // @ts-ignore
    getMatcher(index) {
      if (this.multiRegexes[index])
        return this.multiRegexes[index];
      const matcher = new MultiRegex();
      this.rules.slice(index).forEach(([re, opts]) => matcher.addRule(re, opts));
      matcher.compile();
      this.multiRegexes[index] = matcher;
      return matcher;
    }
    resumingScanAtSamePosition() {
      return this.regexIndex !== 0;
    }
    considerAll() {
      this.regexIndex = 0;
    }
    // @ts-ignore
    addRule(re, opts) {
      this.rules.push([re, opts]);
      if (opts.type === "begin")
        this.count++;
    }
    /** @param {string} s */
    exec(s) {
      const m = this.getMatcher(this.regexIndex);
      m.lastIndex = this.lastIndex;
      let result = m.exec(s);
      if (this.resumingScanAtSamePosition()) {
        if (result && result.index === this.lastIndex)
          ;
        else {
          const m2 = this.getMatcher(0);
          m2.lastIndex = this.lastIndex + 1;
          result = m2.exec(s);
        }
      }
      if (result) {
        this.regexIndex += result.position + 1;
        if (this.regexIndex === this.count) {
          this.considerAll();
        }
      }
      return result;
    }
  }
  function buildModeRegex(mode) {
    const mm = new ResumableMultiRegex();
    mode.contains.forEach((term) => mm.addRule(term.begin, { rule: term, type: "begin" }));
    if (mode.terminatorEnd) {
      mm.addRule(mode.terminatorEnd, { type: "end" });
    }
    if (mode.illegal) {
      mm.addRule(mode.illegal, { type: "illegal" });
    }
    return mm;
  }
  function compileMode(mode, parent) {
    const cmode = (
      /** @type CompiledMode */
      mode
    );
    if (mode.isCompiled)
      return cmode;
    [
      scopeClassName,
      // do this early so compiler extensions generally don't have to worry about
      // the distinction between match/begin
      compileMatch,
      MultiClass,
      beforeMatchExt
    ].forEach((ext) => ext(mode, parent));
    language.compilerExtensions.forEach((ext) => ext(mode, parent));
    mode.__beforeBegin = null;
    [
      beginKeywords,
      // do this later so compiler extensions that come earlier have access to the
      // raw array if they wanted to perhaps manipulate it, etc.
      compileIllegal,
      // default to 1 relevance if not specified
      compileRelevance
    ].forEach((ext) => ext(mode, parent));
    mode.isCompiled = true;
    let keywordPattern = null;
    if (typeof mode.keywords === "object" && mode.keywords.$pattern) {
      mode.keywords = Object.assign({}, mode.keywords);
      keywordPattern = mode.keywords.$pattern;
      delete mode.keywords.$pattern;
    }
    keywordPattern = keywordPattern || /\w+/;
    if (mode.keywords) {
      mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
    }
    cmode.keywordPatternRe = langRe(keywordPattern, true);
    if (parent) {
      if (!mode.begin)
        mode.begin = /\B|\b/;
      cmode.beginRe = langRe(cmode.begin);
      if (!mode.end && !mode.endsWithParent)
        mode.end = /\B|\b/;
      if (mode.end)
        cmode.endRe = langRe(cmode.end);
      cmode.terminatorEnd = source(cmode.end) || "";
      if (mode.endsWithParent && parent.terminatorEnd) {
        cmode.terminatorEnd += (mode.end ? "|" : "") + parent.terminatorEnd;
      }
    }
    if (mode.illegal)
      cmode.illegalRe = langRe(
        /** @type {RegExp | string} */
        mode.illegal
      );
    if (!mode.contains)
      mode.contains = [];
    mode.contains = [].concat(...mode.contains.map(function(c) {
      return expandOrCloneMode(c === "self" ? mode : c);
    }));
    mode.contains.forEach(function(c) {
      compileMode(
        /** @type Mode */
        c,
        cmode
      );
    });
    if (mode.starts) {
      compileMode(mode.starts, parent);
    }
    cmode.matcher = buildModeRegex(cmode);
    return cmode;
  }
  if (!language.compilerExtensions)
    language.compilerExtensions = [];
  if (language.contains && language.contains.includes("self")) {
    throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
  }
  language.classNameAliases = inherit$1(language.classNameAliases || {});
  return compileMode(
    /** @type Mode */
    language
  );
}
function dependencyOnParent(mode) {
  if (!mode)
    return false;
  return mode.endsWithParent || dependencyOnParent(mode.starts);
}
function expandOrCloneMode(mode) {
  if (mode.variants && !mode.cachedVariants) {
    mode.cachedVariants = mode.variants.map(function(variant) {
      return inherit$1(mode, { variants: null }, variant);
    });
  }
  if (mode.cachedVariants) {
    return mode.cachedVariants;
  }
  if (dependencyOnParent(mode)) {
    return inherit$1(mode, { starts: mode.starts ? inherit$1(mode.starts) : null });
  }
  if (Object.isFrozen(mode)) {
    return inherit$1(mode);
  }
  return mode;
}
var version = "11.9.0";
class HTMLInjectionError extends Error {
  constructor(reason, html) {
    super(reason);
    this.name = "HTMLInjectionError";
    this.html = html;
  }
}
const escape = escapeHTML;
const inherit = inherit$1;
const NO_MATCH = Symbol("nomatch");
const MAX_KEYWORD_HITS = 7;
const HLJS = function(hljs) {
  const languages = /* @__PURE__ */ Object.create(null);
  const aliases = /* @__PURE__ */ Object.create(null);
  const plugins = [];
  let SAFE_MODE = true;
  const LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
  const PLAINTEXT_LANGUAGE = { disableAutodetect: true, name: "Plain text", contains: [] };
  let options = {
    ignoreUnescapedHTML: false,
    throwUnescapedHTML: false,
    noHighlightRe: /^(no-?highlight)$/i,
    languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
    classPrefix: "hljs-",
    cssSelector: "pre code",
    languages: null,
    // beta configuration options, subject to change, welcome to discuss
    // https://github.com/highlightjs/highlight.js/issues/1086
    __emitter: TokenTreeEmitter
  };
  function shouldNotHighlight(languageName) {
    return options.noHighlightRe.test(languageName);
  }
  function blockLanguage(block) {
    let classes = block.className + " ";
    classes += block.parentNode ? block.parentNode.className : "";
    const match = options.languageDetectRe.exec(classes);
    if (match) {
      const language = getLanguage(match[1]);
      if (!language) {
        warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
        warn("Falling back to no-highlight mode for this block.", block);
      }
      return language ? match[1] : "no-highlight";
    }
    return classes.split(/\s+/).find((_class) => shouldNotHighlight(_class) || getLanguage(_class));
  }
  function highlight2(codeOrLanguageName, optionsOrCode, ignoreIllegals) {
    let code = "";
    let languageName = "";
    if (typeof optionsOrCode === "object") {
      code = codeOrLanguageName;
      ignoreIllegals = optionsOrCode.ignoreIllegals;
      languageName = optionsOrCode.language;
    } else {
      deprecated("10.7.0", "highlight(lang, code, ...args) has been deprecated.");
      deprecated("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277");
      languageName = codeOrLanguageName;
      code = optionsOrCode;
    }
    if (ignoreIllegals === void 0) {
      ignoreIllegals = true;
    }
    const context = {
      code,
      language: languageName
    };
    fire("before:highlight", context);
    const result = context.result ? context.result : _highlight(context.language, context.code, ignoreIllegals);
    result.code = context.code;
    fire("after:highlight", result);
    return result;
  }
  function _highlight(languageName, codeToHighlight, ignoreIllegals, continuation) {
    const keywordHits = /* @__PURE__ */ Object.create(null);
    function keywordData(mode, matchText) {
      return mode.keywords[matchText];
    }
    function processKeywords() {
      if (!top.keywords) {
        emitter.addText(modeBuffer);
        return;
      }
      let lastIndex = 0;
      top.keywordPatternRe.lastIndex = 0;
      let match = top.keywordPatternRe.exec(modeBuffer);
      let buf = "";
      while (match) {
        buf += modeBuffer.substring(lastIndex, match.index);
        const word = language.case_insensitive ? match[0].toLowerCase() : match[0];
        const data = keywordData(top, word);
        if (data) {
          const [kind, keywordRelevance] = data;
          emitter.addText(buf);
          buf = "";
          keywordHits[word] = (keywordHits[word] || 0) + 1;
          if (keywordHits[word] <= MAX_KEYWORD_HITS)
            relevance += keywordRelevance;
          if (kind.startsWith("_")) {
            buf += match[0];
          } else {
            const cssClass = language.classNameAliases[kind] || kind;
            emitKeyword(match[0], cssClass);
          }
        } else {
          buf += match[0];
        }
        lastIndex = top.keywordPatternRe.lastIndex;
        match = top.keywordPatternRe.exec(modeBuffer);
      }
      buf += modeBuffer.substring(lastIndex);
      emitter.addText(buf);
    }
    function processSubLanguage() {
      if (modeBuffer === "")
        return;
      let result2 = null;
      if (typeof top.subLanguage === "string") {
        if (!languages[top.subLanguage]) {
          emitter.addText(modeBuffer);
          return;
        }
        result2 = _highlight(top.subLanguage, modeBuffer, true, continuations[top.subLanguage]);
        continuations[top.subLanguage] = /** @type {CompiledMode} */
        result2._top;
      } else {
        result2 = highlightAuto(modeBuffer, top.subLanguage.length ? top.subLanguage : null);
      }
      if (top.relevance > 0) {
        relevance += result2.relevance;
      }
      emitter.__addSublanguage(result2._emitter, result2.language);
    }
    function processBuffer() {
      if (top.subLanguage != null) {
        processSubLanguage();
      } else {
        processKeywords();
      }
      modeBuffer = "";
    }
    function emitKeyword(keyword, scope) {
      if (keyword === "")
        return;
      emitter.startScope(scope);
      emitter.addText(keyword);
      emitter.endScope();
    }
    function emitMultiClass(scope, match) {
      let i = 1;
      const max2 = match.length - 1;
      while (i <= max2) {
        if (!scope._emit[i]) {
          i++;
          continue;
        }
        const klass = language.classNameAliases[scope[i]] || scope[i];
        const text2 = match[i];
        if (klass) {
          emitKeyword(text2, klass);
        } else {
          modeBuffer = text2;
          processKeywords();
          modeBuffer = "";
        }
        i++;
      }
    }
    function startNewMode(mode, match) {
      if (mode.scope && typeof mode.scope === "string") {
        emitter.openNode(language.classNameAliases[mode.scope] || mode.scope);
      }
      if (mode.beginScope) {
        if (mode.beginScope._wrap) {
          emitKeyword(modeBuffer, language.classNameAliases[mode.beginScope._wrap] || mode.beginScope._wrap);
          modeBuffer = "";
        } else if (mode.beginScope._multi) {
          emitMultiClass(mode.beginScope, match);
          modeBuffer = "";
        }
      }
      top = Object.create(mode, { parent: { value: top } });
      return top;
    }
    function endOfMode(mode, match, matchPlusRemainder) {
      let matched = startsWith(mode.endRe, matchPlusRemainder);
      if (matched) {
        if (mode["on:end"]) {
          const resp = new Response(mode);
          mode["on:end"](match, resp);
          if (resp.isMatchIgnored)
            matched = false;
        }
        if (matched) {
          while (mode.endsParent && mode.parent) {
            mode = mode.parent;
          }
          return mode;
        }
      }
      if (mode.endsWithParent) {
        return endOfMode(mode.parent, match, matchPlusRemainder);
      }
    }
    function doIgnore(lexeme) {
      if (top.matcher.regexIndex === 0) {
        modeBuffer += lexeme[0];
        return 1;
      } else {
        resumeScanAtSamePosition = true;
        return 0;
      }
    }
    function doBeginMatch(match) {
      const lexeme = match[0];
      const newMode = match.rule;
      const resp = new Response(newMode);
      const beforeCallbacks = [newMode.__beforeBegin, newMode["on:begin"]];
      for (const cb of beforeCallbacks) {
        if (!cb)
          continue;
        cb(match, resp);
        if (resp.isMatchIgnored)
          return doIgnore(lexeme);
      }
      if (newMode.skip) {
        modeBuffer += lexeme;
      } else {
        if (newMode.excludeBegin) {
          modeBuffer += lexeme;
        }
        processBuffer();
        if (!newMode.returnBegin && !newMode.excludeBegin) {
          modeBuffer = lexeme;
        }
      }
      startNewMode(newMode, match);
      return newMode.returnBegin ? 0 : lexeme.length;
    }
    function doEndMatch(match) {
      const lexeme = match[0];
      const matchPlusRemainder = codeToHighlight.substring(match.index);
      const endMode = endOfMode(top, match, matchPlusRemainder);
      if (!endMode) {
        return NO_MATCH;
      }
      const origin = top;
      if (top.endScope && top.endScope._wrap) {
        processBuffer();
        emitKeyword(lexeme, top.endScope._wrap);
      } else if (top.endScope && top.endScope._multi) {
        processBuffer();
        emitMultiClass(top.endScope, match);
      } else if (origin.skip) {
        modeBuffer += lexeme;
      } else {
        if (!(origin.returnEnd || origin.excludeEnd)) {
          modeBuffer += lexeme;
        }
        processBuffer();
        if (origin.excludeEnd) {
          modeBuffer = lexeme;
        }
      }
      do {
        if (top.scope) {
          emitter.closeNode();
        }
        if (!top.skip && !top.subLanguage) {
          relevance += top.relevance;
        }
        top = top.parent;
      } while (top !== endMode.parent);
      if (endMode.starts) {
        startNewMode(endMode.starts, match);
      }
      return origin.returnEnd ? 0 : lexeme.length;
    }
    function processContinuations() {
      const list = [];
      for (let current = top; current !== language; current = current.parent) {
        if (current.scope) {
          list.unshift(current.scope);
        }
      }
      list.forEach((item) => emitter.openNode(item));
    }
    let lastMatch = {};
    function processLexeme(textBeforeMatch, match) {
      const lexeme = match && match[0];
      modeBuffer += textBeforeMatch;
      if (lexeme == null) {
        processBuffer();
        return 0;
      }
      if (lastMatch.type === "begin" && match.type === "end" && lastMatch.index === match.index && lexeme === "") {
        modeBuffer += codeToHighlight.slice(match.index, match.index + 1);
        if (!SAFE_MODE) {
          const err = new Error(`0 width match regex (${languageName})`);
          err.languageName = languageName;
          err.badRule = lastMatch.rule;
          throw err;
        }
        return 1;
      }
      lastMatch = match;
      if (match.type === "begin") {
        return doBeginMatch(match);
      } else if (match.type === "illegal" && !ignoreIllegals) {
        const err = new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.scope || "<unnamed>") + '"');
        err.mode = top;
        throw err;
      } else if (match.type === "end") {
        const processed = doEndMatch(match);
        if (processed !== NO_MATCH) {
          return processed;
        }
      }
      if (match.type === "illegal" && lexeme === "") {
        return 1;
      }
      if (iterations > 1e5 && iterations > match.index * 3) {
        const err = new Error("potential infinite loop, way more iterations than matches");
        throw err;
      }
      modeBuffer += lexeme;
      return lexeme.length;
    }
    const language = getLanguage(languageName);
    if (!language) {
      error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
      throw new Error('Unknown language: "' + languageName + '"');
    }
    const md = compileLanguage(language);
    let result = "";
    let top = continuation || md;
    const continuations = {};
    const emitter = new options.__emitter(options);
    processContinuations();
    let modeBuffer = "";
    let relevance = 0;
    let index = 0;
    let iterations = 0;
    let resumeScanAtSamePosition = false;
    try {
      if (!language.__emitTokens) {
        top.matcher.considerAll();
        for (; ; ) {
          iterations++;
          if (resumeScanAtSamePosition) {
            resumeScanAtSamePosition = false;
          } else {
            top.matcher.considerAll();
          }
          top.matcher.lastIndex = index;
          const match = top.matcher.exec(codeToHighlight);
          if (!match)
            break;
          const beforeMatch = codeToHighlight.substring(index, match.index);
          const processedCount = processLexeme(beforeMatch, match);
          index = match.index + processedCount;
        }
        processLexeme(codeToHighlight.substring(index));
      } else {
        language.__emitTokens(codeToHighlight, emitter);
      }
      emitter.finalize();
      result = emitter.toHTML();
      return {
        language: languageName,
        value: result,
        relevance,
        illegal: false,
        _emitter: emitter,
        _top: top
      };
    } catch (err) {
      if (err.message && err.message.includes("Illegal")) {
        return {
          language: languageName,
          value: escape(codeToHighlight),
          illegal: true,
          relevance: 0,
          _illegalBy: {
            message: err.message,
            index,
            context: codeToHighlight.slice(index - 100, index + 100),
            mode: err.mode,
            resultSoFar: result
          },
          _emitter: emitter
        };
      } else if (SAFE_MODE) {
        return {
          language: languageName,
          value: escape(codeToHighlight),
          illegal: false,
          relevance: 0,
          errorRaised: err,
          _emitter: emitter,
          _top: top
        };
      } else {
        throw err;
      }
    }
  }
  function justTextHighlightResult(code) {
    const result = {
      value: escape(code),
      illegal: false,
      relevance: 0,
      _top: PLAINTEXT_LANGUAGE,
      _emitter: new options.__emitter(options)
    };
    result._emitter.addText(code);
    return result;
  }
  function highlightAuto(code, languageSubset) {
    languageSubset = languageSubset || options.languages || Object.keys(languages);
    const plaintext = justTextHighlightResult(code);
    const results = languageSubset.filter(getLanguage).filter(autoDetection).map(
      (name) => _highlight(name, code, false)
    );
    results.unshift(plaintext);
    const sorted = results.sort((a, b) => {
      if (a.relevance !== b.relevance)
        return b.relevance - a.relevance;
      if (a.language && b.language) {
        if (getLanguage(a.language).supersetOf === b.language) {
          return 1;
        } else if (getLanguage(b.language).supersetOf === a.language) {
          return -1;
        }
      }
      return 0;
    });
    const [best, secondBest] = sorted;
    const result = best;
    result.secondBest = secondBest;
    return result;
  }
  function updateClassName(element2, currentLang, resultLang) {
    const language = currentLang && aliases[currentLang] || resultLang;
    element2.classList.add("hljs");
    element2.classList.add(`language-${language}`);
  }
  function highlightElement(element2) {
    let node = null;
    const language = blockLanguage(element2);
    if (shouldNotHighlight(language))
      return;
    fire(
      "before:highlightElement",
      { el: element2, language }
    );
    if (element2.dataset.highlighted) {
      console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", element2);
      return;
    }
    if (element2.children.length > 0) {
      if (!options.ignoreUnescapedHTML) {
        console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk.");
        console.warn("https://github.com/highlightjs/highlight.js/wiki/security");
        console.warn("The element with unescaped HTML:");
        console.warn(element2);
      }
      if (options.throwUnescapedHTML) {
        const err = new HTMLInjectionError(
          "One of your code blocks includes unescaped HTML.",
          element2.innerHTML
        );
        throw err;
      }
    }
    node = element2;
    const text2 = node.textContent;
    const result = language ? highlight2(text2, { language, ignoreIllegals: true }) : highlightAuto(text2);
    element2.innerHTML = result.value;
    element2.dataset.highlighted = "yes";
    updateClassName(element2, language, result.language);
    element2.result = {
      language: result.language,
      // TODO: remove with version 11.0
      re: result.relevance,
      relevance: result.relevance
    };
    if (result.secondBest) {
      element2.secondBest = {
        language: result.secondBest.language,
        relevance: result.secondBest.relevance
      };
    }
    fire("after:highlightElement", { el: element2, result, text: text2 });
  }
  function configure(userOptions) {
    options = inherit(options, userOptions);
  }
  const initHighlighting = () => {
    highlightAll();
    deprecated("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
  };
  function initHighlightingOnLoad() {
    highlightAll();
    deprecated("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
  }
  let wantsHighlight = false;
  function highlightAll() {
    if (document.readyState === "loading") {
      wantsHighlight = true;
      return;
    }
    const blocks = document.querySelectorAll(options.cssSelector);
    blocks.forEach(highlightElement);
  }
  function boot() {
    if (wantsHighlight)
      highlightAll();
  }
  if (typeof window !== "undefined" && window.addEventListener) {
    window.addEventListener("DOMContentLoaded", boot, false);
  }
  function registerLanguage(languageName, languageDefinition) {
    let lang = null;
    try {
      lang = languageDefinition(hljs);
    } catch (error$1) {
      error("Language definition for '{}' could not be registered.".replace("{}", languageName));
      if (!SAFE_MODE) {
        throw error$1;
      } else {
        error(error$1);
      }
      lang = PLAINTEXT_LANGUAGE;
    }
    if (!lang.name)
      lang.name = languageName;
    languages[languageName] = lang;
    lang.rawDefinition = languageDefinition.bind(null, hljs);
    if (lang.aliases) {
      registerAliases(lang.aliases, { languageName });
    }
  }
  function unregisterLanguage(languageName) {
    delete languages[languageName];
    for (const alias of Object.keys(aliases)) {
      if (aliases[alias] === languageName) {
        delete aliases[alias];
      }
    }
  }
  function listLanguages() {
    return Object.keys(languages);
  }
  function getLanguage(name) {
    name = (name || "").toLowerCase();
    return languages[name] || languages[aliases[name]];
  }
  function registerAliases(aliasList, { languageName }) {
    if (typeof aliasList === "string") {
      aliasList = [aliasList];
    }
    aliasList.forEach((alias) => {
      aliases[alias.toLowerCase()] = languageName;
    });
  }
  function autoDetection(name) {
    const lang = getLanguage(name);
    return lang && !lang.disableAutodetect;
  }
  function upgradePluginAPI(plugin) {
    if (plugin["before:highlightBlock"] && !plugin["before:highlightElement"]) {
      plugin["before:highlightElement"] = (data) => {
        plugin["before:highlightBlock"](
          Object.assign({ block: data.el }, data)
        );
      };
    }
    if (plugin["after:highlightBlock"] && !plugin["after:highlightElement"]) {
      plugin["after:highlightElement"] = (data) => {
        plugin["after:highlightBlock"](
          Object.assign({ block: data.el }, data)
        );
      };
    }
  }
  function addPlugin(plugin) {
    upgradePluginAPI(plugin);
    plugins.push(plugin);
  }
  function removePlugin(plugin) {
    const index = plugins.indexOf(plugin);
    if (index !== -1) {
      plugins.splice(index, 1);
    }
  }
  function fire(event, args) {
    const cb = event;
    plugins.forEach(function(plugin) {
      if (plugin[cb]) {
        plugin[cb](args);
      }
    });
  }
  function deprecateHighlightBlock(el) {
    deprecated("10.7.0", "highlightBlock will be removed entirely in v12.0");
    deprecated("10.7.0", "Please use highlightElement now.");
    return highlightElement(el);
  }
  Object.assign(hljs, {
    highlight: highlight2,
    highlightAuto,
    highlightAll,
    highlightElement,
    // TODO: Remove with v12 API
    highlightBlock: deprecateHighlightBlock,
    configure,
    initHighlighting,
    initHighlightingOnLoad,
    registerLanguage,
    unregisterLanguage,
    listLanguages,
    getLanguage,
    registerAliases,
    autoDetection,
    inherit,
    addPlugin,
    removePlugin
  });
  hljs.debugMode = function() {
    SAFE_MODE = false;
  };
  hljs.safeMode = function() {
    SAFE_MODE = true;
  };
  hljs.versionString = version;
  hljs.regex = {
    concat,
    lookahead,
    either,
    optional,
    anyNumberOfTimes
  };
  for (const key in MODES$1) {
    if (typeof MODES$1[key] === "object") {
      deepFreeze(MODES$1[key]);
    }
  }
  Object.assign(hljs, MODES$1);
  return hljs;
};
const highlight = HLJS({});
highlight.newInstance = () => HLJS({});
var core = highlight;
highlight.HighlightJS = highlight;
highlight.default = highlight;
const HighlightJS = /* @__PURE__ */ getDefaultExportFromCjs(core);
function xml(hljs) {
  const regex = hljs.regex;
  const TAG_NAME_RE = regex.concat(/[\p{L}_]/u, regex.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u);
  const XML_IDENT_RE = /[\p{L}0-9._:-]+/u;
  const XML_ENTITIES = {
    className: "symbol",
    begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
  };
  const XML_META_KEYWORDS = {
    begin: /\s/,
    contains: [
      {
        className: "keyword",
        begin: /#?[a-z_][a-z1-9_-]+/,
        illegal: /\n/
      }
    ]
  };
  const XML_META_PAR_KEYWORDS = hljs.inherit(XML_META_KEYWORDS, {
    begin: /\(/,
    end: /\)/
  });
  const APOS_META_STRING_MODE = hljs.inherit(hljs.APOS_STRING_MODE, { className: "string" });
  const QUOTE_META_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, { className: "string" });
  const TAG_INTERNALS = {
    endsWithParent: true,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: "attr",
        begin: XML_IDENT_RE,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: "string",
            endsParent: true,
            variants: [
              {
                begin: /"/,
                end: /"/,
                contains: [XML_ENTITIES]
              },
              {
                begin: /'/,
                end: /'/,
                contains: [XML_ENTITIES]
              },
              { begin: /[^\s"'=<>`]+/ }
            ]
          }
        ]
      }
    ]
  };
  return {
    name: "HTML, XML",
    aliases: [
      "html",
      "xhtml",
      "rss",
      "atom",
      "xjb",
      "xsd",
      "xsl",
      "plist",
      "wsf",
      "svg"
    ],
    case_insensitive: true,
    unicodeRegex: true,
    contains: [
      {
        className: "meta",
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          XML_META_KEYWORDS,
          QUOTE_META_STRING_MODE,
          APOS_META_STRING_MODE,
          XML_META_PAR_KEYWORDS,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: "meta",
                begin: /<![a-z]/,
                end: />/,
                contains: [
                  XML_META_KEYWORDS,
                  XML_META_PAR_KEYWORDS,
                  QUOTE_META_STRING_MODE,
                  APOS_META_STRING_MODE
                ]
              }
            ]
          }
        ]
      },
      hljs.COMMENT(
        /<!--/,
        /-->/,
        { relevance: 10 }
      ),
      {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      },
      XML_ENTITIES,
      // xml processing instructions
      {
        className: "meta",
        end: /\?>/,
        variants: [
          {
            begin: /<\?xml/,
            relevance: 10,
            contains: [
              QUOTE_META_STRING_MODE
            ]
          },
          {
            begin: /<\?[a-z][a-z0-9]+/
          }
        ]
      },
      {
        className: "tag",
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending bracket.
        */
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: { name: "style" },
        contains: [TAG_INTERNALS],
        starts: {
          end: /<\/style>/,
          returnEnd: true,
          subLanguage: [
            "css",
            "xml"
          ]
        }
      },
      {
        className: "tag",
        // See the comment in the <style tag about the lookahead pattern
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: { name: "script" },
        contains: [TAG_INTERNALS],
        starts: {
          end: /<\/script>/,
          returnEnd: true,
          subLanguage: [
            "javascript",
            "handlebars",
            "xml"
          ]
        }
      },
      // we need this for now for jSX
      {
        className: "tag",
        begin: /<>|<\/>/
      },
      // open tag
      {
        className: "tag",
        begin: regex.concat(
          /</,
          regex.lookahead(regex.concat(
            TAG_NAME_RE,
            // <tag/>
            // <tag>
            // <tag ...
            regex.either(/\/>/, />/, /\s/)
          ))
        ),
        end: /\/?>/,
        contains: [
          {
            className: "name",
            begin: TAG_NAME_RE,
            relevance: 0,
            starts: TAG_INTERNALS
          }
        ]
      },
      // close tag
      {
        className: "tag",
        begin: regex.concat(
          /<\//,
          regex.lookahead(regex.concat(
            TAG_NAME_RE,
            />/
          ))
        ),
        contains: [
          {
            className: "name",
            begin: TAG_NAME_RE,
            relevance: 0
          },
          {
            begin: />/,
            relevance: 0,
            endsParent: true
          }
        ]
      }
    ]
  };
}
const MODES = (hljs) => {
  return {
    IMPORTANT: {
      scope: "meta",
      begin: "!important"
    },
    BLOCK_COMMENT: hljs.C_BLOCK_COMMENT_MODE,
    HEXCOLOR: {
      scope: "number",
      begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
    },
    FUNCTION_DISPATCH: {
      className: "built_in",
      begin: /[\w-]+(?=\()/
    },
    ATTRIBUTE_SELECTOR_MODE: {
      scope: "selector-attr",
      begin: /\[/,
      end: /\]/,
      illegal: "$",
      contains: [
        hljs.APOS_STRING_MODE,
        hljs.QUOTE_STRING_MODE
      ]
    },
    CSS_NUMBER_MODE: {
      scope: "number",
      begin: hljs.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      relevance: 0
    },
    CSS_VARIABLE: {
      className: "attr",
      begin: /--[A-Za-z_][A-Za-z0-9_-]*/
    }
  };
};
const TAGS = [
  "a",
  "abbr",
  "address",
  "article",
  "aside",
  "audio",
  "b",
  "blockquote",
  "body",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "dd",
  "del",
  "details",
  "dfn",
  "div",
  "dl",
  "dt",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "mark",
  "menu",
  "nav",
  "object",
  "ol",
  "p",
  "q",
  "quote",
  "samp",
  "section",
  "span",
  "strong",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "ul",
  "var",
  "video"
];
const MEDIA_FEATURES = [
  "any-hover",
  "any-pointer",
  "aspect-ratio",
  "color",
  "color-gamut",
  "color-index",
  "device-aspect-ratio",
  "device-height",
  "device-width",
  "display-mode",
  "forced-colors",
  "grid",
  "height",
  "hover",
  "inverted-colors",
  "monochrome",
  "orientation",
  "overflow-block",
  "overflow-inline",
  "pointer",
  "prefers-color-scheme",
  "prefers-contrast",
  "prefers-reduced-motion",
  "prefers-reduced-transparency",
  "resolution",
  "scan",
  "scripting",
  "update",
  "width",
  // TODO: find a better solution?
  "min-width",
  "max-width",
  "min-height",
  "max-height"
];
const PSEUDO_CLASSES = [
  "active",
  "any-link",
  "blank",
  "checked",
  "current",
  "default",
  "defined",
  "dir",
  // dir()
  "disabled",
  "drop",
  "empty",
  "enabled",
  "first",
  "first-child",
  "first-of-type",
  "fullscreen",
  "future",
  "focus",
  "focus-visible",
  "focus-within",
  "has",
  // has()
  "host",
  // host or host()
  "host-context",
  // host-context()
  "hover",
  "indeterminate",
  "in-range",
  "invalid",
  "is",
  // is()
  "lang",
  // lang()
  "last-child",
  "last-of-type",
  "left",
  "link",
  "local-link",
  "not",
  // not()
  "nth-child",
  // nth-child()
  "nth-col",
  // nth-col()
  "nth-last-child",
  // nth-last-child()
  "nth-last-col",
  // nth-last-col()
  "nth-last-of-type",
  //nth-last-of-type()
  "nth-of-type",
  //nth-of-type()
  "only-child",
  "only-of-type",
  "optional",
  "out-of-range",
  "past",
  "placeholder-shown",
  "read-only",
  "read-write",
  "required",
  "right",
  "root",
  "scope",
  "target",
  "target-within",
  "user-invalid",
  "valid",
  "visited",
  "where"
  // where()
];
const PSEUDO_ELEMENTS = [
  "after",
  "backdrop",
  "before",
  "cue",
  "cue-region",
  "first-letter",
  "first-line",
  "grammar-error",
  "marker",
  "part",
  "placeholder",
  "selection",
  "slotted",
  "spelling-error"
];
const ATTRIBUTES = [
  "align-content",
  "align-items",
  "align-self",
  "all",
  "animation",
  "animation-delay",
  "animation-direction",
  "animation-duration",
  "animation-fill-mode",
  "animation-iteration-count",
  "animation-name",
  "animation-play-state",
  "animation-timing-function",
  "backface-visibility",
  "background",
  "background-attachment",
  "background-blend-mode",
  "background-clip",
  "background-color",
  "background-image",
  "background-origin",
  "background-position",
  "background-repeat",
  "background-size",
  "block-size",
  "border",
  "border-block",
  "border-block-color",
  "border-block-end",
  "border-block-end-color",
  "border-block-end-style",
  "border-block-end-width",
  "border-block-start",
  "border-block-start-color",
  "border-block-start-style",
  "border-block-start-width",
  "border-block-style",
  "border-block-width",
  "border-bottom",
  "border-bottom-color",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-bottom-style",
  "border-bottom-width",
  "border-collapse",
  "border-color",
  "border-image",
  "border-image-outset",
  "border-image-repeat",
  "border-image-slice",
  "border-image-source",
  "border-image-width",
  "border-inline",
  "border-inline-color",
  "border-inline-end",
  "border-inline-end-color",
  "border-inline-end-style",
  "border-inline-end-width",
  "border-inline-start",
  "border-inline-start-color",
  "border-inline-start-style",
  "border-inline-start-width",
  "border-inline-style",
  "border-inline-width",
  "border-left",
  "border-left-color",
  "border-left-style",
  "border-left-width",
  "border-radius",
  "border-right",
  "border-right-color",
  "border-right-style",
  "border-right-width",
  "border-spacing",
  "border-style",
  "border-top",
  "border-top-color",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-top-style",
  "border-top-width",
  "border-width",
  "bottom",
  "box-decoration-break",
  "box-shadow",
  "box-sizing",
  "break-after",
  "break-before",
  "break-inside",
  "caption-side",
  "caret-color",
  "clear",
  "clip",
  "clip-path",
  "clip-rule",
  "color",
  "column-count",
  "column-fill",
  "column-gap",
  "column-rule",
  "column-rule-color",
  "column-rule-style",
  "column-rule-width",
  "column-span",
  "column-width",
  "columns",
  "contain",
  "content",
  "content-visibility",
  "counter-increment",
  "counter-reset",
  "cue",
  "cue-after",
  "cue-before",
  "cursor",
  "direction",
  "display",
  "empty-cells",
  "filter",
  "flex",
  "flex-basis",
  "flex-direction",
  "flex-flow",
  "flex-grow",
  "flex-shrink",
  "flex-wrap",
  "float",
  "flow",
  "font",
  "font-display",
  "font-family",
  "font-feature-settings",
  "font-kerning",
  "font-language-override",
  "font-size",
  "font-size-adjust",
  "font-smoothing",
  "font-stretch",
  "font-style",
  "font-synthesis",
  "font-variant",
  "font-variant-caps",
  "font-variant-east-asian",
  "font-variant-ligatures",
  "font-variant-numeric",
  "font-variant-position",
  "font-variation-settings",
  "font-weight",
  "gap",
  "glyph-orientation-vertical",
  "grid",
  "grid-area",
  "grid-auto-columns",
  "grid-auto-flow",
  "grid-auto-rows",
  "grid-column",
  "grid-column-end",
  "grid-column-start",
  "grid-gap",
  "grid-row",
  "grid-row-end",
  "grid-row-start",
  "grid-template",
  "grid-template-areas",
  "grid-template-columns",
  "grid-template-rows",
  "hanging-punctuation",
  "height",
  "hyphens",
  "icon",
  "image-orientation",
  "image-rendering",
  "image-resolution",
  "ime-mode",
  "inline-size",
  "isolation",
  "justify-content",
  "left",
  "letter-spacing",
  "line-break",
  "line-height",
  "list-style",
  "list-style-image",
  "list-style-position",
  "list-style-type",
  "margin",
  "margin-block",
  "margin-block-end",
  "margin-block-start",
  "margin-bottom",
  "margin-inline",
  "margin-inline-end",
  "margin-inline-start",
  "margin-left",
  "margin-right",
  "margin-top",
  "marks",
  "mask",
  "mask-border",
  "mask-border-mode",
  "mask-border-outset",
  "mask-border-repeat",
  "mask-border-slice",
  "mask-border-source",
  "mask-border-width",
  "mask-clip",
  "mask-composite",
  "mask-image",
  "mask-mode",
  "mask-origin",
  "mask-position",
  "mask-repeat",
  "mask-size",
  "mask-type",
  "max-block-size",
  "max-height",
  "max-inline-size",
  "max-width",
  "min-block-size",
  "min-height",
  "min-inline-size",
  "min-width",
  "mix-blend-mode",
  "nav-down",
  "nav-index",
  "nav-left",
  "nav-right",
  "nav-up",
  "none",
  "normal",
  "object-fit",
  "object-position",
  "opacity",
  "order",
  "orphans",
  "outline",
  "outline-color",
  "outline-offset",
  "outline-style",
  "outline-width",
  "overflow",
  "overflow-wrap",
  "overflow-x",
  "overflow-y",
  "padding",
  "padding-block",
  "padding-block-end",
  "padding-block-start",
  "padding-bottom",
  "padding-inline",
  "padding-inline-end",
  "padding-inline-start",
  "padding-left",
  "padding-right",
  "padding-top",
  "page-break-after",
  "page-break-before",
  "page-break-inside",
  "pause",
  "pause-after",
  "pause-before",
  "perspective",
  "perspective-origin",
  "pointer-events",
  "position",
  "quotes",
  "resize",
  "rest",
  "rest-after",
  "rest-before",
  "right",
  "row-gap",
  "scroll-margin",
  "scroll-margin-block",
  "scroll-margin-block-end",
  "scroll-margin-block-start",
  "scroll-margin-bottom",
  "scroll-margin-inline",
  "scroll-margin-inline-end",
  "scroll-margin-inline-start",
  "scroll-margin-left",
  "scroll-margin-right",
  "scroll-margin-top",
  "scroll-padding",
  "scroll-padding-block",
  "scroll-padding-block-end",
  "scroll-padding-block-start",
  "scroll-padding-bottom",
  "scroll-padding-inline",
  "scroll-padding-inline-end",
  "scroll-padding-inline-start",
  "scroll-padding-left",
  "scroll-padding-right",
  "scroll-padding-top",
  "scroll-snap-align",
  "scroll-snap-stop",
  "scroll-snap-type",
  "scrollbar-color",
  "scrollbar-gutter",
  "scrollbar-width",
  "shape-image-threshold",
  "shape-margin",
  "shape-outside",
  "speak",
  "speak-as",
  "src",
  // @font-face
  "tab-size",
  "table-layout",
  "text-align",
  "text-align-all",
  "text-align-last",
  "text-combine-upright",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-line",
  "text-decoration-style",
  "text-emphasis",
  "text-emphasis-color",
  "text-emphasis-position",
  "text-emphasis-style",
  "text-indent",
  "text-justify",
  "text-orientation",
  "text-overflow",
  "text-rendering",
  "text-shadow",
  "text-transform",
  "text-underline-position",
  "top",
  "transform",
  "transform-box",
  "transform-origin",
  "transform-style",
  "transition",
  "transition-delay",
  "transition-duration",
  "transition-property",
  "transition-timing-function",
  "unicode-bidi",
  "vertical-align",
  "visibility",
  "voice-balance",
  "voice-duration",
  "voice-family",
  "voice-pitch",
  "voice-range",
  "voice-rate",
  "voice-stress",
  "voice-volume",
  "white-space",
  "widows",
  "width",
  "will-change",
  "word-break",
  "word-spacing",
  "word-wrap",
  "writing-mode",
  "z-index"
  // reverse makes sure longer attributes `font-weight` are matched fully
  // instead of getting false positives on say `font`
].reverse();
function css(hljs) {
  const regex = hljs.regex;
  const modes = MODES(hljs);
  const VENDOR_PREFIX = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ };
  const AT_MODIFIERS = "and or not only";
  const AT_PROPERTY_RE = /@-?\w[\w]*(-\w+)*/;
  const IDENT_RE2 = "[a-zA-Z-][a-zA-Z0-9_-]*";
  const STRINGS = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE
  ];
  return {
    name: "CSS",
    case_insensitive: true,
    illegal: /[=|'\$]/,
    keywords: { keyframePosition: "from to" },
    classNameAliases: {
      // for visual continuity with `tag {}` and because we
      // don't have a great class for this?
      keyframePosition: "selector-tag"
    },
    contains: [
      modes.BLOCK_COMMENT,
      VENDOR_PREFIX,
      // to recognize keyframe 40% etc which are outside the scope of our
      // attribute value mode
      modes.CSS_NUMBER_MODE,
      {
        className: "selector-id",
        begin: /#[A-Za-z0-9_-]+/,
        relevance: 0
      },
      {
        className: "selector-class",
        begin: "\\." + IDENT_RE2,
        relevance: 0
      },
      modes.ATTRIBUTE_SELECTOR_MODE,
      {
        className: "selector-pseudo",
        variants: [
          { begin: ":(" + PSEUDO_CLASSES.join("|") + ")" },
          { begin: ":(:)?(" + PSEUDO_ELEMENTS.join("|") + ")" }
        ]
      },
      // we may actually need this (12/2020)
      // { // pseudo-selector params
      //   begin: /\(/,
      //   end: /\)/,
      //   contains: [ hljs.CSS_NUMBER_MODE ]
      // },
      modes.CSS_VARIABLE,
      {
        className: "attribute",
        begin: "\\b(" + ATTRIBUTES.join("|") + ")\\b"
      },
      // attribute values
      {
        begin: /:/,
        end: /[;}{]/,
        contains: [
          modes.BLOCK_COMMENT,
          modes.HEXCOLOR,
          modes.IMPORTANT,
          modes.CSS_NUMBER_MODE,
          ...STRINGS,
          // needed to highlight these as strings and to avoid issues with
          // illegal characters that might be inside urls that would tigger the
          // languages illegal stack
          {
            begin: /(url|data-uri)\(/,
            end: /\)/,
            relevance: 0,
            // from keywords
            keywords: { built_in: "url data-uri" },
            contains: [
              ...STRINGS,
              {
                className: "string",
                // any character other than `)` as in `url()` will be the start
                // of a string, which ends with `)` (from the parent mode)
                begin: /[^)]/,
                endsWithParent: true,
                excludeEnd: true
              }
            ]
          },
          modes.FUNCTION_DISPATCH
        ]
      },
      {
        begin: regex.lookahead(/@/),
        end: "[{;]",
        relevance: 0,
        illegal: /:/,
        // break on Less variables @var: ...
        contains: [
          {
            className: "keyword",
            begin: AT_PROPERTY_RE
          },
          {
            begin: /\s/,
            endsWithParent: true,
            excludeEnd: true,
            relevance: 0,
            keywords: {
              $pattern: /[a-z-]+/,
              keyword: AT_MODIFIERS,
              attribute: MEDIA_FEATURES.join(" ")
            },
            contains: [
              {
                begin: /[a-z-]+(?=:)/,
                className: "attribute"
              },
              ...STRINGS,
              modes.CSS_NUMBER_MODE
            ]
          }
        ]
      },
      {
        className: "selector-tag",
        begin: "\\b(" + TAGS.join("|") + ")\\b"
      }
    ]
  };
}
function json(hljs) {
  const ATTRIBUTE = {
    className: "attr",
    begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
    relevance: 1.01
  };
  const PUNCTUATION = {
    match: /[{}[\],:]/,
    className: "punctuation",
    relevance: 0
  };
  const LITERALS2 = [
    "true",
    "false",
    "null"
  ];
  const LITERALS_MODE = {
    scope: "literal",
    beginKeywords: LITERALS2.join(" ")
  };
  return {
    name: "JSON",
    keywords: {
      literal: LITERALS2
    },
    contains: [
      ATTRIBUTE,
      PUNCTUATION,
      hljs.QUOTE_STRING_MODE,
      LITERALS_MODE,
      hljs.C_NUMBER_MODE,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE
    ],
    illegal: "\\S"
  };
}
const IDENT_RE$1 = "[A-Za-z$_][0-9A-Za-z$_]*";
const KEYWORDS$1 = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends"
];
const LITERALS$1 = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
];
const TYPES$1 = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
];
const ERROR_TYPES$1 = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
];
const BUILT_IN_GLOBALS$1 = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
];
const BUILT_IN_VARIABLES$1 = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
];
const BUILT_INS$1 = [].concat(
  BUILT_IN_GLOBALS$1,
  TYPES$1,
  ERROR_TYPES$1
);
function javascript$1(hljs) {
  const regex = hljs.regex;
  const hasClosingTag = (match, { after }) => {
    const tag = "</" + match[0].slice(1);
    const pos = match.input.indexOf(tag, after);
    return pos !== -1;
  };
  const IDENT_RE$1$1 = IDENT_RE$1;
  const FRAGMENT = {
    begin: "<>",
    end: "</>"
  };
  const XML_SELF_CLOSING = /<[A-Za-z0-9\\._:-]+\s*\/>/;
  const XML_TAG = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (match, response) => {
      const afterMatchIndex = match[0].length + match.index;
      const nextChar = match.input[afterMatchIndex];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        nextChar === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        nextChar === ","
      ) {
        response.ignoreMatch();
        return;
      }
      if (nextChar === ">") {
        if (!hasClosingTag(match, { after: afterMatchIndex })) {
          response.ignoreMatch();
        }
      }
      let m;
      const afterMatch = match.input.substring(afterMatchIndex);
      if (m = afterMatch.match(/^\s*=/)) {
        response.ignoreMatch();
        return;
      }
      if (m = afterMatch.match(/^\s+extends\s+/)) {
        if (m.index === 0) {
          response.ignoreMatch();
          return;
        }
      }
    }
  };
  const KEYWORDS$1$1 = {
    $pattern: IDENT_RE$1,
    keyword: KEYWORDS$1,
    literal: LITERALS$1,
    built_in: BUILT_INS$1,
    "variable.language": BUILT_IN_VARIABLES$1
  };
  const decimalDigits = "[0-9](_?[0-9])*";
  const frac = `\\.(${decimalDigits})`;
  const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
  const NUMBER = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${decimalInteger})((${frac})|\\.)?|(${frac}))[eE][+-]?(${decimalDigits})\\b` },
      { begin: `\\b(${decimalInteger})\\b((${frac})\\b|\\.)?|(${frac})\\b` },
      // DecimalBigIntegerLiteral
      { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  };
  const SUBST = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: KEYWORDS$1$1,
    contains: []
    // defined later
  };
  const HTML_TEMPLATE = {
    begin: "html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: "xml"
    }
  };
  const CSS_TEMPLATE = {
    begin: "css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: "css"
    }
  };
  const GRAPHQL_TEMPLATE = {
    begin: "gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: "graphql"
    }
  };
  const TEMPLATE_STRING = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      hljs.BACKSLASH_ESCAPE,
      SUBST
    ]
  };
  const JSDOC_COMMENT = hljs.COMMENT(
    /\/\*\*(?!\/)/,
    "\\*/",
    {
      relevance: 0,
      contains: [
        {
          begin: "(?=@[A-Za-z]+)",
          relevance: 0,
          contains: [
            {
              className: "doctag",
              begin: "@[A-Za-z]+"
            },
            {
              className: "type",
              begin: "\\{",
              end: "\\}",
              excludeEnd: true,
              excludeBegin: true,
              relevance: 0
            },
            {
              className: "variable",
              begin: IDENT_RE$1$1 + "(?=\\s*(-)|$)",
              endsParent: true,
              relevance: 0
            },
            // eat spaces (not newlines) so we can find
            // types or variables
            {
              begin: /(?=[^\n])\s/,
              relevance: 0
            }
          ]
        }
      ]
    }
  );
  const COMMENT2 = {
    className: "comment",
    variants: [
      JSDOC_COMMENT,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.C_LINE_COMMENT_MODE
    ]
  };
  const SUBST_INTERNALS = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    HTML_TEMPLATE,
    CSS_TEMPLATE,
    GRAPHQL_TEMPLATE,
    TEMPLATE_STRING,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    NUMBER
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  SUBST.contains = SUBST_INTERNALS.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: KEYWORDS$1$1,
    contains: [
      "self"
    ].concat(SUBST_INTERNALS)
  });
  const SUBST_AND_COMMENTS = [].concat(COMMENT2, SUBST.contains);
  const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
    // eat recursive parens in sub expressions
    {
      begin: /\(/,
      end: /\)/,
      keywords: KEYWORDS$1$1,
      contains: ["self"].concat(SUBST_AND_COMMENTS)
    }
  ]);
  const PARAMS = {
    className: "params",
    begin: /\(/,
    end: /\)/,
    excludeBegin: true,
    excludeEnd: true,
    keywords: KEYWORDS$1$1,
    contains: PARAMS_CONTAINS
  };
  const CLASS_OR_EXTENDS = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          IDENT_RE$1$1,
          /\s+/,
          /extends/,
          /\s+/,
          regex.concat(IDENT_RE$1$1, "(", regex.concat(/\./, IDENT_RE$1$1), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          IDENT_RE$1$1
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  };
  const CLASS_REFERENCE = {
    relevance: 0,
    match: regex.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...TYPES$1,
        ...ERROR_TYPES$1
      ]
    }
  };
  const USE_STRICT = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  };
  const FUNCTION_DEFINITION = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          IDENT_RE$1$1,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [PARAMS],
    illegal: /%/
  };
  const UPPER_CASE_CONSTANT = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function noneOf(list) {
    return regex.concat("(?!", list.join("|"), ")");
  }
  const FUNCTION_CALL = {
    match: regex.concat(
      /\b/,
      noneOf([
        ...BUILT_IN_GLOBALS$1,
        "super",
        "import"
      ]),
      IDENT_RE$1$1,
      regex.lookahead(/\(/)
    ),
    className: "title.function",
    relevance: 0
  };
  const PROPERTY_ACCESS = {
    begin: regex.concat(/\./, regex.lookahead(
      regex.concat(IDENT_RE$1$1, /(?![0-9A-Za-z$_(])/)
    )),
    end: IDENT_RE$1$1,
    excludeBegin: true,
    keywords: "prototype",
    className: "property",
    relevance: 0
  };
  const GETTER_OR_SETTER = {
    match: [
      /get|set/,
      /\s+/,
      IDENT_RE$1$1,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      PARAMS
    ]
  };
  const FUNC_LEAD_IN_RE = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + hljs.UNDERSCORE_IDENT_RE + ")\\s*=>";
  const FUNCTION_VARIABLE = {
    match: [
      /const|var|let/,
      /\s+/,
      IDENT_RE$1$1,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      regex.lookahead(FUNC_LEAD_IN_RE)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      PARAMS
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: KEYWORDS$1$1,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS, CLASS_REFERENCE },
    illegal: /#(?![$_A-z])/,
    contains: [
      hljs.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      USE_STRICT,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      HTML_TEMPLATE,
      CSS_TEMPLATE,
      GRAPHQL_TEMPLATE,
      TEMPLATE_STRING,
      COMMENT2,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      NUMBER,
      CLASS_REFERENCE,
      {
        className: "attr",
        begin: IDENT_RE$1$1 + regex.lookahead(":"),
        relevance: 0
      },
      FUNCTION_VARIABLE,
      {
        // "value" container
        begin: "(" + hljs.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          COMMENT2,
          hljs.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: FUNC_LEAD_IN_RE,
            returnBegin: true,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: hljs.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: true
                  },
                  {
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: true,
                    excludeEnd: true,
                    keywords: KEYWORDS$1$1,
                    contains: PARAMS_CONTAINS
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: FRAGMENT.begin, end: FRAGMENT.end },
              { match: XML_SELF_CLOSING },
              {
                begin: XML_TAG.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": XML_TAG.isTrulyOpeningTag,
                end: XML_TAG.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: XML_TAG.begin,
                end: XML_TAG.end,
                skip: true,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      FUNCTION_DEFINITION,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + hljs.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: true,
        label: "func.def",
        contains: [
          PARAMS,
          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1$1, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      PROPERTY_ACCESS,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + IDENT_RE$1$1,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [PARAMS]
      },
      FUNCTION_CALL,
      UPPER_CASE_CONSTANT,
      CLASS_OR_EXTENDS,
      GETTER_OR_SETTER,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
const IDENT_RE = "[A-Za-z$_][0-9A-Za-z$_]*";
const KEYWORDS = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends"
];
const LITERALS = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
];
const TYPES = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
];
const ERROR_TYPES = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
];
const BUILT_IN_GLOBALS = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
];
const BUILT_IN_VARIABLES = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
];
const BUILT_INS = [].concat(
  BUILT_IN_GLOBALS,
  TYPES,
  ERROR_TYPES
);
function javascript(hljs) {
  const regex = hljs.regex;
  const hasClosingTag = (match, { after }) => {
    const tag = "</" + match[0].slice(1);
    const pos = match.input.indexOf(tag, after);
    return pos !== -1;
  };
  const IDENT_RE$12 = IDENT_RE;
  const FRAGMENT = {
    begin: "<>",
    end: "</>"
  };
  const XML_SELF_CLOSING = /<[A-Za-z0-9\\._:-]+\s*\/>/;
  const XML_TAG = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (match, response) => {
      const afterMatchIndex = match[0].length + match.index;
      const nextChar = match.input[afterMatchIndex];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        nextChar === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        nextChar === ","
      ) {
        response.ignoreMatch();
        return;
      }
      if (nextChar === ">") {
        if (!hasClosingTag(match, { after: afterMatchIndex })) {
          response.ignoreMatch();
        }
      }
      let m;
      const afterMatch = match.input.substring(afterMatchIndex);
      if (m = afterMatch.match(/^\s*=/)) {
        response.ignoreMatch();
        return;
      }
      if (m = afterMatch.match(/^\s+extends\s+/)) {
        if (m.index === 0) {
          response.ignoreMatch();
          return;
        }
      }
    }
  };
  const KEYWORDS$12 = {
    $pattern: IDENT_RE,
    keyword: KEYWORDS,
    literal: LITERALS,
    built_in: BUILT_INS,
    "variable.language": BUILT_IN_VARIABLES
  };
  const decimalDigits = "[0-9](_?[0-9])*";
  const frac = `\\.(${decimalDigits})`;
  const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
  const NUMBER = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${decimalInteger})((${frac})|\\.)?|(${frac}))[eE][+-]?(${decimalDigits})\\b` },
      { begin: `\\b(${decimalInteger})\\b((${frac})\\b|\\.)?|(${frac})\\b` },
      // DecimalBigIntegerLiteral
      { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  };
  const SUBST = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: KEYWORDS$12,
    contains: []
    // defined later
  };
  const HTML_TEMPLATE = {
    begin: "html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: "xml"
    }
  };
  const CSS_TEMPLATE = {
    begin: "css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: "css"
    }
  };
  const GRAPHQL_TEMPLATE = {
    begin: "gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: "graphql"
    }
  };
  const TEMPLATE_STRING = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      hljs.BACKSLASH_ESCAPE,
      SUBST
    ]
  };
  const JSDOC_COMMENT = hljs.COMMENT(
    /\/\*\*(?!\/)/,
    "\\*/",
    {
      relevance: 0,
      contains: [
        {
          begin: "(?=@[A-Za-z]+)",
          relevance: 0,
          contains: [
            {
              className: "doctag",
              begin: "@[A-Za-z]+"
            },
            {
              className: "type",
              begin: "\\{",
              end: "\\}",
              excludeEnd: true,
              excludeBegin: true,
              relevance: 0
            },
            {
              className: "variable",
              begin: IDENT_RE$12 + "(?=\\s*(-)|$)",
              endsParent: true,
              relevance: 0
            },
            // eat spaces (not newlines) so we can find
            // types or variables
            {
              begin: /(?=[^\n])\s/,
              relevance: 0
            }
          ]
        }
      ]
    }
  );
  const COMMENT2 = {
    className: "comment",
    variants: [
      JSDOC_COMMENT,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.C_LINE_COMMENT_MODE
    ]
  };
  const SUBST_INTERNALS = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    HTML_TEMPLATE,
    CSS_TEMPLATE,
    GRAPHQL_TEMPLATE,
    TEMPLATE_STRING,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    NUMBER
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  SUBST.contains = SUBST_INTERNALS.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: KEYWORDS$12,
    contains: [
      "self"
    ].concat(SUBST_INTERNALS)
  });
  const SUBST_AND_COMMENTS = [].concat(COMMENT2, SUBST.contains);
  const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
    // eat recursive parens in sub expressions
    {
      begin: /\(/,
      end: /\)/,
      keywords: KEYWORDS$12,
      contains: ["self"].concat(SUBST_AND_COMMENTS)
    }
  ]);
  const PARAMS = {
    className: "params",
    begin: /\(/,
    end: /\)/,
    excludeBegin: true,
    excludeEnd: true,
    keywords: KEYWORDS$12,
    contains: PARAMS_CONTAINS
  };
  const CLASS_OR_EXTENDS = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          IDENT_RE$12,
          /\s+/,
          /extends/,
          /\s+/,
          regex.concat(IDENT_RE$12, "(", regex.concat(/\./, IDENT_RE$12), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          IDENT_RE$12
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  };
  const CLASS_REFERENCE = {
    relevance: 0,
    match: regex.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...TYPES,
        ...ERROR_TYPES
      ]
    }
  };
  const USE_STRICT = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  };
  const FUNCTION_DEFINITION = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          IDENT_RE$12,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [PARAMS],
    illegal: /%/
  };
  const UPPER_CASE_CONSTANT = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function noneOf(list) {
    return regex.concat("(?!", list.join("|"), ")");
  }
  const FUNCTION_CALL = {
    match: regex.concat(
      /\b/,
      noneOf([
        ...BUILT_IN_GLOBALS,
        "super",
        "import"
      ]),
      IDENT_RE$12,
      regex.lookahead(/\(/)
    ),
    className: "title.function",
    relevance: 0
  };
  const PROPERTY_ACCESS = {
    begin: regex.concat(/\./, regex.lookahead(
      regex.concat(IDENT_RE$12, /(?![0-9A-Za-z$_(])/)
    )),
    end: IDENT_RE$12,
    excludeBegin: true,
    keywords: "prototype",
    className: "property",
    relevance: 0
  };
  const GETTER_OR_SETTER = {
    match: [
      /get|set/,
      /\s+/,
      IDENT_RE$12,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      PARAMS
    ]
  };
  const FUNC_LEAD_IN_RE = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + hljs.UNDERSCORE_IDENT_RE + ")\\s*=>";
  const FUNCTION_VARIABLE = {
    match: [
      /const|var|let/,
      /\s+/,
      IDENT_RE$12,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      regex.lookahead(FUNC_LEAD_IN_RE)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      PARAMS
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: KEYWORDS$12,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS, CLASS_REFERENCE },
    illegal: /#(?![$_A-z])/,
    contains: [
      hljs.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      USE_STRICT,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      HTML_TEMPLATE,
      CSS_TEMPLATE,
      GRAPHQL_TEMPLATE,
      TEMPLATE_STRING,
      COMMENT2,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      NUMBER,
      CLASS_REFERENCE,
      {
        className: "attr",
        begin: IDENT_RE$12 + regex.lookahead(":"),
        relevance: 0
      },
      FUNCTION_VARIABLE,
      {
        // "value" container
        begin: "(" + hljs.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          COMMENT2,
          hljs.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: FUNC_LEAD_IN_RE,
            returnBegin: true,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: hljs.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: true
                  },
                  {
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: true,
                    excludeEnd: true,
                    keywords: KEYWORDS$12,
                    contains: PARAMS_CONTAINS
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: FRAGMENT.begin, end: FRAGMENT.end },
              { match: XML_SELF_CLOSING },
              {
                begin: XML_TAG.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": XML_TAG.isTrulyOpeningTag,
                end: XML_TAG.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: XML_TAG.begin,
                end: XML_TAG.end,
                skip: true,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      FUNCTION_DEFINITION,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + hljs.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: true,
        label: "func.def",
        contains: [
          PARAMS,
          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$12, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      PROPERTY_ACCESS,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + IDENT_RE$12,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [PARAMS]
      },
      FUNCTION_CALL,
      UPPER_CASE_CONSTANT,
      CLASS_OR_EXTENDS,
      GETTER_OR_SETTER,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function typescript(hljs) {
  const tsLanguage = javascript(hljs);
  const IDENT_RE$12 = IDENT_RE;
  const TYPES2 = [
    "any",
    "void",
    "number",
    "boolean",
    "string",
    "object",
    "never",
    "symbol",
    "bigint",
    "unknown"
  ];
  const NAMESPACE = {
    beginKeywords: "namespace",
    end: /\{/,
    excludeEnd: true,
    contains: [tsLanguage.exports.CLASS_REFERENCE]
  };
  const INTERFACE = {
    beginKeywords: "interface",
    end: /\{/,
    excludeEnd: true,
    keywords: {
      keyword: "interface extends",
      built_in: TYPES2
    },
    contains: [tsLanguage.exports.CLASS_REFERENCE]
  };
  const USE_STRICT = {
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use strict['"]/
  };
  const TS_SPECIFIC_KEYWORDS = [
    "type",
    "namespace",
    "interface",
    "public",
    "private",
    "protected",
    "implements",
    "declare",
    "abstract",
    "readonly",
    "enum",
    "override"
  ];
  const KEYWORDS$12 = {
    $pattern: IDENT_RE,
    keyword: KEYWORDS.concat(TS_SPECIFIC_KEYWORDS),
    literal: LITERALS,
    built_in: BUILT_INS.concat(TYPES2),
    "variable.language": BUILT_IN_VARIABLES
  };
  const DECORATOR = {
    className: "meta",
    begin: "@" + IDENT_RE$12
  };
  const swapMode = (mode, label, replacement) => {
    const indx = mode.contains.findIndex((m) => m.label === label);
    if (indx === -1) {
      throw new Error("can not find mode to replace");
    }
    mode.contains.splice(indx, 1, replacement);
  };
  Object.assign(tsLanguage.keywords, KEYWORDS$12);
  tsLanguage.exports.PARAMS_CONTAINS.push(DECORATOR);
  tsLanguage.contains = tsLanguage.contains.concat([
    DECORATOR,
    NAMESPACE,
    INTERFACE
  ]);
  swapMode(tsLanguage, "shebang", hljs.SHEBANG());
  swapMode(tsLanguage, "use_strict", USE_STRICT);
  const functionDeclaration = tsLanguage.contains.find((m) => m.label === "func.def");
  functionDeclaration.relevance = 0;
  Object.assign(tsLanguage, {
    name: "TypeScript",
    aliases: [
      "ts",
      "tsx",
      "mts",
      "cts"
    ]
  });
  return tsLanguage;
}
function shell(hljs) {
  return {
    name: "Shell Session",
    aliases: [
      "console",
      "shellsession"
    ],
    contains: [
      {
        className: "meta.prompt",
        // We cannot add \s (spaces) in the regular expression otherwise it will be too broad and produce unexpected result.
        // For instance, in the following example, it would match "echo /path/to/home >" as a prompt:
        // echo /path/to/home > t.exe
        begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,
        starts: {
          end: /[^\\](?=\s*$)/,
          subLanguage: "bash"
        }
      }
    ]
  };
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[13] = list[i];
  child_ctx[15] = i;
  return child_ctx;
}
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[10] = list[i];
  return child_ctx;
}
function create_if_block_4(ctx) {
  let div;
  let ol;
  let each_value_1 = ensure_array_like(
    /*crumbs*/
    ctx[1]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  return {
    c() {
      div = element("div");
      ol = element("ol");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      ol = claim_element(div_nodes, "OL", { class: true });
      var ol_nodes = children(ol);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(ol_nodes);
      }
      ol_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(ol, "class", "breadcrumb card p-2");
      attr(div, "class", "pl-2 pt-2 pr-2");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, ol);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(ol, null);
        }
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*crumbs*/
      2) {
        each_value_1 = ensure_array_like(
          /*crumbs*/
          ctx2[1]
        );
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(ol, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_1.length;
      }
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_else_block(ctx) {
  let li;
  let t_value = (
    /*crumb*/
    ctx[13].label + ""
  );
  let t;
  return {
    c() {
      li = element("li");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      li = claim_element(nodes, "LI", { class: true });
      var li_nodes = children(li);
      t = claim_text(li_nodes, t_value);
      li_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(li, "class", "crumb");
    },
    m(target, anchor) {
      insert_hydration(target, li, anchor);
      append_hydration(li, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*crumbs*/
      2 && t_value !== (t_value = /*crumb*/
      ctx2[13].label + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching) {
        detach(li);
      }
    }
  };
}
function create_if_block_5(ctx) {
  let li0;
  let a;
  let t0_value = (
    /*crumb*/
    ctx[13].label + ""
  );
  let t0;
  let a_href_value;
  let t1;
  let li1;
  let textContent = "›";
  return {
    c() {
      li0 = element("li");
      a = element("a");
      t0 = text(t0_value);
      t1 = space();
      li1 = element("li");
      li1.textContent = textContent;
      this.h();
    },
    l(nodes) {
      li0 = claim_element(nodes, "LI", { class: true });
      var li0_nodes = children(li0);
      a = claim_element(li0_nodes, "A", { class: true, href: true });
      var a_nodes = children(a);
      t0 = claim_text(a_nodes, t0_value);
      a_nodes.forEach(detach);
      li0_nodes.forEach(detach);
      t1 = claim_space(nodes);
      li1 = claim_element(nodes, "LI", {
        class: true,
        "aria-hidden": true,
        ["data-svelte-h"]: true
      });
      if (get_svelte_dataset(li1) !== "svelte-16i7nlm")
        li1.textContent = textContent;
      this.h();
    },
    h() {
      attr(a, "class", "anchor");
      attr(a, "href", a_href_value = /*crumb*/
      ctx[13].href);
      attr(li0, "class", "crumb");
      attr(li1, "class", "crumb-separator");
      attr(li1, "aria-hidden", "");
    },
    m(target, anchor) {
      insert_hydration(target, li0, anchor);
      append_hydration(li0, a);
      append_hydration(a, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, li1, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*crumbs*/
      2 && t0_value !== (t0_value = /*crumb*/
      ctx2[13].label + ""))
        set_data(t0, t0_value);
      if (dirty & /*crumbs*/
      2 && a_href_value !== (a_href_value = /*crumb*/
      ctx2[13].href)) {
        attr(a, "href", a_href_value);
      }
    },
    d(detaching) {
      if (detaching) {
        detach(li0);
        detach(t1);
        detach(li1);
      }
    }
  };
}
function create_each_block_1(ctx) {
  let if_block_anchor;
  function select_block_type(ctx2, dirty) {
    if (
      /*i*/
      ctx2[15] < /*crumbs*/
      ctx2[1].length - 1
    )
      return create_if_block_5;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    d(detaching) {
      if (detaching) {
        detach(if_block_anchor);
      }
      if_block.d(detaching);
    }
  };
}
function create_if_block_3(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[7].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[8],
    null
  );
  return {
    c() {
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        256)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[8],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[8]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[8],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_default_slot_1(ctx) {
  let div1;
  let t;
  let div0;
  let current;
  let if_block0 = (
    /*crumbs*/
    ctx[1].length > 0 && create_if_block_4(ctx)
  );
  let if_block1 = (
    /*ready*/
    ctx[2] && create_if_block_3(ctx)
  );
  return {
    c() {
      div1 = element("div");
      if (if_block0)
        if_block0.c();
      t = space();
      div0 = element("div");
      if (if_block1)
        if_block1.c();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      if (if_block0)
        if_block0.l(div1_nodes);
      t = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if (if_block1)
        if_block1.l(div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "p-2 grow");
      attr(div1, "class", "flex flex-col h-full");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      if (if_block0)
        if_block0.m(div1, null);
      append_hydration(div1, t);
      append_hydration(div1, div0);
      if (if_block1)
        if_block1.m(div0, null);
      current = true;
    },
    p(ctx2, dirty) {
      if (
        /*crumbs*/
        ctx2[1].length > 0
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_4(ctx2);
          if_block0.c();
          if_block0.m(div1, t);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (
        /*ready*/
        ctx2[2]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*ready*/
          4) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_3(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div0, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div1);
      }
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
    }
  };
}
function create_default_slot(ctx) {
  let p;
  let textContent = "IdentityNow Starter Application";
  return {
    c() {
      p = element("p");
      p.textContent = textContent;
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(p) !== "svelte-u6prqd")
        p.textContent = textContent;
      this.h();
    },
    h() {
      attr(p, "class", "text-xl lg:!block hidden");
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(p);
      }
    }
  };
}
function create_if_block_2(ctx) {
  let button;
  let hamburgersvg;
  let current;
  let mounted;
  let dispose;
  hamburgersvg = new HamburgerSVG({ props: { class: "w-6 h-6" } });
  return {
    c() {
      button = element("button");
      create_component(hamburgersvg.$$.fragment);
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      claim_component(hamburgersvg.$$.fragment, button_nodes);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "class", "btn-icon btn-icon-sm lg:!hidden");
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      mount_component(hamburgersvg, button, null);
      current = true;
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*drawerOpen*/
          ctx[4]
        );
        mounted = true;
      }
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(hamburgersvg.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(hamburgersvg.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(button);
      }
      destroy_component(hamburgersvg);
      mounted = false;
      dispose();
    }
  };
}
function create_lead_slot(ctx) {
  let div;
  let t;
  let img;
  let img_src_value;
  let current;
  let if_block = (
    /*data*/
    ctx[0].tokenDetails && create_if_block_2(ctx)
  );
  return {
    c() {
      div = element("div");
      if (if_block)
        if_block.c();
      t = space();
      img = element("img");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (if_block)
        if_block.l(div_nodes);
      t = claim_space(div_nodes);
      img = claim_element(div_nodes, "IMG", { class: true, src: true, alt: true });
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(img, "class", "h-8 w-8");
      if (!src_url_equal(img.src, img_src_value = "/logo.ico"))
        attr(img, "src", img_src_value);
      attr(img, "alt", "SailPoint TetraSail");
      attr(div, "class", "flex items-center space-x-4");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (if_block)
        if_block.m(div, null);
      append_hydration(div, t);
      append_hydration(div, img);
      current = true;
    },
    p(ctx2, dirty) {
      if (
        /*data*/
        ctx2[0].tokenDetails
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*data*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_2(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div, t);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      if (if_block)
        if_block.d();
    }
  };
}
function create_if_block_1(ctx) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  let div7;
  let avatar0;
  let t0;
  let div6;
  let div0;
  let t1;
  let div5;
  let div4;
  let avatar1;
  let t2;
  let div3;
  let p;
  let t3_value = (
    /*data*/
    ((_b = (_a = ctx[0]) == null ? void 0 : _a.tokenDetails) == null ? void 0 : _b.user_name) + ""
  );
  let t3;
  let t4;
  let div1;
  let small0;
  let span0;
  let textContent = "Tenant:";
  let t6;
  let strong0;
  let t7_value = (
    /*data*/
    ((_d = (_c = ctx[0]) == null ? void 0 : _c.tokenDetails) == null ? void 0 : _d.org) + ""
  );
  let t7;
  let t8;
  let small1;
  let span1;
  let textContent_1 = "Pod:";
  let t10;
  let strong1;
  let t11_value = (
    /*data*/
    ((_f = (_e = ctx[0]) == null ? void 0 : _e.tokenDetails) == null ? void 0 : _f.pod) + ""
  );
  let t11;
  let t12;
  let small2;
  let textContent_2 = `<span class="opacity-50">Scopes:</span>`;
  let t14;
  let div2;
  let t15;
  let a;
  let textContent_3 = "Logout";
  let current;
  let mounted;
  let dispose;
  avatar0 = new Avatar({
    props: {
      initials: parseInitials(
        /*data*/
        (_h = (_g = ctx[0]) == null ? void 0 : _g.tokenDetails) == null ? void 0 : _h.user_name
      ),
      border: "hover:border-2 border-surface-300-600-token hover:!border-primary-500",
      cursor: "cursor-pointer",
      width: "w-10"
    }
  });
  avatar1 = new Avatar({
    props: {
      initials: parseInitials(
        /*data*/
        (_j = (_i = ctx[0]) == null ? void 0 : _i.tokenDetails) == null ? void 0 : _j.user_name
      ),
      width: "w-16"
    }
  });
  let each_value = ensure_array_like(
    /*data*/
    (_l = (_k = ctx[0]) == null ? void 0 : _k.tokenDetails) == null ? void 0 : _l.scope
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      div7 = element("div");
      create_component(avatar0.$$.fragment);
      t0 = space();
      div6 = element("div");
      div0 = element("div");
      t1 = space();
      div5 = element("div");
      div4 = element("div");
      create_component(avatar1.$$.fragment);
      t2 = space();
      div3 = element("div");
      p = element("p");
      t3 = text(t3_value);
      t4 = space();
      div1 = element("div");
      small0 = element("small");
      span0 = element("span");
      span0.textContent = textContent;
      t6 = space();
      strong0 = element("strong");
      t7 = text(t7_value);
      t8 = space();
      small1 = element("small");
      span1 = element("span");
      span1.textContent = textContent_1;
      t10 = space();
      strong1 = element("strong");
      t11 = text(t11_value);
      t12 = space();
      small2 = element("small");
      small2.innerHTML = textContent_2;
      t14 = space();
      div2 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t15 = space();
      a = element("a");
      a.textContent = textContent_3;
      this.h();
    },
    l(nodes) {
      div7 = claim_element(nodes, "DIV", { class: true });
      var div7_nodes = children(div7);
      claim_component(avatar0.$$.fragment, div7_nodes);
      t0 = claim_space(div7_nodes);
      div6 = claim_element(div7_nodes, "DIV", { class: true, "data-popup": true });
      var div6_nodes = children(div6);
      div0 = claim_element(div6_nodes, "DIV", { class: true });
      children(div0).forEach(detach);
      t1 = claim_space(div6_nodes);
      div5 = claim_element(div6_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      claim_component(avatar1.$$.fragment, div4_nodes);
      t2 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", {});
      var div3_nodes = children(div3);
      p = claim_element(div3_nodes, "P", { class: true });
      var p_nodes = children(p);
      t3 = claim_text(p_nodes, t3_value);
      p_nodes.forEach(detach);
      t4 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      small0 = claim_element(div1_nodes, "SMALL", {});
      var small0_nodes = children(small0);
      span0 = claim_element(small0_nodes, "SPAN", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(span0) !== "svelte-1n6iv9c")
        span0.textContent = textContent;
      t6 = claim_space(small0_nodes);
      strong0 = claim_element(small0_nodes, "STRONG", {});
      var strong0_nodes = children(strong0);
      t7 = claim_text(strong0_nodes, t7_value);
      strong0_nodes.forEach(detach);
      small0_nodes.forEach(detach);
      t8 = claim_space(div1_nodes);
      small1 = claim_element(div1_nodes, "SMALL", {});
      var small1_nodes = children(small1);
      span1 = claim_element(small1_nodes, "SPAN", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(span1) !== "svelte-1xersvb")
        span1.textContent = textContent_1;
      t10 = claim_space(small1_nodes);
      strong1 = claim_element(small1_nodes, "STRONG", {});
      var strong1_nodes = children(strong1);
      t11 = claim_text(strong1_nodes, t11_value);
      strong1_nodes.forEach(detach);
      small1_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t12 = claim_space(div3_nodes);
      small2 = claim_element(div3_nodes, "SMALL", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(small2) !== "svelte-emcw36")
        small2.innerHTML = textContent_2;
      t14 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div2_nodes);
      }
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      t15 = claim_space(div4_nodes);
      a = claim_element(div4_nodes, "A", {
        href: true,
        class: true,
        ["data-svelte-h"]: true
      });
      if (get_svelte_dataset(a) !== "svelte-1bzcp1l")
        a.textContent = textContent_3;
      div4_nodes.forEach(detach);
      div5_nodes.forEach(detach);
      div6_nodes.forEach(detach);
      div7_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "arrow bg-surface-50-900-token");
      attr(p, "class", "font-bold");
      attr(span0, "class", "opacity-50");
      attr(span1, "class", "opacity-50");
      attr(div1, "class", "flex flex-wrap gap-4");
      attr(div2, "class", "flex gap-4 flex-wrap");
      attr(a, "href", "/logout");
      attr(a, "class", "btn variant-soft w-full");
      attr(div4, "class", "space-y-4");
      attr(div5, "class", "flex flex-col gap-2");
      attr(div6, "class", "card p-4 w-72 !shadow-xl bg-surface-100-800-token");
      attr(div6, "data-popup", "popupAccount");
      attr(div7, "class", "rounded-full w-fit");
    },
    m(target, anchor) {
      insert_hydration(target, div7, anchor);
      mount_component(avatar0, div7, null);
      append_hydration(div7, t0);
      append_hydration(div7, div6);
      append_hydration(div6, div0);
      append_hydration(div6, t1);
      append_hydration(div6, div5);
      append_hydration(div5, div4);
      mount_component(avatar1, div4, null);
      append_hydration(div4, t2);
      append_hydration(div4, div3);
      append_hydration(div3, p);
      append_hydration(p, t3);
      append_hydration(div3, t4);
      append_hydration(div3, div1);
      append_hydration(div1, small0);
      append_hydration(small0, span0);
      append_hydration(small0, t6);
      append_hydration(small0, strong0);
      append_hydration(strong0, t7);
      append_hydration(div1, t8);
      append_hydration(div1, small1);
      append_hydration(small1, span1);
      append_hydration(small1, t10);
      append_hydration(small1, strong1);
      append_hydration(strong1, t11);
      append_hydration(div3, t12);
      append_hydration(div3, small2);
      append_hydration(div3, t14);
      append_hydration(div3, div2);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div2, null);
        }
      }
      append_hydration(div4, t15);
      append_hydration(div4, a);
      current = true;
      if (!mounted) {
        dispose = action_destroyer(popup.call(
          null,
          div7,
          /*popupAccount*/
          ctx[5]
        ));
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2;
      const avatar0_changes = {};
      if (dirty & /*data*/
      1)
        avatar0_changes.initials = parseInitials(
          /*data*/
          (_b2 = (_a2 = ctx2[0]) == null ? void 0 : _a2.tokenDetails) == null ? void 0 : _b2.user_name
        );
      avatar0.$set(avatar0_changes);
      const avatar1_changes = {};
      if (dirty & /*data*/
      1)
        avatar1_changes.initials = parseInitials(
          /*data*/
          (_d2 = (_c2 = ctx2[0]) == null ? void 0 : _c2.tokenDetails) == null ? void 0 : _d2.user_name
        );
      avatar1.$set(avatar1_changes);
      if ((!current || dirty & /*data*/
      1) && t3_value !== (t3_value = /*data*/
      ((_f2 = (_e2 = ctx2[0]) == null ? void 0 : _e2.tokenDetails) == null ? void 0 : _f2.user_name) + ""))
        set_data(t3, t3_value);
      if ((!current || dirty & /*data*/
      1) && t7_value !== (t7_value = /*data*/
      ((_h2 = (_g2 = ctx2[0]) == null ? void 0 : _g2.tokenDetails) == null ? void 0 : _h2.org) + ""))
        set_data(t7, t7_value);
      if ((!current || dirty & /*data*/
      1) && t11_value !== (t11_value = /*data*/
      ((_j2 = (_i2 = ctx2[0]) == null ? void 0 : _i2.tokenDetails) == null ? void 0 : _j2.pod) + ""))
        set_data(t11, t11_value);
      if (dirty & /*data*/
      1) {
        each_value = ensure_array_like(
          /*data*/
          (_l2 = (_k2 = ctx2[0]) == null ? void 0 : _k2.tokenDetails) == null ? void 0 : _l2.scope
        );
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div2, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(avatar0.$$.fragment, local);
      transition_in(avatar1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(avatar0.$$.fragment, local);
      transition_out(avatar1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div7);
      }
      destroy_component(avatar0);
      destroy_component(avatar1);
      destroy_each(each_blocks, detaching);
      mounted = false;
      dispose();
    }
  };
}
function create_each_block(ctx) {
  let small;
  let strong;
  let t_value = (
    /*scope*/
    ctx[10] + ""
  );
  let t;
  return {
    c() {
      small = element("small");
      strong = element("strong");
      t = text(t_value);
    },
    l(nodes) {
      small = claim_element(nodes, "SMALL", {});
      var small_nodes = children(small);
      strong = claim_element(small_nodes, "STRONG", {});
      children(strong).forEach(detach);
      t = claim_text(small_nodes, t_value);
      small_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, small, anchor);
      append_hydration(small, strong);
      append_hydration(small, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*data*/
      1 && t_value !== (t_value = /*scope*/
      ctx2[10] + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching) {
        detach(small);
      }
    }
  };
}
function create_trail_slot(ctx) {
  let lightswitch;
  let t;
  let if_block_anchor;
  let current;
  lightswitch = new LightSwitch({});
  let if_block = (
    /*data*/
    ctx[0].tokenDetails && create_if_block_1(ctx)
  );
  return {
    c() {
      create_component(lightswitch.$$.fragment);
      t = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      claim_component(lightswitch.$$.fragment, nodes);
      t = claim_space(nodes);
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      mount_component(lightswitch, target, anchor);
      insert_hydration(target, t, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (
        /*data*/
        ctx2[0].tokenDetails
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*data*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_1(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(lightswitch.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(lightswitch.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(t);
        detach(if_block_anchor);
      }
      destroy_component(lightswitch, detaching);
      if (if_block)
        if_block.d(detaching);
    }
  };
}
function create_header_slot(ctx) {
  let appbar;
  let current;
  appbar = new AppBar({
    props: {
      padding: "p-2",
      class: "h-![72px]",
      $$slots: {
        trail: [create_trail_slot],
        lead: [create_lead_slot],
        default: [create_default_slot]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(appbar.$$.fragment);
    },
    l(nodes) {
      claim_component(appbar.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(appbar, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const appbar_changes = {};
      if (dirty & /*$$scope, data*/
      257) {
        appbar_changes.$$scope = { dirty, ctx: ctx2 };
      }
      appbar.$set(appbar_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(appbar.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(appbar.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(appbar, detaching);
    }
  };
}
function create_if_block(ctx) {
  let sidebar;
  let current;
  sidebar = new Sidebar({
    props: { class: "hidden lg:grid overflow-hidden" }
  });
  return {
    c() {
      create_component(sidebar.$$.fragment);
    },
    l(nodes) {
      claim_component(sidebar.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(sidebar, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(sidebar.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(sidebar.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(sidebar, detaching);
    }
  };
}
function create_sidebarLeft_slot(ctx) {
  let if_block_anchor;
  let current;
  let if_block = (
    /*data*/
    ctx[0].tokenDetails && create_if_block()
  );
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (
        /*data*/
        ctx2[0].tokenDetails
      ) {
        if (if_block) {
          if (dirty & /*data*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block();
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(if_block_anchor);
      }
      if (if_block)
        if_block.d(detaching);
    }
  };
}
function create_fragment(ctx) {
  let modal;
  let t0;
  let sidebardrawer;
  let t1;
  let appshell;
  let current;
  modal = new Modal({
    props: { components: (
      /*modalRegistry*/
      ctx[3]
    ) }
  });
  sidebardrawer = new SidebarDrawer({});
  appshell = new AppShell({
    props: {
      $$slots: {
        sidebarLeft: [create_sidebarLeft_slot],
        header: [create_header_slot],
        default: [create_default_slot_1]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(modal.$$.fragment);
      t0 = space();
      create_component(sidebardrawer.$$.fragment);
      t1 = space();
      create_component(appshell.$$.fragment);
    },
    l(nodes) {
      claim_component(modal.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(sidebardrawer.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(appshell.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(modal, target, anchor);
      insert_hydration(target, t0, anchor);
      mount_component(sidebardrawer, target, anchor);
      insert_hydration(target, t1, anchor);
      mount_component(appshell, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const appshell_changes = {};
      if (dirty & /*$$scope, data, ready, crumbs*/
      263) {
        appshell_changes.$$scope = { dirty, ctx: ctx2 };
      }
      appshell.$set(appshell_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(modal.$$.fragment, local);
      transition_in(sidebardrawer.$$.fragment, local);
      transition_in(appshell.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(modal.$$.fragment, local);
      transition_out(sidebardrawer.$$.fragment, local);
      transition_out(appshell.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(t0);
        detach(t1);
      }
      destroy_component(modal, detaching);
      destroy_component(sidebardrawer, detaching);
      destroy_component(appshell, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $page;
  component_subscribe($$self, page, ($$value) => $$invalidate(6, $page = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  initializeStores();
  let ready = false;
  onMount(() => $$invalidate(2, ready = true));
  const modalRegistry = {
    // Set a unique modal ID, then pass the component reference
    codeBlockModal: { ref: CodeBlockModal }
  };
  storePopup.set({
    computePosition,
    autoUpdate,
    offset,
    shift,
    flip,
    arrow
  });
  let { data } = $$props;
  HighlightJS.registerLanguage("xml", xml);
  HighlightJS.registerLanguage("css", css);
  HighlightJS.registerLanguage("json", json);
  HighlightJS.registerLanguage("javascript", javascript$1);
  HighlightJS.registerLanguage("typescript", typescript);
  HighlightJS.registerLanguage("shell", shell);
  storeHighlightJs.set(HighlightJS);
  let crumbs = [];
  const drawerStore = getDrawerStore();
  function drawerOpen() {
    const s = { id: "doc-sidenav" };
    drawerStore.open(s);
  }
  const popupAccount = {
    // Represents the type of event that opens/closed the popup
    event: "click",
    // Matches the data-popup value on your popup element
    target: "popupAccount",
    // Defines which side of your trigger the popup will appear
    placement: "bottom"
  };
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(0, data = $$props2.data);
    if ("$$scope" in $$props2)
      $$invalidate(8, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$page, crumbs*/
    66) {
      {
        const tokens = $page.url.pathname.split("/").filter((t) => t !== "");
        let tokenPath = "";
        $$invalidate(1, crumbs = tokens.map((t) => {
          tokenPath += "/" + t;
          return {
            label: t.split("-").map((word) => capitalize(word)).join(" "),
            href: tokenPath
          };
        }));
        $$invalidate(1, crumbs = crumbs.filter((c) => c.label !== "Logout" && c.label !== "Callback"));
      }
    }
  };
  return [
    data,
    crumbs,
    ready,
    modalRegistry,
    drawerOpen,
    popupAccount,
    $page,
    slots,
    $$scope
  ];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { data: 0 });
  }
}
export {
  Layout as component
};
