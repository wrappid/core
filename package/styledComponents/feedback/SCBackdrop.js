import { Backdrop, styled } from "@mui/material";
import CoreClasses from "../../styles/CoreClasses";
import { getEffectiveStyle } from "../../styles/CoreUtil";
import { theme } from "../../styles/theme/theme";

const defaultStyleClasses = [CoreClasses.SC.FEEDBACK.BACKDROP];

export const SCBackdrop = styled(
  Backdrop,
  {},
)((props) => ({
  ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]),
}));
