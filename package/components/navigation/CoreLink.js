import React from "react";

import { SCLink } from "@wrappid/styled-components";
import CoreTooltip from "../dataDisplay/CoreTooltip";

export default function CoreLink(props) {
  const { title, titlePlacement = "top", size = "small", ...restProps } = props;
  return (
    <>
      {title ? (
        <CoreTooltip title={title} arrow placement={titlePlacement}>
          <SCLink {...restProps} underline="none">
            {restProps.children}
          </SCLink>
        </CoreTooltip>
      ) : (
        <SCLink {...restProps} underline="none">
          {restProps.children}
        </SCLink>
      )}
    </>
  );
}
