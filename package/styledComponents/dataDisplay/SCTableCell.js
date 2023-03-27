import { styled, TableCell } from "@mui/material";
import { getEffectiveStyle } from "../../styles/CoreUtil";
import CoreClasses from "./../../styles/CoreClasses";

const defaultStyleClasses = [CoreClasses.SC.DATA_DISPLAY.TABLE_CELL, CoreClasses.TABLE.TD];

export const SCTableCell = styled(
  TableCell,
  {},
)((props) => ({
  ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]),
}));
