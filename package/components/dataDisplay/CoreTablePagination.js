// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeTablePagination } from "@wrappid/native";

import { DATA_TABLE_CONST } from "../../config/dataTableConstants";

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
