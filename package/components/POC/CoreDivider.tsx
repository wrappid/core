import React from "react";
import { withBaseComponent } from "./POC-PRITAM/withBaseComponent";
import {
  BaseComponent,
  BaseComponentProps
} from "./POC-PRITAM/BaseComponent";
// @ts-ignore
import { NativeDivider } from "@wrappid/native";
import { CoreDividerData } from "./CoreDivider.data";

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
