import { BaseComponentData, Prop } from "./POC-PRITAM/BaseComponent";

export class CoreDividerData extends BaseComponentData {
  absolute: Prop = {
    name: "absolute",
    description: "Absolutely position the element.",
    types: [{ type: "boolean", validValues: [true, false] }],
    value: false, // Default value
  };

  component: Prop = {
    name: "component",
    description: "Component used for the root node.",
    types: [{ type: "elementType" }],
    value: undefined, // No default value defined
  };

  flexItem: Prop = {
    name: "flexItem",
    description:
      "If true, a vertical divider will have the correct height in a flex container.",
    types: [{ type: "boolean", validValues: [true, false] }],
    value: false, // Default value
  };

  light: Prop = {
    name: "light",
    description: "If true, the divider will have a lighter color.",
    types: [{ type: "boolean", validValues: [true, false] }],
    value: false, // Default value
  };

  orientation: Prop = {
    name: "orientation",
    description: "The component orientation.",
    types: [{ type: "string", validValues: ["horizontal", "vertical"] }],
    value: "horizontal", // Default value
  };

  textAlign: Prop = {
    name: "textAlign",
    description: "The text alignment.",
    types: [{ type: "string", validValues: ["center", "left", "right"] }],
    value: "center", // Default value
  };

  variant: Prop = {
    name: "variant",
    description: "The variant to use.",
    types: [{ type: "string", validValues: ["fullWidth", "inset", "middle"] }],
    value: "fullWidth", // Default value
  };

  leftInset: Prop = {
    name: "leftInset",
    description: "If true, the divider will be indented to the left.",
    types: [{ type: "boolean", validValues: [true, false] }],
    value: false, // Default value
  };

  horizontalInset: Prop = {
    name: "horizontalInset",
    description: "If true, the divider will be indented to the left and right.",
    types: [{ type: "boolean", validValues: [true, false] }],
    value: false, // Default value
  };

  bold: Prop = {
    name: "bold",
    description: "If true, the divider will be bold.",
    types: [{ type: "boolean", validValues: [true, false] }],
    value: false, // Default value
  };
}