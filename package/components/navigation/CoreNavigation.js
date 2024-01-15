// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeNavigation } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreNavigation(props) {
  props = sanitizeComponentProps(CoreNavigation, props);
  return <NativeNavigation>{props.children}</NativeNavigation>;
}
CoreNavigation.validProps = [
  {
    description:
        "The component used for the root node. Either a string to use a HTML element or a component.",
    name : "component",
    types: [{ default: "", type: "elementType" }],
  },
];