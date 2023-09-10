import { createComponent, hydrate, render } from "solid-js/web";
var client_default = (element) => (Component, props, slotted, { client }) => {
  if (!window._$HY) {
    window._$HY = { events: [], completed: /* @__PURE__ */ new WeakSet(), r: {} };
  }
  if (!element.hasAttribute("ssr"))
    return;
  const boostrap = client === "only" ? render : hydrate;
  let slot;
  let _slots = {};
  if (Object.keys(slotted).length > 0) {
    if (client !== "only") {
      const iterator = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, (node) => {
        if (node === element)
          return NodeFilter.FILTER_SKIP;
        if (node.nodeName === "ASTRO-SLOT")
          return NodeFilter.FILTER_ACCEPT;
        if (node.nodeName === "ASTRO-ISLAND")
          return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_SKIP;
      });
      while (slot = iterator.nextNode())
        _slots[slot.getAttribute("name") || "default"] = slot;
    }
    for (const [key, value] of Object.entries(slotted)) {
      if (_slots[key])
        continue;
      _slots[key] = document.createElement("astro-slot");
      if (key !== "default")
        _slots[key].setAttribute("name", key);
      _slots[key].innerHTML = value;
    }
  }
  const { default: children, ...slots } = _slots;
  const renderId = element.dataset.solidRenderId;
  const dispose = boostrap(
    () => createComponent(Component, {
      ...props,
      ...slots,
      children
    }),
    element,
    {
      renderId
    }
  );
  element.addEventListener("astro:unmount", () => dispose(), { once: true });
};
export {
  client_default as default
};
