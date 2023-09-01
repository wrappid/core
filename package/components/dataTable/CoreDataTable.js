import React from "react";

import { useDispatch, useSelector } from "react-redux";

import CoreDataTableBody from "./CoreDataTableBody";
import CoreDataTableDetailsPane from "./CoreDataTableDetailsPane";
import CoreDataTableHead from "./CoreDataTableHead";
import CoreDataTableToolbar from "./CoreDataTableToolbar";
import {
  HTTP,
  userSettingsConstants,
  __TableDensity
} from "../../config/constants";
import { DATA_TABLE_CONST } from "../../config/dataTableConstants";
import { apiRequestAction } from "../../store/action/appActions";
import {
  READ_DATA_ERROR,
  READ_DATA_LOADING,
  READ_DATA_SUCCESS,
  UPDATE_FILTER_DATA,
  UPDATE_QUERY_ORDER_DATA,
  UPDATE_QUERY_SEARCH_VALUE_DATA
} from "../../store/types/dataManagementTypes";
import { FORM_INIT_UPDATE } from "../../store/types/formTypes";
import CoreClasses from "../../styles/CoreClasses";
import { getUUID } from "../../utils/appUtils";
import { compareObject } from "../../utils/objectUtils";
import {
  getTableDensityPaddingValue,
  getTableDensityValue,
  prepareTableAPIQuery,
  __TableLeftPanelGridSize,
  __TableRightPanelGridSize
} from "../../utils/tableUtils";
import { APP_PLATFORM, WEB_PLATFORM, detectPlatform } from "../../utils/themeUtil";
import CoreTable from "../dataDisplay/CoreTable";
import { FORM_VIEW_MODE } from "../forms/coreFormConstants";
import CoreGrid from "../layouts/CoreGrid";

/**
 * @TODO
 *
 * 0. Check all core and styled components
 *    - done
 * 1. server driven data processing
 *    - done
 * 3. api data structure prepared for table operations
 *    - Done & Required Validation
 *    - Request
 *      /endpoint?start=0&length=10&[...filter key & value in query params]
 *    - Response
 *      data: {
 *        rows: [],
 *        totalRecords: 0
 *      }
 * 4. sortable
 *      - table based flag - Default TRUE - WIP
 *      - column based flag - Default TRUE - WIP
 *      - server-side - WIP
 *      - local - Done
 *      - single - Done
 *      - multiple - WIP
 * 5. filtering
 *      - table based flag - Default TRUE - WIP
 *      - column based flag - Default TRUE - WIP
 *      - server-side - Done
 *      - local - WIP
 *      - partial match - Done
 *      - regex match - WIP
 * 6. update row
 *      - editable flag
 *        - table based flag
 *        - column based flag
 *      - form id
 *        - if present get it from form reducer
 *        - if not present generate from api (i.e. DataViewer support)
 * 7. delete row
 *      - deletable flag
 *        - table based flag
 * 8. maxRowInPage changes additional support
 *      - after changes the page change should be happen based on the below formulae
 *        totalRecords[100]
 *        prevMaxRowInPage[10]
 *        currMaxRowInPage[25]
 *        prevPage[3][21-30]
 *        currPage[2][26-50]
 *
 * @param {*} props
 * @returns
 */
