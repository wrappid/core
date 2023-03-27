import { Input, styled } from "@mui/material";
import CoreClasses from "../../styles/CoreClasses";
import { getEffectiveStyle } from "../../styles/CoreUtil";

const defaultStyleClasses = [CoreClasses.SC.INPUTS.INPUT, CoreClasses.DATA_DISPLAY.CORE_INPUT];

export const SCInput = styled(
  Input,
  {},
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
