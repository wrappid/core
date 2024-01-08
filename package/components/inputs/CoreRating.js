// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeRating } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreRating(props) {
  props = sanitizeComponentProps(CoreRating, props);
  return <NativeRating {...props} />;
}
CoreRating.validProps = [
  {
    description: "Default selected stars",
    name       : "defaultValue",
    types      : [{ default: "3", type: "number" }],
  },
  {
    description: "If true, the component is disabled.",
    name       : "disabled",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description: "Removes all hover effects and pointer events.",
    name       : "readOnly",
    types      : [{ default: false, type: "boolean" }]
  },
  {
    description: "Maximum rating.",
    name       : "max",
    types      : [{ default: 5, type: "number" }],
  },
  {
    description: "The minimum increment value change allowed..",
    name       : "precision",
    types      : [{ default: 1, type: "number" }],
  },
  {
    description: "The size of the component",
    name       : "size",
    types      : [{ default: "medium", type: "'small'| 'medium'| 'large'| string " }],
  },
  {
    description: "The rating value, The ref is forwarded to the root element.",
    name       : "value",
    types      : [{ type: "number" }],
  },
];
CoreRating.invalidProps = ["sx", "classes"];

//not tested props -> getLabelText,onChangeActive,emptyIcon,icon,IconContainerComponent,highlightSelectedOnly
