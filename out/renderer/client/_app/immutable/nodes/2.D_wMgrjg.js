import { s as safe_not_equal, e as element, a as space, t as text, c as claim_element, b as children, h as get_svelte_dataset, f as claim_space, d as claim_text, g as detach, i as attr, j as insert_hydration, k as append_hydration, u as set_input_value, x as listen, W as action_destroyer, o as noop, y as run_all, m as component_subscribe } from "../chunks/scheduler.fBTsnP2i.js";
import { S as SvelteComponent, i as init } from "../chunks/index.DdnDjIf5.js";
import { p as parse, i as invalidateAll, a as applyAction } from "../chunks/entry.Cs_QM1XO.js";
import { l as localStorageStore } from "../chunks/ProgressBar.svelte_svelte_type_style_lang.DcCzH8ar.js";
const BROWSER = true;
const browser = BROWSER;
function deserialize(result) {
  const parsed = JSON.parse(result);
  if (parsed.data) {
    parsed.data = parse(parsed.data);
  }
  return parsed;
}
function clone(element2) {
  return (
    /** @type {T} */
    HTMLElement.prototype.cloneNode.call(element2)
  );
}
function enhance(form_element, submit = () => {
}) {
  const fallback_callback = async ({
    action,
    result,
    reset = true,
    invalidateAll: shouldInvalidateAll = true
  }) => {
    if (result.type === "success") {
      if (reset) {
        HTMLFormElement.prototype.reset.call(form_element);
      }
      if (shouldInvalidateAll) {
        await invalidateAll();
      }
    }
    if (location.origin + location.pathname === action.origin + action.pathname || result.type === "redirect" || result.type === "error") {
      applyAction(result);
    }
  };
  async function handle_submit(event) {
    var _a, _b, _c, _d;
    const method = ((_a = event.submitter) == null ? void 0 : _a.hasAttribute("formmethod")) ? (
      /** @type {HTMLButtonElement | HTMLInputElement} */
      event.submitter.formMethod
    ) : clone(form_element).method;
    if (method !== "post")
      return;
    event.preventDefault();
    const action = new URL(
      // We can't do submitter.formAction directly because that property is always set
      ((_b = event.submitter) == null ? void 0 : _b.hasAttribute("formaction")) ? (
        /** @type {HTMLButtonElement | HTMLInputElement} */
        event.submitter.formAction
      ) : clone(form_element).action
    );
    const form_data = new FormData(form_element);
    const submitter_name = (_c = event.submitter) == null ? void 0 : _c.getAttribute("name");
    if (submitter_name) {
      form_data.append(submitter_name, ((_d = event.submitter) == null ? void 0 : _d.getAttribute("value")) ?? "");
    }
    const controller = new AbortController();
    let cancelled = false;
    const cancel = () => cancelled = true;
    const callback = await submit({
      action,
      cancel,
      controller,
      formData: form_data,
      formElement: form_element,
      submitter: event.submitter
    }) ?? fallback_callback;
    if (cancelled)
      return;
    let result;
    try {
      const response = await fetch(action, {
        method: "POST",
        headers: {
          accept: "application/json",
          "x-sveltekit-action": "true"
        },
        cache: "no-store",
        body: form_data,
        signal: controller.signal
      });
      result = deserialize(await response.text());
      if (result.type === "error")
        result.status = response.status;
    } catch (error) {
      if (
        /** @type {any} */
        (error == null ? void 0 : error.name) === "AbortError"
      )
        return;
      result = { type: "error", error };
    }
    callback({
      action,
      formData: form_data,
      formElement: form_element,
      update: (opts) => fallback_callback({
        action,
        result,
        reset: opts == null ? void 0 : opts.reset,
        invalidateAll: opts == null ? void 0 : opts.invalidateAll
      }),
      // @ts-expect-error generic constraints stuff we don't care about
      result
    });
  }
  HTMLFormElement.prototype.addEventListener.call(form_element, "submit", handle_submit);
  return {
    destroy() {
      HTMLFormElement.prototype.removeEventListener.call(form_element, "submit", handle_submit);
    }
  };
}
function create_fragment(ctx) {
  let main;
  let div0;
  let textContent = `<img class="h-12 min-w-[590px]" src="/SailPoint-Developer-Community-Lockup.png" alt="sailPoint Logo"/>`;
  let t0;
  let div2;
  let div1;
  let textContent_1 = "Enter your tenant information to continue";
  let t2;
  let form;
  let label0;
  let t3;
  let input0;
  let t4;
  let label1;
  let t5;
  let input1;
  let t6;
  let label2;
  let t7;
  let input2;
  let t8;
  let label3;
  let t9;
  let input3;
  let t10;
  let button;
  let textContent_2 = "Login";
  let mounted;
  let dispose;
  return {
    c() {
      main = element("main");
      div0 = element("div");
      div0.innerHTML = textContent;
      t0 = space();
      div2 = element("div");
      div1 = element("div");
      div1.textContent = textContent_1;
      t2 = space();
      form = element("form");
      label0 = element("label");
      t3 = text("Tenant\r\n				");
      input0 = element("input");
      t4 = space();
      label1 = element("label");
      t5 = text("Domain\r\n				");
      input1 = element("input");
      t6 = space();
      label2 = element("label");
      t7 = text("API Base URL\r\n				");
      input2 = element("input");
      t8 = space();
      label3 = element("label");
      t9 = text("Tenant URL\r\n				");
      input3 = element("input");
      t10 = space();
      button = element("button");
      button.textContent = textContent_2;
      this.h();
    },
    l(nodes) {
      main = claim_element(nodes, "MAIN", { class: true });
      var main_nodes = children(main);
      div0 = claim_element(main_nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div0) !== "svelte-ldyvpw")
        div0.innerHTML = textContent;
      t0 = claim_space(main_nodes);
      div2 = claim_element(main_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div1) !== "svelte-mv3ikv")
        div1.textContent = textContent_1;
      t2 = claim_space(div2_nodes);
      form = claim_element(div2_nodes, "FORM", { method: true, class: true });
      var form_nodes = children(form);
      label0 = claim_element(form_nodes, "LABEL", { class: true });
      var label0_nodes = children(label0);
      t3 = claim_text(label0_nodes, "Tenant\r\n				");
      input0 = claim_element(label0_nodes, "INPUT", {
        name: true,
        placeholder: true,
        class: true
      });
      label0_nodes.forEach(detach);
      t4 = claim_space(form_nodes);
      label1 = claim_element(form_nodes, "LABEL", { class: true });
      var label1_nodes = children(label1);
      t5 = claim_text(label1_nodes, "Domain\r\n				");
      input1 = claim_element(label1_nodes, "INPUT", {
        name: true,
        placeholder: true,
        class: true
      });
      label1_nodes.forEach(detach);
      t6 = claim_space(form_nodes);
      label2 = claim_element(form_nodes, "LABEL", { class: true });
      var label2_nodes = children(label2);
      t7 = claim_text(label2_nodes, "API Base URL\r\n				");
      input2 = claim_element(label2_nodes, "INPUT", {
        name: true,
        placeholder: true,
        class: true
      });
      label2_nodes.forEach(detach);
      t8 = claim_space(form_nodes);
      label3 = claim_element(form_nodes, "LABEL", { class: true });
      var label3_nodes = children(label3);
      t9 = claim_text(label3_nodes, "Tenant URL\r\n				");
      input3 = claim_element(label3_nodes, "INPUT", {
        name: true,
        placeholder: true,
        class: true
      });
      label3_nodes.forEach(detach);
      t10 = claim_space(form_nodes);
      button = claim_element(form_nodes, "BUTTON", {
        type: true,
        class: true,
        ["data-svelte-h"]: true
      });
      if (get_svelte_dataset(button) !== "svelte-15b9f0n")
        button.textContent = textContent_2;
      form_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      main_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "flex flex-row justify-center");
      attr(div1, "class", "text-2xl text-center py-2");
      attr(input0, "name", "tenant");
      attr(input0, "placeholder", `tenant`);
      attr(input0, "class", "input p-2");
      attr(label0, "class", "");
      attr(input1, "name", "domain");
      attr(input1, "placeholder", `identitynow`);
      attr(input1, "class", "input p-2");
      attr(label1, "class", "");
      attr(input2, "name", "baseUrl");
      attr(input2, "placeholder", `https://${/*tenant*/
      ctx[4]}.api.${/*domain*/
      ctx[5]}.com`);
      attr(input2, "class", "input p-2");
      attr(label2, "class", "");
      attr(input3, "name", "tenantUrl");
      attr(input3, "placeholder", `https://${/*tenant*/
      ctx[4]}.identitynow.com`);
      attr(input3, "class", "input p-2");
      attr(label3, "class", "");
      attr(button, "type", "submit");
      attr(button, "class", "btn variant-filled-primary w-full mt-2 !text-white text-lg");
      attr(form, "method", "POST");
      attr(form, "class", "flex flex-col gap-4");
      attr(div2, "class", "");
      attr(main, "class", "p-32 h-full");
    },
    m(target, anchor) {
      insert_hydration(target, main, anchor);
      append_hydration(main, div0);
      append_hydration(main, t0);
      append_hydration(main, div2);
      append_hydration(div2, div1);
      append_hydration(div2, t2);
      append_hydration(div2, form);
      append_hydration(form, label0);
      append_hydration(label0, t3);
      append_hydration(label0, input0);
      set_input_value(
        input0,
        /*$tenant*/
        ctx[1]
      );
      append_hydration(form, t4);
      append_hydration(form, label1);
      append_hydration(label1, t5);
      append_hydration(label1, input1);
      set_input_value(
        input1,
        /*$domain*/
        ctx[0]
      );
      append_hydration(form, t6);
      append_hydration(form, label2);
      append_hydration(label2, t7);
      append_hydration(label2, input2);
      set_input_value(
        input2,
        /*$baseUrl*/
        ctx[2]
      );
      append_hydration(form, t8);
      append_hydration(form, label3);
      append_hydration(label3, t9);
      append_hydration(label3, input3);
      set_input_value(
        input3,
        /*$tenantUrl*/
        ctx[3]
      );
      append_hydration(form, t10);
      append_hydration(form, button);
      if (!mounted) {
        dispose = [
          listen(
            input0,
            "input",
            /*input0_input_handler*/
            ctx[8]
          ),
          listen(
            input1,
            "input",
            /*input1_input_handler*/
            ctx[9]
          ),
          listen(
            input2,
            "input",
            /*input2_input_handler*/
            ctx[10]
          ),
          listen(
            input3,
            "input",
            /*input3_input_handler*/
            ctx[11]
          ),
          action_destroyer(enhance.call(null, form))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*$tenant*/
      2 && input0.value !== /*$tenant*/
      ctx2[1]) {
        set_input_value(
          input0,
          /*$tenant*/
          ctx2[1]
        );
      }
      if (dirty & /*$domain*/
      1 && input1.value !== /*$domain*/
      ctx2[0]) {
        set_input_value(
          input1,
          /*$domain*/
          ctx2[0]
        );
      }
      if (dirty & /*$baseUrl*/
      4 && input2.value !== /*$baseUrl*/
      ctx2[2]) {
        set_input_value(
          input2,
          /*$baseUrl*/
          ctx2[2]
        );
      }
      if (dirty & /*$tenantUrl*/
      8 && input3.value !== /*$tenantUrl*/
      ctx2[3]) {
        set_input_value(
          input3,
          /*$tenantUrl*/
          ctx2[3]
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(main);
      }
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $domain;
  let $tenant;
  let $baseUrl;
  let $tenantUrl;
  let desktop;
  if (window.electron && browser) {
    window.electron.receive("from-main", (data) => {
      desktop = `Received Message "${data}" from Electron`;
      console.log(desktop);
    });
  }
  const tenant = localStorageStore("tenant", "tenant");
  component_subscribe($$self, tenant, (value) => $$invalidate(1, $tenant = value));
  const domain = localStorageStore("domain", "identitynow");
  component_subscribe($$self, domain, (value) => $$invalidate(0, $domain = value));
  const baseUrl = localStorageStore("baseUrl", "https://${tenant}.api.${domain}.com");
  component_subscribe($$self, baseUrl, (value) => $$invalidate(2, $baseUrl = value));
  const tenantUrl = localStorageStore("tenantUrl", "https://${tenant}.${domain}.com");
  component_subscribe($$self, tenantUrl, (value) => $$invalidate(3, $tenantUrl = value));
  function input0_input_handler() {
    $tenant = this.value;
    tenant.set($tenant);
  }
  function input1_input_handler() {
    $domain = this.value;
    domain.set($domain);
  }
  function input2_input_handler() {
    $baseUrl = this.value;
    baseUrl.set($baseUrl);
  }
  function input3_input_handler() {
    $tenantUrl = this.value;
    tenantUrl.set($tenantUrl);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$tenant, $domain*/
    3) {
      baseUrl.set(`https://${$tenant}.api.${$domain}.com`);
    }
    if ($$self.$$.dirty & /*$tenant, $domain*/
    3) {
      tenantUrl.set(`https://${$tenant}.${$domain}.com`);
    }
  };
  return [
    $domain,
    $tenant,
    $baseUrl,
    $tenantUrl,
    tenant,
    domain,
    baseUrl,
    tenantUrl,
    input0_input_handler,
    input1_input_handler,
    input2_input_handler,
    input3_input_handler
  ];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as component
};
