import React from "react";
//@ts-ignore
import { NativeDivider } from "@wrappid/native";
import { CoreDividerData } from "./CoreDivider.data";
import { sanitizeComponentProps } from "../../utils/componentUtil.js";

interface CoreDividerProps {
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
  children?: React.ReactNode;
  [key: string]: any;
}

const coreDividerData = new CoreDividerData();

type ValidProps = typeof coreDividerData.validProps;
type InvalidProps = typeof coreDividerData.invalidProps;

interface CoreDividerComponent extends React.FC<CoreDividerProps> {
  validProps: ValidProps;
  invalidProps: InvalidProps;
}

const CoreDivider: CoreDividerComponent = (props) => {
  const sanitizedProps = sanitizeComponentProps(CoreDivider, props);
  const { children, ...restProps } = sanitizedProps;

  return (
    <NativeDivider {...restProps}>
      {children}
    </NativeDivider>
  );
};

CoreDivider.validProps = coreDividerData.validProps;
CoreDivider.invalidProps = coreDividerData.invalidProps;

export default CoreDivider;