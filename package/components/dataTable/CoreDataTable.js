import * as React from "react";
import CoreTable from "../dataDisplay/CoreTable";
import CoreDataTableHead from "./CoreDataTableHead";
import { useDispatch, useSelector } from "react-redux";
import { apiRequestAction } from "../../store/action/appActions";
import {
  HTTP_GET,
  HTTP_POST,
  userSettingsConstants,
  __TableDensity,
} from "../../config/constants";
import { getUUID } from "../../utils/appUtils";
import {
  getTableDensityPaddingValue,
  getTableDensityValue,
  prepareTableAPIQuery,
  __TableLeftPanelGridSize,
  __TableRightPanelGridSize,
} from "../../utils/tableUtils";
import CoreDataTableBody from "./CoreDataTableBody";
import {
  READ_DATA_ERROR,
  READ_DATA_LOADING,
  READ_DATA_SUCCESS,
  UPDATE_FILTER_DATA,
  UPDATE_QUERY_ORDER_DATA,
  UPDATE_QUERY_SEARCH_VALUE_DATA,
} from "../../store/types/dataManagementTypes";
import CoreDataTableToolbar from "./CoreDataTableToolbar";
import CoreGrid from "../layouts/CoreGrid";
import { FORM_VIEW_MODE } from "../forms/coreFormConstants";
import { FORM_INIT_UPDATE } from "../../store/types/formTypes";
import CoreDataTableDetailsPane from "./CoreDataTableDetailsPane";
import { DATA_TABLE_CONST } from "../../config/dataTableConstants";
import { UPDATE_USER_SETTINGS } from "../../config/api";
import {
  USER_SETTINGS_UPDATE_ERROR,
  USER_SETTINGS_UPDATE_SUCCESS,
} from "../../store/types/settingsTypes";
import { compareObject } from "../../utils/objectUtils";
import CoreClasses from "../../styles/CoreClasses";

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

  // table column shown = 5
  const tableColumnsShown = 5;
  /* get data table props and structure in a constant */
  const {
    // server driven props
    serverSide = DATA_TABLE_CONST.SERVER_SIDE, // server driven [default: true]
    entity = null, // data store entity name must be unique [default: null]
    filterQuery = {
      filter: {}, // this filter automatically applied on the API query
      order: {}, // this order automatically applied on the API query
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
    createFormID = null,
    updateFormID = null,
    // table props
    tableHeadProps,
  } = props;

  const { _create = {}, _read = {}, _update = {}, _delete = {} } = reduxType;

  // User Settings
  const userSettings = useSelector((state) => state.settings.userSettings);
  React.useEffect(() => {
    // details pane
    if (
      userSettings.hasOwnProperty(
        userSettingsConstants?.DATA_TABLE_DETAILS_PANE
      )
    ) {
      let open = userSettings[userSettingsConstants?.DATA_TABLE_DETAILS_PANE];
      // show details pane
      _set_showDetailsPane(open);
      if (open) {
        /* if (enableCreateEntity) {
          setDetailedRowId(null);
          setDetailedRowData(null);
        } else {
        } */
        if (!detailedRowId && tableData && tableData?.length > 0) {
          setDetailedRowId(tableData[0]?.id);
          setDetailedRowData(tableData[0]);
        }
      }
    }
    //max row in page
    if (userSettings.hasOwnProperty(userSettingsConstants?.MAX_ROWS_IN_PAGE)) {
      setMaxRowsInPage(userSettings[userSettingsConstants?.MAX_ROWS_IN_PAGE]);
    }
  }, []);

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
        type: FORM_INIT_UPDATE,
        payload: {
          formId: detailsPaneUpdateFormID,
          data: {
            data: detailedRowData,
          },
        },
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
    success = false,
    error = false,
    data = {
      columns: columns || [],
      rows: rows || [],
      totalRecords: (rows && rows.length) || 0,
    },
    form = {
      create: {
        loading: false,
        success: false,
        error: false,
      },
      update: {
        loading: false,
        success: false,
        error: false,
      },
      delete: {
        loading: false,
        success: false,
        error: false,
      },
    },
    query = {
      currentRows: (rows && rows.length) || 0,
      page: 0,
      maxRowInPage: DATA_TABLE_CONST.MAX_ROWS_IN_PAGE,
      pagesToCache: pagesToCache,
      _order: {},
      _filter: {},
      _searchValue: "",
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
    userSettings[userSettingsConstants.DATA_TABLE_DETAILS_PANE] || false
  );
  const set_showDetailsPane = (open) => {
    _set_showDetailsPane(open);
    dispatch(
      apiRequestAction(
        HTTP_POST,
        UPDATE_USER_SETTINGS,
        true,
        {
          name: userSettingsConstants.DATA_TABLE_DETAILS_PANE,
          value: open,
        },
        USER_SETTINGS_UPDATE_SUCCESS,
        USER_SETTINGS_UPDATE_ERROR
      )
    );
  };

  /**
   * handle sortable request
   */
  const handleRequestSort = (event, column, order = "asc") => {
    /**
     * @todo
     * check what we found on event
     */
    console.log(`event.ctrlKey= ${event.ctrlKey}`);
    let tmpOrder = query?._order;
    if (event.ctrlKey) {
      tmpOrder = { ...tmpOrder, [column]: order };
    } else {
      tmpOrder = { [column]: order };
    }

    dispatch({
      type: UPDATE_QUERY_ORDER_DATA,
      payload: {
        entity: entity,
        order: tmpOrder,
      },
    });
  };

  /**
   * Handle search value
   */
  const filterData = () => {
    dispatch({
      type: UPDATE_QUERY_SEARCH_VALUE_DATA,
      payload: {
        entity: tableUUID,
        searchValue: searchValue,
      },
    });
  };
  const clearFilterData = () => {
    dispatch({
      type: UPDATE_QUERY_SEARCH_VALUE_DATA,
      payload: {
        entity: tableUUID,
        searchValue: "",
      },
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
      const newSelected = tableData.map((td) => td.id);
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
      let _tempSelected = selected.filter((_s) => {
        return _s !== rowIndex;
      });
      setSelected(_tempSelected);
    }
  };

  /**
   * Create basic entity in data store
   */
  React.useEffect(() => {
    async function callAsync() {
      console.log("When entity changed");
      await setTableUUID(entity || `table-${getUUID()}`);
      console.log("before dispatch entity=" + entity);
      console.log("before dispatch tableUUID=" + tableUUID);
      dispatch({
        type: READ_DATA_LOADING,
        payload: {
          entity: tableUUID,
          data: { columns },
          query: { maxRowInPage: maxRowsInPage },
        },
      });
    }
    callAsync();
  }, []);

  React.useEffect(() => {
    async function callAsync() {
      console.log("When entity changed");
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
    // set_showDetailsPane(false);
  }, [entity, updateFormID, createFormID]);

  React.useEffect(() => {
    dispatch({
      type: READ_DATA_LOADING,
      payload: {
        entity: tableUUID,
        data: { columns },
        query: { maxRowInPage: maxRowsInPage },
      },
    });
  }, [tableUUID]);

  /**
   * update filtered columns when tableColumns have data
   */
  // React.useEffect(() => {
  //   setFilteredColumns(
  //     tableColumns?.filter((_col) => !auditColumnsKey.includes(_col.id)).map((_col) => _col.id),
  //   );
  // }, [tableColumns]);

  /**
   * only for log purpose of table store changes
   */
  React.useEffect(() => {
    console.log(
      "----------------TABLE PAGE = ",
      dataStore[entity]?.query?.page
    );
    console.log("----------------TABLE STORE DATA = ", dataStore);
    console.log(
      "----------------TABLE STORE DATA FOR " + entity + " = ",
      dataStore[entity]
    );
  }, [entity, dataStore]);

  /**
   * log filtered columns and update column in store
   */
  // React.useEffect(() => {
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
    console.log("Filtered values changed=", filterValues);
    dispatch({
      type: UPDATE_FILTER_DATA,
      payload: { entity, filterValues },
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
          console.log(
            `data?.rows?.length <= data?.totalRecords=${
              data?.rows?.length <= data?.totalRecords
            }`
          );
          let _endpoint = api || "/business/all/" + entity;
          dispatch(
            apiRequestAction(
              HTTP_GET,
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
        }
      } else {
        dispatch({
          type: READ_DATA_SUCCESS,
          payload: {
            entity: tableUUID,
            data: {
              rows,
              columns: columns,
              totalRecords: rows.length,
            },
          },
        });
      }
    }
  }, [loading]);

  React.useEffect(() => {
    console.log("Use Effect Page=" + page);
  }, [page]);

  console.log("Page=" + page);

  const [tableColumnsToShow, setTableColumnsToShow] = React.useState([]);
  React.useEffect(() => {
    if (!tableColumnsToShow || tableColumnsToShow?.length === 0) {
      let lastProcessedPriority = DATA_TABLE_CONST.LOWEST_PRIORITY;
      let usedColumnIds = [];
      DATA_TABLE_CONST.DEFAULT_COLUMNS_IDS.sort(
        (firstCol, secondCol) =>
          firstCol.priority - secondCol.priority ||
          firstCol.order - secondCol.order
      ).forEach((defaultCol, index) => {
        if (defaultCol.priority > lastProcessedPriority) {
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

  React.useEffect(() => {
    console.log("---------------------tableColumnsToShow---------------------");
    console.log(tableColumnsToShow);
    console.log("------------------------------------------------------------");
  }, [tableColumnsToShow]);

  // change of default filter
  const [_filterQuery, set_filterQuery] = React.useState({
    filter: {},
    order: {},
  });
  React.useEffect(() => {
    set_filterQuery(filterQuery);
  }, []);
  React.useEffect(() => {
    if (compareObject(filterQuery, _filterQuery)) {
      set_filterQuery(filterQuery);
    }
  }, [filterQuery]);

  React.useEffect(() => {
    console.log("PROPS CHANGE.............................");
    console.log(props);
    console.log(".........................................");
  }, [props]);

  React.useEffect(() => {
    // filterData();
  }, [_filterQuery]);

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
              gridSize: 12,
              // styleClasses: [
              //   CoreClasses.DATA_TABLE.DATA_TABLE_TOOLBAR_CONTAINER,
              // ],
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
            // styleClasses: [
            //   enableDetailsPane && _showDetailsPane
            //     ? CoreClasses.DATA_TABLE.DATA_TABLE_MINI_WIDTH_PANE
            //     : CoreClasses.DATA_TABLE.DATA_TABLE_FULL_WIDTH_PANE,
            // ],
          }}
          // styleClasses={[CoreClasses.DATA_TABLE.DATA_TABLE]}
          // stickyHeader
          hover={rowHover}
          coreId={tableUUID}
          size={getTableDensityValue(tableDensity)}
          sx={{
            padding: getTableDensityPaddingValue(tableDensity),
          }}
          {...props.tableProps}
        >
          <CoreDataTableHead
            tableHeadProps={{
              ...tableHeadProps,
              // styleClasses: [
              //   // CoreClasses.POSITION.STICKY_TOP,
              //   CoreClasses.DATA_TABLE.DATA_TABLE_HEAD,
              //   _showDetailsPane
              //     ? ''
              //     : CoreClasses.DATA_TABLE.DATA_TABLE_HEAD_TOP,
              // ],
            }}
            tableUUID={tableUUID}
            tableColumnsShown={tableColumnsShown}
            tableColumnsToShow={tableColumnsToShow}
            selectable={selectable}
            rows={tableData}
            columns={tableColumns}
            // filteredColumns={filteredColumns}
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
            // filteredColumns={filteredColumns}
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
          />
        </CoreTable>
        {enableDetailsPane && _showDetailsPane && (
          <CoreDataTableDetailsPane
            gridProps={{ gridSize: { sm: __TableRightPanelGridSize } }}
            tableUUID={tableUUID}
            createFormID={detailsPaneCreateFormID}
            updateFormID={detailsPaneUpdateFormID}
            hideForm={hideForm}
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
            _expandedDevJSONSchema={_expandedDevJSONSchema}
            set_expandedDevJSONSchema={set_expandedDevJSONSchema}
          />
        )}
      </CoreGrid>
    </>
  );
}
