// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeGrid } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreGrid(props) {
  props = sanitizeComponentProps(CoreGrid, props);
  return <NativeGrid {...props} />;
}
CoreGrid.validProps = [
  {
    description: "The number of columns.",
    name       : "columns",
    types      : [{ default: 12, type: "Array<number>| number| object" }],
  },
  {
    description:
      "Defines the horizontal space between the type item components. It overrides the value of the spacing prop.",
    name : "columnSpacing",
    types: [{ default: "", type: "Array<number| string>| number| object| string" }],
  },
  {
    description: "",
    name       : "component",
    types      : [{ default: "", type: "elementType" }],
  },
  {
    description:
      "If true, the component will have the flex container behavior. You should be wrapping items with a container.",
    name : "container",
    types: [{ default: false, type: "boolean" }],
  },
  {
    description:
      "Defines the flex-direction style property. It is applied for all screen sizes.",
    name : "direction",
    types: [
      {
        default    : "row'",
        type       : "string",
        validValues: [
          "column-reverse",
          "column",
          "row-reverse",
          "row",
          " Array<'column-reverse'",
          "column",
          "row-reverse",
          "'row'>",
          "object",
        ],
      },
    ],
  },
  {
    description: "",
    name       : "item",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description:
      "If a number, it sets the number of columns the grid item uses. It can't be greater than the total number of columns of the container (12 by default). If 'auto', the grid item's width matches its content. If false, the prop is ignored. If true, the grid item's width grows to use the space available in the grid container. The value is applied for the lg breakpoint and wider screens if not overridden.",
    name : "lg",
    types: [{ type: "auto" }],
  },
  {
    description:
      "If a number, it sets the number of columns the grid item uses. It can't be greater than the total number of columns of the container (12 by default). If 'auto', the grid item's width matches its content. If false, the prop is ignored. If true, the grid item's width grows to use the space available in the grid container. The value is applied for the lg breakpoint and wider screens if not overridden.",
    name : "lg",
    types: [{ type: "number" }],
  },
  {
    description:
      "If a number, it sets the number of columns the grid item uses. It can't be greater than the total number of columns of the container (12 by default). If 'auto', the grid item's width matches its content. If false, the prop is ignored. If true, the grid item's width grows to use the space available in the grid container. The value is applied for the lg breakpoint and wider screens if not overridden.",
    name : "lg",
    types: [{ default: false, type: "boolean" }],
  },
  {
    description:
      "If a number, it sets the number of columns the grid item uses. It can't be greater than the total number of columns of the container (12 by default). If 'auto', the grid item's width matches its content. If false, the prop is ignored. If true, the grid item's width grows to use the space available in the grid container. The value is applied for the md breakpoint and wider screens if not overridden.",
    name : "md",
    types: [{ default: false, type: "boolean" }],
  },
  {
    description:
      "If a number, it sets the number of columns the grid item uses. It can't be greater than the total number of columns of the container (12 by default). If 'auto', the grid item's width matches its content. If false, the prop is ignored. If true, the grid item's width grows to use the space available in the grid container. The value is applied for the md breakpoint and wider screens if not overridden.",
    name : "md",
    types: [{ type: "number" }],
  },
  {
    description:
      "If a number, it sets the number of columns the grid item uses. It can't be greater than the total number of columns of the container (12 by default). If 'auto', the grid item's width matches its content. If false, the prop is ignored. If true, the grid item's width grows to use the space available in the grid container. The value is applied for the md breakpoint and wider screens if not overridden.",
    name : "md",
    types: [{ type: "auto" }],
  },
  {
    description:
      "Defines the vertical space between the type item components. It overrides the value of the spacing prop.",
    name : "rowSpacing",
    types: [{ default: "", type: "Array<number| string>| number| object| string]" }],
  },
  {
    description:
      "If a number, it sets the number of columns the grid item uses. It can't be greater than the total number of columns of the container (12 by default). If 'auto', the grid item's width matches its content. If false, the prop is ignored. If true, the grid item's width grows to use the space available in the grid container. The value is applied for the sm breakpoint and wider screens if not overridden.",
    name : "sm",
    types: [{ default: false, type: "boolean" }],
  },
  {
    description:
      "If a number, it sets the number of columns the grid item uses. It can't be greater than the total number of columns of the container (12 by default). If 'auto', the grid item's width matches its content. If false, the prop is ignored. If true, the grid item's width grows to use the space available in the grid container. The value is applied for the sm breakpoint and wider screens if not overridden.",
    name : "sm",
    types: [{ type: "auto" }],
  },
  {
    description:
      "If a number, it sets the number of columns the grid item uses. It can't be greater than the total number of columns of the container (12 by default). If 'auto', the grid item's width matches its content. If false, the prop is ignored. If true, the grid item's width grows to use the space available in the grid container. The value is applied for the sm breakpoint and wider screens if not overridden.",
    name : "sm",
    types: [{ type: "number" }],
  },
  {
    description:
      "Defines the space between the type item components. It can only be used on a type container component.",
    name : "spacing",
    types: [{ default: "0", type: "Array<number| string>| number| object| string" }],
  },

  {
    description:
      "Defines the flex-wrap style property. It's applied for all screen sizes.",
    name : "wrap",
    types: [
      {
        default    : "wrap'",
        type       : "string",
        validValues: ["nowrap", "wrap-reverse", "wrap"],
      },
    ],
  },
  {
    description:
      "If a number, it sets the number of columns the grid item uses. It can't be greater than the total number of columns of the container (12 by default). If 'auto', the grid item's width matches its content. If false, the prop is ignored. If true, the grid item's width grows to use the space available in the grid container. The value is applied for the xl breakpoint and wider screens if not overridden.",
    name : "xl",
    types: [{ default: false, type: "boolean" }],
  },
  {
    description:
      "If a number, it sets the number of columns the grid item uses. It can't be greater than the total number of columns of the container (12 by default). If 'auto', the grid item's width matches its content. If false, the prop is ignored. If true, the grid item's width grows to use the space available in the grid container. The value is applied for the xl breakpoint and wider screens if not overridden.",
    name : "xl",
    types: [{ type: "number" }],
  },
  {
    description:
      "If a number, it sets the number of columns the grid item uses. It can't be greater than the total number of columns of the container (12 by default). If 'auto', the grid item's width matches its content. If false, the prop is ignored. If true, the grid item's width grows to use the space available in the grid container. The value is applied for the xl breakpoint and wider screens if not overridden.",
    name : "xl",
    types: [{ type: "auto" }],
  },
  {
    description:
      "If a number, it sets the number of columns the grid item uses. It can't be greater than the total number of columns of the container (12 by default). If 'auto', the grid item's width matches its content. If false, the prop is ignored. If true, the grid item's width grows to use the space available in the grid container. The value is applied for all the screen sizes with the lowest priority.",
    name : "xs",
    types: [{ default: false, type: "boolean" }],
  },
  {
    description:
      "If a number, it sets the number of columns the grid item uses. It can't be greater than the total number of columns of the container (12 by default). If 'auto', the grid item's width matches its content. If false, the prop is ignored. If true, the grid item's width grows to use the space available in the grid container. The value is applied for all the screen sizes with the lowest priority.",
    name : "xs",
    types: [{ type: "auto boolean" }],
  },
  {
    description:
      "If a number, it sets the number of columns the grid item uses. It can't be greater than the total number of columns of the container (12 by default). If 'auto', the grid item's width matches its content. If false, the prop is ignored. If true, the grid item's width grows to use the space available in the grid container. The value is applied for all the screen sizes with the lowest priority.",
    name : "xs",
    types: [{ type: "number" }],
  },
  {
    description: "",
    name       : "zeroMinWidth",
    types      : [{ default: false, type: "boolean" }],
  },
];
CoreGrid.invalidPros = ["sx", "classes"];
