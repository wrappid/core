// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeTableHeadCell } from "@wrappid/native";

import CoreTableCell from "./CoreTableCell";
import CoreClasses from "../../styles/CoreClasses";

export default function CoreTableHeadCell(props) {
  return (
    <NativeTableHeadCell
      {...props}
      styleClasses={[CoreClasses.TABLE.TH, ...(props?.styleClasses || [])]}
    >
      {props.children}
    </NativeTableHeadCell>
  );
}

CoreTableHeadCell.validProps = [...CoreTableCell.validProps];
CoreTableHeadCell.invalidProps = [];