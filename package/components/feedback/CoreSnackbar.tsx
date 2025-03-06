// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// @ts-ignore
import { NativeSnackbar } from "@wrappid/native";

import { CoreSnackbarData } from "./CoreSnackbar.data";
import { sanitizeComponentProps } from "../../utils/componentUtil";

const coreSnackbarData = new CoreSnackbarData();

interface CoreSnackbarProps {
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
  [key: string]: any;
}

interface CoreSnackbarComponent extends React.FC<CoreSnackbarProps> {
  validProps?: any;
  invalidProps?: any;
}

const CoreSnackbar: CoreSnackbarComponent = (props) => {
  const sanitizedProps = sanitizeComponentProps(CoreSnackbar, props);

  return <NativeSnackbar {...sanitizedProps} />;
};

CoreSnackbar.validProps = coreSnackbarData.validProps;
CoreSnackbar.invalidProps = coreSnackbarData.invalidProps;

export { CoreSnackbar };