import { Container, styled } from "@mui/material";
import CoreClasses from "../../styles/CoreClasses";
import { getEffectiveStyle } from "../../styles/CoreUtil";

const defaultStyleClasses = [
  CoreClasses.SC.LAYOUTS.CONTAINER,
  CoreClasses.LAYOUT.FULL_WIDTH_HEIGHT,
];

export const SCContainer = styled(
  Container,
  {},
)((props) => ({
  ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]),
}));
