// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeLink } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreLink(props) {
  props = sanitizeComponentProps(CoreLink, props);
  return <NativeLink {...props} />;
}
CoreLink.validProps = [
  {
    name : "title",
    types: [{ default: "", type: "string" }],
  },
  {
    name : "onClick",
    types: [{ type: "function" }],
  },
  {
    name : "href",
    types: [{ default: "", type: "string" }],
  },
  {
    name : "to",
    types: [{ default: "", type: "string" }],
  },
  {
    name : "titlePlacement",
    types: [{ default: "top", type: "string" }],
  },
  {
    name : "titlePlacement",
    types: [{ default: "top", type: "string" }],
  },
  {
    description: "The color of the link.",
    name       : "color",
    types      : [{ default: "primary'", type: "any" }],
  },
  {
    description:
      "The component used for the root node. Either a string to use a HTML element or a component.This needs to be able to hold a ref.",
    name : "component",
    types: [{ default: "", type: "string" }],
  },
  {
    description: "classes prop applied to the Typography element.",
    name       : "TypographyClasses",
    types      : [{ default: "", type: "object" }],
  },
  {
    description: "Controls when the link should have an underline.",
    name       : "underline",
    types      : [
      {
        default    : "always'",
        type       : "string",
        validValues: ["always", "hover", "none"],
      },
    ],
  },
  {
    description: "Applies the theme typography styles.",
    name       : "variant",
    types      : [
      {
        default    : "inherit'",
        type       : "string",
        validValues: [
          "body1",
          "body2",
          "button",
          "caption",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "inherit",
          "overline",
          "subtitle1",
          "subtitle2",
        ],
      },
    ],
  },
];
CoreLink.invalidProps = [];
