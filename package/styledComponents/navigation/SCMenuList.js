import { MenuList, styled } from "@mui/material";
import CoreClasses from "../../styles/CoreClasses";
import { getEffectiveStyle } from "../../styles/CoreUtil";

const defaultStyleClasses = [CoreClasses.SC.NAVIGATION.MENU_LIST];

export const SCMenuList = styled(
  MenuList,
  {},
)((props) => ({
  backgroundColor: "#fff",
  ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]),
}));
