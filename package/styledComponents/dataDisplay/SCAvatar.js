import { styled, Avatar } from "@mui/material";
import CoreClasses from "../../styles/CoreClasses";
import { getEffectiveStyle } from "../../styles/CoreUtil";

const defaultStyleClasses = [
  CoreClasses.SC.DATA_DISPLAY.AVATAR,
  CoreClasses.DATA_DISPLAY.AVATAR,
];

export const SCAvatar = styled(
  Avatar,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
