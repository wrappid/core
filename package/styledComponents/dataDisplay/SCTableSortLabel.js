import { styled, TableSortLabel } from "@mui/material";
import CoreClasses from "../../styles/CoreClasses";
import { getEffectiveStyle } from "../../styles/CoreUtil";

const defaultStyleClasses = [CoreClasses.SC.DATA_DISPLAY.TABLE_SORT_LABEL];

export const SCTableSortLabel = styled(
  TableSortLabel,
  {},
)((props) => ({
  padding: 2,
  ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]),
}));
