import React from "react";
import { useDispatch } from "react-redux";
import {
  HTTP,
  tableToolbar,
  userSettingsConstants,
} from "../../config/constants";
import {
  UPDATE_QUERY_MAXROWINPAGE_DATA,
  UPDATE_QUERY_PAGE_DATA,
} from "../../store/types/dataManagementTypes";
import { getLabel } from "../../utils/stringUtils";
import {
  getTableDensityIconName,
  __TableLeftPanelGridSize,
  __TableRightPanelGridSize,
} from "../../utils/tableUtils";
import CoreDivider from "../dataDisplay/CoreDivider";
import CoreIcon, { __IconTypes } from "../dataDisplay/CoreIcon";
import CoreTablePagination from "../dataDisplay/CoreTablePagination";
import CoreTooltip from "../dataDisplay/CoreTooltip";
import CoreButton from "../inputs/CoreButton";
import CoreIconButton from "../inputs/CoreIconButton";
import CoreInputAdornment from "../inputs/CoreInputAdornment";
import CoreTextField from "../inputs/CoreTextField";
import CoreGrid from "../layouts/CoreGrid";
import CoreStack from "../layouts/CoreStack";
import CorePopover from "../utils/CorePopover";
import ExportData from "./tableToolbarUtils/ExportData";
import SortTableData from "./tableToolbarUtils/SortTableData";
import TableDensity from "./tableToolbarUtils/TableDensity";
import { apiRequestAction } from "./../../store/action/appActions";
import { UPDATE_USER_SETTINGS } from "../../config/api";
import {
  USER_SETTINGS_UPDATE_ERROR,
  USER_SETTINGS_UPDATE_SUCCESS,
} from "../../store/types/settingsTypes";
import CoreClasses from "../../styles/CoreClasses";
import {
  NativeDataTableToolBar,
  NativeDataTableToolPopOver,
} from "@wrappid/styled-components";

