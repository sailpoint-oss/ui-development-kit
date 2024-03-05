import { E as is_promise, F as get_current_component, G as set_current_component, H as flush, s as safe_not_equal, e as element, I as svg_element, c as claim_element, b as children, J as claim_svg_element, g as detach, i as attr, K as set_style, A as toggle_class, j as insert_hydration, k as append_hydration, L as compute_slots, M as afterUpdate, N as assign, O as exclude_internal_props, P as create_slot, Q as update_slot_base, R as get_all_dirty_from_scope, S as get_slot_changes } from "./scheduler.fBTsnP2i.js";
import { g as group_outros, a as transition_out, c as check_outros, t as transition_in, S as SvelteComponent, i as init, b as create_component, d as claim_component, m as mount_component, e as destroy_component } from "./index.DdnDjIf5.js";
import "./ProgressBar.svelte_svelte_type_style_lang.DcCzH8ar.js";
function handle_promise(promise, info) {
  const token = info.token = {};
  function update(type, index, key, value) {
    if (info.token !== token)
      return;
    info.resolved = value;
    let child_ctx = info.ctx;
    if (key !== void 0) {
      child_ctx = child_ctx.slice();
      child_ctx[key] = value;
    }
    const block = type && (info.current = type)(child_ctx);
    let needs_flush = false;
    if (info.block) {
      if (info.blocks) {
        info.blocks.forEach((block2, i) => {
          if (i !== index && block2) {
            group_outros();
            transition_out(block2, 1, 1, () => {
              if (info.blocks[i] === block2) {
                info.blocks[i] = null;
              }
            });
            check_outros();
          }
        });
      } else {
        info.block.d(1);
      }
      block.c();
      transition_in(block, 1);
      block.m(info.mount(), info.anchor);
      needs_flush = true;
    }
    info.block = block;
    if (info.blocks)
      info.blocks[index] = block;
    if (needs_flush) {
      flush();
    }
  }
  if (is_promise(promise)) {
    const current_component = get_current_component();
    promise.then(
      (value) => {
        set_current_component(current_component);
        update(info.then, 1, info.value, value);
        set_current_component(null);
      },
      (error) => {
        set_current_component(current_component);
        update(info.catch, 2, info.error, error);
        set_current_component(null);
        if (!info.hasCatch) {
          throw error;
        }
      }
    );
    if (info.current !== info.pending) {
      update(info.pending, 0);
      return true;
    }
  } else {
    if (info.current !== info.then) {
      update(info.then, 1, info.value, promise);
      return true;
    }
    info.resolved = /** @type {T} */
    promise;
  }
}
function update_await_block_branch(info, ctx, dirty) {
  const child_ctx = ctx.slice();
  const { resolved } = info;
  if (info.current === info.then) {
    child_ctx[info.value] = resolved;
  }
  if (info.current === info.catch) {
    child_ctx[info.error] = resolved;
  }
  info.block.p(child_ctx, dirty);
}
function create_if_block(ctx) {
  let text_1;
  let text_1_class_value;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[16].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[15],
    null
  );
  return {
    c() {
      text_1 = svg_element("text");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      text_1 = claim_svg_element(nodes, "text", {
        x: true,
        y: true,
        "text-anchor": true,
        "dominant-baseline": true,
        "font-weight": true,
        "font-size": true,
        class: true
      });
      var text_1_nodes = children(text_1);
      if (default_slot)
        default_slot.l(text_1_nodes);
      text_1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(text_1, "x", "50%");
      attr(text_1, "y", "50%");
      attr(text_1, "text-anchor", "middle");
      attr(text_1, "dominant-baseline", "middle");
      attr(text_1, "font-weight", "bold");
      attr(
        text_1,
        "font-size",
        /*font*/
        ctx[2]
      );
      attr(text_1, "class", text_1_class_value = "progress-radial-text " + /*fill*/
      ctx[7]);
    },
    m(target, anchor) {
      insert_hydration(target, text_1, anchor);
      if (default_slot) {
        default_slot.m(text_1, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        32768)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[15],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[15]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[15],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty & /*font*/
      4) {
        attr(
          text_1,
          "font-size",
          /*font*/
          ctx2[2]
        );
      }
      if (!current || dirty & /*fill*/
      128 && text_1_class_value !== (text_1_class_value = "progress-radial-text " + /*fill*/
      ctx2[7])) {
        attr(text_1, "class", text_1_class_value);
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
      if (detaching) {
        detach(text_1);
      }
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_fragment$1(ctx) {
  let figure;
  let svg;
  let circle0;
  let circle0_class_value;
  let circle1;
  let circle1_class_value;
  let style_stroke_dasharray = `${/*circumference*/
  ctx[9]}
			${/*circumference*/
  ctx[9]}`;
  let figure_class_value;
  let figure_aria_valuenow_value;
  let figure_aria_valuetext_value;
  let current;
  let if_block = (
    /*value*/
    ctx[0] != void 0 && /*value*/
    ctx[0] >= 0 && /*$$slots*/
    ctx[13].default && create_if_block(ctx)
  );
  return {
    c() {
      figure = element("figure");
      svg = svg_element("svg");
      circle0 = svg_element("circle");
      circle1 = svg_element("circle");
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      figure = claim_element(nodes, "FIGURE", {
        class: true,
        "data-testid": true,
        role: true,
        "aria-labelledby": true,
        "aria-valuenow": true,
        "aria-valuetext": true,
        "aria-valuemin": true,
        "aria-valuemax": true
      });
      var figure_nodes = children(figure);
      svg = claim_svg_element(figure_nodes, "svg", { viewBox: true, class: true });
      var svg_nodes = children(svg);
      circle0 = claim_svg_element(svg_nodes, "circle", {
        class: true,
        "stroke-width": true,
        r: true,
        cx: true,
        cy: true
      });
      children(circle0).forEach(detach);
      circle1 = claim_svg_element(svg_nodes, "circle", {
        class: true,
        "stroke-width": true,
        r: true,
        cx: true,
        cy: true,
        "stroke-linecap": true
      });
      children(circle1).forEach(detach);
      if (if_block)
        if_block.l(svg_nodes);
      svg_nodes.forEach(detach);
      figure_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(circle0, "class", circle0_class_value = "progress-radial-track " + cBaseTrack + " " + /*track*/
      ctx[6]);
      attr(
        circle0,
        "stroke-width",
        /*stroke*/
        ctx[1]
      );
      attr(
        circle0,
        "r",
        /*radius*/
        ctx[12]
      );
      attr(circle0, "cx", "50%");
      attr(circle0, "cy", "50%");
      attr(circle1, "class", circle1_class_value = "progress-radial-meter " + cBaseMeter + " " + /*meter*/
      ctx[5] + " " + /*transition*/
      ctx[4]);
      attr(
        circle1,
        "stroke-width",
        /*stroke*/
        ctx[1]
      );
      attr(
        circle1,
        "r",
        /*radius*/
        ctx[12]
      );
      attr(circle1, "cx", "50%");
      attr(circle1, "cy", "50%");
      attr(
        circle1,
        "stroke-linecap",
        /*strokeLinecap*/
        ctx[3]
      );
      set_style(circle1, "stroke-dasharray", style_stroke_dasharray);
      set_style(
        circle1,
        "stroke-dashoffset",
        /*dashoffset*/
        ctx[10]
      );
      attr(svg, "viewBox", "0 0 " + baseSize + " " + baseSize);
      attr(svg, "class", "rounded-full");
      toggle_class(
        svg,
        "animate-spin",
        /*value*/
        ctx[0] === void 0
      );
      attr(figure, "class", figure_class_value = "progress-radial " + /*classesBase*/
      ctx[11]);
      attr(figure, "data-testid", "progress-radial");
      attr(figure, "role", "meter");
      attr(
        figure,
        "aria-labelledby",
        /*labelledby*/
        ctx[8]
      );
      attr(figure, "aria-valuenow", figure_aria_valuenow_value = /*value*/
      ctx[0] || 0);
      attr(figure, "aria-valuetext", figure_aria_valuetext_value = /*value*/
      ctx[0] ? `${/*value*/
      ctx[0]}%` : "Indeterminate Spinner");
      attr(figure, "aria-valuemin", 0);
      attr(figure, "aria-valuemax", 100);
    },
    m(target, anchor) {
      insert_hydration(target, figure, anchor);
      append_hydration(figure, svg);
      append_hydration(svg, circle0);
      append_hydration(svg, circle1);
      if (if_block)
        if_block.m(svg, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (!current || dirty & /*track*/
      64 && circle0_class_value !== (circle0_class_value = "progress-radial-track " + cBaseTrack + " " + /*track*/
      ctx2[6])) {
        attr(circle0, "class", circle0_class_value);
      }
      if (!current || dirty & /*stroke*/
      2) {
        attr(
          circle0,
          "stroke-width",
          /*stroke*/
          ctx2[1]
        );
      }
      if (!current || dirty & /*meter, transition*/
      48 && circle1_class_value !== (circle1_class_value = "progress-radial-meter " + cBaseMeter + " " + /*meter*/
      ctx2[5] + " " + /*transition*/
      ctx2[4])) {
        attr(circle1, "class", circle1_class_value);
      }
      if (!current || dirty & /*stroke*/
      2) {
        attr(
          circle1,
          "stroke-width",
          /*stroke*/
          ctx2[1]
        );
      }
      if (!current || dirty & /*strokeLinecap*/
      8) {
        attr(
          circle1,
          "stroke-linecap",
          /*strokeLinecap*/
          ctx2[3]
        );
      }
      if (dirty & /*circumference*/
      512 && style_stroke_dasharray !== (style_stroke_dasharray = `${/*circumference*/
      ctx2[9]}
			${/*circumference*/
      ctx2[9]}`)) {
        set_style(circle1, "stroke-dasharray", style_stroke_dasharray);
      }
      if (dirty & /*dashoffset*/
      1024) {
        set_style(
          circle1,
          "stroke-dashoffset",
          /*dashoffset*/
          ctx2[10]
        );
      }
      if (
        /*value*/
        ctx2[0] != void 0 && /*value*/
        ctx2[0] >= 0 && /*$$slots*/
        ctx2[13].default
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*value, $$slots*/
          8193) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(svg, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (!current || dirty & /*value, undefined*/
      1) {
        toggle_class(
          svg,
          "animate-spin",
          /*value*/
          ctx2[0] === void 0
        );
      }
      if (!current || dirty & /*classesBase*/
      2048 && figure_class_value !== (figure_class_value = "progress-radial " + /*classesBase*/
      ctx2[11])) {
        attr(figure, "class", figure_class_value);
      }
      if (!current || dirty & /*labelledby*/
      256) {
        attr(
          figure,
          "aria-labelledby",
          /*labelledby*/
          ctx2[8]
        );
      }
      if (!current || dirty & /*value*/
      1 && figure_aria_valuenow_value !== (figure_aria_valuenow_value = /*value*/
      ctx2[0] || 0)) {
        attr(figure, "aria-valuenow", figure_aria_valuenow_value);
      }
      if (!current || dirty & /*value*/
      1 && figure_aria_valuetext_value !== (figure_aria_valuetext_value = /*value*/
      ctx2[0] ? `${/*value*/
      ctx2[0]}%` : "Indeterminate Spinner")) {
        attr(figure, "aria-valuetext", figure_aria_valuetext_value);
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
        detach(figure);
      }
      if (if_block)
        if_block.d();
    }
  };
}
const cBase = "progress-radial relative overflow-hidden";
const cBaseTrack = "fill-transparent";
const cBaseMeter = "fill-transparent -rotate-90 origin-[50%_50%]";
const baseSize = 512;
function instance$1($$self, $$props, $$invalidate) {
  let classesBase;
  let { $$slots: slots = {}, $$scope } = $$props;
  const $$slots = compute_slots(slots);
  let { value = void 0 } = $$props;
  let { stroke = 40 } = $$props;
  let { font = 56 } = $$props;
  let { strokeLinecap = "butt" } = $$props;
  let { transition = "transition-[stroke-dashoffset]" } = $$props;
  let { width = "w-36" } = $$props;
  let { meter = "stroke-surface-900 dark:stroke-surface-50" } = $$props;
  let { track = "stroke-surface-500/30" } = $$props;
  let { fill = "fill-token" } = $$props;
  let { labelledby = "" } = $$props;
  const radius = baseSize / 2 - stroke / 2;
  let circumference = radius;
  let dashoffset;
  function setProgress(percent) {
    $$invalidate(9, circumference = radius * 2 * Math.PI);
    $$invalidate(10, dashoffset = circumference - percent / 100 * circumference);
  }
  setProgress(0);
  afterUpdate(() => {
    setProgress(value === void 0 ? 25 : value);
  });
  $$self.$$set = ($$new_props) => {
    $$invalidate(18, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("value" in $$new_props)
      $$invalidate(0, value = $$new_props.value);
    if ("stroke" in $$new_props)
      $$invalidate(1, stroke = $$new_props.stroke);
    if ("font" in $$new_props)
      $$invalidate(2, font = $$new_props.font);
    if ("strokeLinecap" in $$new_props)
      $$invalidate(3, strokeLinecap = $$new_props.strokeLinecap);
    if ("transition" in $$new_props)
      $$invalidate(4, transition = $$new_props.transition);
    if ("width" in $$new_props)
      $$invalidate(14, width = $$new_props.width);
    if ("meter" in $$new_props)
      $$invalidate(5, meter = $$new_props.meter);
    if ("track" in $$new_props)
      $$invalidate(6, track = $$new_props.track);
    if ("fill" in $$new_props)
      $$invalidate(7, fill = $$new_props.fill);
    if ("labelledby" in $$new_props)
      $$invalidate(8, labelledby = $$new_props.labelledby);
    if ("$$scope" in $$new_props)
      $$invalidate(15, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    $$invalidate(11, classesBase = `${cBase} ${width} ${$$props.class ?? ""}`);
  };
  $$props = exclude_internal_props($$props);
  return [
    value,
    stroke,
    font,
    strokeLinecap,
    transition,
    meter,
    track,
    fill,
    labelledby,
    circumference,
    dashoffset,
    classesBase,
    radius,
    $$slots,
    width,
    $$scope,
    slots
  ];
}
class ProgressRadial extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      value: 0,
      stroke: 1,
      font: 2,
      strokeLinecap: 3,
      transition: 4,
      width: 14,
      meter: 5,
      track: 6,
      fill: 7,
      labelledby: 8
    });
  }
}
function create_fragment(ctx) {
  let div;
  let progressradial;
  let div_class_value;
  let current;
  progressradial = new ProgressRadial({
    props: {
      width: (
        /*width*/
        ctx[0]
      ),
      stroke: 100,
      meter: "stroke-primary-500",
      track: "stroke-primary-500/30",
      class: "progress-bar"
    }
  });
  return {
    c() {
      div = element("div");
      create_component(progressradial.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(progressradial.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", div_class_value = "grid place-content-center " + /*width*/
      ctx[0]);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(progressradial, div, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      const progressradial_changes = {};
      if (dirty & /*width*/
      1)
        progressradial_changes.width = /*width*/
        ctx2[0];
      progressradial.$set(progressradial_changes);
      if (!current || dirty & /*width*/
      1 && div_class_value !== (div_class_value = "grid place-content-center " + /*width*/
      ctx2[0])) {
        attr(div, "class", div_class_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(progressradial.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(progressradial.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      destroy_component(progressradial);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { width = "" } = $$props;
  $$self.$$set = ($$props2) => {
    if ("width" in $$props2)
      $$invalidate(0, width = $$props2.width);
  };
  return [width];
}
class Progress extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { width: 0 });
  }
}
export {
  Progress as P,
  handle_promise as h,
  update_await_block_branch as u
};
