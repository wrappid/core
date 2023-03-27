import { styled, Typography } from "@mui/material";
import CoreClasses from "../../styles/CoreClasses";
import { getEffectiveStyle } from "../../styles/CoreUtil";

const defaultStyleClasses = [CoreClasses.SC.DATA_DISPLAY.TYPOGRAPHY];

export const SCTypography = styled(
  Typography,
  {},
)((props) => ({
  ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]),
}));
