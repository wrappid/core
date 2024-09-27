// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeToolBox } from "@wrappid/native";

import CoreCard from "./CoreCard";
import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreToolBox(props) {
  props = sanitizeComponentProps(CoreToolBox, props);

  return <NativeToolBox {...props} />;
}

CoreToolBox.validProps = [
  ...CoreCard.validProps,
  {
    description: "Controls the resize behavior of the card.",
    name       : "resize",
    types      : [
      {
        default    : "none",
        type       : "string",
        validValues: ["both", "horizontal", "vertical", "none"]
      }
    ]
  },
  {
    description: "The title displayed in the card header.",
    name       : "toolTitle",
    types      : [
      {
        default    : "",
        type       : "string",
        validValues: [] 
      }
    ]
  },
  {
    description: "The initial horizontal position of the card.",
    name       : "positionLeft",
    types      : [
      {
        default    : undefined,
        type       : "number",
        validValues: [] 
      }
    ]
  },
  {
    description: "The initial vertical position of the card.",
    name       : "positionTop",
    types      : [
      {
        default    : undefined,
        type       : "number",
        validValues: [] 
      }
    ]
  }
];

CoreToolBox.invalidProps = [];
