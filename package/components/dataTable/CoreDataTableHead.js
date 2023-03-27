import * as React from "react";
import CoreTableHead from "../dataDisplay/CoreTableHead";
import CoreTableRow from "../dataDisplay/CoreTableRow";
import CoreTableHeadCell from "../dataDisplay/CoreTableHeadCell";
import { getLabel } from "../../utils/stringUtils";
import CoreCheckbox from "../inputs/CoreCheckbox";
import CoreTableSortLabel from "../dataDisplay/CoreTableSortLabel";
import CoreTypographyBody1 from "../dataDisplay/paragraph/CoreTypographyBody1";
import CoreClasses from "../../styles/CoreClasses";

export default function CoreDataTableHead(props) {
  const {
    tableHeadProps,
    tableUUID,
    // tableColumnsShown,
    tableColumnsToShow,
    selectable = true,
    sortable = true,
    rows,
    columns,
    // filteredColumns,
    showAuditColumns,
    auditColumnsKey,
    order,
    onRequestSort,
    selected,
    handleRowSelectAll,
    _showDetailsPane,
  } = props;

  return (
    <CoreTableHead {...tableHeadProps}>
      {/* Table Column Head */}
      <CoreTableRow>
        {columns &&
        columns.length > 0 &&
        tableColumnsToShow &&
        tableColumnsToShow.length > 0 ? (
          <>
            {/* Selectable */}
            {selectable && (
              <CoreTableHeadCell
                align={"center"}
                sx={{ maxWidth: "32px" }}
                styleClasses={[CoreClasses.PADDING.P0]}
              >
                <CoreCheckbox
                  key={`${tableUUID}-selectall-row`}
                  checked={rows.length !== 0 && rows.length === selected.length}
                  onChange={(e) => {
                    handleRowSelectAll(e);
                  }}
                />
              </CoreTableHeadCell>
            )}
            {/* Table Head - Columns */}
            {_showDetailsPane ? (
              <CoreTableHeadCell styleClasses={[CoreClasses.PADDING.PX1]}>
                {getLabel(tableUUID)}
              </CoreTableHeadCell>
            ) : (
              <>
                {columns
                  ?.filter((col) => {
                    return tableColumnsToShow?.includes(col.id);
                  })
                  ?.map((column, columnIndex) => {
                    return (
                      <CoreTableHeadCell
                        key={tableUUID + "-th-" + column.id}
                        align={
                          column.id === "action"
                            ? "center"
                            : column?.align || "left"
                        }
                        sortDirection={
                          sortable && order[column.id] ? order : false
                        }
                      >
                        {sortable && column?.sortable !== false ? (
                          <CoreTableSortLabel
                            active={Object.keys(order).includes(column.id)}
                            direction={
                              Object.keys(order).includes(column.id)
                                ? order[column.id]
                                : "asc"
                            }
                            onClick={(e) => {
                              let orderDirection =
                                order && order.hasOwnProperty(column.id)
                                  ? order[column.id] === "asc" && "desc"
                                  : "asc";
                              onRequestSort(e, column.id, orderDirection);
                            }}
                          >
                            <CoreTypographyBody1 noWrap={true}>
                              {column.label}
                            </CoreTypographyBody1>
                          </CoreTableSortLabel>
                        ) : (
                          <CoreTypographyBody1>
                            {column.label}
                          </CoreTypographyBody1>
                        )}
                      </CoreTableHeadCell>
                    );
                  })}
              </>
            )}
          </>
        ) : (
          <>
            <CoreTableHeadCell>
              Please select a column to show data
            </CoreTableHeadCell>
          </>
        )}
      </CoreTableRow>
    </CoreTableHead>
  );
}
