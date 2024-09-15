// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeSkeleton } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreSkeleton(props) {
  props = sanitizeComponentProps(CoreSkeleton, props);

  return (
    <NativeSkeleton
      {...props}
    />
  );
}

CoreSkeleton.validProps = [
  {
    description: "The animation. If false the animation effect is disabled.",
    name       : "animation",
    types      : [
      {
        default    : "pulse",
        type       : "string",
        validValues: ["pulse", "wave"],
      },
    ],
  },
  {
    description: "The animation. If false the animation effect is disabled.",
    name       : "animation",
    types      : [
      {
        type       : "boolean",
        validValues: [false],
      },
    ],
  },
  {
    description: "Optional children to infer width and height from.",
    name       : "children",
    types      : [{ type: "node" }],
  },
  {
    description: "The component used for the root node. Either a string to use a HTML element or a component.",
    name       : "component",
    types      : [{ type: "elementType" }],
  },
  {
    description: "Height of the skeleton. Useful when you don't want to adapt the skeleton to a text element but for instance a card.",
    name       : "height",
    types      : [{ type: "string" }, { type: "number" }],
  },
  {
    description: "The type of content that will be rendered.",
    name       : "variant",
    types      : [
      {
        default    : "text",
        type       : "string",
        validValues: ["circular", "rectangular", "rounded", "text"],
      },
    ],
  },
  {
    description: "Width of the skeleton. Useful when the skeleton is inside an inline element with no width of its own.",
    name       : "width",
    types      : [{ type: "string" }, { type: "number" }],
  },
];
CoreSkeleton.invalidProps = [];
