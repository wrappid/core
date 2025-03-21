import React from "react";
import { withBaseComponent } from "./POC-PRITAM/withBaseComponent";
import {
  BaseComponent,
  BaseComponentData,
  Prop,
  BaseComponentProps,
} from "./POC-PRITAM/BaseComponent";
// @ts-ignore
import { NativeDivider } from "@wrappid/native";

// ✅ Define TestComponent-specific props interface
interface CoreDividerProps extends BaseComponentProps {
  absolute?: boolean;
  component?: React.ElementType;
  flexItem?: boolean;
  light?: boolean;
  orientation?: "horizontal" | "vertical";
  textAlign?: "center" | "left" | "right";
  variant?: "fullWidth" | "inset" | "middle";
  leftInset?: boolean;
  horizontalInset?: boolean;
  bold?: boolean;
}

// ✅ Define TestComponent-specific data class (inherits BaseComponentData)
class CoreDividerData extends BaseComponentData {
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

// ✅ Define class-based behavior using BaseComponent
class CoreDividerClass extends BaseComponent<CoreDividerData> {
  render(): JSX.Element {
    const children = this.getPropValue("children") || null; // Default to null if undefined

    const restProps = Object.keys(this.props)
      .filter((key) => key !== "children")
      .reduce(
        (acc, key) => {
          acc[key] = this.getPropValue(key as keyof CoreDividerData);
          return acc;
        },
        {} as Record<string, any>
      );

    console.log("Rest Props:", restProps);
    console.log("Children:", children);

    return <NativeDivider {...restProps}>{children}</NativeDivider>;
  }
}

// ✅ Wrap the class into a functional component using HOC
const CoreDivider = withBaseComponent<CoreDividerData>(
  CoreDividerClass
) as React.FC<CoreDividerProps>;

export default CoreDivider;
