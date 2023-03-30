import { styled, Avatar } from "@mui/material";
import { CoreClasses } from "@wrappid/styles";
import { getEffectiveStyle } from "@wrappid/styles";

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