export default function CoreDataTableToolbar(props) {
  const dispatch = useDispatch();
  const {
    tableUUID,
    tableColumns,
    // table density
    tableDensity,
    setTableDensity,
    // table columns filter
    // filteredColumns,
    // setFilteredColumns,
    // audit columns data
    auditColumnsKey = [],
    // showAuditColumns,
    // setShowAuditColumns,
    // sortable
    sortable,
    order,
    onRequestSort,
    selectable = true,
    selected = [],
    searchable = true,
    searchValue = "",
    setSearchValue,
    filterData,
    clearFilterData,
    // enableColumnFilter,
    enableTableDensity,
    enableExport,
    enableSorting,
    enableCreateEntity,
    createEntityButtonText,
    // _showDetailsPane,
    set_showDetailsPane,
    setDetailedRowId,
    setDetailedRowData,
    // --------------------------------------
    // pagination props
    data,
    page,
    maxRowInPage,
    setPage,
    setMaxRowInPage,
  } = props;

  // const [_selectAllColumnFilter, set_selectAllColumnFilter] = React.useState(true);

  const [_toolbarPopOverAnchorEl, set_toolbarPopOverAnchorEl] =
    React.useState(null);
  const _toolbarPopoverOpen = Boolean(_toolbarPopOverAnchorEl);
  const _toolbarID = _toolbarPopoverOpen
    ? "toolbar-popover-" + tableUUID
    : undefined;
  const [_toolbarContent, set_toolbarContent] = React.useState(null);

  const getSearchBar = () => {
    return searchable ? (
      <CoreTextField
        // styleClasses={[CoreClasses.MARGIN.MB0]}
        value={searchValue}
        onKeyDown={(e) => {
          e.keyCode === 13 && filterData();
        }}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        InputProps={{
          endAdornment: (
            <CoreInputAdornment
              position="end"
              styleClasses={
                [
                  // CoreClasses.PADDING.PR1,
                  // CoreClasses.PADDING.PB1,
                ]
              }
            >
              {searchValue &&
                // searchValue !== "" &&
                searchValue.length > 0 && (
                  <CoreIconButton
                    title="Clear search"
                    onClick={() => {
                      console.log("clear search clicked");
                      setSearchValue("");
                      clearFilterData();
                    }}
                  >
                    <CoreIcon
                      type={__IconTypes.MATERIAL_OUTLINED_ICON}
                      icon={"clear"}
                    />
                  </CoreIconButton>
                )}
              <CoreIconButton
                title="Search"
                onClick={() => {
                  console.log("search clicked");
                  filterData();
                }}
              >
                <CoreIcon>search</CoreIcon>
              </CoreIconButton>
              <CoreIconButton
                title="Advanced Search"
                onClick={() => {
                  console.log("Advanced Search Clicked");
                  // filterData();
                }}
              >
                <CoreIcon>tune</CoreIcon>
              </CoreIconButton>
            </CoreInputAdornment>
          ),
        }}
      />
    ) : null;
  };

  /**
   *@description
   [
      {
        leftPanel:{
          grideSize: gridesizeob
          stacks: [
          //stack1
          [
            {comp: react comp or function returning comp}
          ],
          //stack2
          .
          .
          .
        ]} 
        rightPanel:{}
      },
      .
      .
      multiple row
   ]
   * 
   */

  const allTools = [
    {
      leftPanel: {
        gridSize: { md: __TableLeftPanelGridSize },
        stacks: [{ comp: getSearchBar }],
      },
      rightPanel: {
        gridSize: { md: __TableRightPanelGridSize },
        hideInApp: true,
        stacks: [
          [
            {
              comp: <CoreDivider orientation="vertical" flexItem={true} />,
              hideInApp: true,
            },

            {
              comp: (
                <CoreIconButton
                  title={"Refresh Data"}
                  onClick={(e) => {
                    filterData();
                  }}
                >
                  <CoreIcon>refresh</CoreIcon>
                </CoreIconButton>
              ),
            },

            {
              comp: (
                <CoreIconButton
                  title={"Sorting"}
                  onClick={(e) => {
                    console.log("Sort data clicked");
                    set_toolbarContent(tableToolbar.SORT_DATA);
                    set_toolbarPopOverAnchorEl(e.currentTarget);
                  }}
                >
                  <CoreIcon>sort </CoreIcon>
                </CoreIconButton>
              ),
            },

            {
              comp: enableExport ? (
                <CoreIconButton
                  title="Export"
                  onClick={(e) => {
                    set_toolbarContent(tableToolbar.EXPORT_DATA);
                    set_toolbarPopOverAnchorEl(e.currentTarget);
                  }}
                >
                  <CoreIcon
                    type={__IconTypes.MATERIAL_ICON}
                    icon={"save_alt"}
                  />
                </CoreIconButton>
              ) : null,
            },
            {
              hideInApp: true,
              comp: (
                <CoreIconButton title={"More Actions"}>
                  <CoreIcon>more_vert</CoreIcon>
                </CoreIconButton>
              ),
            },
          ],
          [
            {
              comp: enableCreateEntity ? (
                <CoreButton
                  size="small"
                  label={`${createEntityButtonText || getLabel(tableUUID)}`}
                  variant="outlined"
                  startIcon={<CoreIcon>add</CoreIcon>}
                  OnClick={(e) => {
                    setDetailedRowId(null);
                    setDetailedRowData(null);
                    set_showDetailsPane(true);
                  }}
                />
              ) : null,
            },
            {
              hideInApp: true,
              comp: (
                <CoreDivider
                  flexItem={true}
                  orientation="vertical"
                  // styleClasses={[
                  //   CoreClasses.DISPLAY.NONE,
                  //   CoreClasses.DISPLAY.SM.BLOCK,
                  //   CoreClasses.MARGIN.MY1,
                  // ]}
                />
              ),
            },
            {
              hideInApp: true,
              comp: (
                <CoreTablePagination
                  // styleClasses={[
                  //   CoreClasses.DISPLAY.NONE,
                  //   CoreClasses.DISPLAY.SM.BLOCK,
                  // ]}
                  // showFirstButton
                  // showLastButton
                  count={data?.totalRecords || 0}
                  page={page}
                  rowsPerPage={maxRowInPage}
                  onPageChange={(event, newPage) => {
                    console.log("Change page", newPage);
                    setPage(newPage);
                    dispatch({
                      type: UPDATE_QUERY_PAGE_DATA,
                      payload: { entity: tableUUID, page: newPage },
                    });
                  }}
                  onRowsPerPageChange={(event) => {
                    console.log("Change max row in page ", event.target.value);
                    if (event.target.value !== maxRowInPage) {
                      setMaxRowInPage(event.target.value);
                      dispatch({
                        type: UPDATE_QUERY_MAXROWINPAGE_DATA,
                        payload: {
                          entity: tableUUID,
                          maxRowInPage: event.target.value,
                        },
                      });
                      dispatch(
                        apiRequestAction(
                          HTTP.POST,
                          UPDATE_USER_SETTINGS,
                          true,
                          {
                            name: userSettingsConstants.MAX_ROWS_IN_PAGE,
                            value: event.target.value,
                          },
                          USER_SETTINGS_UPDATE_SUCCESS,
                          USER_SETTINGS_UPDATE_ERROR
                        )
                      );
                    }
                  }}
                />
              ),
            },
          ],
        ],
      },
    },
    {
      leftPanel: {
        hideInApp: true,
        gridSize: { md: __TableLeftPanelGridSize },
        stacks: [
          [
            {
              hideInApp: true,
              comp: (
                <CoreTablePagination
                  gridProps={{
                    gridSize: { md: __TableRightPanelGridSize },
                    styleClasses: [
                      CoreClasses.DISPLAY.BLOCK,
                      CoreClasses.DISPLAY.SM.NONE,
                    ],
                  }}
                  styleClasses={[
                    // CoreClasses.DISPLAY.BLOCK,
                    // CoreClasses.DISPLAY.SM.NONE,
                    CoreClasses.ALIGNMENT.ALIGN_SELF_CENTER,
                  ]}
                  // showFirstButton
                  // showLastButton
                  count={data?.totalRecords || 0}
                  page={page}
                  rowsPerPage={maxRowInPage}
                  onPageChange={(event, newPage) => {
                    console.log("Change page", newPage);
                    setPage(newPage);
                    dispatch({
                      type: UPDATE_QUERY_PAGE_DATA,
                      payload: { entity: tableUUID, page: newPage },
                    });
                  }}
                  onRowsPerPageChange={(event) => {
                    console.log("Change max row in page ", event.target.value);
                    if (event.target.value !== maxRowInPage) {
                      setMaxRowInPage(event.target.value);
                      dispatch({
                        type: UPDATE_QUERY_MAXROWINPAGE_DATA,
                        payload: {
                          entity: tableUUID,
                          maxRowInPage: event.target.value,
                        },
                      });
                      dispatch(
                        apiRequestAction(
                          HTTP.POST,
                          UPDATE_USER_SETTINGS,
                          true,
                          {
                            name: userSettingsConstants.MAX_ROWS_IN_PAGE,
                            value: event.target.value,
                          },
                          USER_SETTINGS_UPDATE_SUCCESS,
                          USER_SETTINGS_UPDATE_ERROR
                        )
                      );
                    }
                  }}
                />
              ),
            },
          ],
        ],
      },
    },
  ];

  return (
    <>
      <NativeDataTableToolBar
        styleClasses={props.styleClasses}
        allTools={allTools}
      />
      <NativeDataTableToolPopOver
        id={_toolbarID}
        open={_toolbarPopoverOpen}
        anchorEl={_toolbarPopOverAnchorEl}
        onClose={() => {
          set_toolbarPopOverAnchorEl(null);
          set_toolbarContent(null);
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {enableTableDensity &&
        _toolbarContent === tableToolbar.TABLE_DENSITY ? (
          <TableDensity
            tableDensity={tableDensity}
            setTableDensity={setTableDensity}
          />
        ) : enableExport && _toolbarContent === tableToolbar.EXPORT_DATA ? (
          <ExportData />
        ) : enableSorting && _toolbarContent === tableToolbar.SORT_DATA ? (
          <SortTableData
            tableUUID={tableUUID}
            tableColumns={tableColumns}
            // filteredColumns={filteredColumns}
            auditColumnsKey={auditColumnsKey}
            sortable={sortable}
            order={order}
            onRequestSort={onRequestSort}
          />
        ) : (
          <></>
        )}
      </NativeDataTableToolPopOver>

      {/* {selectable && selected && selected.length > 0 && (
        <CoreTooltip title="Delete">
          <CoreIconButton>
            <CoreIcon>delete</CoreIcon>
          </CoreIconButton>
        </CoreTooltip>
      )} */}
    </>
  );
}
