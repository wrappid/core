// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreSkeleton from "../../feedback/CoreSkeleton";
import CoreTable from "../CoreTable";
import CoreTableBody from "../CoreTableBody";
import CoreTableCell from "../CoreTableCell";
import CoreTableRow from "../CoreTableRow";

export default function CoreTableSkeleton(props) {
  const { maxRowInPage } = props;

  return (
    <CoreTable>
      {/*-- <CoreTableHead>
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
        {[...Array(maxRowInPage)].map((eachEl, index) => (
          <CoreTableRow key={`skeleton-cell-${index}`}>
            {[...Array(5)].map((eachEl, cIndex) => (
              <CoreTableCell key={`skeleton-cell-${cIndex}`}>
                <CoreSkeleton variant="text" />
              </CoreTableCell>
            ))}
          </CoreTableRow>
        ))}
      </CoreTableBody>
    </CoreTable>
  );
}
