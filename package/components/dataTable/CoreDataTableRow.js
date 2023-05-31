import React, { useContext } from "react";
import { getLabel } from "../../utils/stringUtils";
import { UtilityClasses } from "@wrappid/styles";
import CoreIcon from "../dataDisplay/CoreIcon";
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
import { ThemeContext } from "../../config/contextHandler";
import CoreFlatList from "./CoreFlatList";
import { useDispatch } from "react-redux";
import { UPDATE_QUERY_PAGE_DATA } from "../../store/types/dataManagementTypes";

export default function CoreDataTableRow(props) {
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();

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
    handlePopoverClose,
    handlePopoverOpen,
    anchorEl,
    _rowHoverIndex,
    page,
    setPage,
  } = props;

  const renderItem = (rowData, rowIndex) => {
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
            <CoreBox styleClasses={[UtilityClasses.PADDING.PR2]}>
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
            cursor: enableDetailsPane && _showDetailsPane && "pointer",
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
              styleClasses={[UtilityClasses.PADDING.P0]}
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
  };

  const keyExtractor = (rowData) => {
    return rowData.id;
  };

  const onPaginate = (newPage) => {
    setPage(newPage);
    dispatch({
      type: UPDATE_QUERY_PAGE_DATA,
      payload: { entity: tableUUID, page: newPage },
    });
  };

  return tableColumns &&
    tableColumns.length > 0 &&
    tableColumnsToShow &&
    tableColumnsToShow.length > 0 ? (
    <>
      {tableData && tableData.length > 0 ? (
        <CoreFlatList
          tableData={tableData}
          query={query}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          onEndReached={onPaginate}
          page={page}
        />
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
                UtilityClasses.PADDING.PY5,
                UtilityClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
                UtilityClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
              ]}
            >
              <CoreTypographyBody1>
                No {getLabel(tableUUID).toLocaleLowerCase()}(s) available
              </CoreTypographyBody1>
              {enableCreateEntity && (
                <CoreTextButton
                  startIcon={<CoreIcon>add</CoreIcon>}
                  label={
                    createEntityButtonText || `Add ${getLabel(tableUUID || "")}`
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
              UtilityClasses.PADDING.P5,
              UtilityClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
            ]}
          >
            <CoreTypographyBody1>Please select a column</CoreTypographyBody1>
          </CoreBox>
        </CoreTableCell>
      </CoreTableRow>
    </>
  );
}