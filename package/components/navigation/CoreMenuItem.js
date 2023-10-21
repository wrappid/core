// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeMenuItem } from "@wrappid/native";

export default function CoreMenuItem(props) {
  return <NativeMenuItem {...props} />;
}
CoreMenuItem.validProps = [
  {
    description:
      "If true, the list item is focused during the first mount. Focus will also be triggered if the value changes from false to true.",
    name: "autoFocus",
    types: [{ default: "FALSE", type: "bool" }],
  },
  {
    description: "The content of the component.",
    name: "children",
    types: [{ default: "", type: "node" }],
  },
  {
    description:
      "Override or extend the styles applied to the component.See CSS API below for more details.",
    name: "classes",
    types: [{ default: "", type: "object" }],
  },
  {
    description:
      "The component used for the root node. Either a string to use a HTML element or a component.",
    name: "component",
    types: [{ default: "", type: "elementType" }],
  },
  {
    description:
      "If true, compact vertical padding designed for keyboard and mouse input is used. The prop defaults to the value inherited from the parent Menu component.",
    name: "dense",
    types: [{ default: "FALSE", type: "bool" }],
  },
  {
    description: "If true, the left and right padding is removed.",
    name: "disableGutters",
    types: [{ default: "FALSE", type: "bool" }],
  },
  {
    description:
      "If true, a 1px light border is added to the bottom of the menu item.",
    name: "divider",
    types: [{ default: "FALSE", type: "bool" }],
  },
  {
    description:
      "This prop can help identify which element has keyboard focus. The class name will be applied when the element gains the focus through keyboard interaction. It's a polyfill for the CSS :focus-visible selector. The rationale for using this feature is explained here. A polyfill can be used to apply a focus-visible class to other components if needed.",
    name: "focusVisibleClassName",
    types: [{ default: "", type: "string" }],
  },
  {
    description: "If true, the component is selected.",
    name: "selected",
    types: [{ default: "FALSE", type: "bool" }],
  },
];
CoreMenuItem.invalidProps = ["sx", "classes"];
