import React from "react";
import { getLabel } from "../../utils/stringUtils";
import { CoreClasses } from "@wrappid/styles";
import { theme } from "../../theme/theme";
import CoreIcon from "../dataDisplay/CoreIcon";
import CoreTableBody from "../dataDisplay/CoreTableBody";
import CoreTableCell from "../dataDisplay/CoreTableCell";
import CoreTableRow from "../dataDisplay/CoreTableRow";
import CoreTypographyBody1 from "../dataDisplay/paragraph/CoreTypographyBody1";
import { FORM_VIEW_MODE } from "../forms/coreFormConstants";
import CoreCheckbox from "../inputs/CoreCheckbox";
import CoreTextButton from "../inputs/CoreTextButton";
import CoreBox from "../layouts/CoreBox";
import CoreStack from "../layouts/CoreStack";
import CoreDataTableRowActionPopover from "./CoreDataTableRowActionPopover";
import CoreDataTableRowContent from "./CoreDataTableRowContent";
import CoreTableAction from "./CoreTableAction";

export default function CoreDataTableBody(props) {
  const {
    tableUUID,
    tableColumnsShown,
    hover,
    tableColumns = [],
    // filteredColumns = [],
    tableColumnsToShow,
    tableData = [],
    tableActions = [],
    query = {
      page: 0,
      maxRowInPage: 10,
    },
    auditColumnsKey,
    showAuditColumns,
    selectable = false,
    selected,
    handleRowSelect,
    enableDetailsPane,
    _showDetailsPane,
    set_showDetailsPane,
    summaryRendererComponent,
    detailedRowId,
    setDetailedRowId,
    setDetailedRowData,
    setFormMode,
    enableCreateEntity,
    createEntityButtonText,
  } = props;

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
    <>
      <CoreTableBody
        {...props.tableHead}
        onMouseLeave={(e) => {
          console.log("Mouse Leave on table");
          tableActions && tableActions.length > 0 && handlePopoverClose();
        }}
      >
        {tableColumns &&
        tableColumns.length > 0 &&
        tableColumnsToShow &&
        tableColumnsToShow.length > 0 ? (
          /* {tableColumns &&
        tableColumns.length > 0 && (filteredColumns && filteredColumns.length > 0) || &&
        showAuditColumns &&
        auditColumnsKey &&
        auditColumnsKey.length > 0 &&
        tableColumns?.filter((col) => {
          return auditColumnsKey.includes(col.id);
        })?.length > 0 ? ( */
          <>
            {tableData && tableData.length > 0 ? (
              tableData
                .slice(
                  query?.page * query?.maxRowInPage,
                  query?.page * query?.maxRowInPage + query?.maxRowInPage
                )
                .map((rowData, rowIndex) => {
                  return (
                    <>
                      {/* Table Row Action */}
                      {!_showDetailsPane && (
                        <CoreDataTableRowActionPopover
                          anchorEl={anchorEl}
                          _rowHoverIndex={_rowHoverIndex}
                          rowIndex={rowIndex}
                          handlePopoverOpen={handlePopoverOpen}
                          handlePopoverClose={handlePopoverClose}
                        >
                          <CoreBox styleClasses={[CoreClasses.PADDING.PR2]}>
                            <CoreStack direction="row">
                              {tableActions && tableActions.length > 0 && (
                                <CoreTableAction
                                  tableUUID={tableUUID}
                                  actions={tableActions}
                                  columns={tableColumns}
                                  rowIndex={rowIndex}
                                  rowData={rowData}
                                />
                              )}
                            </CoreStack>
                          </CoreBox>
                        </CoreDataTableRowActionPopover>
                      )}

                      {/* Table Row Data */}
                      <CoreTableRow
                        sx={{
                          backgroundColor:
                            enableDetailsPane &&
                            _showDetailsPane &&
                            detailedRowId === rowData.id &&
                            `${theme.palette.primary.light} !important`,
                          cursor:
                            enableDetailsPane && _showDetailsPane && "pointer",
                          minHeight: "40px",
                        }}
                        hover={hover}
                        key={tableUUID + "-tr-" + rowIndex}
                        onMouseEnter={(e) => {
                          if (!_showDetailsPane) {
                            console.log("Mouse Enter on ", rowIndex);
                            tableActions &&
                              tableActions.length > 0 &&
                              handlePopoverOpen(e, rowIndex);
                          }
                        }}
                        // @Note: onMouseLeave event is handled in table body
                        onClick={() => {
                          console.log("rowIndex selection made");
                          if (enableDetailsPane) {
                            if (detailedRowId === rowData?.id) {
                              // set_showDetailsPane(false);
                              // setDetailedRowId(null);
                              // setDetailedRowData(null);
                            } else {
                              setDetailedRowId(rowData?.id || null);
                              setDetailedRowData(rowData);
                              setFormMode(FORM_VIEW_MODE);
                              !_showDetailsPane && set_showDetailsPane(true);
                            }
                          }
                        }}
                      >
                        {selectable && (
                          <CoreTableCell
                            align={"center"}
                            sx={{ maxWidth: "32px" }}
                            styleClasses={[CoreClasses.PADDING.P0]}
                          >
                            <CoreCheckbox
                              key={`${tableUUID}-select-row-${rowIndex}`}
                              checked={selected.includes(rowData["id"])}
                              onChange={(e) => {
                                handleRowSelect(e, rowData["id"]);
                              }}
                            />
                          </CoreTableCell>
                        )}
                        <CoreDataTableRowContent
                          tableUUID={tableUUID}
                          tableColumns={tableColumns}
                          tableColumnsShown={tableColumnsShown}
                          tableColumnsToShow={tableColumnsToShow}
                          rowIndex={rowIndex}
                          rowData={rowData}
                          enableDetailsPane={enableDetailsPane}
                          _showDetailsPane={_showDetailsPane}
                          summaryRendererComponent={summaryRendererComponent}
                        />
                      </CoreTableRow>
                    </>
                  );
                })
            ) : (
              <CoreTableRow>
                <CoreTableCell
                  colSpan={
                    (selectable ? 1 : 0) + (tableColumnsToShow?.length || 0) /* 
                      filteredColumns.length +
                      showAuditColumns && auditColumnsKey && auditColumnsKey.length > 0
                        ? auditColumnsKey.length
                        : 0,
                     */
                  }
                >
                  <CoreStack
                    direction="column"
                    styleClasses={[
                      CoreClasses.PADDING.PY5,
                      CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
                      CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
                    ]}
                  >
                    <CoreTypographyBody1>
                      No {getLabel(tableUUID).toLocaleLowerCase()}(s) available
                    </CoreTypographyBody1>
                    {enableCreateEntity && (
                      <CoreTextButton
                        startIcon={<CoreIcon>add</CoreIcon>}
                        label={
                          createEntityButtonText ||
                          `Add ${getLabel(tableUUID || "")}`
                        }
                        OnClick={(e) => {
                          setDetailedRowId(null);
                          setDetailedRowData(null);
                          set_showDetailsPane(true);
                        }}
                      />
                    )}
                  </CoreStack>
                </CoreTableCell>
              </CoreTableRow>
            )}
          </>
        ) : (
          <>
            <CoreTableRow>
              <CoreTableCell
                colSpan={
                  (selectable ? 1 : 0) + (tableColumnsToShow?.length || 0)
                  /* filteredColumns.length + */
                  /* (showAuditColumns && auditColumnsKey && auditColumnsKey.length > 0
                    ? auditColumnsKey.length
                    : 0) */
                }
              >
                <CoreBox
                  styleClasses={[
                    CoreClasses.PADDING.P5,
                    CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
                  ]}
                >
                  Please select a column
                </CoreBox>
              </CoreTableCell>
            </CoreTableRow>
          </>
        )}
      </CoreTableBody>
    </>
  );
}
