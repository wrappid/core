import React from "react";
import { SCIconButton } from "@wrappid/styled-components";
import CoreTooltip from "../dataDisplay/CoreTooltip";

export default function CoreIconButton(props) {
  const {
    title,
    titlePlacement = "bottom",
    size = "small",
    ...restProps
  } = props;
  return (
    <>
      {title ? (
        <CoreTooltip title={title} arrow placement={titlePlacement}>
          <SCIconButton {...restProps} size={size} />
        </CoreTooltip>
      ) : (
        <SCIconButton {...restProps} size={size} />
      )}
    </>
  );
}
