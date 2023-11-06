// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CorePopover from "../utils/CorePopover";

export default function CoreDataTableRowActionPopover(props) {
  const { anchorEl, _rowHoverIndex, rowIndex } = props;

  return (
    <CorePopover
      id="mouse-over-popover"
      sx={{
        boxShadow    : "none",
        pointerEvents: "none",
      }}
      open={_rowHoverIndex === rowIndex}
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: "right",
        vertical  : "center",
      }}
      transformOrigin={{
        horizontal: "right",
        vertical  : "center",
      }}
      hideBackdrop={true}
      PaperProps={{
        elevation: 0,
        sx       : { pointerEvents: "auto" },
      }}
    >
      {props.children}
    </CorePopover>
  );
}
