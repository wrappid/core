/* eslint-disable etc/no-commented-out-code */
// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeListItem } from "@wrappid/native";

// import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreListItem(props) {
  // props = sanitizeComponentProps(CoreListItem, props);
  return <NativeListItem {...props} />;
}

CoreListItem.validProps = [
  {
    description: "Defines the align-items style property.",
    name       : "alignItems",
    types      : [
      {
        default    : "center",
        type       : "string",
        validValues: ["flex-start"]
      }
    ],
    
  },
  {
    description: "If true, the list item is a button (using ButtonBase). Props intended for ButtonBase can then be applied to ListItem.",
    name       : "button",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false],
      },
    ]
  },
  {
    description:
    "The component used for the root node. Either a string to use a HTML element or a component.",
    name : "component",
    types: [{ type: "elementType" }],
  },
  {
    description:
      "The components used for each slot inside. This prop is an alias for the slots prop. It's recommended to use the slots prop instead.",
    name : "components",
    types: [
      {
        default    : {},
        type       : "object",
        validValues: ["{ List?: elementType, Root?: elementType }"],
      },
    ],
  },
  {
    description: "The extra props for the slot components. You can override the existing props or add new ones. This prop is an alias for the slotProps prop. It's recommended to use the slotProps prop instead, as componentsProps will be deprecated in the future.",
    name       : "componentsProps",
    types      : [
      {
        default    : {},
        type       : "object",
        validValues: ["{ List?: object }"],
      }
    ]
  }, 
  {
    description: "If true, compact vertical padding designed for keyboard and mouse input is used. The prop defaults to the value inherited from the parent List component.",
    name       : "dense",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false],
      },
    ]
  },
  {
    description: "If true, the left and right padding is removed.",
    name       : "disableGutters",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false],
      },
    ]
  }, 
  {
    description: "If true, all padding is removed.",
    name       : "disablePadding",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false],
      },
    ]
  },
  {
    description: "If true, a 1px light border is added to the bottom of the list item.",
    name       : "divider",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false],
      },
    ]
  },
  {
    description: "The element to display at the end of ListItem.",
    name       : "secondaryAction",
    types      : ["node"]
  },
  {
    description: "The extra props for the slot components. You can override the existing props or add new ones. This prop is an alias for the componentsProps prop, which will be deprecated in the future.",
    name       : "slotProps",
    types      : [
      {
        default    : {},
        type       : "object",
        validValues: ["{ root?: elementType }"]
      }
    ]
  },
  {
    description: "The components used for each slot inside. This prop is an alias for the components prop, which will be deprecated in the future.",
    name       : "slots",
    types      : [
      {
        default    : {},
        type       : "object",
        validValues: ["{ root?: elementType }"]

      }
    ]
  }
];

CoreListItem.invalidProps = [];
