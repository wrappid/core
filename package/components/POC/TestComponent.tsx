import React from "react";
import { BaseComponent } from "./BaseComponent";
import {
  BaseComponentData,
  BaseComponentProps,
  Prop,
} from "./BaseComponentData.interface";

interface TestComponentProps extends BaseComponentProps {
  test: string;
}

class TestData extends BaseComponentData {
  test: Prop = {
    name: "test props",
    description: "test description",
    types: [
      {
        type: "string",
      },
    ],
  };
}

class TestComponentClass extends BaseComponent<TestData> {
  constructor(props: TestComponentProps) {
    super(props);
  }
  render(): JSX.Element {
    return <></>;
  }
}

const TestComponent: React.FC<TestComponentProps> = (
  props: TestComponentProps
) => {
  const component = new TestComponentClass(props);
  return component.render();
};

export default TestComponent;
