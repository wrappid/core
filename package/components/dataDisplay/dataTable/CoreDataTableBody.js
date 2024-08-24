// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreDataTableRow from "./CoreDataTableRow";
import CoreTableBody from "../CoreTableBody";

export default function CoreDataTableBody(props) {
  const { tableActions, loading } = props;
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
      onMouseLeave={() => {
        tableActions && tableActions.length > 0 && handlePopoverClose();
      }}
    >
      <CoreDataTableRow
        {...props}
        handlePopoverClose={handlePopoverClose}
        handlePopoverOpen={handlePopoverOpen}
        anchorEl={anchorEl}
        _rowHoverIndex={_rowHoverIndex}
        loading={loading}
      />
    </CoreTableBody>
  );
}
