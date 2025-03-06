import { BaseComponentData, Prop } from "./BaseComponentData.interface";

export class CoreDividerData extends BaseComponentData {
  absolute: Prop = {
    name: "absolute",
    description: "Absolutely position the element.",
    types: [{ type: "boolean", default: false, validValues: [true, false] }],
  };

  component: Prop = {
    name: "component",
    description: "Component used for the root node.",
    types: [{ type: "elementType" }],
  };

  flexItem: Prop = {
    name: "flexItem",
    description:
      "If true, a vertical divider will have the correct height in a flex container.",
    types: [{ type: "boolean", default: false, validValues: [true, false] }],
  };

  light: Prop = {
    name: "light",
    description: "If true, the divider will have a lighter color.",
    types: [{ type: "boolean", default: false, validValues: [true, false] }],
  };

  orientation: Prop = {
    name: "orientation",
    description: "The component orientation.",
    types: [
      {
        type: "string",
        default: "horizontal",
        validValues: ["horizontal", "vertical"],
      },
    ],
  };

  textAlign: Prop = {
    name: "textAlign",
    description: "The text alignment.",
    types: [
      {
        type: "string",
        default: "center",
        validValues: ["center", "left", "right"],
      },
    ],
  };

  variant: Prop = {
    name: "variant",
    description: "The variant to use.",
    types: [
      {
        type: "string",
        default: "fullWidth",
        validValues: ["fullWidth", "inset", "middle"],
      },
    ],
  };

  leftInset: Prop = {
    name: "leftInset",
    description: "If true, the divider will be indented to the left.",
    types: [{ type: "boolean", validValues: [true, false] }],
  };

  horizontalInset: Prop = {
    name: "horizontalInset",
    description: "If true, the divider will be indented to the left and right.",
    types: [{ type: "boolean", validValues: [true, false] }],
  };

  bold: Prop = {
    name: "bold",
    description: "If true, the divider will be bold.",
    types: [{ type: "boolean", validValues: [true, false] }],
  };
}