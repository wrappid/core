import { Input, styled } from "@mui/material";
import { CoreClasses } from "@wrappid/styles";
import { getEffectiveStyle } from "@wrappid/styles";

const defaultStyleClasses = [
  CoreClasses.SC.INPUTS.INPUT,
  CoreClasses.DATA_DISPLAY.CORE_INPUT,
];

export const SCInput = styled(
  Input,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
