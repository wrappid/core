import { Grid, styled } from "@mui/material";
import CoreClasses from "../../styles/CoreClasses";
import { getEffectiveStyle } from "../../styles/CoreUtil";

const defaultStyleClasses = [CoreClasses.SC.LAYOUTS.GRID];

export const SCGrid = styled(
  Grid,
  {},
)(({ styleClasses }) => ({
  ...getEffectiveStyle([...defaultStyleClasses, ...(styleClasses || [])]),
}));
