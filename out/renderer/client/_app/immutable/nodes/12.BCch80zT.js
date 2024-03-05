import { s as safe_not_equal, e as element, a as space, c as claim_element, b as children, f as claim_space, h as get_svelte_dataset, g as detach, i as attr, j as insert_hydration, k as append_hydration, x as listen, t as text, d as claim_text, l as set_data, z as empty, n as destroy_each, r as select_value, B as binding_callbacks, o as noop, u as set_input_value, v as add_render_callback, w as select_option } from "../chunks/scheduler.fBTsnP2i.js";
import { h as handle_promise, u as update_await_block_branch, P as Progress } from "../chunks/Progress.3ESwaKmp.js";
import { e as ensure_array_like } from "../chunks/each.C9vk03ly.js";
import { S as SvelteComponent, i as init, a as transition_out, c as check_outros, t as transition_in, g as group_outros, b as create_component, d as claim_component, m as mount_component, e as destroy_component } from "../chunks/index.DdnDjIf5.js";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[14] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[17] = list[i];
  return child_ctx;
}
function get_each_context_2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[17] = list[i];
  child_ctx[20] = list;
  child_ctx[21] = i;
  return child_ctx;
}
function get_each_context_3(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[22] = list[i];
  return child_ctx;
}
function create_if_block_5(ctx) {
  var _a, _b, _c;
  let p0;
  let t0;
  let t1_value = (
    /*selectedForm*/
    ((_a = ctx[1].object) == null ? void 0 : _a.name) + ""
  );
  let t1;
  let t2;
  let p1;
  let t3;
  let br;
  let t4;
  let t5_value = (
    /*selectedForm*/
    ((_b = ctx[1].object) == null ? void 0 : _b.description) + ""
  );
  let t5;
  let t6;
  let div;
  let p2;
  let textContent = "Form Inputs:";
  let t8;
  let if_block = (
    /*selectedForm*/
    ((_c = ctx[1].object) == null ? void 0 : _c.formInput) && create_if_block_6(ctx)
  );
  return {
    c() {
      p0 = element("p");
      t0 = text("Name: ");
      t1 = text(t1_value);
      t2 = space();
      p1 = element("p");
      t3 = text("Description: ");
      br = element("br");
      t4 = space();
      t5 = text(t5_value);
      t6 = space();
      div = element("div");
      p2 = element("p");
      p2.textContent = textContent;
      t8 = space();
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      p0 = claim_element(nodes, "P", { id: true, class: true });
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "Name: ");
      t1 = claim_text(p0_nodes, t1_value);
      p0_nodes.forEach(detach);
      t2 = claim_space(nodes);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      t3 = claim_text(p1_nodes, "Description: ");
      br = claim_element(p1_nodes, "BR", {});
      t4 = claim_space(p1_nodes);
      t5 = claim_text(p1_nodes, t5_value);
      p1_nodes.forEach(detach);
      t6 = claim_space(nodes);
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      p2 = claim_element(div_nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p2) !== "svelte-zyoigh")
        p2.textContent = textContent;
      t8 = claim_space(div_nodes);
      if (if_block)
        if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(p0, "id", "name");
      attr(p0, "class", "text-center");
    },
    m(target, anchor) {
      insert_hydration(target, p0, anchor);
      append_hydration(p0, t0);
      append_hydration(p0, t1);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, p1, anchor);
      append_hydration(p1, t3);
      append_hydration(p1, br);
      append_hydration(p1, t4);
      append_hydration(p1, t5);
      insert_hydration(target, t6, anchor);
      insert_hydration(target, div, anchor);
      append_hydration(div, p2);
      append_hydration(div, t8);
      if (if_block)
        if_block.m(div, null);
    },
    p(ctx2, dirty) {
      var _a2, _b2, _c2;
      if (dirty & /*selectedForm*/
      2 && t1_value !== (t1_value = /*selectedForm*/
      ((_a2 = ctx2[1].object) == null ? void 0 : _a2.name) + ""))
        set_data(t1, t1_value);
      if (dirty & /*selectedForm*/
      2 && t5_value !== (t5_value = /*selectedForm*/
      ((_b2 = ctx2[1].object) == null ? void 0 : _b2.description) + ""))
        set_data(t5, t5_value);
      if (
        /*selectedForm*/
        (_c2 = ctx2[1].object) == null ? void 0 : _c2.formInput
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_6(ctx2);
          if_block.c();
          if_block.m(div, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (detaching) {
        detach(p0);
        detach(t2);
        detach(p1);
        detach(t6);
        detach(div);
      }
      if (if_block)
        if_block.d();
    }
  };
}
function create_if_block_6(ctx) {
  var _a;
  let each_1_anchor;
  let each_value_2 = ensure_array_like(
    /*selectedForm*/
    (_a = ctx[1].object) == null ? void 0 : _a.formInput
  );
  let each_blocks = [];
  for (let i = 0; i < each_value_2.length; i += 1) {
    each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
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
    },
    p(ctx2, dirty) {
      var _a2;
      if (dirty & /*selectedForm, inputs, conditions*/
      74) {
        each_value_2 = ensure_array_like(
          /*selectedForm*/
          (_a2 = ctx2[1].object) == null ? void 0 : _a2.formInput
        );
        let i;
        for (i = 0; i < each_value_2.length; i += 1) {
          const child_ctx = get_each_context_2(ctx2, each_value_2, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_2(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_2.length;
      }
    },
    d(detaching) {
      if (detaching) {
        detach(each_1_anchor);
      }
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_else_block_2(ctx) {
  let label;
  let span;
  let t0_value = (
    /*input*/
    ctx[17].label + ""
  );
  let t0;
  let t1;
  let input_1;
  let input_1_id_value;
  let t2;
  let label_for_value;
  let mounted;
  let dispose;
  function input_1_input_handler() {
    ctx[8].call(
      input_1,
      /*input*/
      ctx[17]
    );
  }
  return {
    c() {
      label = element("label");
      span = element("span");
      t0 = text(t0_value);
      t1 = space();
      input_1 = element("input");
      t2 = space();
      this.h();
    },
    l(nodes) {
      label = claim_element(nodes, "LABEL", { class: true, for: true });
      var label_nodes = children(label);
      span = claim_element(label_nodes, "SPAN", {});
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, t0_value);
      span_nodes.forEach(detach);
      t1 = claim_space(label_nodes);
      input_1 = claim_element(label_nodes, "INPUT", { class: true, id: true, type: true });
      t2 = claim_space(label_nodes);
      label_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(input_1, "class", "input");
      attr(input_1, "id", input_1_id_value = /*input*/
      ctx[17].label);
      attr(input_1, "type", "text");
      attr(label, "class", "label");
      attr(label, "for", label_for_value = /*input*/
      ctx[17].label);
    },
    m(target, anchor) {
      insert_hydration(target, label, anchor);
      append_hydration(label, span);
      append_hydration(span, t0);
      append_hydration(label, t1);
      append_hydration(label, input_1);
      set_input_value(
        input_1,
        /*inputs*/
        ctx[3][
          /*input*/
          ctx[17].label
        ]
      );
      append_hydration(label, t2);
      if (!mounted) {
        dispose = listen(input_1, "input", input_1_input_handler);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & /*selectedForm*/
      2 && t0_value !== (t0_value = /*input*/
      ctx[17].label + ""))
        set_data(t0, t0_value);
      if (dirty & /*selectedForm, conditions*/
      66 && input_1_id_value !== (input_1_id_value = /*input*/
      ctx[17].label)) {
        attr(input_1, "id", input_1_id_value);
      }
      if (dirty & /*inputs, selectedForm, conditions*/
      74 && input_1.value !== /*inputs*/
      ctx[3][
        /*input*/
        ctx[17].label
      ]) {
        set_input_value(
          input_1,
          /*inputs*/
          ctx[3][
            /*input*/
            ctx[17].label
          ]
        );
      }
      if (dirty & /*selectedForm, conditions*/
      66 && label_for_value !== (label_for_value = /*input*/
      ctx[17].label)) {
        attr(label, "for", label_for_value);
      }
    },
    d(detaching) {
      if (detaching) {
        detach(label);
      }
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_7(ctx) {
  let label;
  let span;
  let t0_value = (
    /*input*/
    ctx[17].label + ""
  );
  let t0;
  let t1;
  let select;
  let select_id_value;
  let t2;
  let label_for_value;
  let mounted;
  let dispose;
  let each_value_3 = ensure_array_like(
    /*conditions*/
    ctx[6].get(
      /*input*/
      ctx[17].label
    )
  );
  let each_blocks = [];
  for (let i = 0; i < each_value_3.length; i += 1) {
    each_blocks[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
  }
  function select_change_handler() {
    ctx[7].call(
      select,
      /*input*/
      ctx[17]
    );
  }
  return {
    c() {
      label = element("label");
      span = element("span");
      t0 = text(t0_value);
      t1 = space();
      select = element("select");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t2 = space();
      this.h();
    },
    l(nodes) {
      label = claim_element(nodes, "LABEL", { class: true, for: true });
      var label_nodes = children(label);
      span = claim_element(label_nodes, "SPAN", {});
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, t0_value);
      span_nodes.forEach(detach);
      t1 = claim_space(label_nodes);
      select = claim_element(label_nodes, "SELECT", { class: true, id: true });
      var select_nodes = children(select);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(select_nodes);
      }
      select_nodes.forEach(detach);
      t2 = claim_space(label_nodes);
      label_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(select, "class", "input");
      attr(select, "id", select_id_value = /*input*/
      ctx[17].label);
      if (
        /*inputs*/
        ctx[3][
          /*input*/
          ctx[17].label
        ] === void 0
      )
        add_render_callback(select_change_handler);
      attr(label, "class", "label");
      attr(label, "for", label_for_value = /*input*/
      ctx[17].label);
    },
    m(target, anchor) {
      insert_hydration(target, label, anchor);
      append_hydration(label, span);
      append_hydration(span, t0);
      append_hydration(label, t1);
      append_hydration(label, select);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(select, null);
        }
      }
      select_option(
        select,
        /*inputs*/
        ctx[3][
          /*input*/
          ctx[17].label
        ],
        true
      );
      append_hydration(label, t2);
      if (!mounted) {
        dispose = listen(select, "change", select_change_handler);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & /*selectedForm*/
      2 && t0_value !== (t0_value = /*input*/
      ctx[17].label + ""))
        set_data(t0, t0_value);
      if (dirty & /*conditions, selectedForm*/
      66) {
        each_value_3 = ensure_array_like(
          /*conditions*/
          ctx[6].get(
            /*input*/
            ctx[17].label
          )
        );
        let i;
        for (i = 0; i < each_value_3.length; i += 1) {
          const child_ctx = get_each_context_3(ctx, each_value_3, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_3(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(select, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_3.length;
      }
      if (dirty & /*selectedForm, conditions*/
      66 && select_id_value !== (select_id_value = /*input*/
      ctx[17].label)) {
        attr(select, "id", select_id_value);
      }
      if (dirty & /*inputs, selectedForm, conditions*/
      74) {
        select_option(
          select,
          /*inputs*/
          ctx[3][
            /*input*/
            ctx[17].label
          ]
        );
      }
      if (dirty & /*selectedForm, conditions*/
      66 && label_for_value !== (label_for_value = /*input*/
      ctx[17].label)) {
        attr(label, "for", label_for_value);
      }
    },
    d(detaching) {
      if (detaching) {
        detach(label);
      }
      destroy_each(each_blocks, detaching);
      mounted = false;
      dispose();
    }
  };
}
function create_each_block_3(ctx) {
  let option;
  let t_value = (
    /*condition*/
    ctx[22] + ""
  );
  let t;
  let option_value_value;
  return {
    c() {
      option = element("option");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      option = claim_element(nodes, "OPTION", {});
      var option_nodes = children(option);
      t = claim_text(option_nodes, t_value);
      option_nodes.forEach(detach);
      this.h();
    },
    h() {
      option.__value = option_value_value = /*condition*/
      ctx[22];
      set_input_value(option, option.__value);
    },
    m(target, anchor) {
      insert_hydration(target, option, anchor);
      append_hydration(option, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*conditions, selectedForm*/
      66 && t_value !== (t_value = /*condition*/
      ctx2[22] + ""))
        set_data(t, t_value);
      if (dirty & /*conditions, selectedForm*/
      66 && option_value_value !== (option_value_value = /*condition*/
      ctx2[22])) {
        option.__value = option_value_value;
        set_input_value(option, option.__value);
      }
    },
    d(detaching) {
      if (detaching) {
        detach(option);
      }
    }
  };
}
function create_each_block_2(ctx) {
  let show_if;
  let if_block_anchor;
  function select_block_type(ctx2, dirty) {
    if (dirty & /*conditions, selectedForm*/
    66)
      show_if = null;
    if (show_if == null)
      show_if = !!/*conditions*/
      ctx2[6].get(
        /*input*/
        ctx2[17].label
      );
    if (show_if)
      return create_if_block_7;
    return create_else_block_2;
  }
  let current_block_type = select_block_type(ctx, -1);
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
      if (current_block_type === (current_block_type = select_block_type(ctx2, dirty)) && if_block) {
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
function create_else_block(ctx) {
  let t;
  let button;
  let mounted;
  let dispose;
  let if_block0 = (
    /*formUrl*/
    ctx[5] && create_if_block_4(ctx)
  );
  function select_block_type_2(ctx2, dirty) {
    if (
      /*formUrl*/
      ctx2[5]
    )
      return create_if_block_3;
    return create_else_block_1;
  }
  let current_block_type = select_block_type_2(ctx);
  let if_block1 = current_block_type(ctx);
  return {
    c() {
      if (if_block0)
        if_block0.c();
      t = space();
      button = element("button");
      if_block1.c();
      this.h();
    },
    l(nodes) {
      if (if_block0)
        if_block0.l(nodes);
      t = claim_space(nodes);
      button = claim_element(nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      if_block1.l(button_nodes);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "class", "btn variant-filled-primary");
    },
    m(target, anchor) {
      if (if_block0)
        if_block0.m(target, anchor);
      insert_hydration(target, t, anchor);
      insert_hydration(target, button, anchor);
      if_block1.m(button, null);
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler*/
          ctx[9]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (
        /*formUrl*/
        ctx2[5]
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_4(ctx2);
          if_block0.c();
          if_block0.m(t.parentNode, t);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (current_block_type !== (current_block_type = select_block_type_2(ctx2))) {
        if_block1.d(1);
        if_block1 = current_block_type(ctx2);
        if (if_block1) {
          if_block1.c();
          if_block1.m(button, null);
        }
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(t);
        detach(button);
      }
      if (if_block0)
        if_block0.d(detaching);
      if_block1.d();
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_2(ctx) {
  let div;
  let progress;
  let current;
  progress = new Progress({ props: { width: "w-[80px]" } });
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
function create_if_block_4(ctx) {
  let a;
  let t;
  return {
    c() {
      a = element("a");
      t = text("Open Form");
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", {
        class: true,
        href: true,
        target: true,
        rel: true
      });
      var a_nodes = children(a);
      t = claim_text(a_nodes, "Open Form");
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "class", "btn variant-filled-secondary");
      attr(
        a,
        "href",
        /*formUrl*/
        ctx[5]
      );
      attr(a, "target", "_blank");
      attr(a, "rel", "noreferrer");
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      append_hydration(a, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*formUrl*/
      32) {
        attr(
          a,
          "href",
          /*formUrl*/
          ctx2[5]
        );
      }
    },
    d(detaching) {
      if (detaching) {
        detach(a);
      }
    }
  };
}
function create_else_block_1(ctx) {
  let t;
  return {
    c() {
      t = text("Create form link");
    },
    l(nodes) {
      t = claim_text(nodes, "Create form link");
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
function create_if_block_3(ctx) {
  let t;
  return {
    c() {
      t = text("Refresh form link");
    },
    l(nodes) {
      t = claim_text(nodes, "Refresh form link");
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
  let div;
  let each_value = ensure_array_like(
    /*forms*/
    ctx[13]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div_nodes);
      }
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "flex flex-row");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div, null);
        }
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*selectedForm, data, dialog*/
      7) {
        each_value = ensure_array_like(
          /*forms*/
          ctx2[13]
        );
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_if_block_1(ctx) {
  var _a;
  let p;
  let t0;
  let t1_value = (
    /*form*/
    ((_a = ctx[14].object) == null ? void 0 : _a.name) + ""
  );
  let t1;
  return {
    c() {
      p = element("p");
      t0 = text("Name: ");
      t1 = text(t1_value);
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", { id: true, class: true });
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "Name: ");
      t1 = claim_text(p_nodes, t1_value);
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(p, "id", "name");
      attr(p, "class", "text-center");
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t0);
      append_hydration(p, t1);
    },
    p(ctx2, dirty) {
      var _a2;
      if (dirty & /*data*/
      1 && t1_value !== (t1_value = /*form*/
      ((_a2 = ctx2[14].object) == null ? void 0 : _a2.name) + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching) {
        detach(p);
      }
    }
  };
}
function create_if_block(ctx) {
  var _a;
  let each_1_anchor;
  let each_value_1 = ensure_array_like(
    /*form*/
    (_a = ctx[14].object) == null ? void 0 : _a.formInput
  );
  let each_blocks = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
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
    },
    p(ctx2, dirty) {
      var _a2;
      if (dirty & /*data*/
      1) {
        each_value_1 = ensure_array_like(
          /*form*/
          (_a2 = ctx2[14].object) == null ? void 0 : _a2.formInput
        );
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
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
        detach(each_1_anchor);
      }
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_each_block_1(ctx) {
  let p;
  let t0_value = (
    /*input*/
    ctx[17].label + ""
  );
  let t0;
  let t1;
  return {
    c() {
      p = element("p");
      t0 = text(t0_value);
      t1 = space();
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", { class: true });
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, t0_value);
      t1 = claim_space(p_nodes);
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(p, "class", "");
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t0);
      append_hydration(p, t1);
    },
    p(ctx2, dirty) {
      if (dirty & /*data*/
      1 && t0_value !== (t0_value = /*input*/
      ctx2[17].label + ""))
        set_data(t0, t0_value);
    },
    d(detaching) {
      if (detaching) {
        detach(p);
      }
    }
  };
}
function create_each_block(ctx) {
  var _a, _b, _c;
  let div1;
  let t0;
  let p0;
  let t1;
  let t2_value = (
    /*form*/
    ((_a = ctx[14].object) == null ? void 0 : _a.id) + ""
  );
  let t2;
  let t3;
  let p1;
  let t4;
  let br;
  let t5;
  let t6_value = (
    /*form*/
    ((_b = ctx[14].object) == null ? void 0 : _b.description) + ""
  );
  let t6;
  let t7;
  let div0;
  let p2;
  let textContent = "Form Inputs:";
  let t9;
  let t10;
  let button;
  let textContent_1 = "Assign form";
  let t12;
  let mounted;
  let dispose;
  let if_block0 = (
    /*form*/
    ctx[14].object && create_if_block_1(ctx)
  );
  let if_block1 = (
    /*form*/
    ((_c = ctx[14].object) == null ? void 0 : _c.formInput) && create_if_block(ctx)
  );
  function click_handler_2() {
    return (
      /*click_handler_2*/
      ctx[12](
        /*form*/
        ctx[14]
      )
    );
  }
  return {
    c() {
      div1 = element("div");
      if (if_block0)
        if_block0.c();
      t0 = space();
      p0 = element("p");
      t1 = text("ID: ");
      t2 = text(t2_value);
      t3 = space();
      p1 = element("p");
      t4 = text("Description: ");
      br = element("br");
      t5 = space();
      t6 = text(t6_value);
      t7 = space();
      div0 = element("div");
      p2 = element("p");
      p2.textContent = textContent;
      t9 = space();
      if (if_block1)
        if_block1.c();
      t10 = space();
      button = element("button");
      button.textContent = textContent_1;
      t12 = space();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      if (if_block0)
        if_block0.l(div1_nodes);
      t0 = claim_space(div1_nodes);
      p0 = claim_element(div1_nodes, "P", {});
      var p0_nodes = children(p0);
      t1 = claim_text(p0_nodes, "ID: ");
      t2 = claim_text(p0_nodes, t2_value);
      p0_nodes.forEach(detach);
      t3 = claim_space(div1_nodes);
      p1 = claim_element(div1_nodes, "P", {});
      var p1_nodes = children(p1);
      t4 = claim_text(p1_nodes, "Description: ");
      br = claim_element(p1_nodes, "BR", {});
      t5 = claim_space(p1_nodes);
      t6 = claim_text(p1_nodes, t6_value);
      p1_nodes.forEach(detach);
      t7 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      p2 = claim_element(div0_nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p2) !== "svelte-zyoigh")
        p2.textContent = textContent;
      t9 = claim_space(div0_nodes);
      if (if_block1)
        if_block1.l(div0_nodes);
      div0_nodes.forEach(detach);
      t10 = claim_space(div1_nodes);
      button = claim_element(div1_nodes, "BUTTON", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(button) !== "svelte-14fmnxe")
        button.textContent = textContent_1;
      t12 = claim_space(div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "class", "btn variant-filled-primary");
      attr(div1, "class", "card flex flex-col p-4 gap-4");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      if (if_block0)
        if_block0.m(div1, null);
      append_hydration(div1, t0);
      append_hydration(div1, p0);
      append_hydration(p0, t1);
      append_hydration(p0, t2);
      append_hydration(div1, t3);
      append_hydration(div1, p1);
      append_hydration(p1, t4);
      append_hydration(p1, br);
      append_hydration(p1, t5);
      append_hydration(p1, t6);
      append_hydration(div1, t7);
      append_hydration(div1, div0);
      append_hydration(div0, p2);
      append_hydration(div0, t9);
      if (if_block1)
        if_block1.m(div0, null);
      append_hydration(div1, t10);
      append_hydration(div1, button);
      append_hydration(div1, t12);
      if (!mounted) {
        dispose = listen(button, "click", click_handler_2);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      var _a2, _b2, _c2;
      ctx = new_ctx;
      if (
        /*form*/
        ctx[14].object
      ) {
        if (if_block0) {
          if_block0.p(ctx, dirty);
        } else {
          if_block0 = create_if_block_1(ctx);
          if_block0.c();
          if_block0.m(div1, t0);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (dirty & /*data*/
      1 && t2_value !== (t2_value = /*form*/
      ((_a2 = ctx[14].object) == null ? void 0 : _a2.id) + ""))
        set_data(t2, t2_value);
      if (dirty & /*data*/
      1 && t6_value !== (t6_value = /*form*/
      ((_b2 = ctx[14].object) == null ? void 0 : _b2.description) + ""))
        set_data(t6, t6_value);
      if (
        /*form*/
        (_c2 = ctx[14].object) == null ? void 0 : _c2.formInput
      ) {
        if (if_block1) {
          if_block1.p(ctx, dirty);
        } else {
          if_block1 = create_if_block(ctx);
          if_block1.c();
          if_block1.m(div0, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    d(detaching) {
      if (detaching) {
        detach(div1);
      }
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      mounted = false;
      dispose();
    }
  };
}
function create_pending_block(ctx) {
  let div;
  let progress;
  let current;
  progress = new Progress({ props: { width: "w-[80px]" } });
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
  let dialog_1;
  let div0;
  let t0;
  let current_block_type_index;
  let if_block1;
  let t1;
  let button;
  let textContent = "Close";
  let t3;
  let div1;
  let promise;
  let current;
  let mounted;
  let dispose;
  let if_block0 = (
    /*selectedForm*/
    ctx[1] && create_if_block_5(ctx)
  );
  const if_block_creators = [create_if_block_2, create_else_block];
  const if_blocks = [];
  function select_block_type_1(ctx2, dirty) {
    if (
      /*loading*/
      ctx2[4]
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type_1(ctx);
  if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block,
    then: create_then_block,
    catch: create_catch_block,
    value: 13,
    blocks: [, , ,]
  };
  handle_promise(promise = /*data*/
  ctx[0].forms, info);
  return {
    c() {
      dialog_1 = element("dialog");
      div0 = element("div");
      if (if_block0)
        if_block0.c();
      t0 = space();
      if_block1.c();
      t1 = space();
      button = element("button");
      button.textContent = textContent;
      t3 = space();
      div1 = element("div");
      info.block.c();
      this.h();
    },
    l(nodes) {
      dialog_1 = claim_element(nodes, "DIALOG", { class: true });
      var dialog_1_nodes = children(dialog_1);
      div0 = claim_element(dialog_1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if (if_block0)
        if_block0.l(div0_nodes);
      t0 = claim_space(div0_nodes);
      if_block1.l(div0_nodes);
      t1 = claim_space(div0_nodes);
      button = claim_element(div0_nodes, "BUTTON", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(button) !== "svelte-1bxgjoy")
        button.textContent = textContent;
      div0_nodes.forEach(detach);
      dialog_1_nodes.forEach(detach);
      t3 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", {});
      var div1_nodes = children(div1);
      info.block.l(div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "class", "btn variant-filled-warning");
      attr(div0, "class", "flex flex-col gap-4");
      attr(dialog_1, "class", "card p-8 dark:text-white");
    },
    m(target, anchor) {
      insert_hydration(target, dialog_1, anchor);
      append_hydration(dialog_1, div0);
      if (if_block0)
        if_block0.m(div0, null);
      append_hydration(div0, t0);
      if_blocks[current_block_type_index].m(div0, null);
      append_hydration(div0, t1);
      append_hydration(div0, button);
      ctx[11](dialog_1);
      insert_hydration(target, t3, anchor);
      insert_hydration(target, div1, anchor);
      info.block.m(div1, info.anchor = null);
      info.mount = () => div1;
      info.anchor = null;
      current = true;
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler_1*/
          ctx[10]
        );
        mounted = true;
      }
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      if (
        /*selectedForm*/
        ctx[1]
      ) {
        if (if_block0) {
          if_block0.p(ctx, dirty);
        } else {
          if_block0 = create_if_block_5(ctx);
          if_block0.c();
          if_block0.m(div0, t0);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_1(ctx);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block1 = if_blocks[current_block_type_index];
        if (!if_block1) {
          if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block1.c();
        } else {
          if_block1.p(ctx, dirty);
        }
        transition_in(if_block1, 1);
        if_block1.m(div0, t1);
      }
      info.ctx = ctx;
      if (dirty & /*data*/
      1 && promise !== (promise = /*data*/
      ctx[0].forms) && handle_promise(promise, info))
        ;
      else {
        update_await_block_branch(info, ctx, dirty);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block1);
      transition_in(info.block);
      current = true;
    },
    o(local) {
      transition_out(if_block1);
      for (let i = 0; i < 3; i += 1) {
        const block = info.blocks[i];
        transition_out(block);
      }
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(dialog_1);
        detach(t3);
        detach(div1);
      }
      if (if_block0)
        if_block0.d();
      if_blocks[current_block_type_index].d();
      ctx[11](null);
      info.block.d();
      info.token = null;
      info = null;
      mounted = false;
      dispose();
    }
  };
}
function parseFormConditions(conditions2) {
  let parsedConditionals = /* @__PURE__ */ new Map();
  console.log(conditions2);
  for (const condition of conditions2 || []) {
    for (const rule of condition.rules) {
      console.log(rule);
      const temp = parsedConditionals.get(rule.source) || [];
      parsedConditionals.set(rule.source, Array.from(/* @__PURE__ */ new Set([...temp, rule.value])));
    }
  }
  console.log(parsedConditionals);
  return parsedConditionals;
}
function instance($$self, $$props, $$invalidate) {
  let { data } = $$props;
  console.log(data);
  let selectedForm;
  let dialog;
  let inputs = {};
  let loading = false;
  let formUrl;
  let conditions = /* @__PURE__ */ new Map();
  function select_change_handler(input) {
    inputs[input.label] = select_value(this);
    $$invalidate(3, inputs);
    $$invalidate(6, conditions), $$invalidate(1, selectedForm);
    $$invalidate(1, selectedForm);
  }
  function input_1_input_handler(input) {
    inputs[input.label] = this.value;
    $$invalidate(3, inputs);
    $$invalidate(6, conditions), $$invalidate(1, selectedForm);
    $$invalidate(1, selectedForm);
  }
  const click_handler = async () => {
    var _a;
    $$invalidate(4, loading = true);
    console.log(inputs);
    const formResp = await fetch("/api/sailpoint/form/create-instance", {
      method: "POST",
      body: JSON.stringify({
        formDefinitionId: (_a = selectedForm.object) == null ? void 0 : _a.id,
        formInput: inputs
      })
    });
    const respData = await formResp.json();
    console.log(respData);
    $$invalidate(5, formUrl = respData.formInstanceResp.standAloneFormUrl);
    $$invalidate(4, loading = false);
  };
  const click_handler_1 = () => {
    dialog.close();
  };
  function dialog_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      dialog = $$value;
      $$invalidate(2, dialog);
    });
  }
  const click_handler_2 = (form) => {
    $$invalidate(1, selectedForm = form);
    dialog.showModal();
  };
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(0, data = $$props2.data);
  };
  $$self.$$.update = () => {
    var _a;
    if ($$self.$$.dirty & /*selectedForm*/
    2) {
      if (selectedForm) {
        $$invalidate(6, conditions = parseFormConditions((_a = selectedForm.object) == null ? void 0 : _a.formConditions));
      }
    }
  };
  return [
    data,
    selectedForm,
    dialog,
    inputs,
    loading,
    formUrl,
    conditions,
    select_change_handler,
    input_1_input_handler,
    click_handler,
    click_handler_1,
    dialog_1_binding,
    click_handler_2
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
