import { getLabel } from "./stringUtils";
import { __EntityStatus, __TableDensity } from "../config/constants";
import { DATA_TABLE_CONST } from "../config/dataTableConstants";
import CoreClasses from "../styles/CoreClasses";

export const __TableLeftPanelGridSize = 4;
export const __TableRightPanelGridSize = 8;
export const isStringsArray = (arr) => arr.every((i) => typeof i === "string");

export const getStatusColor = (status) => {
  switch (status) {
    case __EntityStatus.ACTIVE:
      return "success";

    case __EntityStatus.INACTIVE:
      return "warning";

    case __EntityStatus.DELETED:
      return "error";

    default:
      return "secondary";
  }
};

/**
 * Prepare data table query for api request query param
 */
export const prepareTableAPIQuery = (
  notifyFilterChange,
  query = {
    _filter     : {},
    _order      : {},
    _searchValue: "",
    currentRows : 0,
    maxRowInPage: DATA_TABLE_CONST.MAX_ROWS_IN_PAGE,
    page        : 0,
    pagesToCache: DATA_TABLE_CONST.PAGES_TO_CACHE,
  },
  filterQuery = {
    filter: {},
    order : {},
  },
  // eslint-disable-next-line no-unused-vars
  totalRecords = 0
) => {
  const {
    currentRows = 0,
    // eslint-disable-next-line no-unused-vars
    page = 0,
    maxRowInPage = DATA_TABLE_CONST.MAX_ROWS_IN_PAGE,
    pagesToCache = DATA_TABLE_CONST.PAGES_TO_CACHE,
    _order = {},
    // eslint-disable-next-line no-unused-vars
    _filter = {},
    _searchValue = "",
  } = query;
  // eslint-disable-next-line no-unused-vars
  const { order = {}, filter = {} } = filterQuery;

  let offset = notifyFilterChange ? 0 : currentRows;
  let limit = maxRowInPage * pagesToCache;
  // -- if (totalRecords !== 0 && Math.trunc(totalRecords / maxRowInPage) === page) {
  //   // limit = totalRecords - offset;
  //   offset = totalRecords - limit;
  // }

  let _query = {
    
    _defaultFilter: "",

    _filter: "",

    _order: "",

    _searchValue: "",

    limit : limit,
    // --start: filtering ? 0 : currentRows || 0,
    // length: maxRowInPage * pagesToCache,
    offset: offset,
  };

  // -- if (filtering) {
  //   Object.keys(filter).forEach((eachFilter) => {
  //     // -- console.log("Each Filter" + eachFilter);
  //     _query[eachFilter.toString()] = filter[eachFilter];
  //   });
  // }

  let orderOb = {};

  if (_order) {
    Object.keys(_order).forEach((eachOrder) => {
      // -- console.log("Each order" + eachOrder);
      orderOb[eachOrder.toString()] = _order[eachOrder];
    });
  }
  if (orderOb && Object.keys(orderOb).length > 0) {
    // -- console.log("------------------------------------");
    // -- console.log(encodeURIComponent(JSON.stringify(orderOb)));
    // -- console.log("------------------------------------");
    _query._order = encodeURIComponent(JSON.stringify(orderOb));
  }

  let filterOb = {};

  if (filterQuery?.filter) {
    Object.keys(filterQuery?.filter).forEach((eachFilter) => {
      // -- console.log("Each Filter" + eachFilter);
      filterOb[eachFilter.toString()] = filterQuery?.filter[eachFilter];
    });
  }
  if (filterOb && Object.keys(filterOb).length > 0) {
    // -- console.log("------------------------------------");
    // -- console.log(encodeURIComponent(JSON.stringify(filterOb)));
    // -- console.log("------------------------------------");
    _query._defaultFilter = encodeURIComponent(JSON.stringify(filterOb));
  }

  if (_searchValue && _searchValue !== "") {
    _query._searchValue = _searchValue;
  }

  return _query;
};

