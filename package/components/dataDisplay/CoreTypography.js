// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeTypography } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

const CoreTypography = React.forwardRef((props, ref) => {
  //Do not use this directly use CoreParagraph
  props = sanitizeComponentProps(CoreTypography, props);

  return <NativeTypography {...props} ref={ref} />;
});

CoreTypography.displayName = "CoreTypography";
CoreTypography.validProps = [
  {
    description: "The content of the component need to show as it is like a code block.",
    name       : "code",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false],
      },
    ],
  },
  {
    description: "Set the text-align on the component.",
    name       : "align",
    types      : [
      {
        default    : "inherit",
        type       : "string",
        validValues: [
          "center",
          "inherit",
          "justify",
          "left",
          "right"
        ],
      },
    ],
  },
  {
    description: "The component used for the root node. Either a string to use a HTML element or a component.",
    name       : "component",
    types      : [{ type: "elementType" }],
  },
  {
    description: "If true, the text will have a bottom margin.",
    name       : "gutterBottom",
    types      : [
      {
        default    : true,
        type       : "boolean",
        validValues: [true, false],
      },
    ],
  },
  {
    description: "If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.\
    Note that text overflow can only happen with block or inline-block level elements (the element needs to have a width in order to overflow).",
    name : "noWrap",
    types: [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false],
      },
    ],
  },
  {
    description: "If true, the element will be a paragraph element.",
    name       : "paragraph",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false],
      },
    ],
  },
  {
    description: "Applies the theme typography styles.",
    name       : "variant",
    types      : [
      {
        default    : "body1",
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
  {
    description: "The component maps the variant prop to a range of different HTML element types. For instance, subtitle1 to <h6>. If you wish to change that mapping, you can provide your own. Alternatively, you can use the component prop.",
    name       : "variantMapping",
    types      : [
      {
        default: {
          body1    : "p",
          body2    : "p",
          h1       : "h1",
          h2       : "h2",
          h3       : "h3",
          h4       : "h4",
          h5       : "h5",
          h6       : "h6",
          inherit  : "p",
          subtitle1: "h6",
          subtitle2: "h6",
        },
        type: "object",
      },
    ],
  },
];
CoreTypography.invalidProps = [];

export default CoreTypography;
