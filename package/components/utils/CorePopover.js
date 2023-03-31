import React from "react";
import { getUUID } from "../../utils/appUtils";
import { SCPopover } from "@wrappid/styled-components";

export default function CorePopover(props) {
  const {
    // popover property
    id = getUUID(),
    // content
    headerComponent,
    children,
    footerComponent,
    ...restProps
  } = props;
  return (
    <SCPopover
      id={id}
      // PaperProps={{
      //   sx: { minWidth: "300px" },
      // }}
      {...restProps}
    >
      {/* <CoreBox styleClasses={[CoreClasses.POPOVER.HEADER]}>
        {headerComponent}
      </CoreBox>
      <CoreBox styleClasses={[CoreClasses.POPOVER.CONTENT]}></CoreBox>
      <CoreBox styleClasses={[CoreClasses.POPOVER.FOOTER]}>
        {footerComponent}
      </CoreBox> */}
      {children}
    </SCPopover>
  );
}
