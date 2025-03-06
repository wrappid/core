import React from "react";
import { BaseComponent } from "./BaseComponent";
import { CoreDividerData } from "./CoreDivider.data";
import { CoreDividerProps } from "./CoreDividerProps";
// @ts-ignore
import { NativeDivider } from "@wrappid/native";

class CoreDividerClass extends BaseComponent<CoreDividerData> {
  constructor(props: CoreDividerProps) {
    super(props);
  }

  render(): JSX.Element {
    // const { children, ...restProps } = this.props;
    const sanitizedProps = { ...this.props };
    // return <NativeDivider {...restProps}>{children}</NativeDivider>;
    return (
      <NativeDivider {...sanitizedProps}>{this.props.children}</NativeDivider>
    );
  }
}

// Functional Component Wrapper
const CoreDivider: React.FC<CoreDividerProps> = (props: CoreDividerProps) => {
  const component = new CoreDividerClass(props);
  return component.render();
};

export default CoreDivider;
