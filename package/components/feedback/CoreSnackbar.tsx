import React, { ReactNode } from "react";
import { withBaseComponent } from "../POC/POC-PRITAM/withBaseComponent";
// @ts-ignore
import { NativeSnackbar } from "@wrappid/native";
import {
  BaseComponent,
  BaseComponentProps
} from "../POC/POC-PRITAM/BaseComponent";
import { CoreSnackbarData } from "./CoreSnackbar.data";

// ✅ Define CoreSnackbar-specific props interface
export interface CoreSnackbarProps extends BaseComponentProps {
  action?: React.ReactNode;
  anchorOrigin?: {
    horizontal: "center" | "left" | "right";
    vertical: "bottom" | "top";
  };
  autoHideDuration?: number;
  children?: React.ReactElement;
  disableWindowBlurListener?: boolean;
  message?: string;
  onClose?: (event: React.SyntheticEvent | Event, reason: string) => void;
  open?: boolean;
  resumeHideDuration?: number;
  TransitionComponent?: React.ElementType;
  transitionDuration?: object;
  TransitionProps?: object;
}

class CoreSnackbarClass extends BaseComponent<CoreSnackbarData> {
  render(): JSX.Element {
    const children = this.getPropValue("children") || null; // Default to null if undefined
    const restProps = Object.keys(this.props)
      .filter((key) => key !== "children")
      .reduce(
        (acc, key) => {
          acc[key] = this.getPropValue(key as keyof CoreSnackbarData);
          return acc;
        },
        {} as Record<string, any>
      );

    return <NativeSnackbar {...restProps}>{children}</NativeSnackbar>;
  }
}

const CoreSnackbar = withBaseComponent<CoreSnackbarData>(
  CoreSnackbarClass
) as React.FC<CoreSnackbarProps>;

export { CoreSnackbar };
