import React from "react";
import CoreTableCell from "../dataDisplay/CoreTableCell";
import CoreTableFooter from "../dataDisplay/CoreTableFooter";
import CoreTableRow from "../dataDisplay/CoreTableRow";

export default function CoreDataTableFooter(props) {
  return (
    <CoreTableFooter>
      <CoreTableRow>
        <CoreTableCell>Table Footer</CoreTableCell>
      </CoreTableRow>
    </CoreTableFooter>
  );
}
