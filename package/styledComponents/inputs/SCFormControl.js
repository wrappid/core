import { FormControl, styled } from "@mui/material";
import { CoreClasses } from "@wrappid/styles";
import { getEffectiveStyle } from "@wrappid/styles";

const defaultStyleClasses = [
  CoreClasses.SC.INPUTS.FORM_CONTROL,
  CoreClasses.DATA_DISPLAY.CORE_FORM_LABEL,
];

export const SCFormControl = styled(
  FormControl,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
