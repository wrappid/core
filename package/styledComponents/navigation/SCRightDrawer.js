import { styled } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import config from "../../config/config";
import { CoreClasses } from "@wrappid/styles";
import { getEffectiveStyle } from "@wrappid/styles";

export const SCRightDrawer = styled(
  MuiDrawer,
  {}
)((props) => ({
  width: props.open ? config.drawerWidth : 0,
  "& .MuiDrawer-paper": { width: config.drawerWidth },
  ...getEffectiveStyle([
    CoreClasses.APP.APPBAR_HEIGHT,
    ...(props?.styleClasses || []),
  ]),
}));
