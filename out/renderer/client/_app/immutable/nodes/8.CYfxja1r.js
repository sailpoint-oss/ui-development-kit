import { s as safe_not_equal, e as element, a as space, c as claim_element, b as children, f as claim_space, g as detach, i as attr, j as insert_hydration, k as append_hydration, o as noop, V as createEventDispatcher, N as assign, O as exclude_internal_props, v as add_render_callback, w as select_option, x as listen, n as destroy_each, y as run_all, t as text, d as claim_text, u as set_input_value, l as set_data, Y as HtmlTagHydration, Z as claim_html_tag, r as select_value, z as empty, B as binding_callbacks, X as is_function, _ as add_flush_callback, h as get_svelte_dataset } from "../chunks/scheduler.fBTsnP2i.js";
import { h as handle_promise, u as update_await_block_branch, P as Progress } from "../chunks/Progress.3ESwaKmp.js";
import { e as ensure_array_like } from "../chunks/each.C9vk03ly.js";
import { S as SvelteComponent, i as init, f as bind, b as create_component, d as claim_component, m as mount_component, t as transition_in, a as transition_out, e as destroy_component, g as group_outros, c as check_outros } from "../chunks/index.DdnDjIf5.js";
import "../chunks/ProgressBar.svelte_svelte_type_style_lang.DcCzH8ar.js";
import { g as getModalStore, c as createOnPageChange, a as createOnAmountChange, b as createOnGo, T as TriggerCodeModal, f as formatDate } from "../chunks/Utils.BOVa1qxf.js";
const leftArrow = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>`;
const rightArrow = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>`;
const leftAngles = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"/></svg>`;
const rightAngles = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>`;
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[43] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[46] = list[i];
  return child_ctx;
}
function create_if_block_5(ctx) {
  let label;
  let select_1;
  let select_1_class_value;
  let label_class_value;
  let mounted;
  let dispose;
  let each_value_1 = ensure_array_like(
    /*settings*/
    ctx[0].amounts
  );
  let each_blocks = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  return {
    c() {
      label = element("label");
      select_1 = element("select");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      label = claim_element(nodes, "LABEL", { class: true });
      var label_nodes = children(label);
      select_1 = claim_element(label_nodes, "SELECT", { class: true, "aria-label": true });
      var select_1_nodes = children(select_1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(select_1_nodes);
      }
      select_1_nodes.forEach(detach);
      label_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(select_1, "class", select_1_class_value = "paginator-select " + /*classesSelect*/
      ctx[19]);
      select_1.disabled = /*disabled*/
      ctx[1];
      attr(select_1, "aria-label", "Select Amount");
      if (
        /*settings*/
        ctx[0].limit === void 0
      )
        add_render_callback(() => (
          /*select_1_change_handler*/
          ctx[32].call(select_1)
        ));
      attr(label, "class", label_class_value = "paginator-label " + /*classesLabel*/
      ctx[20]);
    },
    m(target, anchor) {
      insert_hydration(target, label, anchor);
      append_hydration(label, select_1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(select_1, null);
        }
      }
      select_option(
        select_1,
        /*settings*/
        ctx[0].limit,
        true
      );
      if (!mounted) {
        dispose = [
          listen(
            select_1,
            "change",
            /*select_1_change_handler*/
            ctx[32]
          ),
          listen(
            select_1,
            "change",
            /*onChangeLength*/
            ctx[23]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty[0] & /*settings, amountText*/
      33) {
        each_value_1 = ensure_array_like(
          /*settings*/
          ctx2[0].amounts
        );
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(select_1, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_1.length;
      }
      if (dirty[0] & /*classesSelect*/
      524288 && select_1_class_value !== (select_1_class_value = "paginator-select " + /*classesSelect*/
      ctx2[19])) {
        attr(select_1, "class", select_1_class_value);
      }
      if (dirty[0] & /*disabled*/
      2) {
        select_1.disabled = /*disabled*/
        ctx2[1];
      }
      if (dirty[0] & /*settings*/
      1) {
        select_option(
          select_1,
          /*settings*/
          ctx2[0].limit
        );
      }
      if (dirty[0] & /*classesLabel*/
      1048576 && label_class_value !== (label_class_value = "paginator-label " + /*classesLabel*/
      ctx2[20])) {
        attr(label, "class", label_class_value);
      }
    },
    d(detaching) {
      if (detaching) {
        detach(label);
      }
      destroy_each(each_blocks, detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_each_block_1(ctx) {
  let option;
  let t0_value = (
    /*amount*/
    ctx[46] + ""
  );
  let t0;
  let t1;
  let t2;
  let option_value_value;
  return {
    c() {
      option = element("option");
      t0 = text(t0_value);
      t1 = space();
      t2 = text(
        /*amountText*/
        ctx[5]
      );
      this.h();
    },
    l(nodes) {
      option = claim_element(nodes, "OPTION", {});
      var option_nodes = children(option);
      t0 = claim_text(option_nodes, t0_value);
      t1 = claim_space(option_nodes);
      t2 = claim_text(
        option_nodes,
        /*amountText*/
        ctx[5]
      );
      option_nodes.forEach(detach);
      this.h();
    },
    h() {
      option.__value = option_value_value = /*amount*/
      ctx[46];
      set_input_value(option, option.__value);
    },
    m(target, anchor) {
      insert_hydration(target, option, anchor);
      append_hydration(option, t0);
      append_hydration(option, t1);
      append_hydration(option, t2);
    },
    p(ctx2, dirty) {
      if (dirty[0] & /*settings*/
      1 && t0_value !== (t0_value = /*amount*/
      ctx2[46] + ""))
        set_data(t0, t0_value);
      if (dirty[0] & /*amountText*/
      32)
        set_data(
          t2,
          /*amountText*/
          ctx2[5]
        );
      if (dirty[0] & /*settings*/
      1 && option_value_value !== (option_value_value = /*amount*/
      ctx2[46])) {
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
function create_if_block_4(ctx) {
  let button;
  let html_tag;
  let button_disabled_value;
  let mounted;
  let dispose;
  return {
    c() {
      button = element("button");
      html_tag = new HtmlTagHydration(false);
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", {
        type: true,
        "aria-label": true,
        class: true
      });
      var button_nodes = children(button);
      html_tag = claim_html_tag(button_nodes, false);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      html_tag.a = null;
      attr(button, "type", "button");
      attr(
        button,
        "aria-label",
        /*labelFirst*/
        ctx[12]
      );
      attr(
        button,
        "class",
        /*buttonClasses*/
        ctx[6]
      );
      button.disabled = button_disabled_value = /*disabled*/
      ctx[1] || /*settings*/
      ctx[0].page === 0;
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      html_tag.m(
        /*buttonTextFirst*/
        ctx[9],
        button
      );
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler*/
          ctx[33]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty[0] & /*buttonTextFirst*/
      512)
        html_tag.p(
          /*buttonTextFirst*/
          ctx2[9]
        );
      if (dirty[0] & /*labelFirst*/
      4096) {
        attr(
          button,
          "aria-label",
          /*labelFirst*/
          ctx2[12]
        );
      }
      if (dirty[0] & /*buttonClasses*/
      64) {
        attr(
          button,
          "class",
          /*buttonClasses*/
          ctx2[6]
        );
      }
      if (dirty[0] & /*disabled, settings*/
      3 && button_disabled_value !== (button_disabled_value = /*disabled*/
      ctx2[1] || /*settings*/
      ctx2[0].page === 0)) {
        button.disabled = button_disabled_value;
      }
    },
    d(detaching) {
      if (detaching) {
        detach(button);
      }
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_3(ctx) {
  let button;
  let html_tag;
  let button_disabled_value;
  let mounted;
  let dispose;
  return {
    c() {
      button = element("button");
      html_tag = new HtmlTagHydration(false);
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", {
        type: true,
        "aria-label": true,
        class: true
      });
      var button_nodes = children(button);
      html_tag = claim_html_tag(button_nodes, false);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      html_tag.a = null;
      attr(button, "type", "button");
      attr(
        button,
        "aria-label",
        /*labelPrevious*/
        ctx[13]
      );
      attr(
        button,
        "class",
        /*buttonClasses*/
        ctx[6]
      );
      button.disabled = button_disabled_value = /*disabled*/
      ctx[1] || /*settings*/
      ctx[0].page === 0;
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      html_tag.m(
        /*buttonTextPrevious*/
        ctx[7],
        button
      );
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler_1*/
          ctx[34]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty[0] & /*buttonTextPrevious*/
      128)
        html_tag.p(
          /*buttonTextPrevious*/
          ctx2[7]
        );
      if (dirty[0] & /*labelPrevious*/
      8192) {
        attr(
          button,
          "aria-label",
          /*labelPrevious*/
          ctx2[13]
        );
      }
      if (dirty[0] & /*buttonClasses*/
      64) {
        attr(
          button,
          "class",
          /*buttonClasses*/
          ctx2[6]
        );
      }
      if (dirty[0] & /*disabled, settings*/
      3 && button_disabled_value !== (button_disabled_value = /*disabled*/
      ctx2[1] || /*settings*/
      ctx2[0].page === 0)) {
        button.disabled = button_disabled_value;
      }
    },
    d(detaching) {
      if (detaching) {
        detach(button);
      }
      mounted = false;
      dispose();
    }
  };
}
function create_else_block$1(ctx) {
  let each_1_anchor;
  let each_value = ensure_array_like(
    /*controlPages*/
    ctx[17]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
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
      if (dirty[0] & /*disabled, buttonClasses, classesButtonActive, controlPages, gotoPage*/
      21102658) {
        each_value = ensure_array_like(
          /*controlPages*/
          ctx2[17]
        );
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$1(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
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
function create_if_block_2$1(ctx) {
  let button;
  let t0_value = (
    /*settings*/
    ctx[0].page * /*settings*/
    ctx[0].limit + 1 + ""
  );
  let t0;
  let t1;
  let t2_value = Math.min(
    /*settings*/
    ctx[0].page * /*settings*/
    ctx[0].limit + /*settings*/
    ctx[0].limit,
    /*settings*/
    ctx[0].size
  ) + "";
  let t2;
  let t3;
  let span;
  let t4;
  let t5;
  let t6_value = (
    /*settings*/
    ctx[0].size + ""
  );
  let t6;
  let button_class_value;
  return {
    c() {
      button = element("button");
      t0 = text(t0_value);
      t1 = text("-");
      t2 = text(t2_value);
      t3 = text(" ");
      span = element("span");
      t4 = text(
        /*separatorText*/
        ctx[11]
      );
      t5 = space();
      t6 = text(t6_value);
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", { type: true, class: true });
      var button_nodes = children(button);
      t0 = claim_text(button_nodes, t0_value);
      t1 = claim_text(button_nodes, "-");
      t2 = claim_text(button_nodes, t2_value);
      t3 = claim_text(button_nodes, " ");
      span = claim_element(button_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t4 = claim_text(
        span_nodes,
        /*separatorText*/
        ctx[11]
      );
      t5 = claim_space(span_nodes);
      t6 = claim_text(span_nodes, t6_value);
      span_nodes.forEach(detach);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "opacity-50");
      attr(button, "type", "button");
      attr(button, "class", button_class_value = /*buttonClasses*/
      ctx[6] + " pointer-events-none !text-sm");
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      append_hydration(button, t0);
      append_hydration(button, t1);
      append_hydration(button, t2);
      append_hydration(button, t3);
      append_hydration(button, span);
      append_hydration(span, t4);
      append_hydration(span, t5);
      append_hydration(span, t6);
    },
    p(ctx2, dirty) {
      if (dirty[0] & /*settings*/
      1 && t0_value !== (t0_value = /*settings*/
      ctx2[0].page * /*settings*/
      ctx2[0].limit + 1 + ""))
        set_data(t0, t0_value);
      if (dirty[0] & /*settings*/
      1 && t2_value !== (t2_value = Math.min(
        /*settings*/
        ctx2[0].page * /*settings*/
        ctx2[0].limit + /*settings*/
        ctx2[0].limit,
        /*settings*/
        ctx2[0].size
      ) + ""))
        set_data(t2, t2_value);
      if (dirty[0] & /*separatorText*/
      2048)
        set_data(
          t4,
          /*separatorText*/
          ctx2[11]
        );
      if (dirty[0] & /*settings*/
      1 && t6_value !== (t6_value = /*settings*/
      ctx2[0].size + ""))
        set_data(t6, t6_value);
      if (dirty[0] & /*buttonClasses*/
      64 && button_class_value !== (button_class_value = /*buttonClasses*/
      ctx2[6] + " pointer-events-none !text-sm")) {
        attr(button, "class", button_class_value);
      }
    },
    d(detaching) {
      if (detaching) {
        detach(button);
      }
    }
  };
}
function create_each_block$1(ctx) {
  let button;
  let t0_value = (
    /*page*/
    (ctx[43] >= 0 ? (
      /*page*/
      ctx[43] + 1
    ) : "...") + ""
  );
  let t0;
  let t1;
  let button_class_value;
  let mounted;
  let dispose;
  function click_handler_2() {
    return (
      /*click_handler_2*/
      ctx[35](
        /*page*/
        ctx[43]
      )
    );
  }
  return {
    c() {
      button = element("button");
      t0 = text(t0_value);
      t1 = space();
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", { type: true, class: true });
      var button_nodes = children(button);
      t0 = claim_text(button_nodes, t0_value);
      t1 = claim_space(button_nodes);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "type", "button");
      button.disabled = /*disabled*/
      ctx[1];
      attr(button, "class", button_class_value = /*buttonClasses*/
      ctx[6] + " " + /*classesButtonActive*/
      ctx[22](
        /*page*/
        ctx[43]
      ));
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      append_hydration(button, t0);
      append_hydration(button, t1);
      if (!mounted) {
        dispose = listen(button, "click", click_handler_2);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty[0] & /*controlPages*/
      131072 && t0_value !== (t0_value = /*page*/
      (ctx[43] >= 0 ? (
        /*page*/
        ctx[43] + 1
      ) : "...") + ""))
        set_data(t0, t0_value);
      if (dirty[0] & /*disabled*/
      2) {
        button.disabled = /*disabled*/
        ctx[1];
      }
      if (dirty[0] & /*buttonClasses, classesButtonActive, controlPages*/
      4325440 && button_class_value !== (button_class_value = /*buttonClasses*/
      ctx[6] + " " + /*classesButtonActive*/
      ctx[22](
        /*page*/
        ctx[43]
      ))) {
        attr(button, "class", button_class_value);
      }
    },
    d(detaching) {
      if (detaching) {
        detach(button);
      }
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_1$2(ctx) {
  let button;
  let html_tag;
  let button_disabled_value;
  let mounted;
  let dispose;
  return {
    c() {
      button = element("button");
      html_tag = new HtmlTagHydration(false);
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", {
        type: true,
        "aria-label": true,
        class: true
      });
      var button_nodes = children(button);
      html_tag = claim_html_tag(button_nodes, false);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      html_tag.a = null;
      attr(button, "type", "button");
      attr(
        button,
        "aria-label",
        /*labelNext*/
        ctx[14]
      );
      attr(
        button,
        "class",
        /*buttonClasses*/
        ctx[6]
      );
      button.disabled = button_disabled_value = /*disabled*/
      ctx[1] || /*settings*/
      (ctx[0].page + 1) * /*settings*/
      ctx[0].limit >= /*settings*/
      ctx[0].size;
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      html_tag.m(
        /*buttonTextNext*/
        ctx[8],
        button
      );
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler_3*/
          ctx[36]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty[0] & /*buttonTextNext*/
      256)
        html_tag.p(
          /*buttonTextNext*/
          ctx2[8]
        );
      if (dirty[0] & /*labelNext*/
      16384) {
        attr(
          button,
          "aria-label",
          /*labelNext*/
          ctx2[14]
        );
      }
      if (dirty[0] & /*buttonClasses*/
      64) {
        attr(
          button,
          "class",
          /*buttonClasses*/
          ctx2[6]
        );
      }
      if (dirty[0] & /*disabled, settings*/
      3 && button_disabled_value !== (button_disabled_value = /*disabled*/
      ctx2[1] || /*settings*/
      (ctx2[0].page + 1) * /*settings*/
      ctx2[0].limit >= /*settings*/
      ctx2[0].size)) {
        button.disabled = button_disabled_value;
      }
    },
    d(detaching) {
      if (detaching) {
        detach(button);
      }
      mounted = false;
      dispose();
    }
  };
}
function create_if_block$2(ctx) {
  let button;
  let html_tag;
  let button_disabled_value;
  let mounted;
  let dispose;
  return {
    c() {
      button = element("button");
      html_tag = new HtmlTagHydration(false);
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", {
        type: true,
        "aria-label": true,
        class: true
      });
      var button_nodes = children(button);
      html_tag = claim_html_tag(button_nodes, false);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      html_tag.a = null;
      attr(button, "type", "button");
      attr(
        button,
        "aria-label",
        /*labelLast*/
        ctx[15]
      );
      attr(
        button,
        "class",
        /*buttonClasses*/
        ctx[6]
      );
      button.disabled = button_disabled_value = /*disabled*/
      ctx[1] || /*settings*/
      (ctx[0].page + 1) * /*settings*/
      ctx[0].limit >= /*settings*/
      ctx[0].size;
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      html_tag.m(
        /*buttonTextLast*/
        ctx[10],
        button
      );
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler_4*/
          ctx[37]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty[0] & /*buttonTextLast*/
      1024)
        html_tag.p(
          /*buttonTextLast*/
          ctx2[10]
        );
      if (dirty[0] & /*labelLast*/
      32768) {
        attr(
          button,
          "aria-label",
          /*labelLast*/
          ctx2[15]
        );
      }
      if (dirty[0] & /*buttonClasses*/
      64) {
        attr(
          button,
          "class",
          /*buttonClasses*/
          ctx2[6]
        );
      }
      if (dirty[0] & /*disabled, settings*/
      3 && button_disabled_value !== (button_disabled_value = /*disabled*/
      ctx2[1] || /*settings*/
      (ctx2[0].page + 1) * /*settings*/
      ctx2[0].limit >= /*settings*/
      ctx2[0].size)) {
        button.disabled = button_disabled_value;
      }
    },
    d(detaching) {
      if (detaching) {
        detach(button);
      }
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$2(ctx) {
  let div1;
  let t0;
  let div0;
  let t1;
  let t2;
  let t3;
  let t4;
  let div0_class_value;
  let div1_class_value;
  let if_block0 = (
    /*settings*/
    ctx[0].amounts.length && create_if_block_5(ctx)
  );
  let if_block1 = (
    /*showFirstLastButtons*/
    ctx[3] && create_if_block_4(ctx)
  );
  let if_block2 = (
    /*showPreviousNextButtons*/
    ctx[2] && create_if_block_3(ctx)
  );
  function select_block_type(ctx2, dirty) {
    if (
      /*showNumerals*/
      ctx2[4] === false
    )
      return create_if_block_2$1;
    return create_else_block$1;
  }
  let current_block_type = select_block_type(ctx);
  let if_block3 = current_block_type(ctx);
  let if_block4 = (
    /*showPreviousNextButtons*/
    ctx[2] && create_if_block_1$2(ctx)
  );
  let if_block5 = (
    /*showFirstLastButtons*/
    ctx[3] && create_if_block$2(ctx)
  );
  return {
    c() {
      div1 = element("div");
      if (if_block0)
        if_block0.c();
      t0 = space();
      div0 = element("div");
      if (if_block1)
        if_block1.c();
      t1 = space();
      if (if_block2)
        if_block2.c();
      t2 = space();
      if_block3.c();
      t3 = space();
      if (if_block4)
        if_block4.c();
      t4 = space();
      if (if_block5)
        if_block5.c();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true, "data-testid": true });
      var div1_nodes = children(div1);
      if (if_block0)
        if_block0.l(div1_nodes);
      t0 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if (if_block1)
        if_block1.l(div0_nodes);
      t1 = claim_space(div0_nodes);
      if (if_block2)
        if_block2.l(div0_nodes);
      t2 = claim_space(div0_nodes);
      if_block3.l(div0_nodes);
      t3 = claim_space(div0_nodes);
      if (if_block4)
        if_block4.l(div0_nodes);
      t4 = claim_space(div0_nodes);
      if (if_block5)
        if_block5.l(div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", div0_class_value = "paginator-controls " + /*classesControls*/
      ctx[18]);
      attr(div1, "class", div1_class_value = "paginator " + /*classesBase*/
      ctx[21]);
      attr(div1, "data-testid", "paginator");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      if (if_block0)
        if_block0.m(div1, null);
      append_hydration(div1, t0);
      append_hydration(div1, div0);
      if (if_block1)
        if_block1.m(div0, null);
      append_hydration(div0, t1);
      if (if_block2)
        if_block2.m(div0, null);
      append_hydration(div0, t2);
      if_block3.m(div0, null);
      append_hydration(div0, t3);
      if (if_block4)
        if_block4.m(div0, null);
      append_hydration(div0, t4);
      if (if_block5)
        if_block5.m(div0, null);
    },
    p(ctx2, dirty) {
      if (
        /*settings*/
        ctx2[0].amounts.length
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_5(ctx2);
          if_block0.c();
          if_block0.m(div1, t0);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (
        /*showFirstLastButtons*/
        ctx2[3]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_4(ctx2);
          if_block1.c();
          if_block1.m(div0, t1);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (
        /*showPreviousNextButtons*/
        ctx2[2]
      ) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
        } else {
          if_block2 = create_if_block_3(ctx2);
          if_block2.c();
          if_block2.m(div0, t2);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block3) {
        if_block3.p(ctx2, dirty);
      } else {
        if_block3.d(1);
        if_block3 = current_block_type(ctx2);
        if (if_block3) {
          if_block3.c();
          if_block3.m(div0, t3);
        }
      }
      if (
        /*showPreviousNextButtons*/
        ctx2[2]
      ) {
        if (if_block4) {
          if_block4.p(ctx2, dirty);
        } else {
          if_block4 = create_if_block_1$2(ctx2);
          if_block4.c();
          if_block4.m(div0, t4);
        }
      } else if (if_block4) {
        if_block4.d(1);
        if_block4 = null;
      }
      if (
        /*showFirstLastButtons*/
        ctx2[3]
      ) {
        if (if_block5) {
          if_block5.p(ctx2, dirty);
        } else {
          if_block5 = create_if_block$2(ctx2);
          if_block5.c();
          if_block5.m(div0, null);
        }
      } else if (if_block5) {
        if_block5.d(1);
        if_block5 = null;
      }
      if (dirty[0] & /*classesControls*/
      262144 && div0_class_value !== (div0_class_value = "paginator-controls " + /*classesControls*/
      ctx2[18])) {
        attr(div0, "class", div0_class_value);
      }
      if (dirty[0] & /*classesBase*/
      2097152 && div1_class_value !== (div1_class_value = "paginator " + /*classesBase*/
      ctx2[21])) {
        attr(div1, "class", div1_class_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div1);
      }
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      if (if_block2)
        if_block2.d();
      if_block3.d();
      if (if_block4)
        if_block4.d();
      if (if_block5)
        if_block5.d();
    }
  };
}
const cBase = "flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4";
const cLabel = "w-full md:w-auto";
function instance$2($$self, $$props, $$invalidate) {
  let classesButtonActive;
  let classesBase;
  let classesLabel;
  let classesSelect;
  let classesControls;
  const dispatch = createEventDispatcher();
  let { settings = {
    page: 0,
    limit: 5,
    size: 0,
    amounts: [1, 2, 5, 10]
  } } = $$props;
  let { disabled = false } = $$props;
  let { showPreviousNextButtons = true } = $$props;
  let { showFirstLastButtons = false } = $$props;
  let { showNumerals = false } = $$props;
  let { maxNumerals = 1 } = $$props;
  let { justify = "justify-between" } = $$props;
  let { select = "select min-w-[150px]" } = $$props;
  let { amountText = "Items" } = $$props;
  let { regionControl = "btn-group" } = $$props;
  let { controlVariant = "variant-filled" } = $$props;
  let { controlSeparator = "" } = $$props;
  let { active = "variant-filled-primary" } = $$props;
  let { buttonClasses = "!px-3 !py-1.5 fill-current" } = $$props;
  let { buttonTextPrevious = leftArrow } = $$props;
  let { buttonTextNext = rightArrow } = $$props;
  let { buttonTextFirst = leftAngles } = $$props;
  let { buttonTextLast = rightAngles } = $$props;
  let { separatorText = "of" } = $$props;
  let { labelFirst = "First page" } = $$props;
  let { labelPrevious = "Previous page" } = $$props;
  let { labelNext = "Next page" } = $$props;
  let { labelLast = "Last page" } = $$props;
  let lastPage = Math.max(0, Math.ceil(settings.size / settings.limit - 1));
  let controlPages = getNumerals();
  function onChangeLength() {
    dispatch("amount", settings.limit);
    $$invalidate(16, lastPage = Math.max(0, Math.ceil(settings.size / settings.limit - 1)));
    if (settings.page > lastPage) {
      $$invalidate(0, settings.page = lastPage, settings);
    }
    $$invalidate(17, controlPages = getNumerals());
  }
  function gotoPage(page) {
    if (page < 0)
      return;
    $$invalidate(0, settings.page = page, settings);
    dispatch("page", settings.page);
    $$invalidate(17, controlPages = getNumerals());
  }
  function getFullNumerals() {
    const pages = [];
    for (let index = 0; index <= lastPage; index++) {
      pages.push(index);
    }
    return pages;
  }
  function getNumerals() {
    const pages = [];
    const isWithinLeftSection = settings.page < maxNumerals + 2;
    const isWithinRightSection = settings.page > lastPage - (maxNumerals + 2);
    if (lastPage <= maxNumerals * 2 + 1)
      return getFullNumerals();
    pages.push(0);
    if (!isWithinLeftSection)
      pages.push(-1);
    if (isWithinLeftSection || isWithinRightSection) {
      const sectionStart = isWithinLeftSection ? 1 : lastPage - (maxNumerals + 2);
      const sectionEnd = isWithinRightSection ? lastPage - 1 : maxNumerals + 2;
      for (let i = sectionStart; i <= sectionEnd; i++) {
        pages.push(i);
      }
    } else {
      for (let i = settings.page - maxNumerals; i <= settings.page + maxNumerals; i++) {
        pages.push(i);
      }
    }
    if (!isWithinRightSection)
      pages.push(-1);
    pages.push(lastPage);
    return pages;
  }
  function updateSize(size) {
    $$invalidate(16, lastPage = Math.max(0, Math.ceil(size / settings.limit - 1)));
    $$invalidate(17, controlPages = getNumerals());
  }
  function select_1_change_handler() {
    settings.limit = select_value(this);
    $$invalidate(0, settings);
  }
  const click_handler = () => {
    gotoPage(0);
  };
  const click_handler_1 = () => {
    gotoPage(settings.page - 1);
  };
  const click_handler_2 = (page) => gotoPage(page);
  const click_handler_3 = () => {
    gotoPage(settings.page + 1);
  };
  const click_handler_4 = () => {
    gotoPage(lastPage);
  };
  $$self.$$set = ($$new_props) => {
    $$invalidate(42, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("settings" in $$new_props)
      $$invalidate(0, settings = $$new_props.settings);
    if ("disabled" in $$new_props)
      $$invalidate(1, disabled = $$new_props.disabled);
    if ("showPreviousNextButtons" in $$new_props)
      $$invalidate(2, showPreviousNextButtons = $$new_props.showPreviousNextButtons);
    if ("showFirstLastButtons" in $$new_props)
      $$invalidate(3, showFirstLastButtons = $$new_props.showFirstLastButtons);
    if ("showNumerals" in $$new_props)
      $$invalidate(4, showNumerals = $$new_props.showNumerals);
    if ("maxNumerals" in $$new_props)
      $$invalidate(25, maxNumerals = $$new_props.maxNumerals);
    if ("justify" in $$new_props)
      $$invalidate(26, justify = $$new_props.justify);
    if ("select" in $$new_props)
      $$invalidate(27, select = $$new_props.select);
    if ("amountText" in $$new_props)
      $$invalidate(5, amountText = $$new_props.amountText);
    if ("regionControl" in $$new_props)
      $$invalidate(28, regionControl = $$new_props.regionControl);
    if ("controlVariant" in $$new_props)
      $$invalidate(29, controlVariant = $$new_props.controlVariant);
    if ("controlSeparator" in $$new_props)
      $$invalidate(30, controlSeparator = $$new_props.controlSeparator);
    if ("active" in $$new_props)
      $$invalidate(31, active = $$new_props.active);
    if ("buttonClasses" in $$new_props)
      $$invalidate(6, buttonClasses = $$new_props.buttonClasses);
    if ("buttonTextPrevious" in $$new_props)
      $$invalidate(7, buttonTextPrevious = $$new_props.buttonTextPrevious);
    if ("buttonTextNext" in $$new_props)
      $$invalidate(8, buttonTextNext = $$new_props.buttonTextNext);
    if ("buttonTextFirst" in $$new_props)
      $$invalidate(9, buttonTextFirst = $$new_props.buttonTextFirst);
    if ("buttonTextLast" in $$new_props)
      $$invalidate(10, buttonTextLast = $$new_props.buttonTextLast);
    if ("separatorText" in $$new_props)
      $$invalidate(11, separatorText = $$new_props.separatorText);
    if ("labelFirst" in $$new_props)
      $$invalidate(12, labelFirst = $$new_props.labelFirst);
    if ("labelPrevious" in $$new_props)
      $$invalidate(13, labelPrevious = $$new_props.labelPrevious);
    if ("labelNext" in $$new_props)
      $$invalidate(14, labelNext = $$new_props.labelNext);
    if ("labelLast" in $$new_props)
      $$invalidate(15, labelLast = $$new_props.labelLast);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & /*settings*/
    1 | $$self.$$.dirty[1] & /*active*/
    1) {
      $$invalidate(22, classesButtonActive = (page) => {
        return page === settings.page ? `${active} pointer-events-none` : "";
      });
    }
    if ($$self.$$.dirty[0] & /*maxNumerals*/
    33554432) {
      onChangeLength();
    }
    if ($$self.$$.dirty[0] & /*settings*/
    1) {
      updateSize(settings.size);
    }
    $$invalidate(21, classesBase = `${cBase} ${justify} ${$$props.class ?? ""}`);
    if ($$self.$$.dirty[0] & /*select*/
    134217728) {
      $$invalidate(19, classesSelect = `${select}`);
    }
    if ($$self.$$.dirty[0] & /*regionControl, controlVariant, controlSeparator*/
    1879048192) {
      $$invalidate(18, classesControls = `${regionControl} ${controlVariant} ${controlSeparator}`);
    }
  };
  $$invalidate(20, classesLabel = `${cLabel}`);
  $$props = exclude_internal_props($$props);
  return [
    settings,
    disabled,
    showPreviousNextButtons,
    showFirstLastButtons,
    showNumerals,
    amountText,
    buttonClasses,
    buttonTextPrevious,
    buttonTextNext,
    buttonTextFirst,
    buttonTextLast,
    separatorText,
    labelFirst,
    labelPrevious,
    labelNext,
    labelLast,
    lastPage,
    controlPages,
    classesControls,
    classesSelect,
    classesLabel,
    classesBase,
    classesButtonActive,
    onChangeLength,
    gotoPage,
    maxNumerals,
    justify,
    select,
    regionControl,
    controlVariant,
    controlSeparator,
    active,
    select_1_change_handler,
    click_handler,
    click_handler_1,
    click_handler_2,
    click_handler_3,
    click_handler_4
  ];
}
class Paginator extends SvelteComponent {
  constructor(options) {
    super();
    init(
      this,
      options,
      instance$2,
      create_fragment$2,
      safe_not_equal,
      {
        settings: 0,
        disabled: 1,
        showPreviousNextButtons: 2,
        showFirstLastButtons: 3,
        showNumerals: 4,
        maxNumerals: 25,
        justify: 26,
        select: 27,
        amountText: 5,
        regionControl: 28,
        controlVariant: 29,
        controlSeparator: 30,
        active: 31,
        buttonClasses: 6,
        buttonTextPrevious: 7,
        buttonTextNext: 8,
        buttonTextFirst: 9,
        buttonTextLast: 10,
        separatorText: 11,
        labelFirst: 12,
        labelPrevious: 13,
        labelNext: 14,
        labelLast: 15
      },
      null,
      [-1, -1]
    );
  }
}
function create_if_block_2(ctx) {
  let input;
  let mounted;
  let dispose;
  return {
    c() {
      input = element("input");
      this.h();
    },
    l(nodes) {
      input = claim_element(nodes, "INPUT", {
        class: true,
        title: true,
        type: true,
        placeholder: true
      });
      this.h();
    },
    h() {
      attr(input, "class", "input");
      attr(input, "title", "Filter");
      attr(input, "type", "text");
      attr(input, "placeholder", "Filter");
    },
    m(target, anchor) {
      insert_hydration(target, input, anchor);
      set_input_value(
        input,
        /*filters*/
        ctx[1]
      );
      if (!mounted) {
        dispose = [
          listen(input, "keydown", function() {
            if (is_function(
              /*onGo*/
              ctx[6]
            ))
              ctx[6].apply(this, arguments);
          }),
          listen(
            input,
            "input",
            /*input_input_handler*/
            ctx[7]
          )
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & /*filters*/
      2 && input.value !== /*filters*/
      ctx[1]) {
        set_input_value(
          input,
          /*filters*/
          ctx[1]
        );
      }
    },
    d(detaching) {
      if (detaching) {
        detach(input);
      }
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_1$1(ctx) {
  let input;
  let mounted;
  let dispose;
  return {
    c() {
      input = element("input");
      this.h();
    },
    l(nodes) {
      input = claim_element(nodes, "INPUT", {
        class: true,
        title: true,
        type: true,
        placeholder: true
      });
      this.h();
    },
    h() {
      attr(input, "class", "input");
      attr(input, "title", "Sorter");
      attr(input, "type", "text");
      attr(input, "placeholder", "Sorter");
    },
    m(target, anchor) {
      insert_hydration(target, input, anchor);
      set_input_value(
        input,
        /*sorters*/
        ctx[2]
      );
      if (!mounted) {
        dispose = [
          listen(input, "keydown", function() {
            if (is_function(
              /*onGo*/
              ctx[6]
            ))
              ctx[6].apply(this, arguments);
          }),
          listen(
            input,
            "input",
            /*input_input_handler_1*/
            ctx[8]
          )
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & /*sorters*/
      4 && input.value !== /*sorters*/
      ctx[2]) {
        set_input_value(
          input,
          /*sorters*/
          ctx[2]
        );
      }
    },
    d(detaching) {
      if (detaching) {
        detach(input);
      }
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block$1(ctx) {
  let button;
  let textContent = "Go";
  let mounted;
  let dispose;
  return {
    c() {
      button = element("button");
      button.textContent = textContent;
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(button) !== "svelte-150wg83")
        button.textContent = textContent;
      this.h();
    },
    h() {
      attr(button, "class", "btn variant-filled-primary !text-white");
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      if (!mounted) {
        dispose = listen(button, "click", function() {
          if (is_function(
            /*onGo*/
            ctx[6]
          ))
            ctx[6].apply(this, arguments);
        });
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
    },
    d(detaching) {
      if (detaching) {
        detach(button);
      }
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$1(ctx) {
  let div1;
  let div0;
  let t0;
  let t1;
  let t2;
  let p;
  let t3;
  let t4;
  let t5;
  let paginator;
  let updating_settings;
  let current;
  let if_block0 = (
    /*filters*/
    ctx[1] !== void 0 && create_if_block_2(ctx)
  );
  let if_block1 = (
    /*sorters*/
    ctx[2] !== void 0 && create_if_block_1$1(ctx)
  );
  let if_block2 = (
    /*filters*/
    (ctx[1] !== void 0 || /*sorters*/
    ctx[2] !== void 0) && create_if_block$1(ctx)
  );
  function paginator_settings_binding(value) {
    ctx[9](value);
  }
  let paginator_props = {
    showNumerals: true,
    maxNumerals: 1,
    showFirstLastButtons: true,
    showPreviousNextButtons: true
  };
  if (
    /*settings*/
    ctx[0] !== void 0
  ) {
    paginator_props.settings = /*settings*/
    ctx[0];
  }
  paginator = new Paginator({ props: paginator_props });
  binding_callbacks.push(() => bind(paginator, "settings", paginator_settings_binding));
  paginator.$on("page", function() {
    if (is_function(
      /*onPageChange*/
      ctx[4]
    ))
      ctx[4].apply(this, arguments);
  });
  paginator.$on("amount", function() {
    if (is_function(
      /*onAmountChange*/
      ctx[5]
    ))
      ctx[5].apply(this, arguments);
  });
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      if (if_block0)
        if_block0.c();
      t0 = space();
      if (if_block1)
        if_block1.c();
      t1 = space();
      if (if_block2)
        if_block2.c();
      t2 = space();
      p = element("p");
      t3 = text("Total Count: ");
      t4 = text(
        /*totalCount*/
        ctx[3]
      );
      t5 = space();
      create_component(paginator.$$.fragment);
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if (if_block0)
        if_block0.l(div0_nodes);
      t0 = claim_space(div0_nodes);
      if (if_block1)
        if_block1.l(div0_nodes);
      t1 = claim_space(div0_nodes);
      if (if_block2)
        if_block2.l(div0_nodes);
      div0_nodes.forEach(detach);
      t2 = claim_space(div1_nodes);
      p = claim_element(div1_nodes, "P", { class: true });
      var p_nodes = children(p);
      t3 = claim_text(p_nodes, "Total Count: ");
      t4 = claim_text(
        p_nodes,
        /*totalCount*/
        ctx[3]
      );
      p_nodes.forEach(detach);
      t5 = claim_space(div1_nodes);
      claim_component(paginator.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "flex flex-row gap-1");
      attr(p, "class", "my-auto");
      attr(div1, "class", "p-4 flex flex-row flex-wrap justify-between gap-4");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      if (if_block0)
        if_block0.m(div0, null);
      append_hydration(div0, t0);
      if (if_block1)
        if_block1.m(div0, null);
      append_hydration(div0, t1);
      if (if_block2)
        if_block2.m(div0, null);
      append_hydration(div1, t2);
      append_hydration(div1, p);
      append_hydration(p, t3);
      append_hydration(p, t4);
      append_hydration(div1, t5);
      mount_component(paginator, div1, null);
      current = true;
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      if (
        /*filters*/
        ctx[1] !== void 0
      ) {
        if (if_block0) {
          if_block0.p(ctx, dirty);
        } else {
          if_block0 = create_if_block_2(ctx);
          if_block0.c();
          if_block0.m(div0, t0);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (
        /*sorters*/
        ctx[2] !== void 0
      ) {
        if (if_block1) {
          if_block1.p(ctx, dirty);
        } else {
          if_block1 = create_if_block_1$1(ctx);
          if_block1.c();
          if_block1.m(div0, t1);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (
        /*filters*/
        ctx[1] !== void 0 || /*sorters*/
        ctx[2] !== void 0
      ) {
        if (if_block2) {
          if_block2.p(ctx, dirty);
        } else {
          if_block2 = create_if_block$1(ctx);
          if_block2.c();
          if_block2.m(div0, null);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }
      if (!current || dirty & /*totalCount*/
      8)
        set_data(
          t4,
          /*totalCount*/
          ctx[3]
        );
      const paginator_changes = {};
      if (!updating_settings && dirty & /*settings*/
      1) {
        updating_settings = true;
        paginator_changes.settings = /*settings*/
        ctx[0];
        add_flush_callback(() => updating_settings = false);
      }
      paginator.$set(paginator_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(paginator.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(paginator.$$.fragment, local);
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
      if (if_block2)
        if_block2.d();
      destroy_component(paginator);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { totalCount = 0 } = $$props;
  let { settings } = $$props;
  let { onPageChange } = $$props;
  let { onAmountChange } = $$props;
  let { onGo } = $$props;
  let { filters = void 0 } = $$props;
  let { sorters = void 0 } = $$props;
  function input_input_handler() {
    filters = this.value;
    $$invalidate(1, filters);
  }
  function input_input_handler_1() {
    sorters = this.value;
    $$invalidate(2, sorters);
  }
  function paginator_settings_binding(value) {
    settings = value;
    $$invalidate(0, settings);
  }
  $$self.$$set = ($$props2) => {
    if ("totalCount" in $$props2)
      $$invalidate(3, totalCount = $$props2.totalCount);
    if ("settings" in $$props2)
      $$invalidate(0, settings = $$props2.settings);
    if ("onPageChange" in $$props2)
      $$invalidate(4, onPageChange = $$props2.onPageChange);
    if ("onAmountChange" in $$props2)
      $$invalidate(5, onAmountChange = $$props2.onAmountChange);
    if ("onGo" in $$props2)
      $$invalidate(6, onGo = $$props2.onGo);
    if ("filters" in $$props2)
      $$invalidate(1, filters = $$props2.filters);
    if ("sorters" in $$props2)
      $$invalidate(2, sorters = $$props2.sorters);
  };
  return [
    settings,
    filters,
    sorters,
    totalCount,
    onPageChange,
    onAmountChange,
    onGo,
    input_input_handler,
    input_input_handler_1,
    paginator_settings_binding
  ];
}
class Paginator_1 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      totalCount: 3,
      settings: 0,
      onPageChange: 4,
      onAmountChange: 5,
      onGo: 6,
      filters: 1,
      sorters: 2
    });
  }
}
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[9] = list[i];
  return child_ctx;
}
function create_catch_block_1(ctx) {
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
  let promise;
  let t;
  let if_block_anchor;
  let current;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block_1,
    then: create_then_block_1,
    catch: create_catch_block,
    value: 12,
    blocks: [, , ,]
  };
  handle_promise(promise = /*data*/
  ctx[0].totalCount, info);
  function select_block_type(ctx2, dirty) {
    if (
      /*reportData*/
      ctx2[8].length === 0
    )
      return create_if_block;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      info.block.c();
      t = space();
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      info.block.l(nodes);
      t = claim_space(nodes);
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      info.block.m(target, info.anchor = anchor);
      info.mount = () => t.parentNode;
      info.anchor = t;
      insert_hydration(target, t, anchor);
      if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      info.ctx = ctx;
      if (dirty & /*data*/
      1 && promise !== (promise = /*data*/
      ctx[0].totalCount) && handle_promise(promise, info))
        ;
      else {
        update_await_block_branch(info, ctx, dirty);
      }
      if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
        if_block.p(ctx, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx);
        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
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
        detach(t);
        detach(if_block_anchor);
      }
      info.block.d(detaching);
      info.token = null;
      info = null;
      if_block.d(detaching);
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
function create_then_block_1(ctx) {
  let show_if = (
    /*totalCount*/
    ctx[12] > 250 || Number(
      /*data*/
      ctx[0].params.limit
    ) < /*totalCount*/
    ctx[12]
  );
  let if_block_anchor;
  let current;
  let if_block = show_if && create_if_block_1(ctx);
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
      if (dirty & /*data*/
      1)
        show_if = /*totalCount*/
        ctx2[12] > 250 || Number(
          /*data*/
          ctx2[0].params.limit
        ) < /*totalCount*/
        ctx2[12];
      if (show_if) {
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
function create_if_block_1(ctx) {
  let div;
  let paginator;
  let updating_sorters;
  let current;
  function paginator_sorters_binding(value) {
    ctx[6](value);
  }
  let paginator_props = {
    onAmountChange: (
      /*onAmountChange*/
      ctx[3]
    ),
    onGo: (
      /*onGo*/
      ctx[2]
    ),
    onPageChange: (
      /*onPageChange*/
      ctx[4]
    ),
    settings: {
      page: Number(
        /*data*/
        ctx[0].params.page
      ),
      limit: Number(
        /*data*/
        ctx[0].params.limit
      ),
      size: (
        /*totalCount*/
        ctx[12]
      ),
      amounts: [5, 10, 50, 100, 250]
    },
    totalCount: (
      /*totalCount*/
      ctx[12]
    )
  };
  if (
    /*sorters*/
    ctx[1] !== void 0
  ) {
    paginator_props.sorters = /*sorters*/
    ctx[1];
  }
  paginator = new Paginator_1({ props: paginator_props });
  binding_callbacks.push(() => bind(paginator, "sorters", paginator_sorters_binding));
  return {
    c() {
      div = element("div");
      create_component(paginator.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(paginator.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "card p-4");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(paginator, div, null);
      current = true;
    },
    p(ctx2, dirty) {
      const paginator_changes = {};
      if (dirty & /*onAmountChange*/
      8)
        paginator_changes.onAmountChange = /*onAmountChange*/
        ctx2[3];
      if (dirty & /*onGo*/
      4)
        paginator_changes.onGo = /*onGo*/
        ctx2[2];
      if (dirty & /*onPageChange*/
      16)
        paginator_changes.onPageChange = /*onPageChange*/
        ctx2[4];
      if (dirty & /*data*/
      1)
        paginator_changes.settings = {
          page: Number(
            /*data*/
            ctx2[0].params.page
          ),
          limit: Number(
            /*data*/
            ctx2[0].params.limit
          ),
          size: (
            /*totalCount*/
            ctx2[12]
          ),
          amounts: [5, 10, 50, 100, 250]
        };
      if (dirty & /*data*/
      1)
        paginator_changes.totalCount = /*totalCount*/
        ctx2[12];
      if (!updating_sorters && dirty & /*sorters*/
      2) {
        updating_sorters = true;
        paginator_changes.sorters = /*sorters*/
        ctx2[1];
        add_flush_callback(() => updating_sorters = false);
      }
      paginator.$set(paginator_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(paginator.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(paginator.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      destroy_component(paginator);
    }
  };
}
function create_pending_block_1(ctx) {
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
function create_else_block(ctx) {
  let div;
  let table;
  let thead;
  let textContent = `<th>Name</th> <th>DisplayName</th> <th>Sources</th> <th>Created</th> <th>Modified</th> <th>Access Count</th> <th>Entitlement Count</th> <th>Role Count</th> <th></th>`;
  let t16;
  let tbody;
  let each_value = ensure_array_like(
    /*reportData*/
    ctx[8]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      div = element("div");
      table = element("table");
      thead = element("thead");
      thead.innerHTML = textContent;
      t16 = space();
      tbody = element("tbody");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      table = claim_element(div_nodes, "TABLE", { class: true });
      var table_nodes = children(table);
      thead = claim_element(table_nodes, "THEAD", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(thead) !== "svelte-4s8hul")
        thead.innerHTML = textContent;
      t16 = claim_space(table_nodes);
      tbody = claim_element(table_nodes, "TBODY", { class: true });
      var tbody_nodes = children(tbody);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(tbody_nodes);
      }
      tbody_nodes.forEach(detach);
      table_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(thead, "class", "table-head");
      attr(tbody, "class", "table-body");
      attr(table, "class", "table");
      attr(div, "class", "table-container");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, table);
      append_hydration(table, thead);
      append_hydration(table, t16);
      append_hydration(table, tbody);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(tbody, null);
        }
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*data, modalStore*/
      33) {
        each_value = ensure_array_like(
          /*reportData*/
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
            each_blocks[i].m(tbody, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
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
function create_if_block(ctx) {
  let div;
  let textContent = `<p class="text-center text-success-500">No inactive identities with access found</p>`;
  return {
    c() {
      div = element("div");
      div.innerHTML = textContent;
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div) !== "svelte-1el8epx")
        div.innerHTML = textContent;
      this.h();
    },
    h() {
      attr(div, "class", "card p-4");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(div);
      }
    }
  };
}
function create_each_block(ctx) {
  var _a;
  let tr;
  let td0;
  let t0_value = (
    /*identity*/
    ctx[9].name + ""
  );
  let t0;
  let t1;
  let td1;
  let t2_value = (
    /*identity*/
    ctx[9].displayName + ""
  );
  let t2;
  let t3;
  let td2;
  let t4_value = (
    /*identity*/
    ((_a = ctx[9].accounts) == null ? void 0 : _a.map(func).join(", ")) + ""
  );
  let t4;
  let t5;
  let td3;
  let t6_value = formatDate(
    /*identity*/
    ctx[9].created
  ) + "";
  let t6;
  let t7;
  let td4;
  let t8_value = formatDate(
    /*identity*/
    ctx[9].modified
  ) + "";
  let t8;
  let t9;
  let td5;
  let t10_value = (
    /*identity*/
    ctx[9].accessCount + ""
  );
  let t10;
  let t11;
  let td6;
  let t12_value = (
    /*identity*/
    ctx[9].entitlementCount + ""
  );
  let t12;
  let t13;
  let td7;
  let t14_value = (
    /*identity*/
    ctx[9].roleCount + ""
  );
  let t14;
  let t15;
  let td8;
  let div;
  let button;
  let textContent = "View";
  let t17;
  let mounted;
  let dispose;
  function click_handler() {
    return (
      /*click_handler*/
      ctx[7](
        /*identity*/
        ctx[9]
      )
    );
  }
  return {
    c() {
      tr = element("tr");
      td0 = element("td");
      t0 = text(t0_value);
      t1 = space();
      td1 = element("td");
      t2 = text(t2_value);
      t3 = space();
      td2 = element("td");
      t4 = text(t4_value);
      t5 = space();
      td3 = element("td");
      t6 = text(t6_value);
      t7 = space();
      td4 = element("td");
      t8 = text(t8_value);
      t9 = space();
      td5 = element("td");
      t10 = text(t10_value);
      t11 = space();
      td6 = element("td");
      t12 = text(t12_value);
      t13 = space();
      td7 = element("td");
      t14 = text(t14_value);
      t15 = space();
      td8 = element("td");
      div = element("div");
      button = element("button");
      button.textContent = textContent;
      t17 = space();
      this.h();
    },
    l(nodes) {
      tr = claim_element(nodes, "TR", {});
      var tr_nodes = children(tr);
      td0 = claim_element(tr_nodes, "TD", {});
      var td0_nodes = children(td0);
      t0 = claim_text(td0_nodes, t0_value);
      td0_nodes.forEach(detach);
      t1 = claim_space(tr_nodes);
      td1 = claim_element(tr_nodes, "TD", {});
      var td1_nodes = children(td1);
      t2 = claim_text(td1_nodes, t2_value);
      td1_nodes.forEach(detach);
      t3 = claim_space(tr_nodes);
      td2 = claim_element(tr_nodes, "TD", {});
      var td2_nodes = children(td2);
      t4 = claim_text(td2_nodes, t4_value);
      td2_nodes.forEach(detach);
      t5 = claim_space(tr_nodes);
      td3 = claim_element(tr_nodes, "TD", {});
      var td3_nodes = children(td3);
      t6 = claim_text(td3_nodes, t6_value);
      td3_nodes.forEach(detach);
      t7 = claim_space(tr_nodes);
      td4 = claim_element(tr_nodes, "TD", {});
      var td4_nodes = children(td4);
      t8 = claim_text(td4_nodes, t8_value);
      td4_nodes.forEach(detach);
      t9 = claim_space(tr_nodes);
      td5 = claim_element(tr_nodes, "TD", {});
      var td5_nodes = children(td5);
      t10 = claim_text(td5_nodes, t10_value);
      td5_nodes.forEach(detach);
      t11 = claim_space(tr_nodes);
      td6 = claim_element(tr_nodes, "TD", {});
      var td6_nodes = children(td6);
      t12 = claim_text(td6_nodes, t12_value);
      td6_nodes.forEach(detach);
      t13 = claim_space(tr_nodes);
      td7 = claim_element(tr_nodes, "TD", {});
      var td7_nodes = children(td7);
      t14 = claim_text(td7_nodes, t14_value);
      td7_nodes.forEach(detach);
      t15 = claim_space(tr_nodes);
      td8 = claim_element(tr_nodes, "TD", {});
      var td8_nodes = children(td8);
      div = claim_element(td8_nodes, "DIV", { class: true });
      var div_nodes = children(div);
      button = claim_element(div_nodes, "BUTTON", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(button) !== "svelte-oq65oq")
        button.textContent = textContent;
      div_nodes.forEach(detach);
      td8_nodes.forEach(detach);
      t17 = claim_space(tr_nodes);
      tr_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "class", "btn btn-sm variant-filled-primary text-sm !text-white");
      attr(div, "class", "flex flex-col justify-center gap-1");
    },
    m(target, anchor) {
      insert_hydration(target, tr, anchor);
      append_hydration(tr, td0);
      append_hydration(td0, t0);
      append_hydration(tr, t1);
      append_hydration(tr, td1);
      append_hydration(td1, t2);
      append_hydration(tr, t3);
      append_hydration(tr, td2);
      append_hydration(td2, t4);
      append_hydration(tr, t5);
      append_hydration(tr, td3);
      append_hydration(td3, t6);
      append_hydration(tr, t7);
      append_hydration(tr, td4);
      append_hydration(td4, t8);
      append_hydration(tr, t9);
      append_hydration(tr, td5);
      append_hydration(td5, t10);
      append_hydration(tr, t11);
      append_hydration(tr, td6);
      append_hydration(td6, t12);
      append_hydration(tr, t13);
      append_hydration(tr, td7);
      append_hydration(td7, t14);
      append_hydration(tr, t15);
      append_hydration(tr, td8);
      append_hydration(td8, div);
      append_hydration(div, button);
      append_hydration(tr, t17);
      if (!mounted) {
        dispose = listen(button, "click", click_handler);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      var _a2;
      ctx = new_ctx;
      if (dirty & /*data*/
      1 && t0_value !== (t0_value = /*identity*/
      ctx[9].name + ""))
        set_data(t0, t0_value);
      if (dirty & /*data*/
      1 && t2_value !== (t2_value = /*identity*/
      ctx[9].displayName + ""))
        set_data(t2, t2_value);
      if (dirty & /*data*/
      1 && t4_value !== (t4_value = /*identity*/
      ((_a2 = ctx[9].accounts) == null ? void 0 : _a2.map(func).join(", ")) + ""))
        set_data(t4, t4_value);
      if (dirty & /*data*/
      1 && t6_value !== (t6_value = formatDate(
        /*identity*/
        ctx[9].created
      ) + ""))
        set_data(t6, t6_value);
      if (dirty & /*data*/
      1 && t8_value !== (t8_value = formatDate(
        /*identity*/
        ctx[9].modified
      ) + ""))
        set_data(t8, t8_value);
      if (dirty & /*data*/
      1 && t10_value !== (t10_value = /*identity*/
      ctx[9].accessCount + ""))
        set_data(t10, t10_value);
      if (dirty & /*data*/
      1 && t12_value !== (t12_value = /*identity*/
      ctx[9].entitlementCount + ""))
        set_data(t12, t12_value);
      if (dirty & /*data*/
      1 && t14_value !== (t14_value = /*identity*/
      ctx[9].roleCount + ""))
        set_data(t14, t14_value);
    },
    d(detaching) {
      if (detaching) {
        detach(tr);
      }
      mounted = false;
      dispose();
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
      attr(div, "class", "grid h-full place-content-center p-8");
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
  let div1;
  let div0;
  let textContent = `<p class="text-2xl text-center">List of all identities</p>`;
  let t1;
  let promise;
  let current;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block,
    then: create_then_block,
    catch: create_catch_block_1,
    value: 8,
    blocks: [, , ,]
  };
  handle_promise(promise = /*data*/
  ctx[0].reportData, info);
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      div0.innerHTML = textContent;
      t1 = space();
      info.block.c();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div0) !== "svelte-jttew8")
        div0.innerHTML = textContent;
      t1 = claim_space(div1_nodes);
      info.block.l(div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "card p-4");
      attr(div1, "class", "flex justify-center flex-col align-middle gap-2");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div1, t1);
      info.block.m(div1, info.anchor = null);
      info.mount = () => div1;
      info.anchor = null;
      current = true;
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      info.ctx = ctx;
      if (dirty & /*data*/
      1 && promise !== (promise = /*data*/
      ctx[0].reportData) && handle_promise(promise, info))
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
        detach(div1);
      }
      info.block.d();
      info.token = null;
      info = null;
    }
  };
}
const func = (account) => {
  var _a;
  return (_a = account.source) == null ? void 0 : _a.name;
};
function instance($$self, $$props, $$invalidate) {
  let onPageChange;
  let onAmountChange;
  let onGo;
  let { data } = $$props;
  const modalStore = getModalStore();
  let sorters = data.params.sorters || "";
  function paginator_sorters_binding(value) {
    sorters = value;
    $$invalidate(1, sorters);
  }
  const click_handler = (identity) => TriggerCodeModal(identity, modalStore);
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(0, data = $$props2.data);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*data, sorters*/
    3) {
      $$invalidate(4, onPageChange = createOnPageChange({ ...data.params, filters: "", sorters }, "/home/reports/list-of-identities"));
    }
    if ($$self.$$.dirty & /*data, sorters*/
    3) {
      $$invalidate(3, onAmountChange = createOnAmountChange({ ...data.params, filters: "", sorters }, "/home/reports/list-of-identities"));
    }
    if ($$self.$$.dirty & /*data, sorters*/
    3) {
      $$invalidate(2, onGo = createOnGo({ ...data.params, filters: "", sorters }, "/home/reports/list-of-identities"));
    }
  };
  return [
    data,
    sorters,
    onGo,
    onAmountChange,
    onPageChange,
    modalStore,
    paginator_sorters_binding,
    click_handler
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
