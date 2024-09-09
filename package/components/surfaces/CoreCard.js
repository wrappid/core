// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeCard } from "@wrappid/native";

import CorePaper from "./CorePaper";
import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreCard(props) {
  props = sanitizeComponentProps(CoreCard, props);

  return <NativeCard {...props} />;
}
CoreCard.validProps = [
  ...CorePaper.validProps,
  {
    description: "If true, the card will use raised styling.",
    name       : "raised",
    types      : [{ default: false, type: "boolean", validValues: [true, false] }],
  },
  {
    name : "onClick", 
    types: [{ type: "function" }], 
  },
];

CoreCard.invalidProps = [];
