import { styled } from "@mui/material";
import { CoreClasses } from "@wrappid/styles";
import { getEffectiveStyle } from "@wrappid/styles";
import { DesktopDateTimePicker } from "@mui/x-date-pickers";

const defaultStyleClasses = [
  CoreClasses.SC.INPUTS.DATE_TIME_PICKER,
  ...CoreClasses.LAYOUT.FULL_WIDTH,
];

export const SCDateTimePicker = styled(
  DesktopDateTimePicker,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
