// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeMenuList } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreMenuList(props) {
  props = sanitizeComponentProps(CoreMenuList, props);
  return <NativeMenuList {...props} />;
}
CoreMenuList.validProps = [
  {
    description: "If true, will focus the [role=\"menu\"] container and move into tab order.",
    name       : "autoFocus",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description: "If true, will focus the first menuitem if variant=\"menu\" or selected item if variant=\"selectedMenu\".",
    name       : "autoFocusItem",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description: "MenuList contents, normally MenuItems.",
    name       : "children",
    types      : [{ type: "node" }],
  },
  {
    description: "If true, will allow focus on disabled items.",
    name       : "disabledItemsFocusable",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description: "If true, the menu items will not wrap focus.",
    name       : "disableListWrap",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description: "The variant to use. Use menu to prevent selected items from impacting the initial focus and the vertical alignment relative to the anchor element.",
    name       : "variant",
    types      : [
      {
        default    : "selectedMenu'",
        type       : "string",
        validValues: ["menu", "selectedMenu"],
      },
    ],
  },
];
CoreMenuList.invalidProps = [];
