import React from "react";
import CorePopover from "../utils/CorePopover";

export default function CoreDataTableRowActionPopover(props) {
  const { anchorEl, _rowHoverIndex, rowIndex } = props;

  return (
    <CorePopover
      id="mouse-over-popover"
      sx={{
        pointerEvents: "none",
        boxShadow: "none",
      }}
      open={_rowHoverIndex === rowIndex}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "center",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "center",
        horizontal: "right",
      }}
      hideBackdrop={true}
      PaperProps={{
        elevation: 0,
        sx: { pointerEvents: "auto" },
      }}
    >
      {props.children}
    </CorePopover>
  );
}