/**
 * Conditions
 * if entityState data columns exist
 *    // return state.columns
 * else if data columns exist
 *   // return prepared columns from data columns
 * else if data rows exist
 *   // return prepared columns from data rows object keys
 * else
 *   // return empty array
 *
 * @param {*} entityStateData
 * @param {*} data
 * @returns
 */
export const prepareColumns = (entityStateData, data) => {
  if (
    entityStateData &&
    entityStateData?.columns &&
    Array.isArray(entityStateData?.columns) &&
    entityStateData?.columns?.length > 0
  ) {
    return entityStateData.columns;
  } else if (
    data &&
    data.columns &&
    Array.isArray(data.columns) &&
    data.columns.length > 0
  ) {
    return prepareColumnsObject(data.columns);
  } else if (
    data &&
    data.rows &&
    Array.isArray(data.rows) &&
    data.rows.length > 0
  ) {
    return prepareColumnsObjectFromTableData(data.rows);
  } else {
    return [];
  }
};

/**
 *
 * @param {*} tableData
 * @returns
 */
function prepareColumnsObjectFromTableData(tableData = []) {
  return prepareColumnsObject(
    tableData && tableData.length > 0 ? Object.keys(tableData[0]) : []
  );
}

/**
 * This util function help you to get
 *
 * @param {*} columns
 * @returns
 */
function prepareColumnsObject(columns = []) {
  // -- console.log(`prepareColumnsObject = ${columns}`);
  if (columns && Array.isArray(columns) && columns.length > 0) {
    if (typeof columns[0] === "string") {
      return columns.map((col) => {
        return { id: col, label: getLabel(col) };
      });
    } else {
      return columns;
    }
  } else {
    return [];
  }
}

