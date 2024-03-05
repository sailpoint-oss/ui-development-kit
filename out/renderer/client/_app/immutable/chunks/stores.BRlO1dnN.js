import { s as safe_not_equal, z as empty, j as insert_hydration, o as noop, g as detach, m as component_subscribe, V as createEventDispatcher, N as assign, O as exclude_internal_props, e as element, t as text, a as space, c as claim_element, b as children, d as claim_text, f as claim_space, i as attr, k as append_hydration, x as listen, W as action_destroyer, l as set_data, X as is_function, y as run_all, Y as HtmlTagHydration, Z as claim_html_tag } from "./scheduler.fBTsnP2i.js";
import { S as SvelteComponent, i as init } from "./index.DdnDjIf5.js";
import { w as writable } from "./index.D97w0myq.js";
import { s as stores } from "./entry.Cs_QM1XO.js";
const storeHighlightJs = writable(void 0);
function clipboard(node, args) {
  if (!window.isSecureContext) {
    console.error("Clipboard action failed: app not running in secure context, see: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard");
    return {};
  }
  const fireCopyCompleteEvent = () => {
    node.dispatchEvent(new CustomEvent("copyComplete"));
  };
  const onClick = () => {
    if (typeof args === "object") {
      if ("element" in args) {
        const element2 = document.querySelector(`[data-clipboard="${args.element}"]`);
        if (!element2)
          throw new Error(`Missing HTMLElement with an attribute of [data-clipboard="${args.element}"]`);
        copyToClipboard(element2.innerHTML, "text/html").then(fireCopyCompleteEvent);
        return;
      }
      if ("input" in args) {
        const input = document.querySelector(`[data-clipboard="${args.input}"]`);
        if (!input)
          throw new Error(`Missing HTMLInputElement with an attribute of [data-clipboard="${args.input}"]`);
        copyToClipboard(input.value).then(fireCopyCompleteEvent);
        return;
      }
    }
    copyToClipboard(args).then(fireCopyCompleteEvent);
  };
  node.addEventListener("click", onClick);
  return {
    update(newArgs) {
      args = newArgs;
    },
    destroy() {
      node.removeEventListener("click", onClick);
    }
  };
}
async function copyToClipboard(data, mimeType = "text/plain") {
  if (navigator.clipboard.write) {
    await navigator.clipboard.write([
      new ClipboardItem({
        [mimeType]: new Blob([data], {
          type: mimeType
        }),
        ["text/plain"]: new Blob([data], {
          type: "text/plain"
        })
      })
    ]);
  } else {
    await new Promise((resolve) => {
      resolve(navigator.clipboard.writeText(String(data)));
    });
  }
}
function create_if_block(ctx) {
  let div;
  let header;
  let span;
  let t0_value = languageFormatter(
    /*language*/
    ctx[0]
  ) + "";
  let t0;
  let t1;
  let button_1;
  let t2_value = (!/*copyState*/
  ctx[7] ? (
    /*buttonLabel*/
    ctx[3]
  ) : (
    /*buttonCopied*/
    ctx[4]
  )) + "";
  let t2;
  let button_1_class_value;
  let clipboard_action;
  let t3;
  let pre;
  let code_1;
  let code_1_class_value;
  let div_class_value;
  let mounted;
  let dispose;
  function select_block_type(ctx2, dirty) {
    if (
      /*formatted*/
      ctx2[6]
    )
      return create_if_block_1;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      div = element("div");
      header = element("header");
      span = element("span");
      t0 = text(t0_value);
      t1 = space();
      button_1 = element("button");
      t2 = text(t2_value);
      t3 = space();
      pre = element("pre");
      code_1 = element("code");
      if_block.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true, "data-testid": true });
      var div_nodes = children(div);
      header = claim_element(div_nodes, "HEADER", { class: true });
      var header_nodes = children(header);
      span = claim_element(header_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, t0_value);
      span_nodes.forEach(detach);
      t1 = claim_space(header_nodes);
      button_1 = claim_element(header_nodes, "BUTTON", { type: true, class: true });
      var button_1_nodes = children(button_1);
      t2 = claim_text(button_1_nodes, t2_value);
      button_1_nodes.forEach(detach);
      header_nodes.forEach(detach);
      t3 = claim_space(div_nodes);
      pre = claim_element(div_nodes, "PRE", { class: true });
      var pre_nodes = children(pre);
      code_1 = claim_element(pre_nodes, "CODE", { class: true });
      var code_1_nodes = children(code_1);
      if_block.l(code_1_nodes);
      code_1_nodes.forEach(detach);
      pre_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "codeblock-language");
      attr(button_1, "type", "button");
      attr(button_1, "class", button_1_class_value = "codeblock-btn " + /*button*/
      ctx[2]);
      attr(header, "class", "codeblock-header " + cHeader);
      attr(code_1, "class", code_1_class_value = "codeblock-code language-" + /*language*/
      ctx[0] + " lineNumbers");
      attr(pre, "class", "codeblock-pre " + cPre);
      attr(div, "class", div_class_value = "codeblock " + /*classesBase*/
      ctx[8]);
      attr(div, "data-testid", "codeblock");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, header);
      append_hydration(header, span);
      append_hydration(span, t0);
      append_hydration(header, t1);
      append_hydration(header, button_1);
      append_hydration(button_1, t2);
      append_hydration(div, t3);
      append_hydration(div, pre);
      append_hydration(pre, code_1);
      if_block.m(code_1, null);
      if (!mounted) {
        dispose = [
          listen(
            button_1,
            "click",
            /*onCopyClick*/
            ctx[9]
          ),
          action_destroyer(clipboard_action = clipboard.call(
            null,
            button_1,
            /*code*/
            ctx[1]
          ))
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*language*/
      1 && t0_value !== (t0_value = languageFormatter(
        /*language*/
        ctx2[0]
      ) + ""))
        set_data(t0, t0_value);
      if (dirty & /*copyState, buttonLabel, buttonCopied*/
      152 && t2_value !== (t2_value = (!/*copyState*/
      ctx2[7] ? (
        /*buttonLabel*/
        ctx2[3]
      ) : (
        /*buttonCopied*/
        ctx2[4]
      )) + ""))
        set_data(t2, t2_value);
      if (dirty & /*button*/
      4 && button_1_class_value !== (button_1_class_value = "codeblock-btn " + /*button*/
      ctx2[2])) {
        attr(button_1, "class", button_1_class_value);
      }
      if (clipboard_action && is_function(clipboard_action.update) && dirty & /*code*/
      2)
        clipboard_action.update.call(
          null,
          /*code*/
          ctx2[1]
        );
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(code_1, null);
        }
      }
      if (dirty & /*language*/
      1 && code_1_class_value !== (code_1_class_value = "codeblock-code language-" + /*language*/
      ctx2[0] + " lineNumbers")) {
        attr(code_1, "class", code_1_class_value);
      }
      if (dirty & /*classesBase*/
      256 && div_class_value !== (div_class_value = "codeblock " + /*classesBase*/
      ctx2[8])) {
        attr(div, "class", div_class_value);
      }
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_else_block(ctx) {
  let t_value = (
    /*code*/
    ctx[1].trim() + ""
  );
  let t;
  return {
    c() {
      t = text(t_value);
    },
    l(nodes) {
      t = claim_text(nodes, t_value);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*code*/
      2 && t_value !== (t_value = /*code*/
      ctx2[1].trim() + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching) {
        detach(t);
      }
    }
  };
}
function create_if_block_1(ctx) {
  let html_tag;
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
      html_tag.m(
        /*displayCode*/
        ctx[5],
        target,
        anchor
      );
      insert_hydration(target, html_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*displayCode*/
      32)
        html_tag.p(
          /*displayCode*/
          ctx2[5]
        );
    },
    d(detaching) {
      if (detaching) {
        detach(html_anchor);
        html_tag.d();
      }
    }
  };
}
function create_fragment(ctx) {
  let if_block_anchor;
  let if_block = (
    /*language*/
    ctx[0] && /*code*/
    ctx[1] && create_if_block(ctx)
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
    },
    p(ctx2, [dirty]) {
      if (
        /*language*/
        ctx2[0] && /*code*/
        ctx2[1]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(if_block_anchor);
      }
      if (if_block)
        if_block.d(detaching);
    }
  };
}
const cBase = "overflow-hidden shadow";
const cHeader = "text-xs text-white/50 uppercase flex justify-between items-center p-2 pl-4";
const cPre = "whitespace-pre-wrap break-all p-4 pt-1";
function languageFormatter(lang) {
  if (lang === "js")
    return "javascript";
  if (lang === "ts")
    return "typescript";
  if (lang === "shell")
    return "terminal";
  return lang;
}
function instance($$self, $$props, $$invalidate) {
  let classesBase;
  let $storeHighlightJs;
  component_subscribe($$self, storeHighlightJs, ($$value) => $$invalidate(17, $storeHighlightJs = $$value));
  const dispatch = createEventDispatcher();
  let { language = "plaintext" } = $$props;
  let { code = "" } = $$props;
  let { lineNumbers = false } = $$props;
  let { background = "bg-neutral-900/90" } = $$props;
  let { blur = "" } = $$props;
  let { text: text2 = "text-sm" } = $$props;
  let { color = "text-white" } = $$props;
  let { rounded = "rounded-container-token" } = $$props;
  let { shadow = "shadow" } = $$props;
  let { button = "btn btn-sm variant-soft !text-white" } = $$props;
  let { buttonLabel = "Copy" } = $$props;
  let { buttonCopied = "👍" } = $$props;
  let formatted = false;
  let displayCode = code;
  let copyState = false;
  function onCopyClick() {
    $$invalidate(7, copyState = true);
    setTimeout(
      () => {
        $$invalidate(7, copyState = false);
      },
      2e3
    );
    dispatch("copy");
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(19, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("language" in $$new_props)
      $$invalidate(0, language = $$new_props.language);
    if ("code" in $$new_props)
      $$invalidate(1, code = $$new_props.code);
    if ("lineNumbers" in $$new_props)
      $$invalidate(10, lineNumbers = $$new_props.lineNumbers);
    if ("background" in $$new_props)
      $$invalidate(11, background = $$new_props.background);
    if ("blur" in $$new_props)
      $$invalidate(12, blur = $$new_props.blur);
    if ("text" in $$new_props)
      $$invalidate(13, text2 = $$new_props.text);
    if ("color" in $$new_props)
      $$invalidate(14, color = $$new_props.color);
    if ("rounded" in $$new_props)
      $$invalidate(15, rounded = $$new_props.rounded);
    if ("shadow" in $$new_props)
      $$invalidate(16, shadow = $$new_props.shadow);
    if ("button" in $$new_props)
      $$invalidate(2, button = $$new_props.button);
    if ("buttonLabel" in $$new_props)
      $$invalidate(3, buttonLabel = $$new_props.buttonLabel);
    if ("buttonCopied" in $$new_props)
      $$invalidate(4, buttonCopied = $$new_props.buttonCopied);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$storeHighlightJs, code, language*/
    131075) {
      if ($storeHighlightJs !== void 0) {
        $$invalidate(5, displayCode = $storeHighlightJs.highlight(code, { language }).value.trim());
        $$invalidate(6, formatted = true);
      }
    }
    if ($$self.$$.dirty & /*lineNumbers, displayCode*/
    1056) {
      if (lineNumbers) {
        $$invalidate(5, displayCode = displayCode.replace(/^/gm, () => {
          return '<span class="line"></span>	';
        }));
        $$invalidate(6, formatted = true);
      }
    }
    $$invalidate(8, classesBase = `${cBase} ${background} ${blur} ${text2} ${color} ${rounded} ${shadow} ${$$props.class ?? ""}`);
  };
  $$props = exclude_internal_props($$props);
  return [
    language,
    code,
    button,
    buttonLabel,
    buttonCopied,
    displayCode,
    formatted,
    copyState,
    classesBase,
    onCopyClick,
    lineNumbers,
    background,
    blur,
    text2,
    color,
    rounded,
    shadow,
    $storeHighlightJs
  ];
}
class CodeBlock extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {
      language: 0,
      code: 1,
      lineNumbers: 10,
      background: 11,
      blur: 12,
      text: 13,
      color: 14,
      rounded: 15,
      shadow: 16,
      button: 2,
      buttonLabel: 3,
      buttonCopied: 4
    });
  }
}
const getStores = () => {
  const stores$1 = stores;
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
export {
  CodeBlock as C,
  page as p,
  storeHighlightJs as s
};
