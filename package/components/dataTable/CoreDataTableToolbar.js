// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { NativeDataTableToolbar, NativeDataTableToolPopover } from "@wrappid/native";
import { useDispatch } from "react-redux";

import { apiRequestAction } from "./../../store/action/appActions";
import ExportData from "./tableToolbarUtils/ExportData";
import SortTableData from "./tableToolbarUtils/SortTableData";
import TableDensity from "./tableToolbarUtils/TableDensity";
import { UPDATE_USER_SETTINGS } from "../../config/api";
import { HTTP, tableToolbar, userSettingsConstants } from "../../config/constants";
import { coreUseNavigate } from "../../helper/routerHelper";
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
import { __TableLeftPanelGridSize, __TableRightPanelGridSize } from "../../utils/tableUtils";
import CoreDivider from "../dataDisplay/CoreDivider";
import CoreIcon, { __IconTypes } from "../dataDisplay/CoreIcon";
import CoreTablePagination from "../dataDisplay/CoreTablePagination";
import CoreIconButton from "../inputs/CoreIconButton";
import CoreInputAdornment from "../inputs/CoreInputAdornment";
import CoreMenu from "../inputs/CoreMenu";
import CoreTextButton from "../inputs/CoreTextButton";
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
    sortable,
    order,
    onRequestSort,
    searchable = true,
    searchValue = "",
    setSearchValue,
    filterData,
    clearFilterData,
    enableTableDensity,
    enableExport,
    enableSorting,
    enableCreateEntity,
    createEntityButtonText,
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
    preOnCreate,
    navigationOnCreateUrl
  } = props;

  const [_toolbarPopOverAnchorEl, set_toolbarPopOverAnchorEl] = React.useState(null);
  const _toolbarPopoverOpen = Boolean(_toolbarPopOverAnchorEl);
  const _toolbarID = _toolbarPopoverOpen ? "toolbar-popover-" + tableUUID : undefined;
  const [_toolbarContent, set_toolbarContent] = React.useState(null);
  const navigate = coreUseNavigate();

  const setPopover = (event, content) => {
    set_toolbarContent(content);
    if (event?.currentTarget) {
      set_toolbarPopOverAnchorEl(event.currentTarget);
    } else {
      set_toolbarPopOverAnchorEl(content);
    }
  };

  const getSearchBar = () => {
    return searchable ? (
      <CoreTextField
        styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.MARGIN.MB0]}
        value={searchValue}
        onKeyDown={(event) => {
          event.keyCode === 13 && filterData();
        }}
        onChange={(event) => {
          if (typeof event === "string") {
            setSearchValue(event);
          } else {
            setSearchValue(event.target.value);
          }
        }}
        InputProps={{
          endAdornment: (
            <CoreInputAdornment
              position="end"
            >
              { searchValue && searchValue.length > 0 ? (
                <CoreIconButton
                  title="Clear search"
                  onClick={() => {
                    setSearchValue("");
                    clearFilterData();
                  }}
                >
                  <CoreIcon type={__IconTypes.MATERIAL_OUTLINED_ICON} icon={"clear"} />
                </CoreIconButton>
              ) : null}

              <CoreIconButton
                title="Search"
                onClick={() => {
                  filterData();
                }}
              >
                <CoreIcon>search</CoreIcon>
              </CoreIconButton>

              {/* -- <CoreIconButton
                title="Advanced Search"
                onClick={() => {
                }}
              >
                <CoreIcon>tune</CoreIcon>
              </CoreIconButton> */}
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
                  onClick={() => {
                    filterData();
                  }}
                >
                  <CoreIcon>refresh</CoreIcon>
                </CoreIconButton>
              ),
              label  : "Refresh",
              onClick: () => {
                filterData();
              },
            },

            {
              comp: (
                <CoreIconButton
                  title={"Sorting"}
                  onClick={(event) => {
                    setPopover(event, tableToolbar.SORT_DATA);
                  }}
                >
                  <CoreIcon>sort </CoreIcon>
                </CoreIconButton>
              ),
              label  : "Sort",
              onClick: (event) => {
                setPopover(event, tableToolbar.SORT_DATA);
              },
            },

            /* -- {
              comp: enableExport ? (
                <CoreIconButton
                  title="Export"
                  onClick={(event) => {
                    setPopover(event, tableToolbar.EXPORT_DATA);
                  }}
                >
                  <CoreIcon type={__IconTypes.MATERIAL_ICON} icon={"save_alt"} />
                </CoreIconButton>
              ) : null,
              label  : "Export",
              onClick: (event) => {
                setPopover(event, tableToolbar.EXPORT_DATA);
              },
            }, */
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
                <CoreTextButton
                  size="small"
                  label={`${createEntityButtonText || getLabel(tableUUID)}`}
                  variant="outlined"
                  startIcon={<CoreIcon>add</CoreIcon>}
                  OnClick={() => {
                    if(navigationOnCreateUrl){
                      navigate(navigationOnCreateUrl);
                    }
                    setDetailedRowId(null);
                    setDetailedRowData(null);
                    set_showDetailsPane(true);
                    if(preOnCreate){
                      preOnCreate();
                    }
                  }}
                />
              ) : null,
              onClick: () => {
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
                    setPage(newPage);
                    dispatch({
                      payload: { entity: tableUUID, page: newPage },
                      type   : UPDATE_QUERY_PAGE_DATA,
                    });
                  }}
                  onRowsPerPageChange={(event) => {
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
    },
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
        {enableTableDensity && _toolbarContent === tableToolbar.TABLE_DENSITY ? (
          <TableDensity tableDensity={tableDensity} setTableDensity={setTableDensity} />
        ) : enableExport && _toolbarContent === tableToolbar.EXPORT_DATA ? (
          <ExportData />
        ) : enableSorting && _toolbarContent === tableToolbar.SORT_DATA ? (
          <SortTableData
            tableUUID={tableUUID}
            tableColumns={tableColumns}
            auditColumnsKey={auditColumnsKey}
            sortable={sortable}
            order={order}
            onRequestSort={onRequestSort}
          />
        ) : (
          <></>
        )}
      </NativeDataTableToolPopover>
    </>
  );
}
