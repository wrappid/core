import React from "react";
import { DATA_TABLE_CONST } from "../../config/dataTableConstants";
import { NativeTablePagination } from "@wrappid/styled-components";

export default function CoreTablePagination(props) {
  return (
    <NativeTablePagination
      component={"div"}
      labelRowsPerPage="" // make it clean
      rowsPerPageOptions={DATA_TABLE_CONST.ROWS_PER_PAGE_OPTIONS}
      {...props}
    />
  );
}
