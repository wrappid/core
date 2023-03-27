import { MenuItem, styled } from "@mui/material";
import CoreClasses from "../../styles/CoreClasses";
import { getEffectiveStyle } from "../../styles/CoreUtil";

const defaultStyleClasses = [CoreClasses.SC.NAVIGATION.MENU_ITEM];

export const SCMenuItem = styled(
  MenuItem,
  {},
)((props) => ({
  backgroundColor: "#fff",
  ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]),
}));
