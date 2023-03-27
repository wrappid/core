import { styled, TableBody } from "@mui/material";
import CoreClasses from "../../styles/CoreClasses";
import { getEffectiveStyle } from "../../styles/CoreUtil";

const defaultStyleClasses = [CoreClasses.SC.DATA_DISPLAY.TABLE_BODY];

export const SCTableBody = styled(
  TableBody,
  {},
)((props) => ({
  ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]),
}));
