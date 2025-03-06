import { BaseComponentProps } from "./BaseComponentData.interface";

export interface CoreDividerProps extends BaseComponentProps {
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
}