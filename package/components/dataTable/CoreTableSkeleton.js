// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreTable from "../dataDisplay/CoreTable";
import CoreTableBody from "../dataDisplay/CoreTableBody";
import CoreTableCell from "../dataDisplay/CoreTableCell";
import CoreTableRow from "../dataDisplay/CoreTableRow";
import CoreSkeleton from "../feedback/CoreSkeleton";

export default function CoreTableSkeleton(props) {
  const { showData, maxRowInPage } = props;

  return (
    <CoreTable>
      {/* <CoreTableHead>
        {showData && (
          <CoreTableRow>
            <CoreTableCell
              colSpan={5}
              styleClasses={[CoreClasses.DATA_DISPLAY.TEXT_CENTER]}
            >
              Please select atleast one column to show data on table.
            </CoreTableCell>
          </CoreTableRow>
        )}
        <CoreTableRow>
          {[...Array(5)].map((e, hi) => (
            <CoreTableHeadCell key={`skeleton-cell-${hi}`}>
              <CoreSkeleton variant="text" />
            </CoreTableHeadCell>
          ))}
        </CoreTableRow>
      </CoreTableHead> */}
      <CoreTableBody>
        {[...Array(maxRowInPage)].map((e, ri) => (
          <CoreTableRow key={`skeleton-cell-${ri}`}>
            {[...Array(5)].map((e, ci) => (
              <CoreTableCell key={`skeleton-cell-${ci}`}>
                <CoreSkeleton variant="text" />
              </CoreTableCell>
            ))}
          </CoreTableRow>
        ))}
      </CoreTableBody>
    </CoreTable>
  );
}
