// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreTableCell from "../dataDisplay/CoreTableCell";
import CoreTableFooter from "../dataDisplay/CoreTableFooter";
import CoreTableRow from "../dataDisplay/CoreTableRow";

// eslint-disable-next-line no-unused-vars
export default function CoreDataTableFooter(props) {
  return (
    <CoreTableFooter>
      <CoreTableRow>
        <CoreTableCell>Table Footer</CoreTableCell>
      </CoreTableRow>
    </CoreTableFooter>
  );
}
