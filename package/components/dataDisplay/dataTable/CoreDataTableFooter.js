// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreTableCell from "../CoreTableCell";
import CoreTableFooter from "../CoreTableFooter";
import CoreTableRow from "../CoreTableRow";

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
