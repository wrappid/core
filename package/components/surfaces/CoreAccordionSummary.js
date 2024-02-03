// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeAccordionSummary } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreAccordionSummary(props) {
  props = sanitizeComponentProps(CoreAccordionSummary, props);
  return <NativeAccordionSummary {...props} />;
}
CoreAccordionSummary.validProps = [
  {
    description: "The icon to display as the expand indicator.",
    name       : "expandIcon",
    types      : [{ type: "node" }],
  },
  {
    description:
      "This prop can help identify which element has keyboard focus. The class name will be applied when the element gains the focus through keyboard interaction. It's a polyfill for the CSS :focus-visible selector. The rationale for using this feature is explained here. A polyfill can be used to apply a focus-visible class to other components if needed.",
    name : "focusVisibleClassName",
    types: [{ type: "string" }],
  },
];

CoreAccordionSummary.invalidProps = [];
