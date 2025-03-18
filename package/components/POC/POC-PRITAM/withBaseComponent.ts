import React, { ReactNode, FunctionComponent } from "react";
import { BaseComponent, BaseComponentData, BaseComponentProps } from "./BaseComponent";

// ✅ Define the type for wrapped components
export interface WrappedComponentFC<T extends BaseComponentData = BaseComponentData>
  extends FunctionComponent<BaseComponentProps> {
  (props: BaseComponentProps): ReactNode;
}

// ✅ HOC: Wraps a class-based BaseComponent into a functional component
export function withBaseComponent<T extends BaseComponentData>(
  ComponentClass: new (props: BaseComponentProps) => BaseComponent<T>
): WrappedComponentFC<T> {
  return (props: BaseComponentProps) => {
    const componentInstance = new ComponentClass(props);
    return componentInstance.render();
  };
}