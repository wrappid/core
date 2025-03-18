import React from "react";
import { withBaseComponent } from "./withBaseComponent";
import {
  BaseComponent,
  BaseComponentData,
  Prop,
  BaseComponentProps,
} from "./BaseComponent";

// ✅ Define TestComponent-specific props interface
interface TestComponentProps extends BaseComponentProps {
  test?: string; // Custom prop
}

// ✅ Define TestComponent-specific data class (inherits BaseComponentData)
class TestComponentData extends BaseComponentData {
  test: Prop = {
    name: "test",
    description: "A custom test prop",
    types: [{ type: "string" }],
    value: "Default Test Value",
  };
}

// ✅ Define class-based behavior using BaseComponent
class TestComponentClass extends BaseComponent<TestComponentData> {
  render(): JSX.Element {
    const { children, styleClasses, ...restProps } = this.props as any;

    return (
      <div className={this.getPropValue("styleClasses")} {...restProps}>
        <strong>Test Prop:</strong> {this.getPropValue("test")}
        <br />
        <strong>Children:</strong> {children?.value}
      </div>
    );
  }
}

// ✅ Wrap the class into a functional component using HOC
const TestComponent = withBaseComponent<TestComponentData>(
  TestComponentClass
) as React.FC<TestComponentProps>;

export default TestComponent;