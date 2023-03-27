import { Tab, styled } from "@mui/material";
import CoreClasses from "../../styles/CoreClasses";
import { getEffectiveStyle } from "../../styles/CoreUtil";

const defaultStyleClasses = [CoreClasses.SC.NAVIGATION.TAB];

export const SCTab = styled(
  Tab,
  {},
)((props) => ({
  ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]),
}));
