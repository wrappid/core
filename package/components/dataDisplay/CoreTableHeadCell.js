import React from "react";
import { CoreClasses } from "@wrappid/styles";
import CoreTableCell from "./CoreTableCell";

export default function CoreTableHeadCell(props) {
  return (
    <CoreTableCell
      {...props}
      styleClasses={[CoreClasses.TABLE.TH, ...(props?.styleClasses || [])]}
    >
      {props.children}
    </CoreTableCell>
  );
}