export function descendingComparator(firstObj, secondObj, orderBy) {
  if (secondObj[orderBy] < firstObj[orderBy]) {
    return -1;
  }
  if (secondObj[orderBy] > firstObj[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator(order, orderBy) {
  return order === "desc"
    ? (firstObj, secondObj) => descendingComparator(firstObj, secondObj, orderBy)
    : (firstObj, secondObj) => -descendingComparator(firstObj, secondObj, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
// this is a local sort functionality
export function stableSort(array, comparator) {
  const stabilizedThis = array.map((elem, index) => [elem, index]);

  stabilizedThis.sort((firstObj, secondObj) => {
    const order = comparator(firstObj[0], secondObj[0]);

    if (order !== 0) {
      return order;
    }
    return firstObj[1] - secondObj[1];
  });
  return stabilizedThis.map((elem) => elem[0]);
}

export function filterProcessing(tableFilters) {
  let filters = Object.keys(tableFilters);
  let filterOb = {};

  for (let i = 0; i < filters.length; i++) {
    filterOb[filters[i]] = tableFilters[filters[i]].filter;
  }

  return filterOb;
}

/**
 * renderer methods
 */
export const getTableDensityIconName = (tableDensity) => {
  switch (tableDensity) {
    case __TableDensity.COMFORTABLE:
      return "density_large";

    case __TableDensity.STANDARD:
      return "density_medium";

    case __TableDensity.COMPACT:
      return "density_small";

    default:
      return "density_small";
  }
};
export const getTableDensityPaddingValue = (tableDensity) => {
  switch (tableDensity) {
    case __TableDensity.COMFORTABLE:
      return "16px 0px";

    case __TableDensity.STANDARD:
      return "8px 0px";

    case __TableDensity.COMPACT:
      return "6px 0px";

    default:
      return "6px 0px";
  }
};

export const getTableDensityValue = (tableDensity) => {
  switch (tableDensity) {
    case __TableDensity.COMFORTABLE:
      return "medium";

    case __TableDensity.STANDARD:
      return "medium";

    case __TableDensity.COMPACT:
      return "small";

    default:
      return "small";
  }
};

export const getStatusTextColorClass = (status) => {
  // --DEFAULT: "active", - secondary
  // UNKNOWN: "unknown", - secondary
  // NEW: "new", - info
  // ACTIVE: "active", - success
  // INACTIVE: "inactive", - warning
  // DELETED: "deleted", - error

  switch (status) {
    case __EntityStatus.NEW:
      return CoreClasses.COLOR.TEXT_INFO;

    case __EntityStatus.DRAFT:
      return CoreClasses.COLOR.TEXT_INFO;

    case __EntityStatus.ACTIVE:
      return CoreClasses.COLOR.TEXT_SUCCESS;

    case __EntityStatus.APPROVED:
      return CoreClasses.COLOR.TEXT_SUCCESS;

    case __EntityStatus.PUBLISHED:
      return CoreClasses.COLOR.TEXT_PRIMARY;

    case __EntityStatus.INACTIVE:
      return CoreClasses.COLOR.TEXT_WARNING;

    case __EntityStatus.CHANGE_REQUESTED:
      return CoreClasses.COLOR.TEXT_WARNING;

    case __EntityStatus.REVIEW_REQUESTED:
      return CoreClasses.COLOR.TEXT_WARNING;

    case __EntityStatus.DELETED:
      return CoreClasses.COLOR.TEXT_ERROR;

    case __EntityStatus.REJECTED:
      return CoreClasses.COLOR.TEXT_ERROR;

    default:
      return CoreClasses.COLOR.TEXT_SECONDARY;
  }
};

/**
 * Priority specific data
 *
 */
export const setPriorityBasedData = (
  rowData,
  tableColumn,
  defaultCol,
  setIdData,
  setHasId,
  setStatusData,
  setHasStatus,
  imageData,
  setImageData,
  setHasImage,
  setPriority1Data,
  setPriority2Data,
  setPriority3Data,
  setPriority4Data,
  setPriority5Data
) => {
  switch (defaultCol.priority) {
    case -2: {
      let tmpIdData = prepareData(rowData, tableColumn, defaultCol);

      setIdData(tmpIdData);
      setHasId(tmpIdData?.data ? true : false);
      break;
    }
      
    case -1: {
      let tmpStatusData = prepareData(rowData, tableColumn, defaultCol);

      setStatusData(tmpStatusData);
      setHasStatus(tmpStatusData ? true : false);
      break;
    }

    case 0:
      setImageData(prepareData(rowData, tableColumn, defaultCol, true));
      setHasImage(imageData ? true : false);
      break;

    case 1:
      setPriority1Data(prepareData(rowData, tableColumn, defaultCol));
      // -- hasPriority1 = priority1Data ? true : false;
      break;

    case 2:
      setPriority2Data(prepareData(rowData, tableColumn, defaultCol));
      // -- hasPriority2 = priority2Data ? true : false;
      break;

    case 3:
      setPriority3Data(prepareData(rowData, tableColumn, defaultCol));
      // -- hasPriority3 = priority3Data ? true : false;
      break;

    case 4:
      setPriority4Data(prepareData(rowData, tableColumn, defaultCol));
      // -- hasPriority4 = priority4Data ? true : false;
      break;

    case 5:
      setPriority5Data(prepareData(rowData, tableColumn, defaultCol));
      // -- hasPriority5 = priority5Data ? true : false;
      break;

    default:
      break;
  }
};
export const prepareData = (
  rowData,
  tableColumn,
  defaultCol,
  allowDefaultValue
) => {
  return rowData[tableColumn.id]
    ? {
      column: { ...tableColumn, priority: defaultCol.priority },
      data  : getData(rowData, tableColumn),
    }
    : allowDefaultValue
      ? {
        column: { ...tableColumn, priority: defaultCol.priority },
        data  : DATA_TABLE_CONST.DEFAULT_DATA[defaultCol.priority],
      }
      : null;
};

export const getColumnLabel = (column) => {
  return column?.label
    ? column.label + ": "
    : column?.id
      ? column?.id.toUpperCase() + ": "
      : "";
};
export const getData = (rowData, columnData) => {
  // > tableColumnsToShow[2] && rowData[tableColumnsToShow[2]?.id];
  return columnData?.type === "BOOLEAN"
    ? rowData[columnData?.id] === true
      ? "True"
      : "False"
    : rowData[columnData?.id] || "No data";
};
