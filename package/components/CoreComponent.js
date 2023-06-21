import React from "react";
import { mergedComponentRegistry } from "../layout/PageContainer";

export default function CoreComponent(props) {
  const { componentName, ...restProps } = props;
  return React.createElement(
    mergedComponentRegistry[componentName]?.comp,
    {...restProps}
  );
}
