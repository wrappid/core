import React from "react";
import CoreTableBody from "../dataDisplay/CoreTableBody";
import CoreDataTableRow from "./CoreDataTableRow";

export default function CoreDataTableBody(props) {
  // popover action on hover
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [_rowHoverIndex, set_rowHoverIndex] = React.useState(null);
  const handlePopoverOpen = (event, rowIndex) => {
    set_rowHoverIndex(rowIndex);
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    set_rowHoverIndex(null);
    setAnchorEl(null);
  };

  return (
    <CoreTableBody
      {...props.tableHead}
      onMouseLeave={(e) => {
        console.log("Mouse Leave on table");
        tableActions && tableActions.length > 0 && handlePopoverClose();
      }}
    >
      <CoreDataTableRow
        {...props}
        handlePopoverClose={handlePopoverClose}
        handlePopoverOpen={handlePopoverOpen}
        anchorEl={anchorEl}
        _rowHoverIndex={_rowHoverIndex}
      />
    </CoreTableBody>
  );
}
