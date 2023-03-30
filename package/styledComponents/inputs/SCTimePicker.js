import { styled } from "@mui/material";
import { CoreClasses } from "@wrappid/styles";
import { getEffectiveStyle } from "@wrappid/styles";
import { TimePicker } from "@mui/x-date-pickers";

const defaultStyleClasses = [
  CoreClasses.SC.INPUTS.TIME_PICKER,
  ...CoreClasses.LAYOUT.FULL_WIDTH,
];

export const SCTimePicker = styled(
  TimePicker,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
