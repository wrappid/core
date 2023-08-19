// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import {
  NativeDataTableToolbar,
  NativeDataTableToolPopover
} from "@wrappid/styled-components";
import { useDispatch } from "react-redux";

import { apiRequestAction } from "./../../store/action/appActions";
import ExportData from "./tableToolbarUtils/ExportData";
import SortTableData from "./tableToolbarUtils/SortTableData";
import TableDensity from "./tableToolbarUtils/TableDensity";
import { UPDATE_USER_SETTINGS } from "../../config/api";
import {
  HTTP,
  tableToolbar,
  userSettingsConstants
} from "../../config/constants";
import {
  UPDATE_QUERY_MAXROWINPAGE_DATA,
  UPDATE_QUERY_PAGE_DATA
} from "../../store/types/dataManagementTypes";
import {
  USER_SETTINGS_UPDATE_ERROR,
  USER_SETTINGS_UPDATE_SUCCESS
} from "../../store/types/settingsTypes";
import CoreClasses from "../../styles/CoreClasses";
import { getLabel } from "../../utils/stringUtils";
import {
  __TableLeftPanelGridSize,
  __TableRightPanelGridSize
} from "../../utils/tableUtils";
import CoreDivider from "../dataDisplay/CoreDivider";
import CoreIcon, { __IconTypes } from "../dataDisplay/CoreIcon";
import CoreTablePagination from "../dataDisplay/CoreTablePagination";
import CoreButton from "../inputs/CoreButton";
import CoreIconButton from "../inputs/CoreIconButton";
import CoreInputAdornment from "../inputs/CoreInputAdornment";
import CoreMenu from "../inputs/CoreMenu";
import CoreTextField from "../inputs/CoreTextField";

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

  const setPopover = (e, content) => {
    set_toolbarContent(content);
    if (e?.currentTarget) {
      set_toolbarPopOverAnchorEl(e.currentTarget);
    } else {
      set_toolbarPopOverAnchorEl(content);
    }
  };

  const getSearchBar = (props) => {
    return searchable ? (
      <CoreTextField
        styleClasses={
          props?.fullWidth
            ? [CoreClasses.WIDTH.W_100, CoreClasses.MARGIN.MB0]
            : [CoreClasses.MARGIN.MB0]
        }
        value={searchValue}
        onKeyDown={(e) => {
          e.keyCode === 13 && filterData();
        }}
        onChange={(e) => {
          if (typeof e === "string") setSearchValue(e);
          else setSearchValue(e.target.value);
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
              searchValue.length > 0 ? (
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
                ) : null}

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
        stacks  : [[{ comp: getSearchBar, propsApp: { fullWidth: true } }]],
      },
      rightPanel: {
        gridSize: { md: __TableRightPanelGridSize },
        stacks  : [
          [
            {
              comp     : <CoreDivider orientation="vertical" flexItem={true} />,
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
              label  : "Refresh",
              onClick: (e) => {
                filterData();
              },
            },

            {
              comp: (
                <CoreIconButton
                  title={"Sorting"}
                  onClick={(e) => {
                    setPopover(e, tableToolbar.SORT_DATA);
                  }}
                >
                  <CoreIcon>sort </CoreIcon>
                </CoreIconButton>
              ),
              label  : "Sort",
              onClick: (e) => {
                setPopover(e, tableToolbar.SORT_DATA);
              },
            },

            {
              comp: enableExport ? (
                <CoreIconButton
                  title="Export"
                  onClick={(e) => {
                    setPopover(e, tableToolbar.EXPORT_DATA);
                  }}
                >
                  <CoreIcon
                    type={__IconTypes.MATERIAL_ICON}
                    icon={"save_alt"}
                  />
                </CoreIconButton>
              ) : null,
              label  : "Export",
              onClick: (e) => {
                setPopover(e, tableToolbar.EXPORT_DATA);
              },
            },
            {
              comp: (
                <CoreIconButton title={"More Actions"}>
                  <CoreIcon>more_vert</CoreIcon>
                </CoreIconButton>
              ),
              hideInApp: true,
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
              onClick: (e) => {
                setDetailedRowId(null);
                setDetailedRowData(null);
                set_showDetailsPane(true);
              },
            },
            {
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
              hideInApp: true,
            },
            {
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
                      payload: { entity: tableUUID, page: newPage },
                      type   : UPDATE_QUERY_PAGE_DATA,
                    });
                  }}
                  onRowsPerPageChange={(event) => {
                    console.log("Change max row in page ", event.target.value);
                    if (event.target.value !== maxRowInPage) {
                      setMaxRowInPage(event.target.value);
                      dispatch({
                        payload: {
                          entity      : tableUUID,
                          maxRowInPage: event.target.value,
                        },
                        type: UPDATE_QUERY_MAXROWINPAGE_DATA,
                      });
                      dispatch(
                        apiRequestAction(
                          HTTP.POST,
                          UPDATE_USER_SETTINGS,
                          true,
                          {
                            name : userSettingsConstants.MAX_ROWS_IN_PAGE,
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
              hideInApp: true,
            },
          ],
        ],
      },
    }
  ];

  return (
    <>
      <NativeDataTableToolbar
        styleClasses={props.styleClasses}
        allTools={allTools}
        menuRenderFunction={(menu) => (
          <CoreMenu
            menu={menu}
            miniDrawer={false}
            multiLevel={false}
            open={true}
            OnMenuClick={() => {}}
          />
        )}
      />

      <NativeDataTableToolPopover
        id={_toolbarID}
        open={_toolbarPopoverOpen}
        anchorEl={_toolbarPopOverAnchorEl}
        onClose={() => {
          set_toolbarPopOverAnchorEl(null);
          set_toolbarContent(null);
        }}
        anchorOrigin={{
          horizontal: "left",
          vertical  : "bottom",
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
      </NativeDataTableToolPopover>

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
