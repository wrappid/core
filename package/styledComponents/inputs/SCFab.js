import { Fab, styled } from "@mui/material";
import CoreClasses from "../../styles/CoreClasses";
import { getEffectiveStyle } from "../../styles/CoreUtil";

const defaultStyleClasses = [CoreClasses.SC.INPUTS.FAB, CoreClasses.LAYOUT.BUTTON_MARGIN];

export const SCFab = styled(
  Fab,
  {},
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
