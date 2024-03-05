import { s as safe_not_equal, e as element, a as space, c as claim_element, b as children, h as get_svelte_dataset, f as claim_space, g as detach, i as attr, j as insert_hydration, k as append_hydration, m as component_subscribe, p as onMount, q as set_store_value, r as select_value, o as noop, u as set_input_value, v as add_render_callback, w as select_option, x as listen, n as destroy_each, y as run_all, t as text, d as claim_text, l as set_data } from "../chunks/scheduler.fBTsnP2i.js";
import { h as handle_promise, u as update_await_block_branch, P as Progress } from "../chunks/Progress.3ESwaKmp.js";
import { e as ensure_array_like } from "../chunks/each.C9vk03ly.js";
import { S as SvelteComponent, i as init, t as transition_in, a as transition_out, b as create_component, d as claim_component, m as mount_component, e as destroy_component } from "../chunks/index.DdnDjIf5.js";
import "../chunks/entry.Cs_QM1XO.js";
import { l as localStorageStore } from "../chunks/ProgressBar.svelte_svelte_type_style_lang.DcCzH8ar.js";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[9] = list[i];
  const constants_0 = JSON.stringify(
    /*source*/
    child_ctx[9]
  );
  child_ctx[10] = constants_0;
  return child_ctx;
}
function create_catch_block(ctx) {
  return {
    c: noop,
    l: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
}
function create_then_block(ctx) {
  let label0;
  let span0;
  let textContent = "Sources:";
  let t1;
  let select;
  let option;
  let textContent_1 = "Select a source";
  let t3;
  let label1;
  let span1;
  let textContent_2 = "Description:";
  let t5;
  let textarea;
  let mounted;
  let dispose;
  let each_value = ensure_array_like(
    /*sources*/
    ctx[8]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      label0 = element("label");
      span0 = element("span");
      span0.textContent = textContent;
      t1 = space();
      select = element("select");
      option = element("option");
      option.textContent = textContent_1;
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t3 = space();
      label1 = element("label");
      span1 = element("span");
      span1.textContent = textContent_2;
      t5 = space();
      textarea = element("textarea");
      this.h();
    },
    l(nodes) {
      label0 = claim_element(nodes, "LABEL", {});
      var label0_nodes = children(label0);
      span0 = claim_element(label0_nodes, "SPAN", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(span0) !== "svelte-16rs0he")
        span0.textContent = textContent;
      t1 = claim_space(label0_nodes);
      select = claim_element(label0_nodes, "SELECT", {
        name: true,
        placeholder: true,
        class: true
      });
      var select_nodes = children(select);
      option = claim_element(select_nodes, "OPTION", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(option) !== "svelte-1dm9jri")
        option.textContent = textContent_1;
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(select_nodes);
      }
      select_nodes.forEach(detach);
      label0_nodes.forEach(detach);
      t3 = claim_space(nodes);
      label1 = claim_element(nodes, "LABEL", {});
      var label1_nodes = children(label1);
      span1 = claim_element(label1_nodes, "SPAN", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(span1) !== "svelte-n5lbfe")
        span1.textContent = textContent_2;
      t5 = claim_space(label1_nodes);
      textarea = claim_element(label1_nodes, "TEXTAREA", { name: true, class: true });
      children(textarea).forEach(detach);
      label1_nodes.forEach(detach);
      this.h();
    },
    h() {
      option.hidden = true;
      option.disabled = true;
      option.__value = "Select a source";
      set_input_value(option, option.__value);
      attr(select, "name", "source");
      attr(select, "placeholder", "Select a source");
      attr(select, "class", "select");
      if (
        /*$selectedSource*/
        ctx[1] === void 0
      )
        add_render_callback(() => (
          /*select_change_handler*/
          ctx[6].call(select)
        ));
      attr(textarea, "name", "updatedDescription");
      attr(textarea, "class", "textarea");
    },
    m(target, anchor) {
      insert_hydration(target, label0, anchor);
      append_hydration(label0, span0);
      append_hydration(label0, t1);
      append_hydration(label0, select);
      append_hydration(select, option);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(select, null);
        }
      }
      select_option(
        select,
        /*$selectedSource*/
        ctx[1],
        true
      );
      insert_hydration(target, t3, anchor);
      insert_hydration(target, label1, anchor);
      append_hydration(label1, span1);
      append_hydration(label1, t5);
      append_hydration(label1, textarea);
      set_input_value(
        textarea,
        /*$updatedDescription*/
        ctx[2]
      );
      if (!mounted) {
        dispose = [
          listen(
            select,
            "change",
            /*handleChange*/
            ctx[5]
          ),
          listen(
            select,
            "change",
            /*select_change_handler*/
            ctx[6]
          ),
          listen(
            textarea,
            "input",
            /*textarea_input_handler*/
            ctx[7]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*JSON, data, $selectedSource*/
      3) {
        each_value = ensure_array_like(
          /*sources*/
          ctx2[8]
        );
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(select, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      if (dirty & /*$selectedSource, JSON, data*/
      3) {
        select_option(
          select,
          /*$selectedSource*/
          ctx2[1]
        );
      }
      if (dirty & /*$updatedDescription*/
      4) {
        set_input_value(
          textarea,
          /*$updatedDescription*/
          ctx2[2]
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(label0);
        detach(t3);
        detach(label1);
      }
      destroy_each(each_blocks, detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_each_block(ctx) {
  let option;
  let t0_value = (
    /*source*/
    ctx[9].name + ""
  );
  let t0;
  let t1;
  let t2_value = (
    /*source*/
    ctx[9].type + ""
  );
  let t2;
  let t3;
  let option_value_value;
  let option_selected_value;
  return {
    c() {
      option = element("option");
      t0 = text(t0_value);
      t1 = text(" - ");
      t2 = text(t2_value);
      t3 = space();
      this.h();
    },
    l(nodes) {
      option = claim_element(nodes, "OPTION", {});
      var option_nodes = children(option);
      t0 = claim_text(option_nodes, t0_value);
      t1 = claim_text(option_nodes, " - ");
      t2 = claim_text(option_nodes, t2_value);
      t3 = claim_space(option_nodes);
      option_nodes.forEach(detach);
      this.h();
    },
    h() {
      option.__value = option_value_value = /*sourceString*/
      ctx[10];
      set_input_value(option, option.__value);
      option.selected = option_selected_value = /*$selectedSource*/
      ctx[1] === /*sourceString*/
      ctx[10];
    },
    m(target, anchor) {
      insert_hydration(target, option, anchor);
      append_hydration(option, t0);
      append_hydration(option, t1);
      append_hydration(option, t2);
      append_hydration(option, t3);
    },
    p(ctx2, dirty) {
      if (dirty & /*data*/
      1 && t0_value !== (t0_value = /*source*/
      ctx2[9].name + ""))
        set_data(t0, t0_value);
      if (dirty & /*data*/
      1 && t2_value !== (t2_value = /*source*/
      ctx2[9].type + ""))
        set_data(t2, t2_value);
      if (dirty & /*data*/
      1 && option_value_value !== (option_value_value = /*sourceString*/
      ctx2[10])) {
        option.__value = option_value_value;
        set_input_value(option, option.__value);
      }
      if (dirty & /*$selectedSource, data, JSON*/
      3 && option_selected_value !== (option_selected_value = /*$selectedSource*/
      ctx2[1] === /*sourceString*/
      ctx2[10])) {
        option.selected = option_selected_value;
      }
    },
    d(detaching) {
      if (detaching) {
        detach(option);
      }
    }
  };
}
function create_pending_block(ctx) {
  let div;
  let progress;
  let current;
  progress = new Progress({ props: { width: "w-[100px]" } });
  return {
    c() {
      div = element("div");
      create_component(progress.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(progress.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "flex flex-row justify-center");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(progress, div, null);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(progress.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(progress.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      destroy_component(progress);
    }
  };
}
function create_fragment(ctx) {
  let div2;
  let div0;
  let textContent = `<p class="text-2xl text-center">Example Form</p>`;
  let t1;
  let form;
  let p1;
  let textContent_1 = "Update Source Description";
  let t3;
  let div1;
  let promise;
  let t4;
  let button;
  let textContent_2 = "Submit";
  let current;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block,
    then: create_then_block,
    catch: create_catch_block,
    value: 8,
    blocks: [, , ,]
  };
  handle_promise(promise = /*data*/
  ctx[0].sources, info);
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      div0.innerHTML = textContent;
      t1 = space();
      form = element("form");
      p1 = element("p");
      p1.textContent = textContent_1;
      t3 = space();
      div1 = element("div");
      info.block.c();
      t4 = space();
      button = element("button");
      button.textContent = textContent_2;
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div0) !== "svelte-xch8ds")
        div0.innerHTML = textContent;
      t1 = claim_space(div2_nodes);
      form = claim_element(div2_nodes, "FORM", { method: true, class: true });
      var form_nodes = children(form);
      p1 = claim_element(form_nodes, "P", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(p1) !== "svelte-emhize")
        p1.textContent = textContent_1;
      t3 = claim_space(form_nodes);
      div1 = claim_element(form_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      info.block.l(div1_nodes);
      t4 = claim_space(div1_nodes);
      button = claim_element(div1_nodes, "BUTTON", {
        type: true,
        class: true,
        ["data-svelte-h"]: true
      });
      if (get_svelte_dataset(button) !== "svelte-x5avbw")
        button.textContent = textContent_2;
      div1_nodes.forEach(detach);
      form_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "card p-4");
      attr(p1, "class", "text-2xl text-center");
      attr(button, "type", "submit");
      attr(button, "class", "btn variant-filled");
      attr(div1, "class", "flex flex-col gap-4");
      attr(form, "method", "POST");
      attr(form, "class", "card p-4");
      attr(div2, "class", "flex justify-center flex-col align-middle gap-2");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      append_hydration(div2, t1);
      append_hydration(div2, form);
      append_hydration(form, p1);
      append_hydration(form, t3);
      append_hydration(form, div1);
      info.block.m(div1, info.anchor = null);
      info.mount = () => div1;
      info.anchor = t4;
      append_hydration(div1, t4);
      append_hydration(div1, button);
      current = true;
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      info.ctx = ctx;
      if (dirty & /*data*/
      1 && promise !== (promise = /*data*/
      ctx[0].sources) && handle_promise(promise, info))
        ;
      else {
        update_await_block_branch(info, ctx, dirty);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(info.block);
      current = true;
    },
    o(local) {
      for (let i = 0; i < 3; i += 1) {
        const block = info.blocks[i];
        transition_out(block);
      }
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div2);
      }
      info.block.d();
      info.token = null;
      info = null;
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $selectedSource;
  let $updatedDescription;
  let { data } = $$props;
  const selectedSource = localStorageStore("selectedSource", void 0);
  component_subscribe($$self, selectedSource, (value) => $$invalidate(1, $selectedSource = value));
  const updatedDescription = localStorageStore("updatedDescription", "");
  component_subscribe($$self, updatedDescription, (value) => $$invalidate(2, $updatedDescription = value));
  onMount(async () => {
    const sources = await data.sources;
    if (sources.length > 0) {
      set_store_value(selectedSource, $selectedSource = JSON.stringify(sources[0]), $selectedSource);
      set_store_value(updatedDescription, $updatedDescription = sources[0].description || "", $updatedDescription);
    }
  });
  const handleChange = (e) => {
    set_store_value(updatedDescription, $updatedDescription = JSON.parse(e.target.value).description || "", $updatedDescription);
  };
  function select_change_handler() {
    $selectedSource = select_value(this);
    selectedSource.set($selectedSource);
    $$invalidate(0, data);
  }
  function textarea_input_handler() {
    $updatedDescription = this.value;
    updatedDescription.set($updatedDescription);
  }
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(0, data = $$props2.data);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$selectedSource*/
    2) {
      console.log($selectedSource);
    }
  };
  return [
    data,
    $selectedSource,
    $updatedDescription,
    selectedSource,
    updatedDescription,
    handleChange,
    select_change_handler,
    textarea_input_handler
  ];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { data: 0 });
  }
}
export {
  Page as component
};
