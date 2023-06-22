import React from "react";
import { ComponentRegistryContext } from "../config/contextHandler";

export default function CoreComponent(props) {
  const { componentName, ...restProps } = props;
  const mergedComponentRegistry = React.useContext(ComponentRegistryContext);

  return componentName && mergedComponentRegistry[componentName]?.comp
    ? React.createElement(mergedComponentRegistry[componentName]?.comp, {
        ...restProps,
      })
    : null;
}
