import { FormControl, styled } from "@mui/material";
import CoreClasses from "../../styles/CoreClasses";
import { getEffectiveStyle } from "../../styles/CoreUtil";

const defaultStyleClasses = [
  CoreClasses.SC.INPUTS.FORM_CONTROL,
  CoreClasses.DATA_DISPLAY.CORE_FORM_LABEL,
];

export const SCFormControl = styled(
  FormControl,
  {},
)((props) => ({
  ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]),
}));
