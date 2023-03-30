import { Button, styled } from "@mui/material";
import { CoreClasses } from "@wrappid/styles";
import { getEffectiveStyle } from "@wrappid/styles";

const defaultStyleClasses = [
  CoreClasses.SC.INPUTS.BUTTON, // specific styled components classes const goes in StyledComponentsClasses.js
  CoreClasses.LAYOUT.BUTTON_MARGIN, // This was previously given as default need to revisit and remove
];

export const SCButton = styled(
  Button,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
