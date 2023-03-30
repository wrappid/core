import { Paper, styled } from "@mui/material";
import { CoreClasses } from "@wrappid/styles";
import { getEffectiveStyle } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.LAYOUTS.GRID_ITEM];

export const SCGridItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  ...getEffectiveStyle([...defaultStyleClasses]),
}));
