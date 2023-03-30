import { FormControlLabel, styled } from "@mui/material";
import { CoreClasses } from "@wrappid/styles";
import { getEffectiveStyle } from "@wrappid/styles";

const defaultStyleClasses = [
  CoreClasses.SC.INPUTS.FORM_CONTROL_LABEL,
  CoreClasses.DATA_DISPLAY.CORE_FORM_LABEL,
];

export const SCFormControlLabel = styled(
  FormControlLabel,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
