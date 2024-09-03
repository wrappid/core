// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreTableCell from "./CoreTableCell";

export default function CoreTableBodyCell(props) {
  return (
    <CoreTableCell {...props}>
      {/* eslint-disable-next-line etc/no-commented-out-code */}
      {/* <CoreTypographyBody1 lineLimit={2}>{props.children}</CoreTypographyBody1> */}
      {props.children}
    </CoreTableCell>
  );
}

CoreTableBodyCell.validProps = [...CoreTableCell.validProps];
CoreTableBodyCell.invalidProps = [];
