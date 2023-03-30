import { styled } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import { CoreClasses } from "@wrappid/styles";
import { getEffectiveStyle } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.SURFACES.APP_BAR];

export const SCAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
    props?.auth?.uid
      ? CoreClasses.NAVIGATION.APP_BAR_LOGGIN_IN
      : CoreClasses.NAVIGATION.APP_BAR_LOGGED_OUT,
  ]),
}));
