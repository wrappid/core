// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeCardActions } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreCardActions(props) {
  props = sanitizeComponentProps(CoreCardActions, props);

  return <NativeCardActions {...props} />;
}

CoreCardActions.validProps = [
  {
    description: "If true, the actions do not have additional margin.",
    name       : "disableSpacing",
    types      : [{ default: "FALSE", type: "bool", validValues: [true, false] }],
  },
];

CoreCardActions.invalidProps = ["sx", "classes"];