export default function CoreDataTable(props) {
  const dispatch = useDispatch();

  // platform detection
  
  const [platform, setPlatform] = React.useState(WEB_PLATFORM);

  React.useEffect(() => {
    setPlatform(detectPlatform());
  }, []);

  // table column shown = 5
  const tableColumnsShown = 5;
  /* get data table props and structure in a constant */
  const {
    // server driven props
    serverSide = DATA_TABLE_CONST.SERVER_SIDE, // server driven [default: true]
    entity = null, // data store entity name must be unique [default: null]
    filterQuery = {
      filter: {}, // this filter automatically applied on the API query
      order : {}, // this order automatically applied on the API query
    },
    api = null, // get data api [default: null]
    reduxType = {}, // here we can have crud operation specific reducer type
    pagesToCache = DATA_TABLE_CONST.PAGES_TO_CACHE, // client side caching for smooth operation of the table
    // static rows and columns
    rows = [], // static rows only if serverSide =  false
    columns = [], // static columns
    // row hover flag
    rowHover = false,
    // sortable & filtering
    sortable = true,
    searchable = true,
    /**
     * @todo
     * keeping enableDataFilter, & enableExport false since it's WIP
     */
    showToolbar = true, // show/hide the toolbar
    enableColumnFilter = true,
    enableTableDensity = true,
    enableDataFilter = true,
    density = __TableDensity.COMPACT,
    enableExport = false,
    enableSorting = true,
    // Details Pane
    enableDetailsPane = true,
    summaryRendererComponent,
    preRenderDetailsPaneComponent,
    postRenderDetailsPaneComponent,
    preRender_CreateData_DetailsPaneComponent,
    postRender_CreateData_DetailsPaneComponent,
    preRender_UpdateData_DetailsPaneComponent,
    postRender_UpdateData_DetailsPaneComponent,
    // table row actions
    rowActions = [], // row specific action button array
    /**
     * @todo
     * keeping selectable false since it's WIP
     */
    selectable = false,
    // edit and delete row action
    editable = true, // row specific edit action
    deletable = true, // row specific delete action
    // form related props
    enableCreateEntity = true,
    createEntityButtonText,
    hideForm = false,
    hideCreateForm = false,
    hideUpdateForm = false,
    createFormID = null,
    updateFormID = null,
    // table props
    tableHeadProps,
    afterEditSuccess, // function to be called after successfull Edit
    afterEditError, // function to be called after successfull Edit
    afterCreateSuccess, // function to be called after successfull Create
    afterCreateError, // function to be called after successfull Create
    afterDeleteSuccess, // function to be called after successfull Delete
    afterDeleteError, // function to be called after successfull Delete
    hideAuditDataDetailPane, //flag for hiding audit info in details pane
    preOnCreate, //function to be called when create button in clicked
    openCreateOnMount //if true the details pane will be opened and create form will be shown
  } = props;

  // eslint-disable-next-line no-unused-vars
  const { _create = {}, _read = {}, _update = {}, _delete = {} } = reduxType;

  // User Settings
  const userSettings = useSelector((state) => state.settings.userSettings);

  // max row in pages
  const [maxRowsInPage, setMaxRowsInPage] = React.useState(
    (userSettings && userSettings[userSettingsConstants?.MAX_ROWS_IN_PAGE]) ||
      DATA_TABLE_CONST.MAX_ROWS_IN_PAGE
  );

  // createFormID
  const [detailsPaneCreateFormID, setDetailsPaneCreateFormID] = React.useState(
    createFormID || entity
  );
  // updateFormID
  const [detailsPaneUpdateFormID, setDetailsPaneUpdateFormID] = React.useState(
    updateFormID || entity
  );

  // table uuid i.e. either entity if present else null
  const [tableUUID, setTableUUID] = React.useState(entity || null);

  // dev support
  const [_expandedDevJSONSchema, set_expandedDevJSONSchema] =
    React.useState(false);

  // pagination
  const [page, setPage] = React.useState(0);
  const [maxRowInPage, setMaxRowInPage] = React.useState(maxRowsInPage);

  // audit data
  const auditColumnsKey = [
    "createdAt",
    "createdBy",
    "updatedAt",
    "updatedBy",
    "deletedAt",
    "deletedBy",
  ];
  const [showAuditColumns, setShowAuditColumns] = React.useState(false);

  // search filter values
  // eslint-disable-next-line no-unused-vars
  const [filterValues, setFilterValues] = React.useState({});
  const [searchValue, setSearchValue] = React.useState("");

  // selection
  const [selected, setSelected] = React.useState([]);
  const [detailedRowId, setDetailedRowId] = React.useState(null);
  const [detailedRowData, setDetailedRowData] = React.useState({});
  const [formMode, setFormMode] = React.useState(FORM_VIEW_MODE);

  React.useEffect(() => {
    if (detailedRowData)
      dispatch({
        payload: {
          data  : { data: detailedRowData },
          formId: detailsPaneUpdateFormID,
        },
        type: FORM_INIT_UPDATE,
      });
  }, [detailsPaneUpdateFormID, detailedRowData]);

  // data store
  const dataStore = useSelector((state) => state?.data);

  // dense table
  const [tableDensity, setTableDensity] = React.useState(density);

  // values from specific entity object of data store
  const {
    filtering = false,
    loading = true,
    // eslint-disable-next-line no-unused-vars
    success = false,
    // eslint-disable-next-line no-unused-vars
    error = false,
    data = {
      columns     : columns || [],
      rows        : rows || [],
      totalRecords: (rows && rows.length) || 0,
    },
    form = {
      create: {
        error  : false,
        loading: false,
        success: false,
      },
      delete: {
        error  : false,
        loading: false,
        success: false,
      },
      update: {
        error  : false,
        loading: false,
        success: false,
      },
    },
    query = {
      _filter     : {},
      _order      : {},
      _searchValue: "",
      currentRows : (rows && rows.length) || 0,
      maxRowInPage: DATA_TABLE_CONST.MAX_ROWS_IN_PAGE,
      page        : 0,
      pagesToCache: pagesToCache,
    },
  } = dataStore[tableUUID] || {};

  // local const for table data and columns to pass as props to nested component
  const tableData = data.rows;
  const tableColumns = data.columns;

  // filter columns
  // const [filteredColumns, setFilteredColumns] = React.useState();

  // Details Pane
  // show/hide details pane
  const [_showDetailsPane, _set_showDetailsPane] = React.useState(
    // --| userSettings[userSettingsConstants.DATA_TABLE_DETAILS_PANE] || false
    true
  );
  const set_showDetailsPane = (open) => {
    _set_showDetailsPane(open);
    if (platform === APP_PLATFORM) {
      // -- dispatch(
      //   apiRequestAction(
      //     HTTP.POST,
      //     UPDATE_USER_SETTINGS,
      //     true,
      //     {
      //       name: userSettingsConstants.DATA_TABLE_DETAILS_PANE,
      //       value: open,
      //     },
      //     USER_SETTINGS_UPDATE_SUCCESS,
      //     USER_SETTINGS_UPDATE_ERROR
      //   )
      // );
    } else {
      // -- _set_showDetailsPane(true);
    }
  };

  React.useEffect(() => {
    // details pane
    // if (
    //   userSettings.hasOwnProperty(
    //     userSettingsConstants?.DATA_TABLE_DETAILS_PANE
    //   )
    // ) {
    //   let open = userSettings[userSettingsConstants?.DATA_TABLE_DETAILS_PANE];
      
    //   // show details pane
    //   _set_showDetailsPane(open);
    //   if (open) {
    //     /* if (enableCreateEntity) {
    //       setDetailedRowId(null);
    //       setDetailedRowData(null);
    //     } else {
    //     } */
    //     if (!detailedRowId && tableData && tableData?.length > 0) {
    //       setDetailedRowId(tableData[0]?.id);
    //       setDetailedRowData(tableData[0]);
    //     }
    //   }
    // }
    if (platform === APP_PLATFORM) {
      set_showDetailsPane(false);
    } else {
      set_showDetailsPane(true);
      if (!detailedRowId && tableData && tableData?.length > 0 && !openCreateOnMount) {
        setDetailedRowId(tableData[0]?.id);
        setDetailedRowData(tableData[0]);
      }
    }

    //max row in page
    // eslint-disable-next-line no-prototype-builtins
    if (userSettings.hasOwnProperty(userSettingsConstants?.MAX_ROWS_IN_PAGE)) {
      setMaxRowsInPage(userSettings[userSettingsConstants?.MAX_ROWS_IN_PAGE]);
    }
  }, [tableData]);

  /**
   * handle sortable request
   */
  const handleRequestSort = (event, column, order = "asc") => {
    /**
     * @todo
     * check what we found on event
     */
    // -- console.log(`event.ctrlKey= ${event.ctrlKey}`);
    let tmpOrder = query?._order;

    if (event.ctrlKey) {
      tmpOrder = { ...tmpOrder, [column]: order };
    } else {
      tmpOrder = { [column]: order };
    }

    dispatch({
      payload: {
        entity: entity,
        order : tmpOrder,
      },
      type: UPDATE_QUERY_ORDER_DATA,
    });
  };

  /**
   * Handle search value
   */
  const filterData = () => {
    dispatch({
      payload: {
        entity     : tableUUID,
        searchValue: searchValue,
      },
      type: UPDATE_QUERY_SEARCH_VALUE_DATA,
    });
  };
  const clearFilterData = () => {
    dispatch({
      payload: {
        entity     : tableUUID,
        searchValue: "",
      },
      type: UPDATE_QUERY_SEARCH_VALUE_DATA,
    });
  };

  /**
   * Handle multiple row select
   * @param {*} event
   * @param {*} rowIndex
   */
  const handleRowSelectAll = (event) => {
    let _selectedAll = event.target.checked ? true : false;

    if (_selectedAll) {
      // if checked add all
      const newSelected = tableData.map((tData) => tData.id);

      setSelected(newSelected);
    } else {
      // if not checked add empty array
      setSelected([]);
    }
  };

  /**
   * Handle single row click
   * @param {*} event
   * @param {*} rowIndex
   */
  const handleRowSelect = (event, rowIndex) => {
    let _selected = event.target.checked ? true : false;

    if (_selected) {
      // if checked add
      setSelected(...selected, [rowIndex]);
    } else {
      // if not checked remove
      let _tempSelected = selected.filter((_select) => {
        return _select !== rowIndex;
      });

      setSelected(_tempSelected);
    }
  };

  /**
   * Create basic entity in data store
   */
  React.useEffect(() => {
    async function callAsync() {
      // -- console.log("When entity changed");
      await setTableUUID(entity || `table-${getUUID()}`);
      // -- console.log("before dispatch entity=" + entity);
      // -- console.log("before dispatch tableUUID=" + tableUUID);
      dispatch({
        payload: {
          data  : { columns },
          entity: tableUUID,
          query : { maxRowInPage: maxRowsInPage },
        },
        type: READ_DATA_LOADING,
      });
    }
    callAsync();
  }, []);

  React.useEffect(() => {
    async function callAsync() {
      // -- console.log("When entity changed");
      await setTableUUID(entity || `table-${getUUID()}`);
    }
    callAsync();
  }, [entity]);

  /**
   * update form id based on
   */
  React.useEffect(() => {
    setDetailsPaneCreateFormID(createFormID || entity);
    setDetailsPaneUpdateFormID(updateFormID || entity);
    // -- set_showDetailsPane(false);
  }, [entity, updateFormID, createFormID]);

  React.useEffect(() => {
    dispatch({
      payload: {
        data  : { columns },
        entity: tableUUID,
        query : { maxRowInPage: maxRowsInPage },
      },
      type: READ_DATA_LOADING,
    });
  }, [tableUUID]);

  /**
   * update filtered columns when tableColumns have data
   */
  // -- React.useEffect(() => {
  //   setFilteredColumns(
  //     tableColumns?.filter((_col) => !auditColumnsKey.includes(_col.id)).map((_col) => _col.id),
  //   );
  // }, [tableColumns]);

  /**
   * only for log purpose of table store changes
   */
  React.useEffect(() => {
    // -- console.log("----------------TABLE PAGE = ",dataStore[entity]?.query?.page);
    // -- console.log("----------------TABLE STORE DATA = ", dataStore);
    // -- console.log("----------------TABLE STORE DATA FOR " + entity + " = ", dataStore[entity]);
  }, [entity, dataStore]);

  /**
   * log filtered columns and update column in store
   */
  // -- React.useEffect(() => {
  //   console.log("Filtered columns changed=", filteredColumns);
  //   // dispatch({
  //   //   type: UPDATE_COLUMNS_DATA,
  //   //   payload: { entity, filteredColumns },
  //   // });
  // }, [filteredColumns]);

  /**
   * log filter values and update filter values in store
   */
  React.useEffect(() => {
    // -- console.log("Filtered values changed=", filterValues);
    dispatch({
      payload: { entity, filterValues },
      type   : UPDATE_FILTER_DATA,
    });
  }, [filterValues]);

  /**
   * call (api response / static data) on store based on entity loading
   */
  React.useEffect(() => {
    if (loading) {
      if (serverSide && (entity || api)) {
        if (
          data?.totalRecords === 0 ||
          data?.rows?.length < data?.totalRecords ||
          filtering
        ) {
          // -- console.log(`data?.rows?.length <= data?.totalRecords=${data?.rows?.length <= data?.totalRecords}`);
          let _endpoint = api || "/business/all/" + entity;

          dispatch(
            apiRequestAction(
              HTTP.GET,
              _endpoint,
              true,
              prepareTableAPIQuery(
                filtering,
                query,
                filterQuery,
                data?.totalRecords
              ),
              _read?.successType || READ_DATA_SUCCESS,
              _read?.errorType || READ_DATA_ERROR,
              null,
              false,
              null,
              null,
              false,
              { entity: tableUUID }
            )
          );
        } else {
          // do nothing for now
        }
      } else {
        dispatch({
          payload: {
            data: {
              columns     : columns,
              rows,
              totalRecords: rows.length,
            },
            entity: tableUUID,
          },
          type: READ_DATA_SUCCESS,
        });
      }
    }
  }, [loading]);

  React.useEffect(() => {
    // -- console.log("Use Effect Page=" + page);
  }, [page]);

  // -- console.log("Page=" + page);

  const [tableColumnsToShow, setTableColumnsToShow] = React.useState([]);

  React.useEffect(() => {
    if (!tableColumnsToShow || tableColumnsToShow?.length === 0) {
      let lastProcessedPriority = DATA_TABLE_CONST.LOWEST_PRIORITY;
      let usedColumnIds = [];

      DATA_TABLE_CONST.DEFAULT_COLUMNS_IDS.sort(
        (firstCol, secondCol) =>
          firstCol.priority - secondCol.priority ||
          firstCol.order - secondCol.order
      // eslint-disable-next-line no-unused-vars
      ).forEach((defaultCol, index) => {
        if (defaultCol.priority > lastProcessedPriority) {
          // eslint-disable-next-line no-unused-vars
          tableColumns.forEach((tableColumn, index) => {
            if (tableColumn.id === defaultCol.id) {
              // tableColumn has defaultColumn
              if (usedColumnIds.includes(defaultCol.id) === false) {
                // tableColumn is not used yet
                // setTableColumnsToShow([...tableColumnsToShow, tableColumn.id]);
                usedColumnIds.push(defaultCol.id);
                lastProcessedPriority = defaultCol.priority;
              }
            } else {
              /**
               * @todo to check if it is needed to prepare tableColumnsToShow
               *       based on availability of defaultCol.id in rowData
               */
            }
          });
        }
      });

      if (usedColumnIds && usedColumnIds?.length > 0) {
        setTableColumnsToShow([...usedColumnIds]);
      } else {
        setTableColumnsToShow(tableColumns?.slice(0, 5));
      }
    }
  }, [tableColumns, data]);

  /* -- React.useEffect(() => {
    console.log("---------------------tableColumnsToShow---------------------");
    console.log(tableColumnsToShow);
    console.log("------------------------------------------------------------");
  }, [tableColumnsToShow]); */

  // change of default filter
  const [_filterQuery, set_filterQuery] = React.useState({
    filter: {},
    order : {},
  });

  React.useEffect(() => {
    set_filterQuery(filterQuery);
    if(openCreateOnMount){
      setDetailedRowId(null);
      setDetailedRowData(null);
      set_showDetailsPane(true);
    }
  }, []);
  React.useEffect(() => {
    if (compareObject(filterQuery, _filterQuery)) {
      set_filterQuery(filterQuery);
    }
  }, [filterQuery]);

  /* -- React.useEffect(() => {
    console.log("PROPS CHANGE.............................");
    console.log(props);
    console.log(".........................................");
  }, [props]); */

  /* -- React.useEffect(() => {
    // filterData();
  }, [_filterQuery]); */

  return (
    <>
      <CoreGrid
        coreId="sam-data-table-container"
        // styleClasses={[CoreClasses.DATA_TABLE.DATA_TABLE_CONTAINER]}
      >
        {showToolbar && (
          <CoreDataTableToolbar
            coreId="sam-data-table-toolbar"
            gridProps={{
              gridSize    : 12,
              styleClasses: [CoreClasses.DATA_TABLE.DATA_TABLE_TOOLBAR_CONTAINER],
            }}
            styleClasses={[CoreClasses.DATA_TABLE.DATA_TABLE_TOOLBAR]}
            tableUUID={tableUUID}
            tableColumns={tableColumns}
            // table density
            tableDensity={tableDensity}
            setTableDensity={setTableDensity}
            // table columns filter
            // filteredColumns={filteredColumns}
            // setFilteredColumns={setFilteredColumns}
            // audit columns data
            auditColumnsKey={auditColumnsKey}
            showAuditColumns={showAuditColumns}
            setShowAuditColumns={setShowAuditColumns}
            // sortable
            sortable={sortable}
            order={query?._order}
            onRequestSort={handleRequestSort}
            // select param
            selectable={selectable}
            selected={selected}
            searchable={searchable}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            filterData={filterData}
            clearFilterData={clearFilterData}
            showToolbar={showToolbar}
            enableColumnFilter={enableColumnFilter}
            enableDataFilter={enableDataFilter}
            enableTableDensity={enableTableDensity}
            enableExport={enableExport}
            enableSorting={enableSorting}
            _showDetailsPane={_showDetailsPane}
            set_showDetailsPane={set_showDetailsPane}
            setDetailedRowId={setDetailedRowId}
            setDetailedRowData={setDetailedRowData}
            enableCreateEntity={enableCreateEntity}
            createEntityButtonText={createEntityButtonText}
            // --------Pagination--------
            data={data}
            page={page}
            maxRowInPage={maxRowInPage}
            setPage={setPage}
            setMaxRowInPage={setMaxRowInPage}
            preOnCreate={preOnCreate}
          />
        )}

        <CoreTable
          gridProps={{
            gridSize: {
              sm:
                enableDetailsPane && _showDetailsPane
                  ? __TableLeftPanelGridSize
                  : 12,
            },
            styleClasses: [
              enableDetailsPane && _showDetailsPane
                ? CoreClasses.DATA_TABLE.DATA_TABLE_MINI_WIDTH_PANE
                : CoreClasses.DATA_TABLE.DATA_TABLE_FULL_WIDTH_PANE,
            ],
          }}
          // styleClasses={[CoreClasses.DATA_TABLE.DATA_TABLE]}
          // stickyHeader
          hover={rowHover}
          coreId={tableUUID}
          size={getTableDensityValue(tableDensity)}
          sx={{ padding: getTableDensityPaddingValue(tableDensity) }}
          {...props.tableProps}
        >
          <CoreDataTableHead
            tableHeadProps={{
              ...tableHeadProps,
              styleClasses: [CoreClasses.POSITION.STICKY_TOP, CoreClasses.DATA_TABLE.DATA_TABLE_HEAD, !_showDetailsPane && CoreClasses.DATA_TABLE.DATA_TABLE_HEAD_TOP],
            }}
            tableUUID={tableUUID}
            tableColumnsShown={tableColumnsShown}
            tableColumnsToShow={tableColumnsToShow}
            selectable={selectable}
            rows={tableData}
            columns={tableColumns}
            showAuditColumns={showAuditColumns}
            auditColumnsKey={auditColumnsKey}
            tableActions={rowActions}
            // sortable
            sortable={sortable}
            order={query?._order}
            onRequestSort={handleRequestSort}
            selected={selected}
            handleRowSelectAll={handleRowSelectAll}
            enableDetailsPane={enableDetailsPane}
            _showDetailsPane={_showDetailsPane}
          />

          <CoreDataTableBody
            {...props.tableBodyProps}
            tableUUID={tableUUID}
            tableColumnsShown={tableColumnsShown}
            hover={rowHover}
            tableColumns={tableColumns}
            tableColumnsToShow={tableColumnsToShow}
            tableData={tableData}
            tableActions={rowActions}
            query={query}
            order={query?._order}
            editable={editable}
            deletable={deletable}
            auditColumnsKey={auditColumnsKey}
            showAuditColumns={showAuditColumns}
            selectable={selectable}
            selected={selected}
            handleRowSelect={handleRowSelect}
            enableDetailsPane={enableDetailsPane}
            _showDetailsPane={_showDetailsPane}
            set_showDetailsPane={set_showDetailsPane}
            summaryRendererComponent={summaryRendererComponent}
            detailedRowId={detailedRowId}
            setDetailedRowId={setDetailedRowId}
            setDetailedRowData={setDetailedRowData}
            setFormMode={setFormMode}
            enableCreateEntity={enableCreateEntity}
            createEntityButtonText={createEntityButtonText}
            //reuired in mobile as pagination happens in infinte scroll
            setPage={setPage}
            page={page}
          />
        </CoreTable>

        {enableDetailsPane && _showDetailsPane && (
          <CoreDataTableDetailsPane
            gridProps={{ gridSize: { sm: __TableRightPanelGridSize } }}
            tableUUID={tableUUID}
            createFormID={detailsPaneCreateFormID}
            updateFormID={detailsPaneUpdateFormID}
            hideForm={hideForm}
            hideCreateForm={hideCreateForm}
            hideUpdateForm={hideUpdateForm}
            formState={form}
            formMode={formMode}
            setFormMode={setFormMode}
            editable={editable}
            deletable={deletable}
            setDetailedRowId={setDetailedRowId}
            setDetailedRowData={setDetailedRowData}
            detailedRowId={detailedRowId}
            detailedRowData={detailedRowData}
            rowActions={rowActions}
            tableColumns={tableColumns}
            filterData={filterData}
            enableCreateEntity={enableCreateEntity}
            createEntityButtonText={createEntityButtonText}
            set_showDetailsPane={set_showDetailsPane}
            preRenderDetailsPaneComponent={preRenderDetailsPaneComponent}
            postRenderDetailsPaneComponent={postRenderDetailsPaneComponent}
            preRender_CreateData_DetailsPaneComponent={
              preRender_CreateData_DetailsPaneComponent
            }
            postRender_CreateData_DetailsPaneComponent={
              postRender_CreateData_DetailsPaneComponent
            }
            preRender_UpdateData_DetailsPaneComponent={
              preRender_UpdateData_DetailsPaneComponent
            }
            postRender_UpdateData_DetailsPaneComponent={
              postRender_UpdateData_DetailsPaneComponent
            }
            _expandedDevJSONSchema={_expandedDevJSONSchema}
            set_expandedDevJSONSchema={set_expandedDevJSONSchema}
            _showDetailsPane={_showDetailsPane}
            afterEditSuccess={afterEditSuccess}
            afterEditError={afterEditError}
            afterCreateSuccess={afterCreateSuccess}
            afterCreateError={afterCreateError}
            afterDeleteSuccess={afterDeleteSuccess}
            afterDeleteError={afterDeleteError}
            hideAuditDataDetailPane={hideAuditDataDetailPane}
            platform={platform}
          />
        )}
      </CoreGrid>
    </>
  );
}
