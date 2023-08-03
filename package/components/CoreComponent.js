import React from "react";
import { ComponentRegistryContext } from "../config/contextHandler";

export default function CoreComponent(props) {
  const { componentName, ...restProps } = props;
  const componentRegistry = React.useContext(ComponentRegistryContext);

  return componentName && componentRegistry[componentName]?.comp
    ? React.createElement(componentRegistry[componentName]?.comp, {
        ...restProps,
      })
    : null;
}
