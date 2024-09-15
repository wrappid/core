// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreButton from "./CoreButton";
import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreTextButton(props) {
  props = sanitizeComponentProps(CoreTextButton, props);
  return <CoreButton variant="text" {...props} />;
}

CoreTextButton.validProps = [
  ...CoreButton.validProps,
  {
    name : "activeOpacity",
    types: [{ default: 0.2, type: "number" }]
  },
  {
    name : "nextFocusDown",
    types: [{ type: "number" }]
  },
  {
    name : "nextFocusForward",
    types: [{ type: "number" }]
  },
  {
    name : "nextFocusLeft",
    types: [{ type: "number" }]
  },
  {
    name : "nextFocusRight",
    types: [{ type: "number" }]
  },
  {
    name : "nextFocusUp",
    types: [{ type: "number" }]
  }
];
CoreTextButton.invalidProps = [];
