// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeBadge } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";
export default function CoreBadge(props) {
  props = sanitizeComponentProps(CoreBadge, props);

  const {
    anchorOrigin,
    badgeContent,
    children,
    color,
    component,
    components,
    componentsProps,
    invisible,
    max,
    overlap,
    showZero,
    slotProps,
    slot,
    variant,
  } = props;

  return (
    <NativeBadge
      anchorOrigin={anchorOrigin}
      badgeContent={badgeContent}
      color={color}
      component={component}
      components={components}
      componentsProps={componentsProps}
      invisible={invisible}
      max={max}
      overlap={overlap}
      showZero={showZero}
      slotProps={slotProps}
      slot={slot}
      variant={variant}>
      {children}
    </NativeBadge>
  );
}

CoreBadge.validProps = [
  {
    description: "The anchor of the badge.",
    name       : "anchorOrigin",
    types      : [
      {
        default    : { horizontal: "right", vertical: "top" },
        type       : "object",
        validValues: { horizontal: ["left", "right"], vertical: ["bottom", "top"] },
      },
    ],
  },
  {
    description: "The content rendered within the badge.",
    name       : "badgeContent",
    types      : [{ type: "node" }],
  },
  {
    description:
      "The color of the component. It supports both default and custom theme colors, which can be added as shown in the palette customization guide.",
    name : "color",
    types: [
      {
        default    : "default",
        type       : "string",
        validValues: [
          "default",
          "primary",
          "secondary",
          "error",
          "info",
          "success",
          "warning",
        ],
      },
    ],
  },
  {
    description:
      "The component used for the root node. Either a string to use a HTML element or a component.",
    name : "component",
    types: [{ type: "elementType" }],
  },
  {
    description:
      "The components used for each slot inside.This prop is an alias for the slots prop. It's recommended to use the slots prop instead.",
    name : "components",
    types: [{ type: "object" }],
  },
  {
    description:
      "The extra props for the slot components. You can override the existing props or add new ones.This prop is an alias for the slotProps prop. It's recommended to use the slotProps prop instead, as componentsProps will be deprecated in the future.",
    name : "componentsProps",
    types: [
      {
        default    : {},
        type       : "object",
        validValues: { Root: "elementType", badge: "elementType" },
      },
    ],
  },
  {
    description: "If true, the badge is invisible.",
    name       : "invisible",
    types      : [
      {
        default    : false,
        type       : "bool",
        validValues: [true, false],
      },
    ],
  },
  {
    description: "Max count to show.",
    name       : "max",
    types      : [
      {
        default    : 99,
        type       : "number",
        validValues: "",
      },
    ],
  },
  {
    description: "Wrapped shape the badge should overlap.",
    name       : "overlap",
    types      : [
      {
        default    : "rectangular",
        type       : "string",
        validValues: ["circular", "rectangular"],
      },
    ],
  },
  {
    description:
      "Controls whether the badge is hidden when badgeContent is zero.",
    name : "showZero",
    types: [
      {
        default    : false,
        type       : "bool",
        validValues: [true, false],
      },
    ],
  },
  {
    description: "The props used for each slot inside the Badge.",
    name       : "slotProps",
    types      : [
      {
        default    : {},
        type       : "object",
        validValues: [
          {
            badge: "func",
            root : "func",
          },
        ],
      },
    ],
  },
  {
    description:
      "The components used for each slot inside the Badge. Either a string to use a HTML element or a component.",
    name : "slot",
    types: [
      {
        default    : {},
        type       : "object",
        validValues: [{ badge: "elementType", root: "elementType" }],
      },
    ],
  },
  {
    description: "The variant to use.",
    name       : "variant",
    types      : [
      {
        default    : "standard",
        type       : "string",
        validValues: ["dot", "standard"],
      },
    ],
  },
];

CoreBadge.invalidProps = ["sx", "classes"];
